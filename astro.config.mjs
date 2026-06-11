import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://legianmedicalclinic.com',
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date(),
    }),
    tailwind({ configFile: './tailwind.config.cjs' }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
