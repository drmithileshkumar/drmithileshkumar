<script lang="ts">
    // @ts-nocheck
    import Highlight, { LineNumbers } from "svelte-highlight";
    import javascript from "svelte-highlight/languages/javascript";
    import xml from "svelte-highlight/languages/xml";
    import css from 'svelte-highlight/languages/css';
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/javascript/practice" />
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
        Variables
    </h5>
    <Card>
        <Content>
            <h5>Contents</h5>
            <NavList name="{$navList[0].topics[2].name}" url="{$navList[0].topics[2].url}" topics={$navList[0].topics[2].topics} expanded={false} />
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                Describe the three parts of javascript.
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                Describe two ways to include javascript inside html.
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                When should we include javascript at the end of the body tag?
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                Which of the following are not a valid identifier?
                <ol>
                    <li>sum</li>
                    <li>1sum</li>
                    <li>$sum</li>
                    <li>_sum</li>
                    <li>43</li>
                    <li>total sum</li>
                </ol>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                What are three ways in which a variable can be declared in javascript?
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                What are values of a boolean variable?
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                Show three ways to write a string in javascript.
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                Show two ways to create an array in javascript.
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                Create a javascript object to represent a mobile phone which is described by keys <code>name, brand, year, os</code> and <code>price</code>. Use appropriate values for the keys.
            </div>
        </Content>
    </Card>
    <!-- <Card>
        <Content>
            <div class="question">
                <p>Correct the error in the following code.</p>
                <Highlight language={xml} 
                code={`<p class="item">First item.</p>
<p id="item">Second item</p>
<p id="item">Third item</p>`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
            </div>
        </Content>
    </Card> -->
</article>
