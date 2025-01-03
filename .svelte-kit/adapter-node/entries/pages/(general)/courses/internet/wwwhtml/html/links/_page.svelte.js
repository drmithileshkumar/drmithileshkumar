import { a as subscribe, b as set_store_value } from "../../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component } from "../../../../../../../../chunks/ssr2.js";
import { g as githubDark, a as github } from "../../../../../../../../chunks/github-dark.js";
/* empty css                                                                */
import { p as page } from "../../../../../../../../chunks/stores3.js";
import { C as Card } from "../../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../../chunks/ActionIcons.js";
import "../../../../../../../../chunks/Subheader.js";
import "../../../../../../../../chunks/client.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../../../../chunks/stores.js";
/* empty css                                                                   */
import { c as contentNav, a as contents } from "../../../../../../../../chunks/content.js";
import { W as WebPractice } from "../../../../../../../../chunks/WebPractice.js";
import { P as Pathlist } from "../../../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../../../chunks/CourseNavigation.js";
const css = {
  code: "article.svelte-beztui{display:flex;flex-direction:column;gap:0.5em}p.svelte-beztui,li.svelte-beztui{opacity:0.8}h4.svelte-beztui{margin:0.5em 0}h6.svelte-beztui{font-size:1em;margin:0.5em 0;color:rgb(240, 85, 0)}a.svelte-beztui{cursor:pointer;text-decoration:none}.question.svelte-beztui{cursor:pointer;padding:0.3em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { slide } from 'svelte/transition';\\r\\n\\timport { quintOut } from 'svelte/easing';\\r\\n\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Link from '$lib/ui/Link.svelte';\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/internet/content\\";\\r\\n\\timport WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n\\timport DataTable, {Head, Body, Row, Cell} from \\"@smui/data-table\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Hypertext Links\\";\\r\\n    $darkMode = false;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    let htmlContent = \`<!DOCTYPE html> \\r\\n<!-- File name and document purpose --> \\r\\n<html lang = \\"en\\">   \\r\\n    <head>     \\r\\n        <title> A title for the document </title>\\r\\n        <meta charset = \\"utf-8\\" />     \\r\\n        <!--include external resources here like adsense, javascript, styles-->\\r\\n    </head>   \\r\\n    <body>   \\r\\n        <!-- External Link -->\\r\\n        <p id=\\"paragraph\\">\\r\\n            <a href=\\"https://mathril.com\\">Mathril</a> is a platform for practicing mathematics built by Dr Mithilesh Kumar.\\r\\n        </p>\\r\\n        <!--Internal Link -->\\r\\n        <a href=\\"#paragraph\\">Link to above paragraph</a>\\r\\n    </body> \\r\\n</html>\`\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(240, 85, 0);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Internet Technologies</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/wwwhtml/html/links\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Hypertext Links\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#link\\">Links</a></li>\\r\\n                <li><a href=\\"#target\\">Targets within Documents</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <p>\\r\\n                Links are used to connect different resources.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContent} cssContent={\\"\\"} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"link\\">Links</h6>\\r\\n            <p>\\r\\n                A link points to a different resource via an address, usually URL or id. <code>a</code> tag (anchor) is used for linking documents. <code>a</code> tag has an attribute called <code>href</code> that takes the URL or id of the target. \\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"target\\">Targets within Documents</h6>\\r\\n            <p>\\r\\n                It is possible to automatically scroll to an element in your document using the <code>a</code>. The <code>href</code> attribute of the <code>a</code> tag is assigned the <code>id</code> of the target element in the format <code>#id</code>.\\r\\n            </p>\\r\\n            <p>\\r\\n                If the target element is in another document, then the <code>#id</code> is attached at the end of the URL of the document.\\r\\n            </p>\\r\\n            \\r\\n        </Content>\\r\\n    </Card>\\r\\n    <h4>Assignment</h4>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                Place a link to your github repository inside your resume. Use github logo.\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAkDI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,eAAC,CAAE,gBAAG,CACF,OAAO,CAAE,GACb,CACQ,gBAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,gBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CACzB,CAKA,eAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB,CACA,uBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb"}`
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
  return `${$$result.head += `<!-- HEAD_svelte-1qzde0x_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/links"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1qzde0x_END -->`, ""} <article class="svelte-beztui">${validate_component(Pathlist, "Pathlist").$$render(
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
export {
  Page as default
};
