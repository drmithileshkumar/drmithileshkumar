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
    $currentPath = "Induced Matching";
    // $darkMode = false;
    
</script>
<style>
    article {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        max-width: 750px;
        width: 90%;
        margin: auto;
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
    <title>Induced Matching</title>
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
        Induced Matching
    </h4>
    <Paper>
        <span slot="authors">
            Akash Kumar, Mithilesh Kumar
        </span>
        <span slot="title">
            Deletion to Induced Matching
        </span>
        <span slot="venue">
            <a href="https://arxiv.org/abs/2008.09660">CoRR abs/2008.09660 (2020)</a>
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
                <li><strong>Induced Matching:</strong> A set of edges in a graph where no two edges share a common vertex, and no edge exists between any two edges in the set.</li>
                <li><strong>Deletion to Induced Matching Problem:</strong> Given a graph {`\\( G \\)`} and an integer {`\\( k \\)`}, determine whether there exists a set {`\\( S \\subseteq V(G) \\)`} with {`\\( |S| \\leq k \\)`} such that every connected component in {`\\( G - S \\)`} is an induced matching.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Previous Work</h6>
            <ul>
                <li><strong>Vertex Cover Problem:</strong> A well-studied problem where the goal is to find a set of vertices covering all edges in the graph.</li>
                <li><strong>Generalization:</strong> The Deletion to Induced Matching problem can be seen as a generalization of the Vertex Cover problem, focusing on reducing the graph to disjoint 2-vertex components.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Contributions</h6>
            <ul>
                <li><strong>Fixed-Parameter Tractable Algorithm:</strong> Developed an algorithm with a running time of {`\\( O^*(1.748^k) \\)`} using branch-and-reduce strategy and path decomposition.</li>
                <li><strong>Exact Exponential Algorithm:</strong> Extended the approach to provide an exact exponential-time algorithm for the problem.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Methodology</h6>
            <p>The strategy is to reduce the problem to dynamic programming on <strong>path decompositon</strong> of the graph.</p>
            <p>Via branching it can be ensured that the maximum degree in the graph is at most 3.</p>
            <p>The following theorem guarantees that there is a path decomposition:</p>
            <strong>Theorem (Fedor, Høie)</strong>
            <p>
                For any \(\epsilon \gt 0\), there exists an integer \(n_\epsilon\) such that for every graph \(G\) of maximum degree 3 with at least \(n_\epsilon\) vertices has path decomposition of path width at most {`\\((\\frac{1}{6} + \\epsilon)n\\)`}. 
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Significance</h6>
            <ul>
                <li><strong>Algorithmic Efficiency:</strong> The proposed algorithm improves upon previous approaches in terms of running time and parameterization.</li>
                <li><strong>Broader Implications:</strong> The techniques developed may be applicable to other graph modification problems and contribute to the field of parameterized complexity.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Conclusion</h6>
            <p>This work presents an efficient algorithm for the Deletion to Induced Matching problem, advancing the understanding and methodology for tackling such graph modification challenges.</p>
        </Content>
    </Card>
    
</article>
