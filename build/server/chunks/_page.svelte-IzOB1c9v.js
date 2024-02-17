import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component } from './ssr-HSn4Y_Gl.js';
import { g as githubDark$1, a as github$1, c as contentNav, b as contents } from './content3-Uv2a4T99.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import './Subheader-nJdHlnFA.js';
import './client-_MkdHwD5.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-MGSbm_Vc.js';
import { W as WebPractice } from './WebPractice-ATPi3Fcc.js';
import { P as Pathlist } from './Pathlist-ycGY6RC1.js';
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
  code: "article.svelte-9tb2l5{display:flex;flex-direction:column;gap:0.5em}p.svelte-9tb2l5,li.svelte-9tb2l5{opacity:0.8}h4.svelte-9tb2l5{margin:0.5em 0}h6.svelte-9tb2l5{font-size:1em;margin:0.5em 0;color:rgb(240, 85, 0)}a.svelte-9tb2l5{cursor:pointer}.question.svelte-9tb2l5{cursor:pointer;padding:0.3em}",
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
  set_store_value(currentPath, $currentPath = "Lists", $currentPath);
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
        <p>There are three types of lists</p>
        <ol>
            <li>Unordered List</li>
            <li>Ordered List</li>
            <li>Definition List</li>
        </ol>
        <p>Above is an ordered list. It's unordered version will be</p>
        <ul>
            <li>Unordered List</li>
            <li>Ordered List</li>
            <li>Definition List</li>
        </ul>
        <p>Definition list has title and data for each item.</p>
        <dl>
            <dt>Unordered list</dt>
            <dd>Lists are marked by bullets.</dd>
            <dt>Ordered list</dt>
            <dd>Lists are marked by numbers.</dd>
            <dt>Definition list</dt>
            <dd>List items have title and data.</dd>    
        </dl>
    </body> 
</html>`;
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1h7cwkd_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/lists"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark$1}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1h7cwkd_END -->`, ""} <article class="svelte-9tb2l5">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-9tb2l5" data-svelte-h="svelte-1gv96er">Lists</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-64z3l3"><li class="svelte-9tb2l5"><a href="#unorderedList" class="svelte-9tb2l5">Unordered List</a></li> <li class="svelte-9tb2l5"><a href="#orderedList" class="svelte-9tb2l5">Ordered List</a></li> <li class="svelte-9tb2l5"><a href="#definitionList" class="svelte-9tb2l5">Definition List</a></li></ol>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-9tb2l5" data-svelte-h="svelte-a0x6z">Lists are used to format content in some order, usually top to bottom with markers placed in front of each item.</p>`;
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
          return `<h6 id="unorderedList" class="svelte-9tb2l5" data-svelte-h="svelte-1rwr9wy">Unordered List</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-12he7pb">Unordered list is created using the tag <code>ul</code> (unordered list). Inside, the items are placed inside individual item tags <code>li</code> (list item).</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="orderedList" class="svelte-9tb2l5" data-svelte-h="svelte-12gi53s">Ordered List</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-1ji8m2r">Ordered list is created using the tag <code>ol</code> (ordered list). Inside, the items are placed inside individual item tags <code>li</code> (list item).</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="definitionList" class="svelte-9tb2l5" data-svelte-h="svelte-qgi96e">Definition List</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-1i7gbx5">Definition list is created using the tag <code>dl</code> (definition list). Inside, the items are placed inside individual item tags <code>dt</code> (definition title) and <code>dd</code> (definition data).</p>`;
        }
      })}`;
    }
  })} <h4 class="svelte-9tb2l5" data-svelte-h="svelte-1yto96c">Exercise</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-1lggxmb">Groceries</h6> <div class="question svelte-9tb2l5" data-svelte-h="svelte-gk5khy">Create a list of groceries. The primary list is of categories. The secondary lists are items in the categories.</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-1r4sj6k">HTML tags</h6> <div class="question svelte-9tb2l5" data-svelte-h="svelte-1df74es">Use definition list to create a list that defines <code>p, sub, sup, code, pre, img, a</code> tags.</div>`;
        }
      })}`;
    }
  })} <h4 class="svelte-9tb2l5" data-svelte-h="svelte-hc8mgz">Assignment</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-9tb2l5" data-svelte-h="svelte-16q5n00">Create a section for education in your resume. Use list to show the list of your exams like Class X, Class XII etc.</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-IzOB1c9v.js.map
