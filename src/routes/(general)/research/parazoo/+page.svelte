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
    $currentPath = "Parameterized Zoo";
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
    h5 {
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
    .problem {
        padding: 0.5em;
        background-color: rgba(0, 100, 100, 0.1);
        border-radius: 5px;
        margin: 0.5em;
    }
    .problem strong {
        color: currentColor;
        font-size: 1.1em;
    }
    .problem p {
        display: grid;
        grid-template-columns: 70px 1fr;
        margin: 0.3em;
    }
    .complexity, .kernel {
        margin-top: 1em;
    }
    .complexity p, .kernel p {
        margin: 0.5em;
    }
</style>
<svelte:head>
    <title>Parameterized Zoo</title>
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
        Parameterized Zoo
    </h4>
    <!-- <Paper>
        <span slot="authors">
            Mithilesh Kumar
        </span>
        <span slot="title">
            Parameterized Zoo
        </span>
        <span slot="venue">
            <a href="https://arxiv.org/abs/2411.10710">CoRR abs/2411.10710 (2024)</a>, <a href="https://www.researchgate.net/publication/385864724_Local_Operations_in_Multiparty_Quantum_Systems">10.13140/RG.2.2.10422.51524</a>, 2024
        </span>
    </Paper> -->
    <Card style="background-color: rgba(0, 100, 100, 0.1)">
        <Content>
            <h6>Topics</h6>
            <!-- <ol>
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#previous">Previous Work</a></li>
                <li><a href="#contributions">Contributions</a></li>
                <li><a href="#methods">Methodology</a></li>
                <li><a href="#significance">Significance</a></li>
                <li><a href="#conclusion">Conclusion</a></li>
            </ol> -->
        </Content>
    </Card>
    <h5>Family of Sets</h5>
<!-- d-Hitting Set -->
<Card>
    <Content>
        <h6>Hitting Set</h6>
        <div class="problem">
            <p><strong>Input:</strong> <span>A family of {`\\(\\mathcal{A}\\)`} of sets over a universe \(U\)</span></p>
            <p><strong>Task:</strong> <span>Find \(H\subseteq U\) s.t. for each {`\\(A_i\\in \\mathcal{A}\\)`} \(|H\cap A_i| \gt 0\) </span></p>
        </div>
        <section class="complexity">
            <p><strong>Complexity:</strong></p>
            <p>
                <code>Hitting Set</code> is FPT when parameterized by solution size \(k\) and maximum size \(d\) of each {`\\(A_i\\in \\mathcal{A}\\)`}.
            </p>
        </section>
        <section class="kernel">
            <p><strong>Kernels:</strong></p>
            <p>
                \(d\)-<code>Hitting Set</code> admits a kernel of size \(d!k^d\cdot d^2\) using <em>sunflower lemma</em>.
            </p>
        </section>
    </Content>
</Card>
<!-- Set Splitting -->
<Card>
    <Content>
        <h6>Set Splitting</h6>
        <div class="problem">
            <p><strong>Input:</strong> <span>A family of {`\\(\\mathcal{A}\\)`} of sets over a universe \(U\)</span></p>
            <p><strong>Task:</strong> <span>2-color \(U\) such that maximum number of sets in {`\\(\\mathcal{A}\\)`} contain both colors.</span></p>
        </div>
        <section class="complexity">
            <p><strong>Complexity:</strong></p>
            <p>
                <code>Set Splitting</code> is FPT when parameterized by number of sets \(k\) that split.
            </p>
        </section>
        <section class="kernel">
            <p><strong>Kernels:</strong></p>
            <p>
                It admits a kernel of at most {`\\(|\\mathcal{A}|\\leq 2k\\)`} and \(|U| = O(k^2)\).
            </p>
        </section>
    </Content>
</Card>
    <h5>Undirected Graph</h5>
<!-- Vertex Cover -->
    <Card>
        <Content>
            <h6>Vertex Cover</h6>
            <div class="problem">
                <p><strong>Input:</strong> <span>Graph \(G\)</span></p>
                <p><strong>Task:</strong> <span>Find \(S\subseteq V(G)\) s.t. \(G-S\) has no edges</span></p>
            </div>
            <section class="complexity">
                <p><strong>Complexity:</strong></p>
                <p>
                    <code>Vertex Cover</code> is FPT parameterized by solution size \(k\). The current best known algorithm runs in {`\\(O^*(1.25284^k)\\)`} time.
                </p>
            </section>
            <section class="kernel">
                <p><strong>Kernels:</strong></p>
                <p>
                    <code>Vertex Cover</code> admits a kernel of size \(3k\) vertices using <em>crown decomposition</em> and can be further improved to \(2k\) using linear programming relaxation.
                </p>
            </section>
        </Content>
    </Card>
<!-- Feedback Vertex Set -->
<Card>
    <Content>
        <h6>Feedback Vertex Set</h6>
        <div class="problem">
            <p><strong>Input:</strong> <span>Graph \(G\)</span></p>
            <p><strong>Task:</strong> <span>Find \(S\subseteq V(G)\) s.t. \(G-S\) has no cycles</span></p>
        </div>
        <section class="complexity">
            <p><strong>Complexity:</strong></p>
            <p>
                <code>Feedback Vertex Set</code> is FPT parameterized by solution size \(k\).
            </p>
        </section>
        <section class="kernel">
            <p><strong>Kernels:</strong></p>
            <p>
                <code>Feedback Vertex Set</code> admits a kernel of size \(O(k)\) vertices on regular graphs.
            </p>
        </section>
    </Content>
</Card>
<!-- Dominating Set -->
<Card>
    <Content>
        <h6>Dominating Set</h6>
        <div class="problem">
            <p><strong>Input:</strong> <span>Graph \(G\)</span></p>
            <p><strong>Task:</strong> <span>Find \(S\subseteq V(G)\) s.t. neighborhood of \(S\) is the whole graph</span></p>
        </div>
        <section class="complexity">
            <p><strong>Complexity:</strong></p>
            <p>
                <code>Dominating Set</code> is FPT in graphs that do not contain cycles of length upto 4 parameterized by solution size \(k\). 
            </p>
        </section>
        <!-- <section class="kernel">
            <p><strong>Kernels:</strong></p>
            <p>
                <code>Vertex Cover</code> admits a kernel of size \(3k\) vertices using <em>crown decomposition</em> and can be further improved to \(2k\) using linear programming relaxation.
            </p>
        </section> -->
    </Content>
</Card>
<!-- Vertex Coloring -->
    <Card>
        <Content>
            <h6>Vertex Coloring</h6>
            <div class="problem">
                <p><strong>Input:</strong> <span>Graph \(G,k\)</span></p>
                <p><strong>Task:</strong> <span>Color \(V\) using \(k\) colors s.t. endpoints of each edge has different color.</span></p>
            </div>
            <section class="complexity">
                <p><strong>Complexity:</strong></p>
                <p>
                    <code>Vertex Coloring</code> is <span style="color:tomato">Not FPT</span> parameterized by color size \(k\).
                </p>
            </section>
            <section class="kernel"></section>
            
            <!-- <div style="width:100%;">
                <DataTable style="width: 100%">
                    <Head>
                        <Row>
                            <Cell>Input</Cell>
                            <Cell>Parameter</Cell>
                            <Cell>Constraint</Cell>
                            <Cell>Algorithm</Cell>
                            <Cell>Methods</Cell>
                        </Row>
                    </Head>
                    <Body>
                        <Row>
                            <Cell style="white-space: normal;">Graph \(G\)</Cell>
                            <Cell style="white-space: normal;">Solution size \(k\)</Cell>
                            <Cell style="white-space: normal;">\(|S|\leq k\)</Cell>
                            <Cell style="white-space: normal;">{`\\(O^*(1.25284^k)\\)`}</Cell>
                            <Cell style="white-space: normal;">branching</Cell>
                        </Row>
                    </Body>
                </DataTable>
            </div> -->
        </Content>
    </Card>
<!-- Clique -->
    <Card>
        <Content>
            <h6>Clique</h6>
            <div class="problem">
                <p><strong>Input:</strong> <span>Graph \(G\)</span></p>
                <p><strong>Task:</strong> <span>Find a largest clique</span></p>
            </div>
            <section class="complexity">
                <p><strong>Complexity:</strong></p>
                <p>
                    <code>Clique</code> is <span style="color:tomato">Not FPT, W[1]-hard</span> parameterized by solution size \(k\). When parameterized by maximum degree \(d\), it becomes FPT with running time {`\\(O(2^d\\cdot d^2\\cdot n)\\)`}.
                </p>
            </section>
            <section class="kernel"></section>
        </Content>
    </Card>
    <!-- Edge Clique Cover -->
<Card>
    <Content>
        <h6>Edge Clique Cover</h6>
        <div class="problem">
            <p><strong>Input:</strong> <span>Graph \(G\)</span></p>
            <p><strong>Task:</strong> <span>Find minimum number of cliques such that each edge is part of at least one clique.</span></p>
        </div>
        <section class="complexity">
            <p><strong>Complexity:</strong></p>
            <p>
                <code>Edge Clique Cover</code> is FPT parameterized by solution size \(k\).
            </p>
        </section>
        <section class="kernel">
            <p><strong>Kernels:</strong></p>
            <p>
                Simple reduction rules imply a \(O(2^k)\) kernel for <code>Feedback Arc Set in Tournaments</code>.
            </p>
        </section>
    </Content>
</Card>
<!-- Cluster Editing -->
<Card>
    <Content>
        <h6>Cluster Editing</h6>
        <p>
            <strong>Cluster Graph:</strong> Every connected component is a clique. Forbidden subgraph: <em>induced path on three vertices</em>
        </p>
        <div class="problem">
            <p><strong>Input:</strong> <span>Graph \(G\)</span></p>
            <p><strong>Task:</strong> <span>Edit (add or remove) minimum number of edges such that graph becomes a cluster graph.</span></p>
        </div>
        <section class="complexity">
            <p><strong>Complexity:</strong></p>
            <p>
                <code>Cluster Editing</code> is FPT parameterized by number of lines \(k\) to satisfy.
            </p>
        </section>
        <section class="kernel">
            <p><strong>Kernels:</strong></p>
            <p>
                It admits a kernel with at most \(O(k^2)\) vertices.
            </p>
        </section>
    </Content>
</Card>
    <h5>Directed Graph</h5>
<!-- Feedback Arc Set -->
<Card>
    <Content>
        <h6>Feedback Arc Set</h6>
        <div class="problem">
            <p><strong>Input:</strong> <span>Directed Graph \(G\)</span></p>
            <p><strong>Task:</strong> <span>Reverse edges to make \(G\) acyclic.</span></p>
        </div>
        <section class="complexity">
            <p><strong>Complexity:</strong></p>
            <p>
                <code>Feedback Arc Set in Tournaments</code> is FPT parameterized by solution size \(k\).
            </p>
        </section>
        <section class="kernel">
            <p><strong>Kernels:</strong></p>
            <p>
                Simple reduction rules imply a \(O(k^2)\) kernel for <code>Feedback Arc Set in Tournaments</code>.
            </p>
        </section>
    </Content>
</Card>
    <h5>Formula</h5>
<!-- Maximum Satisfiability -->
<Card>
    <Content>
        <h6>Maximum Satisfiability</h6>
        <div class="problem">
            <p><strong>Input:</strong> <span>CNF formula \(\varphi\)</span></p>
            <p><strong>Task:</strong> <span>Satisfy maximum number of clauses.</span></p>
        </div>
        <section class="complexity">
            <p><strong>Complexity:</strong></p>
            <p>
                <code>Maximum Satisfiability</code> is FPT parameterized by number of clauses \(k\) to satisfy.
            </p>
        </section>
        <section class="kernel">
            <p><strong>Kernels:</strong></p>
            <p>
                It admits a kernel with at most \(k\) variables and \(2k\) clauses using <em>crown decomposition</em>.
            </p>
        </section>
    </Content>
</Card>
    <h5>Geometry</h5>
<!-- Point Line Cover -->
<Card>
    <Content>
        <h6>Point Line Cover</h6>
        <div class="problem">
            <p><strong>Input:</strong> <span>\(n\) points in plane</span></p>
            <p><strong>Task:</strong> <span>Find minimum number of lines containing all points</span></p>
        </div>
        <section class="complexity">
            <p><strong>Complexity:</strong></p>
            <p>
                <code>Point Line Cover</code> is FPT parameterized by number of lines \(k\) to satisfy.
            </p>
        </section>
        <section class="kernel">
            <p><strong>Kernels:</strong></p>
            <p>
                It admits a kernel with at most \(O(k^2)\) points.
            </p>
        </section>
    </Content>
</Card>

</article>
