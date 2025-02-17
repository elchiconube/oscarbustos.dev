import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_CfuWAlbb.mjs';
import 'kleur/colors';
import { $ as $$Container } from '../../chunks/Container_CKziVX-Z.mjs';
import { $ as $$Heading } from '../../chunks/Heading_DgzD4r6r.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_CDs1ikiz.mjs';
/* empty css                                  */
export { renderers } from '../../renderers.mjs';

const $$Abc = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "data-astro-cid-vagii2et": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-vagii2et": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, { "title": "ABC", "description": "2011", "data-astro-cid-vagii2et": true })} ${maybeRenderHead()}<section data-astro-cid-vagii2et> <header data-astro-cid-vagii2et> <figure class="icon" data-astro-cid-vagii2et> <a href="https://abc.es/" target="_blank" rel="noopener" data-astro-cid-vagii2et><img src="/abc.webp" alt="ABC logo" data-astro-cid-vagii2et></a> </figure> </header> <p data-astro-cid-vagii2et>
During my time at Vocento, I contributed to the development of various
        digital solutions for some of Spain's leading media outlets. This role
        allowed me to refine my skills in creating user-friendly web
        applications and adapting designs for compatibility with older browsers,
        ensuring accessibility for a diverse audience. My work focused on
        delivering innovative solutions that enhanced the digital presence of
        the company's brands and improved the user experience for their readers.
</p> <figure class="screenshot" data-astro-cid-vagii2et> <img src="/vocento.webp" alt="Vocento projects" data-astro-cid-vagii2et> </figure> <p data-astro-cid-vagii2et>
One of my standout projects at Vocento was the development of the ABC
        app, a groundbreaking project that enabled users to access high-quality
        content on iOS and Android devices. This web-based application showcased
        my ability to integrate responsive designs and deliver a seamless user
        experience across platforms. The app was not only a technical
        achievement but also received industry recognition for its design,
        earning a prestigious award. This project highlighted my ability to lead
        the development of impactful digital solutions, combining technical
        excellence with user-focused design.
</p> </section>  ` })} ` })}`;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/projects/abc.astro", undefined);

const $$file = "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/projects/abc.astro";
const $$url = "/projects/abc/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Abc,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
