import { s as subscribe, b as set_store_value } from "../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { x as xml, H as Highlight, L as LineNumbers } from "../../../../../../chunks/xml.js";
import { g as githubDark, a as github, b as contentNav, c as contents } from "../../../../../../chunks/content4.js";
/* empty css                                                          */
import { p as page } from "../../../../../../chunks/stores.js";
import { C as Card } from "../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../chunks/ActionIcons.js";
import { N as NavList } from "../../../../../../chunks/NavList.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../../chunks/stores2.js";
import { P as Pathlist } from "../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../chunks/CourseNavigation.js";
const css$1 = {
  code: "article.svelte-9tb2l5{display:flex;flex-direction:column;gap:0.5em}p.svelte-9tb2l5{opacity:0.8}h4.svelte-9tb2l5,h5.svelte-9tb2l5{margin:0.5em 0}h5.svelte-9tb2l5{font-size:1.1em}",
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
    /* ignore *{} BUG */
    </style>
</head>`;
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-ywdrus_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-ywdrus_END -->`, ""} <article class="svelte-9tb2l5">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-9tb2l5" data-svelte-h="svelte-lg001m">Cascading Style Sheets</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h5 class="svelte-9tb2l5" data-svelte-h="svelte-vrhswa">Contents</h5> ${validate_component(NavList, "NavList").$$render(
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
          return `<p class="svelte-9tb2l5" data-svelte-h="svelte-ohtxs0">Cascading Style Sheets or CSS are used to change the presentation of HTML. There are three ways in which styles can be applied to HTML elements: inline, document level and from external file.  Every HTML element has an attribute called <code>style</code>. The following code uses it to change the color of text inside the <code>p</code> element. This method is called <em>inline CSS</em>.</p> ${validate_component(Highlight, "Highlight").$$render($$result, { language: xml, code: code1 }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })} <p class="svelte-9tb2l5" data-svelte-h="svelte-141i77m">The below code shows two ways to add CSS to HTML. Line 3 adds CSS from the external file <code>app.css</code>, while the codes between the lines 5-11 add document level CSS.</p> ${validate_component(Highlight, "Highlight").$$render($$result, { language: xml, code: code2 }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })} <p class="svelte-9tb2l5" data-svelte-h="svelte-7ta9dc">The three levels of style sheets, in order from lowest level to highest level, are inline, document level, and external. Inline style sheets apply to the content of a single HTML element, document-level style sheets apply to the whole body of a document, and external style sheets can apply to the bodies of any number of documents. Inline style sheets have precedence over document style sheets, which have precedence over external style sheets. For example, if an external style sheet specifies a value for a particular property of a particular element, that value is used until a different value is specified in either a document style sheet or an inline style sheet. Likewise, document style sheet property values can be overridden by different property values in an inline style sheet. In effect, the properties of a specific element are those that result from a merge of all applicable style sheets, with lower-level style sheets having precedence in cases of conflicting specifications.</p>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
