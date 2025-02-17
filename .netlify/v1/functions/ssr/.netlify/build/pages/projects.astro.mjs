import { a as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_CfuWAlbb.mjs';
import 'kleur/colors';
import { $ as $$LatestsProjects } from '../chunks/LatestsProjects_B9NvjLgh.mjs';
import { $ as $$Container } from '../chunks/Container_CKziVX-Z.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_CDs1ikiz.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "LatestsProjects", $$LatestsProjects, { "full": true })} ` })} ` })}`;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/projects/index.astro", undefined);

const $$file = "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/projects/index.astro";
const $$url = "/projects/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
