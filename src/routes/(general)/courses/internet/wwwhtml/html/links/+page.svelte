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
    import { contents } from "$lib/pages/courses/internet/content";
	import WebPractice from "$lib/pages/courses/internet/WebPractice.svelte";
	import DataTable, {Head, Body, Row, Cell} from "@smui/data-table";
    import Pathlist from "$lib/components/Pathlist.svelte";
    $navList = contents;
    $currentPath = "Hypertext Links";
    $darkMode = false;
    // onMount(() => {
    //     MathJax.typeset();
    // });
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
        color: rgb(240, 85, 0);
    }
    strong {
        color: goldenrod;
        opacity: 1;
    }
    a {
        cursor: pointer;
    }
    .question {
        cursor: pointer;
        padding: 0.3em;
    }
</style>
<svelte:head>
    <title>Internet Technologies</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/links" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
    {#if $darkMode}
        {@html githubDark}
    {:else}
        {@html github}
    {/if}
</svelte:head>
<article>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <h4>
        Hypertext Links
    </h4>
    <Card>
        <Content>
            <h6>Topics</h6>
            <ol>
                <li><a href="#link">Links</a></li>
                <li><a href="#target">Targets within Documents</a></li>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <p>
                Links are used to connect different resources.
            </p>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContent} cssContent={""} jsContent={""} />
    <Card>
        <Content>
            <h6 id="link">Links</h6>
            <p>
                A link points to a different resource via an address, usually URL or id. <code>a</code> tag (anchor) is used for linking documents. <code>a</code> tag has an attribute called <code>href</code> that takes the URL or id of the target. 
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="target">Targets within Documents</h6>
            <p>
                It is possible to automatically scroll to an element in your document using the <code>a</code>. The <code>href</code> attribute of the <code>a</code> tag is assigned the <code>id</code> of the target element in the format <code>#id</code>.
            </p>
            <p>
                If the target element is in another document, then the <code>#id</code> is attached at the end of the URL of the document.
            </p>
            
        </Content>
    </Card>
    <h4>Assignment</h4>
    <Card>
        <Content>
            <div class="question">
                Place a link to your github repository inside your resume. Use github logo.
            </div>
        </Content>
    </Card>
</article>
