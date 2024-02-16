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
    import CourseNavigation from "$lib/components/CourseNavigation.svelte";
    $navList = contents;
    $currentPath = "Uniform Resource Locators";
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/fundamentals/url" />
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
        Uniform Resource Locators
    </h4>
    <Card>
        <Content>
            <p>
                Uniform (or universal) Resource Identifiers (URIs) are used to identify resources on the Internet. URIs are used for two different purposes:
            </p>
            <ol>
                <li>
                    To name a resource (For example, namespaces in XML)
                </li>
                <li>
                    To provide a path to, or location of, a resource (Uniform Resource Locators (URL))
                </li>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>URL Formats</h6>
            <p>
                All URLs have the same general format:
            </p>
            <Highlight language={xml} code={`scheme:object-address`} let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight>
            <p>
                The <code>scheme</code> is often a communications protocol. Some examples are:
            </p>
            <Highlight 
            language={xml} 
            code={`http://drmithileshkumar.com/favicon.png
file://desktop/myfile.txt
ftp://sales@host/c:/forms/myfile.txt`} 
            let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight>
            <p>
                The <strong>host name</strong> is the name of the server computer that stores the document. Messages to a host machine must be directed to the appropriate process running on the host for handling. Such processes are identified by their associated port numbers. The default port number of Web server processes is 80. For example:
            </p>
            <Highlight 
            language={xml} 
            code={`http://drmithileshkumar.com:1234/favicon.png`} 
            let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight>
            in case <code>drmithileshkumar.com</code> is configured to listen on port 1234.
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>URL Paths</h6>
            <p>
                The path to the document for the HTTP protocol is similar to a path to a file or directory in the file system of an operating system and is given by a sequence of directory names and a file name, all separated by \ (on windows) or / (on unix).
            </p>
            <Highlight 
            language={xml} 
            code={`http://drmithileshkumar.com:1234/courses/internet/wwwhtml/foundamentals/url`} 
            let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight>
            <p>
                The path in a URL can differ from a path to a file because a URL need not include all directories on the path.
            </p>
            <p>
                <strong>Complete path</strong>: A path that includes all directories along the way is called a complete path.
            </p>
            <p>
                <strong>Partial paths</strong>: In most cases, the path to the document is relative to some base path that is specified in the configuration files of the server. Such paths are called partial paths. For example, if the server's configuration specifies that the root directory for files it can serve is <code>courses/internet</code>, the previous URL is specified as follows: 
            </p>
            <Highlight 
            language={xml} 
            code={`http://drmithileshkumar.com:1234/wwwhtml/foundamentals/url`} 
            let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight>
            
        </Content>
    </Card>
</article>
