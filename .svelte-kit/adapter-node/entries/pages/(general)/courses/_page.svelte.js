import { c as create_ssr_component, s as subscribe, l as set_store_value, v as validate_component } from "../../../../chunks/ssr.js";
/* empty css                                                       */
import { L as Link } from "../../../../chunks/Link.js";
import "../../../../chunks/client.js";
import { d as darkMode, c as currentPath } from "../../../../chunks/stores3.js";
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
export {
  Page as default
};
