import { c as create_ssr_component, s as subscribe, m as set_store_value, v as validate_component } from "../../../../../../../../chunks/ssr.js";
import { g as githubDark, a as github, c as contents } from "../../../../../../../../chunks/content2.js";
/* empty css                                                                */
import "../../../../../../../../chunks/client.js";
import { C as Card } from "../../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../../chunks/ActionIcons.js";
import "../../../../../../../../chunks/NavList.svelte_svelte_type_style_lang.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../../../../chunks/stores3.js";
const css = {
  code: "article.svelte-n59hwk{display:flex;flex-direction:column;gap:0.5em}p.svelte-n59hwk{opacity:0.8}h2.svelte-n59hwk{margin:0.5em 0}h6.svelte-n59hwk{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}",
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
  set_store_value(currentPath, $currentPath = "The HyperText Transfer Protocol (HTTP)", $currentPath);
  set_store_value(darkMode, $darkMode = true, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-62rn87_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/fundamentals/http"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-62rn87_END -->`, ""} <article class="svelte-n59hwk"><h2 class="svelte-n59hwk" data-svelte-h="svelte-wdtgc0">The HyperText Transfer Protocol (HTTP)</h2> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-n59hwk" data-svelte-h="svelte-1ndjvzl">The Request Phase</h6> <p class="svelte-n59hwk" data-svelte-h="svelte-9to4fk"></p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-n59hwk" data-svelte-h="svelte-diesnj">The Response Phase</h6> <p class="svelte-n59hwk" data-svelte-h="svelte-9to4fk"></p>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
