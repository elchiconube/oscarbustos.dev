import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_CfuWAlbb.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://oscarbustos.dev");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/components/FormattedDate.astro", undefined);

export { $$FormattedDate as $ };
