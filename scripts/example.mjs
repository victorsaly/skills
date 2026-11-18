// Why: dbtour's page shows the thing itself, not only pictures of it. This renders dbtour's own example of
// several databases (a made-up shop on SQL Server, and the Chinook and Northwind samples as SQLite files) with
// the released packages and nothing else, into public/dbtour/example/index.html: the one file `dbtour render`
// writes, carried as it is. Run `npm run example -- <version>` after a dbtour release and commit the file, so
// the build needs neither the network nor npx.
//
// `npm run example -- --from ../dbtour` renders with a checkout of dbtour instead, built (`npm run build`
// there): a look at what is not released yet. The record says so, and the page says it beside the version.
import { execFileSync } from 'node:child_process';
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2);
const from = args.includes('--from') ? args[args.indexOf('--from') + 1] : undefined;
if (args.includes('--from') && !from) {
  console.error('--from needs a folder: npm run example -- --from ../dbtour');
  process.exit(1);
}

const out = fileURLToPath(new URL('../public/dbtour/example/index.html', import.meta.url));
const record = fileURLToPath(new URL('../src/data/dbtour-example.json', import.meta.url));
// The example in dbtour's repository, and what render reads of it: the config, the notes, and the model
// already extracted, so no database is asked.
const example = 'examples/several';
const files = ['dbtour.yaml', 'dbtour.notes.yaml', 'docs/schema.json'];

/** The page a checkout of dbtour renders, and the version its packages carry. */
function fromCheckout(folder) {
  const checkout = resolve(folder);
  execFileSync(process.execPath, [join(checkout, 'packages/core/bin/dbtour.mjs'), 'render'], { cwd: join(checkout, example), stdio: 'inherit' });
  const { version } = JSON.parse(readFileSync(join(checkout, 'packages/core/package.json'), 'utf8'));
  return { html: readFileSync(join(checkout, example, 'docs/index.html'), 'utf8'), version, released: false };
}

/** The page the released packages render from the example at that release's tag. */
async function fromRelease(version) {
  if (!/^\d+\.\d+\.\d+$/.test(version ?? '')) throw new Error(`"${version}" is not a version: run npm run example -- 0.11.2, the dbtour release to render with`);
  const tag = `https://raw.githubusercontent.com/victorsaly/dbtour/v${version}/${example}`;
  const work = mkdtempSync(join(tmpdir(), 'dbtour-example-'));
  try {
    for (const file of files) {
      const response = await fetch(`${tag}/${file}`);
      if (!response.ok) throw new Error(`${tag}/${file} answered ${response.status}: ${example} came with dbtour 0.11.2, so name that release or a later one`);
      mkdirSync(dirname(join(work, file)), { recursive: true });
      writeFileSync(join(work, file), await response.text());
    }
    execFileSync('npx', ['-y', '-p', `dbtour@${version}`, '-p', `dbtour-addon-explorer@${version}`, 'dbtour', 'render'], { cwd: work, stdio: 'inherit' });
    return { html: readFileSync(join(work, 'docs/index.html'), 'utf8'), version, released: true };
  } finally {
    rmSync(work, { recursive: true, force: true });
  }
}

try {
  const { html, version, released } = from ? fromCheckout(from) : await fromRelease(args[0]);
  // One file with nothing beside it: a page that asked for a script or a font would break once it is moved.
  if (/<(script|link|img)[^>]+(src|href)="(?!data:)/.test(html)) throw new Error('the rendered page asks for another file; it must be whole on its own');
  mkdirSync(dirname(out), { recursive: true });
  mkdirSync(dirname(record), { recursive: true });
  writeFileSync(out, html);
  // The page names the release under the example, and reads it from here.
  writeFileSync(record, `${JSON.stringify({ version, released }, null, 2)}\n`);
  console.log(`public/dbtour/example/index.html: dbtour ${version}${released ? '' : ', not released'}, ${Math.round(html.length / 1024)} kB`);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
