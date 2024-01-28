import { c as create_ssr_component, b as subscribe, q as set_store_value, v as validate_component } from './ssr-GucKmJ_k.js';
import { L as Link } from './Link-1OjI2rUX.js';
import './client-_MkdHwD5.js';
import { d as darkMode, c as currentPath } from './stores3-_pKjQ3fI.js';
import './exports-mq_1S73-.js';
import './index2-yB1Itf2W.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Courses", $currentPath);
  set_store_value(darkMode, $darkMode = true, $darkMode);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  return `${$$result.head += `<!-- HEAD_svelte-1g0w0gr_START -->${$$result.title = `<title>Courses</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1g0w0gr_END -->`, ""} <article><h1 data-svelte-h="svelte-jv3hik">Courses</h1> <h3 data-svelte-h="svelte-k8gjmi">DSU</h3> ${validate_component(Link, "Link").$$render($$result, { href: `/courses/mathematics2` }, {}, {
    default: () => {
      return `Mathematics II`;
    }
  })} ${validate_component(Link, "Link").$$render($$result, { href: `/courses/internet` }, {}, {
    default: () => {
      return `Internet Technologies`;
    }
  })} ${validate_component(Link, "Link").$$render($$result, { href: `/courses/internetlab` }, {}, {
    default: () => {
      return `Internet Technologies Lab`;
    }
  })} <br></article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-uDleLGOM.js.map
