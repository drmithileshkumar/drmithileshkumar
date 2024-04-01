import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component } from './ssr-HSn4Y_Gl.js';
import { x as xml$1 } from './xml-5zmk9_qe.js';
import { g as githubDark$1, a as github$1, c as contentNav, b as contents } from './content4-eGCvawDk.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { N as NavList } from './NavList-dME8fp5s.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-MGSbm_Vc.js';
import { P as Pathlist } from './Pathlist-Rliv_14E.js';
import { C as CourseNavigation } from './CourseNavigation-NZQ5ttW5.js';
import { H as Highlight$1, L as LineNumbers$1 } from './LineNumbers-OqX36GRB.js';
import './client-_MkdHwD5.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './Item-20QUQFRc.js';
import './Ripple-IoYaH5-z.js';
import './Subheader-nJdHlnFA.js';
import './Graphic-XmKV_FS_.js';
import './IconButton-EupF56OB.js';
import './index2-z1g76_ny.js';
import './_commonjsHelpers-YxXKG0rd.js';

const css$1 = {
  code: "article.svelte-wl5xjl{display:flex;flex-direction:column;gap:0.5em}p.svelte-wl5xjl{opacity:0.8}h4.svelte-wl5xjl,h5.svelte-wl5xjl{margin:0.5em 0}h5.svelte-wl5xjl{font-size:1.1em}h6.svelte-wl5xjl{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}",
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
  set_store_value(currentPath, $currentPath = "CSS", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let code1 = `<!--Inline CSS-->
<p style="color: tomato;">I'm tomato</p>`;
  let code2 = `<head>
    <!---CSS from external file-->
    <link rel="stylesheet" href="/app.css"> 
    <!--Document level CSS-->
    <style>
    /* set text color of p elements to tomato */
        p {
            color: tomato;
        }
    </style>
</head>`;
  let code3 = `selector1 {
    property1: value1;
    property2: value2;
}
selector2 {
    property3: value3;
    property4: value4;
}`;
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-ywdrus_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark$1}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-ywdrus_END -->`, ""} <article class="svelte-wl5xjl">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-wl5xjl" data-svelte-h="svelte-lg001m">Cascading Style Sheets</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h5 class="svelte-wl5xjl" data-svelte-h="svelte-vrhswa">Contents</h5> ${validate_component(NavList, "NavList").$$render(
              $$result,
              {
                name: $navList[0].topics[1].name,
                url: $navList[0].topics[1].url,
                topics: $navList[0].topics[1].topics,
                expanded: false
              },
              {},
              {}
            )}`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-wl5xjl" data-svelte-h="svelte-ohtxs0">Cascading Style Sheets or CSS are used to change the presentation of HTML. There are three ways in which styles can be applied to HTML elements: inline, document level and from external file.  Every HTML element has an attribute called <code>style</code>. The following code uses it to change the color of text inside the <code>p</code> element. This method is called <em>inline CSS</em>.</p> ${validate_component(Highlight$1, "Highlight").$$render($$result, { language: xml$1, code: code1 }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })} <p class="svelte-wl5xjl" data-svelte-h="svelte-141i77m">The below code shows two ways to add CSS to HTML. Line 3 adds CSS from the external file <code>app.css</code>, while the codes between the lines 5-11 add document level CSS.</p> ${validate_component(Highlight$1, "Highlight").$$render($$result, { language: xml$1, code: code2 }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })} <p class="svelte-wl5xjl" data-svelte-h="svelte-7ta9dc">The three levels of style sheets, in order from lowest level to highest level, are inline, document level, and external. Inline style sheets apply to the content of a single HTML element, document-level style sheets apply to the whole body of a document, and external style sheets can apply to the bodies of any number of documents. Inline style sheets have precedence over document style sheets, which have precedence over external style sheets. For example, if an external style sheet specifies a value for a particular property of a particular element, that value is used until a different value is specified in either a document style sheet or an inline style sheet. Likewise, document style sheet property values can be overridden by different property values in an inline style sheet. In effect, the properties of a specific element are those that result from a merge of all applicable style sheets, with lower-level style sheets having precedence in cases of conflicting specifications.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-wl5xjl" data-svelte-h="svelte-1jin4ia">Basic Selectors</h6> <p class="svelte-wl5xjl" data-svelte-h="svelte-1nsek71">The general structure of CSS assignment is as follows:</p> ${validate_component(Highlight$1, "Highlight").$$render($$result, { language: xml$1, code: code3 }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })} <p class="svelte-wl5xjl" data-svelte-h="svelte-1gxsjrs">Here <code>selector</code> can be tag name, id, or class name. There are other advanced selectors which we&#39;ll cover later. In case of <code>id</code>, the selector is written as <code>#id</code> and in case of classname it is written as <code>.classname</code>.</p> <p class="remarks svelte-wl5xjl" data-svelte-h="svelte-1nhfvt6">Notice that <code>id</code> must be unique for any element. <code>class</code> name can be assigned to as many elements as possible.</p>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-gwNYpv_4.js.map
