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
    $currentPath = "On properties of Schmidt Decomposition";
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
    <title>On properties of Schmidt Decomposition</title>
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
        On properties of Schmidt Decomposition
    </h4>
    <Paper>
        <span slot="authors">
            Mithilesh Kumar
        </span>
        <span slot="title">
            On properties of Schmidt Decomposition
        </span>
        <span slot="venue">
            <a href="https://arxiv.org/abs/2411.05703">CoRR abs/2411.05703 (2024)</a>, <a href="https://www.researchgate.net/publication/385630874_On_properties_of_Schmidt_Decomposition">10.13140/RG.2.2.19022.47687</a>, 2024
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
                <li><strong>Schmidt Decomposition:</strong> A powerful tool in quantum information theory, universally applicable to bipartite quantum states.</li>
                <li><strong>Extension to Multipartite States:</strong> The applicability of Schmidt decomposition to systems with more than two subsystems is not straightforward and requires further investigation.</li>
                <li><strong>Research Objective:</strong> To review properties of bipartite Schmidt decompositions and explore their extension to multipartite states.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Key Concepts</h6>
            <ul>
                <li><strong>Schmidt Number:</strong> The number of non-zero terms in the Schmidt decomposition, defining an equivalence class using separable unitary transforms.</li>
                <li><strong>Equivalence Class:</strong> States that can be transformed into each other using separable unitary operations share the same Schmidt number.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Main Findings</h6>
            <ul>
                <li><strong>NP-Completeness:</strong> Determining a partition of a multipartite state that attains the highest Schmidt number is NP-complete.</li>
                <li><strong>Purification Preservation:</strong> Purifications of a density matrix of a composite system preserve Schmidt decomposability.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Methodology</h6>
            <ul>
                <li><strong>Review of Bipartite Properties:</strong> Analyzed known properties of Schmidt decomposition in bipartite systems.</li>
                <li><strong>Extension to Multipartite Systems:</strong> Investigated which properties extend to multipartite states and under what conditions.</li>
                <li><strong>Complexity Analysis:</strong> Studied the computational complexity of finding partitions with the highest Schmidt number.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Significance</h6>
            <ul>
                <li><strong>Understanding Entanglement:</strong> Provides insights into the structure of entanglement in multipartite quantum systems.</li>
                <li><strong>Computational Implications:</strong> Highlights the complexity of analyzing entanglement in multipartite systems, with implications for quantum computing and information theory.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Conclusion</h6>
            <p>This study reviews the properties of Schmidt decomposition in bipartite systems and explores their applicability to multipartite states. It identifies the NP-completeness of finding partitions with the highest Schmidt number and observes that purifications preserve Schmidt decomposability, contributing to a deeper understanding of entanglement in complex quantum systems.</p>
        </Content>
    </Card>
    
</article>
