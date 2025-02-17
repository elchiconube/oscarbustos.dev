import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_CfuWAlbb.mjs';
import 'kleur/colors';
import { $ as $$Container } from '../../chunks/Container_CKziVX-Z.mjs';
import { $ as $$Heading } from '../../chunks/Heading_DgzD4r6r.mjs';
import { a as $$Button, $ as $$MainLayout } from '../../chunks/MainLayout_CDs1ikiz.mjs';
/* empty css                                           */
export { renderers } from '../../renderers.mjs';

const $$Faedodigital = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "data-astro-cid-gnmetrcs": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-gnmetrcs": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, { "title": "Faedo Digital", "description": "2024", "data-astro-cid-gnmetrcs": true })} ${maybeRenderHead()}<section data-astro-cid-gnmetrcs> <header data-astro-cid-gnmetrcs> <figure class="icon" data-astro-cid-gnmetrcs> <a href="https://faedodigital.com/" target="_blank" rel="noopener" data-astro-cid-gnmetrcs><img src="/faedodigital.webp" alt="Faedo Digital logo" data-astro-cid-gnmetrcs></a> </figure> </header> <p data-astro-cid-gnmetrcs>
Faedo Digital it's a small digital agency based in Spain founded by me
        and my wife. We help small rural business to grow their online presence
        and sales. We offer services like SEO, SEM, Social Media, Web
        Development and more.
</p> <figure class="screenshot" data-astro-cid-gnmetrcs> <img src="/faedodigital1.webp" alt="Faedo Digital" data-astro-cid-gnmetrcs> </figure> <p data-astro-cid-gnmetrcs>
Since pandemic situation we decided to move to a small village in the
        north of Spain and start our own business. Our goal is to help small
        business to grow and be more competitive in the digital world.
</p> <figure class="screenshot" data-astro-cid-gnmetrcs> <img src="/faedodigital2.webp" alt="Faedo Digital" data-astro-cid-gnmetrcs> </figure> <aside data-astro-cid-gnmetrcs> <ul data-astro-cid-gnmetrcs> <li data-astro-cid-gnmetrcs> ${renderComponent($$result3, "Button", $$Button, { "href": "https://faedodigital.com/", "target": "_blank", "rel": "noopener", "text": "Website", "data-astro-cid-gnmetrcs": true })} </li> </ul> </aside> </section>  ` })} ` })}`;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/projects/faedodigital.astro", undefined);

const $$file = "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/projects/faedodigital.astro";
const $$url = "/projects/faedodigital/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faedodigital,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
