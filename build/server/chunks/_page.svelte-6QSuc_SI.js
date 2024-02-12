import { a as subscribe, d as set_store_value } from './utils-yAS0eczJ.js';
import { c as create_ssr_component, v as validate_component } from './ssr-APL1hDOv.js';
import { g as githubDark$1, a as github$1, c as contents } from './content3-AxNa0sBl.js';
import './client-_MkdHwD5.js';
import { C as Card } from './Card-1SmK_YC9.js';
import { C as Content } from './ActionIcons-6VPbDzCy.js';
import './Subheader-L9gPGS9m.js';
import { d as darkMode, c as currentPath, n as navList } from './stores3-WCzcTCKR.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-0kAhHSI7.js';
import './index2-NBMbjtFx.js';

/* empty css                                                                   */
const css = {
  code: "article.svelte-9tb2l5{display:flex;flex-direction:column;gap:0.5em}p.svelte-9tb2l5{opacity:0.8}h2.svelte-9tb2l5{margin:0.5em 0}h6.svelte-9tb2l5{font-size:1em;margin:0.5em 0;color:rgb(240, 85, 0)}",
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
  set_store_value(currentPath, $currentPath = "The World Wide Web", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-10fkuro_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/fundamentals/www"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark$1}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-10fkuro_END -->`, ""} <article class="svelte-9tb2l5"><h2 class="svelte-9tb2l5" data-svelte-h="svelte-1r51av2">The World Wide Web</h2> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-zfzmcz">Origins</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-6tg2me">The World Wide Web is a system of protocols and softwares that enable communication between devices over the Internet. It was proposed in 1989 by a group led by Tim Berners-Lee at CERN. In short, it is also known as the Web. The Web started with the protocal HTTP with document types HTML. Later other protocols and document types were supported.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-sz464z">Web or Internet?</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-1fq4nj2">The Internet is a collection of computers and other devices connected by equipment that allows them to communicate with each other.</p> <p class="svelte-9tb2l5" data-svelte-h="svelte-103uzuu">The Web is a collection of software and protocols that has been installed on most of the computers on the Internet.</p>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-6QSuc_SI.js.map
