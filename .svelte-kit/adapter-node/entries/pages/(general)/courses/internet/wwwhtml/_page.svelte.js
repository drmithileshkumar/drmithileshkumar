import { c as create_ssr_component, s as subscribe, m as set_store_value, v as validate_component } from "../../../../../../chunks/ssr.js";
import { g as githubDark, a as github, c as contents } from "../../../../../../chunks/content2.js";
/* empty css                                                          */
import "../../../../../../chunks/client.js";
import { C as Card } from "../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../chunks/ActionIcons.js";
import "../../../../../../chunks/NavList.svelte_svelte_type_style_lang.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../../chunks/stores3.js";
const css = {
  code: "article.svelte-n59hwk{display:flex;flex-direction:column;gap:0.5em}p.svelte-n59hwk{opacity:0.8}h2.svelte-n59hwk{margin:0.5em 0}",
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
  set_store_value(currentPath, $currentPath = "Fundamentals of WWW, HTML and XHTML", $currentPath);
  set_store_value(darkMode, $darkMode = true, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-775k1p_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-775k1p_END -->`, ""} <article class="svelte-n59hwk"><h2 class="svelte-n59hwk" data-svelte-h="svelte-1imxa09">Fundamentals of WWW, HTML and XHTML</h2> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-n59hwk" data-svelte-h="svelte-r0b5ev">The World Wide Web (www) is a system of softwares used to transmit and receive information using the set of hardware called the Internet. The information is in the form of a string of 0s and 1s. Specific softwares are used to interpret and convert these strings into human readable format like text, image, audio, video etc.</p>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
