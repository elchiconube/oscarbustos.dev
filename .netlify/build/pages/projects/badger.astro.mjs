import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_CfuWAlbb.mjs';
import 'kleur/colors';
import { $ as $$Container } from '../../chunks/Container_CKziVX-Z.mjs';
import { $ as $$Heading } from '../../chunks/Heading_DgzD4r6r.mjs';
import { a as $$Button, $ as $$MainLayout } from '../../chunks/MainLayout_CDs1ikiz.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Badger = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "data-astro-cid-inggmvnp": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-inggmvnp": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, { "title": "Badger", "description": "2023", "data-astro-cid-inggmvnp": true })} ${maybeRenderHead()}<section data-astro-cid-inggmvnp> <header data-astro-cid-inggmvnp> <figure class="icon" data-astro-cid-inggmvnp> <a href="https://getbadger.io/" target="_blank" rel="noopener" data-astro-cid-inggmvnp><img src="/badger.webp" alt="Badger logo" data-astro-cid-inggmvnp></a> </figure> </header> <p data-astro-cid-inggmvnp>
Badger is a powerful tool designed to help digital agencies and
        freelancers streamline their SEO reporting process. With its white-label
        capabilities, Badger enables users to create fully branded, customizable
        reports that include metrics such as website traffic, keyword rankings,
        and backlinks. These reports not only provide clear insights into SEO
        performance but also strengthen client relationships by delivering
        tailored, professional updates. Badger's intuitive design and data
        visualization features make it easy to highlight trends, provide
        actionable recommendations, and maintain consistent communication with
        clients.
</p> <figure class="screenshot" data-astro-cid-inggmvnp> <img src="/badger1.gif" alt="Badger screenshot" data-astro-cid-inggmvnp> </figure> <p data-astro-cid-inggmvnp>
As a Senior Frontend Developer for the Badger project, I was part of a
        small, dedicated team that built the platform from scratch. Leveraging
        technologies like ReactJS, CSS Modules, Cypress, and Chart.js, I
        developed user-friendly interfaces and implemented advanced data
        visualization tools to enhance the reporting experience. I collaborated
        closely with the team to ensure a seamless integration of features and
        maintain a high-quality codebase through robust testing. My role also
        involved creating scalable components and ensuring the platform
        delivered consistent performance, aligning with marketgoo's mission to
        empower agencies with effective and customizable SEO solutions.
</p> <figure class="screenshot" data-astro-cid-inggmvnp> <img src="/badger2.webp" alt="Badger screenshot" data-astro-cid-inggmvnp> </figure> <div class="youtube" data-astro-cid-inggmvnp> <iframe width="600px" height="336px" src="https://www.youtube.com/embed/FvuYtYbfLbs?si=ZGyUgFp2K1viXlcO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen data-astro-cid-inggmvnp></iframe> </div> <aside data-astro-cid-inggmvnp> <ul data-astro-cid-inggmvnp> <li data-astro-cid-inggmvnp> ${renderComponent($$result3, "Button", $$Button, { "href": "https://getbadger.io/", "target": "_blank", "rel": "noopener", "text": "Website", "data-astro-cid-inggmvnp": true })} </li> </ul> </aside> </section>  ` })} ` })}`;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/projects/badger.astro", undefined);

const $$file = "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/projects/badger.astro";
const $$url = "/projects/badger/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Badger,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
