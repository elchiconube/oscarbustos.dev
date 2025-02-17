import { a as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_CfuWAlbb.mjs';
import 'kleur/colors';
import { $ as $$MyBook } from '../chunks/MyBook_C3TWFUWc.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_CDs1ikiz.mjs';
export { renderers } from '../renderers.mjs';

const $$Book = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MyBook", $$MyBook, {})} ` })}`;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/book.astro", undefined);

const $$file = "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/book.astro";
const $$url = "/book/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Book,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
