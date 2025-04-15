import { c as createComponent, a as createAstro, b as addAttribute, r as renderHead, d as renderSlot, e as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BsKFrq8C.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Basics</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/dhrego/Desktop/DatoCms/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${"e7d744dcf936ffd1c4835c96fa3702"}`
    },
    body: JSON.stringify({
      query: `query Homepage {
			home {
			  title
			  image {
         		url
          		alt
       		}
			}
		  }
		`
    })
  });
  const json = await response.json();
  const data = json.data.home;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate`${maybeRenderHead()}<div class="hero"${addAttribute(`background-image: url('${data.image.url}')`, "style")}><h1 class="hero-nav">${data.title}</h1></div>` })}<!-- <style>
  .container {
    position: relative;
    width: 100%;
    height: 100vh;
  }
  img {
    position: absolute;
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
</style> -->`;
}, "/Users/dhrego/Desktop/DatoCms/src/pages/index.astro", void 0);
const $$file = "/Users/dhrego/Desktop/DatoCms/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
