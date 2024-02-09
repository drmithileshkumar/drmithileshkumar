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
    $currentPath = "Images";
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
        <figure>
            <img 
                src="/courses/internet/wwwhtml/fundamentals/intro/dns.png" 
                alt="DNS lookup" 
                width="300px" 
                height="auto" 
            />
            <figcaption>DNS Lookup</figcaption>
        </figure>
        <figure>
            <img 
                src="/courses/internet/wwwhtml/fundamentals/intro/dns.webp" 
                alt="DNS lookup" 
                width="300px" 
                height="auto" 
            />
            <figcaption>The <code>.webp</code> version of the above <code>.png</code> file.</figcaption>
        </figure>
        <p></p>
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/images" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
    {#if $darkMode}
        {@html githubDark}
    {:else}
        {@html github}
    {/if}
</svelte:head>
<article>
    <h4>
        Images
    </h4>
    <Card>
        <Content>
            <h6>Topics</h6>
            <ol>
                <li>Image Formats</li>
                <li>The Image Element</li>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <p>
                Apart from displaying text, browser can display image files of various types.
            </p>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContent} cssContent={""} jsContent={""} />
    <Card>
        <Content>
            <h6>Image Formats</h6>
            <p>
                The various image formats are 
            </p>
            <DataTable style="width:100%">
                <Head>
                    <Row>
                        <Cell>Extension</Cell>
                        <Cell>Name</Cell>
                        <Cell>Remarks</Cell>
                    </Row>
                </Head>
                <Body>
                    <Row>
                        <Cell><code>.gif</code></Cell>
                        <Cell style="white-space:normal;">Graphic Interchange Format</Cell>
                        <Cell style="white-space:normal;">Uses 8-bit color representations fo pixels, supports transparency</Cell>
                    </Row>
                    <Row>
                        <Cell><code>.jpg</code>, <code>.jpeg</code></Cell>
                        <Cell style="white-space:normal;">Joint Photographic Experts Group</Cell>
                        <Cell style="white-space:normal;">Uses 24-bit color representations fo pixels, does not support transparent</Cell>
                    </Row>
                    <Row>
                        <Cell><code>.png</code></Cell>
                        <Cell style="white-space:normal;">Portable Network Graphics</Cell>
                        <Cell style="white-space:normal;">Uses 24-bit color representations fo pixels, supports transparent, larger in size</Cell>
                    </Row>
                    <Row>
                        <Cell><code>.webp</code></Cell>
                        <Cell style="white-space:normal;">WebP</Cell>
                        <Cell style="white-space:normal;">Uses 24-bit color representations fo pixels, supports lossy and lossless compression, transparency, animation, small in size</Cell>
                    </Row>
                    <Row>
                        <Cell><code>.svg</code></Cell>
                        <Cell style="white-space:normal;">Scalable Vector Graphics</Cell>
                        <Cell style="white-space:normal;">Uses code (XML syntax), high quality, supports transparency, animation, small in size</Cell>
                    </Row>
                </Body>
            </DataTable>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>The Image Element</h6>
            <p>
                The <code>img</code> element is an inline element that specifies an image that is to appear in a document. This element has no closing tag.
            </p>
            <p>
                The image element includes following essential attributes: 
            </p>
            <ol>
                <li><code>src</code>: specifies the file containing the image</li>
                <li><code>alt</code>: specifies text to be displayed when it is not possible to display the image</li>
                <li><code>width</code>: width of the image</li>
                <li><code>height</code>: height of the image</li>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Length units</h6>
            <DataTable style="width:100%">
                <Head>
                    <Row>
                        <Cell>Unit</Cell>
                        <Cell>Description</Cell>
                    </Row>
                </Head>
                <Body>
                    <Row>
                        <Cell><code>px</code></Cell>
                        <Cell style="white-space:normal;">One pixel. <code>1px = 1 inch / 96</code></Cell>
                    </Row>
                    <Row>
                        <Cell><code>cm</code></Cell>
                        <Cell style="white-space:normal;">One centimeter. <code>1cm = 96px / 2.54</code></Cell>
                    </Row>
                    <Row>
                        <Cell><code>in</code></Cell>
                        <Cell style="white-space:normal;">One inch. <code>1in = 96px = 2.54cm</code></Cell>
                    </Row>
                    <Row>
                        <Cell><code>%</code></Cell>
                        <Cell style="white-space:normal;">One percent. <code>1%</code> is calculated relative to the parent container.</Cell>
                    </Row>
                    <Row>
                        <Cell><code>vh</code></Cell>
                        <Cell style="white-space:normal;">One percent of the height of viewport. <code>1%</code> is calculated relative to the parent container.</Cell>
                    </Row>
                    <Row>
                        <Cell><code>vw</code></Cell>
                        <Cell style="white-space:normal;">One percent of the width of viewport. <code>1%</code> is calculated relative to the parent container.</Cell>
                    </Row>
                </Body>
            </DataTable>
        </Content>
    </Card>
    <h4>Exercise</h4>
    <Card>
        <Content>
            <div class="question">
                <p>Experiment with various types of length units to reside an image.</p>
            </div>
        </Content>
    </Card>
    <h4>Assignment</h4>
    <Card>
        <Content>
            <div class="question">
                <p>Update your resume by including your photo.</p>
            </div>
        </Content>
    </Card>
</article>
