import { a as subscribe, d as set_store_value } from './utils-yAS0eczJ.js';
import { c as create_ssr_component, v as validate_component } from './ssr-APL1hDOv.js';
import { g as githubDark$1, a as github$1, c as contents } from './content3-AxNa0sBl.js';
import './client-_MkdHwD5.js';
import { C as Card } from './Card-1SmK_YC9.js';
import { C as Content } from './ActionIcons-6VPbDzCy.js';
import './Subheader-L9gPGS9m.js';
import { d as darkMode, c as currentPath, n as navList } from './stores3-WCzcTCKR.js';
import { W as WebPractice } from './WebPractice-sHXdl4-G.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-0kAhHSI7.js';
import './index2-NBMbjtFx.js';
import './ContextFragment-7g4vMbeP.js';
import './Button-6UuJyN6u.js';
import './Ripple-cfQYXJny.js';
import './Suffix-SJkMZbJw.js';
import '@codemirror/lang-javascript';
import '@codemirror/lang-xml';
import '@codemirror/lang-css';

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
  set_store_value(currentPath, $currentPath = "Basic Syntax", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let htmlContent = `<h1>This is h1 heading.</h1>
<p>This is paragraph.</p>
<button>This is button.</button>
<!-- This is a comment -->`;
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-y89own_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/syntax"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark$1}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-y89own_END -->`, ""} <article class="svelte-9tb2l5"><h4 class="svelte-9tb2l5" data-svelte-h="svelte-pxy1ot">Basic Syntax</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-9tb2l5" data-svelte-h="svelte-1izifrb">The fundamental syntactic units of HTML are called tags. In general, tags are used to specify categories of content. For each kind of tag, a browser has default presen- tation specifications for the specified content. The syntax of a tag is the tag\`s name surrounded by angle brackets (&lt; and &gt;). Tag names must be written in all lowercase letters. Most tags appear in pairs: an opening tag and a closing tag.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-OdlD_KWU.js.map
