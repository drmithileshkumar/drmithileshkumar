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
    import CourseNavigation from '$lib/components/CourseNavigation.svelte'
    $navList = contents;
    $currentPath = "Web Servers";
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/fundamentals/servers" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
    {#if $darkMode}
        {@html githubDark}
    {:else}
        {@html github}
    {/if}
</svelte:head>
<article>
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        Web Servers
    </h4>
    <Card>
        <Content>
            Web servers are programs that provide documents to requesting browsers. Very often, servers act only when requests are made from a client like a browser.
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Web Server Operation</h6>
            <p>
                A small number of servers provide documents to a large number of clients.
            </p>
            <p>
                A Web browser intitiates network communications with a server by sending it URL. A URL can specify one of two different things: the address of a data file stored on the server that is to be sent to the client, or a program stored on the server that the client wants executed and the output of the program returned to the client.
            </p>
            <p>
                All the communications between a Web client and a Web server use the standard Web protocol, HTTP (or HTTPS).
            </p>
            <p>
                When a Web server begins execution, it informs the operating system under which it is running that it is now ready to accept incoming network connections through a specific port on the machine. While in this running state, the server runs as a background process in the operating system environment. A Web client/browser
            </p>
            <ol>
                <li>opens a network connection to a Web server,</li>
                <li>sends information requests and possibly data to the server,</li>
                <li>receives information from the server, and</li>
                <li>closes the connection.</li>
            </ol>
            <p>
                The primary task of a Web server is to monitor a communications port on its host machine, accept HTTP commands through that port, and perform the operations specified by those commands. All HTTP commands include a URL, which includes the specification of a host server machine. When the URL is received, it is translated into either a file name (in which case the file is returned to the requesting client) or a program name (in which case the program is run and its output is sent to the requesting client).
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>General Server Characteristics</h6>
            <p>
                The file structure of a Web server has two separate directories.
            </p>
            <p>
                <strong>Document Root</strong>: The root of one of these directories is the document root. The file hierarchy that grows from the document root stores the Web documents to which the server has direct acces and normally serves to clients.
            </p>
            <p>
                <strong>Server Root</strong>: The root of the other directory is the server root. This directory stores the server and its support software.
            </p>
        </Content>
    </Card>
</article>
