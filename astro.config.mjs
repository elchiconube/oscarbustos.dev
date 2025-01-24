// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import path from 'path';
import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
  prefetch: true,
  trailingSlash: 'always',
  site: 'https://oscarbustos.dev',
  integrations: [mdx(), sitemap(), react()],
  vite: {
      resolve: {
          alias: {
              '@': path.resolve('./src')
          }
      }
  },
});