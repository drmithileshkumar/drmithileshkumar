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
    $currentPath = "Component Order Connectivity";
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
    <title>Component Order Connectivity</title>
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
        {`\\(\\ell\\)`}-Component Order Connectivity
    </h4>
    <Paper>
        <span slot="authors">
            Mithilesh Kumar, Daniel Lokshtanov
        </span>
        <span slot="title">
            A 2lk Kernel for l-Component Order Connectivity
        </span>
        <span slot="venue">
            <a href="https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.IPEC.2016.20">IPEC 2016: 20:1-20:14</a>, <a href="https://arxiv.org/abs/1610.04711">CoRR abs/1610.04711 (2016)</a>
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
                <li><strong>{`\\(\\ell\\)`}-Component Order Connectivity ({`\\(\\ell\\)`}-COC):</strong> Given a graph {`\\( G \\)`} and an integer {`\\( k \\)`}, the problem asks whether there exists a set {`\\( S \\subseteq V(G) \\)`} with {`\\( |S| \\leq k \\)`} such that the largest connected component in {`\\( G - S \\)`} has at most {`\\( \\ell \\)`} vertices.</li>
                <li><strong>Generalization of Vertex Cover:</strong> For {`\\( \\ell = 1 \\)`}, {`\\(\\ell\\)`}-COC reduces to the classic Vertex Cover problem.</li>
                <li><strong>Applications:</strong> Serves as a measure of graph vulnerability, assessing how many vertices need removal to fragment the graph into small components.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Previous Work</h6>
            <ul>
                <li><strong>NP-Completeness:</strong> Lewis and Yannakakis (1980) established that {`\\(\\ell\\)`}-COC is NP-complete for every {`\\( \\ell \\geq 1 \\)`}.</li>
                <li><strong>Kernelization:</strong> Drange et al. provided a kernel with {`\\( O(\\ell k (k + \\ell)) \\)`} vertices for {`\\(\\ell\\)`}-COC.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Contributions</h6>
            <ul>
                <li><strong>Improved Kernel:</strong> Developed a kernel for {`\\(\\ell\\)`}-COC with at most {`\\( 2{\\ell k} \\)`} vertices, significantly improving upon previous results.</li>
                <li><strong>Generalized q-Expansion Lemma:</strong> Extended the q-Expansion Lemma to weighted graphs, a result that may have independent interest.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Methodology</h6>
            <ul>
                <li><strong>Kernelization Algorithm:</strong> Designed an algorithm that reduces the input graph to a smaller equivalent graph with at most {`\\( 2{\\ell k} \\)`} vertices in {`\\( n^{O(\\ell)} \\)`} time.</li>
                <li><strong>Weighted q-Expansion Lemma:</strong> Proved a generalization of the q-Expansion Lemma for weighted graphs to facilitate the kernelization process.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Significance</h6>
            <ul>
                <li><strong>Efficiency:</strong> The proposed kernel significantly reduces the problem size, leading to more efficient algorithms for {`\\(\\ell\\)`}-COC.</li>
                <li><strong>Theoretical Impact:</strong> The generalized q-Expansion Lemma may have broader applications in graph theory and algorithm design.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Conclusion</h6>
            <p>This work advances the study of {`\\(\\ell\\)`}-Component Order Connectivity by providing a more efficient kernelization algorithm and introducing a generalized q-Expansion Lemma for weighted graphs.</p>
        </Content>
    </Card>
    
</article>
