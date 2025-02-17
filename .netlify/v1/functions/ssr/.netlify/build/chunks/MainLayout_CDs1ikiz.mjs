import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, f as renderScript, m as maybeRenderHead, d as renderComponent, s as spreadAttributes, e as renderSlot, k as renderHead } from './astro/server_CfuWAlbb.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
import { GithubLogo, DribbbleLogo, CodepenLogo, Butterfly, XLogo, InstagramLogo, Moon, Sun } from '@phosphor-icons/react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef, useState, useEffect, useRef, useCallback } from 'react';
/* empty css                         */

const $$Astro$4 = createAstro("https://oscarbustos.dev");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/node_modules/astro/components/ClientRouter.astro", undefined);

const $$Astro$3 = createAstro("https://oscarbustos.dev");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/og_image.png" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><!-- Favicon --><link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="shortcut icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><meta name="apple-mobile-web-app-title" content="Oscar"><link rel="manifest" href="/site.webmanifest"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/components/BaseHead.astro", undefined);

const $$Astro$2 = createAstro("https://oscarbustos.dev");
const $$SocialLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SocialLinks;
  const { center } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(center ? "center" : "", "class")} data-astro-cid-zamss57n> <a href="https://github.com/elchiconube" target="_blank" title="Github Profile" data-astro-cid-zamss57n> ${renderComponent($$result, "GithubLogo", GithubLogo, { "size": 28, "weight": "light", "alt": "Github", "data-astro-cid-zamss57n": true })} </a> <a href="https://dribbble.com/elchiconube" target="_blank" title="Dribble Profile" data-astro-cid-zamss57n> ${renderComponent($$result, "DribbbleLogo", DribbbleLogo, { "size": 28, "weight": "light", "alt": "Dribble", "data-astro-cid-zamss57n": true })} </a> <a href="http://codepen.io/elchiconube" target="_blank" title="Cdepen Profile" data-astro-cid-zamss57n> ${renderComponent($$result, "CodepenLogo", CodepenLogo, { "size": 28, "weight": "light", "alt": "Codepen", "data-astro-cid-zamss57n": true })} </a> <a href="https://bsky.app/profile/elchiconube.bsky.social" target="_blank" title="Bluesky Profile" data-astro-cid-zamss57n> ${renderComponent($$result, "Butterfly", Butterfly, { "size": 28, "weight": "light", "alt": "Bluesky", "data-astro-cid-zamss57n": true })} </a> <a href="https://x.com/elchiconube" target="_blank" title="X Profile" data-astro-cid-zamss57n> ${renderComponent($$result, "XLogo", XLogo, { "size": 28, "weight": "light", "alt": "X", "data-astro-cid-zamss57n": true })} </a> <a href="https://instagram.com/elchiconube" target="_blank" title="Instagram Profile" data-astro-cid-zamss57n> ${renderComponent($$result, "InstagramLogo", InstagramLogo, { "size": 28, "weight": "light", "alt": "Instagram", "data-astro-cid-zamss57n": true })} </a> </div> `;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/components/SocialLinks.astro", undefined);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>Crafted with love in ${today.getFullYear()}.</p> <figure data-astro-cid-sz7xmlte> <img src="/sign.webp" alt="Oscar sign" data-astro-cid-sz7xmlte> </figure> ${renderComponent($$result, "SocialLinks", $$SocialLinks, { "center": true, "data-astro-cid-sz7xmlte": true })} </footer> `;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/components/Footer.astro", undefined);

function MobileMenuButton({ isOpen, onClick }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: `mobile-menu-button ${isOpen ? "open" : ""}`,
      onClick,
      "aria-label": "Toggle menu",
      children: /* @__PURE__ */ jsx("span", { className: "hamburger" })
    }
  );
}

function NavIndicator({ style }) {
  return /* @__PURE__ */ jsx("div", { className: "nav-indicator", style });
}

function Dropdown({ items, currentPath }) {
  return /* @__PURE__ */ jsx("div", { className: "dropdown", children: /* @__PURE__ */ jsx("div", { className: "dropdown-content", children: items.map((item) => /* @__PURE__ */ jsxs(
    "a",
    {
      href: item.href,
      className: `dropdown-item ${currentPath === item.href ? "active" : ""}`,
      children: [
        /* @__PURE__ */ jsx("span", { className: "dropdown-item-title", children: item.name }),
        /* @__PURE__ */ jsx("span", { className: "dropdown-item-description", children: item.description })
      ]
    },
    item.name
  )) }) });
}

const NavItem = forwardRef(({
  item,
  isActive,
  currentPath,
  onMouseEnter,
  onMouseLeave
}, ref) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `nav-item ${isActive ? "active" : ""}`,
      ref,
      onMouseEnter,
      onMouseLeave,
      children: item.hasDropdown ? /* @__PURE__ */ jsxs("div", { className: "nav-dropdown-container", children: [
        /* @__PURE__ */ jsxs("span", { className: "nav-button", children: [
          item.name,
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: "nav-chevron",
              viewBox: "0 0 20 20",
              children: /* @__PURE__ */ jsx("path", { d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" })
            }
          )
        ] }),
        item.dropdownItems && /* @__PURE__ */ jsx(
          Dropdown,
          {
            items: item.dropdownItems,
            currentPath
          }
        )
      ] }) : /* @__PURE__ */ jsx("a", { href: item.href, className: "nav-link", children: item.name })
    }
  );
});

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Timeline", href: "/timeline/" },
  {
    name: "Content",
    hasDropdown: true,
    dropdownItems: [
      { name: "Book", description: "Learn Frontend development", href: "/book/" },
      { name: "Blog", description: "Sharing ideas", href: "/blog/" }
    ]
  },
  {
    name: "Work",
    hasDropdown: true,
    dropdownItems: [
      { name: "Projects", description: "Check my projects", href: "/projects/" },
      { name: "Experience", description: "About my work", href: "/experience/" }
    ]
  },
  {
    name: "More",
    hasDropdown: true,
    dropdownItems: [
      { name: "About", description: "More personal info", href: "/about/" }
    ]
  }
];

function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(isDark ? "dark" : "light");
    }
  }, []);
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);
  useEffect(() => {
    if (!mounted) return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [mounted]);
  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
  };
  if (!mounted) {
    return /* @__PURE__ */ jsx("button", { className: "theme-toggle", "aria-label": "Theme toggle placeholder", children: /* @__PURE__ */ jsx(Moon, { size: 20, weight: "light" }) });
  }
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: toggleTheme,
      className: "theme-toggle",
      "aria-label": `Change to ${theme === "light" ? "dark" : "light"} mode`,
      children: theme === "light" ? /* @__PURE__ */ jsx(Moon, { size: 20, weight: "light" }) : /* @__PURE__ */ jsx(Sun, { size: 20, weight: "light" })
    }
  );
}

function Header() {
  const [activeItem, setActiveItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [currentPath, setCurrentPath] = useState("");
  const navContainerRef = useRef(null);
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);
  const updateIndicator = useCallback((index) => {
    if (index === null) {
      const activeIndex = findActiveMenuIndex();
      if (activeIndex === null) {
        setIndicatorStyle({ opacity: 0 });
      } else {
        updateIndicatorPosition(activeIndex);
      }
      return;
    }
    updateIndicatorPosition(index);
  }, []);
  const updateIndicatorPosition = useCallback((index) => {
    if (!navContainerRef.current) return;
    const navItems = navContainerRef.current.querySelectorAll(".nav-item");
    const currentNavItem = navItems[index];
    if (currentNavItem) {
      const rect = currentNavItem.getBoundingClientRect();
      const parentRect = navContainerRef.current.getBoundingClientRect();
      setIndicatorStyle({
        width: `${rect.width}px`,
        transform: `translateX(${rect.left - parentRect.left}px)`,
        height: "40px",
        opacity: 1
      });
    }
  }, []);
  const findActiveMenuIndex = useCallback(() => {
    const mainIndex = menuItems.findIndex((item) => item.href === currentPath);
    if (mainIndex !== -1) return mainIndex;
    for (let i = 0; i < menuItems.length; i++) {
      const item = menuItems[i];
      if (item.dropdownItems?.some((child) => child.href === currentPath)) {
        return i;
      }
    }
    return null;
  }, [currentPath]);
  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
      setIsMenuOpen(false);
    };
    const handleLinkClick = (e) => {
      const target = e.target;
      const link = target.closest("a");
      if (link?.href?.startsWith(window.location.origin)) {
        const pathname = new URL(link.href).pathname;
        setCurrentPath(pathname);
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("popstate", handleRouteChange);
    document.addEventListener("click", handleLinkClick);
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      const activeIndex = activeItem ?? findActiveMenuIndex();
      if (activeIndex !== null) {
        updateIndicatorPosition(activeIndex);
      }
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeItem, findActiveMenuIndex, updateIndicatorPosition]);
  return /* @__PURE__ */ jsx("header", { className: "header", children: /* @__PURE__ */ jsx("div", { className: "header-container", children: /* @__PURE__ */ jsxs("div", { className: "header-content", children: [
    /* @__PURE__ */ jsx(
      MobileMenuButton,
      {
        isOpen: isMenuOpen,
        onClick: () => setIsMenuOpen(!isMenuOpen)
      }
    ),
    /* @__PURE__ */ jsx("nav", { className: `nav ${isMenuOpen ? "nav-open" : ""}`, children: /* @__PURE__ */ jsxs("div", { className: "nav-items", ref: navContainerRef, children: [
      /* @__PURE__ */ jsx(NavIndicator, { style: indicatorStyle }),
      menuItems.map((item, index) => /* @__PURE__ */ jsx(
        NavItem,
        {
          item,
          isActive: currentPath === item.href || item.dropdownItems?.some((dropItem) => dropItem.href === currentPath),
          currentPath,
          onMouseEnter: () => {
            setActiveItem(index);
            updateIndicator(index);
          },
          onMouseLeave: () => {
            setActiveItem(null);
            updateIndicator(null);
          }
        },
        item.name
      ))
    ] }) }),
    /* @__PURE__ */ jsx(ThemeToggle, {})
  ] }) }) });
}

const $$Astro$1 = createAstro("https://oscarbustos.dev");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Button;
  const { text, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="codepen-button"${spreadAttributes(props)} data-astro-cid-vnzlvqnm><span data-astro-cid-vnzlvqnm>${text}</span></a> `;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/components/Button.astro", undefined);

const $$Video = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article data-astro-cid-7qzxku2k> <div data-astro-cid-7qzxku2k> <h2 data-astro-cid-7qzxku2k>Is it a match?</h2> <p data-astro-cid-7qzxku2k>
If you need help or advice, feel free to drop us a message via social
      media or email
</p> ${renderComponent($$result, "Button", $$Button, { "href": "mailto:oscarbustosgarrido@gmail.com", "text": "Contact me", "data-astro-cid-7qzxku2k": true })} </div> <video preload="auto" autoplay loop muted data-astro-cid-7qzxku2k> <source src="https://res.cloudinary.com/elchiconube/video/upload/v1528758653/video_ckbyru.mp4" type="video/mp4" data-astro-cid-7qzxku2k> <source src="https://res.cloudinary.com/elchiconube/video/upload/v1528762133/video_qsocjt.webm" type="video/webm" data-astro-cid-7qzxku2k> </video> </article> `;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/components/Video.astro", undefined);

const $$CustomCursor = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="custom-cursor" data-astro-cid-ofxtmv4x></div> ${renderComponent($$result, "click-spark", "click-spark", { "data-astro-cid-ofxtmv4x": true })}  ${renderScript($$result, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/components/CustomCursor.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/components/CustomCursor.astro", undefined);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://oscarbustos.dev");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title = "Oscar Bustos", description = "Senior Frontend Developer", image } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head>', "", "", "</head> <body> ", " <main> ", " ", " ", " ", " </main> <script>\n      const theme = (() => {\n        if (\n          typeof localStorage !== 'undefined' &&\n          localStorage.getItem('theme')\n        ) {\n          return localStorage.getItem('theme');\n        }\n        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {\n          return 'dark';\n        }\n        return 'light';\n      })();\n\n      if (theme === 'dark') {\n        document.documentElement.classList.add('dark');\n      }\n\n      document.body.style.backgroundColor =\n        theme === 'dark' ? '#1a1a1a' : '#ffffff';\n    <\/script> <!-- Previene el flash durante las transiciones --> <script>\n      document.addEventListener('astro:before-preparation', (ev) => {\n        const theme = localStorage.getItem('theme');\n        if (theme === 'dark') {\n          ev.newDocument.documentElement.classList.add('dark');\n          ev.newDocument.documentElement.style.backgroundColor = '#1a1a1a';\n        }\n      });\n\n      document.addEventListener('astro:after-swap', () => {\n        const theme = localStorage.getItem('theme');\n        if (theme === 'dark') {\n          document.documentElement.classList.add('dark');\n          document.documentElement.style.backgroundColor = '#1a1a1a';\n        }\n      });\n    <\/script> </body> </html>"])), renderComponent($$result, "ClientRouter", $$ClientRouter, { "fallback": "swap" }), renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "image": image }), renderHead(), renderComponent($$result, "CustomCursor", $$CustomCursor, {}), renderComponent($$result, "Header", Header, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/header/Header.tsx", "client:component-export": "default" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Video", $$Video, {}), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/elchiconube/Projects/Personal/oscarbustos.dev/src/layouts/MainLayout.astro", undefined);

export { $$MainLayout as $, $$Button as a, $$SocialLinks as b };
