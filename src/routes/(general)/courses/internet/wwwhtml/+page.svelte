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
    import Pathlist from "$lib/components/Pathlist.svelte";
    import CourseNavigation from "$lib/components/CourseNavigation.svelte";
    $navList = contents;
    $currentPath = "Fundamentals of WWW, HTML and XHTML";
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml" />
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
        Fundamentals of WWW, HTML and XHTML
    </h4>
    <Card>
        <Content>
            <h5>Contents</h5>
            <NavList name="{$navList[0].topics[0].name}" url="{$navList[0].topics[0].url}" topics={$navList[0].topics[0].topics} expanded={false} />
        </Content>
    </Card>
    <Card>
        <Content>
            <p>
                The World Wide Web (www) is a system of softwares used to transmit and receive information using the set of hardware called the Internet. The information is in the form of a string of 0s and 1s. Specific softwares are used to interpret and convert these strings into human readable format like text, image, audio, video etc.
            </p>
            <p>
                In this module, we'll go through a brief overview of the Internet and the World Wide Web. We'll have a glimpse of the client-server model of communication between the computers that are on the Internet. We'll see how browsers use HTTP to send request to a server that listens and responds to the request. We'll learn about the security issues in this communication process. 
            </p>
            <p>
                After understanding the model of communication, we'll go deep into web page design only using HTML/XHTML. We'll learn many HTML elements and their limitations that are solved via using XHTML.
            </p>
        </Content>
    </Card>
    
</article>
