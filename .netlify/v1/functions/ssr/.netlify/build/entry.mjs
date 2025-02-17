import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_Cz84ocxt.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image/index.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/blog/_slug_.astro.mjs');
const _page3 = () => import('./pages/blog/_---page_.astro.mjs');
const _page4 = () => import('./pages/book.astro.mjs');
const _page5 = () => import('./pages/experience.astro.mjs');
const _page6 = () => import('./pages/game.astro.mjs');
const _page7 = () => import('./pages/projects/abc.astro.mjs');
const _page8 = () => import('./pages/projects/badger.astro.mjs');
const _page9 = () => import('./pages/projects/bento.astro.mjs');
const _page10 = () => import('./pages/projects/bts.astro.mjs');
const _page11 = () => import('./pages/projects/faedodigital.astro.mjs');
const _page12 = () => import('./pages/projects/fcm.astro.mjs');
const _page13 = () => import('./pages/projects/mdi.astro.mjs');
const _page14 = () => import('./pages/projects/pulse.astro.mjs');
const _page15 = () => import('./pages/projects/robotstxt.astro.mjs');
const _page16 = () => import('./pages/projects/topdelmes.astro.mjs');
const _page17 = () => import('./pages/projects.astro.mjs');
const _page18 = () => import('./pages/rss.xml.astro.mjs');
const _page19 = () => import('./pages/timeline.astro.mjs');
const _page20 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/blog/[slug].astro", _page2],
    ["src/pages/blog/[...page].astro", _page3],
    ["src/pages/book.astro", _page4],
    ["src/pages/experience.astro", _page5],
    ["src/pages/game.astro", _page6],
    ["src/pages/projects/abc.astro", _page7],
    ["src/pages/projects/badger.astro", _page8],
    ["src/pages/projects/bento.astro", _page9],
    ["src/pages/projects/bts.astro", _page10],
    ["src/pages/projects/faedodigital.astro", _page11],
    ["src/pages/projects/fcm.astro", _page12],
    ["src/pages/projects/mdi.astro", _page13],
    ["src/pages/projects/pulse.astro", _page14],
    ["src/pages/projects/robotstxt.astro", _page15],
    ["src/pages/projects/topdelmes.astro", _page16],
    ["src/pages/projects/index.astro", _page17],
    ["src/pages/rss.xml.js", _page18],
    ["src/pages/timeline.astro", _page19],
    ["src/pages/index.astro", _page20]
]);
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: undefined
});
const _args = {
    "middlewareSecret": "a953f628-24e8-4a52-adf5-6fae0f0d700c"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
