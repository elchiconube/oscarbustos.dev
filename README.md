# oscarbustos.dev

Portfolio estático de Oscar Bustos, construido con [Astro](https://astro.build).

## Requisitos

- Node.js `>=22.12.0` (ver `.nvmrc`)

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build estático en `./dist` |
| `npm run preview` | Preview local de Astro |
| `npm run preview:cf` | Preview con Wrangler |
| `npm run deploy` | Build + deploy a Cloudflare |

## Deploy (Cloudflare)

Sitio estático con Workers Static Assets. Configuración en `wrangler.jsonc` (`assets.directory`: `./dist`).

En Workers Builds:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Node: `22.12+`
