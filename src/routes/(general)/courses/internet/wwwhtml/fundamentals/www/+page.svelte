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
    $currentPath = "The World Wide Web";
    $darkMode = true;
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
        color: rgba(0, 150, 200, 1);
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/fundamentals/www" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
    {#if $darkMode}
        {@html githubDark}
    {:else}
        {@html github}
    {/if}
</svelte:head>
<article>
    <h2>
        The World Wide Web
    </h2>
    <Card>
        <Content>
            <h6>Origins</h6>
            <p>
                The World Wide Web is a system of protocols and softwares that enable communication between devices over the Internet. It was proposed in 1989 by a group led by Tim Berners-Lee at CERN. In short, it is also known as the Web. The Web started with the protocal HTTP with document types HTML. Later other protocols and document types were supported.
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Web or Internet?</h6>
            <p>
                The Internet is a collection of computers and other devices connected by equipment that allows them to communicate with each other.
            </p>
            <p>
                The Web is a collection of software and protocols that has been installed on most of the computers on the Internet.
            </p>
        </Content>
    </Card>
</article>
