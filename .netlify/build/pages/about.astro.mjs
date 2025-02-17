import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../chunks/astro/server_CfuWAlbb.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_CDs1ikiz.mjs';
import { $ as $$Heading } from '../chunks/Heading_DgzD4r6r.mjs';
import { $ as $$Container } from '../chunks/Container_CKziVX-Z.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://oscarbustos.dev");
const $$BookShelf = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BookShelf;
  const { books = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="book-wrapper"> ${books.map((book) => renderTemplate`<div class="book-items"> <div class="main-book-wrap"> <div class="book-cover"> <div class="book-inside"></div> <div class="book-image"> <img${addAttribute(book.imageUrl, "src")}${addAttribute(book.title, "alt")}> <div class="effect"></div> <div class="light-effect"></div> </div> </div> </div> </div>`)} </div>`;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/components/BookShelf.astro", undefined);

const $$About = createComponent(($$result, $$props, $$slots) => {
  const myBooks = [
    {
      imageUrl: "/elantris.webp",
      title: "Elantris"
    },
    {
      imageUrl: "/trenza.webp",
      title: "Trenza del mar esperanza"
    },
    {
      imageUrl: "/storyteller.webp",
      title: "The Storyteller"
    },
    {
      imageUrl: "/serenidad.webp",
      title: "Manual de serenidad"
    },
    {
      imageUrl: "/javascript.webp",
      title: "Javascript The Good Parts"
    },
    {
      imageUrl: "/pragmatico.webp",
      title: "El programador pragm\xE1tico"
    },
    {
      imageUrl: "/sostenible.webp",
      title: "C\xF3digo sostenible"
    },
    {
      imageUrl: "/patterns.webp",
      title: "Javascript Patterns"
    },
    {
      imageUrl: "/marte.webp",
      title: "UI from Mars"
    }
    // ... más libros
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Heading", $$Heading, { "title": "About", "description": "Coding it's not everything", "data-astro-cid-kh7btl4r": true })} ${maybeRenderHead()}<section data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-kh7btl4r>
I love my work, but staying healthy is also very important to me.
        Fitness is a big part of my life, and I enjoy training to stay strong
        and active. If you're curious about my workouts, feel free to follow me
        on these apps. Let's connect and share our fitness journeys!
</p> <ul data-astro-cid-kh7btl4r> <li data-astro-cid-kh7btl4r> <figure data-astro-cid-kh7btl4r> <a href="https://www.strava.com/athletes/16933893" title="Strava" target="_blank" data-astro-cid-kh7btl4r> <img class="icon" src="/strava.webp" alt="Strava" data-astro-cid-kh7btl4r> </a> </figure> </li> <li data-astro-cid-kh7btl4r> <figure data-astro-cid-kh7btl4r> <a href="https://hevy.com/user/elchiconube" title="Hevy" target="_blank" data-astro-cid-kh7btl4r> <img class="icon" src="/hevy.webp" alt="Hevy" data-astro-cid-kh7btl4r> </a> </figure> </li> </ul> <p data-astro-cid-kh7btl4r>
I have a deep love for nature, and I enjoy hiking in the mountains and
        exploring new places whenever I can. Traveling helps me recharge and
        discover new perspectives.
</p> ` })} <ul class="gallery" data-astro-cid-kh7btl4r> <li data-astro-cid-kh7btl4r> <figure class="image" data-astro-cid-kh7btl4r> <img src="/joi1.webp" alt="Nature" data-astro-cid-kh7btl4r> </figure> </li> <li data-astro-cid-kh7btl4r> <figure class="image" data-astro-cid-kh7btl4r> <img src="/joi2.webp" alt="Nature" data-astro-cid-kh7btl4r> </figure> </li> <li data-astro-cid-kh7btl4r> <figure class="image" data-astro-cid-kh7btl4r> <img src="/joi3.webp" alt="Nature" data-astro-cid-kh7btl4r> </figure> </li> </ul> ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-kh7btl4r>
But what truly makes me happiest is spending time with my family.
        There's nothing I value more than sharing moments with my wife and our
        two daughters—they are my greatest joy and the most important part of my
        life.
</p> ` })} <figure class="family" data-astro-cid-kh7btl4r> <img class="full" src="/family.webp" alt="Family" data-astro-cid-kh7btl4r> </figure> </section> ${renderComponent($$result2, "Heading", $$Heading, { "title": "Bookshelf", "description": "Here are some of my favorite books I've read or have on my bookshelf.", "data-astro-cid-kh7btl4r": true })} ${renderComponent($$result2, "BookShelf", $$BookShelf, { "books": myBooks, "data-astro-cid-kh7btl4r": true })} ` })} `;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/about.astro", undefined);

const $$file = "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/pages/about.astro";
const $$url = "/about/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
