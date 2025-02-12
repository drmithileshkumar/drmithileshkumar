import { a as subscribe, b as set_store_value } from "../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../../../chunks/ssr2.js";
import { g as github, a as githubDark } from "../../../../../../../chunks/github-dark.js";
import { W as WebPractice } from "../../../../../../../chunks/WebPractice.js";
import { p as page } from "../../../../../../../chunks/stores3.js";
import { C as Card } from "../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../chunks/ActionIcons.js";
import { D as DataTable, R as Row, C as Cell, B as Body } from "../../../../../../../chunks/Cell.js";
import { H as Head } from "../../../../../../../chunks/Head.js";
import "../../../../../../../chunks/Subheader.js";
import "../../../../../../../chunks/client.js";
import { c as currentPath, n as navList, d as darkMode } from "../../../../../../../chunks/stores.js";
/* empty css                                                                */
import { c as contentNav, a as contents } from "../../../../../../../chunks/content.js";
import { P as Pathlist } from "../../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../../chunks/CourseNavigation.js";
import { M as Merge } from "../../../../../../../chunks/Merge.js";
const css$1 = {
  code: "article.svelte-10en0xh.svelte-10en0xh{display:flex;flex-direction:column;gap:0.5em;max-width:750px;width:90%;margin:auto}p.svelte-10en0xh.svelte-10en0xh,li.svelte-10en0xh.svelte-10en0xh{opacity:0.8}h4.svelte-10en0xh.svelte-10en0xh{margin:0.5em 0}h6.svelte-10en0xh.svelte-10en0xh{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}strong.svelte-10en0xh.svelte-10en0xh{color:goldenrod;opacity:1}a.svelte-10en0xh.svelte-10en0xh{cursor:pointer;text-decoration:none}.question.svelte-10en0xh.svelte-10en0xh{cursor:pointer;padding:0.3em}.pseudocode.svelte-10en0xh.svelte-10en0xh{font-family:monospace;font-size:1em}.pseudocode.svelte-10en0xh strong.svelte-10en0xh{color:rgb(20, 175, 175)}.pseudocode.svelte-10en0xh ul.svelte-10en0xh{margin:0;border-left:1px solid}.comment.svelte-10en0xh.svelte-10en0xh{color:green}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { tileGrid } from \\"$lib/utils/common/tile\\";\\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import {page} from \'$app/stores\';\\r\\n    import {onMount} from \'svelte\';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, {Body, Head, Row, Cell} from \'@smui/data-table\';\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from \'$lib/components/NavList.svelte\'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/algorithms/content\\";\\r\\n    import { typeset } from \'$lib/shared/typeset\';\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n\\r\\n    import Merge from \\"$lib/pages/courses/algorithms/Merge.svelte\\";\\r\\n\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Merge Sort\\";\\r\\n    \\r\\n    \\r\\n    let jsMerge = `function mergeSort(arr) {\\r\\n    if (arr.length <= 1) return arr; // Base case: a single element is already sorted\\r\\n\\r\\n    let mid = Math.floor(arr.length / 2); // Find the middle index\\r\\n    let left = mergeSort(arr.slice(0, mid)); // Recursively sort left half\\r\\n    let right = mergeSort(arr.slice(mid)); // Recursively sort right half\\r\\n\\r\\n    return merge(left, right); // Merge the sorted halves\\r\\n}\\r\\n\\r\\nfunction merge(left, right) {\\r\\n    let sortedArray = [];\\r\\n    let i = 0, j = 0;\\r\\n\\r\\n    // Merge elements in sorted order\\r\\n    while (i < left.length && j < right.length) {\\r\\n        if (left[i] < right[j]) {\\r\\n            sortedArray.push(left[i]);\\r\\n            i++;\\r\\n        } else {\\r\\n            sortedArray.push(right[j]);\\r\\n            j++;\\r\\n        }\\r\\n    }\\r\\n\\r\\n    // Add any remaining elements from left or right\\r\\n    return sortedArray.concat(left.slice(i)).concat(right.slice(j));\\r\\n}\\r\\n\\r\\n// Example usage:\\r\\nlet numbers = [5, 3, 8, 4, 2];\\r\\nconsole.log(mergeSort(numbers)); // Output: [2, 3, 4, 5, 8]\\r\\n`\\r\\n    let jsPseudo = `Procedure MergeSort(array):\\r\\n    1. Start with an array that needs to be sorted.\\r\\n    2. If the array has only one element or is empty, return it (base case).\\r\\n    3. Otherwise, divide the array into two halves:\\r\\n        a. Find the middle index.\\r\\n        b. Split the array into a left half and a right half.\\r\\n    4. Recursively apply Merge Sort on both halves until they are sorted.\\r\\n    5. Merge the two sorted halves\\r\\n        a. Compare elements from both halves and insert the smaller one into a new sorted array.\\r\\n        b. Repeat until all elements from both halves are merged.\\r\\n    6. Continue merging back up the recursive calls until the entire array is sorted.\\r\\n    7. End the algorithm when all elements are in order.`\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n        max-width: 750px;\\r\\n        width: 90%;\\r\\n        margin: auto;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n    .pseudocode {\\r\\n        font-family:monospace;\\r\\n        font-size: 1em;\\r\\n    }\\r\\n    .pseudocode strong {\\r\\n        color: rgb(20, 175, 175);\\r\\n    }\\r\\n    .pseudocode ul {\\r\\n        margin: 0;\\r\\n        border-left: 1px solid;\\r\\n    }\\r\\n    .comment {\\r\\n        color:green;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Algorithms</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/layout\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Merge Sort\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#description\\">Description</a></li>\\r\\n                <li><a href=\\"#visualization\\">Visualization</a></li>\\r\\n                <li><a href=\\"#pseudo\\">Pseudo code</a></li>\\r\\n                <li><a href=\\"#analysis\\">Analysis</a></li>\\r\\n                <li><a href=\\"#javascript\\">Javascript code</a></li>\\r\\n                <li><a href=\\"#questions\\">Questions</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"description\\">Description</h6>\\r\\n            <p>\\r\\n                Merge sort involves the recursive idea of splitting the given unsorted array into equal parts, sorting each part and then merging them into the final sorted array. This algorithm takes {`\\\\\\\\(O(n\\\\\\\\log n)\\\\\\\\)`} number of comparisons and is stable as well.  \\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"visualization\\">Visualization</h6>\\r\\n            <Merge />\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"pseudo\\">Pseudo code</h6>\\r\\n            <div class=\\"pseudocode\\">\\r\\n                <span>function <strong>MergeSort</strong>(a, start, end):</span>\\r\\n                <ul>\\r\\n                    <li>n = a.length</li>\\r\\n                    <li>if n &lt; 2 return a <span class=\\"comment\\">//nothing to do here</span></li>\\r\\n                    <li>else divide the array into two parts</li>\\r\\n                    <ul>\\r\\n                        <li>middle = (start + end)/2</li>\\r\\n                        <li>left = <strong>MergeSort</strong>(a, start, mid)</li>\\r\\n                        <li>right = <strong>MergeSort</strong>(a, mid+1, end)</li>\\r\\n                        <li>sorted = <strong>Merge</strong>(left, right)</li>\\r\\n                    </ul>\\r\\n                    <li>return sorted</li>\\r\\n                </ul>\\r\\n                <span>function <strong>Merge</strong>(left, right):</span>\\r\\n                <ul>\\r\\n                    <li>if either left or right are empty, return the other</li>\\r\\n                    <li>merged = [] <span class=\\"comment\\">//empty merged array</span></li>\\r\\n                    <li>while left or right have elements:\\r\\n                        <ul>\\r\\n                            <li>if left[first] &lt; right[first] or right is empty: \\r\\n                                <ul>\\r\\n                                    <li>put left[first] at the end of merged</li>\\r\\n                                    <li>remove left[first] <span class=\\"comment\\">//left is smaller now</span></li> \\r\\n                                </ul>\\r\\n                            </li>\\r\\n                            <li>\\r\\n                                else \\r\\n                                <ul>\\r\\n                                    <li>put right[first] at the end of merged</li>\\r\\n                                    <li>remove right[first] <span class=\\"comment\\">//right is smaller now</span></li>\\r\\n                                </ul>\\r\\n                            </li>\\r\\n                        </ul>\\r\\n                    </li>\\r\\n                    <li>return merged</li>\\r\\n                </ul>\\r\\n            </div>\\r\\n            <!-- <Highlight language={xml} code={jsPseudo} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight> -->\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"analysis\\">Analysis</h6>\\r\\n            <p>\\r\\n                Let {`\\\\\\\\(T(n)\\\\\\\\)`} represent the time taken by the algorithm. At each recursive step, we have two merge sort instances of half size and merging them requires {`O(n)`} time. This leads to the following recurrence relation:\\r\\n                {`\\\\\\\\[\\r\\n                \\\\\\\\begin{align}\\r\\n                T(n) &= 2  T\\\\\\\\left(\\\\\\\\frac{n}{2}\\\\\\\\right ) + O(n)\\\\\\\\\\\\\\\\\\r\\n                     &= O(n\\\\\\\\log n)\\r\\n                \\\\\\\\end{align}\\r\\n                \\\\\\\\]`}\\r\\n            </p>\\r\\n            <DataTable style=\\"width: 100%\\">\\r\\n                <Head>\\r\\n                    <Row>\\r\\n                        <Cell>Aspect</Cell>\\r\\n                        <Cell>Complexity</Cell>\\r\\n                        <Cell>Description</Cell>\\r\\n                    </Row>\\r\\n                </Head>\\r\\n                <Body>\\r\\n                    <Row>\\r\\n                        <Cell>Best-case time complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{`\\\\\\\\(O(n\\\\\\\\log n)\\\\\\\\)`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Always divides array into halves and merges efficiently.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Worst-case time complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{`\\\\\\\\(O(n\\\\\\\\log n)\\\\\\\\)`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Even in the worst case, the recursive structure remains the same.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Average-case time complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{`\\\\\\\\(O(n\\\\\\\\log n)\\\\\\\\)`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Same as before.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Space complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{`\\\\\\\\(O(n)\\\\\\\\)`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Requires extra space for temporary arrays during merging.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Stable?</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Yes</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Preserves the order of equal elements</Cell>\\r\\n                    </Row>\\r\\n                    \\r\\n                    <Row>\\r\\n                        <Cell>Adaptive?</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">No</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">but can be made to check before merging</Cell>\\r\\n                    </Row>\\r\\n                </Body>\\r\\n            </DataTable>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <h6 id=\\"javascript\\">Javascript code</h6>\\r\\n    <WebPractice htmlContent={\'Click on the run button to show console output.\'} cssContent={\' \'} jsContent={jsMerge} selected={\'JS\'} showConsole />\\r\\n    \\r\\n    <!-- <Card>\\r\\n        <Content>\\r\\n            <Highlight language={xml} code={code2} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card> -->\\r\\n    <h6 id=\\"questions\\">Questions</h6>\\r\\n    \\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">When can the algorithm terminate early? Can this algorithm be parallelized?</div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AA8EI,qCAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KAAK,CACV,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IACZ,CACA,+BAAC,CAAE,gCAAG,CACF,OAAO,CAAE,GACb,CACQ,gCAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,gCAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,oCAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb,CACA,+BAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB,CACA,uCAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb,CACA,yCAAY,CACR,YAAY,SAAS,CACrB,SAAS,CAAE,GACf,CACA,0BAAW,CAAC,qBAAO,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,0BAAW,CAAC,iBAAG,CACX,MAAM,CAAE,CAAC,CACT,WAAW,CAAE,GAAG,CAAC,KACrB,CACA,sCAAS,CACL,MAAM,KACV"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  let $navList, $$unsubscribe_navList;
  let $darkMode, $$unsubscribe_darkMode;
  let $page, $$unsubscribe_page;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Merge Sort", $currentPath);
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
`;
  $$result.css.add(css$1);
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_darkMode();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-u9p3hi_START -->${$$result.title = `<title>Algorithms</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/layout"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-u9p3hi_END -->`, ""} <article class="svelte-10en0xh">${validate_component(Pathlist, "Pathlist").$$render(
    $$result,
    {
      origin: $page.url.origin,
      pathname: $page.url.pathname
    },
    {},
    {}
  )} ${validate_component(CourseNavigation, "CourseNavigation").$$render(
    $$result,
    {
      contentNav,
      currentUrl: $page.url.pathname
    },
    {},
    {}
  )} <h4 class="svelte-10en0xh" data-svelte-h="svelte-1x3zhgi">Merge Sort</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-10en0xh" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-1xd3in8"><li class="svelte-10en0xh"><a href="#description" class="svelte-10en0xh">Description</a></li> <li class="svelte-10en0xh"><a href="#visualization" class="svelte-10en0xh">Visualization</a></li> <li class="svelte-10en0xh"><a href="#pseudo" class="svelte-10en0xh">Pseudo code</a></li> <li class="svelte-10en0xh"><a href="#analysis" class="svelte-10en0xh">Analysis</a></li> <li class="svelte-10en0xh"><a href="#javascript" class="svelte-10en0xh">Javascript code</a></li> <li class="svelte-10en0xh"><a href="#questions" class="svelte-10en0xh">Questions</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="description" class="svelte-10en0xh" data-svelte-h="svelte-16ffqii">Description</h6> <p class="svelte-10en0xh">Merge sort involves the recursive idea of splitting the given unsorted array into equal parts, sorting each part and then merging them into the final sorted array. This algorithm takes ${escape(`\\(O(n\\log n)\\)`)} number of comparisons and is stable as well.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="visualization" class="svelte-10en0xh" data-svelte-h="svelte-1plo0r2">Visualization</h6> ${validate_component(Merge, "Merge").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="pseudo" class="svelte-10en0xh" data-svelte-h="svelte-avl5bh">Pseudo code</h6> <div class="pseudocode svelte-10en0xh" data-svelte-h="svelte-tdu6cn"><span>function <strong class="svelte-10en0xh">MergeSort</strong>(a, start, end):</span> <ul class="svelte-10en0xh"><li class="svelte-10en0xh">n = a.length</li> <li class="svelte-10en0xh">if n &lt; 2 return a <span class="comment svelte-10en0xh">//nothing to do here</span></li> <li class="svelte-10en0xh">else divide the array into two parts</li> <ul class="svelte-10en0xh"><li class="svelte-10en0xh">middle = (start + end)/2</li> <li class="svelte-10en0xh">left = <strong class="svelte-10en0xh">MergeSort</strong>(a, start, mid)</li> <li class="svelte-10en0xh">right = <strong class="svelte-10en0xh">MergeSort</strong>(a, mid+1, end)</li> <li class="svelte-10en0xh">sorted = <strong class="svelte-10en0xh">Merge</strong>(left, right)</li></ul> <li class="svelte-10en0xh">return sorted</li></ul> <span>function <strong class="svelte-10en0xh">Merge</strong>(left, right):</span> <ul class="svelte-10en0xh"><li class="svelte-10en0xh">if either left or right are empty, return the other</li> <li class="svelte-10en0xh">merged = [] <span class="comment svelte-10en0xh">//empty merged array</span></li> <li class="svelte-10en0xh">while left or right have elements:
                        <ul class="svelte-10en0xh"><li class="svelte-10en0xh">if left[first] &lt; right[first] or right is empty: 
                                <ul class="svelte-10en0xh"><li class="svelte-10en0xh">put left[first] at the end of merged</li> <li class="svelte-10en0xh">remove left[first] <span class="comment svelte-10en0xh">//left is smaller now</span></li></ul></li> <li class="svelte-10en0xh">else 
                                <ul class="svelte-10en0xh"><li class="svelte-10en0xh">put right[first] at the end of merged</li> <li class="svelte-10en0xh">remove right[first] <span class="comment svelte-10en0xh">//right is smaller now</span></li></ul></li></ul></li> <li class="svelte-10en0xh">return merged</li></ul></div> `;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="analysis" class="svelte-10en0xh" data-svelte-h="svelte-6lxl32">Analysis</h6> <p class="svelte-10en0xh">Let ${escape(`\\(T(n)\\)`)} represent the time taken by the algorithm. At each recursive step, we have two merge sort instances of half size and merging them requires ${escape(`O(n)`)} time. This leads to the following recurrence relation:
                ${escape(`\\[
                \\begin{align}
                T(n) &= 2  T\\left(\\frac{n}{2}\\right ) + O(n)\\\\
                     &= O(n\\log n)
                \\end{align}
                \\]`)}</p> ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width: 100%" }, {}, {
            default: () => {
              return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Aspect`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Complexity`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Description`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })} ${validate_component(Body, "Body").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Best-case time complexity`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `${escape(`\\(O(n\\log n)\\)`)}`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `Always divides array into halves and merges efficiently.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Worst-case time complexity`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `${escape(`\\(O(n\\log n)\\)`)}`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `Even in the worst case, the recursive structure remains the same.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Average-case time complexity`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `${escape(`\\(O(n\\log n)\\)`)}`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `Same as before.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Space complexity`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `${escape(`\\(O(n)\\)`)}`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `Requires extra space for temporary arrays during merging.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Stable?`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `Yes`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `Preserves the order of equal elements`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Adaptive?`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `No`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `but can be made to check before merging`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })} <h6 id="javascript" class="svelte-10en0xh" data-svelte-h="svelte-1fyitox">Javascript code</h6> ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: "Click on the run button to show console output.",
      cssContent: " ",
      jsContent: jsMerge,
      selected: "JS",
      showConsole: true
    },
    {},
    {}
  )}  <h6 id="questions" class="svelte-10en0xh" data-svelte-h="svelte-7cwkek">Questions</h6> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-10en0xh" data-svelte-h="svelte-sb4s8s">When can the algorithm terminate early? Can this algorithm be parallelized?</div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
