import { c as create_ssr_component, v as validate_component } from './index-caf19234.js';
import { L as Link } from './Link-faeb00ab.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-xizlkk_START -->${$$result.title = `<title>Notes</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com/notes"}"><meta name="${"description"}" content="${"Learn and practice Physics and Mathematics for school, IIT JEE, Olympiad"}"><!-- HEAD_svelte-xizlkk_END -->`, ""}
    <article><h1>Study notes
        </h1>
        ${validate_component(Link, "Link").$$render($$result, { href: "/notes/maths" }, {}, {
    default: () => {
      return `Mathematics`;
    }
  })}
        
        <br></article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-25795845.js.map
