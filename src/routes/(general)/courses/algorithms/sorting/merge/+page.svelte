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

    import Merge from "$lib/pages/courses/algorithms/Merge.svelte";

    $navList = contents;
    $currentPath = "Merge Sort";
    
    
    let jsMerge = `function mergeSort(arr) {
    if (arr.length <= 1) return arr; // Base case: a single element is already sorted

    let mid = Math.floor(arr.length / 2); // Find the middle index
    let left = mergeSort(arr.slice(0, mid)); // Recursively sort left half
    let right = mergeSort(arr.slice(mid)); // Recursively sort right half

    return merge(left, right); // Merge the sorted halves
}

function merge(left, right) {
    let sortedArray = [];
    let i = 0, j = 0;

    // Merge elements in sorted order
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }

    // Add any remaining elements from left or right
    return sortedArray.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage:
let numbers = [5, 3, 8, 4, 2];
console.log(mergeSort(numbers)); // Output: [2, 3, 4, 5, 8]
`
    let jsPseudo = `Procedure MergeSort(array):
    1. Start with an array that needs to be sorted.
    2. If the array has only one element or is empty, return it (base case).
    3. Otherwise, divide the array into two halves:
        a. Find the middle index.
        b. Split the array into a left half and a right half.
    4. Recursively apply Merge Sort on both halves until they are sorted.
    5. Merge the two sorted halves
        a. Compare elements from both halves and insert the smaller one into a new sorted array.
        b. Repeat until all elements from both halves are merged.
    6. Continue merging back up the recursive calls until the entire array is sorted.
    7. End the algorithm when all elements are in order.`
    
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
        Merge Sort
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
                <svg class="SVG Vectorial svelte-p2dk90" width="300px" viewBox="0.8334445953369141 111.16656494140625 477 329" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g class="Vectorial" transform="translate(0 0) scale(1)"><defs><marker id="Arrow-localImage3-10" refX="0" refY="5" markerWidth="6" markerHeight="6" markerUnits="strokeWidth" orient="auto-start-reverse" viewBox="0 0 10 10" preserveAspectRatio="xMidYMid meet"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-dasharray="none" opacity="1" filter="none" transform="matrix(1 0 0 1 0 0)"></path></marker></defs><g id="Layer-localImage3-0" class="draggable" fill="none" stroke="none" stroke-width="0" stroke-dasharray="none" vector-effect="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 0 0)">   <rect id="Rect-localImage3-2" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -184.99999445676804 -107.33340454101562)"></rect>           <rect id="Rect-localImage3-3" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -125.00000508626363 -107.33340454101562)"></rect>           <rect id="Rect-localImage3-4" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -65.00000250339508 -107.33340454101562)"></rect>           <rect id="Rect-localImage3-5" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -5 -107.33340454101562)"></rect>           <rect id="Rect-localImage3-6" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 55.00000059604645 -107.33340454101562)"></rect>           <rect id="Rect-localImage3-7" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 114.99999976158142 -107.33340454101562)"></rect>               <text id="Text-localImage3-11" class="draggable" x="250" y="250" fill="currentColor" font-size="20px" font-weight="400" font-family="Roboto, sans-serif" filter="none" opacity="1" transform="matrix(1 0 0 1 -38.6666259765625 -19.33331298828125)">divide</text>       <rect id="Rect-localImage3-12" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -105.99991858005524 1.999908447265625)"></rect>           <rect id="Rect-localImage3-13" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -162.99993260701558 1.999908447265625)"></rect>           <rect id="Rect-localImage3-14" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -219.99993896484375 1.999908447265625)"></rect>           <rect id="Rect-localImage3-15" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 34.66668891906738 2.666534423828125)"></rect>           <rect id="Rect-localImage3-16" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 91.66675245761871 2.666534423828125)"></rect>           <rect id="Rect-localImage3-17" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 148.66682744026184 2.666534423828125)"></rect>           <rect id="Rect-localImage3-18" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -184.99999478459358 108.66653442382812)"></rect>           <rect id="Rect-localImage3-19" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -124.99999936421773 108.66653442382812)"></rect>           <rect id="Rect-localImage3-20" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -65.00000202655792 108.66653442382812)"></rect>           <rect id="Rect-localImage3-21" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -5.000004529953003 108.66653442382812)"></rect>           <rect id="Rect-localImage3-22" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 54.99999451637268 108.66653442382812)"></rect>           <rect id="Rect-localImage3-23" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 114.9999934732914 108.66653442382812)"></rect>               <text id="Text-localImage3-22" class="draggable" x="257.83336639404297" y="270.49999237060547" fill="currentColor" font-size="20px" font-weight="400" font-family="Roboto, sans-serif" filter="none" opacity="1" transform="matrix(1 0 0 1 -37.3333740234375 11.33331298828125)">sort</text>           <text id="Text-localImage3-23" class="draggable" x="257.83336639404297" y="270.49999237060547" fill="currentColor" font-size="20px" font-weight="400" font-family="Roboto, sans-serif" filter="none" opacity="1" transform="matrix(1 0 0 1 -47.3333740234375 66.66668701171875)">merge</text>          <path id="Path-localImage3-24" class="draggable" d="M 143.49998867015177,206.1770828909549 L 114.8333635479213,238.51039491562835" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="url(#Arrow-localImage3-10)" transform="matrix(1 0 0 1 6 -4)"></path>           <path id="Path-localImage3-25" class="draggable" d="M 143.49998867015177,206.1770828909549 L 114.8333635479213,238.51039491562835" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="url(#Arrow-localImage3-10)" transform="matrix(1 0 0 1 220.66668701171875 104.66668701171875)"></path>           <path id="Path-localImage3-26" class="draggable" d="M 143.49998867015177,206.1770828909549 L 114.8333635479213,238.51039491562835" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="url(#Arrow-localImage3-10)" transform="matrix(-1 0 0 1 473.6666564941406 -3.3333740234375)"></path>           <path id="Path-localImage3-27" class="draggable" d="M 143.49998867015177,206.1770828909549 L 114.8333635479213,238.51039491562835" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="url(#Arrow-localImage3-10)" transform="matrix(-1 0 0 1 256.9999694824219 103.33331298828125)"></path>     </g></g></svg>
            </div>
            <p>
                Merge sort involves the recursive idea of splitting the given unsorted array into equal parts, sorting each part and then merging them into the final sorted array. This algorithm takes {`\\(O(n\\log n)\\)`} number of comparisons and is stable as well.  
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="visualization">Visualization</h6>
            <Merge />
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="pseudo">Pseudo code</h6>
            <div class="pseudocode">
                <span>function <strong>MergeSort</strong>(a, start, end):</span>
                <ul>
                    <li>n = a.length</li>
                    <li>if n &lt; 2 return a <span class="comment">//nothing to do here</span></li>
                    <li>else divide the array into two parts</li>
                    <ul>
                        <li>middle = (start + end)/2</li>
                        <li>left = <strong>MergeSort</strong>(a, start, mid)</li>
                        <li>right = <strong>MergeSort</strong>(a, mid+1, end)</li>
                        <li>sorted = <strong>Merge</strong>(left, right)</li>
                    </ul>
                    <li>return sorted</li>
                </ul>
                <span>function <strong>Merge</strong>(left, right):</span>
                <ul>
                    <li>if either left or right are empty, return the other</li>
                    <li>merged = [] <span class="comment">//empty merged array</span></li>
                    <li>while left or right have elements:
                        <ul>
                            <li>if left[first] &lt; right[first] or right is empty: 
                                <ul>
                                    <li>put left[first] at the end of merged</li>
                                    <li>remove left[first] <span class="comment">//left is smaller now</span></li> 
                                </ul>
                            </li>
                            <li>
                                else 
                                <ul>
                                    <li>put right[first] at the end of merged</li>
                                    <li>remove right[first] <span class="comment">//right is smaller now</span></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>return merged</li>
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
                Let {`\\(T(n)\\)`} represent the time taken by the algorithm. At each recursive step, we have two merge sort instances of half size and merging them requires {`O(n)`} time. This leads to the following recurrence relation:
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
                        <Cell style="white-space: normal;">Always divides array into halves and merges efficiently.</Cell>
                    </Row>
                    <Row>
                        <Cell>Worst-case time complexity</Cell>
                        <Cell style="white-space: normal;">{`\\(O(n\\log n)\\)`}</Cell>
                        <Cell style="white-space: normal;">Even in the worst case, the recursive structure remains the same.</Cell>
                    </Row>
                    <Row>
                        <Cell>Average-case time complexity</Cell>
                        <Cell style="white-space: normal;">{`\\(O(n\\log n)\\)`}</Cell>
                        <Cell style="white-space: normal;">Same as before.</Cell>
                    </Row>
                    <Row>
                        <Cell>Space complexity</Cell>
                        <Cell style="white-space: normal;">{`\\(O(n)\\)`}</Cell>
                        <Cell style="white-space: normal;">Requires extra space for temporary arrays during merging.</Cell>
                    </Row>
                    <Row>
                        <Cell>Stable?</Cell>
                        <Cell style="white-space: normal;">Yes</Cell>
                        <Cell style="white-space: normal;">Preserves the order of equal elements</Cell>
                    </Row>
                    
                    <Row>
                        <Cell>Adaptive?</Cell>
                        <Cell style="white-space: normal;">No</Cell>
                        <Cell style="white-space: normal;">but can be made to check before merging</Cell>
                    </Row>
                </Body>
            </DataTable>
        </Content>
    </Card>
    <h6 id="javascript">Javascript code</h6>
    <WebPractice htmlContent={'Click on the run button to show console output.'} cssContent={' '} jsContent={jsMerge} selected={'JS'} showConsole />
    
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
