import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component } from './ssr-HSn4Y_Gl.js';
import { g as githubDark$1, a as github$1, c as contentNav, b as contents } from './content4-c6jVnu0x.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import './Subheader-nJdHlnFA.js';
import './client-_MkdHwD5.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-MGSbm_Vc.js';
import { P as Pathlist } from './Pathlist-Rliv_14E.js';
import { C as CourseNavigation } from './CourseNavigation-NZQ5ttW5.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './exports-mq_1S73-.js';
import './index2-z1g76_ny.js';

const css = {
  code: "article.svelte-9tb2l5{display:flex;flex-direction:column;gap:0.5em}p.svelte-9tb2l5,li.svelte-9tb2l5{opacity:0.8}h4.svelte-9tb2l5{margin:0.5em 0}h6.svelte-9tb2l5{font-size:1em;margin:0.5em 0;color:rgb(240, 85, 0)}strong.svelte-9tb2l5{color:goldenrod;opacity:1}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  let $navList, $$unsubscribe_navList;
  let $page, $$unsubscribe_page;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Multipurpose Internet Mail Extensions", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1hymvz3_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/fundamentals/mime"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark$1}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1hymvz3_END -->`, ""} <article class="svelte-9tb2l5">${validate_component(Pathlist, "Pathlist").$$render(
    $$result,
    {
      origin: $page.url.origin,
      pathname: $page.url.pathname
    },
    {},
    {}
  )} ${validate_component(CourseNavigation, "CourseNavigation").$$render(
    $$result,
    {
      contentNav,
      currentUrl: $page.url.pathname
    },
    {},
    {}
  )} <h4 class="svelte-9tb2l5" data-svelte-h="svelte-14wujv7">Multipurpose Internet Mail Extensions</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-9tb2l5" data-svelte-h="svelte-1yvktqj">A browser needs some way to determine the format of a document it receives from a Web server. Without knowing the form of the document, the browser would not be able to render it, because different document formats require dif- ferent rendering software. The forms of these documents are specified with Multipurpose Internet Mail Extensions (MIMEs).</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-o454h4">Type Specifications</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-1upcw71">The various types of mimes are:</p> <ul data-svelte-h="svelte-1fz9mtz"><li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">text/plain</strong>: Plain text files</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">text/html</strong>: HTML documents</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">text/css</strong>: Cascading Style Sheets</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">text/javascript</strong>: JavaScript files</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">image/jpeg</strong>: JPEG images</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">image/png</strong>: PNG images</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">image/gif</strong>: GIF images</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">image/svg+xml</strong>: SVG (Scalable Vector Graphics) documents</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">application/json</strong>: JSON data format</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">application/xml</strong>: XML data format</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">application/x-www-form-urlencoded</strong>: Form data encoded as a query string, typically used in POST requests</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">application/pdf</strong>: PDF documents</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">application/msword</strong>: Microsoft Word documents</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">application/vnd.ms-excel</strong>: Microsoft Excel documents</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</strong>: Microsoft Excel OpenXML spreadsheet</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">application/vnd.openxmlformats-officedocument.wordprocessingml.document</strong>: Microsoft Word OpenXML document</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">application/zip</strong>: ZIP archives</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">application/x-7z-compressed</strong>: 7z archives</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">application/octet-stream</strong>: Arbitrary binary data</li></ul>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Vx2HPK-h.js.map
