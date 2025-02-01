<script lang="ts">
    // @ts-nocheck
    import Highlight, { LineNumbers } from "svelte-highlight";
    import javascript from "svelte-highlight/languages/javascript";
    import xml from "svelte-highlight/languages/xml";
    import css from "svelte-highlight/languages/css";
    import github from "svelte-highlight/styles/github";
    import githubDark from "svelte-highlight/styles/github-dark";
    
    import WebPractice from "$lib/pages/courses/internet/WebPractice.svelte";
    import {page} from '$app/stores';
    import {onMount} from 'svelte';
    import Card, { Content, Actions } from "@smui/card";
    import DataTable, {Body, Head, Row, Cell} from '@smui/data-table';
    import Button, {Label} from "@smui/button";
    import Ripple from "@smui/ripple";
    import NavList from '$lib/components/NavList.svelte'
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores";
    import { contents, contentNav } from "$lib/pages/research/content";
    import { typeset } from '$lib/shared/typeset';
    import Pathlist from "$lib/components/Pathlist.svelte";
    import CourseNavigation from "$lib/components/CourseNavigation.svelte";

    import Paper from "$lib/components/Paper.svelte";

    $navList = contents;
    $currentPath = "Club";
    $darkMode = false;
    
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
    h4 {
        margin: 0.5em 0;
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
        text-decoration: none;
    }
</style>
<svelte:head>
    <title>Club</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/layout" />
    <meta name="abstract" content="Courses Taught by Dr Mithilesh Kumar" />
    {#if $darkMode}
        {@html githubDark}
    {:else}
        {@html github}
    {/if}
</svelte:head>
<article use:typeset>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        2-Club
    </h4>
    <Paper>
        <span slot="authors">
            Mithilesh Kumar
        </span>
        <span slot="title">
            2-CLUB is NP-hard for distance to 2-club cluster graphs
        </span>
        <span slot="venue">
            <a href="https://doi.org/10.48550/arXiv.1903.05425">CoRR abs/1903.05425 (2019)</a>
        </span>
    </Paper>
    <Card style="background-color: rgba(0, 100, 100, 0.1">
        <Content>
            <h6>Topics</h6>
            <ol>
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#previous">Previous Work</a></li>
                <li><a href="#contributions">Contributions</a></li>
                <li><a href="#methods">Methodology</a></li>
                <li><a href="#significance">Significance</a></li>
                <li><a href="#conclusion">Conclusion</a></li>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Introduction</h6>
            <ul>
                <li><strong>2-Club:</strong> A subgraph where the maximum distance between any two vertices is at most 2.</li>
                <li><strong>2-Club Cluster Graph:</strong> A graph in which each connected component is a 2-club.</li>
                <li><strong>Problem Statement:</strong> Determine whether finding a 2-club in graphs that are a certain distance from being 2-club cluster graphs is NP-hard.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Previous Work</h6>
            <ul>
                <li><strong>Hartung et al. (2013):</strong> Studied the 2-Club problem under various structural restrictions and posed open questions regarding its complexity in specific graph classes.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Contributions</h6>
            <ul>
                <li><strong>Main Result:</strong> Proved that the 2-CLUB problem is NP-hard even for graphs that are at a distance of two vertex deletions from being 2-club cluster graphs.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Methodology</h6>
            <ul>
                <li><strong>Reduction from CLIQUE:</strong> Employed a reduction from the NP-hard CLIQUE problem to demonstrate the NP-hardness of 2-CLUB in the specified graph class.</li>
                <li><strong>Graph Construction:</strong> Constructed a graph \( G \) from a given graph \( H \) by adding specific sets of vertices and edges to control the graph's structure and properties.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Significance</h6>
            <ul>
                <li><strong>Complexity Insight:</strong> Provides a deeper understanding of the computational complexity of the 2-CLUB problem in relation to graph modifications.</li>
                <li><strong>Answering Open Questions:</strong> Addresses an open problem posed by Hartung et al. (2013) regarding the complexity of 2-CLUB in certain graph classes.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Conclusion</h6>
            <p>This work establishes the NP-hardness of the 2-CLUB problem for graphs that are two vertex deletions away from being 2-club cluster graphs, thereby contributing to the understanding of the problem's complexity in structurally restricted graph classes.</p>
        </Content>
    </Card>
     
</article>
