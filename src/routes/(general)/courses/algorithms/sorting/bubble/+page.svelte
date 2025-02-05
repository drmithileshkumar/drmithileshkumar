<script lang="ts">
    // @ts-nocheck
    import Highlight, { LineNumbers } from "svelte-highlight";
    import javascript from "svelte-highlight/languages/javascript";
    import xml from "svelte-highlight/languages/xml";
    import css from "svelte-highlight/languages/css";
    import github from "svelte-highlight/styles/github";
    import githubDark from "svelte-highlight/styles/github-dark";
    import { tileGrid } from "$lib/utils/common/tile";
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
    import { contents, contentNav } from "$lib/pages/courses/algorithms/content";
    import { typeset } from '$lib/shared/typeset';
    import Pathlist from "$lib/components/Pathlist.svelte";
    import CourseNavigation from "$lib/components/CourseNavigation.svelte";

    import Bubble from "$lib/pages/courses/algorithms/Bubble.svelte";

    $navList = contents;
    $currentPath = "Bubble Sort";
    
    
    let jsBubble = `function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        n--; // Optimized by reducing the range of comparison
    } while (swapped);

    return arr;
}

// Example usage:
let numbers = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(numbers));
`
    let jsPseudo = `Procedure BubbleSort(array):
    1. Set the length of the array as n.
    2. Repeat the following steps until no swaps occur:
        a. Set swapped to false (to track if any swaps happen in this pass).
        b. For each element from the first to the second-last:
            i. If the current element is greater than the next one:
                - Swap the two elements.
                - Set swapped to true (indicating that a swap occurred).
        c. Reduce n by 1, since the largest element has bubbled to its correct position.
    3. When no swaps occur in a full pass, the array is sorted.
    4. Return the sorted array.`
    
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
        text-decoration: none;
    }
    .question {
        cursor: pointer;
        padding: 0.3em;
    }
    .cell {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid teal;
        height: auto;
    }
    .grid {
        display: grid;
        gap: 0.1em;
        height: 300px;
        width: 300px;
        border: 1px solid gray;
        padding: 0.1em;
        margin: auto;
    }
</style>
<svelte:head>
    <title>Algorithms</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/layout" />
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
        Bubble Sort
    </h4>
    <Card style="background-color: rgba(0, 100, 100, 0.1">
        <Content>
            <h6>Topics</h6>
            <ol>
                <li><a href="#description">Description</a></li>
                <li><a href="#visualization">Visualization</a></li>
                <li><a href="#pseudo">Pseudo code</a></li>
                <li><a href="#analysis">Analysis</a></li>
                <li><a href="#javascript">Javascript code</a></li>
                <li><a href="#questions">Questions</a></li>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="description">Description</h6>
            <p>
                In bubble sort, the algorithm goes over the <em>entire</em> array multiple times till it is sorted. In each pass, it compares {`\\(a_i\\)`} with {`\\(a_{i + 1}\\)`}. If {`\\(a_i\\gt a_{i + 1}\\)`}, then they are swapped. Typically, this algorithm requires {`\\(O(n^2)\\)`} comparisons, but it is stable in the sense that relative position of equal elements are not changed.
            </p>
            <!-- <DataTable style="width:100%">
                <Head>
                    <Row>
                        <Cell>Propert value</Cell>
                        <Cell>Description</Cell>
                    </Row>
                </Head>
                <Body>
                    <Row>
                        <Cell><code>block</code></Cell>
                        <Cell style="white-space:normal;">line breaks before and after the element</Cell>
                    </Row>
                    <Row>
                        <Cell><code>inline</code></Cell>
                        <Cell style="white-space:normal;">keeps the element in the same line</Cell>
                    </Row>
                    <Row>
                        <Cell><code>none</code></Cell>
                        <Cell style="white-space:normal;">removes the element from the DOM</Cell>
                    </Row>
                    <Row>
                        <Cell><code>flex</code></Cell>
                        <Cell style="white-space:normal;">The element behaves like a block-level element and lays out its content according to the flexbox model.</Cell>
                    </Row>
                    <Row>
                        <Cell><code>grid</code></Cell>
                        <Cell style="white-space:normal;">The element behaves like a block-level element and lays out its content according to the grid model.</Cell>
                    </Row>
                </Body>
            </DataTable> -->
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="visualization">Visualization</h6>
            <Bubble />
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="pseudo">Pseudo code</h6>
            <Highlight language={xml} code={jsPseudo} let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="analysis">Analysis</h6>
            <p>
                The outer loop runs {`\\(n\\)`} times. In the worst case, at the {`\\(i\\)`}th run, the algorithm makes {`\\(i\\)`} comparisons. This gives a total comparisons of {`\\[n + (n-1) + \\cdots + 1 = \\frac{n(n - 1)}{2}\\]`}
            </p>
            <DataTable style="width: 100%">
                <Head>
                    <Row>
                        <Cell>Aspect</Cell>
                        <Cell>Complexity</Cell>
                        <Cell>Description</Cell>
                    </Row>
                </Head>
                <Body>
                    <Row>
                        <Cell>Worst-case time complexity</Cell>
                        <Cell style="white-space: normal;">{`\\(O(n^2)\\)`}</Cell>
                        <Cell style="white-space: normal;">almost reverse order</Cell>
                    </Row>
                    <Row>
                        <Cell>Best-case time complexity</Cell>
                        <Cell style="white-space: normal;">{`\\(O(n)\\)`}</Cell>
                        <Cell style="white-space: normal;">almost sorted</Cell>
                    </Row>
                    <Row>
                        <Cell>Average-case time complexity</Cell>
                        <Cell style="white-space: normal;">{`\\(O(n^2)\\)`}</Cell>
                        <Cell style="white-space: normal;">assume random sample</Cell>
                    </Row>
                    <Row>
                        <Cell>Space complexity</Cell>
                        <Cell style="white-space: normal;">{`\\(O(1)\\)`}</Cell>
                        <Cell style="white-space: normal;">in-place algorithm</Cell>
                    </Row>
                    <Row>
                        <Cell>Stable?</Cell>
                        <Cell style="white-space: normal;">Yes</Cell>
                        <Cell style="white-space: normal;">Preserves the order of equal elements</Cell>
                    </Row>
                    
                    <Row>
                        <Cell>Adaptive?</Cell>
                        <Cell style="white-space: normal;">Yes</Cell>
                        <Cell style="white-space: normal;">with early exit condition</Cell>
                    </Row>
                </Body>
            </DataTable>
        </Content>
    </Card>
    <h6 id="javascript">Javascript code</h6>
    <WebPractice htmlContent={'Click on the run button to show console output.'} cssContent={' '} jsContent={jsBubble} selected={'JS'} showConsole />
    
    <!-- <Card>
        <Content>
            <Highlight language={xml} code={code2} let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight>
        </Content>
    </Card> -->
    <h6 id="questions">Questions</h6>
    
    <Card>
        <Content>
            <div class="question">When can the algorithm terminate early? Can this algorithm be parallelized?</div>
        </Content>
    </Card>
</article>
