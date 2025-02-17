// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import path from 'path';
import react from '@astrojs/react';
import compressor from 'astro-compressor';
import netlify from '@astrojs/netlify';


// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify({
    edgeMiddleware: true
  }),
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  trailingSlash: 'always',
  site: 'https://oscarbustos.dev',
  integrations: [
    mdx(),
    sitemap(),
    react(),
    compressor({
      fileType: ['html', 'css', 'js', 'svg', 'xml']
    })
  ],
  vite: {
    build: {
      cssMinify: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    },
    ssr: {
      noExternal: ['@fontsource-variable/*']
    }
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    domains: ['oscarbustos.dev']
  }
});