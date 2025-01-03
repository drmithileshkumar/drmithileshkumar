import { c as create_ssr_component, v as validate_component } from './ssr2-q3O0l93f.js';
import { L as Link } from './Link-CxeUojFZ.js';
import './client-k3u4ChD_.js';
import './utils-iZWwlC2F.js';
import './exports-kR70XCWV.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-xizlkk_START -->${$$result.title = `<title>Notes</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/notes"><meta name="description" content="Learn and practice Physics and Mathematics for school, IIT JEE, Olympiad"><!-- HEAD_svelte-xizlkk_END -->`, ""} <article><h1 data-svelte-h="svelte-1muf3qa">Study notes</h1> ${validate_component(Link, "Link").$$render($$result, { href: "/notes/maths" }, {}, {
    default: () => {
      return `Mathematics`;
    }
  })} ${validate_component(Link, "Link").$$render($$result, { href: "/notes/quantum" }, {}, {
    default: () => {
      return `Quantum Teleportation`;
    }
  })} <br></article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CVXpoEmg.js.map
