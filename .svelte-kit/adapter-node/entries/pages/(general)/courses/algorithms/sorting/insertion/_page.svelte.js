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
import { I as Insertion } from "../../../../../../../chunks/Insertion.js";
const css$1 = {
  code: "article.svelte-y3e5l.svelte-y3e5l{display:flex;flex-direction:column;gap:0.5em;max-width:750px;width:90%;margin:auto}p.svelte-y3e5l.svelte-y3e5l,li.svelte-y3e5l.svelte-y3e5l{opacity:0.8}h4.svelte-y3e5l.svelte-y3e5l{margin:0.5em 0}h6.svelte-y3e5l.svelte-y3e5l{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}strong.svelte-y3e5l.svelte-y3e5l{color:goldenrod;opacity:1}a.svelte-y3e5l.svelte-y3e5l{cursor:pointer;text-decoration:none}.question.svelte-y3e5l.svelte-y3e5l{cursor:pointer;padding:0.3em}.pseudocode.svelte-y3e5l.svelte-y3e5l{font-family:monospace;font-size:1em}.pseudocode.svelte-y3e5l strong.svelte-y3e5l{color:rgb(20, 175, 175)}.pseudocode.svelte-y3e5l ul.svelte-y3e5l{margin:0;border-left:1px solid}.media.svelte-y3e5l.svelte-y3e5l{display:flex;align-items:center;justify-content:center}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { tileGrid } from \\"$lib/utils/common/tile\\";\\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import {page} from \'$app/stores\';\\r\\n    import {onMount} from \'svelte\';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, {Body, Head, Row, Cell} from \'@smui/data-table\';\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from \'$lib/components/NavList.svelte\'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/algorithms/content\\";\\r\\n    import { typeset } from \'$lib/shared/typeset\';\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n\\r\\n    import Insertion from \\"$lib/pages/courses/algorithms/Insertion.svelte\\";\\r\\n\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Insertion Sort\\";\\r\\n    \\r\\n    \\r\\n    let jsInsertion = `function insertionSort(arr) {\\r\\n    for (let i = 1; i < arr.length; i++) {\\r\\n        let key = arr[i]; // Pick the current element to be inserted\\r\\n        let j = i - 1;\\r\\n\\r\\n        // Shift elements that are greater than key to the right\\r\\n        while (j >= 0 && arr[j] > key) {\\r\\n            arr[j + 1] = arr[j];\\r\\n            j--;\\r\\n        }\\r\\n\\r\\n        // Insert key at the correct position\\r\\n        arr[j + 1] = key;\\r\\n    }\\r\\n    return arr;\\r\\n}\\r\\n\\r\\n// Example usage:\\r\\nlet numbers = [5, 3, 8, 4, 2];\\r\\nconsole.log(insertionSort(numbers)); // Output: [2, 3, 4, 5, 8]\\r\\n\\r\\n`\\r\\n    let jsPseudo = `Procedure InsertionSort(array):\\r\\n    1. Start with an array of numbers that need to be sorted.\\r\\n    2. Consider the first element as already sorted.\\r\\n    3. For each remaining element in the array:\\r\\n        a. Pick the next element in the list (this is the \\"key\\" element to be inserted).\\r\\n        b. Compare it with the elements in the sorted portion of the array (the elements before it).\\r\\n        c. If the key is smaller than the previous elements:\\r\\n            i. Shift those larger elements one position to the right to make space.\\r\\n        d. Place the key in its correct position in the sorted portion.\\r\\n    4. Repeat this process for all elements until the entire array is sorted.\\r\\n    5. End the algorithm when all elements are in order.`\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n        max-width: 750px;\\r\\n        width: 90%;\\r\\n        margin: auto;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n    .pseudocode {\\r\\n        font-family:monospace;\\r\\n        font-size: 1em;\\r\\n    }\\r\\n    .pseudocode strong {\\r\\n        color: rgb(20, 175, 175);\\r\\n    }\\r\\n    .pseudocode ul {\\r\\n        margin: 0;\\r\\n        border-left: 1px solid;\\r\\n    }\\r\\n    .media {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Algorithms</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/layout\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Insertion Sort\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#description\\">Description</a></li>\\r\\n                <li><a href=\\"#visualization\\">Visualization</a></li>\\r\\n                <li><a href=\\"#pseudo\\">Pseudo code</a></li>\\r\\n                <li><a href=\\"#analysis\\">Analysis</a></li>\\r\\n                <li><a href=\\"#javascript\\">Javascript code</a></li>\\r\\n                <li><a href=\\"#questions\\">Questions</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"description\\">Description</h6>\\r\\n            <div class=\\"media\\">\\r\\n                <svg class=\\"SVG Vectorial svelte-p2dk90\\" width=\\"430\\" height=\\"150\\" viewBox=\\"19.33336639404297 105.99999237060547 430 150\\" xmlns=\\"http://www.w3.org/2000/svg\\" xmlns:xlink=\\"http://www.w3.org/1999/xlink\\"><g class=\\"Vectorial\\" transform=\\"translate(0 0) scale(1)\\"><defs><marker id=\\"Arrow-localImage61-10\\" refX=\\"0\\" refY=\\"5\\" markerWidth=\\"6\\" markerHeight=\\"6\\" markerUnits=\\"strokeWidth\\" orient=\\"auto-start-reverse\\" viewBox=\\"0 0 10 10\\" preserveAspectRatio=\\"xMidYMid meet\\"><path d=\\"M 0 0 L 10 5 L 0 10 z\\" fill=\\"rgba(0, 0, 0, 1)\\" stroke=\\"rgba(0, 0, 0, 1)\\" stroke-width=\\"0\\" stroke-dasharray=\\"none\\" opacity=\\"1\\" filter=\\"none\\" transform=\\"matrix(1 0 0 1 0 0)\\"></path></marker></defs><g id=\\"Layer-localImage61-0\\" class=\\"draggable\\" fill=\\"none\\" stroke=\\"none\\" stroke-width=\\"0\\" stroke-dasharray=\\"none\\" vector-effect=\\"none\\" opacity=\\"1\\" filter=\\"none\\" mask=\\"none\\" transform=\\"matrix(1 0 0 1 0 0)\\">   <rect id=\\"Rect-localImage61-2\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"rgba(0, 0, 0, 1)\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 -220 -62)\\"></rect>           <rect id=\\"Rect-localImage61-3\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"rgba(0, 0, 0, 1)\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 -165.33333333333394 -61.33331298828125)\\"></rect>           <rect id=\\"Rect-localImage61-4\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"rgba(0, 0, 0, 1)\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 -83.33329260349274 -63.33331298828125)\\"></rect>           <rect id=\\"Rect-localImage61-5\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"rgba(0, 0, 0, 1)\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 -27.999937057495117 -63.33331298828125)\\"></rect>           <rect id=\\"Rect-localImage61-6\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"rgba(0, 0, 0, 1)\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 27.33341658115387 -63.33331298828125)\\"></rect>           <rect id=\\"Rect-localImage61-7\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"rgba(0, 0, 0, 1)\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 82.66676640510559 -63.33331298828125)\\"></rect>           <rect id=\\"Rect-localImage61-8\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"rgba(0, 0, 0, 1)\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 138.0001220703125 -63.33331298828125)\\"></rect>              <path id=\\"Path-localImage61-9\\" class=\\"draggable\\" d=\\"M 149.36913617345283,203.164025927662 C 150.09218302690437,157.8100111660357 211.99993264675345,155.61043237416646 223.99993228912558,156.01043236224552 C 235.9999319314977,156.41043235032458 303.05159008945253,150.7406998532801 302.5181184256637,185.94097346243336\\" fill=\\"rgba(0, 0, 0, 0)\\" fill-rule=\\"evenodd\\" stroke=\\"rgba(0, 0, 0, 1)\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" stroke-linejoin=\\"miter\\" stroke-miterlimit=\\"4\\" vector-effect=\\"none\\" opacity=\\"1\\" filter=\\"none\\" mask=\\"none\\" marker-start=\\"url(#Arrow-localImage61-10)\\" marker-mid=\\"none\\" marker-end=\\"none\\" transform=\\"matrix(1 0 0 1 0 0)\\"></path>            <text id=\\"Text-localImage61-11\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" fill=\\"rgba(0, 0, 0, 1)\\" font-size=\\"20px\\" font-weight=\\"400\\" font-family=\\"Roboto, sans-serif\\" filter=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 -55.33331298828125 -102.66668701171875)\\">insert</text>    </g></g></svg>\\r\\n            </div>\\r\\n            <p>\\r\\n                In insertion sort, the algorithm assumes that an initial part of the array is sorted. (At least the 1st element is sorted). With this assumption, a single loop starts with the 2nd element and <em>inserts</em> {`\\\\\\\\(a_i\\\\\\\\)`} at <em>right</em> position in the sorted subarray {`\\\\\\\\(A[0 : i- 1]\\\\\\\\)`}. Insertion sort is stable as well.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"visualization\\">Visualization</h6>\\r\\n            <Insertion />\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"pseudo\\">Pseudo code</h6>\\r\\n            <div class=\\"pseudocode\\">\\r\\n                <span>function <strong>InsertionSort</strong>(a):</span>\\r\\n                <ul>\\r\\n                    <li>n = a.length</li>\\r\\n                    <li>sorted = 0 (first element is sorted)</li>\\r\\n                    <li>unsorted = 1 (next element needs to be sorted)</li>\\r\\n                    <li>loop till sorted &lt; n:\\r\\n                    <ul><li>// insert a[unsorted] into a[0:sorted]</li>\\r\\n                        <li>toBeInserted = a[unsorted]</li>\\r\\n                        <li>from i = sorted till i > 0 and swapped = true:\\r\\n                            <ul>\\r\\n                                <li>if toBeInserted &lt; a[i]:\\r\\n                                    <ul>\\r\\n                                        <li>swap them.</li>\\r\\n                                        <li>swapped = true</li>\\r\\n                                        <li>i = i - 1</li>\\r\\n                                    </ul>\\r\\n                                </li>\\r\\n                                <li>else swapped = false</li>\\r\\n                            </ul> \\r\\n                        </li>\\r\\n                        <li>increase sorted by one </li>\\r\\n                        </ul>\\r\\n                    </li>\\r\\n                    <li>output the sorted array</li>\\r\\n                </ul>\\r\\n            </div>\\r\\n            <!-- <Highlight language={xml} code={jsPseudo} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight> -->\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"analysis\\">Analysis</h6>\\r\\n            <p>\\r\\n                The outer loop runs {`\\\\\\\\(n\\\\\\\\)`} times. In the worst case, at the {`\\\\\\\\(i\\\\\\\\)`}th run, the algorithm makes {`\\\\\\\\(i\\\\\\\\)`} comparisons. This gives a total comparisons of {`\\\\\\\\[n + (n-1) + \\\\\\\\cdots + 1 = \\\\\\\\frac{n(n - 1)}{2}\\\\\\\\]`}\\r\\n            </p>\\r\\n            <p>\\r\\n                Notice we can use binary search to optimize the insertion. Unfortunately, we need to read almost all elements in the sorted part and shift (to the right). So while number of comparisons decrease to \\\\(O(\\\\log N)\\\\), the number of elements scanned remains \\\\(O(N)\\\\).\\r\\n            </p>\\r\\n            <DataTable style=\\"width: 100%\\">\\r\\n                <Head>\\r\\n                    <Row>\\r\\n                        <Cell>Aspect</Cell>\\r\\n                        <Cell>Complexity</Cell>\\r\\n                        <Cell>Description</Cell>\\r\\n                    </Row>\\r\\n                </Head>\\r\\n                <Body>\\r\\n                    <Row>\\r\\n                        <Cell>Worst-case time complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{`\\\\\\\\(O(n^2)\\\\\\\\)`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">almost reverse order</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Best-case time complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{`\\\\\\\\(O(n)\\\\\\\\)`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">almost sorted</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Average-case time complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{`\\\\\\\\(O(n^2)\\\\\\\\)`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">On average, each element is compared with half of the previous elements.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Space complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{`\\\\\\\\(O(1)\\\\\\\\)`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">in-place algorithm</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Stable?</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Yes</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Preserves the order of equal elements</Cell>\\r\\n                    </Row>\\r\\n                    \\r\\n                    <Row>\\r\\n                        <Cell>Adaptive?</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Yes</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">with early exit condition</Cell>\\r\\n                    </Row>\\r\\n                </Body>\\r\\n            </DataTable>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <h6 id=\\"javascript\\">Javascript code</h6>\\r\\n    <WebPractice htmlContent={\'Click on the run button to show console output.\'} cssContent={\' \'} jsContent={jsInsertion} selected={\'JS\'} showConsole />\\r\\n    \\r\\n    <!-- <Card>\\r\\n        <Content>\\r\\n            <Highlight language={xml} code={code2} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card> -->\\r\\n    <h6 id=\\"questions\\">Questions</h6>\\r\\n    \\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">When can the algorithm terminate early? Can this algorithm be parallelized?</div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAkEI,iCAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KAAK,CACV,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IACZ,CACA,2BAAC,CAAE,4BAAG,CACF,OAAO,CAAE,GACb,CACQ,4BAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,4BAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,gCAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb,CACA,2BAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB,CACA,mCAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb,CACA,qCAAY,CACR,YAAY,SAAS,CACrB,SAAS,CAAE,GACf,CACA,wBAAW,CAAC,mBAAO,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,wBAAW,CAAC,eAAG,CACX,MAAM,CAAE,CAAC,CACT,WAAW,CAAE,GAAG,CAAC,KACrB,CACA,gCAAO,CACH,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACrB"}'
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
  set_store_value(currentPath, $currentPath = "Insertion Sort", $currentPath);
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

`;
  $$result.css.add(css$1);
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_darkMode();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-u9p3hi_START -->${$$result.title = `<title>Algorithms</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/layout"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-u9p3hi_END -->`, ""} <article class="svelte-y3e5l">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-y3e5l" data-svelte-h="svelte-1niy09r">Insertion Sort</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-y3e5l" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-1xd3in8"><li class="svelte-y3e5l"><a href="#description" class="svelte-y3e5l">Description</a></li> <li class="svelte-y3e5l"><a href="#visualization" class="svelte-y3e5l">Visualization</a></li> <li class="svelte-y3e5l"><a href="#pseudo" class="svelte-y3e5l">Pseudo code</a></li> <li class="svelte-y3e5l"><a href="#analysis" class="svelte-y3e5l">Analysis</a></li> <li class="svelte-y3e5l"><a href="#javascript" class="svelte-y3e5l">Javascript code</a></li> <li class="svelte-y3e5l"><a href="#questions" class="svelte-y3e5l">Questions</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="description" class="svelte-y3e5l" data-svelte-h="svelte-16ffqii">Description</h6> <div class="media svelte-y3e5l" data-svelte-h="svelte-7ibvka"><svg class="SVG Vectorial svelte-p2dk90" width="430" height="150" viewBox="19.33336639404297 105.99999237060547 430 150" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g class="Vectorial" transform="translate(0 0) scale(1)"><defs><marker id="Arrow-localImage61-10" refX="0" refY="5" markerWidth="6" markerHeight="6" markerUnits="strokeWidth" orient="auto-start-reverse" viewBox="0 0 10 10" preserveAspectRatio="xMidYMid meet"><path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(0, 0, 0, 1)" stroke="rgba(0, 0, 0, 1)" stroke-width="0" stroke-dasharray="none" opacity="1" filter="none" transform="matrix(1 0 0 1 0 0)"></path></marker></defs><g id="Layer-localImage61-0" class="draggable" fill="none" stroke="none" stroke-width="0" stroke-dasharray="none" vector-effect="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 0 0)"><rect id="Rect-localImage61-2" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -220 -62)"></rect><rect id="Rect-localImage61-3" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -165.33333333333394 -61.33331298828125)"></rect><rect id="Rect-localImage61-4" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -83.33329260349274 -63.33331298828125)"></rect><rect id="Rect-localImage61-5" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -27.999937057495117 -63.33331298828125)"></rect><rect id="Rect-localImage61-6" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 27.33341658115387 -63.33331298828125)"></rect><rect id="Rect-localImage61-7" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 82.66676640510559 -63.33331298828125)"></rect><rect id="Rect-localImage61-8" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 138.0001220703125 -63.33331298828125)"></rect><path id="Path-localImage61-9" class="draggable" d="M 149.36913617345283,203.164025927662 C 150.09218302690437,157.8100111660357 211.99993264675345,155.61043237416646 223.99993228912558,156.01043236224552 C 235.9999319314977,156.41043235032458 303.05159008945253,150.7406998532801 302.5181184256637,185.94097346243336" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="url(#Arrow-localImage61-10)" marker-mid="none" marker-end="none" transform="matrix(1 0 0 1 0 0)"></path><text id="Text-localImage61-11" class="draggable" x="250" y="250" fill="rgba(0, 0, 0, 1)" font-size="20px" font-weight="400" font-family="Roboto, sans-serif" filter="none" opacity="1" transform="matrix(1 0 0 1 -55.33331298828125 -102.66668701171875)">insert</text></g></g></svg></div> <p class="svelte-y3e5l">In insertion sort, the algorithm assumes that an initial part of the array is sorted. (At least the 1st element is sorted). With this assumption, a single loop starts with the 2nd element and <em data-svelte-h="svelte-nmqc5s">inserts</em> ${escape(`\\(a_i\\)`)} at <em data-svelte-h="svelte-l5knk">right</em> position in the sorted subarray ${escape(`\\(A[0 : i- 1]\\)`)}. Insertion sort is stable as well.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="visualization" class="svelte-y3e5l" data-svelte-h="svelte-1plo0r2">Visualization</h6> ${validate_component(Insertion, "Insertion").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="pseudo" class="svelte-y3e5l" data-svelte-h="svelte-avl5bh">Pseudo code</h6> <div class="pseudocode svelte-y3e5l" data-svelte-h="svelte-19aitg1"><span>function <strong class="svelte-y3e5l">InsertionSort</strong>(a):</span> <ul class="svelte-y3e5l"><li class="svelte-y3e5l">n = a.length</li> <li class="svelte-y3e5l">sorted = 0 (first element is sorted)</li> <li class="svelte-y3e5l">unsorted = 1 (next element needs to be sorted)</li> <li class="svelte-y3e5l">loop till sorted &lt; n:
                    <ul class="svelte-y3e5l"><li class="svelte-y3e5l">// insert a[unsorted] into a[0:sorted]</li> <li class="svelte-y3e5l">toBeInserted = a[unsorted]</li> <li class="svelte-y3e5l">from i = sorted till i &gt; 0 and swapped = true:
                            <ul class="svelte-y3e5l"><li class="svelte-y3e5l">if toBeInserted &lt; a[i]:
                                    <ul class="svelte-y3e5l"><li class="svelte-y3e5l">swap them.</li> <li class="svelte-y3e5l">swapped = true</li> <li class="svelte-y3e5l">i = i - 1</li></ul></li> <li class="svelte-y3e5l">else swapped = false</li></ul></li> <li class="svelte-y3e5l">increase sorted by one</li></ul></li> <li class="svelte-y3e5l">output the sorted array</li></ul></div> `;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="analysis" class="svelte-y3e5l" data-svelte-h="svelte-6lxl32">Analysis</h6> <p class="svelte-y3e5l">The outer loop runs ${escape(`\\(n\\)`)} times. In the worst case, at the ${escape(`\\(i\\)`)}th run, the algorithm makes ${escape(`\\(i\\)`)} comparisons. This gives a total comparisons of ${escape(`\\[n + (n-1) + \\cdots + 1 = \\frac{n(n - 1)}{2}\\]`)}</p> <p class="svelte-y3e5l" data-svelte-h="svelte-1hbdw6y">Notice we can use binary search to optimize the insertion. Unfortunately, we need to read almost all elements in the sorted part and shift (to the right). So while number of comparisons decrease to \\(O(\\log N)\\), the number of elements scanned remains \\(O(N)\\).</p> ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width: 100%" }, {}, {
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
                          return `Worst-case time complexity`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `${escape(`\\(O(n^2)\\)`)}`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `almost reverse order`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Best-case time complexity`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `${escape(`\\(O(n)\\)`)}`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `almost sorted`;
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
                          return `${escape(`\\(O(n^2)\\)`)}`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `On average, each element is compared with half of the previous elements.`;
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
                          return `${escape(`\\(O(1)\\)`)}`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `in-place algorithm`;
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
                          return `Yes`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `with early exit condition`;
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
  })} <h6 id="javascript" class="svelte-y3e5l" data-svelte-h="svelte-1fyitox">Javascript code</h6> ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: "Click on the run button to show console output.",
      cssContent: " ",
      jsContent: jsInsertion,
      selected: "JS",
      showConsole: true
    },
    {},
    {}
  )}  <h6 id="questions" class="svelte-y3e5l" data-svelte-h="svelte-7cwkek">Questions</h6> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-y3e5l" data-svelte-h="svelte-sb4s8s">When can the algorithm terminate early? Can this algorithm be parallelized?</div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
