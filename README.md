# markdim official website

The official, bilingual marketing website for markdim. English is the default at the site root; French pages live under `/fr/`. Built with Astro, Tailwind CSS 4, and Phosphor icons. IBM Plex fonts are self-hosted; no Google Fonts request is needed.

The site is a separate repository from the desktop app and its release workflows. The downloads page reads public GitHub Releases at runtime, so new releases appear without rebuilding the website.

## Local development

Requirements: Node.js 22.12 or later and npm.

```sh
npm ci
npm run dev
```

## Local checks and production build

```sh
npm run check
npm run build
npm run preview
```

The build creates static files in `dist/` for GitHub Pages.

## Languages and routes

| Page | English (default) | French |
|---|---|---|
| Home | `/` | `/fr/` |
| Downloads | `/downloads/` | `/fr/telechargement/` |
| Privacy policy | `/privacy/` | `/fr/confidentialite/` |

Each page has a visible language switcher, canonical URL, and `hreflang` alternate links. Existing French routes `/telechargement/` and `/confidentialite/` redirect to their `/fr/` equivalents.

## Publishing

The GitHub Actions workflow `.github/workflows/deploy.yml` builds the site and deploys it to GitHub Pages on updates to `main` (Pages source: **GitHub Actions**).

Pages URL: <https://numera11y.github.io/markdim-site/>.

## Related projects

- [markdim desktop application](https://github.com/numera11y/markdim)
- [Latest app releases](https://github.com/numera11y/markdim/releases/latest)
