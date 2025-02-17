import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_CfuWAlbb.mjs';
import 'kleur/colors';
import { $ as $$Container } from '../../chunks/Container_CKziVX-Z.mjs';
import { $ as $$Heading } from '../../chunks/Heading_DgzD4r6r.mjs';
import { a as $$Button, $ as $$MainLayout } from '../../chunks/MainLayout_CDs1ikiz.mjs';
/* empty css                                  */
export { renderers } from '../../renderers.mjs';

const $$Mdi = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "data-astro-cid-nckzzwyc": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-nckzzwyc": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, { "title": "mDI", "description": "2024", "data-astro-cid-nckzzwyc": true })} ${maybeRenderHead()}<section data-astro-cid-nckzzwyc> <header data-astro-cid-nckzzwyc> <figure class="icon" data-astro-cid-nckzzwyc> <a href="https://mdi.marketgoo.com/" target="_blank" rel="noopener" data-astro-cid-nckzzwyc><img src="/mDI.webp" alt="mDI logo" data-astro-cid-nckzzwyc></a> </figure> </header> <p data-astro-cid-nckzzwyc>
marketgoo Domain Intelligence (mDI) is a powerful platform designed to
        extract, enrich, and analyze domain data at scale. It empowers
        businesses to gain a deeper understanding of their customers, uncover
        hidden issues, and identify upselling opportunities. By bridging the gap
        between what customers need and what companies can provide, mDI helps
        businesses deliver personalized, relevant experiences that drive
        customer retention and revenue growth. With a focus on staying relevant
        and building trust, mDI ensures that every interaction strengthens
        relationships and aligns with the brand's promise.
</p> <figure class="screenshot" data-astro-cid-nckzzwyc> <img src="/mdi1.gif" alt="mDI screenshot" data-astro-cid-nckzzwyc> </figure> <p data-astro-cid-nckzzwyc>
As a Senior Frontend Developer for the mDI project, I played a critical
        role in building the platform from the ground up. Collaborating within a
        small, focused team, I utilized ReactJS, CSS Modules, Cypress, and
        Chart.js to create an intuitive and efficient user experience. My
        responsibilities included developing robust interfaces, implementing
        data visualization tools, and ensuring the application met high
        standards of quality through thorough testing. This project showcased my
        ability to work in an agile environment, crafting a product that meets
        both technical and user needs, while aligning with marketgoo's vision
        for innovation and customer-centric solutions.
</p> <aside data-astro-cid-nckzzwyc> <ul data-astro-cid-nckzzwyc> <li data-astro-cid-nckzzwyc> ${renderComponent($$result3, "Button", $$Button, { "href": "https://mdi.marketgoo.com/", "target": "_blank", "rel": "noopener", "text": "Website", "data-astro-cid-nckzzwyc": true })} </li> </ul> </aside> </section>  ` })} ` })}`;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/projects/mdi.astro", undefined);

const $$file = "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/projects/mdi.astro";
const $$url = "/projects/mdi/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Mdi,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
