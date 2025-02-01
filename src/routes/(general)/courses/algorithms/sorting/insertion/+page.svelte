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

    import Insertion from "$lib/pages/courses/algorithms/Insertion.svelte";

    $navList = contents;
    $currentPath = "Insertion Sort";
    $darkMode = false;
    
    let jsInsertion = `function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // Pick the current element to be inserted
        let j = i - 1;

        // Shift elements that are greater than key to the right
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert key at the correct position
        arr[j + 1] = key;
    }
    return arr;
}

// Example usage:
let numbers = [5, 3, 8, 4, 2];
console.log(insertionSort(numbers)); // Output: [2, 3, 4, 5, 8]

`
    let jsPseudo = `Procedure InsertionSort(array):
    1. Start with an array of numbers that need to be sorted.
    2. Consider the first element as already sorted.
    3. For each remaining element in the array:
        a. Pick the next element in the list (this is the "key" element to be inserted).
        b. Compare it with the elements in the sorted portion of the array (the elements before it).
        c. If the key is smaller than the previous elements:
            i. Shift those larger elements one position to the right to make space.
        d. Place the key in its correct position in the sorted portion.
    4. Repeat this process for all elements until the entire array is sorted.
    5. End the algorithm when all elements are in order.`
    
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
        Insertion Sort
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
                In insertion sort, the algorithm assumes that an initial part of the array is sorted. (At least the 1st element is sorted). With this assumption, a single loop starts with the 2nd element and <em>inserts</em> {`\\(a_i\\)`} at <em>right</em> position in the sorted subarray {`\\(A[0 : i- 1]\\)`}. Insertion sort is stable as well.
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="visualization">Visualization</h6>
            <Insertion />
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
                        <Cell style="white-space: normal;">On average, each element is compared with half of the previous elements.</Cell>
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
    <WebPractice htmlContent={'Click on the run button to show console output.'} cssContent={' '} jsContent={jsInsertion} selected={'JS'} showConsole />
    
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
