import { c as create_ssr_component, v as validate_component } from './index-450bbd42.js';
import { L as Link } from './Link-e2222841.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1iu6an9_START -->${$$result.title = `<title>Questions</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com/iit"}"><meta name="${"description"}" content="${"Learn and practice Physics and Mathematics for school, IIT JEE, Olympiad"}"><!-- HEAD_svelte-1iu6an9_END -->`, ""}
    <article><h1>Previous Year Problems
        </h1>
        
        ${validate_component(Link, "Link").$$render($$result, { href: `/iit/maths/2021` }, {}, {
    default: () => {
      return `2021`;
    }
  })}
        <br></article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-7811cf8e.js.map
