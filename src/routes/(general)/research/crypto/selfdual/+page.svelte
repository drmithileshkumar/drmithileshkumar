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
    $currentPath = "Self-dual Codes";
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
    <title>Self-dual Codes</title>
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
        Self-dual Codes
    </h4>
    <Paper>
        <span slot="authors">
            Mithilesh Kumar, Srimathi Varadarajan, Håvard Raddum
        </span>
        <span slot="title">
            Graphs and Self-dual additive codes over GF(4)
        </span>
        <span slot="venue">
            <a href="https://www.lebesgue.fr/sites/default/files/proceedings_WCC/WCC_2019_paper_24.pdf">WCC, 2019</a> 
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
                <li><strong>Self-dual Additive Codes over GF(4):</strong> These codes have applications in cryptography, quantum error correction, and the construction of unimodular lattices.</li>
                <li><strong>Graph Representation:</strong> There is a one-to-one correspondence between self-dual additive codes over GF(4) and simple undirected graphs.</li>
                <li><strong>Research Objective:</strong> To study self-dual codes whose corresponding graphs have fixed rankwidth, aiming to expedite their classification.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Previous Work</h6>
            <ul>
                <li><strong>Classification Efforts:</strong> Prior studies have classified self-dual additive codes over GF(4) up to length 12, but the complexity increases significantly for longer codes.</li>
                <li><strong>Graph Isomorphism and Weight Enumeration:</strong> Existing algorithms for classifying these codes involve computationally intensive steps like graph isomorphism testing and weight enumeration.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Contributions</h6>
            <ul>
                <li><strong>Focus on Rankwidth:</strong> Initiated the study of self-dual codes whose corresponding graphs have fixed rankwidth, particularly rankwidth 1, to simplify classification.</li>
                <li><strong>Improved Classification Algorithm:</strong> By leveraging the structural properties of rankwidth 1 graphs, the classification process becomes exponentially faster, reducing the branching factor from {`\\(2^n - 1\\)`} to {`\\(3n - 3\\)`}.</li>
                <li><strong>Weight Enumerator Computation:</strong> Introduced a new algorithm using Binary Decision Diagrams (BDD) to compute weight enumerators more efficiently.</li>
                <li><strong>Minimum Distance Analysis:</strong> Demonstrated that the minimum distance of a code is at least 3 if and only if the corresponding graph lacks pendant vertices and twin-pairs.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Methodology</h6>
            <ul>
                <li><strong>Rankwidth and Graph Properties:</strong> Utilized the fact that graphs with rankwidth 1 are distance-hereditary and that rankwidth is preserved under local complementation, aiding in efficient classification.</li>
                <li><strong>Binary Decision Diagrams (BDD):</strong> Employed BDDs to represent and compute weight enumerators of self-dual codes, providing a unified and efficient approach.</li>
                <li><strong>Minimum Distance Algorithm:</strong> Developed an algorithm to compute an approximate minimum distance of codes corresponding to general graphs.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Significance</h6>
            <ul>
                <li><strong>Enhanced Classification Efficiency:</strong> The approach allows for faster classification of self-dual additive codes over GF(4), especially for larger code lengths.</li>
                <li><strong>Broader Applicability:</strong> The methods can be applied to other problems involving graph-based representations of codes.</li>
                <li><strong>Insight into Code Properties:</strong> The analysis of minimum distance in relation to graph structures provides deeper understanding of code characteristics.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Conclusion</h6>
            <p>This work advances the study of self-dual additive codes over GF(4) by focusing on graphs with fixed rankwidth, introducing efficient algorithms for classification and weight enumeration, and providing insights into the relationship between graph structures and code properties.</p>
        </Content>
    </Card>
    
</article>
