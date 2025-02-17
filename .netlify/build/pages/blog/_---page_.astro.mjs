import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_CfuWAlbb.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_Da8MJUMy.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_CDs1ikiz.mjs';
import { $ as $$FormattedDate } from '../../chunks/FormattedDate_Bp_TYzh5.mjs';
import { $ as $$Container } from '../../chunks/Container_CKziVX-Z.mjs';
import { ArrowUpRight, ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import { $ as $$Heading } from '../../chunks/Heading_DgzD4r6r.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://oscarbustos.dev");
async function getStaticPaths({ paginate }) {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return paginate(posts, { pageSize: 6 });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "data-astro-cid-a7wiyce3": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-a7wiyce3": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, { "title": "Blog", "description": "Homines, dum docent, discunt", "data-astro-cid-a7wiyce3": true })} ${maybeRenderHead()}<section data-astro-cid-a7wiyce3> <ul class="posts-list" data-astro-cid-a7wiyce3> ${page.data.map((post) => renderTemplate`<li class="post-item" data-astro-cid-a7wiyce3> <a${addAttribute(`/blog/${post.id}/`, "href")} data-astro-cid-a7wiyce3> <time class="date" data-astro-cid-a7wiyce3> ${renderComponent($$result3, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-a7wiyce3": true })} </time> <h2 class="title" data-astro-cid-a7wiyce3> ${post.data.title} ${renderComponent($$result3, "ArrowUpRight", ArrowUpRight, { "size": 16, "data-astro-cid-a7wiyce3": true })}${" "} </h2> <p data-astro-cid-a7wiyce3>${post.data.description}</p> </a> </li>`)} </ul> ${page.lastPage > 1 && renderTemplate`<nav class="pagination" data-astro-cid-a7wiyce3> ${page.url.prev && renderTemplate`<a${addAttribute(page.url.prev, "href")} data-astro-cid-a7wiyce3> ${renderComponent($$result3, "ArrowLeft", ArrowLeft, { "size": 18, "data-astro-cid-a7wiyce3": true })}
Previous
</a>`} ${page.url.next && renderTemplate`<a${addAttribute(page.url.next, "href")} data-astro-cid-a7wiyce3>
Next ${renderComponent($$result3, "ArrowRight", ArrowRight, { "size": 18, "data-astro-cid-a7wiyce3": true })} </a>`} </nav>`} </section> ` })} ` })} `;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/blog/[...page].astro", undefined);

const $$file = "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/blog/[...page].astro";
const $$url = "/blog/[...page]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
