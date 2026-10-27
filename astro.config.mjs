import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

const siteBase = '/markdim-site';

export default defineConfig({
  site: 'https://numera11y.github.io',
  base: siteBase,
  trailingSlash: 'always',
  redirects: {
    '/telechargement/': `${siteBase}/fr/telechargement/`,
    '/confidentialite/': `${siteBase}/fr/confidentialite/`,
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
