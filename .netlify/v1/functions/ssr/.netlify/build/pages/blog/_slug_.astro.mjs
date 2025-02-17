import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderSlot } from '../../chunks/astro/server_CfuWAlbb.mjs';
import 'kleur/colors';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_CW6XRkn8.mjs';
import { $ as $$FormattedDate } from '../../chunks/FormattedDate_Bp_TYzh5.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_CDs1ikiz.mjs';
import 'clsx';
/* empty css                                     */
import { ArrowLeft, ClockCountdown } from '@phosphor-icons/react';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("https://oscarbustos.dev");
const $$Cross = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Cross;
  const { classes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class")} data-astro-cid-o772h47x></div> `;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/components/Cross.astro", undefined);

const $$Astro$1 = createAstro("https://oscarbustos.dev");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "description": description, "image": heroImage }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article> <div class="prose"> <div class="breadcrumb"> <a href="/blog" title="Back to blog"> ${renderComponent($$result2, "ArrowLeft", ArrowLeft, { "size": 18 })} Blog
</a> </div> ${renderComponent($$result2, "Cross", $$Cross, { "classes": "cross" })} ${renderComponent($$result2, "Cross", $$Cross, { "classes": "cross bottom" })} <div class="wrapper"> <header> <h1>${title}</h1> <address> <figure class="author"> <img src="/oscar-bustos.webp"> <figcaption>Oscar Bustos</figcaption> </figure> </address> <p>${description}</p> <div class="times"> <p>${renderComponent($$result2, "ClockCountdown", ClockCountdown, { "size": 21 })} 6 min read</p> <time> ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": pubDate })} ${updatedDate && renderTemplate`<div class="last-updated-on">
Last updated on ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": updatedDate })} </div>`} </time> </div> </header> <div class="content"> ${renderSlot($$result2, $$slots["default"])} </div> </div> </div> </article> ` })} `;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/layouts/BlogPost.astro", undefined);

const $$Astro = createAstro("https://oscarbustos.dev");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.id },
    props: post
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const post = Astro2.props;
  const { Content } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/blog/[slug].astro", undefined);

const $$file = "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
