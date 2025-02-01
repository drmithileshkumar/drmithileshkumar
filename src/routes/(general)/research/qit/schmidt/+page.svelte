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
    $currentPath = "Schmidt Decomposition of Multipartite states";
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
    <title>Schmidt Decomposition of Multipartite states</title>
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
        Schmidt Decomposition of Multipartite states
    </h4>
    <Paper>
        <span slot="authors">
            Mithilesh Kumar
        </span>
        <span slot="title">
            Schmidt Decomposition of Multipartite states
        </span>
        <span slot="venue">
            <a href="https://arxiv.org/abs/2411.02473">CoRR abs/2411.02473 (2024)</a>, <a href="https://www.researchgate.net/publication/385491083_Schmidt_Decomposition_of_Multipartite_States">10.13140/RG.2.2.19713.88162</a>, 2024
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
                <li><strong>Quantum State Representation:</strong> Quantum states can be expressed in numerous ways depending on the choice of basis.</li>
                <li><strong>Schmidt Decomposition:</strong> A method that simplifies the representation of bipartite quantum states, facilitating the study of entanglement.</li>
                <li><strong>Research Objective:</strong> To establish necessary and sufficient conditions for the existence of Schmidt decompositions in multipartite quantum systems and to develop an efficient algorithm for obtaining such decompositions when they exist.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Previous Work</h6>
            <ul>
                <li><strong>Bipartite Systems:</strong> All bipartite quantum states admit Schmidt decomposition, which is instrumental in analyzing entanglement properties.</li>
                <li><strong>Multipartite Systems:</strong> Extending Schmidt decomposition to systems with more than two subsystems is non-trivial and has been a subject of ongoing research.</li>
                <li><strong>Prior Studies:</strong> Researchers have explored conditions under which multipartite states can be decomposed in a Schmidt-like manner, but a comprehensive criterion has been lacking.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Contributions</h6>
            <ul>
                <li><strong>Existence Criteria:</strong> Derived necessary and sufficient conditions for the existence of Schmidt decompositions in multipartite quantum states.</li>
                <li><strong>Algorithm Development:</strong> Proposed an efficient algorithm to obtain the Schmidt decomposition for states that satisfy the derived conditions.</li>
                <li><strong>Generalization:</strong> Extended the concept of Schmidt decomposition beyond bipartite systems, providing a framework applicable to systems with multiple subsystems.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Methodology</h6>
            <ul>
                <li><strong>Mathematical Framework:</strong> Utilized linear algebraic techniques to analyze the structure of multipartite quantum states.</li>
                <li><strong>Condition Derivation:</strong> Investigated the commutation relations and normality conditions of matrices associated with quantum states to establish decomposition criteria.</li>
                <li><strong>Algorithm Design:</strong> Developed a step-by-step procedure to transform a given multipartite state into its Schmidt-decomposed form, if the state meets the necessary conditions.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Significance</h6>
            <ul>
                <li><strong>Advancement in Quantum Theory:</strong> Provides a deeper understanding of the structure of multipartite quantum states and their entanglement properties.</li>
                <li><strong>Practical Applications:</strong> The findings can be applied to quantum information processing tasks, where understanding entanglement in multipartite systems is crucial.</li>
                <li><strong>Algorithmic Efficiency:</strong> The proposed algorithm offers a practical tool for researchers working with complex quantum systems.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Conclusion</h6>
            <p>This study establishes a comprehensive criterion for the existence of Schmidt decompositions in multipartite quantum states and introduces an efficient algorithm for obtaining such decompositions. These contributions enhance the understanding of entanglement in complex quantum systems and provide practical tools for further research in quantum information science.</p>
        </Content>
    </Card>
    
</article>
