import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../chunks/astro/server_CfuWAlbb.mjs';
import 'kleur/colors';
import { $ as $$Heading } from '../chunks/Heading_DgzD4r6r.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_CDs1ikiz.mjs';
import 'clsx';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://oscarbustos.dev");
const $$TimelinePosts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TimelinePosts;
  const { entries } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="timeline-container" data-astro-cid-ykjnto7v> <div class="timeline-line" data-astro-cid-ykjnto7v></div> <div class="timeline-entries" data-astro-cid-ykjnto7v> ${entries.map((entry) => renderTemplate`<div class="timeline-entry" data-astro-cid-ykjnto7v> <div${addAttribute(`timeline-title ${entry.highlight ? "highlight" : ""}`, "class")} data-astro-cid-ykjnto7v> ${entry.year} </div> <div class="timeline-body" data-astro-cid-ykjnto7v> ${Array.isArray(entry.content) ? entry.content.map((paragraph) => renderTemplate`<p data-astro-cid-ykjnto7v>${paragraph}</p>`) : renderTemplate`<p data-astro-cid-ykjnto7v>${entry.content}</p>`} </div> </div>`)} </div> </div> `;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/components/TimelinePosts.astro", undefined);

const $$Timeline = createComponent(($$result, $$props, $$slots) => {
  const timelineEntries = [
    {
      year: "2024",
      highlight: true,
      content: "Joined FCM Travel as a Senior Frontend Developer, contributing to the platform\u2019s restyling and implementing a custom ReactJS component library."
    },
    {
      year: "2023",
      highlight: true,
      content: [
        "Joined Marketgoo as a Senior Frontend Developer, optimizing development processes, implementing testing strategies, and supporting product and design teams.",
        'Launched my personal project "topdelmes.com," an AI-powered platform for ranking movies and series.'
      ]
    },
    {
      year: "2019",
      highlight: true,
      content: [
        "Became Lead Frontend Developer at urbanData Analytics, spearheading a complete product refactor and creating an open-source ReactJS component library."
      ]
    },
    {
      year: "2015",
      highlight: true,
      content: [
        "Joined BTS as a Full Stack Developer, where I led the development of a knowledge management platform using REST APIs and scalable architectures.",
        "Started teaching Web Development and Programming at U-tad, mentoring students and supporting their final projects."
      ]
    },
    {
      year: "2013",
      content: [
        "Transitioned to Axel Springer, where I developed high-traffic websites with a strong focus on SEO and performance."
      ]
    },
    {
      year: "2011",
      content: "Started my journey as a Frontend Developer, working on responsive designs and web applications at Vocento."
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Heading", $$Heading, { "title": "Timeline", "description": "My professional career" })} ${maybeRenderHead()}<section class="section"> ${renderComponent($$result2, "TimelinePosts", $$TimelinePosts, { "entries": timelineEntries })} </section> ` })}`;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/timeline.astro", undefined);

const $$file = "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/timeline.astro";
const $$url = "/timeline/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Timeline,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
