---
name: Victor Saly · Skills
description: Paper and ink, one marigold, rules in three weights; a quiet shared frame, and each skill page brings its own brand inside it.
colors:
  paper: "#ffffff"
  ink: "#000000"
  quiet: "#525252"
  hush: "#6b6b6b"
  rule: "#cfcfcf"
  wash: "#f4f4f4"
  mark: "#ffc400"
  mark-ink: "#000000"
  paper-dark: "#1c1c1c"
  ink-dark: "#e6e6e6"
  quiet-dark: "#b0b0b0"
  hush-dark: "#9a9a9a"
  rule-dark: "#454545"
  wash-dark: "#262626"
typography:
  display:
    fontFamily: "'Atkinson Hyperlegible Next Variable', 'Atkinson Hyperlegible', system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 1.4rem + 5.2vw, 5.4rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  display-title:
    fontFamily: "'Atkinson Hyperlegible Next Variable', 'Atkinson Hyperlegible', system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 1.3rem + 4.4vw, 4rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'Atkinson Hyperlegible Next Variable', 'Atkinson Hyperlegible', system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 1.3rem + 2.4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  headline-sm:
    fontFamily: "'Atkinson Hyperlegible Next Variable', 'Atkinson Hyperlegible', system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 1.2rem + 1.4vw, 2.3rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Atkinson Hyperlegible Next Variable', 'Atkinson Hyperlegible', system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.6vw, 1.6rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  lede:
    fontFamily: "'Atkinson Hyperlegible Next Variable', 'Atkinson Hyperlegible', system-ui, sans-serif"
    fontSize: "clamp(1.1rem, 1rem + 0.35vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "'Atkinson Hyperlegible Next Variable', 'Atkinson Hyperlegible', system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "tnum"
  control:
    fontFamily: "'Atkinson Hyperlegible Next Variable', 'Atkinson Hyperlegible', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
  label:
    fontFamily: "'Atkinson Hyperlegible Next Variable', 'Atkinson Hyperlegible', system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
  label-sm:
    fontFamily: "'Atkinson Hyperlegible Next Variable', 'Atkinson Hyperlegible', system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 700
  command:
    fontFamily: "'Atkinson Hyperlegible Mono Variable', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "clamp(0.88rem, 0.8rem + 0.4vw, 1.05rem)"
    fontWeight: 500
  code:
    fontFamily: "'Atkinson Hyperlegible Mono Variable', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "0.9em"
  wordmark:
    fontFamily: "'Atkinson Hyperlegible Next Variable', 'Atkinson Hyperlegible', system-ui, sans-serif"
    fontWeight: 800
    letterSpacing: "-0.02em"
rounded:
  none: "0px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  page: "1240px"
  measure: "68ch"
  intro: "clamp(48px, 9vw, 112px)"
  section: "clamp(56px, 8vw, 96px)"
  footer: "clamp(64px, 10vw, 120px)"
components:
  frame-bar:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    height: "60px"
  install-line:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.command}"
    rounded: "{rounded.none}"
    padding: "14px 16px"
  install-line-copied:
    backgroundColor: "{colors.mark}"
    textColor: "{colors.mark-ink}"
  install-gutter:
    backgroundColor: "{colors.mark}"
    textColor: "{colors.mark-ink}"
    width: "2.4rem"
  copy-button:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "52px"
  state-pill:
    backgroundColor: "{colors.mark}"
    textColor: "{colors.mark-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "4px 12px 4px 10px"
  tag-outline:
    textColor: "{colors.ink}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.none}"
    padding: "1px 10px"
  tab:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "9px clamp(10px, 2vw, 16px)"
  hunk-head:
    backgroundColor: "{colors.wash}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: "12px 18px"
  added-line:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "8px 18px 8px calc(2.4rem + 14px)"
---

# Design System: Victor Saly · Skills

## Overview

**Creative North Star: "Ink on Paper, One Marigold"**

The site is a printed page with a single highlighter. Everything is ink on paper: black on white by day, light grey on charcoal by night, and structure drawn with ink rules instead of boxes, tints or depth. One colour, marigold, is the highlighter, and it means one thing: what is added, open, or after. The density is that of a well-set document: generous body type (19px, line height 1.6), a 68-character measure for prose, and very heavy, tightly tracked display type that reads at a glance.

The system has two layers. The **shared frame** (the bar with Victor's name and the footer, the tokens, the type, the rules, the install line) is quiet and identical on the hub and on every skill page. Inside it, **each skill page carries its own brand**: its own mark, its own wordmark, its own page grammar. SideShot is the first: a two-square mark, the wordmark Side + Shot, and a page written as the pull request SideShot writes into (a PR title with a state pill, tabs, a conversation comment holding the real before/after table, capabilities as diff hunks, the install command as the added line that merges).

Commands are typed, so they are set in the mono sibling of the prose face; everything else is set in Atkinson Hyperlegible Next. Motion exists only where the reader asked for it: the install line answers a Copy press.

**Key Characteristics:**
- Paper, ink and greys; marigold is the only hue, and it marks what is added, open or after.
- Structure by ink rules in three weights (8px, 3px, 1px); no shadows, no gradients, no cards.
- Square corners everywhere; the PR state pill is the one rounded shape.
- Atkinson Hyperlegible Next for words, Atkinson Hyperlegible Mono for anything typed into a terminal.
- A quiet shared frame; each skill brings its own brand inside it.
- The install line is the page's one filled action.

## Colors

A monochrome page with one highlighter: paper and ink in two schemes, three working greys, and marigold.

### Primary
- **Marigold** (`mark`): the one colour. It fills the + gutter of every added line and of the install line, the Open state pill, the bar under the After column, the underline of the active tab, the whole install line once copied, and the text selection. In SideShot's brand it is the after square of the mark and the underline under Shot. It is the same value in both schemes.
- **Ink on Marigold** (`mark-ink`): the text and icon colour on any marigold fill, in both schemes (13.2:1).

### Neutral
- **Paper** (`paper`, dark: `paper-dark`): the page. In dark mode it is charcoal, not black: pure black under light text glares.
- **Ink** (`ink`, dark: `ink-dark`): all text, all structural rules, the frame's square, the before square of SideShot's mark, and the fill of the Copy button.
- **Quiet** (`quiet`, dark: `quiet-dark`): secondary prose: ledes on the hub, meta lines, captions, the footer, notes under the install line (7.8:1 on paper).
- **Hush** (`hush`, dark: `hush-dark`): the faintest text that still passes AA: the slash in the trail, the quotation marks around the PR title, hunk headers' `@@` lines (5.3:1 on paper, 4.9:1 on wash).
- **Rule** (`rule`, dark: `rule-dark`): light dividers inside a block: table cells, the line under a comment head, the border round each screenshot, the hover underline of a tab. It is decorative only (1.6:1 on paper).
- **Wash** (`wash`, dark: `wash-dark`): the one tinted surface: a hunk's header row and preformatted code, as a diff colours its context lines.

### Named Rules
**The One Marigold Rule.** Marigold is the only hue in the frame, and it always means added, open or after. If something is marigold, a reader should be able to say what it adds.

**The Highlighter Rule.** Marigold sits behind ink or under it as a stroke; it is never letter colour on paper (1.6:1). Letters turn marigold only on charcoal, as Shot does in SideShot's wordmark in dark mode.

**The Charcoal Night Rule.** Dark mode swaps paper and ink for charcoal and light grey, and keeps marigold and ink-on-marigold exactly as they are. Real screenshots stay on white in both schemes.

## Typography

**Display Font:** Atkinson Hyperlegible Next (variable, with Atkinson Hyperlegible, system-ui, sans-serif)
**Body Font:** Atkinson Hyperlegible Next (the same family)
**Label/Mono Font:** Atkinson Hyperlegible Mono (variable, with ui-monospace, SF Mono, Menlo, monospace)

**Character:** One legibility-first family in two cuts. The display weight (800) with tight tracking gives the headlines a poster's punch; the mono sibling shares its letterforms, so a command sits in a sentence without changing voice.

### Hierarchy
- **Display** (`display`): the hub's headline, held to about 14 characters a line.
- **Display Title** (`display-title`): a skill page's title. On SideShot it is the PR title, “SideShot this PR”, with the quotation marks in hush at weight 400.
- **Headline** (`headline`): a closing section's heading, such as Merge.
- **Headline Small** (`headline-sm`): a section heading that opens a long run of content, such as Files changed. On the hub, a skill's name is set larger (up to 3.2rem) in its own wordmark.
- **Title** (`title`): a block's heading, such as each hunk's capability.
- **Lede** (`lede`): the paragraph under a title, up to 76 characters a line; the hub's lede runs in quiet, slightly larger, to 56 characters.
- **Body** (`body`): all prose, with tabular figures on; prose blocks hold to the 68-character measure.
- **Control** (`control`): words on a filled control (Copy).
- **Label** (`label`, `label-sm`): pill text, table column heads, the Merged tag and counts, captions under pictures.
- **Command** (`command`): the install command; `code` sets inline flags, branch names and sizes like 390×844.

### Named Rules
**The Typed Words Rule.** Anything a person would type or read in a terminal (commands, flags, branch names, file names, screen sizes) is set in Atkinson Hyperlegible Mono. Prose never is.

**The Heavy Headline Rule.** Display and the wordmark are weight 800 with negative tracking (-0.02em to -0.03em) and line height about 1; headings below them are 700. Headings balance their lines; paragraphs wrap pretty.

## Layout

One centred column, `page` wide at most, with a fluid side `gutter` (16px on a phone, 40px on a wide desk). Prose holds to the `measure`; a lede may run to 76ch; the call-to-action block holds to 720px and a closing section to 820px, aligned to the column's left edge rather than centred. Vertical rhythm is set by three steps: `intro` above the first heading, `section` between major sections, `footer` above the footer.

The hub is a ruled list: each skill is a row of two columns (name and mark on the left; tagline, summary, links and its install line on the right), separated by hairlines under a heavy opening rule. The SideShot page is a PR: header, tabs, the conversation comment with the before/after table, the files-changed hunks, then Merge.

Responsive changes are few and specific. At 760px and below the hub row and any split hunk stack to one column, and the before/after table drops its label column to show two pictures side by side with the device name above. At 560px the frame's “Source on GitHub” keeps only its icon, at a larger tap size. At 480px the install line's Copy button drops below the command and spans the full width, and the tabs tighten. On a phone the install command is reached in one scroll; on a 1280×800 desk it is in the first view.

## Elevation & Depth

The system is flat. There are no shadows, no blurs and no tonal stacking: depth is replaced by ink rules in three weights and by one tinted surface (`wash`). A heavier rule means a bigger moment; a filled block (ink or marigold) means an action or a state.

### Named Rules
**The Three Rules Rule.** Structure is drawn with ink in three weights only. Heavy (8px) opens a big moment: the top of the hub's skill list, Files changed, Merge. Strong (3px) sits above a section or frames the one action: the conversation comment's top, the footer's top, the install line's border, the active tab's underline. A hairline (1px) separates rows and outlines blocks: the frame bar, list rows, hunks, tables, tags.

**The Flat Page Rule.** Nothing floats. A block that needs to stand apart gets a rule or a wash, never a shadow.

## Shapes

Every corner is square: boxes, buttons, tags, the count chip, screenshots and code blocks all meet at right angles (`rounded.none`). The one rounded form is the PR state pill (`rounded.pill`), borrowed from the pull-request grammar it belongs to. Recurring silhouettes are squares: the frame's ink square beside Victor's name, SideShot's two overlapping squares, the + gutter as a square-ish column of marigold.

### Named Rules
**The Square Corner Rule.** If it is not the PR state pill, it has square corners.

## Components

### Frame (shared)
Quiet and identical on every page. A 60px-high bar closed by a hairline: on the left a 14px ink square, **Victor Saly** in bold and “Skills” as a small tracked capital label (the hub lockup); on a skill page a hush slash, the skill's own mark and its name, underlined as the current page. On the right, “Source on GitHub” with an external-link icon (icon alone below 560px). The footer opens with a strong rule, sets the maker line in quiet with its name in ink, and links All skills, Blog, victorsaly.com, MIT licence. A skip link appears in ink on focus.

### Install Line (signature, shared)
The page's one action, written as an added line of a diff. A strong ink border around three parts: a marigold + gutter (2.4rem), the command in mono on paper, and a Copy button filled ink with paper text, an icon and the word. Pressing Copy scales it to 0.97; on success the whole line fills marigold, the + becomes a tick, the word reads Copied, and a polite live region says so; after 2.4 seconds it returns. Without a clipboard it selects the command and says how to copy it. Below 480px Copy moves under the command at full width. Focus inside the filled button is a paper ring set inside its edge.

### Buttons
- **Shape:** square (`rounded.none`).
- **Primary:** the Copy button is the only button: ink fill, paper text, control type, an icon and a word, at least 52px high.
- **Hover / Focus:** hover underlines the word; focus is the system ring. Links underline at 1px and thicken to 2px on hover.

### Chips
- **State pill:** marigold fill, ink text, a branch icon and the word (Open). The only rounded shape.
- **Outline tag:** a hairline ink box with bold small text, square: the Merged tag after the PR link, and the count beside Files changed.

### Cards / Containers
There are no cards. Containers are ruled blocks:
- **Hunk:** a hairline ink outline, a wash header row with the capability as a title and an `@@ … @@` line in hush mono, then a list of added lines. No radius, no shadow, no fill on the body.
- **Conversation comment:** a strong rule above, a hairline below, a head line separated by a light rule.

### Added Line (shared grammar)
Each item in a hunk is an added diff line: a 2.4rem marigold gutter carrying a mono bold +, then the words, held to the measure.

### Navigation
- **Trail:** the frame bar's left side, as above.
- **Tabs (SideShot):** Conversation, Files changed (with an outline count), Merge, in body type over a hairline; hover draws a light rule underneath; the current tab is bold with a strong marigold underline. The tabs are in-page anchors.

### Before/After Table (SideShot)
A light-ruled grid with a label column (device and size) and Before and After columns; After carries a marigold bar beneath its head. Screenshots sit on white with a light border and link to the full picture. The phone pair leads at every width; on a desk it is cropped to the change.

### Skill Brand: SideShot
- **Mark:** two 44-unit squares side by side, overlapping by half: before in ink, after in marigold (multiplied over the ink on paper, plain on charcoal). Used in the trail, in the comment head and at 30px on the hub.
- **Wordmark:** “SideShot” at weight 800, -0.02em: Side in ink; Shot with a thick marigold underline on paper, and in marigold letters on charcoal.
- **Page grammar:** the pull request: a quoted title, an Open pill and a “wants to merge” meta line with branch names in mono, tabs, a comment, hunks, and Merge.

## Do's and Don'ts

### Do:
- **Do** draw structure with ink rules in the three weights: heavy (8px) to open a big moment, strong (3px) above a section or round the action, hairline (1px) between rows.
- **Do** use marigold only for what is added, open or after, and put ink on it.
- **Do** set commands, flags, branch names and screen sizes in Atkinson Hyperlegible Mono, and everything else in Atkinson Hyperlegible Next.
- **Do** give every skill's install command the Install Line: + gutter, mono command, Copy.
- **Do** bring a skill's own mark, wordmark and page grammar inside the shared frame, through the frame's skill slot and the page body.
- **Do** keep focus visible: a 3px ink ring 3px out; inside a filled control the ring turns paper and sits inside.
- **Do** keep motion to what the reader asked for (the copy confirmation, 220ms fill and 140ms press), and let reduced motion make it instant.
- **Do** show real screenshots on white with a light rule round them, in both schemes.

### Don't:
- **Don't** add shadows, gradients, blurs or raised surfaces.
- **Don't** round corners; the PR state pill is the only rounded shape.
- **Don't** wrap content in cards; a container is a ruled block like the hunk.
- **Don't** set marigold letters on paper; use a marigold underline or fill instead.
- **Don't** redefine the shared tokens on a skill page; a skill adds its brand on top of them.
- **Don't** use the light rule colour for a border that carries meaning; it is for dividers only.
- **Don't** lift the frame's small tracked capital label into eyebrows or kickers above headings; it belongs to the hub lockup.
