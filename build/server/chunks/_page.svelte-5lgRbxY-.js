import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component } from './ssr-HSn4Y_Gl.js';
import { g as githubDark$1, a as github$1, c as contentNav, b as contents } from './content4-c6jVnu0x.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import './Subheader-nJdHlnFA.js';
import './client-_MkdHwD5.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-MGSbm_Vc.js';
import { W as WebPractice } from './WebPractice-ATPi3Fcc.js';
import { P as Pathlist } from './Pathlist-Rliv_14E.js';
import { C as CourseNavigation } from './CourseNavigation-NZQ5ttW5.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './exports-mq_1S73-.js';
import './index2-z1g76_ny.js';
import './ContextFragment-h_zhkUzP.js';
import './CommonLabel-QaCL5f48.js';
import './Suffix-ybHP5eir.js';
import './Button-FylIdC7C.js';
import './Ripple-IoYaH5-z.js';
import '@codemirror/lang-javascript';
import '@codemirror/lang-xml';
import '@codemirror/lang-css';

const css = {
  code: "article.svelte-beztui{display:flex;flex-direction:column;gap:0.5em}p.svelte-beztui,li.svelte-beztui{opacity:0.8}h4.svelte-beztui{margin:0.5em 0}h6.svelte-beztui{font-size:1em;margin:0.5em 0;color:rgb(240, 85, 0)}a.svelte-beztui{cursor:pointer;text-decoration:none}.question.svelte-beztui{cursor:pointer;padding:0.3em}",
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
  set_store_value(currentPath, $currentPath = "Hypertext Links", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let htmlContent = `<!DOCTYPE html> 
<!-- File name and document purpose --> 
<html lang = "en">   
    <head>     
        <title> A title for the document </title>
        <meta charset = "utf-8" />     
        <!--include external resources here like adsense, javascript, styles-->
    </head>   
    <body>   
        <!-- External Link -->
        <p id="paragraph">
            <a href="https://mathril.com">Mathril</a> is a platform for practicing mathematics built by Dr Mithilesh Kumar.
        </p>
        <!--Internal Link -->
        <a href="#paragraph">Link to above paragraph</a>
    </body> 
</html>`;
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1qzde0x_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/links"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark$1}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1qzde0x_END -->`, ""} <article class="svelte-beztui">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-beztui" data-svelte-h="svelte-1dito7u">Hypertext Links</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-beztui" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-xst25n"><li class="svelte-beztui"><a href="#link" class="svelte-beztui">Links</a></li> <li class="svelte-beztui"><a href="#target" class="svelte-beztui">Targets within Documents</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-beztui" data-svelte-h="svelte-1whqgdb">Links are used to connect different resources.</p>`;
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
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="link" class="svelte-beztui" data-svelte-h="svelte-d3wap5">Links</h6> <p class="svelte-beztui" data-svelte-h="svelte-12nhnig">A link points to a different resource via an address, usually URL or id. <code>a</code> tag (anchor) is used for linking documents. <code>a</code> tag has an attribute called <code>href</code> that takes the URL or id of the target.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="target" class="svelte-beztui" data-svelte-h="svelte-2vfq9s">Targets within Documents</h6> <p class="svelte-beztui" data-svelte-h="svelte-7vhal6">It is possible to automatically scroll to an element in your document using the <code>a</code>. The <code>href</code> attribute of the <code>a</code> tag is assigned the <code>id</code> of the target element in the format <code>#id</code>.</p> <p class="svelte-beztui" data-svelte-h="svelte-1cn3jae">If the target element is in another document, then the <code>#id</code> is attached at the end of the URL of the document.</p>`;
        }
      })}`;
    }
  })} <h4 class="svelte-beztui" data-svelte-h="svelte-hc8mgz">Assignment</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-beztui" data-svelte-h="svelte-14vafk3">Place a link to your github repository inside your resume. Use github logo.</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-5lgRbxY-.js.map
