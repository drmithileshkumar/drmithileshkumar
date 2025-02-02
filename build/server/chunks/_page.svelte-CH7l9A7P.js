import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr2-CDgUAJs6.js';
import { x as xml } from './xml-DVVcaHI4.js';
import { g as githubDark, a as github } from './github-dark-BC3MHtr2.js';
import { W as WebPractice } from './WebPractice-DZHtRtZk.js';
import { p as page } from './stores3-DPEAZJnM.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import { D as DataTable, R as Row, C as Cell, B as Body } from './Cell-Y_QU_UIA.js';
import { H as Head } from './Head-B4BwnM3n.js';
import './Subheader-DEm_inUP.js';
import './client-k3u4ChD_.js';
import { d as darkMode, c as currentPath, n as navList } from './stores-Cecnyqn_.js';
import { c as contentNav, a as contents } from './content-BQ2vForv.js';
import { P as Pathlist } from './Pathlist-B9wgcfC1.js';
import { C as CourseNavigation } from './CourseNavigation-DznSxbmO.js';
import './Actions2-D_E0WmBW.js';
import { H as Highlight, L as LineNumbers } from './LineNumbers-Cbvr0mA1.js';
import './Segment-CO7DIWEy.js';
import './index2-D2s-XE5r.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './ContextFragment-CedcH2TL.js';
import './CommonLabel-CFEgn-mu.js';
import './SmuiElement-CKXCSgE1.js';
import './Suffix-CtI6fDI6.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './Button-DTp4JSRw.js';
import './Ripple-N--aPaMn.js';
import '@codemirror/lang-javascript';
import '@codemirror/lang-xml';
import '@codemirror/lang-css';
import './prefixFilter-B6cFZsw3.js';
import './exports-kR70XCWV.js';
import './_commonjsHelpers-B85MJLTf.js';

const css$1 = {
  code: "article.svelte-1ptklpl{display:flex;flex-direction:column;gap:0.5em}p.svelte-1ptklpl,li.svelte-1ptklpl{opacity:0.8}h4.svelte-1ptklpl{margin:0.5em 0}h6.svelte-1ptklpl{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}a.svelte-1ptklpl{cursor:pointer;text-decoration:none}.question.svelte-1ptklpl{cursor:pointer;padding:0.3em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { tileGrid } from \\"$lib/utils/common/tile\\";\\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, {Body, Head, Row, Cell} from '@smui/data-table';\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/algorithms/content\\";\\r\\n    import { typeset } from '$lib/shared/typeset';\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n\\r\\n    import Bubble from \\"$lib/pages/courses/algorithms/Bubble.svelte\\";\\r\\n\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Bucket Sort\\";\\r\\n    $darkMode = false;\\r\\n    \\r\\n    let jsBubble = \`function bucketSort(arr, numBuckets = 10) {\\r\\n    if (arr.length === 0) return arr;\\r\\n\\r\\n    // Find min and max values\\r\\n    let minValue = Math.min(...arr);\\r\\n    let maxValue = Math.max(...arr);\\r\\n    let bucketRange = (maxValue - minValue) / numBuckets;\\r\\n\\r\\n    // Initialize buckets\\r\\n    let buckets = Array.from({ length: numBuckets }, () => []);\\r\\n\\r\\n    // Distribute elements into buckets\\r\\n    for (let num of arr) {\\r\\n        let bucketIndex = Math.floor((num - minValue) / bucketRange);\\r\\n        if (bucketIndex === numBuckets) bucketIndex--; // Edge case: max value\\r\\n        buckets[bucketIndex].push(num);\\r\\n    }\\r\\n\\r\\n    // Sort each bucket and concatenate\\r\\n    return buckets.reduce((sortedArray, bucket) => {\\r\\n        return sortedArray.concat(bucket.sort((a, b) => a - b)); // Using built-in sort\\r\\n    }, []);\\r\\n}\\r\\n\\r\\n// Example Usage:\\r\\nlet numbers = [0.42, 0.32, 0.23, 0.52, 0.25, 0.47, 0.51];\\r\\nconsole.log(bucketSort(numbers));\\r\\n\`\\r\\n    let jsPseudo = \`BUCKET_SORT(array, numBuckets):\\r\\n    1. Create 'numBuckets' empty buckets (lists).\\r\\n    2. Find the maximum and minimum values in the array.\\r\\n    3. Define a function to map an element to a bucket based on its value.\\r\\n    4. Iterate through the array:\\r\\n        - Place each element in its appropriate bucket.\\r\\n    5. Sort each bucket (using Insertion Sort or another sorting algorithm).\\r\\n    6. Concatenate all sorted buckets to produce the final sorted array.\`\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n    .cell {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        border: 1px solid teal;\\r\\n        height: auto;\\r\\n    }\\r\\n    .grid {\\r\\n        display: grid;\\r\\n        gap: 0.1em;\\r\\n        height: 300px;\\r\\n        width: 300px;\\r\\n        border: 1px solid gray;\\r\\n        padding: 0.1em;\\r\\n        margin: auto;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Algorithms</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/layout\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Bucket Sort\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#description\\">Description</a></li>\\r\\n                <li><a href=\\"#visualization\\">Visualization</a></li>\\r\\n                <li><a href=\\"#pseudo\\">Pseudo code</a></li>\\r\\n                <li><a href=\\"#analysis\\">Analysis</a></li>\\r\\n                <li><a href=\\"#javascript\\">Javascript code</a></li>\\r\\n                <li><a href=\\"#questions\\">Questions</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"description\\">Description</h6>\\r\\n            <p>\\r\\n                Bucket Sort is a distribution-based sorting algorithm that divides the input into several \\"buckets\\" and then sorts each bucket individually. Usually the number of buckets \\\\(k = O(n)\\\\), i.e. each bucket is <em>supposed</em> be of size \\\\(O(1)\\\\). It is particularly efficient for uniformly distributed floating-point numbers in a known range (e.g., [0,1)).\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"visualization\\">Visualization</h6>\\r\\n            <!-- <Bubble /> -->\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"pseudo\\">Pseudo code</h6>\\r\\n            <Highlight language={xml} code={jsPseudo} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"analysis\\">Analysis</h6>\\r\\n            <p>\\r\\n                In the best-case, all buckets are of size \\\\(O(1)\\\\) which implies they can be sorted in \\\\(O(1)\\\\) time. Concatenating buckets takes \\\\(O(n)\\\\) time. This implies a running time of \\\\(O(n + k)\\\\). In the average case, the average size of each bucket is \\\\(n/k\\\\). Even when insertion sort is used, sorting \\\\(k\\\\) buckets takes \\\\(k\\\\cdot O((n/k)^2 = O(n^2/k) = O(n)\\\\) time. In the worst-case, the distribution is skewed leading to bucket size \\\\(O(n)\\\\), hence running time of \\\\(O(n^2)\\\\). The buckets need to be placed on separate work memory of \\\\(O(n)\\\\).\\r\\n            </p>\\r\\n            <DataTable style=\\"width: 100%\\">\\r\\n                <Head>\\r\\n                    <Row>\\r\\n                        <Cell>Aspect</Cell>\\r\\n                        <Cell>Complexity</Cell>\\r\\n                        <Cell>Description</Cell>\\r\\n                    </Row>\\r\\n                </Head>\\r\\n                <Body>\\r\\n                    <Row>\\r\\n                        <Cell>Worst-case time complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{\`\\\\\\\\(O(n^2)\\\\\\\\)\`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">if all elements land in one bucket</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Best-case time complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{\`\\\\\\\\(O(n)\\\\\\\\)\`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">when data is evenly distributed, and buckets are small</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Average-case time complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{\`\\\\\\\\(O(n)\\\\\\\\)\`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">assume random sample</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Space complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{\`\\\\\\\\(O(n)\\\\\\\\)\`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">for storing buckets separately</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Stable?</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Yes</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">if individual buckets maintain relative order</Cell>\\r\\n                    </Row>\\r\\n                    \\r\\n                    <Row>\\r\\n                        <Cell>Adaptive?</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">No</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">performs the same number of operations even if nearly sorted</Cell>\\r\\n                    </Row>\\r\\n                </Body>\\r\\n            </DataTable>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <h6 id=\\"javascript\\">Javascript code</h6>\\r\\n    <WebPractice htmlContent={'Click on the run button to show console output.'} cssContent={' '} jsContent={jsBubble} selected={'JS'} showConsole />\\r\\n    \\r\\n    <!-- <Card>\\r\\n        <Content>\\r\\n            <Highlight language={xml} code={code2} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card> -->\\r\\n    <h6 id=\\"questions\\">Questions</h6>\\r\\n    \\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">When can the algorithm terminate early? Can this algorithm be parallelized?</div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAqEI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAC,CAAE,iBAAG,CACF,OAAO,CAAE,GACb,CACQ,iBAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CAKA,gBAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB,CACA,wBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  let $navList, $$unsubscribe_navList;
  let $page, $$unsubscribe_page;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Bucket Sort", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
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
`;
  let jsPseudo = `BUCKET_SORT(array, numBuckets):
    1. Create 'numBuckets' empty buckets (lists).
    2. Find the maximum and minimum values in the array.
    3. Define a function to map an element to a bucket based on its value.
    4. Iterate through the array:
        - Place each element in its appropriate bucket.
    5. Sort each bucket (using Insertion Sort or another sorting algorithm).
    6. Concatenate all sorted buckets to produce the final sorted array.`;
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-u9p3hi_START -->${$$result.title = `<title>Algorithms</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/layout"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-u9p3hi_END -->`, ""} <article class="svelte-1ptklpl">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1ptklpl" data-svelte-h="svelte-12xahg8">Bucket Sort</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1ptklpl" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-1xd3in8"><li class="svelte-1ptklpl"><a href="#description" class="svelte-1ptklpl">Description</a></li> <li class="svelte-1ptklpl"><a href="#visualization" class="svelte-1ptklpl">Visualization</a></li> <li class="svelte-1ptklpl"><a href="#pseudo" class="svelte-1ptklpl">Pseudo code</a></li> <li class="svelte-1ptklpl"><a href="#analysis" class="svelte-1ptklpl">Analysis</a></li> <li class="svelte-1ptklpl"><a href="#javascript" class="svelte-1ptklpl">Javascript code</a></li> <li class="svelte-1ptklpl"><a href="#questions" class="svelte-1ptklpl">Questions</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="description" class="svelte-1ptklpl" data-svelte-h="svelte-16ffqii">Description</h6> <p class="svelte-1ptklpl" data-svelte-h="svelte-cc30ah">Bucket Sort is a distribution-based sorting algorithm that divides the input into several &quot;buckets&quot; and then sorts each bucket individually. Usually the number of buckets \\(k = O(n)\\), i.e. each bucket is <em>supposed</em> be of size \\(O(1)\\). It is particularly efficient for uniformly distributed floating-point numbers in a known range (e.g., [0,1)).</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="visualization" class="svelte-1ptklpl" data-svelte-h="svelte-1plo0r2">Visualization</h6> `;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="pseudo" class="svelte-1ptklpl" data-svelte-h="svelte-avl5bh">Pseudo code</h6> ${validate_component(Highlight, "Highlight").$$render($$result, { language: xml, code: jsPseudo }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })}`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="analysis" class="svelte-1ptklpl" data-svelte-h="svelte-6lxl32">Analysis</h6> <p class="svelte-1ptklpl" data-svelte-h="svelte-1s49wfc">In the best-case, all buckets are of size \\(O(1)\\) which implies they can be sorted in \\(O(1)\\) time. Concatenating buckets takes \\(O(n)\\) time. This implies a running time of \\(O(n + k)\\). In the average case, the average size of each bucket is \\(n/k\\). Even when insertion sort is used, sorting \\(k\\) buckets takes \\(k\\cdot O((n/k)^2 = O(n^2/k) = O(n)\\) time. In the worst-case, the distribution is skewed leading to bucket size \\(O(n)\\), hence running time of \\(O(n^2)\\). The buckets need to be placed on separate work memory of \\(O(n)\\).</p> ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width: 100%" }, {}, {
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
                          return `if all elements land in one bucket`;
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
                          return `when data is evenly distributed, and buckets are small`;
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
                          return `${escape(`\\(O(n)\\)`)}`;
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
                          return `${escape(`\\(O(n)\\)`)}`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `for storing buckets separately`;
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
                          return `if individual buckets maintain relative order`;
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
                          return `performs the same number of operations even if nearly sorted`;
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
  })} <h6 id="javascript" class="svelte-1ptklpl" data-svelte-h="svelte-1fyitox">Javascript code</h6> ${validate_component(WebPractice, "WebPractice").$$render(
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
  )}  <h6 id="questions" class="svelte-1ptklpl" data-svelte-h="svelte-7cwkek">Questions</h6> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1ptklpl" data-svelte-h="svelte-sb4s8s">When can the algorithm terminate early? Can this algorithm be parallelized?</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CH7l9A7P.js.map
