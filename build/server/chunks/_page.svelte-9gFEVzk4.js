import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component } from './ssr-HSn4Y_Gl.js';
import { x as xml$1 } from './xml-5zmk9_qe.js';
import { g as githubDark$1, a as github$1, c as contentNav, b as contents } from './content4-FCI3McWx.js';
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
  set_store_value(currentPath, $currentPath = "Border", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let htmlContentSyntax = `<section class="container">
    <div class="cell none centerFlex">none</div>
    <div class="cell hidden centerFlex">hidden</div>
    <div class="cell dotted centerFlex">dotted</div>
    <div class="cell dashed centerFlex">dashed</div>
    <div class="cell solid centerFlex">solid</div>
    <div class="cell double centerFlex">double</div>
    <div class="cell groove centerFlex">groove</div>
    <div class="cell ridge centerFlex">ridge</div>
    <div class="cell inset centerFlex">inset</div>
    <div class="cell outset centerFlex">outset</div>
</section>`;
  let cssContentSyntax = `.container {
    box-sizing: border-box;
    height: 120px;
    width: 100%;
    border: 1px solid gray;
    padding: 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 1em;
    flex-wrap: wrap;
}
.centerFlex {
    display: flex;
    align-items: center;
    justify-content: center;
}
.cell {
    border: 2px solid;
    padding: 0.5em;
}
.none {
    border: 2px none red;
}
.hidden {
    border: 2px hidden red;
}
.dotted {
    border: 2px dotted red;
}
.dashed {
    border: 2px dashed red;
}
.solid {
    border: 2px solid red;
}
.double {
    border: 2px double red;
}
.groove {
    border: 2px groove red;
}
.ridge {
    border: 2px ridge red;
}
.inset {
    border: 2px inset red;
}
.outset {
    border: 2px outset red;
}`;
  let htmlContentSides = `<section class="container">
    <div class="cell top centerFlex">top</div>
    <div class="cell right centerFlex">right</div>
    <div class="cell bottom centerFlex">bottom</div>
    <div class="cell left centerFlex">left</div>
</section>`;
  let cssContentSides = `.container {
    box-sizing: border-box;
    height: 100px;
    width: 100%;
    border: 1px solid gray;
    padding: 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 1em;
    flex-wrap: wrap;
}
.centerFlex {
    display: flex;
    align-items: center;
    justify-content: center;
}
.cell {
    padding: 0.5em;
}
.top {
    border-top: 2px solid red;
}
.right {
    border-right: 2px solid red;
}
.bottom {
    border-bottom: 2px solid red;
}
.left {
    border-left: 2px solid red;
}`;
  let htmlContentRadius = `<section class="containerG">
    <div class="cell round centerFlex">round</div>
    <div class="cell opposite  centerFlex">opposite</div>
    <div class="cell different centerFlex">different</div>
</section>`;
  let cssContentRadius = `.containerG {
    box-sizing: border-box;
    height: auto;
    width: 100%;
    border: 1px solid gray;
    padding: 1em;
    display: flex;
    gap: 1em;
}
.centerFlex {
    display: flex;
    align-items: center;
    justify-content: center;
}
.cell {
    border: 1px solid teal;
    padding: 0.5em;
    width: 10%;
    height: 50px;
}
.round {
    border-radius: 50%;
}
.opposite {
    border-radius: 50% 70%;
}
.different {
    border-radius: 10% 20% 30% 40%;
}
`;
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-jv14vb_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/border"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark$1}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-jv14vb_END -->`, ""} <article class="svelte-1ptklpl">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1ptklpl" data-svelte-h="svelte-1i1fte4">Border</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1ptklpl" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-1owaycd"><li class="svelte-1ptklpl"><a href="#syntax" class="svelte-1ptklpl">Syntax</a></li> <li class="svelte-1ptklpl"><a href="#sides" class="svelte-1ptklpl">Sides</a></li> <li class="svelte-1ptklpl"><a href="#radius" class="svelte-1ptklpl">Radius</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="syntax" class="svelte-1ptklpl" data-svelte-h="svelte-1i5r2j6">Syntax</h6> <p class="svelte-1ptklpl">Border around an element is described using the <code data-svelte-h="svelte-1vmbaca">border</code> property which follows the following syntax:
                ${validate_component(Highlight$1, "Highlight").$$render(
            $$result,
            {
              language: xml$1,
              code: `border = <line-width> <line-style> <color>`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                where <code data-svelte-h="svelte-rdsvdn">line-width</code> is length, <code data-svelte-h="svelte-fy9c7i">line-style</code> can take one of the following values: <code data-svelte-h="svelte-1frc3zd">none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset</code></p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentSyntax,
      cssContent: cssContentSyntax,
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="sides" class="svelte-1ptklpl" data-svelte-h="svelte-16b0axy">Sides</h6> <p class="svelte-1ptklpl" data-svelte-h="svelte-1cljp85">Just like <code>margin</code> and <code>padding</code>, <code>border</code> has side-versions as well, namely <code>border-left, border-right, border-top, border-bottom</code>.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentSides,
      cssContent: cssContentSides,
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="radius" class="svelte-1ptklpl" data-svelte-h="svelte-a61haq">Radius</h6> <p class="svelte-1ptklpl" data-svelte-h="svelte-18nngwb">The <code>border-radius</code> property sets radius at the corners. The corners can be referenced using <code>border-bottom-left-radius, border-bottom-right-radius, border-top-left-radius, border-top-right-radius</code>. An ellipse is used to construct the curve which has two radii.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentRadius,
      cssContent: cssContentRadius,
      jsContent: ""
    },
    {},
    {}
  )}  <h5 class="svelte-1ptklpl" data-svelte-h="svelte-1984kyx">Questions</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1ptklpl" data-svelte-h="svelte-1pk1e0l">Apply these border properties to resume.</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-9gFEVzk4.js.map
