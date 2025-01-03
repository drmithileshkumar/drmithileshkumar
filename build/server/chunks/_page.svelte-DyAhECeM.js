import { a as subscribe, d as set_store_value } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, v as validate_component } from './ssr2-q3O0l93f.js';
import { g as githubDark, a as github } from './github-dark-BC3MHtr2.js';
import { p as page } from './stores3-BrNJmxTp.js';
import { C as Card } from './Card-jWUNhZC7.js';
import { C as Content } from './ActionIcons-Co7bojT-.js';
import './Subheader-BV9F6O0P.js';
import './client-k3u4ChD_.js';
import { d as darkMode, c as currentPath, n as navList } from './stores-Dd7WnHpz.js';
import { c as contentNav, a as contents } from './content-ChhWH1Ps.js';
import { W as WebPractice } from './WebPractice-C-mzGWf8.js';
import { P as Pathlist } from './Pathlist-xYGsVQiJ.js';
import { C as CourseNavigation } from './CourseNavigation-pnGRCnsg.js';
import './SmuiElement-DA9PKsv2.js';
import './classAdderBuilder-B9W9nXDD.js';
import './exports-kR70XCWV.js';
import './index2-BZnI6xu7.js';
import './Segment-CR_jnDNQ.js';
import './ContextFragment-e-oupRQm.js';
import './CommonLabel-BuPx8XxF.js';
import './Suffix-CzM54Q0Q.js';
import './Button-DRRmGjqZ.js';
import './Ripple-Zq_D_mxy.js';
import '@codemirror/lang-javascript';
import '@codemirror/lang-xml';
import '@codemirror/lang-css';

const css = {
  code: "article.svelte-1la69s{display:flex;flex-direction:column;gap:0.5em}h4.svelte-1la69s{margin:0.5em 0}code{background-color:rgba(0, 100, 100, 0.1)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { slide } from 'svelte/transition';\\r\\n\\timport { quintOut } from 'svelte/easing';\\r\\n\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Link from '$lib/ui/Link.svelte';\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/internet/content\\";\\r\\n\\timport WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n\\timport DataTable, {Head, Body, Row, Cell} from \\"@smui/data-table\\";\\r\\n\\timport Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    // console.log($page.url)\\r\\n    let pathComponents = $page.url.pathname.split('/');\\r\\n    let pathUrls = pathComponents.map((u, index) => {\\r\\n        let path = $page.url.origin;\\r\\n        for(let i = 0; i <= index; i++) {\\r\\n            path += pathComponents[i] + '/';\\r\\n        }\\r\\n        return path;\\r\\n    })\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"The time element\\";\\r\\n    $darkMode = false;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    let htmlContent = \`<!DOCTYPE html> \\r\\n<!-- File name and document purpose --> \\r\\n<html lang = \\"en\\">   \\r\\n    <head>     \\r\\n        <title> A title for the document </title>\\r\\n        <meta charset = \\"utf-8\\" />     \\r\\n        <!--include external resources here like adsense, javascript, styles-->\\r\\n    </head>   \\r\\n    <body>   \\r\\n       <time datetime=\\"2024-02-22T09:45\\" pubdat=\\"pubdate\\">\\r\\n            February 22, 2024 9:45am IST\\r\\n        </time\\r\\n    </body> \\r\\n</html>\`\\r\\n\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        text-decoration: none;\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n    :global(code) {\\r\\n        background-color: rgba(0, 100, 100, 0.1);\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Internet Technologies</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/wwwhtml/html/time\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        The <code>time</code> element\\r\\n    </h4>\\r\\n    <!-- <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#basicForm\\">The <code>form</code> Element</a></li>\\r\\n                <li><a href=\\"#inputForm\\">The <code>input</code> Element</a></li>\\r\\n                <li><a href=\\"#selectForm\\">The <code>select</code> Element</a></li>\\r\\n                <li><a href=\\"#textareaForm\\">The <code>textarea</code> Element</a></li>\\r\\n            </ol>\\r\\n            <p>For a better understanding of form submission, read <a href=\\"/courses/internet/wwwhtml/fundamentals/http\\">HTTP protocol</a>.</p>\\r\\n        </Content>\\r\\n    </Card> -->\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <code>time</code> element is used to time stamp an article or a document. Although it does not render anything different. It has textcontent to show human typed date and an attribute <code>datetime</code> that is machine readable date in the format YYYY-MM-DD for date. The time part is added as YYYY-MM-DDTHH:MM:SS where H is for hour, the 2nd M is for minute and S is for second. <code>time</code> element is used to pass information to calenders, otherwise it does not do anything special.\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContent} cssContent={\\"\\"} jsContent={\\"\\"} />\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAyDI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CAIQ,gBAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAqBQ,IAAM,CACV,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3C"}`
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
  let pathComponents = $page.url.pathname.split("/");
  pathComponents.map((u, index) => {
    let path = $page.url.origin;
    for (let i = 0; i <= index; i++) {
      path += pathComponents[i] + "/";
    }
    return path;
  });
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "The time element", $currentPath);
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
       <time datetime="2024-02-22T09:45" pubdat="pubdate">
            February 22, 2024 9:45am IST
        </time
    </body> 
</html>`;
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1umhs19_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/time"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1umhs19_END -->`, ""} <article class="svelte-1la69s">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1la69s" data-svelte-h="svelte-f1m6ar">The <code>time</code> element</h4>  ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<code data-svelte-h="svelte-191m7ft">time</code> element is used to time stamp an article or a document. Although it does not render anything different. It has textcontent to show human typed date and an attribute <code data-svelte-h="svelte-1duc33x">datetime</code> that is machine readable date in the format YYYY-MM-DD for date. The time part is added as YYYY-MM-DDTHH:MM:SS where H is for hour, the 2nd M is for minute and S is for second. <code data-svelte-h="svelte-191m7ft">time</code> element is used to pass information to calenders, otherwise it does not do anything special.`;
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
  )}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DyAhECeM.js.map
