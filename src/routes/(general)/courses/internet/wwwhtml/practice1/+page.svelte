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
    $currentPath = "Practice Problems";
    $darkMode = false;
    // onMount(() => {
    //     MathJax.typeset();
    // });
    let code1=`<h1>Quantum Computation</H1>
<p>There are various disciplines in quantum computation.<p>`
    let code2=`<!DOCTYPE html>
<head>
    <body>
    </body>
</head>
<article>
    <html>
    </html>
<article>
<title>My Page</title>`
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
        font-size: 1.7em;
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
        Practice Problems
    </h4>
    <h5>
        Fundamentals of WWW, HTML and XHTML
    </h5>
    <Card>
        <Content>
            <h5>Contents</h5>
            <NavList name="{$navList[0].topics[0].name}" url="{$navList[0].topics[0].url}" topics={$navList[0].topics[0].topics} expanded={false} />
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                <p>Which of the following is not a valid IP address:</p>
                <ol>
                    <li>172.168.0.1</li>
                    <li>172.168.0.0.1</li>
                    <li>255.255.255.255</li>
                    <li>256.255.0.1</li>
                </ol>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                <p>If it were allowed to use 36 bit IP addresses, how many unique IP address would be there?</p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                <p>If you want to edit an existing document, which is the right HTTP method to use:</p>
                <ol>
                    <li>GET</li>
                    <li>POST</li>
                    <li>PUT</li>
                    <li>DELETE</li>
                </ol>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                <p>
                    Find errors in the following HTML code:
                </p>
                <Highlight language={xml} code={code1} let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                <p>
                    Correct the document structure.
                </p>
                <Highlight language={xml} code={code2} let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                <p>Which of the tags has <code>href</code> as attribute</p>
                <ol>
                    <li><code>a</code></li>
                    <li><code>link</code></li>
                    <li><code>img</code></li>
                    <li><code>input</code></li>
                </ol>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                <p>Which of the tags has <code>src</code> as attribute</p>
                <ol>
                    <li><code>a</code></li>
                    <li><code>link</code></li>
                    <li><code>img</code></li>
                    <li><code>input</code></li>
                    <li><code>source</code></li>
                    <li><code>audio</code></li>
                    <li><code>video</code></li>
                    <li><code>table</code></li>
                </ol>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                <p>List any five organization elements.</p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                <p>Create a table that shows possible outcomes of rolling two die. Fill the cells with random outcomes. Either use html entities or images for the die face.</p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                <p>
                    Create a definition list showing state names (as dt) and at least two cities (as dd) in each state.
                </p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                <p>
                    Solve the above problem using nested lists: one list for state names and inside each item another list for cities.
                </p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                <p>Create a form for setting up profile of a costumer. It should take inputs for name, age, gender, photo, house number, street, locality, city, zip code, state. It should contain a submit button.</p>
            </div>
        </Content>
    </Card>
</article>
