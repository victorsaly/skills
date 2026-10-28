# Victor Saly · Skills

The site at [skills.victorsaly.com](https://skills.victorsaly.com): a hub for Victor Saly's agent skills, and one
landing page per skill. Each skill lives in its own repo and is installed from there; this repo is only the site.

| Skill | Page | Repo |
|---|---|---|
| SideShot: before and after for every pull request | [/sideshot](https://skills.victorsaly.com/sideshot) | [victorsaly/sideshot](https://github.com/victorsaly/sideshot) |

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # astro check, then the static site in dist/
npm run deploy    # build, then wrangler deploy (claims skills.victorsaly.com)
```

## Add a skill

1. Add `src/content/skills/<name>.md` with its front matter (name, tagline, summary, repo, install, order). The hub
   lists it from there.
2. Give it a page at `src/pages/<name>.astro`, inside `Frame`, carrying the skill's own brand. The frame stays
   quiet and shared.
3. Pictures go in `public/<name>/`, real ones only, each with its origin embedded
   (`impeccable embed-prompt <file> --prompt "Origin: …"`).

## Where things are

```
PRODUCT.md                 who the site is for and what it must never claim
src/styles/global.css      the shared tokens: paper, ink, one marigold, three rule weights
src/layouts/Frame.astro    the shared frame: Victor Saly · Skills / <skill>, the footer
src/components/            InstallLine (the copy action), each skill's mark and wordmark
src/pages/                 the hub (index), one page per skill, 404
public/<skill>/            that skill's real pictures
```

MIT licence, © Victor Saly.
