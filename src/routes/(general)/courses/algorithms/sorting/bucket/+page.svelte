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
    $currentPath = "Bucket Sort";
    
    
    let jsBubble = `function bucketSort(arr, numBuckets = 10) {
    if (arr.length === 0) return arr;

    // Find min and max values
    let minValue = Math.min(...arr);
    let maxValue = Math.max(...arr);
    let bucketRange = (maxValue - minValue) / numBuckets;

    // Initialize buckets
    let buckets = Array.from({ length: numBuckets }, () => []);

    // Distribute elements into buckets
    for (let num of arr) {
        let bucketIndex = Math.floor((num - minValue) / bucketRange);
        if (bucketIndex === numBuckets) bucketIndex--; // Edge case: max value
        buckets[bucketIndex].push(num);
    }

    // Sort each bucket and concatenate
    return buckets.reduce((sortedArray, bucket) => {
        return sortedArray.concat(bucket.sort((a, b) => a - b)); // Using built-in sort
    }, []);
}

// Example Usage:
let numbers = [0.42, 0.32, 0.23, 0.52, 0.25, 0.47, 0.51];
console.log(bucketSort(numbers));
`
    let jsPseudo = `BUCKET_SORT(array, numBuckets):
    1. Create 'numBuckets' empty buckets (lists).
    2. Find the maximum and minimum values in the array.
    3. Define a function to map an element to a bucket based on its value.
    4. Iterate through the array:
        - Place each element in its appropriate bucket.
    5. Sort each bucket (using Insertion Sort or another sorting algorithm).
    6. Concatenate all sorted buckets to produce the final sorted array.`
    
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
        Bucket Sort
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
                Bucket Sort is a distribution-based sorting algorithm that divides the input into several "buckets" and then sorts each bucket individually. Usually the number of buckets \(k = O(n)\), i.e. each bucket is <em>supposed</em> be of size \(O(1)\). It is particularly efficient for uniformly distributed floating-point numbers in a known range (e.g., [0,1)).
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
                In the best-case, all buckets are of size \(O(1)\) which implies they can be sorted in \(O(1)\) time. Concatenating buckets takes \(O(n)\) time. This implies a running time of \(O(n + k)\). In the average case, the average size of each bucket is \(n/k\). Even when insertion sort is used, sorting \(k\) buckets takes \(k\cdot O((n/k)^2 = O(n^2/k) = O(n)\) time. In the worst-case, the distribution is skewed leading to bucket size \(O(n)\), hence running time of \(O(n^2)\). The buckets need to be placed on separate work memory of \(O(n)\).
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
                        <Cell style="white-space: normal;">if all elements land in one bucket</Cell>
                    </Row>
                    <Row>
                        <Cell>Best-case time complexity</Cell>
                        <Cell style="white-space: normal;">{`\\(O(n)\\)`}</Cell>
                        <Cell style="white-space: normal;">when data is evenly distributed, and buckets are small</Cell>
                    </Row>
                    <Row>
                        <Cell>Average-case time complexity</Cell>
                        <Cell style="white-space: normal;">{`\\(O(n)\\)`}</Cell>
                        <Cell style="white-space: normal;">assume random sample</Cell>
                    </Row>
                    <Row>
                        <Cell>Space complexity</Cell>
                        <Cell style="white-space: normal;">{`\\(O(n)\\)`}</Cell>
                        <Cell style="white-space: normal;">for storing buckets separately</Cell>
                    </Row>
                    <Row>
                        <Cell>Stable?</Cell>
                        <Cell style="white-space: normal;">Yes</Cell>
                        <Cell style="white-space: normal;">if individual buckets maintain relative order</Cell>
                    </Row>
                    
                    <Row>
                        <Cell>Adaptive?</Cell>
                        <Cell style="white-space: normal;">No</Cell>
                        <Cell style="white-space: normal;">performs the same number of operations even if nearly sorted</Cell>
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
