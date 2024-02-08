import { c as create_ssr_component, s as subscribe, m as set_store_value, v as validate_component } from "../../../../chunks/ssr.js";
import { C as Card } from "../../../../chunks/Card.js";
import { C as Content } from "../../../../chunks/ActionIcons.js";
/* empty css                                                       */
/* empty css                                                    */
import "../../../../chunks/client.js";
import { d as darkMode, c as currentPath } from "../../../../chunks/stores3.js";
const css = {
  code: "article.svelte-9tb2l5{display:flex;flex-direction:column;gap:0.5em}p.svelte-9tb2l5,li.svelte-9tb2l5{opacity:0.8}h3.svelte-9tb2l5{margin:0.5em 0}h6.svelte-9tb2l5{font-size:1em;margin:0.5em 0;color:rgb(240, 85, 0)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Students", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  return `${$$result.head += `<!-- HEAD_svelte-1pw6q9l_START -->${$$result.title = `<title>Students</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/students"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1pw6q9l_END -->`, ""} <article class="svelte-9tb2l5"><h3 class="svelte-9tb2l5" data-svelte-h="svelte-6jm41w">Students</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="remark" data-svelte-h="svelte-eh6j2f"><p class="svelte-9tb2l5">For mini projects or projects, write either to <code>admin@drmithileshkumar.com</code> or <code>mithileshkumar-bca@dsu.edu.in</code></p> <h6 class="svelte-9tb2l5">Contents of the email</h6> <ul><li class="svelte-9tb2l5">Names of group members</li> <li class="svelte-9tb2l5">Semester</li> <li class="svelte-9tb2l5">Topic (Project title)</li> <li class="svelte-9tb2l5">Contact information (email/phone)</li></ul></div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
