import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from './astro/server_CfuWAlbb.mjs';
import 'kleur/colors';
import { Star } from '@phosphor-icons/react';
/* empty css                        */

const $$Astro = createAstro("https://oscarbustos.dev");
const $$Features = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Features;
  const { features } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="features" data-astro-cid-vnivfuh2> ${features.map((feature) => renderTemplate`<li data-astro-cid-vnivfuh2> <i data-astro-cid-vnivfuh2>${renderComponent($$result, "Star", Star, { "size": 21, "weight": "fill", "data-astro-cid-vnivfuh2": true })}</i> <p data-astro-cid-vnivfuh2>${feature}</p> </li>`)} </ul> `;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/components/Features.astro", undefined);

export { $$Features as $ };
