# markdim — site officiel

Site de présentation en français, construit avec Astro, Tailwind CSS 4 et Phosphor. Ce dépôt est indépendant du dépôt de l’application et de ses workflows de release. Les polices IBM Plex sont auto-hébergées pour éviter une dépendance à Google Fonts.

## Développement

Prérequis : Node.js 24 et npm.

```sh
npm ci
npm run dev
```

## Vérification et build

```sh
npm run check
npm run build
npm run preview
```

## Publication

Le workflow GitHub Actions `.github/workflows/deploy.yml` construit le site et le publie sur GitHub Pages à chaque mise à jour de `main`. Les versions de l’application continuent d’être publiées par le dépôt markdim principal; les boutons de téléchargement de ce site pointent vers ces releases.

URL Pages prévue : <https://numera11y.github.io/markdim-site/>.
