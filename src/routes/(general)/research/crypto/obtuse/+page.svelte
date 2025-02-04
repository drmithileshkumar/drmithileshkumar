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
    $currentPath = "Obtuse Lattice Bases";
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
    <title>Obtuse Lattice Bases</title>
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
        Obtuse Lattice Bases
    </h4>
    <Paper>
        <span slot="authors">
            Kanav Gupta, Mithilesh Kumar, Håvard Raddum
        </span>
        <span slot="title">
            Obtuse Lattice Bases
        </span>
        <span slot="venue">
            <a href="https://arxiv.org/abs/2009.00384">CoRR abs/2009.00384 (2020)</a>
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
                <li><strong>Lattice Reduction:</strong> Transforms a given lattice basis into another basis to simplify problems like finding the shortest vector.</li>
                <li><strong>Obtuse Basis:</strong> A class of bases where the angle between any pair of basis vectors is obtuse, meaning their inner product is non-positive.</li>
                <li><strong>Research Objective:</strong> To define obtuse bases and demonstrate that any lattice basis can be transformed into an obtuse basis, thereby expediting lattice enumeration algorithms.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Previous Work</h6>
            <ul>
                <li><strong>Lattice Reduction Algorithms:</strong> Algorithms like LLL and BKZ aim to produce nearly orthogonal bases but do not guarantee obtuse angles between basis vectors.</li>
                <li><strong>Enumeration Techniques:</strong> Methods such as Kannan's algorithm systematically explore lattice points within a certain radius but can be computationally intensive.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Contributions</h6>
            <ul>
                <li><strong>Definition of Obtuse Bases:</strong> Introduced the concept of obtuse bases, where the inner product between any pair of basis vectors is non-positive.</li>
                <li><strong>Transformation Algorithm:</strong> Developed an algorithm to convert any lattice basis into an obtuse basis.</li>
                <li><strong>Enumeration Efficiency:</strong> Demonstrated that in an obtuse basis, the coefficients in the linear combination representing the shortest vector can all be chosen as positive integers, leading to an exponential speedup in lattice enumeration algorithms.</li>
                <li><strong>Implementation and Testing:</strong> Implemented the obtuse basis transformation algorithm and tested it on small bases to validate its effectiveness.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Methodology</h6>
            <ul>
                <li><strong>Obtuse Basis Transformation:</strong> Designed an algorithm that adjusts the signs of basis vectors to ensure non-positive inner products between all pairs, effectively converting any given lattice basis into an obtuse basis.</li>
                <li><strong>Enumeration Process:</strong> Utilized the property that in an obtuse basis, all coefficients in the representation of the shortest vector can be positive, leading to a more streamlined and faster enumeration process.</li>
                <li><strong>Implementation Details:</strong> Implemented the transformation algorithm and conducted tests on small lattice bases to assess performance improvements.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Significance</h6>
            <ul>
                <li><strong>Exponential Speedup:</strong> The transformation to an obtuse basis results in an exponential reduction in the search space for lattice enumeration algorithms.</li>
                <li><strong>Practical Efficiency:</strong> The proposed methods offer practical improvements in solving the shortest vector problem, which is fundamental in fields like cryptography and number theory.</li>
                <li><strong>Algorithmic Compatibility:</strong> The obtuse basis framework is compatible with existing enumeration enhancements, making it versatile for various applications.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Conclusion</h6>
            <p>This work introduces the concept of obtuse bases and provides an efficient algorithm to transform any lattice basis into this form. The obtuse basis significantly accelerates lattice enumeration algorithms by allowing all positive coefficients in the representation of the shortest vector. The implementation and testing on small bases validate the practical benefits of this approach.</p>
        </Content>
    </Card>
    
</article>
