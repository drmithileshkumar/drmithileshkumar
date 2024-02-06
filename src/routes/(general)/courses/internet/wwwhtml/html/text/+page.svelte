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
    $navList = contents;
    $currentPath = "Text Markup";
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
        <!--Displayable content goes here-->
        <p>Internet Technologies course covers HTML, CSS,
            and 
            javascript.
        </p>
        <p>This paragraph contains an unnecessary <br/> break in the line.</p>
        <pre>
            There is 
                more 
                    control
                        in pre
                            tag.
        </pre>
        <h1>h1 heading</h1>
        <h2>h2 heading</h2>
        <h3>h3 heading</h3>
        <h4>h4 heading</h4>
        <h5>h5 heading</h5>
        <h6>h6 heading</h6>
        <p>A quote from Einstein</p>
        <blockquote>
          <p>"God does not play dice."</p>
        </blockquote>
        <p>Fonts styles <i>italics</i> <b>bold</b> <em>emphasis</em> <strong>strong</strong>
            <code>code</code>
        </p>
        <p>The most famous equation E = mc<sup>2</sup></p>
        <p>Horizontal line</p>
        <hr/>
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/text" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
    {#if $darkMode}
        {@html githubDark}
    {:else}
        {@html github}
    {/if}
</svelte:head>
<article>
    <h4>
        Text Markup
    </h4>
    <Card>
        <Content>
            <h6>Topics</h6>
            <ol>
                <li>Paragraphs <code>p</code></li>
                <li>Line Breaks <code>br</code></li>
                <li>White Spaces <code>pre</code></li>
                <li>Headings <code>h1 h2 h3 h4 h5 h6</code></li>
                <li>Block Quotations <code>blockquote</code></li>
                <li>Font Styles and Sizes <code>i b em strong code sub sup</code></li>
                <li>Character Entities</li>
                <li>Horizontal Rules <code>hr</code></li>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <p>
                The fundamental syntactic units of HTML are called tags. In general, tags are used to specify categories of content. For each kind of tag, a browser has default presen- tation specifications for the specified content. The syntax of a tag is the tag`s name surrounded by angle brackets (&lt; and &gt;). Tag names must be written in all lowercase letters. Most tags appear in pairs: an opening tag and a closing tag.
            </p>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContent} cssContent={""} jsContent={""} />
    <Card>
        <Content>
            <h6>Paragraphs <code>p</code></h6>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Line Breaks <code>br</code></h6>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>White Spaces <code>pre</code></h6>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Headings <code>h1 h2 h3 h4 h5 h6</code></h6>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Block Quotations <code>blockquote</code></h6>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Font Styles and Sizes <code>i b em strong code sub sup</code></h6>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Character Entities</h6>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Horizontal Rules <code>hr</code></h6>
        </Content>
    </Card>
</article>
