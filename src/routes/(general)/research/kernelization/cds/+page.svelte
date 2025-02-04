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
    $currentPath = "Connected Dominating Set";
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
    <title>Connected Dominating Set</title>
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
        Connected Dominating Set
    </h4>
    <Paper>
        <span slot="authors">
            Eduard Eiben, Mithilesh Kumar, Amer E. Mouawad, Fahad Panolan, Sebastian Siebertz
        </span>
        <span slot="title">
            Lossy Kernels for Connected Dominating Set on Sparse Graphs
        </span>
        <span slot="venue">
            <a href="https://epubs.siam.org/doi/10.1137/18M1172508">SIAM J. Discret. Math. 33(3): 1743-1771 (2019)</a>, <a href="https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.STACS.2018.29">STACS 2018: 29:1-29:15</a>, <a href="https://arxiv.org/abs/1706.09339">CoRR abs/1706.09339 (2017)</a>
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
                <li><strong>Connected Dominating Set (CDS):</strong> A subset {`\\( D \\)`} of vertices in a graph {`\\( G \\)`} such that every vertex not in {`\\( D \\)`} is adjacent to at least one vertex in {`\\( D \\)`}, and the subgraph induced by {`\\( D \\)`} is connected.</li>
                <li><strong>Problem Statement:</strong> Given a graph {`\\( G \\)`} and an integer {`\\( k \\)`}, determine whether there exists a connected dominating set of size at most {`\\( k \\)`}.</li>
                <li><strong>Kernelization:</strong> A preprocessing technique that reduces the problem instance to a smaller instance (called a kernel) in polynomial time, while preserving the answer.</li>
                <li><strong>Lossy Kernelization:</strong> An extension of kernelization that allows for approximate solutions, aiming to balance between instance size reduction and solution accuracy.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Previous Work</h6>
            <ul>
                <li><strong>Kernelization Complexity:</strong> It is known that the Connected Dominating Set problem does not admit a polynomial kernel on 2-degenerate graphs and graphs of bounded expansion, unless NP ⊆ coNP/poly.</li>
                <li><strong>Approximate Kernelization:</strong> The framework of lossy kernelization was introduced to explore approximate kernels for problems where exact polynomial kernels are unlikely to exist.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Contributions</h6>
            <ul>
                <li><strong>Approximate Kernels for CDS:</strong> The authors developed polynomial-size {`\\(\\alpha\\)`}-approximate kernels for the Connected Dominating Set problem on various classes of sparse graphs, including:
                    <ul>
                        <li>Biclique-free graphs</li>
                        <li>Graphs of bounded expansion</li>
                        <li>Nowhere dense classes</li>
                    </ul>
                </li>
                <li><strong>Conditional Lower Bounds:</strong> They demonstrated that for any class {`\\( C \\)`} that is somewhere dense and closed under taking subgraphs, there does not exist an {`\\(\\alpha\\)`}-approximate bi-kernel for the (Connected) Distance-{`\\( r \\)`} Dominating Set problem on {`\\( C \\)`} for any {`\\(\\alpha > 1\\)`}, assuming the Gap Exponential Time Hypothesis.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Methodology</h6>
            <ul>
                <li><strong>Lossy Kernelization Framework:</strong> Applied the framework of lossy kernelization to develop approximate kernels for the Connected Dominating Set problem.</li>
                <li><strong>Graph Classes Analysis:</strong> Analyzed the properties of various sparse graph classes to design efficient reduction rules and ensure the existence of polynomial-size approximate kernels.</li>
                <li><strong>Complexity Assumptions:</strong> Utilized complexity assumptions, such as the Gap Exponential Time Hypothesis, to establish conditional lower bounds for the existence of approximate kernels in certain graph classes.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Significance</h6>
            <ul>
                <li><strong>Advancement in Kernelization:</strong> This work extends the applicability of kernelization techniques to approximate solutions, providing efficient preprocessing methods for problems where exact kernels are unlikely to exist.</li>
                <li><strong>Impact on Sparse Graphs:</strong> The results offer practical preprocessing tools for the Connected Dominating Set problem in various classes of sparse graphs, which are common in real-world applications.</li>
                <li><strong>Theoretical Insights:</strong> The conditional lower bounds contribute to the understanding of the limitations of approximate kernelization in certain graph classes.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Conclusion</h6>
            <p>This study presents polynomial-size approximate kernels for the Connected Dominating Set problem on several classes of sparse graphs, advancing the field of parameterized complexity and offering practical preprocessing techniques for complex graph problems.</p>
        </Content>
    </Card>
    
    
</article>
