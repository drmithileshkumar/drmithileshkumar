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
    $currentPath = "Reducing Lattice Enumeration Search Trees";
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
    <title>Reducing Lattice Enumeration Search Trees</title>
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
        Reducing Lattice Enumeration Search Trees
    </h4>
    <Paper>
        <span slot="authors">
            Mithilesh Kumar, Srimathi Varadarajan, Håvard Raddum
        </span>
        <span slot="title">
            Reducing Lattice Enumeration Search Trees
        </span>
        <span slot="venue">
            <a href="https://www.infocommunications.hu/documents/169298/4647244/InfocomJ_2019_4_All.pdf">Infocommunications Journal, 2019</a>
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
                <li><strong>Lattices:</strong> A lattice in {`\\( \\mathbb{R}^n \\)`} is the set of all integer combinations of {`\\( n \\)`} linearly independent vectors {`\\( b_1, b_2, ..., b_n \\)`}.</li>
                <li><strong>Shortest Vector Problem (SVP):</strong> Given a lattice basis, the task is to find the non-zero lattice vector with the smallest Euclidean norm.</li>
                <li><strong>Enumeration Algorithms:</strong> These algorithms perform an exhaustive search to find the shortest vector by exploring a search tree where nodes represent partial assignments of integer coefficients.</li>
                <li><strong>Pruning Techniques:</strong> Methods like those introduced by Schnorr, Euchner, and Hörner in the 1990s aim to reduce the search space by eliminating subtrees unlikely to contain the shortest vector, thereby improving efficiency.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Previous Work</h6>
            <ul>
                <li><strong>Early Enumeration Methods:</strong> In the 1980s, Fincke, Pohst, and Kannan developed deterministic algorithms based on exhaustive search within a convex set, with performance heavily dependent on the quality of the input basis.</li>
                <li><strong>Pruning Strategies:</strong> Schnorr, Euchner, and Hörner introduced pruning techniques in the 1990s to enhance enumeration efficiency by cutting off parts of the search tree deemed less promising.</li>
                <li><strong>Extreme Pruning:</strong> Gama, Nguyen, and Regev proposed extreme pruning in 2010, significantly reducing the search tree size by aggressively pruning, accepting a lower probability of finding the shortest vector in a single run but compensating through multiple runs with varied basis permutations.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Contributions</h6>
            <ul>
                <li><strong>Hybrid Enumeration Algorithm:</strong> The authors propose a hybrid enumeration approach that selects permutations of basis vectors to minimize the search tree size, leading to improved performance for large lattices.</li>
                <li><strong>Sign-Based Pruning Strategy:</strong> They introduce a pruning method based on estimating the signs of the coefficients that yield the shortest vector, effectively reducing the number of nodes in the search tree without missing the shortest vector in their experiments.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Methodology</h6>
            <ul>
                <li><strong>Basis Permutation:</strong> Investigated the impact of different permutations of basis vectors on the search tree size and identified classes of permutations that result in fewer nodes.</li>
                <li><strong>Hybrid Enumeration:</strong> Developed an algorithm that combines advantageous basis permutations with standard enumeration to enhance efficiency, particularly for large lattices.</li>
                <li><strong>Sign Estimation for Pruning:</strong> Devised a strategy to estimate the signs of coefficients leading to the shortest vector, enabling pruning of subtrees with unlikely sign combinations, thereby reducing the search space.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Significance</h6>
            <ul>
                <li><strong>Efficiency Improvement:</strong> The proposed methods reduce the number of nodes in the enumeration search tree, leading to faster solutions for the Shortest Vector Problem.</li>
                <li><strong>Practical Applicability:</strong> The hybrid enumeration and sign-based pruning strategies can be integrated into existing lattice enumeration frameworks to enhance their performance.</li>
                <li><strong>Advancement in Pruning Techniques:</strong> The sign-based pruning approach offers a novel perspective on reducing search spaces in lattice enumeration algorithms.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Conclusion</h6>
            <p>This work presents innovative strategies to reduce the search space in lattice enumeration algorithms, specifically through hybrid enumeration and sign-based pruning, contributing to more efficient solutions for the Shortest Vector Problem.</p>
        </Content>
    </Card>
    
    
</article>
