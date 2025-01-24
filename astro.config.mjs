// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import path from 'path';
import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  // Esto mejora el rendimiento de las transiciones
  prefetch: true,

  site: 'https://example.com',
  integrations: [mdx(), sitemap(), react()],

  vite: {
      resolve: {
          alias: {
              '@': path.resolve('./src')
          }
      }
  },

  adapter: netlify()
});