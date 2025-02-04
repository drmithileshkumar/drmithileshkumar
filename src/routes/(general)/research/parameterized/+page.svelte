<script lang="ts">
    // @ts-nocheck
    import Highlight, { LineNumbers } from "svelte-highlight";
    import javascript from "svelte-highlight/languages/javascript";
    import xml from "svelte-highlight/languages/xml";
    import css from "svelte-highlight/languages/css";
    import github from "svelte-highlight/styles/github";
    import githubDark from "svelte-highlight/styles/github-dark";
    import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

    import { typeset } from "$lib/shared/typeset";
    import Link from '$lib/ui/Link.svelte';
    import {page} from '$app/stores';
    import {onMount} from 'svelte';
    import Card, { Content, Actions } from "@smui/card";
    import Button from "@smui/button";
    import Ripple from "@smui/ripple";
    import NavList from '$lib/components/NavList.svelte'
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores";
    import { contents, contentNav } from "$lib/pages/research/content";
    import Pathlist from "$lib/components/Pathlist.svelte";
    import CourseNavigation from "$lib/components/CourseNavigation.svelte";
	
    $navList = contents;
    $currentPath = "Parameterized algorithms";
    // $darkMode = false;
    // onMount(() => {
    //     MathJax.typeset();
    // });
    let code1=`<!--Inline CSS-->
<p style="color: tomato;">I'm tomato</p>`
    let code2=`<head>
    <!---CSS from external file-->
    <link rel="stylesheet" href="/app.css"> 
    <!--Document level CSS-->
    <style>
    /* set text color of p elements to tomato */
        p {
            color: tomato;
        }
    </style>
</head>`
    let code3 = `selector1 {
    property1: value1;
    property2: value2;
}
selector2 {
    property3: value3;
    property4: value4;
}`
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
    h2, h3, h4, h5 {
        margin: 0.5em 0;
    }
    h5 {
        font-size: 1.1em;
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
    }
    .question {
        cursor: pointer;
        padding: 0.3em;
    }
</style>
<svelte:head>
    <title>Algorithms</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/algorithms/sorting" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
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
        Parameterized Algorithms
    </h4>
    <Card style="background-color: rgba(0, 100, 100, 0.1">
        <Content>
            <h5>Contents</h5>
            <NavList name="{$navList[0].topics[0].name}" url="{$navList[0].topics[0].url}" topics={$navList[0].topics[0].topics} expanded={false} />
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 class="problem">Parameterized problem</h6>
            <p>
                <strong>Parameterized Problem:</strong> A <em>parameterized problem</em> is a language {`\\(L\\subseteq \\Sigma^*\\times \\mathbb{N}\\)`}, where \(\Sigma\) is a fixed, finite alphabet. For an instance {`\\((x, k)\\in \\Sigma^*\\times \\mathbb{N}\\)`}, \(k\) is called the <em>parameter</em>.
            </p>
            <p>
                <strong>Examples:</strong>
            </p>
            <ul>
                <li>Vertex cover problem parameterized by solution size \(k\): \((G,k)\)</li>
                <li>Clique problem parameterized by solution size \(k\): \((G,k)\)</li>
                <li>CNF-SAT problem parameterized by number of variables \(k\): \((\varphi, k)\)</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 class="fpt">Fixed Parameter Tractability (FPT)</h6>
            <p>
                A parameterized problem is called FPT if there exists an algorithm {`\\(\\mathcal{A}\\)`}, a computable function {`\\(f:\\mathbb{N}\\to\\mathbb{N}\\)`}, and a constant \(c\) such that, given {`\\((x, k)\\in \\Sigma^*\\times \\mathbb{N}\\)`}, the algorithm {`\\(\\mathcal{A}\\)`} correctly decides whether \((x, k)\in L\) in time bounded by \(f(k)\cdot |(x,k)|^c\)
            </p>
            <p>
                <strong>Examples:</strong>
            </p>
            <ul>
                <li>Vertex cover parameterized by solution size can be solved in {`\\(O(1.25284^k\\cdot n^{O(1)})\\)`} [Harris, Narayanaswamy (2024)]</li>
                <li>
                    Feedback vertex set can be solved in {`\\(2.7^k\\cdot n^{O(1)}\\)`} time [Li, Nederlof (2020)].
                </li>
                <li>
                    Directed feedback vertex set can be solved in {`\\(O(k!2^{o(k)}(n + m))\\)`} time [Xiong, Xiao (2025)].
                </li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 class="W">Fixed Parameter Intractability (W-heirarchy)</h6>
            <p>Not all parameterized problems are known to admit FPT algorithms. The layers of difficulties are captured by <strong>W-heirarchy</strong> which is defined in terms of number of <em>large</em> input nodes along a path in Boolean circuit of the corresponding problem. Instead of giving the formal definition, it is helpful to know canonical problems in each class. Here the completeness is defined under FPT-reductions, i.e. the reduction algorithm is allowed to be FPT.</p>
            <strong>Canonical problems:</strong>
            <ul>
                <li>Clique, Independent set is \(W[1]\)-complete.</li>
                <li>Set Cover, Hitting Set, Dominating Set, Connected Dominating Set are \(W[2]\)-complete.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 class="techniques">Common techniques</h6>
            <p>There is a long list of techniques deployed in inventing parameterized algorithms (FPT or more). Some of them are as follows:</p>
            <ul>
                <li><strong>Branching</strong>: identify a forbidden structure and branch in possible ways the solution hits it.</li>
                <li><strong>Kernelization</strong>: identify parts that are either unnecessary or has to be in solution, remove them.</li>
                <li><strong>Iterative compression</strong>: find a larger solution to a part of the graph, compress this solution, repeat till the part is the whole graph.</li>
                <li><strong>Color coding</strong>: color vertices using \(k\) colors uniformly at random such that with high probability the solution is \(k\)-colored</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 class="bound">Lower bounds</h6>
            <p>A lot of lower bounding techniques are based on following conjectures:</p>
            <strong>Exponential-Time Hypothesis</strong>
            <p>
                There exists a constant \(\alpha \gt 0\) such that CNF-SAT on \(n\) variables and \(m\) clauses can not be solved in time {`\\(O(m2^{\\alpha n})\\)`} by a (classical) Turing machine.
            </p>
            <strong>Strong Exponential-Time Hypothesis</strong>
            <p>
                There does not exist \(\delta \gt 0\) such that CNF-SAT on \(n\) variables and \(m\) clauses can be solved in {`\\(O(m2^{n(1-\\delta)})\\)`} time by a (classical) Turing machine.
            </p>
            <strong>Usages:</strong>
            <ul>
                <li>3-SAT cannot be solved in {`\\(2^{o(n + m)}\\)`}</li>
                <li>Problems like Vertex Cover, Dominating Set, Feedback Vertex Set on planar graphs can not be solved in {`\\(O^*(2^{o(\\sqrt{k})})\\)`} time.</li>
                <li>Closest String problem can not be solved in {`\\(O^*(2^{o(k\\log k)}\\)`} where \(k\) is the maximum distance of the solution to each given string.</li>
                <li>Hitting Set can not be solved in {`\\(O^*((2-\\epsilon)^n)\\)`} time for any \(\epsilon \gt 0\) where \(n\) is the size of the universe.</li>
                <li>Dominating Set can not be solved in time {`\\(f(k)\\cdot n^{o(k)}\\)`} time.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 class="references">References</h6>
            <p>For more details on Parameterized algorithms and complexity refer to following books:</p>
            <ul>
                <li><a href="https://link.springer.com/book/10.1007/978-3-319-21275-3">Parameterized Algorithms</a></li>
                <li><a href="https://link.springer.com/book/10.1007/978-1-4612-0515-9">Parameterized Complexity</a></li>
                <li><a href="https://www.cambridge.org/core/books/kernelization/36F327A8BB97CB6BBEA564368BF1AD4A">Kernelization</a></li>
            </ul>
        </Content>
    </Card>
</article>
