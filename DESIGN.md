---
name: Saleh Abuhussein portfolio
description: A career set as one strict Swiss typographic poster on off-white stock, black ink and one red.
colors:
  paper: "#f2f1ec"
  ink: "#111111"
  ink-2: "#4a4a46"
  rule: "#111111"
  red: "#e3262b"
  red-ink: "#b3171c"
  on-red: "#ffffff"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "12.6cqi"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "-0.04em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2rem, 6vw, 4rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 108"
  section-title:
    fontFamily: "Archivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 90"
  lead:
    fontFamily: "Archivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.375rem, 2.6vw, 1.75rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Archivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 2.4vw, 1.5rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Archivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
    fontFeature: "'tnum' 1"
  label:
    fontFamily: "Archivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.55
    letterSpacing: "normal"
rounded:
  none: "0px"
spacing:
  gutter-mobile: "16px"
  gutter: "32px"
  col-gap: "clamp(16px, 2.5vw, 32px)"
  max: "1200px"
  band: "clamp(48px, 8vw, 96px)"
  title-gap: "32px"
  row: "20px"
  stack: "24px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.red}"
    textColor: "{colors.on-red}"
  contact-field:
    backgroundColor: "{colors.red}"
    textColor: "{colors.on-red}"
    typography: "{typography.headline}"
    padding: "clamp(56px, 10vw, 120px) 0"
  skill-cell:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "14px 12px"
  numbered-row:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: "20px 0"
  row-index:
    textColor: "{colors.red-ink}"
  nav-link:
    textColor: "{colors.ink}"
  nav-link-hover:
    textColor: "{colors.red-ink}"
---

# Design System: Saleh Abuhussein portfolio

## Overview

**Creative North Star: "The Swiss Grid Poster"**

The whole site is one printed poster: uncoated off-white stock, black ink, and a single red. Everything sits on a 12-column grid, flush left and ragged right, divided by 1px black rules. There are no cards, no shadows and no rounded corners; structure comes from the grid, the rules and the weight of the type.

The name is the image. It runs at full grid width in heavy, slightly widened Archivo capitals, with a thick red bar drawn under it. Below that, the page reads as a stack of ruled bands, each with its title in the left three columns and its content in the right nine. Lists are numbered in a margin column, skills sit in identical ruled cells like marks on a ruler, and the page ends in a solid red contact field.

Density is moderate: generous band padding, tight display leading, body text held to readable measures (60 to 68ch). The only photograph is a small grayscale portrait in a single grid cell, multiplied into the paper.

**Key Characteristics:**
- 12-column grid, 1200px max, every section aligned to the same columns.
- One typeface (Archivo variable), weight and width carry the hierarchy.
- Black ink on off-white; red only for rules, the contact field, focus and hover.
- 1px black rules divide bands, rows and cells; nothing is boxed or raised.
- Square corners everywhere.

## Colors

A printed two-ink palette: black on warm off-white, with one saturated red used as a second ink.

### Primary
- **Signal Red** (#e3262b): the second ink. The thick rule under the name, the full-bleed contact field, focus outlines, link underlines, bullet dashes in experience rows, text selection, and the hover fill of the email button. Never used as text on paper.
- **Red Ink** (#b3171c): a darker red for small red text on paper, where Signal Red would be too light to read: row numbers, project group labels, the education label, and link text on hover.

### Neutral
- **Uncoated Stock** (#f2f1ec): the page background, a warm off-white standing in for uncoated paper.
- **Press Black** (#111111): all primary text, the email button fill, and the scrollbar thumb.
- **Rule Black** (#111111): every 1px rule. Kept as its own token so rules can be tuned without touching text.
- **Graphite** (#4a4a46): secondary text such as the intro, descriptions, periods and location.
- **White on Red** (#ffffff): text on Signal Red surfaces, the contact field and the hovered email button.

### Named Rules
**The Two Inks Rule.** Black and red are the only inks. Red marks structure (rules, the contact field) and interaction (focus, hover); it does not decorate.

**The Red Ink Rule.** Small red text on paper uses Red Ink, never Signal Red.

## Typography

**Display Font:** Archivo variable (with Helvetica Neue, Helvetica, Arial, sans-serif)
**Body Font:** Archivo variable (same stack)

**Character:** One neo-grotesque doing every job. The display end is black weight (900) and widened (112%); section titles are narrowed (90%); body runs at regular weight with tabular figures.

Source: `public/fonts/archivo.woff2`, the Archivo variable font from @fontsource-variable/archivo 5.2.5 (SIL Open Font License), self-hosted with weight axis 100 to 900 and width axis 62% to 125%, `font-display: swap`.

### Hierarchy
- **Display** (900, 112% width, 12.6cqi of the hero, line-height 0.88, -0.04em, uppercase): the name only. The size is fitted so the longest line spans the full grid; it falls back to clamp(2.25rem, 11vw, 6rem) where container units are unsupported. Refit the value if the name changes.
- **Headline** (900, 108% width, clamp(2rem, 6vw, 4rem), line-height 0.95, -0.035em): the contact field statement, balanced, max 16ch.
- **Section title** (800, 90% width, clamp(1.5rem, 3vw, 2rem), line-height 1.05, -0.02em): band titles in the left three columns, each an anchor link to its own section.
- **Lead** (800, clamp(1.375rem, 2.6vw, 1.75rem), line-height 1.1, -0.02em): the role claim in the hero. The about lead is a lighter sibling (700, clamp(1.25rem, 2.4vw, 1.625rem), line-height 1.25).
- **Title** (800, clamp(1.25rem, 2.4vw, 1.5rem), line-height 1.15, -0.02em): experience row headings. Project headings use a step down (clamp(1.125rem, 2.2vw, 1.375rem), line-height 1.2).
- **Body** (400, 1.0625rem, line-height 1.55, tabular figures): all running text, held to 60 to 68ch. Hero claims run at 1.125rem, weight 500, line-height 1.35.
- **Label** (700, 0.8125rem): project group labels and the education term, in Red Ink. Row numbers use 0.875rem, 700. Navigation uses 0.9375rem, 600. Skill cells use 0.9375rem, 600.

### Named Rules
**The One Face Rule.** Archivo is the only typeface. Hierarchy comes from weight, width and size, not from a second family.

**The Sentence Case Rule.** Only the name is set in capitals. Everything else is sentence case with no letter-spacing added.

## Layout

A 12-column grid (`repeat(12, minmax(0, 1fr))`) is shared by the header, every section and the footer. Max width 1200px, centered; side gutter 16px below 720px and 32px from 720px up; column gap clamp(16px, 2.5vw, 32px).

Each content section is a band: padding clamp(48px, 8vw, 96px) top and bottom, a 1px Rule Black line across its top inside the gutters. Below 900px the band title stacks above the content with a 32px gap; from 900px the title takes columns 1 to 3 and the content columns 4 to 12.

Hero: the name spans all 12 columns, then the red bar, then three claims. Below 720px they stack; from 720px they take four columns each; from 900px they sit at columns 1 to 3, 4 to 8 and 9 to 12. The portrait takes columns 1 to 2 (1 to 4 on small screens, capped at 160px); the intro takes columns 4 to 12 and aligns to the bottom of the row.

Numbered rows: a 3ch index column plus content, 16px apart, 20px vertical padding, 1px rule above each row and below the last. From 720px, row titles and their period or group label share one line, the label pushed right.

Skill cells: 2 columns on small screens, 5 columns from 760px. Each group is padded with empty cells to a multiple of ten so both layouts close as complete rectangles.

Breakpoints observed: 720px (gutter, hero columns, row layouts, nav), 760px (skill cells), 900px (band split, hero three-column).

**The Shared Columns Rule.** Every element starts and ends on a grid column line. No free-floating widths except text measures in ch.

## Elevation & Depth

Completely flat. There are no shadows and no layered surfaces. Depth is replaced by two devices: 1px black rules that divide the page, and full inversion to Signal Red for the contact field. The portrait uses `mix-blend-mode: multiply` so it prints into the paper rather than sitting on top of it.

**The Flat Stock Rule.** Nothing lifts off the page. A surface change means a different ink (black button, red field), never a shadow.

## Shapes

Square corners throughout (0px radius); no element sets a border-radius. Borders are always 1px solid Rule Black, used as rules and cell edges rather than as boxes around content. The only filled shapes are the red bar under the name (12px to 20px tall, full grid width), the black email button, the red contact field, and the 8px by 2px red dashes that mark experience bullets. The only drawn icon is a 14px outbound arrow in SVG, stroke 1.75.

## Components

### Buttons
Blunt and printed: a solid block of ink.
- **Shape:** square corners (0px).
- **Primary:** Press Black fill, Uncoated Stock text, weight 700, padding 12px 20px. Used once, for "Email me" in the hero.
- **Hover / Focus:** fill switches to Signal Red with white text over 200ms ease-out. Focus is the global 3px Signal Red outline, offset 3px.

### Skill cells
Identical ruled cells, read like ticks on a ruler.
- **Style:** no fill; 1px Rule Black on all sides, shared between neighbours. Padding 14px 12px, text 0.9375rem, weight 600, line-height 1.2.
- **State:** static, no hover. Empty filler cells are hidden from assistive tech.

### Navigation
- **Style:** a "SA" mark (900, 1.25rem, -0.04em) in columns 1 to 2, links right-aligned across the remaining columns at 0.9375rem, weight 600, no underline at rest.
- **Hover:** a 1px Signal Red underline appears and the text turns Red Ink.
- **Mobile:** below 720px the mark takes its own line and the links spread edge to edge beneath it.

### Links
Inline links inherit text color with a 1px Signal Red underline offset 0.2em, and turn Red Ink on hover. Section titles and project names are links without underlines. External project links carry the 14px arrow, which shifts 2px up and right on hover.

### Numbered rows (signature)
Experience and projects are ordered lists of ruled rows. A two-digit index (01, 02...) in Red Ink sits in a 3ch margin column; the title, a right-aligned period or group label, and the text follow. Experience bullets are 8px by 2px Signal Red dashes. Every project row carries an id so it can be linked directly.

### Red rule (signature)
The thick Signal Red bar under the name, full grid width, 12px to 20px tall. It draws in from the left once on load (clip-path, 900ms, cubic-bezier(0.16, 1, 0.3, 1)); with reduced motion it simply appears.

### Contact field (signature)
A full-bleed Signal Red band that ends the page. Headline text and a large bold email address (clamp(1.125rem, 3vw, 1.75rem), 700, 2px underline in currentColor) in white, LinkedIn and GitHub links beside each other at weight 700. Inside the field, hover turns text Press Black, focus outlines switch to Press Black, and selection inverts to black on paper.

### Portrait
None. The owner removed the photo; the page is type only.

## Do's and Don'ts

### Do:
- **Do** align every element to the 12-column grid and keep text flush left, ragged right.
- **Do** separate sections, rows and cells with 1px Rule Black (#111111) lines.
- **Do** reserve Signal Red (#e3262b) for rules, the contact field, focus outlines, underlines and hover fills; use Red Ink (#b3171c) for small red text on paper.
- **Do** build hierarchy from Archivo's weight and width axes alone.
- **Do** give every section title an anchor link to its own section.
- **Do** honor reduced motion: the red rule draw and hover transitions switch off.

### Don't:
- **Don't** round any corner; the system radius is 0px.
- **Don't** add shadows, glows or raised surfaces.
- **Don't** wrap content in filled or bordered cards; cells exist only as shared rules, as in the skill grid.
- **Don't** add a second typeface or a third ink color.
- **Don't** set Signal Red text on the paper background.
- **Don't** center-align text blocks.
