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
                <li><a href="#p1">Paragraphs <code>p</code></a></li>
                <li><a href="#p2">Line Breaks <code>br</code></a></li>
                <li><a href="#p3">White Spaces <code>pre</code></a></li>
                <li><a href="#p4">Headings <code>h1 h2 h3 h4 h5 h6</code></a></li>
                <li><a href="#p5">Block Quotations <code>blockquote</code></a></li>
                <li><a href="#p6">Font Styles and Sizes <code>i b em strong code sub sup</code></a></li>
                <li><a href="#p7">Character Entities</a></li>
                <li><a href="#p8">Horizontal Rules <code>hr</code></a></li>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <p>
                The fundamental syntactic units of HTML are called tags. In general, tags are used to specify categories of content. For each kind of tag, a browser has default presentation specifications for the specified content. The syntax of a tag is the tag`s name surrounded by angle brackets (&lt; and &gt;). Tag names must be written in all lowercase letters. Most tags appear in pairs: an opening tag and a closing tag.
            </p>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContent} cssContent={""} jsContent={""} />
    <Card>
        <Content>
            <h6 id="p1">Paragraphs <code>p</code></h6>
            <p>
                The <code>p</code> tag is used to create a paragraph. It is a <em>block</em>-level tag, i.e. it starts to display its content from a new line and the next content will start from a new line. The content in the <code>p</code> tag ignores any formatting applied by white spaces.
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="p2">Line Breaks <code>br</code></h6>
            <p>
                To create a new line at any place in the document, <code>br</code> tag is used. It does not have a closing tag.
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="p3">White Spaces <code>pre</code></h6>
            <p>
                To display whitespace formatted text, <code>pre</code> tag is used. 
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="p4">Headings <code>h1 h2 h3 h4 h5 h6</code></h6>
            <p>
                The headings in an article are marked with one of <code>h1 h2 h3 h4 h5 h6</code> tags where <code>h1</code> is the largest and <code>h6</code> is the smallest. These tags are <em>block</em>-level as well.
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="p5">Block Quotations <code>blockquote</code></h6>
            <p>
                Any quotation is a block of text that is slightly differently formatted than the usual paragraphs. The quotation is placed unside <code>blockquote</code> tag. Inside the block, many paragraphs can be included.
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="p6">Font Styles and Sizes <code>i b em strong code sub sup</code></h6>
            <p>
                Fonts can be styled using <code>i</code> tag for <i>italics</i>, <code>b</code> tag for <b>bold</b>, <code>em</code> tag for emphasized content. <code>strong</code> tag is used to make a text <strong style="color:currentColor">bold</strong> as well. <code>sub</code> tag is used to mark a text<sub>subscript</sub> to the preceeding text. <code>sup</code> tag is used to mark a text<sup>superscript</sup> to the preceeding text. 
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="p7">Character Entities</h6>
            <DataTable style="width:100%;">
                <Head>
                    <Row>
                        <Cell>Character</Cell>
                        <Cell>Entity</Cell>
                        <Cell>Meaning</Cell>
                    </Row>
                </Head>
                <Body>
                    <Row>
                        <Cell>&</Cell>
                        <Cell><code>amp;</code></Cell>
                        <Cell>Ampersand</Cell>
                    </Row>
                    <Row>
                        <Cell>&lt;</Cell>
                        <Cell><code>{'&lt;'}</code></Cell>
                        <Cell>Is less than</Cell>
                    </Row>
                    <Row>
                        <Cell>&gt;</Cell>
                        <Cell><code>{'&gt;'}</code></Cell>
                        <Cell>Is greater than</Cell>
                    </Row>
                    <Row>
                        <Cell>&#8377;</Cell>
                        <Cell><code>{'&#8377;'}</code></Cell>
                        <Cell>Indian Rupee</Cell>
                    </Row>
                    <Row>
                        <Cell>&copy;</Cell>
                        <Cell><code>{'&copy;'}</code></Cell>
                        <Cell>Copyright</Cell>
                    </Row>
                </Body>
            </DataTable>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="p8">Horizontal Rules <code>hr</code></h6>
            <p><code>hr</code> draws a line in a new line. Just like <code>br</code> tag, it does not have a closing tag.</p>
        </Content>
    </Card>
</article>
