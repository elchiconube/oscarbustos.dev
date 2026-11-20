# oscarbustos.dev

Portfolio estático de Oscar Bustos, construido con [Astro](https://astro.build).

## Requisitos

- Node.js `>=22.12.0` (ver `.nvmrc`)
- pnpm (versión fijada en `packageManager` de `package.json`)

## Comandos

| Comando | Descripción |
| --- | --- |
| `pnpm install` | Instalar dependencias |
| `pnpm dev` | Servidor de desarrollo |
| `pnpm build` | Build estático en `./dist` |
| `pnpm preview` | Preview local de Astro |
| `pnpm preview:cf` | Preview con Wrangler |
| `pnpm deploy` | Build + deploy a Cloudflare |
| `pnpm lint` | ESLint |
| `pnpm check` | Comprobación de tipos (`astro check`) |

## Deploy (Cloudflare)

Sitio estático con Workers Static Assets. Configuración en `wrangler.jsonc` (`assets.directory`: `./dist`).

En Workers Builds:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Node: `22.12+`
