<script lang="ts">
    // @ts-nocheck
    import Highlight, { LineNumbers } from "svelte-highlight";
    import javascript from "svelte-highlight/languages/javascript";
    import xml from "svelte-highlight/languages/xml";
    import github from "svelte-highlight/styles/github";
    import githubDark from "svelte-highlight/styles/github-dark";
    import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

    import { typeset } from "$lib/shared/typeset";
    import Link from '$lib/ui/Link.svelte';
    import {page} from '$app/stores';
    import {onMount} from 'svelte';
    import Card, { Content, Actions } from "@smui/card";
    import Button from "@smui/button";
    import Ripple from "@smui/ripple";
    import NavList from '$lib/components/NavList.svelte'
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores";
    import { contents, contentNav } from "$lib/pages/courses/internet/content";
	import WebPractice from "$lib/pages/courses/internet/WebPractice.svelte";
	import DataTable, {Head, Body, Row, Cell} from "@smui/data-table";
	import Pathlist from "$lib/components/Pathlist.svelte";
    import CourseNavigation from "$lib/components/CourseNavigation.svelte";
    // console.log($page.url)
    let pathComponents = $page.url.pathname.split('/');
    let pathUrls = pathComponents.map((u, index) => {
        let path = $page.url.origin;
        for(let i = 0; i <= index; i++) {
            path += pathComponents[i] + '/';
        }
        return path;
    })
    $navList = contents;
    $currentPath = "Organization Elements";
    $darkMode = false;
    // onMount(() => {
    //     MathJax.typeset();
    // });
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
</html>`
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
</html>`
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
`
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
</html>`
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
</html>`
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
</html>`
</script>
<style>
    article {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
    p, li {
        opacity: 0.8;
    }
    h2, h3, h4, h5 {
        margin: 0.5em 0;
    }
    h5 {
        font-size: 1.1em;
    }
    h6 {
        font-size: 1em;
        margin: 0.5em 0;
        color: rgb(74, 155, 139);
    }
    strong {
        color: goldenrod;
        opacity: 1;
    }
    a {
        text-decoration: none;
        cursor: pointer;
    }
    .question {
        cursor: pointer;
        padding: 0.3em;
    }
    :global(code) {
        background-color: rgba(0, 100, 100, 0.1);
    }
</style>
<svelte:head>
    <title>Internet Technologies</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/organization" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
    {#if $darkMode}
        {@html githubDark}
    {:else}
        {@html github}
    {/if}
</svelte:head>
<article>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        Organization Elements
    </h4>
    <Card style="background-color: rgba(0, 100, 100, 0.1">
        <Content>
            <h6>Topics</h6>
            <ol>
                <li><a href="#header">The <code>header</code> Element</a></li>
                <li><a href="#nav">The <code>nav</code> Element</a></li>
                <li><a href="#aside">The <code>aside</code> Element</a></li>
                <li><a href="#article">The <code>article</code> Element</a></li>
                <li><a href="#section">The <code>section</code> Element</a></li>
                <li><a href="#footer">The <code>footer</code> Element</a></li>
                <li><a href="#div">The <code>div</code> Element</a></li>
                <li><a href="#span">The <code>span</code> Element</a></li>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <p>
                There are many elements in HTML that are used to create a layout and organize various parts of a page depending on their <em>natural</em> place. For example, information that should be at the end of a page is placed inside <code>footer</code> element. Information in the sidebar is placed inside an <code>aside</code> element. It is important to note that HTML will <strong>not </strong> put a <code>footer</code> at the end of the page or an <code>aside</code> to the side of the page. These organization elements are only there to provide a semantic meaning to the content.
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="header">The <code>header</code> Element</h6>
            <p>
                <code>header</code> element acts as a container for content that goes at the top of the page, usually navigation, heading, table of contents etc.
            </p>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContentHeader} cssContent={""} jsContent={""} />
    <Card>
        <Content>
            <h6 id="nav">The <code>nav</code> Element</h6>
            <p>
                The <code>nav</code> elements acts as a container for links to other pages in the website. Usually it is placed at the top of the page, in sidebar or in the footer.
            </p>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContentNav} cssContent={""} jsContent={""} />
    <Card>
        <Content>
            <h6 id="aside">The <code>aside</code> Element</h6>
            <p>
                Usually side bars are placed inside an <code>aside</code> element. The side bars likely contain a <code>nav</code> element. CSS is used to place the <code>aside</code> element to lay on the left or right side of the page.
            </p>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContentAside} cssContent={""} jsContent={""} />
    <Card>
        <Content>
            <h6 id="article">The <code>article</code> Element</h6>
            <p>
                <code>article</code> element as the name suggests becomes the container for main content of the page. It can start with a heading <code>h1</code> etc. and may contain many paragraphs.
            </p>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContentArticle} cssContent={""} jsContent={""} />
    <Card>
        <Content>
            <h6 id="section">The <code>section</code> Element</h6>
            <p>
                Usually <code>section</code> elements divide an <code>article</code> into many parts where each <code>section</code> can have its own heading <code>h2</code> etc.
            </p>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContentSection} cssContent={""} jsContent={""} />
    <Card>
        <Content>
            <h6 id="footer">The <code>footer</code> Element</h6>
            <p>
                Usually <code>footer</code> element contains copyright information, office address, legal information etc and is placed at the end of the page.
            </p>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContentFooter} cssContent={""} jsContent={""} />
    <Card>
        <Content>
            <h6 id="div">The <code>div</code> Element</h6>
            <p>
                Sometimes we need a container that is there just for design. It does not carry any semantic meaning. For example, displaying two paragraphs side-by-side. We use <code>div</code> element as a container in such cases.
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="span">The <code>span</code> Element</h6>
            <p>
                <code>span</code> element is like inline version of <code>div</code>. It is usually used to modify text or insert icons or spacing characters without changing the flow of the content.
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="layout">Typical Layout</h6>
            <svg width="100%" viewBox="0 0 500 500">
                <rect x="5" y="5" width='490px' height="50px" fill="rgba(0, 100, 200, 0.1)" stroke="currentColor" stroke-width="1" />
                <rect x="5" y="55" width='50px' height="350px" fill="rgba(0, 0, 0, 0.1)" stroke="currentColor" stroke-width="1" />
                <rect x="445" y="55" width='50px' height="350px" fill="rgba(0, 0, 0, 0.1)" stroke="currentColor" stroke-width="1" />
                <rect x="5" y="405" width='490px' height="50px" fill="rgba(0, 100, 200, 0.1)" stroke="currentColor" stroke-width="1" />
                <rect x="60" y="60" width='380px' height="340px" fill="rgba(100, 0, 100, 0.1)" stroke="currentColor" stroke-width="1" />
                <rect x="65" y="90" width='370px' height="305px" fill="rgba(0, 200, 0, 0.1)" stroke="currentColor" stroke-width="1" />
                <rect x="70" y="140" width='360px' height="80px" fill="rgba(200, 0, 0, 0.1)" stroke="currentColor" stroke-width="1" />
                <rect x="70" y="225" width='360px' height="80px" fill="rgba(200, 0, 0, 0.1)" stroke="currentColor" stroke-width="1" />
                <rect x="70" y="310" width='360px' height="80px" fill="rgba(200, 0, 0, 0.1)" stroke="currentColor" stroke-width="1" />
                <rect x="75" y="315" width='175px' height="70px" fill="rgba(0, 0, 200, 0.1)" stroke="currentColor" stroke-width="1" />
                <rect x="255" y="315" width='170px' height="70px" fill="rgba(0, 0, 200, 0.1)" stroke="currentColor" stroke-width="1" />
                <text x="220" y="20" fill="currentColor">header</text>
                <text x="10" y="200" fill="currentColor">aside</text>
                <text x="220" y="75" fill="currentColor">main</text>
                <text x="220" y="110" fill="currentColor">article</text>
                <text x="450" y="200" fill="currentColor">aside</text>
                <text x="220" y="450" fill="currentColor">footer</text>
                <text x="220" y="170" fill="currentColor">section</text>
                <text x="220" y="255" fill="currentColor">section</text>
                <text x="150" y="355" fill="currentColor">div</text>
                <text x="330" y="355" fill="currentColor">div</text>
            </svg>
        </Content>
    </Card>
    <h4>Exercise</h4>
    <Card>
        <Content>
            <div class="question">
                On paper draw layout of the homepage of your university. Mark the corresponding container elements like <code>header, nav, aside, footer</code> etc.
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                Draw a fancy design of your resume page, i.e. how you want it to look like. Use the necessary container elements. Later we'll use CSS to get your fancy design.
            </div>
        </Content>
    </Card>
</article>
