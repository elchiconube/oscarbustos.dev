import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_CfuWAlbb.mjs';
import 'kleur/colors';
import { $ as $$Container } from '../../chunks/Container_CKziVX-Z.mjs';
import { $ as $$Heading } from '../../chunks/Heading_DgzD4r6r.mjs';
import { $ as $$Features } from '../../chunks/Features_D4gO8LkV.mjs';
import { a as $$Button, $ as $$MainLayout } from '../../chunks/MainLayout_CDs1ikiz.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$Robotstxt = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "data-astro-cid-k43qbn3m": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-k43qbn3m": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, { "title": "Robots.txt", "description": "2024", "data-astro-cid-k43qbn3m": true })} ${maybeRenderHead()}<section data-astro-cid-k43qbn3m> <header data-astro-cid-k43qbn3m> <figure class="icon" data-astro-cid-k43qbn3m> <a href="https://generaterobotstxt.com " target="_blank" rel="noopener" data-astro-cid-k43qbn3m><img src="/robotstxt.webp" alt="Robots.txt logo" data-astro-cid-k43qbn3m></a> </figure> </header> <p data-astro-cid-k43qbn3m>
The robots.txt Generator is a powerful yet simple tool designed to help
        you create and manage your robots.txt file effortlessly. This tool lets
        you control how search engines, web crawlers or AI bots interact with
        your site.
</p> <video preload="auto" autoplay loop muted data-astro-cid-k43qbn3m> <source src="/robotstxt.mp4" type="video/mp4" data-astro-cid-k43qbn3m> </video> <figure class="screenshot" data-astro-cid-k43qbn3m> <a href="https://www.producthunt.com/posts/robots-txt-generator-3" title="Product Hunt launch" data-astro-cid-k43qbn3m><img width="200" src="/ph.svg" alt="Product Hunt" data-astro-cid-k43qbn3m></a> </figure> <p data-astro-cid-k43qbn3m>
This little open source solution was awared as second product of the day
        at Product Hunt, with 344 votes. All without any campaign. The project
        was builded with NextJS and Radix UI.
</p> ${renderComponent($$result3, "Features", $$Features, { "features": [
    "Create custom robots.txt file based on your project and preferences",
    "Check your robots.txt",
    "Get the robots.txt from any website"
  ], "data-astro-cid-k43qbn3m": true })} <aside data-astro-cid-k43qbn3m> <ul data-astro-cid-k43qbn3m> <li data-astro-cid-k43qbn3m> ${renderComponent($$result3, "Button", $$Button, { "href": "https://github.com/elchiconube/generate-robots-txt", "target": "_blank", "rel": "noopener", "text": `Check the code`, "data-astro-cid-k43qbn3m": true })} </li> <li data-astro-cid-k43qbn3m> ${renderComponent($$result3, "Button", $$Button, { "href": "https://generaterobotstxt.com/", "target": "_blank", "rel": "noopener", "text": "Website", "data-astro-cid-k43qbn3m": true })} </li> </ul> </aside> </section> ` })}  ` })}`;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/projects/robotstxt.astro", undefined);

const $$file = "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/projects/robotstxt.astro";
const $$url = "/projects/robotstxt/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Robotstxt,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
