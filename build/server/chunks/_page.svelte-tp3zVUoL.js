import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component } from './ssr-HSn4Y_Gl.js';
import { x as xml$1 } from './xml-5zmk9_qe.js';
import { c as css$1$1 } from './css--weNKAeu.js';
import { g as githubDark$1, a as github$1, c as contentNav, b as contents } from './content4-c6jVnu0x.js';
import { W as WebPractice } from './WebPractice-ATPi3Fcc.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import './Subheader-nJdHlnFA.js';
import './client-_MkdHwD5.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-MGSbm_Vc.js';
import { P as Pathlist } from './Pathlist-Rliv_14E.js';
import { C as CourseNavigation } from './CourseNavigation-NZQ5ttW5.js';
import { H as Highlight$1, L as LineNumbers$1 } from './LineNumbers-OqX36GRB.js';
import './index2-z1g76_ny.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './ContextFragment-h_zhkUzP.js';
import './CommonLabel-QaCL5f48.js';
import './Suffix-ybHP5eir.js';
import './Button-FylIdC7C.js';
import './Ripple-IoYaH5-z.js';
import '@codemirror/lang-javascript';
import '@codemirror/lang-xml';
import '@codemirror/lang-css';
import './exports-mq_1S73-.js';
import './_commonjsHelpers-YxXKG0rd.js';

const css$1 = {
  code: "article.svelte-1ptklpl{display:flex;flex-direction:column;gap:0.5em}p.svelte-1ptklpl,li.svelte-1ptklpl{opacity:0.8}h4.svelte-1ptklpl,h5.svelte-1ptklpl{margin:0.5em 0}h5.svelte-1ptklpl{font-size:1.1em}h6.svelte-1ptklpl{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}a.svelte-1ptklpl{cursor:pointer;text-decoration:none}.question.svelte-1ptklpl{cursor:pointer;padding:0.3em}",
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
  set_store_value(currentPath, $currentPath = "Responsive Design", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let htmlContentPosition = `<section class="container">
    <div class="option">Option 1</div>
    <div class="option">Option 2</div>
    <div class="option">Option 3</div>
    <div class="option">Option 4</div>
</section>`;
  let cssContentPosition = `.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1em;
}
@media screen and (max-width: 700px) {
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}
@media screen and (max-width: 500px) {
    .container {
        display: grid;
        grid-template-columns: 1fr;
    }
}
.option {
    border: 1px solid;
    padding: 0.5em;
}`;
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1j1afec_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/position"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark$1}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1j1afec_END -->`, ""} <article class="svelte-1ptklpl">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1ptklpl" data-svelte-h="svelte-1bghvg2">Responsive Design</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1ptklpl" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-1eg4361"><li class="svelte-1ptklpl"><a href="#media" class="svelte-1ptklpl">Media Queries</a></li> <li class="svelte-1ptklpl"><a href="#layout" class="svelte-1ptklpl">Responsive layout</a></li> <li class="svelte-1ptklpl"><a href="#images" class="svelte-1ptklpl">Responsive images</a></li> <li class="svelte-1ptklpl"><a href="#typography" class="svelte-1ptklpl">Responsive typography</a></li> <li class="svelte-1ptklpl"><a href="#viewport" class="svelte-1ptklpl">Viewport</a></li></ol> <p class="svelte-1ptklpl" data-svelte-h="svelte-1xbvsjw">Responsive design is a way to design your web application that renders well on all screen sizes and resolutions.</p>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="media" class="svelte-1ptklpl" data-svelte-h="svelte-777jh2">Media Queries</h6> <p class="svelte-1ptklpl">Media queries allow us to run a series of tests (e.g. whether the user&#39;s screen is greater than a certain width, or a certain resolution) and apply CSS selectively to style the page appropriately for the user&#39;s needs.
                ${validate_component(Highlight$1, "Highlight").$$render(
            $$result,
            {
              language: css$1$1,
              code: `@media screen and (min-width: 500px) {
    .container {
        display: grid;
    }
}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                In this case, <code data-svelte-h="svelte-gh48vl">.container</code> will set <code data-svelte-h="svelte-1sqpd20">display</code> to <code data-svelte-h="svelte-lwg1k8">grid</code> when the screen width is greater than or equal to 500px.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="layout" class="svelte-1ptklpl" data-svelte-h="svelte-1xh4fbk">Responsive layout</h6> <p class="svelte-1ptklpl">Responsive layout of a page makes sure that the page changes when the screen changes. The most used feature is changing between <code data-svelte-h="svelte-5a9wff">flex</code> and <code data-svelte-h="svelte-lwg1k8">grid</code> using media query.
                ${validate_component(Highlight$1, "Highlight").$$render(
            $$result,
            {
              language: css$1$1,
              code: `.container { 
    display: grid; 
}
@media screen and (min-width: 500px) {
    .container {
        display: flex;
    }
}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="images" class="svelte-1ptklpl" data-svelte-h="svelte-2je8ps">Responsive images</h6> <p class="svelte-1ptklpl">Images should have responsive width and height properties.
                ${validate_component(Highlight$1, "Highlight").$$render(
            $$result,
            {
              language: css$1$1,
              code: `img { max-width: 100%; }
}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                The above ensures that the image does not overflow its container.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="typography" class="svelte-1ptklpl" data-svelte-h="svelte-ateucu">Responsive typography</h6> <p class="svelte-1ptklpl">Text can be set based on media queries.
                ${validate_component(Highlight$1, "Highlight").$$render(
            $$result,
            {
              language: css$1$1,
              code: `.container { 
    h1: 4em; 
}
@media screen and (max-width: 500px) {
    .container {
        display: 1.5em;
    }
}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="viewport" class="svelte-1ptklpl" data-svelte-h="svelte-k9m7i2">Viewport</h6> <p class="svelte-1ptklpl">This viewport meta tag tells mobile browsers that they should set the width of the viewport to the device width, and scale the document to 100% of its intended size, which shows the document at the mobile-optimized size that you intended.
                ${validate_component(Highlight$1, "Highlight").$$render(
            $$result,
            {
              language: xml$1,
              code: `<meta name="viewport" content="width=device-width,initial-scale=1" />`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentPosition,
      cssContent: cssContentPosition,
      jsContent: ""
    },
    {},
    {}
  )}  <h5 class="svelte-1ptklpl" data-svelte-h="svelte-1984kyx">Questions</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1ptklpl" data-svelte-h="svelte-esqoqa">Make your resume, college, and hometown pages responsive.</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-tp3zVUoL.js.map
