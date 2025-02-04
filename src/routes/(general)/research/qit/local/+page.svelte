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
    $currentPath = "Local Operations in Multiparty Quantum Systems";
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
    <title>Local Operations in Multiparty Quantum Systems</title>
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
        Local Operations in Multiparty Quantum Systems
    </h4>
    <Paper>
        <span slot="authors">
            Mithilesh Kumar
        </span>
        <span slot="title">
            Local Operations in Multiparty Quantum Systems
        </span>
        <span slot="venue">
            <a href="https://arxiv.org/abs/2411.10710">CoRR abs/2411.10710 (2024)</a>, <a href="https://www.researchgate.net/publication/385864724_Local_Operations_in_Multiparty_Quantum_Systems">10.13140/RG.2.2.10422.51524</a>, 2024
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
                <li><strong>Local Operations in Quantum Systems:</strong> In multipartite quantum systems, local operations are performed by individual parties, with results communicated to others.</li>
                <li><strong>LOCC and SLOCC Frameworks:</strong> These frameworks study local operations with and without classical communication, respectively.</li>
                <li><strong>Research Objective:</strong> To determine when the action of one party can be simulated by another in multipartite systems.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Key Findings</h6>
            <ul>
                <li><strong>Bipartite Systems:</strong> Established necessary and sufficient conditions for when a unitary action by one party can be simulated by another.</li>
                <li><strong>Schmidt Decomposable States:</strong> Demonstrated that in such states, any party can simulate arbitrary operations performed by another.</li>
                <li><strong>Tripartite Systems:</strong> Derived conditions for the simulation of local measurements in arbitrary tripartite systems.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Methodology</h6>
            <ul>
                <li><strong>Theoretical Analysis:</strong> Utilized mathematical frameworks to derive conditions for the simulation of local operations.</li>
                <li><strong>Schmidt Decomposition:</strong> Applied this technique to analyze the structure of multipartite quantum states.</li>
                <li><strong>Unitary Operations:</strong> Investigated the role of unitary operations in simulating local actions across different parties.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Significance</h6>
            <ul>
                <li><strong>Quantum Communication:</strong> Enhances understanding of how local operations can be distributed and simulated among parties.</li>
                <li><strong>Quantum Computing:</strong> Provides insights into the design of quantum circuits where operations can be localized to specific qubits.</li>
                <li><strong>Entanglement Theory:</strong> Contributes to the study of entanglement in multipartite systems and the manipulation of quantum information.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Conclusion</h6>
            <p>This study explores the conditions under which local operations by one party in a multipartite quantum system can be simulated by another. It provides necessary and sufficient conditions for such simulations in bipartite systems, extends the analysis to Schmidt decomposable states, and offers insights into local measurements in tripartite systems, thereby advancing the understanding of local operations in quantum information theory.</p>
        </Content>
    </Card>
    
</article>
