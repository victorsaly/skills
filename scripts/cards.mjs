// Why: a shared link (LinkedIn, X, Slack) shows a picture only when the page names one. This draws each page's
// 1200×630 share card from HTML in the site's own style, using the real before/after pictures, into public/og/.
// Run `npm run cards` after changing a card; the PNGs are committed so the build needs no browser.
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const asset = (path) => `data:image/png;base64,${readFileSync(`${root}public/${path}`).toString('base64')}`;
const font = (pkg, file) =>
  `data:font/woff2;base64,${readFileSync(`${root}node_modules/@fontsource-variable/${pkg}/files/${file}`).toString('base64')}`;

const base = `<style>
  @font-face { font-family: 'Next'; src: url(${font('atkinson-hyperlegible-next', 'atkinson-hyperlegible-next-latin-wght-normal.woff2')}) format('woff2'); font-weight: 200 800; }
  @font-face { font-family: 'Mono'; src: url(${font('atkinson-hyperlegible-mono', 'atkinson-hyperlegible-mono-latin-wght-normal.woff2')}) format('woff2'); font-weight: 200 800; }
  * { box-sizing: border-box; margin: 0; }
  body { width: 1200px; height: 630px; background: #fff; color: #000; font-family: 'Next', sans-serif; overflow: hidden; }
  .mark { position: relative; width: 66px; height: 44px; flex: none; }
  .mark i { position: absolute; top: 0; width: 44px; height: 44px; }
  .mark .b { left: 0; background: #000; } .mark .a { left: 22px; background: #ffc400; mix-blend-mode: multiply; }
  .shot { text-decoration: underline; text-decoration-color: #ffc400; text-decoration-thickness: 0.17em; text-underline-offset: 0.06em; text-decoration-skip-ink: none; }
  .url { font-family: 'Mono', monospace; font-size: 24px; color: #525252; }
</style>`;

const cards = {
  sideshot: `${base}<style>
    body { display: grid; grid-template-columns: 560px 1fr; border-top: 14px solid #000; }
    .text { padding: 56px 0 48px 64px; display: flex; flex-direction: column; gap: 22px; }
    .brand { display: flex; align-items: center; gap: 18px; font-size: 64px; font-weight: 800; letter-spacing: -0.02em; }
    h1 { font-size: 46px; line-height: 1.12; font-weight: 800; letter-spacing: -0.02em; }
    p { font-size: 26px; line-height: 1.4; color: #333; }
    .url { margin-top: auto; }
    .pair { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; padding: 56px 56px 0 24px; }
    .col { display: flex; flex-direction: column; }
    .label { font-size: 20px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; padding-bottom: 8px; border-bottom: 3px solid #000; margin-bottom: 14px; }
    .label.after { box-shadow: inset 0 -10px 0 #ffc400; }
    .pic { height: 480px; border: 1px solid #cfcfcf; background-size: 100% auto; background-repeat: no-repeat; background-position: 0 -170px; }
  </style>
  <div class="text">
    <div class="brand"><span class="mark"><i class="b"></i><i class="a"></i></span><span>Side<span class="shot">Shot</span></span></div>
    <h1>Before-and-after screenshots of your UI change, in every pull request.</h1>
    <p>Desk and phone, light and dark. For Claude Code, Codex, Cursor and any coding agent.</p>
    <span class="url">skills.victorsaly.com/sideshot</span>
  </div>
  <div class="pair">
    <div class="col"><span class="label">Before</span><div class="pic" style="background-image:url(${asset('sideshot/pr151/gate-before-phone.png')})"></div></div>
    <div class="col"><span class="label after">After</span><div class="pic" style="background-image:url(${asset('sideshot/pr151/gate-after-phone.png')})"></div></div>
  </div>`,
  hub: `${base}<style>
    body { padding: 64px 72px 56px; display: flex; flex-direction: column; border-top: 14px solid #000; }
    .who { display: flex; align-items: center; gap: 14px; font-size: 30px; font-weight: 700; }
    .who i { width: 22px; height: 22px; background: #000; }
    .who span { font-size: 20px; letter-spacing: 0.14em; text-transform: uppercase; }
    h1 { margin-top: 40px; font-size: 84px; line-height: 1.02; font-weight: 800; letter-spacing: -0.03em; max-width: 15ch; }
    .row { margin-top: auto; padding-top: 24px; border-top: 8px solid #000; display: flex; align-items: center; justify-content: space-between; }
    .skill { display: flex; align-items: center; gap: 16px; font-size: 40px; font-weight: 800; }
    .skill small { font-size: 24px; font-weight: 400; color: #525252; margin-left: 10px; }
  </style>
  <div class="who"><i></i>Victor Saly <span>Skills</span></div>
  <h1>Agent skills for Claude Code, Codex and Cursor.</h1>
  <div class="row">
    <span class="skill"><span class="mark"><i class="b"></i><i class="a"></i></span><span>Side<span class="shot">Shot</span></span><small>before and after, for every PR</small></span>
    <span class="url">skills.victorsaly.com</span>
  </div>`,
};

const browser = await chromium.launch();
for (const [name, html] of Object.entries(cards)) {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.setContent(html, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `${root}public/og/${name}.png` });
  await page.close();
  console.info(`drew public/og/${name}.png`);
}
await browser.close();
