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
    $currentPath = "The audio Element";
    $darkMode = false;
    // onMount(() => {
    //     MathJax.typeset();
    // });
    let htmlContentAudio = `<!DOCTYPE html> 
<!-- File name and document purpose --> 
<html lang = "en">   
    <head>     
        <title> A title for the document </title>
        <meta charset = "utf-8" />     
        <!--include external resources here like adsense, javascript, styles-->
    </head>   
    <body>   
        <p>Let us listen to the audio.</p>
        <audio controls>
            <source src="/courses/internet/wwwhtml/html/audio/tada.wav" />
            <source src="/courses/internet/wwwhtml/html/audio/tada.mp3" />
            <source src="/courses/internet/wwwhtml/html/audio/tada.ogg" />
        </audio>
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/audio" />
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
        The <code>audio</code> Element
    </h4>
    <!-- <Card style="background-color: rgba(0, 100, 100, 0.1">
        <Content>
            <h6>Topics</h6>
            <ol>
                <li><a href="#basicForm">The <code>form</code> Element</a></li>
                <li><a href="#inputForm">The <code>input</code> Element</a></li>
                <li><a href="#selectForm">The <code>select</code> Element</a></li>
                <li><a href="#textareaForm">The <code>textarea</code> Element</a></li>
            </ol>
            <p>For a better understanding of form submission, read <a href="/courses/internet/wwwhtml/fundamentals/http">HTTP protocol</a>.</p>
        </Content>
    </Card> -->
    <Card>
        <Content>
            <p>
                Audio file can be embedded into an HTML file using the <code>audio</code> element. The controls of the audio player are displayed using the attribute <code>controls</code>. Link to audio files are include into the <code>source</code> element inside the <code>audio</code> element. The <code>source</code> element has attribute <code>src</code> attribute that takes the path to the audio file just like <code>img</code> element takes path to image file.
            </p>
            <p>Common audio file formats:</p>
            <DataTable style="width:100%">
                <Head>
                    <Row>
                        <Cell>Name</Cell>
                        <Cell>Extension</Cell>
                        <Cell>Description</Cell>
                    </Row>
                </Head>
                <Body>
                    <Row>
                        <Cell>MP3</Cell>
                        <Cell><code>.mp3</code></Cell>
                        <Cell style="white-space:normal;">lossy compression, small size, based on auditory range of humans</Cell>
                    </Row>
                    <Row>
                        <Cell style="white-space:normal;">Waveform Audio File Format</Cell>
                        <Cell><code>.wav</code></Cell>
                        <Cell style="white-space:normal;">Uncompressed, large size, files can not be larger than 4 GiB (32-bit file size header)</Cell>
                    </Row>
                    <Row>
                        <Cell>OGG</Cell>
                        <Cell><code>.ogg</code></Cell>
                        <Cell style="white-space:normal;">Both lossy and lossless compressions exist</Cell>
                    </Row>
                </Body>
            </DataTable>
            <p>
                It is common practice to provide various file formats for each audio file. The browsers plays the first file type it can.
            </p>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContentAudio} cssContent={""} jsContent={""} />
</article>
