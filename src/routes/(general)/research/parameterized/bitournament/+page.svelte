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
    $currentPath = "Bipartite Tournament";
    $darkMode = false;
    
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
    .media {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
<svelte:head>
    <title>Bipartite Tournaments</title>
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
        Bipartite Tournament
    </h4>
    <Paper>
        <span slot="authors">
            Mithilesh Kumar, Daniel Lokshtanov
        </span>
        <span slot="title">
            Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Bipartite Tournaments
        </span>
        <span slot="venue">
            <a href="https://doi.org/10.4230/LIPIcs.FSTTCS.2016.24">FSTTCS 2016: 24:1-24:15</a>, <a href="https://doi.org/10.48550/arXiv.2411.02821">CoRR abs/2411.02821 (2024)</a>
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
            <h6 id="introduction">Introduction</h6>
            <div class="media">
                <img src="/Research/BTFVS/BipartiteTournament.png" width="300px" alt="Topological sort of an acyclic tournament">
            </div>
            <ul>
                <li><strong>Bipartite Tournaments:</strong> A directed graph {`\\( T := (A \\cup B, E) \\)`} where every pair of vertices {`\\( (a, b) \\)`}, {`\\( a \\in A \\)`}, {`\\( b \\in B \\)`}, are connected by an arc, and no arc connects two vertices within {`\\( A \\)`} or {`\\( B \\)`}.</li>
                <li><strong>Feedback Vertex Set (FVS):</strong> A set of vertices whose removal makes the graph acyclic.</li>
                <li><strong>Problem Statement:</strong> Given a bipartite tournament {`\\( T \\)`} and an integer {`\\( k \\)`}, determine whether {`\\( T \\)`} has a feedback vertex set of size at most {`\\( k \\)`}.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="previous">Previous Work</h6>
            <ul>
                <li><strong>Parameterized Algorithms:</strong> Hsiao (ISAAC 2011) developed an algorithm with a running time of {`\\( 2^k \\cdot k^{O(1)} + n^{O(1)} \\)`}.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="contributions">Contributions</h6>
            <ul>
                <li><strong>New Algorithm:</strong> Improved running times:
                    <ul>
                        <li><strong>Parameterized Running Time:</strong> {`\\( O(1.6181^k + n^{O(1)}) \\)`}</li>
                        <li><strong>Exact Exponential Running Time:</strong> {`\\( O(1.3820^n) \\)`}</li>
                    </ul>
                </li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="methods">Methodology</h6>
            <ul>
                <li><strong>Graph Partitioning:</strong> Utilize structural properties of bipartite tournaments to partition the graph effectively.</li>
                <li><strong>Dynamic Programming:</strong> Apply dynamic programming techniques to solve subproblems efficiently.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="significance">Significance</h6>
            <ul>
                <li><strong>Efficiency:</strong> The proposed algorithm outperforms previous algorithms in both parameterized and exact exponential time contexts for bipartite tournaments.</li>
                <li><strong>Theoretical Impact:</strong> Provides insights into the structure of bipartite tournaments and the Feedback Vertex Set problem.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="conclusion">Conclusion</h6>
            <p>This work advances the study of the Feedback Vertex Set problem in bipartite tournaments by providing a more efficient algorithm and deepening the understanding of the problem's structure.</p>
        </Content>
    </Card>    
</article>
