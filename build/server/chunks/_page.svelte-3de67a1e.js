import { c as create_ssr_component, v as validate_component } from './index3-ea5e928f.js';
import { L as Link } from './Link-3402163f.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-xizlkk_START -->${$$result.title = `<title>Notes</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/notes"><meta name="description" content="Learn and practice Physics and Mathematics for school, IIT JEE, Olympiad"><!-- HEAD_svelte-xizlkk_END -->`, ""}
    <article><h1>Study notes
        </h1>
        ${validate_component(Link, "Link").$$render($$result, { href: "/notes/maths" }, {}, {
    default: () => {
      return `Mathematics`;
    }
  })}
        ${validate_component(Link, "Link").$$render($$result, { href: "/notes/quantum" }, {}, {
    default: () => {
      return `Quantum Teleportation`;
    }
  })}
        <br></article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-3de67a1e.js.map
