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

    $navList = contents;
    $currentPath = "Lists";
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
        <p>There are three types of lists</p>
        <ol>
            <li>Unordered List</li>
            <li>Ordered List</li>
            <li>Definition List</li>
        </ol>
        <p>Above is an ordered list. It's unordered version will be</p>
        <ul>
            <li>Unordered List</li>
            <li>Ordered List</li>
            <li>Definition List</li>
        </ul>
        <p>Definition list has title and data for each item.</p>
        <dl>
            <dt>Unordered list</dt>
            <dd>Lists are marked by bullets.</dd>
            <dt>Ordered list</dt>
            <dd>Lists are marked by numbers.</dd>
            <dt>Definition list</dt>
            <dd>List items have title and data.</dd>    
        </dl>
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/lists" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
    {#if $darkMode}
        {@html githubDark}
    {:else}
        {@html github}
    {/if}
</svelte:head>
<article>
    <h4>
        Lists
    </h4>
    <Card>
        <Content>
            <h6>Topics</h6>
            <ol>
                <li><a href="#unorderedList">Unordered List</a></li>
                <li><a href="#orderedList">Ordered List</a></li>
                <li><a href="#definitionList">Definition List</a></li>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <p>
                Lists are used to format content in some order, usually top to bottom with markers placed in front of each item.
            </p>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContent} cssContent={""} jsContent={""} />
    <Card>
        <Content>
            <h6 id="unorderedList">Unordered List</h6>
            <p>
                Unordered list is created using the tag <code>ul</code> (unordered list). Inside, the items are placed inside individual item tags <code>li</code> (list item).
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="orderedList">Ordered List</h6>
            <p>
                Ordered list is created using the tag <code>ol</code> (ordered list). Inside, the items are placed inside individual item tags <code>li</code> (list item).
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="definitionList">Definition List</h6>
            <p>
                Definition list is created using the tag <code>dl</code> (definition list). Inside, the items are placed inside individual item tags <code>dt</code> (definition title) and <code>dd</code> (definition data).
            </p>
        </Content>
    </Card>
    <h4>Exercise</h4>
    <Card>
        <Content>
            <h6>To-do app</h6>
            <div class="question">
                <p>
                    We'll create a To-do web app. We'll start with nested loops. Create a list of groceries. The primary list is of categories. The secondary lists are items in the categories.
                </p>
            </div>
        </Content>
    </Card>
    <h4>Assignment</h4>
    <Card>
        <Content>
            <div class="question">
                Create a section for education in your resume. Use list to show the list of your exams like Class X, Class XII etc.
            </div>
        </Content>
    </Card>
</article>
