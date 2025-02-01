<script lang="ts">
    // @ts-nocheck
    import Highlight, { LineNumbers } from "svelte-highlight";
    import javascript from "svelte-highlight/languages/javascript";
    import xml from "svelte-highlight/languages/xml";
    import css from "svelte-highlight/languages/css";
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
    import { contents, contentNav } from "$lib/pages/courses/algorithms/content";
    import Pathlist from "$lib/components/Pathlist.svelte";
    import CourseNavigation from "$lib/components/CourseNavigation.svelte";
	
    $navList = contents;
    $currentPath = "Sorting Algorithms";
    $darkMode = false;
    // onMount(() => {
    //     MathJax.typeset();
    // });
    let code1=`<!--Inline CSS-->
<p style="color: tomato;">I'm tomato</p>`
    let code2=`<head>
    <!---CSS from external file-->
    <link rel="stylesheet" href="/app.css"> 
    <!--Document level CSS-->
    <style>
    /* set text color of p elements to tomato */
        p {
            color: tomato;
        }
    </style>
</head>`
    let code3 = `selector1 {
    property1: value1;
    property2: value2;
}
selector2 {
    property3: value3;
    property4: value4;
}`
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
        cursor: pointer;
    }
    .question {
        cursor: pointer;
        padding: 0.3em;
    }
</style>
<svelte:head>
    <title>Algorithms</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/algorithms/sorting" />
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
        Sorting Algorithms
    </h4>
    <Card style="background-color: rgba(0, 100, 100, 0.1">
        <Content>
            <h5>Contents</h5>
            <NavList name="{$navList[0].topics[0].name}" url="{$navList[0].topics[0].url}" topics={$navList[0].topics[0].topics} expanded={false} />
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>What is sorting?</h6>
            <p>
                Sorting is rearranging data according to some order, usually <em>increasing</em> or <em>decreasing</em>.
            </p>
            <!-- <Highlight language={xml} code={code1} let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight> -->
            
           
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Various ideas used for sorting</h6>
            <ul>
                <li>Keep swapping larger numbers to the right.</li>
                <li>Insert chosen number at right place.</li>
                <li>Find the current largest number and place it correctly.</li>
                <li>Divide the array into equal parts, sort them and merge.</li>
                <li>Pick a number and shift smaller numbers to the left and larger numbers to the right.</li>
                <li>If the array of positive integers are given that lie in a range, use a larger array to place them at their index.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Constraints</h6>
            <ul>
                <li>Speed</li>
                <li>Work memory</li>
                <li>Stability</li>
                <li>Adaptability</li>
                <li>Parallelization</li>
                <li>Distributed data</li>
                <li>Streamed data</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Types</h6>
            <ul>
                <li>Comparison-based
                    <ul>
                        <li>Bubble sort</li>
                        <li>Insertion sort</li>
                        <li>Merge sort</li>
                        <li>Quick sort</li>
                    </ul>
                </li>
                <li>Non-comparison-based
                    <ul>
                        <li>
                            Bucket sort
                        </li>
                        <li>
                            Redix sort
                        </li>
                    </ul>
                </li>
            </ul>
        </Content>
    </Card>
</article>
