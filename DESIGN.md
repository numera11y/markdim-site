---
name: markdim Site
description: A lively dark launch page for markdim, the free open-source Markdown desktop app.
colors:
  paper: "#141820"
  page: "#1C222C"
  ink: "#E6EAF0"
  muted: "#D0D6E0"
  secondary: "#B1BBC9"
  rule: "#343C49"
  wash: "#252D39"
  accent: "#A3B8FF"
  mark: "#98ACFF"
  on-accent: "#141820"
  accent-hover: "#B6C7FF"
  capture-border: "#4A5670"
  capture-text: "#C5D1FF"
  feature-hover: "#65779D"
  download-panel: "#191F29"
typography:
  display:
    fontFamily: "IBM Plex Sans Variable, sans-serif"
    fontSize: "3rem / 3.75rem (sm) / 6rem (lg)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.055em"
  headline:
    fontFamily: "IBM Plex Sans Variable, sans-serif"
    fontSize: "2.25rem / 3rem (sm)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.055em"
  body:
    fontFamily: "IBM Plex Sans Variable, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "IBM Plex Sans Variable, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.08em"
  compact-label:
    fontFamily: "IBM Plex Sans Variable, sans-serif"
    fontSize: "10px"
    fontWeight: 500
    letterSpacing: "0.05em"
  state-marker:
    fontFamily: "IBM Plex Sans Variable, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 400
rounded:
  sm: "5px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  focus: "3px"
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
    textColor: "{colors.on-accent}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
  button-menu:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    size: "44px"
    height: "44px"
---

# Design System: markdim Site

## Overview

**Creative North Star: "The Midnight Launchpad"**

markdim's site is a modern, dark, lively product launch: confident and polished, with the actual application—not decorative campaign art—as its proof. Deep blue-charcoal surfaces, cool readable text, fine slate borders, and markdim's periwinkle accents carry the app identity. IBM Plex Sans Variable handles the complete typographic voice, from oversized launch headline to compact route labels.

The first view centers the direct “Lire. Écrire. Exporter.” promise and free-download action above a genuine, clickable dark-mode application capture. A short animated signal traces Écrire → Relire → PDF. Below, rule-separated asymmetrical feature rows and ruled preference panes explain the product without generic card grids. Brief entrance and route motion add energy; reduced-motion preference disables animation and transitions.

**Key Characteristics:**
- Dark product palette and legible cool-toned copy.
- Periwinkle actions and one animated workflow signal.
- One self-hosted sans-serif family across display, body, and labels.
- Real application capture above asymmetric, rule-separated feature rows.

## Colors

The palette follows the shipped dark application theme: blue-charcoal surfaces, readable slate-white type, and a periwinkle accent for action, focus, and orientation.

### Primary
- **Periwinkle Accent** (`{colors.accent}`): download actions, links, icons, focus outlines, selection, and the route marker.
- **Logo Periwinkle** (`{colors.mark}`): the logo's secondary blue mark.
- **Accent Hover** (`{colors.accent-hover}`): brighter hover state for actions and text links.

### Neutral
- **Night Ground** (`{colors.paper}`): site background and the dark text color used on filled accent controls.
- **Charcoal Surface** (`{colors.page}`): header/menu controls, image zoom control, and alternating page panels.
- **Primary Text** (`{colors.ink}`): headings and primary interface copy.
- **Supporting Text** (`{colors.muted}`): feature explanations and FAQ answers.
- **Quiet Text** (`{colors.secondary}`): compatibility metadata and screenshot caption.
- **Slate Rule** (`{colors.rule}`): header, feature, FAQ, panel, and capture borders.
- **Elevated Wash** (`{colors.wash}`): muted inline key surfaces.
- **Capture Border Blue** (`{colors.capture-border}`): zoom-control outline and workflow tracks.
- **Capture Sample Blue** (`{colors.capture-text}`): supporting text on the zoom affordance.
- **Feature Hover Slate** (`{colors.feature-hover}`): brighter feature-row rule on hover.
- **Download Charcoal** (`{colors.download-panel}`): closing download panel.
- **On Accent** (`{colors.on-accent}`): dark foreground on the periwinkle action fill.

## Typography

**Display Font:** IBM Plex Sans Variable (with sans-serif fallback)
**Body Font:** IBM Plex Sans Variable (with sans-serif fallback)
**Label/Mono Font:** IBM Plex Sans Variable for web labels; monospaced content appears only within the real application capture.

**Character:** A single self-hosted family keeps the launch page product-led and consistent. Oversized scale, semibold weight, close tracking, and tight leading distinguish display text without introducing a separate brand face.

### Hierarchy
- **Display** (600, 48px base, 60px at `sm`, 96px at `lg`, 0.98 line-height): centered hero promise, balanced within a 16ch measure.
- **Headline** (600, 36px base, 48px at `sm`, 1.25 line-height): section titles.
- **Title** (600, 20px): feature-row headings.
- **Body** (400, 16px default, 1.5 line-height): standard copy; specific content classes use their own leading, commonly 1.7 for prose.
- **Label** (500, 12px desktop / 10px compact, 0.08em / 0.05em tracking, uppercase): workflow stages.
- **State marker** (400, 1.3rem): decorative plus/minus FAQ disclosure indicator.

## Layout

Content sits in a centered 80rem maximum-width frame with 20px compact gutters, 32px at `sm`, and 48px at `lg`. The hero uses a centered maximum-64rem text group above a full-width application capture, up to the 80rem container width. The primary download and secondary feature link sit together, followed by platform availability and the three-step route.

The feature introduction divides evenly at `md`; its four rows use icon, title, and copy in asymmetric columns. The preference section places a heading beside stacked ruled rows. Local-file and download content use wide editorial alignments; FAQ uses a narrow heading column beside disclosure rows. At 900px the hero copy gains a bottom rule. At 680px desktop links collapse into native details navigation and route gaps/tracks shrink; the application capture scales proportionally at its 1606:952 aspect ratio. The page supports a 320px minimum width. Tailwind layout breakpoints used include `sm` (640px), `md` (768px), and `lg` (1024px).

## Elevation & Depth

The interface combines tonal dark surfaces with fine borders and strong, broad shadow around the real app capture. The screenshot frame's inset accent hairline adds a subtle illuminated edge; the zoom affordance and open mobile menu receive smaller structural shadows. Feature rows stay flat and are organized by rules.

### Shadow Vocabulary
- **Application capture** (`0 28px 72px rgb(0 0 0 / 34%), 0 1px 0 rgb(163 184 255 / 12%) inset`): gives the authentic product image its primary lift and inset edge.
- **Zoom affordance** (`0 4px 16px rgb(0 0 0 / 32%)`): separates the enlarge control from screenshot detail.
- **Mobile menu** (`0 16px 36px rgb(0 0 0 / 36%)`): lifts the open navigation disclosure.
- **Workflow marker** (`0 0 12px rgb(163 184 255 / 72%)`): glows around the animated route dot.

## Shapes

Corners remain controlled rather than pill-shaped: actions and menu trigger use 6px, mobile dropdown uses 8px, screenshot/download panels use 12px, and the focus outline corner is 3px. Hairline borders divide dark panes. The route connector is 1px with a 6px circular signal marker. Global focus uses a 3px accent outline with a 4px offset.

## Components

### Buttons
- **Character:** compact, direct actions with a bright accent fill and dark legible foreground.
- **Shape:** gently rounded (6px); hero action is at least 48px high and header action at least 44px.
- **Primary:** accent fill, on-accent text, semibold sans-serif, and 20px horizontal padding; hover changes to the brighter accent-hover color.
- **Focus:** 3px accent outline with 4px offset; text links strengthen their underline on hover.
- **Secondary action:** unboxed feature link beside the download action.
- **Screenshot zoom:** bordered surface over the image with Phosphor magnifier icon and 44px minimum height; opens the original image in a new tab.

### Navigation
- **Style:** compact dark header, markdim logo, three section links, and always-visible download action. Links are muted at rest and brighten on hover.
- **Mobile:** at 680px and below, section links move into a native `details` disclosure. The surface-colored trigger is at least 44px square; the open 17rem menu is bordered, 8px rounded, and shadowed.

### Feature Rows
- **Style:** four flat, bottom-ruled rows with accent Phosphor icon, semibold title, and muted copy. At `md`, icon/title/copy occupy asymmetric columns.
- **Hover:** rule brightens and row shifts 4px horizontally, with 220ms ease transitions.

### Download Panel
- **Style:** wide, bordered dark panel with 12px corners, large display title, muted compatibility copy, and a primary release action. The copy explicitly distinguishes Windows/Linux beta packages from the project's macOS target.

### FAQ
- **Style:** native `details` rows with thin top/bottom rules and 60px minimum question height.
- **State:** blue plus changes to minus when open; answers use muted text, 1.7 leading, and a 68ch maximum measure. The MDViewer comparison remains a factual FAQ answer, not a visual endorsement pattern.

### Application Capture
- **Style:** genuine dark-mode application screenshot in a 12px clipped frame with a slate border, broad shadow, and subtle inset highlight.
- **Interaction:** complete image is a zoom-in link to original size; a lower-right magnifier action makes that available on touch. Caption identifies the local example document.

### Workflow Route
- **Style:** centered uppercase Écrire → Relire → PDF labels connected by fine tracks and a glowing six-pixel accent marker.
- **Motion:** hero copy enters over 760ms; capture enters over 900ms after a 100ms delay. Route signal travels for 3.2s with a 350ms offset on the second track. Under reduced motion, animation, transitions, and smooth scrolling are disabled.

## Do's and Don'ts

### Do:
- **Do** keep site color tokens aligned with `global.css`; use the shipped app palette as the identity source.
- **Do** lead with the real dark-mode application capture and preserve its aspect ratio.
- **Do** reserve the bright accent for actions, focus, links, and workflow signal.
- **Do** structure feature content with asymmetric rows and rules rather than generic card grids.
- **Do** preserve reduced-motion behavior and native disclosure semantics.
- **Do** state platform targets separately from currently available beta packages.
- **Do** keep the OpenCode use case secondary to everyday Markdown editing.

### Don't:
- **Don't** reintroduce the previous light paper/editorial palette.
- **Don't** fabricate an application screenshot or imply a macOS beta package is currently published.
- **Don't** position AI as the product's main purpose.
- **Don't** turn the factual MDViewer comparison into a claim that markdim alone can edit or export Markdown.
- **Don't** remove the animated route or make motion ignore reduced-motion preferences.
