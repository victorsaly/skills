// Why: a shared link (LinkedIn, X, Slack) shows a picture only when the page names one. This draws each page's
// 1200×630 share card from HTML in the site's own style, using the real before/after pictures, into public/og/.
// Run `npm run cards` after changing a card; the PNGs are committed so the build needs no browser.
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const asset = (path) => `data:image/png;base64,${readFileSync(`${root}public/${path}`).toString('base64')}`;
const fontFile = (path) => `data:font/woff2;base64,${readFileSync(`${root}public/${path}`).toString('base64')}`;
// dbtour's mark, from its brand/mark.svg, in the ink of the card.
const dbtourMark = (size) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5.5" rx="8.5" ry="2.5"/><path d="M3.5,5.5 V18 A8.5,2.5 0 0 0 20.5,18 V5.5"/><polyline points="3.5,16 6.75,12 10.25,16 13.75,12 17.25,16 20.5,14"/></svg>`;
// Merlive's mark: two boxes on a straight line, and the dot that follows the path.
const merliveMark = (size) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24"><rect x="5" y="0" width="14" height="7"/><rect x="11" y="7" width="2" height="10"/><rect x="5" y="17" width="14" height="7"/><circle cx="12" cy="12" r="3.5" fill="#ffc400"/></svg>`;
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
    /* The phone pictures are the footer alone, wide and short, so before sits above after, each at its own height. */
    .pair { display: grid; gap: 16px; padding: 40px 56px 0 24px; align-content: start; justify-items: center; }
    .col { display: flex; flex-direction: column; width: 420px; }
    .label { font-size: 18px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; padding-bottom: 6px; border-bottom: 3px solid #000; margin-bottom: 10px; }
    .label.after { box-shadow: inset 0 -10px 0 #ffc400; }
    .pic { display: block; width: 100%; height: auto; border: 1px solid #cfcfcf; }
  </style>
  <div class="text">
    <div class="brand"><span class="mark"><i class="b"></i><i class="a"></i></span><span>Side<span class="shot">Shot</span></span></div>
    <h1>Before-and-after screenshots of your UI change, in every pull request.</h1>
    <p>The part that changed, ringed, on desk and phone. For Claude Code, Codex, Cursor and any coding agent.</p>
    <span class="url">skills.victorsaly.com/sideshot</span>
  </div>
  <div class="pair">
    <div class="col"><span class="label">Before</span><img class="pic" src="${asset('sideshot/pr3/footer-phone-before.png')}" alt=""></div>
    <div class="col"><span class="label after">After</span><img class="pic" src="${asset('sideshot/pr3/footer-phone-after.png')}" alt=""></div>
  </div>`,
  dbtour: `${base}<style>
    @font-face { font-family: 'Archivo'; src: url(${fontFile('dbtour/fonts/archivo-latin.woff2')}) format('woff2'); font-weight: 100 900; }
    @font-face { font-family: 'RedHat'; src: url(${fontFile('dbtour/fonts/red-hat-mono-latin.woff2')}) format('woff2'); font-weight: 300 700; }
    body { background: #0b0b0b; color: #f5f5f5; font-family: 'Archivo', sans-serif; display: grid; grid-template-columns: 520px 1fr; }
    .text { padding: 56px 0 48px 60px; display: flex; flex-direction: column; gap: 22px; }
    .eyebrow { font-family: 'RedHat', monospace; font-size: 22px; color: #a3a3a3; display: flex; align-items: center; gap: 12px; }
    .eyebrow i { width: 16px; height: 16px; background: #e2001a; } .eyebrow b { color: #e2001a; font-weight: 500; letter-spacing: 0.14em; }
    .brand { display: flex; align-items: center; gap: 18px; font-size: 76px; font-weight: 600; letter-spacing: -0.03em; }
    h1 { font-size: 38px; line-height: 1.16; font-weight: 600; letter-spacing: -0.01em; }
    p { font-size: 22px; line-height: 1.4; color: #a3a3a3; font-family: 'RedHat', monospace; letter-spacing: 0.1em; text-transform: uppercase; }
    .url { margin-top: auto; font-family: 'RedHat', monospace; color: #a3a3a3; }
    .still { padding: 48px 0 0 8px; overflow: hidden; }
    .still img { width: 900px; height: auto; border: 1px solid rgba(245,245,245,.22); }
  </style>
  <div class="text">
    <div class="eyebrow"><i></i><b>001</b> skills.</div>
    <div class="brand">${dbtourMark(64)}dbtour</div>
    <h1>Your database, documented where you work.</h1>
    <p>SQL Server · SQLite · MCP · MIT</p>
    <span class="url">skills.victorsaly.com/dbtour</span>
  </div>
  <div class="still"><img src="${asset('dbtour/stills/entry.png')}" alt=""></div>`,
  merlive: `${base}<style>
    body { display: grid; grid-template-columns: 560px 1fr; border-top: 14px solid #000; }
    .text { padding: 56px 0 48px 64px; display: flex; flex-direction: column; gap: 22px; }
    .brand { display: flex; align-items: center; gap: 18px; font-size: 64px; font-weight: 800; letter-spacing: -0.02em; }
    h1 { font-size: 46px; line-height: 1.12; font-weight: 800; letter-spacing: -0.02em; }
    p { font-size: 26px; line-height: 1.4; color: #333; }
    .url { margin-top: auto; }
    /* The two drawings are tall and narrow, so they stand side by side, each cut off by the card's edge. */
    .pair { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; padding: 40px 56px 0 24px; align-content: start; }
    .col { display: flex; flex-direction: column; }
    .label { font-size: 18px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; padding-bottom: 6px; border-bottom: 3px solid #000; margin-bottom: 10px; }
    .label.after { box-shadow: inset 0 -10px 0 #ffc400; }
    .pic { display: block; width: 100%; height: auto; border: 1px solid #cfcfcf; }
  </style>
  <div class="text">
    <div class="brand">${merliveMark(60)}<span>Mer<span class="shot">live</span></span></div>
    <h1>Your Mermaid flowcharts, placed by rule and made live.</h1>
    <p>The main path straight, boxes of one size, your own colours. For Claude Code, Codex, Cursor and any coding agent.</p>
    <span class="url">skills.victorsaly.com/merlive</span>
  </div>
  <div class="pair">
    <div class="col"><span class="label">Mermaid</span><img class="pic" src="${asset('merlive/order/mermaid.png')}" alt=""></div>
    <div class="col"><span class="label after">Merlive</span><img class="pic" src="${asset('merlive/order/merlive.png')}" alt=""></div>
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
    <span class="skill"><span class="mark"><i class="b"></i><i class="a"></i></span><span>Side<span class="shot">Shot</span></span></span>
    <span class="skill">${dbtourMark(40)}<span>dbtour</span></span>
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
