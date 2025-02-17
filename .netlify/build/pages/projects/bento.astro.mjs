import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_CfuWAlbb.mjs';
import 'kleur/colors';
import { $ as $$Container } from '../../chunks/Container_CKziVX-Z.mjs';
import { $ as $$Heading } from '../../chunks/Heading_DgzD4r6r.mjs';
import { a as $$Button, $ as $$MainLayout } from '../../chunks/MainLayout_CDs1ikiz.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Bento = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "data-astro-cid-ryynq4aa": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-ryynq4aa": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, { "title": "Bento", "description": "2022", "data-astro-cid-ryynq4aa": true })} ${maybeRenderHead()}<section data-astro-cid-ryynq4aa> <header data-astro-cid-ryynq4aa> <figure class="icon" data-astro-cid-ryynq4aa> <a href="https://github.com/elchiconube/bento-components" target="_blank" rel="noopener" data-astro-cid-ryynq4aa><img src="/bento.webp" alt="Bento logo" data-astro-cid-ryynq4aa></a> </figure> </header> <p data-astro-cid-ryynq4aa>
Bento is an open-source component library for ReactJS, designed to
        streamline the development process and ensure visual consistency across
        applications. Built with scalability and reusability in mind, Bento
        simplifies the creation of user interfaces while reducing development
        time and effort. This library is ideal for teams looking to maintain
        high standards in design and functionality while accelerating project
        delivery.
</p> <aside data-astro-cid-ryynq4aa> <ul data-astro-cid-ryynq4aa> <li data-astro-cid-ryynq4aa> ${renderComponent($$result3, "Button", $$Button, { "href": "https://github.com/elchiconube/bento-components", "target": "_blank", "rel": "noopener", "text": "Code", "data-astro-cid-ryynq4aa": true })} </li> </ul> </aside> </section>  ` })} ` })}`;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/projects/bento.astro", undefined);

const $$file = "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/projects/bento.astro";
const $$url = "/projects/bento/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Bento,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
