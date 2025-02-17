import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_CfuWAlbb.mjs';
import 'kleur/colors';
import { $ as $$Container } from '../../chunks/Container_CKziVX-Z.mjs';
import { $ as $$Heading } from '../../chunks/Heading_DgzD4r6r.mjs';
import { a as $$Button, $ as $$MainLayout } from '../../chunks/MainLayout_CDs1ikiz.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Pulse = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "data-astro-cid-notleoo6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-notleoo6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, { "title": "Pulse", "description": "2022", "data-astro-cid-notleoo6": true })} ${maybeRenderHead()}<section data-astro-cid-notleoo6> <header data-astro-cid-notleoo6> <figure class="icon" data-astro-cid-notleoo6> <a href="https://www.urbandataanalytics.com/pulse" target="_blank" rel="noopener" data-astro-cid-notleoo6><img src="/pulse.webp" alt="Pulse logo" data-astro-cid-notleoo6></a> </figure> </header> <p data-astro-cid-notleoo6>
Pulse is an innovative platform designed to streamline real estate
        investment by providing detailed insights and tools to evaluate and
        identify opportunities. Focused on data visualization and user-centric
        design, Pulse enables investors to analyze market trends, property
        performance, and financial projections with ease. This cutting-edge
        solution empowers real estate professionals to make data-driven
        decisions, unlocking valuable opportunities in an increasingly
        competitive market.
</p> <figure class="screenshot" data-astro-cid-notleoo6> <img src="/pulse1.webp" alt="Pulse screenshot" data-astro-cid-notleoo6> </figure> <p data-astro-cid-notleoo6>
As the Frontend Technical Lead for Pulse, I oversaw the development and
        architecture of the platform's user interface. Leveraging ReactJS,
        Chart.js, and Styled Components, I led the team in building scalable,
        visually engaging, and intuitive components that transformed complex
        data into actionable insights. I established robust testing practices
        using Jest to ensure a high-quality, stable product. Beyond the
        technical responsibilities, I guided the team by fostering
        collaboration, mentoring developers, and ensuring alignment with
        urbanData Analytics' vision for innovation in real estate technology. My
        leadership ensured the delivery of a polished platform that met both
        business and user needs.
</p> <aside data-astro-cid-notleoo6> <ul data-astro-cid-notleoo6> <li data-astro-cid-notleoo6> ${renderComponent($$result3, "Button", $$Button, { "href": "https://www.urbandataanalytics.com/pulse", "target": "_blank", "rel": "noopener", "text": "Website", "data-astro-cid-notleoo6": true })} </li> </ul> </aside> </section>  ` })} ` })}`;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/projects/pulse.astro", undefined);

const $$file = "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/projects/pulse.astro";
const $$url = "/projects/pulse/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pulse,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
