// astro.config.mjs
// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import path from 'path';
import react from '@astrojs/react';
import compressor from 'astro-compressor';


import cloudflare from '@astrojs/cloudflare';


// https://astro.build/config
export default defineConfig({
  output: 'static',

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },

  trailingSlash: 'always',
  site: 'https://oscarbustos.dev',

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Nunito',
      cssVariable: '--nunito-font',
      weights: ['200 1000'],
      styles: ['normal'],
      fallbacks: ['sans-serif']
    },
    {
      provider: fontProviders.google(),
      name: 'Fraunces',
      cssVariable: '--fraunces-font',
      weights: ['100 900'],
      styles: ['normal', 'italic'],
      fallbacks: ['serif']
    }
  ],

  integrations: [
    mdx(),
    sitemap(),
    react(),
    compressor({
      fileExtensions: ['.html', '.css', '.js', '.svg', '.xml']
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
      },
      // Una sola copia de React en SSR (evita useContext/useState null con @phosphor-icons/react)
      dedupe: ['react', 'react-dom']
    },
    ssr: {
      noExternal: ['@phosphor-icons/react']
    }
  },

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    domains: ['oscarbustos.dev']
  },

  adapter: cloudflare()
});