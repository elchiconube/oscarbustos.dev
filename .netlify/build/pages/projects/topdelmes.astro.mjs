import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_CfuWAlbb.mjs';
import 'kleur/colors';
import { $ as $$Container } from '../../chunks/Container_CKziVX-Z.mjs';
import { $ as $$Heading } from '../../chunks/Heading_DgzD4r6r.mjs';
import { $ as $$Features } from '../../chunks/Features_D4gO8LkV.mjs';
import { a as $$Button, $ as $$MainLayout } from '../../chunks/MainLayout_CDs1ikiz.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$Topdelmes = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "data-astro-cid-6utzrkj7": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-6utzrkj7": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, { "title": "Topdelmes", "description": "2023", "data-astro-cid-6utzrkj7": true })} ${maybeRenderHead()}<section data-astro-cid-6utzrkj7> <header data-astro-cid-6utzrkj7> <figure class="icon" data-astro-cid-6utzrkj7> <a href="https://topdelmes.com " target="_blank" rel="noopener" data-astro-cid-6utzrkj7><img src="/topdelmes.webp" alt="Topdelmes logo" data-astro-cid-6utzrkj7></a> </figure> </header> <p data-astro-cid-6utzrkj7>
In 2023, leveraging the rise of AI and technological advancements, I
        created topdelmes.com, a fully automated website that ranks and analyzes
        the most popular series and movies from leading streaming platforms like
        Netflix, HBO, Amazon Prime Video, Disney+, Apple TV+, Movistar+, and
        Filmin. The platform updates every 24 hours, providing users with
        dynamic rankings and AI-generated opinion articles to help them discover
        the best content effortlessly.
</p> <p data-astro-cid-6utzrkj7>
As the creator and developer of topdelmes.com, I designed and built both
        the backend and frontend architecture. The backend is powered by Strapi
        and Node.js, ensuring efficient content management and data processing.
        For the frontend, I utilized Next.js to deliver a fast, responsive, and
        user-friendly interface. By combining automation with AI-driven
        insights, I aimed to simplify content discovery and enhance the user
        experience in navigating the ever-growing world of digital
        entertainment.
</p> ${renderComponent($$result3, "Features", $$Features, { "features": [
    "Updated rankings every 24h",
    "Reviews based on AI every day",
    "Top 3 on Google Search ranking with project key words",
    "Less than 5\u20AC month cost"
  ], "data-astro-cid-6utzrkj7": true })} </section> ` })} <figure class="screenshot" data-astro-cid-6utzrkj7> <a href="https://www.topdelmes.com/" title="Topdelmes launch" data-astro-cid-6utzrkj7><img src="/topdelmes1.webp" alt="Topdelmes" data-astro-cid-6utzrkj7></a> </figure> ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-6utzrkj7": true }, { "default": ($$result3) => renderTemplate` <aside data-astro-cid-6utzrkj7> <ul data-astro-cid-6utzrkj7> <li data-astro-cid-6utzrkj7> ${renderComponent($$result3, "Button", $$Button, { "href": "https://topdelmes.com/", "target": "_blank", "rel": "noopener", "text": "Website", "data-astro-cid-6utzrkj7": true })} </li> </ul> </aside> ` })}  ` })}`;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/projects/topdelmes.astro", undefined);

const $$file = "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/projects/topdelmes.astro";
const $$url = "/projects/topdelmes/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Topdelmes,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
