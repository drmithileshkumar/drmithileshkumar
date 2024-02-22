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
    $currentPath = "Inside Head";
    $darkMode = false;
    // onMount(() => {
    //     MathJax.typeset();
    // });
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
</html>`
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
</html>`
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

        <script src="" type="text/javascript" defer></\script>
        <script>
            const sayHello = () => {
                console.log('Hello');
            }
        </\script>
    </head>   
    <body>   
        <main>
            <p>There is <code>script</code> tag in <code>head</code> as well.</p>
        </main>
    </body> 
</html>
`
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

        <script src="" type="text/javascript" defer></\script>
        <script>
            const sayHello = () => {
                console.log('Hello');
            }
        </\script>

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
        font-size: 1.7em;
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/head" />
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
        Inside Head
    </h4>
    <Card style="background-color: rgba(0, 100, 100, 0.1">
        <Content>
            <h6>Topics</h6>
            <ol>
                <li><a href="#meta">The <code>meta</code> Element</a></li>
                <li><a href="#link">The <code>link</code> Element</a></li>
                <li><a href="#script">The <code>script</code> Element</a></li>
                <li><a href="#style">The <code>style</code> Element</a></li>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <p>
                The <code>head</code> element is usually the first element inside the <code>html</code> element. It contains information for search engines, links to external resources, styles and javascript. 
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="meta">The <code>meta</code> Element</h6>
            <p>
                The <code>meta</code> elements has multiple roles. It sets the character set of the page, description, keywords, author information and many other settings regarding webapp. Look at the example below.
            </p>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContentMeta} cssContent={""} jsContent={""} />
    <Card>
        <Content>
            <h6 id="link">The <code>link</code> Element</h6>
            <p>
                The <code>link</code> element is used to load external resources like setting icon in the title, manifest file, stylesheets etc.
            </p>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContentLink} cssContent={""} jsContent={""} />
    <Card>
        <Content>
            <h6 id="script">The <code>script</code> Element</h6>
            <p>
                The <code>script</code> element can be used to either load external javascript files or contain local javascript code. We'll learn about it later.
            </p>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContentScript} cssContent={""} jsContent={""} />
    <Card>
        <Content>
            <h6 id="style">The <code>style</code> Element</h6>
            <p>
                We have seen that external CSS can be loaded using <code>link</code> element. Local style code can be included inside the <code>style</code> element.
            </p>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContentStyle} cssContent={""} jsContent={""} />
    
    <h4>Exercise</h4>
    <Card>
        <Content>
            <div class="question">
                Set title and icon for your resume and college page with appropriate meta descriptions and keywords.
            </div>
        </Content>
    </Card>
</article>
