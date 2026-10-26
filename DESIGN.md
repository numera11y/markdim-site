---
name: Marginalia Site
description: An editorial desk for understanding and trying the Marginalia Markdown workspace.
colors:
  paper: "#f5f6f8"
  page: "#ffffff"
  ink: "#171a21"
  muted: "#344054"
  secondary: "#475467"
  rule: "#c7cdd6"
  wash: "#eef1f5"
  accent: "#275dad"
  mark: "#98acff"
  selection: "#dce5ff"
  accent-hover: "#1f4f9d"
  dark-copy: "#e1e5ec"
  dark-label: "#c7d2fe"
typography:
  display:
    fontFamily: "IBM Plex Serif, Georgia, serif"
    fontSize: "3rem / 3.75rem (sm) / 4.15rem (lg)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "IBM Plex Serif, Georgia, serif"
    fontSize: "2.25rem / 3rem (sm)"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.045em"
  body:
    fontFamily: "IBM Plex Sans Variable, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "IBM Plex Sans Variable, sans-serif"
    fontSize: "10px"
    fontWeight: 600
    letterSpacing: "0.12em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  menu: "5px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.page}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.page}"
    rounded: "{rounded.md}"
  button-download-inverse:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
    height: "48px"
  button-menu:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.menu}"
    size: "44px"
    height: "44px"
---

# Design System: Marginalia Site

## Overview

**Creative North Star: "Le bureau ouvert"**

The site presents Marginalia as an editorial atelier: a clear, quiet working surface where the idea of the application is understood by seeing Markdown source and its rendered reading view together. Pale pearl paper, white sheets, slate ink, and the logo's blue accent carry the identity. The editorial serif supplies a reading voice; sans-serif interface labels and copy keep the interface precise and usable.

The signature composition is an open folio: concise explanation and a direct beta action face a reconstructed application example, explicitly marked as an example. Fine rules, restrained shadows, and useful annotations organize the page without turning it into a generic card grid. Responsive behavior stacks the folio and its two demo panes for narrow screens.

**Key Characteristics:**
- Pearl-gray page ground with white paper surfaces and slate typography.
- Blue is reserved for actions, links, selected states, and small markers.
- Editorial serif headlines paired with IBM Plex Sans interface text.
- Folio composition, thin rules, and restrained depth.

## Colors

The palette follows the slate-and-blue Marginalia mark: cool paper and ink provide the field, while one clear blue identifies action and orientation.

### Primary
- **Logo Blue** (`{colors.accent}`): primary actions, links, selected tabs, small icons, and informational markers.

### Neutral
- **Pearl Paper** (`{colors.paper}`): the page ground and light keyboard-key surfaces.
- **White Sheet** (`{colors.page}`): demo window, reading panes, and alternating content sections.
- **Slate Ink** (`{colors.ink}`): primary text and the dark download panel.
- **Reading Slate** (`{colors.muted}`): body copy and explanatory text.
- **Quiet Slate** (`{colors.secondary}`): secondary copy, metadata, and labels.
- **Rule Gray** (`{colors.rule}`): dividers, borders, and panel separators.
- **Soft Wash** (`{colors.wash}`): subdued labels and pale interface surfaces.
- **Logo Periwinkle** (`{colors.mark}`): secondary mark color, also used for the focus outline on the dark download panel.
- **Selection Blue** (`{colors.selection}`): selected text background.
- **Action Blue Hover** (`{colors.accent-hover}`): primary action and text-link hover.
- **Download Copy** (`{colors.dark-copy}`): supporting copy on the dark download panel.
- **Download Label** (`{colors.dark-label}`): emphasized introductory line on the dark panel.

## Typography

**Display Font:** IBM Plex Serif (with Georgia, serif fallback)
**Body Font:** IBM Plex Sans Variable (with sans-serif fallback)
**Label/Mono Font:** IBM Plex Sans Variable for interface labels; system monospace stack for the reconstructed source pane.

**Character:** IBM Plex Serif gives large headings a literary, print-like voice without decorative excess. IBM Plex Sans keeps navigation, descriptions, controls, and small annotations direct and legible.

### Hierarchy
- **Display** (500, 48px base, 60px at `sm`, 66.4px at `lg`, 1.02 line-height): large hero title; tightly tracked with balanced wrapping.
- **Headline** (500, 36px base, 48px at `sm`, 1.25 line-height): section titles and secondary editorial statements.
- **Title** (500, 20px–24px): titles inside the rendered Markdown preview.
- **Body** (400, 16px, default 1.5 line-height): explanatory prose; individual prose classes set their own leading, and long copy is constrained to a 68ch reading measure where appropriate.
- **Label** (600, 10px, 0.12em tracking, uppercase in demo pane captions): compact source/preview and section annotations.

## Layout

Content uses a centered maximum-width frame of 80rem (max-w-7xl), with page gutters that grow from 20px on small screens to 32px and 48px at larger viewport widths. Section vertical rhythm uses 64px on compact layouts, 80px at medium widths, and up to 96px on wide layouts. Text columns use a 68ch measure.

The hero folio is a bordered, gently rounded two-part sheet. On wide screens its explanatory side and demonstration side use an approximately 0.76:1.24 column ratio; the subtle central fold and light-to-white surface gradient reinforce the open-folio composition. At widths up to 900px the fold disappears and the copy and demo stack. At up to 680px the hero's source and preview panes stack, story rows become single-column, and desktop navigation gives way to a compact disclosure menu. Other responsive behavior is limited to the specific column and padding changes present in the layout. The layout supports a 320px minimum viewport without horizontal overflow.

Observed responsive thresholds are 680px, 900px, and the utility framework's `sm` (640px) and `lg` (1024px) layout changes.

## Elevation & Depth

Depth is restrained and mostly structural: thin gray rules and white-on-paper tonal shifts do most of the work. Shadows distinguish the large folio, the reconstructed application window, and the opened mobile navigation menu from their surroundings; they are soft and broad rather than sharp.

### Shadow Vocabulary
- **Folio ambient** (`0 16px 44px rgb(23 26 33 / 9%)`): separates the hero sheet from the page ground.
- **Demo window** (`0 12px 28px rgb(23 26 33 / 10%)`): lifts the application example within the folio.
- **Paper surface** (`0 12px 34px rgb(23 26 33 / 9%)`): reusable paper-like elevation treatment.
- **Mobile menu** (`0 12px 28px rgb(23 26 33 / 12%)`): distinguishes the open navigation disclosure.

## Shapes

The form language is mostly square-edged editorial paper with modest rounding at contained interactive or application surfaces. Common radii are 5px for the compact menu control, 6px for action buttons and large panels, and 8px for the demo window. Borders are thin and cool gray; panes meet at straight rules. Circular shapes are limited to small accent markers and the PDF icon medallion. Keyboard focus outlines are 3px thick; this is a stroke width, not a corner radius.

## Components

### Buttons
- **Character:** direct, legible actions with a compact, confident blue fill.
- **Shape:** softly rounded corners (6px); primary controls are at least 48px high, and the header action at least 44px.
- **Primary:** logo blue with white semibold text and 20px horizontal padding; used for beta download.
- **Hover / Focus:** hover deepens the blue; keyboard focus uses a 3px blue outline with 4px offset and a 3px outline corner. Links gain underline emphasis on hover.
- **Inverse download:** white surface with ink text on the dark closing panel; hover shifts to a pale gray.
- **Secondary link:** unboxed blue text link, often accompanied by an arrow; underline appears on hover.
- **Mobile menu control:** transparent paper-ground button, gray 1px border, 5px radius, minimum 44px square.

### Navigation
- **Style:** compact header with logo at left, three quiet section links, and a prominent download action at right. Sans-serif links use muted slate and darken on hover.
- **Mobile:** at 680px and below, section links are placed inside a native `details` disclosure; the 44px menu control opens a white, bordered, softly shadowed vertical menu. The download action remains visible in the header.

### FAQ
- **Style:** native disclosure rows separated by top and bottom hairlines; question text is medium-weight sans-serif.
- **State:** each summary has a minimum 60px height. A blue plus marks the closed state and changes to a minus when open; answer copy uses muted slate, 1.7 line-height, and the standard reading measure.

### Open Folio
- **Style:** signature hero composition with white copy paper and a reconstructed editor/preview example in a second pane. On desktop a subtle fold separates the halves; at compact widths only the implemented hero panes and related content rows collapse into stacked paper and wash-gray areas.
- **Demo window:** 8px corners, thin gray stroke, white interface chrome, horizontal tabs, paired source and rendered reading panes, and a bottom status line. On narrow mobile widths source and preview become a vertical sequence.
- **Annotation:** the example badge and accompanying note identify the demo as reconstructed/example content.

## Do's and Don'ts

### Do:
- **Do** preserve the pearl-paper, slate-ink, and logo-blue relationship across new site elements.
- **Do** use IBM Plex Serif for editorial display headings and IBM Plex Sans for interface and body text.
- **Do** use thin gray rules and white surfaces to structure content before adding depth.
- **Do** keep labels and annotations compact and legible; uppercase demo captions use the established tracking.
- **Do** stack only the folio and demo panes at the documented responsive changes.

### Don't:
- **Don't** use the blue accent as a broad page background; its observed role is action, link, selection, and small orientation cues.
- **Don't** replace the open-folio composition with a grid of generic rounded cards.
- **Don't** rely on shadow alone where the implementation uses a clear rule or pane boundary.
