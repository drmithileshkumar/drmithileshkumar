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
  code: "article.svelte-1la69s{display:flex;flex-direction:column;gap:0.5em}p.svelte-1la69s,li.svelte-1la69s{opacity:0.8}h4.svelte-1la69s{margin:0.5em 0}h6.svelte-1la69s{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}strong.svelte-1la69s{color:goldenrod;opacity:1}a.svelte-1la69s{text-decoration:none;cursor:pointer}.question.svelte-1la69s{cursor:pointer;padding:0.3em}code{background-color:rgba(0, 100, 100, 0.1)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { slide } from 'svelte/transition';\\r\\n\\timport { quintOut } from 'svelte/easing';\\r\\n\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Link from '$lib/ui/Link.svelte';\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/internet/content\\";\\r\\n\\timport WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n\\timport DataTable, {Head, Body, Row, Cell} from \\"@smui/data-table\\";\\r\\n\\timport Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    // console.log($page.url)\\r\\n    let pathComponents = $page.url.pathname.split('/');\\r\\n    let pathUrls = pathComponents.map((u, index) => {\\r\\n        let path = $page.url.origin;\\r\\n        for(let i = 0; i <= index; i++) {\\r\\n            path += pathComponents[i] + '/';\\r\\n        }\\r\\n        return path;\\r\\n    })\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Organization Elements\\";\\r\\n    $darkMode = false;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    let htmlContentHeader = \`<!DOCTYPE html> \\r\\n<!-- File name and document purpose --> \\r\\n<html lang = \\"en\\">   \\r\\n    <head>     \\r\\n        <title> A title for the document </title>\\r\\n        <meta charset = \\"utf-8\\" />     \\r\\n        <!--include external resources here like adsense, javascript, styles-->\\r\\n    </head>   \\r\\n    <body>\\r\\n        <header>\\r\\n            <!---contains navigation, headings, table of contents etc.--->\\r\\n        </header>   \\r\\n        <main>\\r\\n        </main>\\r\\n    </body> \\r\\n</html>\`\\r\\nlet htmlContentNav = \`<!DOCTYPE html> \\r\\n<!-- File name and document purpose --> \\r\\n<html lang = \\"en\\">   \\r\\n    <head>     \\r\\n        <title> A title for the document </title>\\r\\n        <meta charset = \\"utf-8\\" />     \\r\\n        <!--include external resources here like adsense, javascript, styles-->\\r\\n    </head>   \\r\\n    <body>   \\r\\n       <header>\\r\\n            <nav>\\r\\n                <a href=\\"\\">Home</a>\\r\\n                <a href=\\"\\">Store</a>\\r\\n                <a href=\\"\\">Career</a>\\r\\n                <a href=\\"\\">Contact</a>\\r\\n            </nav>\\r\\n        </header\\r\\n    </body> \\r\\n</html>\`\\r\\nlet htmlContentAside = \`<!DOCTYPE html> \\r\\n<!-- File name and document purpose --> \\r\\n<html lang = \\"en\\">   \\r\\n    <head>     \\r\\n        <title> A title for the document </title>\\r\\n        <meta charset = \\"utf-8\\" />     \\r\\n        <!--include external resources here like adsense, javascript, styles-->\\r\\n    </head>   \\r\\n    <body>   \\r\\n        <header>\\r\\n            <nav>\\r\\n                <a href=\\"\\">Home</a>\\r\\n                <a href=\\"\\">Store</a>\\r\\n                <a href=\\"\\">Career</a>\\r\\n                <a href=\\"\\">Contact</a>\\r\\n            </nav>\\r\\n        </header>\\r\\n        <aside>\\r\\n            <nav>\\r\\n                <a href=\\"\\">About</a>\\r\\n                <a href=\\"\\">Courses</a>\\r\\n                <a href=\\"\\">Publications</a>\\r\\n                <a href=\\"\\">Log in</a>\\r\\n            </nav>\\r\\n        </aside>\\r\\n        <p>Notice that the above aside element is not floating to the left or right on its own</p>\\r\\n    </body> \\r\\n</html>\\r\\n\`\\r\\nlet htmlContentArticle = \`<!DOCTYPE html>\\r\\n<html lang = \\"en\\" >\\r\\n    <head> \\r\\n        <title> Organization Elements </title>\\r\\n        <meta charset = \\"utf-8\\" />\\r\\n    </head>\\r\\n    <body>\\r\\n        <header>\\r\\n            <nav>\\r\\n                <a href=\\"\\">Home</a>\\r\\n                <a href=\\"\\">Store</a>\\r\\n                <a href=\\"\\">Career</a>\\r\\n                <a href=\\"\\">Contact</a>\\r\\n            </nav>\\r\\n        </header>\\r\\n        <aside>\\r\\n            <nav>\\r\\n                <a href=\\"\\">About</a>\\r\\n                <a href=\\"\\">Courses</a>\\r\\n                <a href=\\"\\">Publications</a>\\r\\n                <a href=\\"\\">Log in</a>\\r\\n            </nav>\\r\\n        </aside>\\r\\n        <article>\\r\\n            <h1>How to layout your page?</h1>\\r\\n            <p>In this article, we are going to learn how to layout an HTML page.</p>\\r\\n        </article>\\r\\n    </body>\\r\\n</html>\`\\r\\nlet htmlContentSection = \`<!DOCTYPE html>\\r\\n<html lang = \\"en\\" >\\r\\n    <head> \\r\\n        <title> Organization Elements </title>\\r\\n        <meta charset = \\"utf-8\\" />\\r\\n    </head>\\r\\n    <body>\\r\\n        <header>\\r\\n            <nav>\\r\\n                <a href=\\"\\">Home</a>\\r\\n                <a href=\\"\\">Store</a>\\r\\n                <a href=\\"\\">Career</a>\\r\\n                <a href=\\"\\">Contact</a>\\r\\n            </nav>\\r\\n        </header>\\r\\n        <aside>\\r\\n            <nav>\\r\\n                <a href=\\"\\">About</a>\\r\\n                <a href=\\"\\">Courses</a>\\r\\n                <a href=\\"\\">Publications</a>\\r\\n                <a href=\\"\\">Log in</a>\\r\\n            </nav>\\r\\n        </aside>\\r\\n        <article>\\r\\n            <h1>How to layout your page?</h1>\\r\\n            <p>In this article, we are going to learn how to layout an HTML page.</p>\\r\\n            <section>\\r\\n                <h2>Draw it on paper</h2>\\r\\n                <p>The first step is to draw out how the page should look.</p>\\r\\n            </section>\\r\\n            <section>\\r\\n                <h2>Semantic names to each part</h2>\\r\\n                <p>Decide navigation, side bars, footer and main content area.</p>\\r\\n            </section>\\r\\n            <section>\\r\\n                <h2>Container elements</h2>\\r\\n                <p>Write respective container elements for each part.</p>\\r\\n            </section>\\r\\n            <section>\\r\\n                <h2>Use CSS</h2>\\r\\n                <p>Use flex or grid to create the layout such that each container is placed where it should be.</p>\\r\\n            </section>\\r\\n        </article>\\r\\n    </body>\\r\\n</html>\`\\r\\nlet htmlContentFooter = \`<!DOCTYPE html>\\r\\n<html lang = \\"en\\" >\\r\\n    <head> \\r\\n        <title> Organization Elements </title>\\r\\n        <meta charset = \\"utf-8\\" />\\r\\n    </head>\\r\\n    <body>\\r\\n        <header>\\r\\n            <nav>\\r\\n                <a href=\\"\\">Home</a>\\r\\n                <a href=\\"\\">Store</a>\\r\\n                <a href=\\"\\">Career</a>\\r\\n                <a href=\\"\\">Contact</a>\\r\\n            </nav>\\r\\n        </header>\\r\\n        <aside>\\r\\n            <nav>\\r\\n                <a href=\\"\\">About</a>\\r\\n                <a href=\\"\\">Courses</a>\\r\\n                <a href=\\"\\">Publications</a>\\r\\n                <a href=\\"\\">Log in</a>\\r\\n            </nav>\\r\\n        </aside>\\r\\n        <article>\\r\\n            <h1>How to layout your page?</h1>\\r\\n            <p>In this article, we are going to learn how to layout an HTML page.</p>\\r\\n            <section>\\r\\n                <h2>Draw it on paper</h2>\\r\\n                <p>The first step is to draw out how the page should look.</p>\\r\\n            </section>\\r\\n            <section>\\r\\n                <h2>Semantic names to each part</h2>\\r\\n                <p>Decide navigation, side bars, footer and main content area.</p>\\r\\n            </section>\\r\\n            <section>\\r\\n                <h2>Container elements</h2>\\r\\n                <p>Write respective container elements for each part.</p>\\r\\n            </section>\\r\\n            <section>\\r\\n                <h2>Use CSS</h2>\\r\\n                <p>Use flex or grid to create the layout such that each container is placed where it should be.</p>\\r\\n            </section>\\r\\n        </article>\\r\\n        <footer>\\r\\n            <p>The website is hosted on the Earth.</p>\\r\\n            <p>&copy; All rights reserved.</p>\\r\\n            <p>See legal rights</p>\\r\\n        </footer>\\r\\n    </body>\\r\\n</html>\`\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        text-decoration: none;\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n    :global(code) {\\r\\n        background-color: rgba(0, 100, 100, 0.1);\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Internet Technologies</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/wwwhtml/html/organization\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Organization Elements\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#header\\">The <code>header</code> Element</a></li>\\r\\n                <li><a href=\\"#nav\\">The <code>nav</code> Element</a></li>\\r\\n                <li><a href=\\"#aside\\">The <code>aside</code> Element</a></li>\\r\\n                <li><a href=\\"#article\\">The <code>article</code> Element</a></li>\\r\\n                <li><a href=\\"#section\\">The <code>section</code> Element</a></li>\\r\\n                <li><a href=\\"#footer\\">The <code>footer</code> Element</a></li>\\r\\n                <li><a href=\\"#div\\">The <code>div</code> Element</a></li>\\r\\n                <li><a href=\\"#span\\">The <code>span</code> Element</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <p>\\r\\n                There are many elements in HTML that are used to create a layout and organize various parts of a page depending on their <em>natural</em> place. For example, information that should be at the end of a page is placed inside <code>footer</code> element. Information in the sidebar is placed inside an <code>aside</code> element. It is important to note that HTML will <strong>not </strong> put a <code>footer</code> at the end of the page or an <code>aside</code> to the side of the page. These organization elements are only there to provide a semantic meaning to the content.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"header\\">The <code>header</code> Element</h6>\\r\\n            <p>\\r\\n                <code>header</code> element acts as a container for content that goes at the top of the page, usually navigation, heading, table of contents etc.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentHeader} cssContent={\\"\\"} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"nav\\">The <code>nav</code> Element</h6>\\r\\n            <p>\\r\\n                The <code>nav</code> elements acts as a container for links to other pages in the website. Usually it is placed at the top of the page, in sidebar or in the footer.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentNav} cssContent={\\"\\"} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"aside\\">The <code>aside</code> Element</h6>\\r\\n            <p>\\r\\n                Usually side bars are placed inside an <code>aside</code> element. The side bars likely contain a <code>nav</code> element. CSS is used to place the <code>aside</code> element to lay on the left or right side of the page.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentAside} cssContent={\\"\\"} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"article\\">The <code>article</code> Element</h6>\\r\\n            <p>\\r\\n                <code>article</code> element as the name suggests becomes the container for main content of the page. It can start with a heading <code>h1</code> etc. and may contain many paragraphs.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentArticle} cssContent={\\"\\"} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"section\\">The <code>section</code> Element</h6>\\r\\n            <p>\\r\\n                Usually <code>section</code> elements divide an <code>article</code> into many parts where each <code>section</code> can have its own heading <code>h2</code> etc.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentSection} cssContent={\\"\\"} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"footer\\">The <code>footer</code> Element</h6>\\r\\n            <p>\\r\\n                Usually <code>footer</code> element contains copyright information, office address, legal information etc and is placed at the end of the page.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentFooter} cssContent={\\"\\"} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"div\\">The <code>div</code> Element</h6>\\r\\n            <p>\\r\\n                Sometimes we need a container that is there just for design. It does not carry any semantic meaning. For example, displaying two paragraphs side-by-side. We use <code>div</code> element as a container in such cases.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"span\\">The <code>span</code> Element</h6>\\r\\n            <p>\\r\\n                <code>span</code> element is like inline version of <code>div</code>. It is usually used to modify text or insert icons or spacing characters without changing the flow of the content.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"layout\\">Typical Layout</h6>\\r\\n            <svg width=\\"100%\\" viewBox=\\"0 0 500 500\\">\\r\\n                <rect x=\\"5\\" y=\\"5\\" width='490px' height=\\"50px\\" fill=\\"rgba(0, 100, 200, 0.1)\\" stroke=\\"currentColor\\" stroke-width=\\"1\\" />\\r\\n                <rect x=\\"5\\" y=\\"55\\" width='50px' height=\\"350px\\" fill=\\"rgba(0, 0, 0, 0.1)\\" stroke=\\"currentColor\\" stroke-width=\\"1\\" />\\r\\n                <rect x=\\"445\\" y=\\"55\\" width='50px' height=\\"350px\\" fill=\\"rgba(0, 0, 0, 0.1)\\" stroke=\\"currentColor\\" stroke-width=\\"1\\" />\\r\\n                <rect x=\\"5\\" y=\\"405\\" width='490px' height=\\"50px\\" fill=\\"rgba(0, 100, 200, 0.1)\\" stroke=\\"currentColor\\" stroke-width=\\"1\\" />\\r\\n                <rect x=\\"60\\" y=\\"60\\" width='380px' height=\\"340px\\" fill=\\"rgba(100, 0, 100, 0.1)\\" stroke=\\"currentColor\\" stroke-width=\\"1\\" />\\r\\n                <rect x=\\"65\\" y=\\"90\\" width='370px' height=\\"305px\\" fill=\\"rgba(0, 200, 0, 0.1)\\" stroke=\\"currentColor\\" stroke-width=\\"1\\" />\\r\\n                <rect x=\\"70\\" y=\\"140\\" width='360px' height=\\"80px\\" fill=\\"rgba(200, 0, 0, 0.1)\\" stroke=\\"currentColor\\" stroke-width=\\"1\\" />\\r\\n                <rect x=\\"70\\" y=\\"225\\" width='360px' height=\\"80px\\" fill=\\"rgba(200, 0, 0, 0.1)\\" stroke=\\"currentColor\\" stroke-width=\\"1\\" />\\r\\n                <rect x=\\"70\\" y=\\"310\\" width='360px' height=\\"80px\\" fill=\\"rgba(200, 0, 0, 0.1)\\" stroke=\\"currentColor\\" stroke-width=\\"1\\" />\\r\\n                <rect x=\\"75\\" y=\\"315\\" width='175px' height=\\"70px\\" fill=\\"rgba(0, 0, 200, 0.1)\\" stroke=\\"currentColor\\" stroke-width=\\"1\\" />\\r\\n                <rect x=\\"255\\" y=\\"315\\" width='170px' height=\\"70px\\" fill=\\"rgba(0, 0, 200, 0.1)\\" stroke=\\"currentColor\\" stroke-width=\\"1\\" />\\r\\n                <text x=\\"220\\" y=\\"20\\" fill=\\"currentColor\\">header</text>\\r\\n                <text x=\\"10\\" y=\\"200\\" fill=\\"currentColor\\">aside</text>\\r\\n                <text x=\\"220\\" y=\\"75\\" fill=\\"currentColor\\">main</text>\\r\\n                <text x=\\"220\\" y=\\"110\\" fill=\\"currentColor\\">article</text>\\r\\n                <text x=\\"450\\" y=\\"200\\" fill=\\"currentColor\\">aside</text>\\r\\n                <text x=\\"220\\" y=\\"450\\" fill=\\"currentColor\\">footer</text>\\r\\n                <text x=\\"220\\" y=\\"170\\" fill=\\"currentColor\\">section</text>\\r\\n                <text x=\\"220\\" y=\\"255\\" fill=\\"currentColor\\">section</text>\\r\\n                <text x=\\"150\\" y=\\"355\\" fill=\\"currentColor\\">div</text>\\r\\n                <text x=\\"330\\" y=\\"355\\" fill=\\"currentColor\\">div</text>\\r\\n            </svg>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <h4>Exercise</h4>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                On paper draw layout of the homepage of your university. Mark the corresponding container elements like <code>header, nav, aside, footer</code> etc.\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                Draw a fancy design of your resume page, i.e. how you want it to look like. Use the necessary container elements. Later we'll use CSS to get your fancy design.\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAsOI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,eAAC,CAAE,gBAAG,CACF,OAAO,CAAE,GACb,CACQ,gBAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,gBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,oBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb,CACA,eAAE,CACE,eAAe,CAAE,IAAI,CACrB,MAAM,CAAE,OACZ,CACA,uBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb,CACQ,IAAM,CACV,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3C"}`
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
  set_store_value(currentPath, $currentPath = "Organization Elements", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let htmlContentHeader = `<!DOCTYPE html> 
<!-- File name and document purpose --> 
<html lang = "en">   
    <head>     
        <title> A title for the document </title>
        <meta charset = "utf-8" />     
        <!--include external resources here like adsense, javascript, styles-->
    </head>   
    <body>
        <header>
            <!---contains navigation, headings, table of contents etc.--->
        </header>   
        <main>
        </main>
    </body> 
</html>`;
  let htmlContentNav = `<!DOCTYPE html> 
<!-- File name and document purpose --> 
<html lang = "en">   
    <head>     
        <title> A title for the document </title>
        <meta charset = "utf-8" />     
        <!--include external resources here like adsense, javascript, styles-->
    </head>   
    <body>   
       <header>
            <nav>
                <a href="">Home</a>
                <a href="">Store</a>
                <a href="">Career</a>
                <a href="">Contact</a>
            </nav>
        </header
    </body> 
</html>`;
  let htmlContentAside = `<!DOCTYPE html> 
<!-- File name and document purpose --> 
<html lang = "en">   
    <head>     
        <title> A title for the document </title>
        <meta charset = "utf-8" />     
        <!--include external resources here like adsense, javascript, styles-->
    </head>   
    <body>   
        <header>
            <nav>
                <a href="">Home</a>
                <a href="">Store</a>
                <a href="">Career</a>
                <a href="">Contact</a>
            </nav>
        </header>
        <aside>
            <nav>
                <a href="">About</a>
                <a href="">Courses</a>
                <a href="">Publications</a>
                <a href="">Log in</a>
            </nav>
        </aside>
        <p>Notice that the above aside element is not floating to the left or right on its own</p>
    </body> 
</html>
`;
  let htmlContentArticle = `<!DOCTYPE html>
<html lang = "en" >
    <head> 
        <title> Organization Elements </title>
        <meta charset = "utf-8" />
    </head>
    <body>
        <header>
            <nav>
                <a href="">Home</a>
                <a href="">Store</a>
                <a href="">Career</a>
                <a href="">Contact</a>
            </nav>
        </header>
        <aside>
            <nav>
                <a href="">About</a>
                <a href="">Courses</a>
                <a href="">Publications</a>
                <a href="">Log in</a>
            </nav>
        </aside>
        <article>
            <h1>How to layout your page?</h1>
            <p>In this article, we are going to learn how to layout an HTML page.</p>
        </article>
    </body>
</html>`;
  let htmlContentSection = `<!DOCTYPE html>
<html lang = "en" >
    <head> 
        <title> Organization Elements </title>
        <meta charset = "utf-8" />
    </head>
    <body>
        <header>
            <nav>
                <a href="">Home</a>
                <a href="">Store</a>
                <a href="">Career</a>
                <a href="">Contact</a>
            </nav>
        </header>
        <aside>
            <nav>
                <a href="">About</a>
                <a href="">Courses</a>
                <a href="">Publications</a>
                <a href="">Log in</a>
            </nav>
        </aside>
        <article>
            <h1>How to layout your page?</h1>
            <p>In this article, we are going to learn how to layout an HTML page.</p>
            <section>
                <h2>Draw it on paper</h2>
                <p>The first step is to draw out how the page should look.</p>
            </section>
            <section>
                <h2>Semantic names to each part</h2>
                <p>Decide navigation, side bars, footer and main content area.</p>
            </section>
            <section>
                <h2>Container elements</h2>
                <p>Write respective container elements for each part.</p>
            </section>
            <section>
                <h2>Use CSS</h2>
                <p>Use flex or grid to create the layout such that each container is placed where it should be.</p>
            </section>
        </article>
    </body>
</html>`;
  let htmlContentFooter = `<!DOCTYPE html>
<html lang = "en" >
    <head> 
        <title> Organization Elements </title>
        <meta charset = "utf-8" />
    </head>
    <body>
        <header>
            <nav>
                <a href="">Home</a>
                <a href="">Store</a>
                <a href="">Career</a>
                <a href="">Contact</a>
            </nav>
        </header>
        <aside>
            <nav>
                <a href="">About</a>
                <a href="">Courses</a>
                <a href="">Publications</a>
                <a href="">Log in</a>
            </nav>
        </aside>
        <article>
            <h1>How to layout your page?</h1>
            <p>In this article, we are going to learn how to layout an HTML page.</p>
            <section>
                <h2>Draw it on paper</h2>
                <p>The first step is to draw out how the page should look.</p>
            </section>
            <section>
                <h2>Semantic names to each part</h2>
                <p>Decide navigation, side bars, footer and main content area.</p>
            </section>
            <section>
                <h2>Container elements</h2>
                <p>Write respective container elements for each part.</p>
            </section>
            <section>
                <h2>Use CSS</h2>
                <p>Use flex or grid to create the layout such that each container is placed where it should be.</p>
            </section>
        </article>
        <footer>
            <p>The website is hosted on the Earth.</p>
            <p>&copy; All rights reserved.</p>
            <p>See legal rights</p>
        </footer>
    </body>
</html>`;
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1iqwtiz_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/organization"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1iqwtiz_END -->`, ""} <article class="svelte-1la69s">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1la69s" data-svelte-h="svelte-3dkb3u">Organization Elements</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1la69s" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-23f8b2"><li class="svelte-1la69s"><a href="#header" class="svelte-1la69s">The <code>header</code> Element</a></li> <li class="svelte-1la69s"><a href="#nav" class="svelte-1la69s">The <code>nav</code> Element</a></li> <li class="svelte-1la69s"><a href="#aside" class="svelte-1la69s">The <code>aside</code> Element</a></li> <li class="svelte-1la69s"><a href="#article" class="svelte-1la69s">The <code>article</code> Element</a></li> <li class="svelte-1la69s"><a href="#section" class="svelte-1la69s">The <code>section</code> Element</a></li> <li class="svelte-1la69s"><a href="#footer" class="svelte-1la69s">The <code>footer</code> Element</a></li> <li class="svelte-1la69s"><a href="#div" class="svelte-1la69s">The <code>div</code> Element</a></li> <li class="svelte-1la69s"><a href="#span" class="svelte-1la69s">The <code>span</code> Element</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-1la69s" data-svelte-h="svelte-19fqk59">There are many elements in HTML that are used to create a layout and organize various parts of a page depending on their <em>natural</em> place. For example, information that should be at the end of a page is placed inside <code>footer</code> element. Information in the sidebar is placed inside an <code>aside</code> element. It is important to note that HTML will <strong class="svelte-1la69s">not</strong> put a <code>footer</code> at the end of the page or an <code>aside</code> to the side of the page. These organization elements are only there to provide a semantic meaning to the content.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="header" class="svelte-1la69s" data-svelte-h="svelte-zreij8">The <code>header</code> Element</h6> <p class="svelte-1la69s" data-svelte-h="svelte-1ibf0b0"><code>header</code> element acts as a container for content that goes at the top of the page, usually navigation, heading, table of contents etc.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentHeader,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="nav" class="svelte-1la69s" data-svelte-h="svelte-1dj2wqa">The <code>nav</code> Element</h6> <p class="svelte-1la69s" data-svelte-h="svelte-fegjlt">The <code>nav</code> elements acts as a container for links to other pages in the website. Usually it is placed at the top of the page, in sidebar or in the footer.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentNav,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="aside" class="svelte-1la69s" data-svelte-h="svelte-1ygizws">The <code>aside</code> Element</h6> <p class="svelte-1la69s" data-svelte-h="svelte-1nloc05">Usually side bars are placed inside an <code>aside</code> element. The side bars likely contain a <code>nav</code> element. CSS is used to place the <code>aside</code> element to lay on the left or right side of the page.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentAside,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="article" class="svelte-1la69s" data-svelte-h="svelte-1o9xkvs">The <code>article</code> Element</h6> <p class="svelte-1la69s" data-svelte-h="svelte-8j1prm"><code>article</code> element as the name suggests becomes the container for main content of the page. It can start with a heading <code>h1</code> etc. and may contain many paragraphs.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentArticle,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="section" class="svelte-1la69s" data-svelte-h="svelte-1f5z9oe">The <code>section</code> Element</h6> <p class="svelte-1la69s" data-svelte-h="svelte-tsx9iv">Usually <code>section</code> elements divide an <code>article</code> into many parts where each <code>section</code> can have its own heading <code>h2</code> etc.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentSection,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="footer" class="svelte-1la69s" data-svelte-h="svelte-134a0tk">The <code>footer</code> Element</h6> <p class="svelte-1la69s" data-svelte-h="svelte-1fo5lfi">Usually <code>footer</code> element contains copyright information, office address, legal information etc and is placed at the end of the page.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentFooter,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="div" class="svelte-1la69s" data-svelte-h="svelte-etchai">The <code>div</code> Element</h6> <p class="svelte-1la69s" data-svelte-h="svelte-1l6p636">Sometimes we need a container that is there just for design. It does not carry any semantic meaning. For example, displaying two paragraphs side-by-side. We use <code>div</code> element as a container in such cases.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="span" class="svelte-1la69s" data-svelte-h="svelte-q85sks">The <code>span</code> Element</h6> <p class="svelte-1la69s" data-svelte-h="svelte-hi5waq"><code>span</code> element is like inline version of <code>div</code>. It is usually used to modify text or insert icons or spacing characters without changing the flow of the content.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="layout" class="svelte-1la69s" data-svelte-h="svelte-15docy2">Typical Layout</h6> <svg width="100%" viewBox="0 0 500 500"><rect x="5" y="5" width="490px" height="50px" fill="rgba(0, 100, 200, 0.1)" stroke="currentColor" stroke-width="1"></rect><rect x="5" y="55" width="50px" height="350px" fill="rgba(0, 0, 0, 0.1)" stroke="currentColor" stroke-width="1"></rect><rect x="445" y="55" width="50px" height="350px" fill="rgba(0, 0, 0, 0.1)" stroke="currentColor" stroke-width="1"></rect><rect x="5" y="405" width="490px" height="50px" fill="rgba(0, 100, 200, 0.1)" stroke="currentColor" stroke-width="1"></rect><rect x="60" y="60" width="380px" height="340px" fill="rgba(100, 0, 100, 0.1)" stroke="currentColor" stroke-width="1"></rect><rect x="65" y="90" width="370px" height="305px" fill="rgba(0, 200, 0, 0.1)" stroke="currentColor" stroke-width="1"></rect><rect x="70" y="140" width="360px" height="80px" fill="rgba(200, 0, 0, 0.1)" stroke="currentColor" stroke-width="1"></rect><rect x="70" y="225" width="360px" height="80px" fill="rgba(200, 0, 0, 0.1)" stroke="currentColor" stroke-width="1"></rect><rect x="70" y="310" width="360px" height="80px" fill="rgba(200, 0, 0, 0.1)" stroke="currentColor" stroke-width="1"></rect><rect x="75" y="315" width="175px" height="70px" fill="rgba(0, 0, 200, 0.1)" stroke="currentColor" stroke-width="1"></rect><rect x="255" y="315" width="170px" height="70px" fill="rgba(0, 0, 200, 0.1)" stroke="currentColor" stroke-width="1"></rect><text x="220" y="20" fill="currentColor">header</text><text x="10" y="200" fill="currentColor">aside</text><text x="220" y="75" fill="currentColor">main</text><text x="220" y="110" fill="currentColor">article</text><text x="450" y="200" fill="currentColor">aside</text><text x="220" y="450" fill="currentColor">footer</text><text x="220" y="170" fill="currentColor">section</text><text x="220" y="255" fill="currentColor">section</text><text x="150" y="355" fill="currentColor">div</text><text x="330" y="355" fill="currentColor">div</text></svg>`;
        }
      })}`;
    }
  })} <h4 class="svelte-1la69s" data-svelte-h="svelte-1yto96c">Exercise</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1la69s" data-svelte-h="svelte-1clzote">On paper draw layout of the homepage of your university. Mark the corresponding container elements like <code>header, nav, aside, footer</code> etc.</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1la69s" data-svelte-h="svelte-1534dyf">Draw a fancy design of your resume page, i.e. how you want it to look like. Use the necessary container elements. Later we&#39;ll use CSS to get your fancy design.</div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
