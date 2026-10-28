# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro, static, deployed as a Cloudflare Worker with static assets on skills.victorsaly.com (the same tooling as
blog.victorsaly.com). Chosen by Victor on 2026-10-28.

## Users

- Developers who use a coding agent (Claude Code, Codex, Cursor, OpenCode and the like). They arrive from a
  GitHub README, a LinkedIn post or a search, often on a phone, and decide in about a minute whether a skill is
  worth installing.

## Product Purpose

skills.victorsaly.com is the home of Victor Saly's agent skills: a hub that lists them, and one landing page per
skill (the first: skills.victorsaly.com/sideshot). A skill page succeeds when a developer understands what the
skill does for them, believes it from real pictures, and copies the install command.

## Positioning

Small, single-purpose skills that run under any coding agent that reads Agent Skills, each made for a real
project first (SideShot was built for and used in agentic-blog since PR #111) and then published. Each skill
carries its own name and brand; the hub is Victor's name as the maker.

## Operating Context

- Each skill lives in its own public GitHub repo (victorsaly/sideshot) and is installed from there:
  `npx skills add victorsaly/<skill> -g`, or as a Claude Code plugin.
- The site reads each skill's page content and pictures from that skill's repo, so a skill's README and its page
  tell the same story.
- More skills are planned; the hub must take a new one by adding one content file.

## Capabilities and Constraints

- The main action on a skill page: copy the install command. The GitHub repo is the second link.
- The hub is named "Victor Saly · Skills".
- Each skill page carries that skill's own brand (SideShot: ink and marigold, the two-square mark, the wordmark
  Side + Shot); the hub frame stays quiet and shared.

## Brand Commitments

- SideShot: wordmark "SideShot" with "Shot" in marigold (#ffc400) on dark, marigold underline on light; mark of
  two squares side by side, ink (before) and marigold (after). Tagline "See the change. Side by side."
- Victor's voice: plain words, short sentences, British spelling (colour, licence).

## Evidence on Hand

- Real before/after pictures from agentic-blog PR #151 and the rings-and-marks example, in
  victorsaly/sideshot/docs/assets.
- MIT licence. No install counts, testimonials, users or companies exist yet: do not invent any.

## Product Principles

1. Show the real output before describing it.
2. One action per page: copy the install command.
3. A skill's page and its README never disagree; the repo is the source.
4. Agent-agnostic: never imply a skill needs one particular agent.

## Accessibility & Inclusion

WCAG 2.2 AA, as on Victor's other sites; works by keyboard; respects reduced motion.
