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
    $currentPath = "The Internet";
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/fundamentals/intro" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
    {#if $darkMode}
        {@html githubDark}
    {:else}
        {@html github}
    {/if}
</svelte:head>
<article>
    <h2>
        The Internet
    </h2>
    <Card>
        <Content>
            <h6>Origins</h6>
            <p>
                The Internet began in the 1960s with funding from the US Department of Defense (DoD). The purpose was to establish communication between computers so that programs can be shared and there can be remote access.
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>What is the Internet?</h6>
            <p>
                The Internet is a huge collection of devices (computers, mobiles, printers, smart devices) connected in a communications network. These devices communicate via a protocol called Transmission Control Protocol/Internet Protocol (TCP/IP).
            </p>
            <p>
                Rather than connecting every computer on the Internet directly to every other computer on the Internet, normally the individual computers in an organization are connected to each other in a local network. One node on this local network is physically connected to the Internet.
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Internet Protocol Addresses (IP)</h6>
            <p>

            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Domain Names</h6>
        </Content>
    </Card>
</article>
