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

    import Quick from "$lib/pages/courses/algorithms/Quick.svelte";

    $navList = contents;
    $currentPath = "Quick Sort";
    
    
    let jsQuick = `function quickSort(arr) {
    if (arr.length <= 1) return arr; // Base case: a single element is already sorted

    let pivot = arr[Math.floor(arr.length / 2)]; // Choose pivot (middle element)
    let left = [], right = [], equal = [];

    // Partition the array into left, equal, and right
    for (let num of arr) {
        if (num < pivot) left.push(num);
        else if (num > pivot) right.push(num);
        else equal.push(num);
    }

    // Recursively sort left and right, then concatenate
    return [...quickSort(left), ...equal, ...quickSort(right)];
}

// Example usage:
let numbers = [5, 3, 8, 4, 2];
console.log(quickSort(numbers)); // Output: [2, 3, 4, 5, 8]
`
    let jsPseudo = `Procedure QuickSort(array):
    1. Start with an array that needs to be sorted.
    2. If the array has only one element or is empty, return it (base case).
    3. Pick a "pivot" element from the array.
    4. Partition the array into three parts:
        a. A left subarray with elements smaller than the pivot.
        b. The pivot itself.
        c. A right subarray with elements greater than the pivot.
    5. Recursively apply Quick Sort to the left and right subarrays.
    6. Combine the sorted left subarray, pivot, and sorted right subarray.
    7. End the algorithm when all elements are in order.`
    
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
    .pseudocode {
        font-family:monospace;
        font-size: 1em;
    }
    .pseudocode strong {
        color: rgb(20, 175, 175);
    }
    .pseudocode ul {
        margin: 0;
        border-left: 1px solid;
    }
    .comment {
        color:green;
    }
    .media {
        display: flex;
        align-items: center;
        justify-content: center;
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
        Quick Sort
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
            <div class="media">
                <svg class="SVG Vectorial svelte-p2dk90" width="430" viewBox="19.33336639404297 105.99999237060547 430 165" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g class="Vectorial" transform="translate(0 0) scale(1)"><defs><marker id="Arrow-localImage3-10" refX="0" refY="5" markerWidth="6" markerHeight="6" markerUnits="strokeWidth" orient="auto-start-reverse" viewBox="0 0 10 10" preserveAspectRatio="xMidYMid meet"><path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(0, 0, 0, 1)" stroke="rgba(0, 0, 0, 1)" stroke-width="0" stroke-dasharray="none" opacity="1" filter="none" transform="matrix(1 0 0 1 0 0)"></path></marker></defs><g id="Layer-localImage3-0" class="draggable" fill="none" stroke="none" stroke-width="0" stroke-dasharray="none" vector-effect="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 0 0)">   <rect id="Rect-localImage3-2" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -210.6666259765625 -64)"></rect>           <rect id="Rect-localImage3-3" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -153.99995930989644 -64)"></rect>           <rect id="Rect-localImage3-4" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -97.33329260349274 -64)"></rect>           <rect id="Rect-localImage3-5" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -40.6666259765625 -64)"></rect>           <rect id="Rect-localImage3-6" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 16.000040650367737 -64)"></rect>           <rect id="Rect-localImage3-7" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 72.66670727729797 -64)"></rect>           <rect id="Rect-localImage3-8" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 129.3333740234375 -64)"></rect>               <text id="Text-localImage3-11" class="draggable" x="250" y="250" fill="rgba(0, 0, 0, 1)" font-size="20px" font-weight="400" font-family="Roboto, sans-serif" filter="none" opacity="1" transform="matrix(1 0 0 1 -40 -110.00006103515625)">pivot</text>          <path id="Path-localImage3-12" class="draggable" d="M 178.66667463382157,254.17702042528902 L 77.33336466550827,254.5103944387912" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="url(#Arrow-localImage3-10)" transform="matrix(1 0 0 1 0 0)"></path>           <path id="Path-localImage3-13" class="draggable" d="M 178.66667463382157,254.17702042528902 L 77.33336466550827,254.5103944387912" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="url(#Arrow-localImage3-10)" transform="matrix(-1 0 0 1 476.0000915527344 -1.3333740234375)"></path>           <path id="Path-localImage3-15" class="draggable" d="M 234.66667296489163,146.51039765744196 L 234.33335998654388,172.51039688258157" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="url(#Arrow-localImage3-10)" transform="matrix(1 0 0 1 0 0)"></path>            <text id="Text-localImage3-16" class="draggable" x="234.33336639404297" y="188.49999237060547" fill="rgba(0, 0, 0, 1)" font-size="20px" font-weight="400" font-family="Roboto, sans-serif" filter="none" opacity="1" transform="matrix(1 0 0 1 -19.3333740234375 70)">shift</text>    </g></g></svg>
            </div>
            <p>
                Quick sort is similar to the <em>divide and conquer</em> approach of merge sort. Choose a random element as <em>pivot</em>. <em>Partition</em> the array around the pivot such that elements smaller than the pivot are in one partition and elements larger than the pivot are in another partition. Then sort the partitions recursively. Depending on implementation, this algorithm takes {`\\(O(n\\log n)\\)`} number of comparisons and may not be stable.
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="visualization">Visualization</h6>
            <Quick />
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="pseudo">Pseudo code</h6>
            <div class="pseudocode">
                <span>function <strong>QuickSort</strong>(a):</span>
                <ul>
                    <li>n = a.length</li>
                    <li>if n &lt; 2 return a <span class="comment">//nothing to do here</span></li>
                    <li>left = [], equal = [], right = []</li>
                    <li>pivot = a[n/2] <span class="comment">//animation shows last element as pivot</span></li>
                    <li>for num in a:</li>
                    <ul>
                        <li>if(num &lt; pivot) put num in left</li>
                        <li>else if(num &gt; pivot) put num in right</li>
                        <li>else put num in equal</li>
                    </ul>
                    <li>return <strong>quickSort</strong>(left) + equal + <strong>quickSort</strong>(right)</li>
                </ul>
            </div>
            <!-- <Highlight language={xml} code={jsPseudo} let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight> -->
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="analysis">Analysis</h6>
            <p>
                Let {`\\(T(n)\\)`} represent the time taken by the algorithm.
                In the worst case, the chosen 'pivot' gives a partion of size {`\\(0\\)`}. This leads to {`\\(n - i\\)`} comparisons at the {`\\(i\\)`}th recursive call, i.e. {`\\[T(n) = \\sum (n-i) = \\frac{n(n-1)}{2}\\]`}
                In the best or average case, the partitions are of equal size.
                 At each recursive step, we have two quick sort instances of half size and finding the pivot position requires {`\\(O(n)\\)`} time. This leads to the following recurrence relation:
                {`\\[
                \\begin{align}
                T(n) &= 2  T\\left(\\frac{n}{2}\\right ) + O(n)\\\\
                     &= O(n\\log n)
                \\end{align}
                \\]`}
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
                        <Cell>Best-case time complexity</Cell>
                        <Cell style="white-space: normal;">{`\\(O(n\\log n)\\)`}</Cell>
                        <Cell style="white-space: normal;">Balanced partitioning (each split is even).</Cell>
                    </Row>
                    <Row>
                        <Cell>Worst-case time complexity</Cell>
                        <Cell style="white-space: normal;">{`\\(O(n^2)\\)`}</Cell>
                        <Cell style="white-space: normal;">Happens when the pivot is always the smallest or largest element, leading to unbalanced partitions.</Cell>
                    </Row>
                    <Row>
                        <Cell>Average-case time complexity</Cell>
                        <Cell style="white-space: normal;">{`\\(O(n\\log n)\\)`}</Cell>
                        <Cell style="white-space: normal;">On average, partitioning happens in a balanced way.</Cell>
                    </Row>
                    <Row>
                        <Cell>Space complexity</Cell>
                        <Cell style="white-space: normal;">{`\\(O(\\log n)\\)`}</Cell>
                        <Cell style="white-space: normal;">in-place, space for recursize calls</Cell>
                    </Row>
                    <Row>
                        <Cell>Stable?</Cell>
                        <Cell style="white-space: normal;">No</Cell>
                        <Cell style="white-space: normal;">May not maintain the relative order of duplicate elements.</Cell>
                    </Row>
                    
                    <Row>
                        <Cell>Adaptive?</Cell>
                        <Cell style="white-space: normal;">No</Cell>
                        <Cell style="white-space: normal;">but can be made to check before recursing for partitions for very small size, i.e. choose pivot again</Cell>
                    </Row>
                </Body>
            </DataTable>
        </Content>
    </Card>
    <h6 id="javascript">Javascript code</h6>
    <WebPractice htmlContent={'Click on the run button to show console output.'} cssContent={' '} jsContent={jsQuick} selected={'JS'} showConsole />
    
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
