import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_CfuWAlbb.mjs';
import 'kleur/colors';
import { $ as $$Container } from '../../chunks/Container_CKziVX-Z.mjs';
import { $ as $$Heading } from '../../chunks/Heading_DgzD4r6r.mjs';
import { a as $$Button, $ as $$MainLayout } from '../../chunks/MainLayout_CDs1ikiz.mjs';
/* empty css                                  */
export { renderers } from '../../renderers.mjs';

const $$Fcm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "data-astro-cid-yrga72si": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-yrga72si": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, { "title": "FCM", "description": "2025", "data-astro-cid-yrga72si": true })} ${maybeRenderHead()}<section data-astro-cid-yrga72si> <header data-astro-cid-yrga72si> <figure class="icon" data-astro-cid-yrga72si> <a href="https://www.fcmtravel.com/" target="_blank" rel="noopener" data-astro-cid-yrga72si><img src="/fcm.webp" alt="FCM logo" data-astro-cid-yrga72si></a> </figure> </header> <p data-astro-cid-yrga72si>
FCM Travel is a leading corporate travel management platform trusted by
        global brands such as P&G and Toyota. The platform is designed to
        streamline business travel with cutting-edge technology, offering a
        seamless experience for users while providing valuable insights and
        strategic solutions. Known for its collaborative approach, FCM combines
        a talented international team with agile methodologies to deliver a
        product that meets the evolving needs of modern businesses.
</p> <p data-astro-cid-yrga72si>
As a Senior Frontend Developer at FCM Travel, I play a key role in
        enhancing the platform's user experience. I've worked closely with
        design and product teams to lead a complete restyling of the platform,
        creating a custom component library with ReactJS and implementing it
        across the entire project. The platform is built with Next.js, SASS, and
        GraphQL, employing strategies like Server-Side Rendering to ensure
        performance and scalability. Additionally, I help maintain high-quality
        standards by integrating Cypress for robust testing. My work is driven
        by collaboration within agile squads, fostering innovation and
        adaptability to deliver impactful solutions.
</p> <aside data-astro-cid-yrga72si> <ul data-astro-cid-yrga72si> <li data-astro-cid-yrga72si> ${renderComponent($$result3, "Button", $$Button, { "href": "https://https://www.fcmtravel.com/", "target": "_blank", "rel": "noopener", "text": "Website", "data-astro-cid-yrga72si": true })} </li> </ul> </aside> </section>  ` })} ` })}`;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/projects/fcm.astro", undefined);

const $$file = "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/projects/fcm.astro";
const $$url = "/projects/fcm/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Fcm,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
