---
version: 1
slug: telechargement
primary_target: src/pages/telechargement.astro
related_targets:
  - src/layouts/SiteLayout.astro
  - src/pages/index.astro
---

# markdim downloads

Mode: Operate. Audience: people ready to install or update markdim. Job: choose a published version, identify the correct OS/architecture package, and download it with its checksum when available. Show all published releases, including prereleases; never imply a macOS package exists when a release has none. Release metadata is read from the public GitHub Releases API at page visit so every publication is reflected without a site rebuild. If the API is unavailable, explain the failure and link directly to GitHub Releases.

## Direction contract

THESIS: A version ledger, not another product pitch; make each release and its actual downloads immediately scannable.

OWN-WORLD: Keep markdim's existing dark blue-charcoal surfaces, cool legible text, fine slate rules, restrained periwinkle actions, and IBM Plex Sans. Extend the site language with a ruled release ledger, not generic card stacks.

STORY: The visitor sees the newest release first, recognizes beta/stable status, finds their platform and architecture, downloads the installer/archive/package, and can verify its SHA-256 file.

FIRST VIEWPORT: Compact shared navigation; a direct “Téléchargements” heading, short note that releases (including betas) stay synchronized automatically, a labelled platform filter, and the latest release's versions/status/assets visible without scrolling on desktop.

FORM: Readable, descending release ledger with each version as a ruled section and its real packages grouped by platform. Native select, ordinary download links, and expandable release notes if present; preserve compact/mobile wrapping and visible keyboard focus.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
