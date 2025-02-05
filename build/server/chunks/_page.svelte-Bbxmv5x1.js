import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component } from './ssr2-CDgUAJs6.js';
import { a as githubDark, g as github } from './github-dark-DeAsbMVW.js';
import { p as page } from './stores3-DPEAZJnM.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import './Subheader-DEm_inUP.js';
import './client-k3u4ChD_.js';
import { d as darkMode, c as currentPath, n as navList } from './stores-Cecnyqn_.js';
import { c as contentNav, a as contents } from './content2-ChhWH1Ps.js';
import { W as WebPractice } from './WebPractice-DZHtRtZk.js';
import { P as Pathlist } from './Pathlist-B9wgcfC1.js';
import { C as CourseNavigation } from './CourseNavigation-DznSxbmO.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import './exports-kR70XCWV.js';
import './index2-D2s-XE5r.js';
import './Segment-CO7DIWEy.js';
import './ContextFragment-CedcH2TL.js';
import './CommonLabel-CFEgn-mu.js';
import './Suffix-CtI6fDI6.js';
import './Button-DTp4JSRw.js';
import './Ripple-N--aPaMn.js';
import '@codemirror/lang-javascript';
import '@codemirror/lang-xml';
import '@codemirror/lang-css';

const css = {
  code: "article.svelte-1m08utq{display:flex;flex-direction:column;gap:0.5em}p.svelte-1m08utq,li.svelte-1m08utq{opacity:0.8}h4.svelte-1m08utq{margin:0.5em 0}h6.svelte-1m08utq{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}a.svelte-1m08utq{text-decoration:none;cursor:pointer}.question.svelte-1m08utq{cursor:pointer;padding:0.3em}code{background-color:rgba(0, 100, 100, 0.1)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { slide } from 'svelte/transition';\\r\\n\\timport { quintOut } from 'svelte/easing';\\r\\n\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Link from '$lib/ui/Link.svelte';\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/internet/content\\";\\r\\n\\timport WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n\\timport DataTable, {Head, Body, Row, Cell} from \\"@smui/data-table\\";\\r\\n\\timport Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    // console.log($page.url)\\r\\n    let pathComponents = $page.url.pathname.split('/');\\r\\n    let pathUrls = pathComponents.map((u, index) => {\\r\\n        let path = $page.url.origin;\\r\\n        for(let i = 0; i <= index; i++) {\\r\\n            path += pathComponents[i] + '/';\\r\\n        }\\r\\n        return path;\\r\\n    })\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Inside Head\\";\\r\\n    $darkMode = false;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    let htmlContentMeta = \`<!DOCTYPE html> \\r\\n<!-- File name and document purpose --> \\r\\n<html lang = \\"en\\">   \\r\\n    <head>     \\r\\n        <title> A title for the document </title>\\r\\n        <meta charset = \\"utf-8\\" />     \\r\\n        <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1\\">\\r\\n        <meta name=\\"author\\" content=\\"Dr Mithilesh Kumar\\">\\r\\n        <meta name=\\"description\\" content=\\"Course on internet technologies\\">\\r\\n        <meta name=\\"keywords\\" content=\\"HTML, CSS, Javascript, XML, node.js\\">\\r\\n    </head>   \\r\\n    <body>\\r\\n        <header>\\r\\n            <!---contains navigation, headings, table of contents etc.--->\\r\\n        </header>   \\r\\n        <main>\\r\\n            <p>Look at various usages of the <code>meta</code> element.\\r\\n        </main>\\r\\n    </body> \\r\\n</html>\`\\r\\nlet htmlContentLink = \`<!DOCTYPE html> \\r\\n<!-- File name and document purpose --> \\r\\n<html lang = \\"en\\">   \\r\\n    <head>     \\r\\n        <title> A title for the document </title>\\r\\n        <meta charset = \\"utf-8\\" />       \\r\\n        <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1\\">\\r\\n        <meta name=\\"author\\" content=\\"Dr Mithilesh Kumar\\">\\r\\n        <meta name=\\"description\\" content=\\"Course on internet technologies\\">\\r\\n        <meta name=\\"keywords\\" content=\\"HTML, CSS, Javascript, XML, node.js\\">\\r\\n\\r\\n        <link rel=\\"icon\\" type=\\"image/png\\" href=\\"\\">\\r\\n        <link rel=\\"manifest\\" crossorigin=\\"use-credentials\\" href=\\"\\">\\r\\n        <link rel=\\"stylesheet\\" href=\\"\\">\\r\\n    </head>   \\r\\n    <body>   \\r\\n        <main>\\r\\n            <p>Set icon, manifest and fetch stylesheets using <code>link</code> element.</p>\\r\\n        </main>\\r\\n    </body> \\r\\n</html>\`\\r\\nlet htmlContentScript = \`<!DOCTYPE html> \\r\\n<!-- File name and document purpose --> \\r\\n<html lang = \\"en\\">   \\r\\n    <head>     \\r\\n        <title> A title for the document </title>\\r\\n        <meta charset = \\"utf-8\\" />     \\r\\n        <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1\\">\\r\\n        <meta name=\\"author\\" content=\\"Dr Mithilesh Kumar\\">\\r\\n        <meta name=\\"description\\" content=\\"Course on internet technologies\\">\\r\\n        <meta name=\\"keywords\\" content=\\"HTML, CSS, Javascript, XML, node.js\\">\\r\\n\\r\\n        <link rel=\\"icon\\" type=\\"image/png\\" href=\\"\\">\\r\\n        <link rel=\\"manifest\\" crossorigin=\\"use-credentials\\" href=\\"\\">\\r\\n        <link rel=\\"stylesheet\\" href=\\"\\">\\r\\n\\r\\n        <script src=\\"\\" type=\\"text/javascript\\" defer></\\\\script>\\r\\n        <script>\\r\\n            const sayHello = () => {\\r\\n                console.log('Hello');\\r\\n            }\\r\\n        </\\\\script>\\r\\n    </head>   \\r\\n    <body>   \\r\\n        <main>\\r\\n            <p>There is <code>script</code> tag in <code>head</code> as well.</p>\\r\\n        </main>\\r\\n    </body> \\r\\n</html>\\r\\n\`\\r\\nlet htmlContentStyle = \`<!DOCTYPE html>\\r\\n<html lang = \\"en\\" >\\r\\n    <head> \\r\\n        <title> Inside Head </title>\\r\\n        <meta charset = \\"utf-8\\" />\\r\\n        <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1\\">\\r\\n        <meta name=\\"author\\" content=\\"Dr Mithilesh Kumar\\">\\r\\n        <meta name=\\"description\\" content=\\"Course on internet technologies\\">\\r\\n        <meta name=\\"keywords\\" content=\\"HTML, CSS, Javascript, XML, node.js\\">\\r\\n\\r\\n        <link rel=\\"icon\\" type=\\"image/png\\" href=\\"\\">\\r\\n        <link rel=\\"manifest\\" crossorigin=\\"use-credentials\\" href=\\"\\">\\r\\n        <link rel=\\"stylesheet\\" href=\\"\\">\\r\\n\\r\\n        <script src=\\"\\" type=\\"text/javascript\\" defer></\\\\script>\\r\\n        <script>\\r\\n            const sayHello = () => {\\r\\n                console.log('Hello');\\r\\n            }\\r\\n        </\\\\script>\\r\\n\\r\\n        <style>\\r\\n            h1 {\\r\\n                color: red;\\r\\n            }\\r\\n        </style>\\r\\n    </head>\\r\\n    <body>\\r\\n        <article>\\r\\n            <h1>How to layout your page?</h1>\\r\\n            <p>In this article, we are going to learn how to layout an HTML page.</p>\\r\\n        </article>\\r\\n    </body>\\r\\n</html>\`\\r\\n\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.7em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        text-decoration: none;\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n    :global(code) {\\r\\n        background-color: rgba(0, 100, 100, 0.1);\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Internet Technologies</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/wwwhtml/html/head\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Inside Head\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#meta\\">The <code>meta</code> Element</a></li>\\r\\n                <li><a href=\\"#link\\">The <code>link</code> Element</a></li>\\r\\n                <li><a href=\\"#script\\">The <code>script</code> Element</a></li>\\r\\n                <li><a href=\\"#style\\">The <code>style</code> Element</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <p>\\r\\n                The <code>head</code> element is usually the first element inside the <code>html</code> element. It contains information for search engines, links to external resources, styles and javascript. \\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"meta\\">The <code>meta</code> Element</h6>\\r\\n            <p>\\r\\n                The <code>meta</code> elements has multiple roles. It sets the character set of the page, description, keywords, author information and many other settings regarding webapp. Look at the example below.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentMeta} cssContent={\\"\\"} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"link\\">The <code>link</code> Element</h6>\\r\\n            <p>\\r\\n                The <code>link</code> element is used to load external resources like setting icon in the title, manifest file, stylesheets etc.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentLink} cssContent={\\"\\"} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"script\\">The <code>script</code> Element</h6>\\r\\n            <p>\\r\\n                The <code>script</code> element can be used to either load external javascript files or contain local javascript code. We'll learn about it later.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentScript} cssContent={\\"\\"} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"style\\">The <code>style</code> Element</h6>\\r\\n            <p>\\r\\n                We have seen that external CSS can be loaded using <code>link</code> element. Local style code can be included inside the <code>style</code> element.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentStyle} cssContent={\\"\\"} jsContent={\\"\\"} />\\r\\n    \\r\\n    <h4>Exercise</h4>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                Set title and icon for your resume and college page with appropriate meta descriptions and keywords.\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAmJI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAC,CAAE,iBAAG,CACF,OAAO,CAAE,GACb,CACQ,iBAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CAKA,gBAAE,CACE,eAAe,CAAE,IAAI,CACrB,MAAM,CAAE,OACZ,CACA,wBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb,CACQ,IAAM,CACV,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3C"}`
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
  set_store_value(currentPath, $currentPath = "Inside Head", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let htmlContentMeta = `<!DOCTYPE html> 
<!-- File name and document purpose --> 
<html lang = "en">   
    <head>     
        <title> A title for the document </title>
        <meta charset = "utf-8" />     
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="author" content="Dr Mithilesh Kumar">
        <meta name="description" content="Course on internet technologies">
        <meta name="keywords" content="HTML, CSS, Javascript, XML, node.js">
    </head>   
    <body>
        <header>
            <!---contains navigation, headings, table of contents etc.--->
        </header>   
        <main>
            <p>Look at various usages of the <code>meta</code> element.
        </main>
    </body> 
</html>`;
  let htmlContentLink = `<!DOCTYPE html> 
<!-- File name and document purpose --> 
<html lang = "en">   
    <head>     
        <title> A title for the document </title>
        <meta charset = "utf-8" />       
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="author" content="Dr Mithilesh Kumar">
        <meta name="description" content="Course on internet technologies">
        <meta name="keywords" content="HTML, CSS, Javascript, XML, node.js">

        <link rel="icon" type="image/png" href="">
        <link rel="manifest" crossorigin="use-credentials" href="">
        <link rel="stylesheet" href="">
    </head>   
    <body>   
        <main>
            <p>Set icon, manifest and fetch stylesheets using <code>link</code> element.</p>
        </main>
    </body> 
</html>`;
  let htmlContentScript = `<!DOCTYPE html> 
<!-- File name and document purpose --> 
<html lang = "en">   
    <head>     
        <title> A title for the document </title>
        <meta charset = "utf-8" />     
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="author" content="Dr Mithilesh Kumar">
        <meta name="description" content="Course on internet technologies">
        <meta name="keywords" content="HTML, CSS, Javascript, XML, node.js">

        <link rel="icon" type="image/png" href="">
        <link rel="manifest" crossorigin="use-credentials" href="">
        <link rel="stylesheet" href="">

        <script src="" type="text/javascript" defer><\/script>
        <script>
            const sayHello = () => {
                console.log('Hello');
            }
        <\/script>
    </head>   
    <body>   
        <main>
            <p>There is <code>script</code> tag in <code>head</code> as well.</p>
        </main>
    </body> 
</html>
`;
  let htmlContentStyle = `<!DOCTYPE html>
<html lang = "en" >
    <head> 
        <title> Inside Head </title>
        <meta charset = "utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="author" content="Dr Mithilesh Kumar">
        <meta name="description" content="Course on internet technologies">
        <meta name="keywords" content="HTML, CSS, Javascript, XML, node.js">

        <link rel="icon" type="image/png" href="">
        <link rel="manifest" crossorigin="use-credentials" href="">
        <link rel="stylesheet" href="">

        <script src="" type="text/javascript" defer><\/script>
        <script>
            const sayHello = () => {
                console.log('Hello');
            }
        <\/script>

        <style>
            h1 {
                color: red;
            }
        </style>
    </head>
    <body>
        <article>
            <h1>How to layout your page?</h1>
            <p>In this article, we are going to learn how to layout an HTML page.</p>
        </article>
    </body>
</html>`;
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-pnupcm_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/head"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-pnupcm_END -->`, ""} <article class="svelte-1m08utq">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1m08utq" data-svelte-h="svelte-1o96b2c">Inside Head</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1m08utq" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-7qfqxy"><li class="svelte-1m08utq"><a href="#meta" class="svelte-1m08utq">The <code>meta</code> Element</a></li> <li class="svelte-1m08utq"><a href="#link" class="svelte-1m08utq">The <code>link</code> Element</a></li> <li class="svelte-1m08utq"><a href="#script" class="svelte-1m08utq">The <code>script</code> Element</a></li> <li class="svelte-1m08utq"><a href="#style" class="svelte-1m08utq">The <code>style</code> Element</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-1m08utq" data-svelte-h="svelte-140w9fj">The <code>head</code> element is usually the first element inside the <code>html</code> element. It contains information for search engines, links to external resources, styles and javascript.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="meta" class="svelte-1m08utq" data-svelte-h="svelte-1r26eyc">The <code>meta</code> Element</h6> <p class="svelte-1m08utq" data-svelte-h="svelte-1ep8i96">The <code>meta</code> elements has multiple roles. It sets the character set of the page, description, keywords, author information and many other settings regarding webapp. Look at the example below.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentMeta,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="link" class="svelte-1m08utq" data-svelte-h="svelte-41ut2c">The <code>link</code> Element</h6> <p class="svelte-1m08utq" data-svelte-h="svelte-b6pxv6">The <code>link</code> element is used to load external resources like setting icon in the title, manifest file, stylesheets etc.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentLink,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="script" class="svelte-1m08utq" data-svelte-h="svelte-iyq1d8">The <code>script</code> Element</h6> <p class="svelte-1m08utq" data-svelte-h="svelte-yawpkr">The <code>script</code> element can be used to either load external javascript files or contain local javascript code. We&#39;ll learn about it later.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentScript,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="style" class="svelte-1m08utq" data-svelte-h="svelte-11vmc9i">The <code>style</code> Element</h6> <p class="svelte-1m08utq" data-svelte-h="svelte-18n7x4c">We have seen that external CSS can be loaded using <code>link</code> element. Local style code can be included inside the <code>style</code> element.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentStyle,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} <h4 class="svelte-1m08utq" data-svelte-h="svelte-1yto96c">Exercise</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1m08utq" data-svelte-h="svelte-1d77n9f">Set title and icon for your resume and college page with appropriate meta descriptions and keywords.</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Bbxmv5x1.js.map
