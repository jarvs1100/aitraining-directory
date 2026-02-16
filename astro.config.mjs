import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aitraining.directory',
  output: 'static',
  outDir: './docs',
  integrations: [sitemap()],
  build: {
    format: 'directory'
  }
});
