import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_CfuWAlbb.mjs';
import 'kleur/colors';
import { $ as $$Container } from '../../chunks/Container_CKziVX-Z.mjs';
import { $ as $$Heading } from '../../chunks/Heading_DgzD4r6r.mjs';
import { a as $$Button, $ as $$MainLayout } from '../../chunks/MainLayout_CDs1ikiz.mjs';
/* empty css                                  */
export { renderers } from '../../renderers.mjs';

const $$Bts = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "data-astro-cid-nixby7jt": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-nixby7jt": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, { "title": "BTS", "description": "2015", "data-astro-cid-nixby7jt": true })} ${maybeRenderHead()}<section data-astro-cid-nixby7jt> <header data-astro-cid-nixby7jt> <figure class="icon" data-astro-cid-nixby7jt> <a href="https://bts.com/" target="_blank" rel="noopener" data-astro-cid-nixby7jt><img src="/bts.webp" alt="BTS logo" data-astro-cid-nixby7jt></a> </figure> </header> <p data-astro-cid-nixby7jt>
BTS is a global leader in creating innovative solutions to improve
        business operations and decision-making. During my time at BTS, I led
        the development of a knowledge management platform designed to
        streamline the organization and accessibility of critical information.
        The platform provided teams with a centralized system for managing
        content, improving collaboration, and driving operational efficiency.
</p> <figure class="screenshot" data-astro-cid-nixby7jt> <img src="/bts1.webp" alt="BTS screenshot" data-astro-cid-nixby7jt> </figure> <p data-astro-cid-nixby7jt>
As the Frontend Technical Lead at BTS, I spearheaded the architecture
        and development of the platform's user-facing systems. I implemented a
        REST API using Strapi to manage and store content efficiently, while
        also designing and developing an intuitive web application to enable
        seamless content consumption. I guided the team in adopting best
        practices and ensuring scalability across the project. My role also
        involved mentoring team members, fostering an environment of
        collaboration, and delivering a high-quality product aligned with the
        company's vision. This position further strengthened my ability to lead
        teams and deliver impactful digital solutions in a global context.
</p> <figure class="screenshot" data-astro-cid-nixby7jt> <img src="/bts2.webp" alt="BTS screenshot" data-astro-cid-nixby7jt> </figure> <aside data-astro-cid-nixby7jt> <ul data-astro-cid-nixby7jt> <li data-astro-cid-nixby7jt> ${renderComponent($$result3, "Button", $$Button, { "href": "https://bts.com/", "target": "_blank", "rel": "noopener", "text": "Website", "data-astro-cid-nixby7jt": true })} </li> </ul> </aside> </section>  ` })} ` })}`;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/projects/bts.astro", undefined);

const $$file = "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/projects/bts.astro";
const $$url = "/projects/bts/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Bts,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
