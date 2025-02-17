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
import { B as Bubble } from "../../../../../../../chunks/Bubble.js";
const css$1 = {
  code: "article.svelte-1mhauf1.svelte-1mhauf1{display:flex;flex-direction:column;gap:0.5em;max-width:750px;width:90%;margin:auto}p.svelte-1mhauf1.svelte-1mhauf1,li.svelte-1mhauf1.svelte-1mhauf1{opacity:0.8}h4.svelte-1mhauf1.svelte-1mhauf1{margin:0.5em 0}h6.svelte-1mhauf1.svelte-1mhauf1{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}strong.svelte-1mhauf1.svelte-1mhauf1{color:goldenrod;opacity:1}a.svelte-1mhauf1.svelte-1mhauf1{cursor:pointer;text-decoration:none}.question.svelte-1mhauf1.svelte-1mhauf1{cursor:pointer;padding:0.3em}.pseudocode.svelte-1mhauf1.svelte-1mhauf1{font-family:monospace;font-size:1em}.pseudocode.svelte-1mhauf1 strong.svelte-1mhauf1{color:rgb(20, 175, 175)}.pseudocode.svelte-1mhauf1 ul.svelte-1mhauf1{margin:0;border-left:1px solid}.media.svelte-1mhauf1.svelte-1mhauf1{display:flex;align-items:center;justify-content:center}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { tileGrid } from \\"$lib/utils/common/tile\\";\\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import {page} from \'$app/stores\';\\r\\n    import {onMount} from \'svelte\';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, {Body, Head, Row, Cell} from \'@smui/data-table\';\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from \'$lib/components/NavList.svelte\'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/algorithms/content\\";\\r\\n    import { typeset } from \'$lib/shared/typeset\';\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n\\r\\n    import Bubble from \\"$lib/pages/courses/algorithms/Bubble.svelte\\";\\r\\n\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Bubble Sort\\";\\r\\n    \\r\\n    \\r\\n    let jsBubble = `function bubbleSort(arr) {\\r\\n    let n = arr.length;\\r\\n    let swapped;\\r\\n\\r\\n    do {\\r\\n        swapped = false;\\r\\n        for (let i = 0; i < n - 1; i++) {\\r\\n            if (arr[i] > arr[i + 1]) {\\r\\n                // Swap elements\\r\\n                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];\\r\\n                swapped = true;\\r\\n            }\\r\\n        }\\r\\n        n--; // Optimized by reducing the range of comparison\\r\\n    } while (swapped);\\r\\n\\r\\n    return arr;\\r\\n}\\r\\n\\r\\n// Example usage:\\r\\nlet numbers = [64, 34, 25, 12, 22, 11, 90];\\r\\nconsole.log(bubbleSort(numbers));\\r\\n`\\r\\n    let jsPseudo = `Procedure BubbleSort(array):\\r\\n    1. Set the length of the array as n.\\r\\n    2. Repeat the following steps until no swaps occur:\\r\\n        a. swapped = false\\r\\n        b. From first to second-last element:\\r\\n            i. If current element > next element:\\r\\n                - Swap them.\\r\\n                - swapped = true.\\r\\n        c. n = n - 1.\\r\\n    3. When no swaps occur in a full pass, the array is sorted.\\r\\n    4. Return the sorted array.`\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n        max-width: 750px;\\r\\n        width: 90%;\\r\\n        margin: auto;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n    \\r\\n    .pseudocode {\\r\\n        font-family:monospace;\\r\\n        font-size: 1em;\\r\\n    }\\r\\n    .pseudocode strong {\\r\\n        color: rgb(20, 175, 175);\\r\\n    }\\r\\n    .pseudocode ul {\\r\\n        margin: 0;\\r\\n        border-left: 1px solid;\\r\\n    }\\r\\n    .media {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Algorithms</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/layout\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Bubble Sort\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#description\\">Description</a></li>\\r\\n                <li><a href=\\"#visualization\\">Visualization</a></li>\\r\\n                <li><a href=\\"#pseudo\\">Pseudo code</a></li>\\r\\n                <li><a href=\\"#analysis\\">Analysis</a></li>\\r\\n                <li><a href=\\"#javascript\\">Javascript code</a></li>\\r\\n                <li><a href=\\"#questions\\">Questions</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"description\\">Description</h6>\\r\\n            <div class=\\"media\\">\\r\\n                <svg class=\\"SVG Vectorial svelte-p2dk90\\" width=\\"430\\" height=\\"150\\" viewBox=\\"19.33336639404297 105.99999237060547 430 150\\" xmlns=\\"http://www.w3.org/2000/svg\\" xmlns:xlink=\\"http://www.w3.org/1999/xlink\\"><g class=\\"Vectorial\\" transform=\\"translate(0 0) scale(1)\\"><defs><marker id=\\"Arrow-localImage56-10\\" refX=\\"0\\" refY=\\"5\\" markerWidth=\\"6\\" markerHeight=\\"6\\" markerUnits=\\"strokeWidth\\" orient=\\"auto-start-reverse\\" viewBox=\\"0 0 10 10\\" preserveAspectRatio=\\"xMidYMid meet\\"><path d=\\"M 0 0 L 10 5 L 0 10 z\\" fill=\\"rgba(0, 0, 0, 1)\\" stroke=\\"rgba(0, 0, 0, 1)\\" stroke-width=\\"0\\" stroke-dasharray=\\"none\\" opacity=\\"1\\" filter=\\"none\\" transform=\\"matrix(1 0 0 1 0 0)\\"></path></marker></defs><g id=\\"Layer-localImage56-0\\" class=\\"draggable\\" fill=\\"none\\" stroke=\\"none\\" stroke-width=\\"0\\" stroke-dasharray=\\"none\\" vector-effect=\\"none\\" opacity=\\"1\\" filter=\\"none\\" mask=\\"none\\" transform=\\"matrix(1 0 0 1 0 0)\\">   <rect id=\\"Rect-localImage56-2\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"rgba(0, 0, 0, 1)\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 -210.6666259765625 -64)\\"></rect>           <rect id=\\"Rect-localImage56-3\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"rgba(0, 0, 0, 1)\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 -153.99995930989644 -64)\\"></rect>           <rect id=\\"Rect-localImage56-4\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"rgba(0, 0, 0, 1)\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 -97.33329260349274 -64)\\"></rect>           <rect id=\\"Rect-localImage56-5\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"rgba(0, 0, 0, 1)\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 -40.6666259765625 -64)\\"></rect>           <rect id=\\"Rect-localImage56-6\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"rgba(0, 0, 0, 1)\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 16.000040650367737 -64)\\"></rect>           <rect id=\\"Rect-localImage56-7\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"rgba(0, 0, 0, 1)\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 72.66670727729797 -64)\\"></rect>           <rect id=\\"Rect-localImage56-8\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"rgba(0, 0, 0, 1)\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 129.3333740234375 -64)\\"></rect>              <path id=\\"Path-localImage56-9\\" class=\\"draggable\\" d=\\"M 233.36913367005786,174.49740080543154 C 233.42549353165947,154.47669827709498 251.99993145466055,152.94374544192118 263.9999310970327,153.34374543000024 C 275.9999307394048,153.7437454180793 292.58979840905073,152.74069979367545 292.72301373711184,174.60766081191116\\" fill=\\"rgba(0, 0, 0, 0)\\" fill-rule=\\"evenodd\\" stroke=\\"rgba(0, 0, 0, 1)\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" stroke-linejoin=\\"miter\\" stroke-miterlimit=\\"4\\" vector-effect=\\"none\\" opacity=\\"1\\" filter=\\"none\\" mask=\\"none\\" marker-start=\\"url(#Arrow-localImage56-10)\\" marker-mid=\\"none\\" marker-end=\\"url(#Arrow-localImage56-10)\\" transform=\\"matrix(1 0 0 1 0 0)\\"></path>            <text id=\\"Text-localImage56-11\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" fill=\\"rgba(0, 0, 0, 1)\\" font-size=\\"20px\\" font-weight=\\"400\\" font-family=\\"Roboto, sans-serif\\" filter=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 -11.33331298828125 -104.66668701171875)\\">swap</text>    </g></g></svg>\\r\\n            </div>\\r\\n            <p>\\r\\n                In bubble sort, the algorithm goes over the <em>entire</em> array multiple times till it is sorted. In each pass, it compares {`\\\\\\\\(a_i\\\\\\\\)`} with {`\\\\\\\\(a_{i + 1}\\\\\\\\)`}. If {`\\\\\\\\(a_i\\\\\\\\gt a_{i + 1}\\\\\\\\)`}, then they are swapped. Typically, this algorithm requires {`\\\\\\\\(O(n^2)\\\\\\\\)`} comparisons, but it is stable in the sense that relative position of equal elements are not changed.\\r\\n            </p>\\r\\n            <!-- <DataTable style=\\"width:100%\\">\\r\\n                <Head>\\r\\n                    <Row>\\r\\n                        <Cell>Propert value</Cell>\\r\\n                        <Cell>Description</Cell>\\r\\n                    </Row>\\r\\n                </Head>\\r\\n                <Body>\\r\\n                    <Row>\\r\\n                        <Cell><code>block</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">line breaks before and after the element</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>inline</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">keeps the element in the same line</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>none</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">removes the element from the DOM</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>flex</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">The element behaves like a block-level element and lays out its content according to the flexbox model.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>grid</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">The element behaves like a block-level element and lays out its content according to the grid model.</Cell>\\r\\n                    </Row>\\r\\n                </Body>\\r\\n            </DataTable> -->\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"visualization\\">Visualization</h6>\\r\\n            <Bubble />\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"pseudo\\">Pseudo code</h6>\\r\\n            <div class=\\"pseudocode\\">\\r\\n                <span>function <strong>BubbleSort</strong>(a):</span>\\r\\n                <ul>\\r\\n                    <li>n = a.length</li>\\r\\n                    <li>loop till n > 0 and a swap occurred:\\r\\n                    <ul><li>swapped = false</li>\\r\\n                        <li>From first to second-last element:\\r\\n                            <ul>\\r\\n                                <li>if current element > next element:\\r\\n                                    <ul>\\r\\n                                        <li>swap them.</li>\\r\\n                                        <li>swapped = true</li>\\r\\n                                    </ul>\\r\\n                                </li>\\r\\n                            </ul> \\r\\n                        </li>\\r\\n                        <li>decrease n by one </li>\\r\\n                        </ul>\\r\\n                    </li>\\r\\n                    <li>output the sorted array</li>\\r\\n                </ul>\\r\\n            </div>\\r\\n            <!-- <Highlight language={xml} code={jsPseudo} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight> -->\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"analysis\\">Analysis</h6>\\r\\n            <p>\\r\\n                The outer loop runs {`\\\\\\\\(n\\\\\\\\)`} times. In the worst case, at the {`\\\\\\\\(i\\\\\\\\)`}th run, the algorithm makes {`\\\\\\\\(i\\\\\\\\)`} comparisons. This gives a total comparisons of {`\\\\\\\\[n + (n-1) + \\\\\\\\cdots + 1 = \\\\\\\\frac{n(n - 1)}{2}\\\\\\\\]`}\\r\\n            </p>\\r\\n            <DataTable style=\\"width: 100%\\">\\r\\n                <Head>\\r\\n                    <Row>\\r\\n                        <Cell>Aspect</Cell>\\r\\n                        <Cell>Complexity</Cell>\\r\\n                        <Cell>Description</Cell>\\r\\n                    </Row>\\r\\n                </Head>\\r\\n                <Body>\\r\\n                    <Row>\\r\\n                        <Cell>Worst-case time complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{`\\\\\\\\(O(n^2)\\\\\\\\)`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">almost reverse order</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Best-case time complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{`\\\\\\\\(O(n)\\\\\\\\)`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">almost sorted</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Average-case time complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{`\\\\\\\\(O(n^2)\\\\\\\\)`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">assume random sample</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Space complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{`\\\\\\\\(O(1)\\\\\\\\)`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">in-place algorithm</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Stable?</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Yes</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Preserves the order of equal elements</Cell>\\r\\n                    </Row>\\r\\n                    \\r\\n                    <Row>\\r\\n                        <Cell>Adaptive?</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Yes</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">with early exit condition</Cell>\\r\\n                    </Row>\\r\\n                </Body>\\r\\n            </DataTable>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <h6 id=\\"javascript\\">Javascript code</h6>\\r\\n    <WebPractice htmlContent={\'Click on the run button to show console output.\'} cssContent={\' \'} jsContent={jsBubble} selected={\'JS\'} showConsole />\\r\\n    \\r\\n    <!-- <Card>\\r\\n        <Content>\\r\\n            <Highlight language={xml} code={code2} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card> -->\\r\\n    <h6 id=\\"questions\\">Questions</h6>\\r\\n    \\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">When can the algorithm terminate early? Can this algorithm be parallelized?</div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAmEI,qCAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KAAK,CACV,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IACZ,CACA,+BAAC,CAAE,gCAAG,CACF,OAAO,CAAE,GACb,CACQ,gCAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,gCAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,oCAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb,CACA,+BAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB,CACA,uCAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb,CAEA,yCAAY,CACR,YAAY,SAAS,CACrB,SAAS,CAAE,GACf,CACA,0BAAW,CAAC,qBAAO,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,0BAAW,CAAC,iBAAG,CACX,MAAM,CAAE,CAAC,CACT,WAAW,CAAE,GAAG,CAAC,KACrB,CACA,oCAAO,CACH,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACrB"}'
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
  set_store_value(currentPath, $currentPath = "Bubble Sort", $currentPath);
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
`;
  $$result.css.add(css$1);
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_darkMode();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-u9p3hi_START -->${$$result.title = `<title>Algorithms</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/layout"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-u9p3hi_END -->`, ""} <article class="svelte-1mhauf1">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1mhauf1" data-svelte-h="svelte-1lbzv54">Bubble Sort</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1mhauf1" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-1xd3in8"><li class="svelte-1mhauf1"><a href="#description" class="svelte-1mhauf1">Description</a></li> <li class="svelte-1mhauf1"><a href="#visualization" class="svelte-1mhauf1">Visualization</a></li> <li class="svelte-1mhauf1"><a href="#pseudo" class="svelte-1mhauf1">Pseudo code</a></li> <li class="svelte-1mhauf1"><a href="#analysis" class="svelte-1mhauf1">Analysis</a></li> <li class="svelte-1mhauf1"><a href="#javascript" class="svelte-1mhauf1">Javascript code</a></li> <li class="svelte-1mhauf1"><a href="#questions" class="svelte-1mhauf1">Questions</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="description" class="svelte-1mhauf1" data-svelte-h="svelte-16ffqii">Description</h6> <div class="media svelte-1mhauf1" data-svelte-h="svelte-guwi95"><svg class="SVG Vectorial svelte-p2dk90" width="430" height="150" viewBox="19.33336639404297 105.99999237060547 430 150" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g class="Vectorial" transform="translate(0 0) scale(1)"><defs><marker id="Arrow-localImage56-10" refX="0" refY="5" markerWidth="6" markerHeight="6" markerUnits="strokeWidth" orient="auto-start-reverse" viewBox="0 0 10 10" preserveAspectRatio="xMidYMid meet"><path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(0, 0, 0, 1)" stroke="rgba(0, 0, 0, 1)" stroke-width="0" stroke-dasharray="none" opacity="1" filter="none" transform="matrix(1 0 0 1 0 0)"></path></marker></defs><g id="Layer-localImage56-0" class="draggable" fill="none" stroke="none" stroke-width="0" stroke-dasharray="none" vector-effect="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 0 0)"><rect id="Rect-localImage56-2" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -210.6666259765625 -64)"></rect><rect id="Rect-localImage56-3" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -153.99995930989644 -64)"></rect><rect id="Rect-localImage56-4" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -97.33329260349274 -64)"></rect><rect id="Rect-localImage56-5" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -40.6666259765625 -64)"></rect><rect id="Rect-localImage56-6" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 16.000040650367737 -64)"></rect><rect id="Rect-localImage56-7" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 72.66670727729797 -64)"></rect><rect id="Rect-localImage56-8" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 129.3333740234375 -64)"></rect><path id="Path-localImage56-9" class="draggable" d="M 233.36913367005786,174.49740080543154 C 233.42549353165947,154.47669827709498 251.99993145466055,152.94374544192118 263.9999310970327,153.34374543000024 C 275.9999307394048,153.7437454180793 292.58979840905073,152.74069979367545 292.72301373711184,174.60766081191116" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="url(#Arrow-localImage56-10)" marker-mid="none" marker-end="url(#Arrow-localImage56-10)" transform="matrix(1 0 0 1 0 0)"></path><text id="Text-localImage56-11" class="draggable" x="250" y="250" fill="rgba(0, 0, 0, 1)" font-size="20px" font-weight="400" font-family="Roboto, sans-serif" filter="none" opacity="1" transform="matrix(1 0 0 1 -11.33331298828125 -104.66668701171875)">swap</text></g></g></svg></div> <p class="svelte-1mhauf1">In bubble sort, the algorithm goes over the <em data-svelte-h="svelte-1ju3pu3">entire</em> array multiple times till it is sorted. In each pass, it compares ${escape(`\\(a_i\\)`)} with ${escape(`\\(a_{i + 1}\\)`)}. If ${escape(`\\(a_i\\gt a_{i + 1}\\)`)}, then they are swapped. Typically, this algorithm requires ${escape(`\\(O(n^2)\\)`)} comparisons, but it is stable in the sense that relative position of equal elements are not changed.</p> `;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="visualization" class="svelte-1mhauf1" data-svelte-h="svelte-1plo0r2">Visualization</h6> ${validate_component(Bubble, "Bubble").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="pseudo" class="svelte-1mhauf1" data-svelte-h="svelte-avl5bh">Pseudo code</h6> <div class="pseudocode svelte-1mhauf1" data-svelte-h="svelte-9veoys"><span>function <strong class="svelte-1mhauf1">BubbleSort</strong>(a):</span> <ul class="svelte-1mhauf1"><li class="svelte-1mhauf1">n = a.length</li> <li class="svelte-1mhauf1">loop till n &gt; 0 and a swap occurred:
                    <ul class="svelte-1mhauf1"><li class="svelte-1mhauf1">swapped = false</li> <li class="svelte-1mhauf1">From first to second-last element:
                            <ul class="svelte-1mhauf1"><li class="svelte-1mhauf1">if current element &gt; next element:
                                    <ul class="svelte-1mhauf1"><li class="svelte-1mhauf1">swap them.</li> <li class="svelte-1mhauf1">swapped = true</li></ul></li></ul></li> <li class="svelte-1mhauf1">decrease n by one</li></ul></li> <li class="svelte-1mhauf1">output the sorted array</li></ul></div> `;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="analysis" class="svelte-1mhauf1" data-svelte-h="svelte-6lxl32">Analysis</h6> <p class="svelte-1mhauf1">The outer loop runs ${escape(`\\(n\\)`)} times. In the worst case, at the ${escape(`\\(i\\)`)}th run, the algorithm makes ${escape(`\\(i\\)`)} comparisons. This gives a total comparisons of ${escape(`\\[n + (n-1) + \\cdots + 1 = \\frac{n(n - 1)}{2}\\]`)}</p> ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width: 100%" }, {}, {
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
                          return `assume random sample`;
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
  })} <h6 id="javascript" class="svelte-1mhauf1" data-svelte-h="svelte-1fyitox">Javascript code</h6> ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: "Click on the run button to show console output.",
      cssContent: " ",
      jsContent: jsBubble,
      selected: "JS",
      showConsole: true
    },
    {},
    {}
  )}  <h6 id="questions" class="svelte-1mhauf1" data-svelte-h="svelte-7cwkek">Questions</h6> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1mhauf1" data-svelte-h="svelte-sb4s8s">When can the algorithm terminate early? Can this algorithm be parallelized?</div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
