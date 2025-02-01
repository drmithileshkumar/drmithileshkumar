import { a as subscribe, b as set_store_value } from "../../../../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../../../chunks/ssr2.js";
import { g as githubDark, a as github } from "../../../../../../../chunks/github-dark.js";
/* empty css                                                             */
import { p as page } from "../../../../../../../chunks/stores3.js";
import { C as Card } from "../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../chunks/ActionIcons.js";
import { N as NavList } from "../../../../../../../chunks/NavList.js";
import { c as currentPath, d as darkMode, n as navList } from "../../../../../../../chunks/stores.js";
import { c as contentNav, a as contents } from "../../../../../../../chunks/content6.js";
import { P as Pathlist } from "../../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../../chunks/CourseNavigation.js";
const css$1 = {
  code: "article.svelte-wl5xjl{display:flex;flex-direction:column;gap:0.5em}h4.svelte-wl5xjl,h5.svelte-wl5xjl{margin:0.5em 0}h5.svelte-wl5xjl{font-size:1.1em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { slide } from 'svelte/transition';\\r\\n\\timport { quintOut } from 'svelte/easing';\\r\\n\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Link from '$lib/ui/Link.svelte';\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/quantum/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $currentPath = $navList[0].topics[0].topics[1].name;\\r\\n    $darkMode = false;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    let code1=\`<!--Inline CSS-->\\r\\n<p style=\\"color: tomato;\\">I'm tomato</p>\`\\r\\n    let code2=\`<head>\\r\\n    <!---CSS from external file-->\\r\\n    <link rel=\\"stylesheet\\" href=\\"/app.css\\"> \\r\\n    <!--Document level CSS-->\\r\\n    <style>\\r\\n    /* set text color of p elements to tomato */\\r\\n        p {\\r\\n            color: tomato;\\r\\n        }\\r\\n    </style>\\r\\n</head>\`\\r\\n    let code3 = \`selector1 {\\r\\n    property1: value1;\\r\\n    property2: value2;\\r\\n}\\r\\nselector2 {\\r\\n    property3: value3;\\r\\n    property4: value4;\\r\\n}\`\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>{$navList[0].topics[0].name}</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com{$navList[0].topics[0].topics[1].url}\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        {$currentPath}\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h5>Contents</h5>\\r\\n            <NavList name=\\"{$navList[0].topics[0].topics[1].name}\\" url=\\"{$navList[0].topics[0].topics[1].url}\\" topics={$navList[0].topics[0].topics[1].topics} expanded={false} />\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <!-- <Card>\\r\\n        <Content>\\r\\n            <p>\\r\\n                Cascading Style Sheets or CSS are used to change the presentation of HTML. There are three ways in which styles can be applied to HTML elements: inline, document level and from external file.  Every HTML element has an attribute called <code>style</code>. The following code uses it to change the color of text inside the <code>p</code> element. This method is called <em>inline CSS</em>.\\r\\n            </p>\\r\\n            <Highlight language={xml} code={code1} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n            <p>\\r\\n               \\r\\n                The below code shows two ways to add CSS to HTML. Line 3 adds CSS from the external file <code>app.css</code>, while the codes between the lines 5-11 add document level CSS.\\r\\n            </p>\\r\\n            <Highlight language={xml} code={code2} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n            <p>\\r\\n                The three levels of style sheets, in order from lowest level to highest level, are inline, document level, and external. Inline style sheets apply to the content of a single HTML element, document-level style sheets apply to the whole body of a document, and external style sheets can apply to the bodies of any number of documents. Inline style sheets have precedence over document style sheets, which have precedence over external style sheets. For example, if an external style sheet specifies a value for a particular property of a particular element, that value is used until a different value is specified in either a document style sheet or an inline style sheet. Likewise, document style sheet property values can be overridden by different property values in an inline style sheet. In effect, the properties of a specific element are those that result from a merge of all applicable style sheets, with lower-level style sheets having precedence in cases of conflicting specifications.\\r\\n            </p>\\r\\n            \\r\\n        </Content>\\r\\n    </Card> -->\\r\\n    \\r\\n</article>\\r\\n"],"names":[],"mappings":"AAqDI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CAIQ,gBAAE,CAAE,gBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,gBAAG,CACC,SAAS,CAAE,KACf"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  let $navList, $$unsubscribe_navList;
  let $currentPath, $$unsubscribe_currentPath;
  let $page, $$unsubscribe_page;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = $navList[0].topics[0].topics[1].name, $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_navList();
  $$unsubscribe_currentPath();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-svz03n_START -->${$$result.title = `<title>${escape($navList[0].topics[0].name)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($navList[0].topics[0].topics[1].url, true)}"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-svz03n_END -->`, ""} <article class="svelte-wl5xjl">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-wl5xjl">${escape($currentPath)}</h4> ${validate_component(Card, "Card").$$render(
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
                name: $navList[0].topics[0].topics[1].name,
                url: $navList[0].topics[0].topics[1].url,
                topics: $navList[0].topics[0].topics[1].topics,
                expanded: false
              },
              {},
              {}
            )}`;
          }
        })}`;
      }
    }
  )} </article>`;
});
export {
  Page as default
};
