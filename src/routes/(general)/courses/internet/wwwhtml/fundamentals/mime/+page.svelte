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
    $navList = contents;
    $currentPath = "Multipurpose Internet Mail Extensions";
    $darkMode = false;
    // onMount(() => {
    //     MathJax.typeset();
    // });
    
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/fundamentals/mime" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
    {#if $darkMode}
        {@html githubDark}
    {:else}
        {@html github}
    {/if}
</svelte:head>
<article>
    <h4>
        Multipurpose Internet Mail Extensions
    </h4>
    <Card>
        <Content>
            <p>A browser needs some way to determine the format of a document it receives from a Web server. Without knowing the form of the document, the browser would not be able to render it, because different document formats require dif- ferent rendering software. The forms of these documents are specified with Multipurpose Internet Mail Extensions (MIMEs).
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Type Specifications</h6>
            <p>
                The various types of mimes are:
            </p>
            <ul>
                <li><strong>text/plain</strong>: Plain text files</li>
                <li><strong>text/html</strong>: HTML documents</li>
                <li><strong>text/css</strong>: Cascading Style Sheets</li>
                <li><strong>text/javascript</strong>: JavaScript files</li>
                <li><strong>image/jpeg</strong>: JPEG images</li>
                <li><strong>image/png</strong>: PNG images</li>
                <li><strong>image/gif</strong>: GIF images</li>
                <li><strong>image/svg+xml</strong>: SVG (Scalable Vector Graphics) documents</li>
                <li><strong>application/json</strong>: JSON data format</li>
                <li><strong>application/xml</strong>: XML data format</li>
                <li><strong>application/x-www-form-urlencoded</strong>: Form data encoded as a query string, typically used in POST requests</li>
                <li><strong>application/pdf</strong>: PDF documents</li>
                <li><strong>application/msword</strong>: Microsoft Word documents</li>
                <li><strong>application/vnd.ms-excel</strong>: Microsoft Excel documents</li>
                <li><strong>application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</strong>: Microsoft Excel OpenXML spreadsheet</li>
                <li><strong>application/vnd.openxmlformats-officedocument.wordprocessingml.document</strong>: Microsoft Word OpenXML document</li>
                <li><strong>application/zip</strong>: ZIP archives</li>
                <li><strong>application/x-7z-compressed</strong>: 7z archives</li>
                <li><strong>application/octet-stream</strong>: Arbitrary binary data</li>
              </ul>
              
        </Content>
    </Card>

</article>
