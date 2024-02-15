import { s as subscribe, b as set_store_value } from "../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, j as each, e as escape } from "../../../../../chunks/ssr.js";
import "../../../../../chunks/client.js";
/* empty css                                                       */
import { C as Card } from "../../../../../chunks/Card.js";
import { C as Content } from "../../../../../chunks/ActionIcons.js";
import { B as Button } from "../../../../../chunks/Button.js";
import { C as CommonLabel } from "../../../../../chunks/CommonLabel.js";
import { N as NavList } from "../../../../../chunks/NavList.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../chunks/stores3.js";
import { c as contents } from "../../../../../chunks/content2.js";
import "../../../../../chunks/Subheader.js";
const css = {
  code: "article.svelte-1a5or8o{display:flex;flex-direction:column;gap:0.5em}h3.svelte-1a5or8o,h4.svelte-1a5or8o,h5.svelte-1a5or8o{margin:0.5em 0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  let $navList, $$unsubscribe_navList;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Mathematics II", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-1am32do_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1am32do_END -->`, ""} <article class="svelte-1a5or8o"><h3 class="svelte-1a5or8o" data-svelte-h="svelte-56fvm0">Mathematics II</h3> <h4 class="svelte-1a5or8o" data-svelte-h="svelte-lx12lw">Contents</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(NavList, "NavList").$$render(
        $$result,
        {
          name: $navList[0].name,
          url: $navList[0].url,
          topics: $navList[0].topics,
          expanded: true
        },
        {},
        {}
      )}`;
    }
  })} <h5 class="svelte-1a5or8o" data-svelte-h="svelte-1c1pxi4">Assignments</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `${each(data.assignments, (assignment) => {
            return `<div>${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(assignment.title)}`;
                  }
                })}`;
              }
            })} </div>`;
          })} `;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
