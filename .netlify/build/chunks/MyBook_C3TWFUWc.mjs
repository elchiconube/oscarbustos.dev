import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from './astro/server_CfuWAlbb.mjs';
import 'kleur/colors';
import { $ as $$Heading } from './Heading_DgzD4r6r.mjs';
import 'clsx';
/* empty css                        */
import { a as $$Button } from './MainLayout_CDs1ikiz.mjs';
import { $ as $$Features } from './Features_D4gO8LkV.mjs';

const $$Cover = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="book-3d" data-astro-cid-e5kvktnr> <div class="book-3d__inner" data-astro-cid-e5kvktnr> <img class="book-3d__cover" src="/cover.webp" alt="The Wizard of Oz by L. Frank Baum" alt="Book cover" data-astro-cid-e5kvktnr> </div> </div> `;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/components/Cover.astro", undefined);

const $$MyBook = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section" data-astro-cid-yuobpkhy> ${renderComponent($$result, "Heading", $$Heading, { "title": "Book", "description": "Learn frontend development in Spanish", "data-astro-cid-yuobpkhy": true })} <div class="wrapper" data-astro-cid-yuobpkhy> ${renderComponent($$result, "Cover", $$Cover, { "data-astro-cid-yuobpkhy": true })} <article data-astro-cid-yuobpkhy> <h3 data-astro-cid-yuobpkhy>Aprende a crear páginas web desde 0</h3> <h2 data-astro-cid-yuobpkhy>Fácil y práctico para todos los públicos</h2> <p data-astro-cid-yuobpkhy>Con este libro prodrás aprender desde 0 las tecnologías básicas sobre las que se sustentan el desarrollo web. Explicado con multitud de casos prácticos y ejercicios que te ayudarán a entenderlo de una manera sencilla</p> ${renderComponent($$result, "Features", $$Features, { "features": ["Acceso a comunidad privada", "Acceso a contenidos actualizados", "Aprender\xE1s HTML5, CSS3, Javascript", "Tendr\xE1s ejercicios pr\xE1cticos"], "data-astro-cid-yuobpkhy": true })} ${renderComponent($$result, "Button", $$Button, { "href": "https://leanpub.com/desarrollo-frontend", "target": "_blank", "title": "", "text": "Comprar", "data-astro-cid-yuobpkhy": true })} </article> </div> </section> `;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/components/MyBook.astro", undefined);

export { $$MyBook as $ };
