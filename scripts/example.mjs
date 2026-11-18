// Why: dbtour's page shows the thing itself, not only pictures of it. This renders dbtour's own example, a made-up
// shop of six tables, with the released packages and nothing else, into public/dbtour/example/index.html: the one
// file `dbtour render` writes, carried as it is. Run `npm run example` after a dbtour release and commit the
// file, so the build needs neither the network nor npx.
import { execFileSync } from 'node:child_process';
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The dbtour release the example is made with: its packages from npm, and examples/shop from that tag. Only a
// released version, so the page never shows what a reader cannot install.
const version = process.argv[2] ?? '0.11.1';
if (!/^\d+\.\d+\.\d+$/.test(version)) {
  console.error(`"${version}" is not a version: run npm run example -- 0.11.1`);
  process.exit(1);
}

const out = fileURLToPath(new URL('../public/dbtour/example/index.html', import.meta.url));
const record = fileURLToPath(new URL('../src/data/dbtour-example.json', import.meta.url));
const shop = `https://raw.githubusercontent.com/victorsaly/dbtour/v${version}/examples/shop`;
// What render reads: the config, the notes, and the model already extracted, so no database is asked.
const files = ['dbtour.yaml', 'dbtour.notes.yaml', 'docs/schema.json'];

const work = mkdtempSync(join(tmpdir(), 'dbtour-example-'));
try {
  for (const file of files) {
    const response = await fetch(`${shop}/${file}`);
    if (!response.ok) throw new Error(`${shop}/${file} answered ${response.status}: is v${version} a tag of victorsaly/dbtour?`);
    mkdirSync(dirname(join(work, file)), { recursive: true });
    writeFileSync(join(work, file), await response.text());
  }
  execFileSync('npx', ['-y', '-p', `dbtour@${version}`, '-p', `dbtour-addon-explorer@${version}`, 'dbtour', 'render'], { cwd: work, stdio: 'inherit' });
  const html = readFileSync(join(work, 'docs/index.html'), 'utf8');
  // One file with nothing beside it: a page that asked for a script or a font would break once it is moved.
  if (/<(script|link|img)[^>]+(src|href)="(?!data:)/.test(html)) throw new Error('the rendered page asks for another file; it must be whole on its own');
  mkdirSync(dirname(out), { recursive: true });
  mkdirSync(dirname(record), { recursive: true });
  copyFileSync(join(work, 'docs/index.html'), out);
  // The page names the release under the example, and reads it from here.
  writeFileSync(record, `${JSON.stringify({ version }, null, 2)}\n`);
  console.log(`public/dbtour/example/index.html: dbtour ${version}, ${Math.round(html.length / 1024)} kB`);
} finally {
  rmSync(work, { recursive: true, force: true });
}
