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
    $currentPath = "Redix Sort";
    
    
    let jsBubble = `function getDigit(num, place) {
    return Math.floor(num / Math.pow(10, place)) % 10;
}

function countSort(arr, place) {
    let output = new Array(arr.length).fill(0);
    let count = new Array(10).fill(0);

    // Count occurrences of each digit
    for (let num of arr) {
        let digit = getDigit(num, place);
        count[digit]++;
    }

    // Update count[i] to store actual position of this digit
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array using stable sort
    for (let i = arr.length - 1; i >= 0; i--) {
        let digit = getDigit(arr[i], place);
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    // Copy the sorted values back to arr
    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }
}

function radixSort(arr) {
    if (arr.length === 0) return arr;

    let maxNum = Math.max(...arr);
    let numDigits = Math.floor(Math.log10(maxNum)) + 1;

    for (let i = 0; i < numDigits; i++) {
        countSort(arr, i);
    }

    return arr;
}

// Example Usage:
let numbers = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(numbers));  // Output: [2, 24, 45, 66, 75, 90, 170, 802]`
    let jsPseudo = `Procedure RedixSort(array):
    1. Find the maximum number in the array to determine the number of digits.
    2. Start from the least significant digit (LSD) and move to the most significant digit (MSD).
    3. For each digit place:
    a. Use a stable sorting algorithm (like Counting Sort) to sort numbers based on the current digit.
    b. Reassemble the numbers in sorted order.
    4. Repeat until all digits have been processed.
    5. The array is now sorted.`
    
</script>
<style>
    article {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        max-width: 750px;
        margin: auto;
        width: 90%;
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
        Redix Sort
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
                Radix Sort is a non-comparative sorting algorithm that sorts numbers by processing individual digits from the least significant to the most significant (LSD Radix Sort) or vice versa (MSD Radix Sort). It works best for integer keys or fixed-length strings and is commonly used when the number of digits (or character width) is significantly smaller than the number of elements.
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="visualization">Visualization</h6>
            <!-- <Bubble /> -->
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
                Let \(k\) be the number of digits in the largest number. If \(k\) is small, Radix Sort is practically linear \(O(n)\). If \(k\) is large \(O(\log n)\), it approaches \(O(n\log n)\).
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
                        <Cell style="white-space: normal;">{`\\(O(nk)\\)`}</Cell>
                        <Cell style="white-space: normal;">very large numbers</Cell>
                    </Row>
                    <Row>
                        <Cell>Best-case time complexity</Cell>
                        <Cell style="white-space: normal;">{`\\(O(nk)\\)`}</Cell>
                        <Cell style="white-space: normal;">uniformly distributed digits</Cell>
                    </Row>
                    <Row>
                        <Cell>Average-case time complexity</Cell>
                        <Cell style="white-space: normal;">{`\\(O(nk)\\)`}</Cell>
                        <Cell style="white-space: normal;">assume random distribution</Cell>
                    </Row>
                    <Row>
                        <Cell>Space complexity</Cell>
                        <Cell style="white-space: normal;">{`\\(O(n)\\)`}</Cell>
                        <Cell style="white-space: normal;">for buckets</Cell>
                    </Row>
                    <Row>
                        <Cell>Stable?</Cell>
                        <Cell style="white-space: normal;">Yes</Cell>
                        <Cell style="white-space: normal;">Use Counting Sort</Cell>
                    </Row>
                    
                    <Row>
                        <Cell>Adaptive?</Cell>
                        <Cell style="white-space: normal;">No</Cell>
                        <Cell style="white-space: normal;">always processes all digits, even if nearly sorted</Cell>
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
