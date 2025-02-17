import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CfuWAlbb.mjs';
import 'kleur/colors';
import { $ as $$MyBook } from '../chunks/MyBook_C3TWFUWc.mjs';
import { $ as $$Container } from '../chunks/Container_CKziVX-Z.mjs';
/* empty css                                 */
import 'clsx';
import { $ as $$LatestsProjects } from '../chunks/LatestsProjects_B9NvjLgh.mjs';
import { a as $$Button, b as $$SocialLinks, $ as $$MainLayout } from '../chunks/MainLayout_CDs1ikiz.mjs';
import { g as getCollection } from '../chunks/_astro_content_s6EtqOHK.mjs';
import { ArrowUpRight } from '@phosphor-icons/react';
import { $ as $$FormattedDate } from '../chunks/FormattedDate_Bp_TYzh5.mjs';
import { $ as $$Heading } from '../chunks/Heading_DgzD4r6r.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "data-astro-cid-bbe6dxrz": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article data-astro-cid-bbe6dxrz> <p data-astro-cid-bbe6dxrz>Hi!, I'm</p> <figure data-astro-cid-bbe6dxrz> <img src="oscar-bustos.webp" alt="Oscar Bustos, Frontend Developer" data-astro-cid-bbe6dxrz> </figure> <h1 class="gradient retro-2" data-astro-cid-bbe6dxrz>Oscar Bustos,</h1> <p class="subtitle" data-astro-cid-bbe6dxrz>
Senior Frontend Developer at <strong data-astro-cid-bbe6dxrz>FCM</strong> </p> </article> ` })} `;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/components/Hero.astro", undefined);

const $$Introduction = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<p data-astro-cid-aybbmsmj>
I'm a frontend developer passionate about crafting experiences for the web. I thrive on building solutions that simplify lives and turning small ideas into impactful projects. I also enjoy creating indie tools and sharing knowledge with the tech community.
</p> `;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/components/Introduction.astro", undefined);

const $$LatestsPosts = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()).slice(0, 2);
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-epul5nmo> ${renderComponent($$result, "Heading", $$Heading, { "title": "Last articles", "description": "Homines, dum docent, discunt", "data-astro-cid-epul5nmo": true })} <ul class="posts-list" data-astro-cid-epul5nmo> ${posts?.map((post) => renderTemplate`<li class="post-item" data-astro-cid-epul5nmo> <a${addAttribute(`/blog/${post.id}/`, "href")} data-astro-cid-epul5nmo> <time class="date" data-astro-cid-epul5nmo> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-epul5nmo": true })} </time> <h2 class="title" data-astro-cid-epul5nmo> ${post.data.title} ${renderComponent($$result, "ArrowUpRight", ArrowUpRight, { "size": 16, "data-astro-cid-epul5nmo": true })}${" "} </h2> <p data-astro-cid-epul5nmo>${post.data.description}</p> </a> </li>`)} </ul> <div class="center" data-astro-cid-epul5nmo> ${renderComponent($$result, "Button", $$Button, { "href": "/blog", "text": "See more articles", "data-astro-cid-epul5nmo": true })} </div> </section> `;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/components/LatestsPosts.astro", undefined);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SocialLinks", $$SocialLinks, {})} ${renderComponent($$result3, "Introduction", $$Introduction, {})} ${renderComponent($$result3, "LatestsProjects", $$LatestsProjects, {})} ${renderComponent($$result3, "LatestsPosts", $$LatestsPosts, {})} ` })} ${renderComponent($$result2, "MyBook", $$MyBook, {})} ` })}`;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/index.astro", undefined);

const $$file = "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
