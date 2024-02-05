import { c as create_ssr_component, b as subscribe, q as set_store_value, v as validate_component } from './ssr-QYhyCQFk.js';
import { g as githubDark$1, a as github$1, c as contents } from './content2-gUCYaF9m.js';
import './client-_MkdHwD5.js';
import { C as Card } from './Card-2-6K5sqz.js';
import { C as Content } from './ActionIcons-xBhwPEnE.js';
import './NavList.svelte_svelte_type_style_lang-vGMjMlem.js';
import { d as darkMode, c as currentPath, n as navList } from './stores3-jdGSCfHN.js';
import './exports-mq_1S73-.js';
import './index2-2iq6SjbL.js';

const css = {
  code: "article.svelte-9tb2l5{display:flex;flex-direction:column;gap:0.5em}p.svelte-9tb2l5{opacity:0.8}h4.svelte-9tb2l5{margin:0.5em 0}",
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
  set_store_value(currentPath, $currentPath = "Origins of the HTML", $currentPath);
  set_store_value(darkMode, $darkMode = true, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-vamnfn_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/origins"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark$1}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-vamnfn_END -->`, ""} <article class="svelte-9tb2l5"><h4 class="svelte-9tb2l5" data-svelte-h="svelte-5spx59">Origin of the HTML</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-9tb2l5" data-svelte-h="svelte-1gn783g">HTML is a markup language, which means it is used to mark parts of documents to indicate how they should appear, in print or on a display. CSS was added to HTML in 1990s.</p>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-j8HtWDSI.js.map
