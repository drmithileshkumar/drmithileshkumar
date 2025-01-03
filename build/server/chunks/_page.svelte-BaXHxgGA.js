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
import { P as Pathlist } from './Pathlist-xYGsVQiJ.js';
import { C as CourseNavigation } from './CourseNavigation-pnGRCnsg.js';
import './SmuiElement-DA9PKsv2.js';
import './classAdderBuilder-B9W9nXDD.js';
import './exports-kR70XCWV.js';
import './index2-BZnI6xu7.js';

const css = {
  code: "article.svelte-9tb2l5{display:flex;flex-direction:column;gap:0.5em}p.svelte-9tb2l5,li.svelte-9tb2l5{opacity:0.8}h4.svelte-9tb2l5{margin:0.5em 0}h6.svelte-9tb2l5{font-size:1em;margin:0.5em 0;color:rgb(240, 85, 0)}strong.svelte-9tb2l5{color:goldenrod;opacity:1}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { slide } from 'svelte/transition';\\r\\n\\timport { quintOut } from 'svelte/easing';\\r\\n\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Link from '$lib/ui/Link.svelte';\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/internet/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\"\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Multipurpose Internet Mail Extensions\\";\\r\\n    $darkMode = false;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(240, 85, 0);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Internet Technologies</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/wwwhtml/fundamentals/mime\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Multipurpose Internet Mail Extensions\\r\\n    </h4>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <p>A browser needs some way to determine the format of a document it receives from a Web server. Without knowing the form of the document, the browser would not be able to render it, because different document formats require dif- ferent rendering software. The forms of these documents are specified with Multipurpose Internet Mail Extensions (MIMEs).\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Type Specifications</h6>\\r\\n            <p>\\r\\n                The various types of mimes are:\\r\\n            </p>\\r\\n            <ul>\\r\\n                <li><strong>text/plain</strong>: Plain text files</li>\\r\\n                <li><strong>text/html</strong>: HTML documents</li>\\r\\n                <li><strong>text/css</strong>: Cascading Style Sheets</li>\\r\\n                <li><strong>text/javascript</strong>: JavaScript files</li>\\r\\n                <li><strong>image/jpeg</strong>: JPEG images</li>\\r\\n                <li><strong>image/png</strong>: PNG images</li>\\r\\n                <li><strong>image/gif</strong>: GIF images</li>\\r\\n                <li><strong>image/svg+xml</strong>: SVG (Scalable Vector Graphics) documents</li>\\r\\n                <li><strong>application/json</strong>: JSON data format</li>\\r\\n                <li><strong>application/xml</strong>: XML data format</li>\\r\\n                <li><strong>application/x-www-form-urlencoded</strong>: Form data encoded as a query string, typically used in POST requests</li>\\r\\n                <li><strong>application/pdf</strong>: PDF documents</li>\\r\\n                <li><strong>application/msword</strong>: Microsoft Word documents</li>\\r\\n                <li><strong>application/vnd.ms-excel</strong>: Microsoft Excel documents</li>\\r\\n                <li><strong>application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</strong>: Microsoft Excel OpenXML spreadsheet</li>\\r\\n                <li><strong>application/vnd.openxmlformats-officedocument.wordprocessingml.document</strong>: Microsoft Word OpenXML document</li>\\r\\n                <li><strong>application/zip</strong>: ZIP archives</li>\\r\\n                <li><strong>application/x-7z-compressed</strong>: 7z archives</li>\\r\\n                <li><strong>application/octet-stream</strong>: Arbitrary binary data</li>\\r\\n              </ul>\\r\\n              \\r\\n        </Content>\\r\\n    </Card>\\r\\n\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAgCI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,eAAC,CAAE,gBAAG,CACF,OAAO,CAAE,GACb,CACQ,gBAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,gBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CACzB,CACA,oBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb"}`
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
  return `${$$result.head += `<!-- HEAD_svelte-1hymvz3_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/fundamentals/mime"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1hymvz3_END -->`, ""} <article class="svelte-9tb2l5">${validate_component(Pathlist, "Pathlist").$$render(
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
//# sourceMappingURL=_page.svelte-BaXHxgGA.js.map
