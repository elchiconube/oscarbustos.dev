import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_CfuWAlbb.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                              */

const $$Astro = createAstro("https://oscarbustos.dev");
const $$Heading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Heading;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-u4qoyrkz> <h2 class="gradient retro-2" data-astro-cid-u4qoyrkz>${title}</h2> <p data-astro-cid-u4qoyrkz>${description}</p> </header> `;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/components/Heading.astro", undefined);

export { $$Heading as $ };
