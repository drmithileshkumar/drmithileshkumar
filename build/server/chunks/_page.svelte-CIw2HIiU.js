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
import { c as contentNav, a as contents } from './content-CLglG6Dg.js';
import { P as Pathlist } from './Pathlist-B9wgcfC1.js';
import { C as CourseNavigation } from './CourseNavigation-DznSxbmO.js';
import { Q as Quick } from './Quick-glhKfBle.js';
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
import './tweened-CGryJVAf.js';
import './FormField-CQ11Qxdo.js';
import './Dialog-DnxCTH9Z.js';
import './Actions2-D_E0WmBW.js';
import './Checkbox-6gc4AgBs.js';
import './IconButton-Bt4YIh4x.js';
import './dispatch-BOSWPsEc.js';
import './_commonjsHelpers-B85MJLTf.js';

const css$1 = {
  code: "article.svelte-1ptklpl{display:flex;flex-direction:column;gap:0.5em}p.svelte-1ptklpl,li.svelte-1ptklpl{opacity:0.8}h4.svelte-1ptklpl{margin:0.5em 0}h6.svelte-1ptklpl{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}a.svelte-1ptklpl{cursor:pointer;text-decoration:none}.question.svelte-1ptklpl{cursor:pointer;padding:0.3em}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { tileGrid } from \\"$lib/utils/common/tile\\";\\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import {page} from \'$app/stores\';\\r\\n    import {onMount} from \'svelte\';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, {Body, Head, Row, Cell} from \'@smui/data-table\';\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from \'$lib/components/NavList.svelte\'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/algorithms/content\\";\\r\\n    import { typeset } from \'$lib/shared/typeset\';\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n\\r\\n    import Quick from \\"$lib/pages/courses/algorithms/Quick.svelte\\";\\r\\n\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Quick Sort\\";\\r\\n    $darkMode = false;\\r\\n    \\r\\n    let jsQuick = `function quickSort(arr) {\\r\\n    if (arr.length <= 1) return arr; // Base case: a single element is already sorted\\r\\n\\r\\n    let pivot = arr[Math.floor(arr.length / 2)]; // Choose pivot (middle element)\\r\\n    let left = [], right = [], equal = [];\\r\\n\\r\\n    // Partition the array into left, equal, and right\\r\\n    for (let num of arr) {\\r\\n        if (num < pivot) left.push(num);\\r\\n        else if (num > pivot) right.push(num);\\r\\n        else equal.push(num);\\r\\n    }\\r\\n\\r\\n    // Recursively sort left and right, then concatenate\\r\\n    return [...quickSort(left), ...equal, ...quickSort(right)];\\r\\n}\\r\\n\\r\\n// Example usage:\\r\\nlet numbers = [5, 3, 8, 4, 2];\\r\\nconsole.log(quickSort(numbers)); // Output: [2, 3, 4, 5, 8]\\r\\n`\\r\\n    let jsPseudo = `Procedure QuickSort(array):\\r\\n    1. Start with an array that needs to be sorted.\\r\\n    2. If the array has only one element or is empty, return it (base case).\\r\\n    3. Pick a \\"pivot\\" element from the array.\\r\\n    4. Partition the array into three parts:\\r\\n        a. A left subarray with elements smaller than the pivot.\\r\\n        b. The pivot itself.\\r\\n        c. A right subarray with elements greater than the pivot.\\r\\n    5. Recursively apply Quick Sort to the left and right subarrays.\\r\\n    6. Combine the sorted left subarray, pivot, and sorted right subarray.\\r\\n    7. End the algorithm when all elements are in order.`\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n    .cell {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        border: 1px solid teal;\\r\\n        height: auto;\\r\\n    }\\r\\n    .grid {\\r\\n        display: grid;\\r\\n        gap: 0.1em;\\r\\n        height: 300px;\\r\\n        width: 300px;\\r\\n        border: 1px solid gray;\\r\\n        padding: 0.1em;\\r\\n        margin: auto;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Algorithms</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/layout\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Quick Sort\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#description\\">Description</a></li>\\r\\n                <li><a href=\\"#visualization\\">Visualization</a></li>\\r\\n                <li><a href=\\"#pseudo\\">Pseudo code</a></li>\\r\\n                <li><a href=\\"#analysis\\">Analysis</a></li>\\r\\n                <li><a href=\\"#javascript\\">Javascript code</a></li>\\r\\n                <li><a href=\\"#questions\\">Questions</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"description\\">Description</h6>\\r\\n            <p>\\r\\n                Quick sort is similar to the <em>divide and conquer</em> approach of merge sort. Choose a random element as <em>pivot</em>. <em>Partition</em> the array around the pivot such that elements smaller than the pivot are in one partition and elements larger than the pivot are in another partition. Then sort the partitions recursively. Depending on implementation, this algorithm takes {`\\\\\\\\(O(n\\\\\\\\log n)\\\\\\\\)`} number of comparisons and may not be stable.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"visualization\\">Visualization</h6>\\r\\n            <Quick />\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"pseudo\\">Pseudo code</h6>\\r\\n            <Highlight language={xml} code={jsPseudo} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"analysis\\">Analysis</h6>\\r\\n            <p>\\r\\n                Let {`\\\\\\\\(T(n)\\\\\\\\)`} represent the time taken by the algorithm.\\r\\n                In the worst case, the chosen \'pivot\' gives a partion of size {`\\\\\\\\(0\\\\\\\\)`}. This leads to {`\\\\\\\\(n - i\\\\\\\\)`} comparisons at the {`\\\\\\\\(i\\\\\\\\)`}th recursive call, i.e. {`\\\\\\\\[T(n) = \\\\\\\\sum (n-i) = \\\\\\\\frac{n(n-1)}{2}\\\\\\\\]`}\\r\\n                In the best or average case, the partitions are of equal size.\\r\\n                 At each recursive step, we have two quick sort instances of half size and finding the pivot position requires {`\\\\\\\\(O(n)\\\\\\\\)`} time. This leads to the following recurrence relation:\\r\\n                {`\\\\\\\\[\\r\\n                \\\\\\\\begin{align}\\r\\n                T(n) &= 2  T\\\\\\\\left(\\\\\\\\frac{n}{2}\\\\\\\\right ) + O(n)\\\\\\\\\\\\\\\\\\r\\n                     &= O(n\\\\\\\\log n)\\r\\n                \\\\\\\\end{align}\\r\\n                \\\\\\\\]`}\\r\\n            </p>\\r\\n            <DataTable style=\\"width: 100%\\">\\r\\n                <Head>\\r\\n                    <Row>\\r\\n                        <Cell>Aspect</Cell>\\r\\n                        <Cell>Complexity</Cell>\\r\\n                        <Cell>Description</Cell>\\r\\n                    </Row>\\r\\n                </Head>\\r\\n                <Body>\\r\\n                    <Row>\\r\\n                        <Cell>Best-case time complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{`\\\\\\\\(O(n\\\\\\\\log n)\\\\\\\\)`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Balanced partitioning (each split is even).</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Worst-case time complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{`\\\\\\\\(O(n^2)\\\\\\\\)`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Happens when the pivot is always the smallest or largest element, leading to unbalanced partitions.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Average-case time complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{`\\\\\\\\(O(n\\\\\\\\log n)\\\\\\\\)`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">On average, partitioning happens in a balanced way.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Space complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{`\\\\\\\\(O(\\\\\\\\log n)\\\\\\\\)`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">in-place, space for recursize calls</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Stable?</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">No</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">May not maintain the relative order of duplicate elements.</Cell>\\r\\n                    </Row>\\r\\n                    \\r\\n                    <Row>\\r\\n                        <Cell>Adaptive?</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">No</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">but can be made to check before recursing for partitions for very small size, i.e. choose pivot again</Cell>\\r\\n                    </Row>\\r\\n                </Body>\\r\\n            </DataTable>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <h6 id=\\"javascript\\">Javascript code</h6>\\r\\n    <WebPractice htmlContent={\'Click on the run button to show console output.\'} cssContent={\' \'} jsContent={jsQuick} selected={\'JS\'} showConsole />\\r\\n    \\r\\n    <!-- <Card>\\r\\n        <Content>\\r\\n            <Highlight language={xml} code={code2} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card> -->\\r\\n    <h6 id=\\"questions\\">Questions</h6>\\r\\n    \\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">When can the algorithm terminate early? Can this algorithm be parallelized?</div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAiEI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAC,CAAE,iBAAG,CACF,OAAO,CAAE,GACb,CACQ,iBAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CAKA,gBAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB,CACA,wBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb"}'
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
  set_store_value(currentPath, $currentPath = "Quick Sort", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
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
`;
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
    7. End the algorithm when all elements are in order.`;
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
  )} <h4 class="svelte-1ptklpl" data-svelte-h="svelte-ormbtl">Quick Sort</h4> ${validate_component(Card, "Card").$$render(
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
          return `<h6 id="description" class="svelte-1ptklpl" data-svelte-h="svelte-16ffqii">Description</h6> <p class="svelte-1ptklpl">Quick sort is similar to the <em data-svelte-h="svelte-ol16kj">divide and conquer</em> approach of merge sort. Choose a random element as <em data-svelte-h="svelte-9v3usa">pivot</em>. <em data-svelte-h="svelte-12ks0a8">Partition</em> the array around the pivot such that elements smaller than the pivot are in one partition and elements larger than the pivot are in another partition. Then sort the partitions recursively. Depending on implementation, this algorithm takes ${escape(`\\(O(n\\log n)\\)`)} number of comparisons and may not be stable.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="visualization" class="svelte-1ptklpl" data-svelte-h="svelte-1plo0r2">Visualization</h6> ${validate_component(Quick, "Quick").$$render($$result, {}, {}, {})}`;
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
          return `<h6 id="analysis" class="svelte-1ptklpl" data-svelte-h="svelte-6lxl32">Analysis</h6> <p class="svelte-1ptklpl">Let ${escape(`\\(T(n)\\)`)} represent the time taken by the algorithm.
                In the worst case, the chosen &#39;pivot&#39; gives a partion of size ${escape(`\\(0\\)`)}. This leads to ${escape(`\\(n - i\\)`)} comparisons at the ${escape(`\\(i\\)`)}th recursive call, i.e. ${escape(`\\[T(n) = \\sum (n-i) = \\frac{n(n-1)}{2}\\]`)}
                In the best or average case, the partitions are of equal size.
                 At each recursive step, we have two quick sort instances of half size and finding the pivot position requires ${escape(`\\(O(n)\\)`)} time. This leads to the following recurrence relation:
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
                          return `Balanced partitioning (each split is even).`;
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
                          return `${escape(`\\(O(n^2)\\)`)}`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `Happens when the pivot is always the smallest or largest element, leading to unbalanced partitions.`;
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
                          return `On average, partitioning happens in a balanced way.`;
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
                          return `${escape(`\\(O(\\log n)\\)`)}`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `in-place, space for recursize calls`;
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
                          return `No`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `May not maintain the relative order of duplicate elements.`;
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
                          return `but can be made to check before recursing for partitions for very small size, i.e. choose pivot again`;
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
      jsContent: jsQuick,
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
//# sourceMappingURL=_page.svelte-CIw2HIiU.js.map
