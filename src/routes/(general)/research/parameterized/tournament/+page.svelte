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
    $currentPath = "Tournament";
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
    <title>Tournaments</title>
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
        Tournament
    </h4>
    <Paper>
        <span slot="authors">
            Mithilesh Kumar, Daniel Lokshtanov
        </span>
        <span slot="title">
            Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Tournaments
        </span>
        <span slot="venue">
            <a href="https://doi.org/10.4230/LIPIcs.STACS.2016.49">STACS 2016: 49:1-49:13</a>, <a href="https://doi.org/10.48550/arXiv.1510.07676">CoRR abs/1510.07676 (2015)</a>
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
    <!-- <Card>
        <Content>
            <h6 id="abstract">Abstract</h6>
            <ul>
                <li>
                    A <em>tournament</em> is a directed graph {`\\(T\\)`} such that every pair of vertices are connected by an arc.
                </li>
                <li>
                    A <em>feedback vertex set</em> is a set {`\\(S\\)`} of vertices in {`\\(T\\)`} such that {`\\(T-S\\)`} is acyclic.
                </li>
                <li>
                    In this article we consider the Feedback Vertex Set problem in tournaments.
                </li>
                <li>
                    Here input is a tournament {`\\(T\\)`} and integer {`\\(k\\)`}, and the task is to determine whether {`\\(T\\)`} has a feedback vertex set of size at most {`\\(k\\)`}.
                </li>
                <li>
                    We give a new algorithm for Feedback Vertex Set in Tournaments. The running time of our algorithm is upper bounded by {`\\(O(1.618^k + n^{O(1)})\\)`} and by {`\\(O(1.46^n)\\)`}.
                </li>
                <li>
                    Thus our algorithm simultaneously improves over the fastest known parameterized algorithm for the problem by Dom et al. running in time {`\\(O(2^kk^{O(1)} + n^{O(1)})\\)`}, and the fastest known exact exponential time algorithm by Gaspers and Mnich with running time {`\\(O(1.674^n)\\)`}.
                </li>
                <li>
                    On the way to prove our main result we prove a new partitioning theorem for undirected graphs.
                </li>
                <li>
                    In particular we show that the vertices of any undirected {`\\(m\\)`}-edge graph of maximum degree {`\\(d\\)`} can be colored white or black in such a way that for each of the two colors, the number of edges with both endpoints of that color is between {`\\(\\frac{m}{4}-\\frac{d}{2}\\)`} and {`\\(\\frac{m}{4}+\\frac{d}{2}\\)`}.
                </li>
            </ul>
        </Content>
    </Card> -->
    <Card>
        <Content>
            <h6 id="introduction">Introduction</h6>
            <ul>
                <li><strong>Tournaments:</strong> A directed graph where every pair of vertices is connected by a single directed edge.</li>
                <li><strong>Feedback Vertex Set (FVS):</strong> A set of vertices whose removal results in an acyclic graph.</li>
                <li><strong>Problem Statement:</strong> Given a tournament {`\\( T \\)`} and an integer {`\\( k \\)`}, determine if there exists a feedback vertex set of size at most {`\\( k \\)`}.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="previous">Previous Work</h6>
            <ul>
                <li><strong>Parameterized Algorithms:</strong> Dom et al. developed an algorithm with a running time of {`\\( O(2^k \\cdot k^{O(1)} + n^{O(1)}) \\)`}.</li>
                <li><strong>Exact Exponential Time Algorithms:</strong> Gaspers and Mnich proposed an algorithm with a running time of {`\\( O(1.674^n) \\)`}.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="contributions">Contributions</h6>
            <ul>
                <li><strong>New Algorithm:</strong> Improved running times:
                    <ul>
                        <li><strong>Parameterized Running Time:</strong> {`\\( O(1.618^k + n^{O(1)}) \\)`}</li>
                        <li><strong>Exact Exponential Running Time:</strong> {`\\( O(1.46^n) \\)`}</li>
                    </ul>
                </li>
                <li><strong>Partitioning Theorem:</strong> A novel theorem for undirected graphs states that vertices can be colored in two colors such that each color class has between {`\\( m/4 - d/2 \\)`} and {`\\( m/4 + d/4 \\)`} edges.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="methods">Methodology</h6>
            <ul>
                <li><strong>Kernelization:</strong> Reduce the tournament size to {`\\( O(k^3) \\)`}.</li>
                <li><strong>Set Selection:</strong> Identify a set {`\\( M \\)`} of vertices, disjoint from the solution {`\\( S \\)`}, that is evenly distributed in the topological ordering of {`\\( T - S \\)`}.</li>
                <li><strong>Topological Ordering:</strong> Utilize {`\\( M \\)`} to infer a preliminary topological ordering of {`\\( T - S \\)`}, assigning tentative positions to vertices.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="significance">Significance</h6>
            <ul>
                <li><strong>Efficiency:</strong> Outperforms previous algorithms in both parameterized and exact exponential time contexts.</li>
                <li><strong>Theoretical Impact:</strong> The partitioning theorem may have broader applications in graph theory and algorithm design.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="conclusion">Conclusion</h6>
            <p>This work advances the study of the Feedback Vertex Set problem in tournaments by providing a more efficient algorithm and introducing a useful graph partitioning theorem.</p>

        </Content>
    </Card>
</article>
