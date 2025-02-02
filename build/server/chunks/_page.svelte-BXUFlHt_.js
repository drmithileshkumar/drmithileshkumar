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
import { M as Merge } from './Merge-BPFi6BTu.js';
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
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { tileGrid } from \\"$lib/utils/common/tile\\";\\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import {page} from \'$app/stores\';\\r\\n    import {onMount} from \'svelte\';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, {Body, Head, Row, Cell} from \'@smui/data-table\';\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from \'$lib/components/NavList.svelte\'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/algorithms/content\\";\\r\\n    import { typeset } from \'$lib/shared/typeset\';\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n\\r\\n    import Merge from \\"$lib/pages/courses/algorithms/Merge.svelte\\";\\r\\n\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Merge Sort\\";\\r\\n    $darkMode = false;\\r\\n    \\r\\n    let jsMerge = `function mergeSort(arr) {\\r\\n    if (arr.length <= 1) return arr; // Base case: a single element is already sorted\\r\\n\\r\\n    let mid = Math.floor(arr.length / 2); // Find the middle index\\r\\n    let left = mergeSort(arr.slice(0, mid)); // Recursively sort left half\\r\\n    let right = mergeSort(arr.slice(mid)); // Recursively sort right half\\r\\n\\r\\n    return merge(left, right); // Merge the sorted halves\\r\\n}\\r\\n\\r\\nfunction merge(left, right) {\\r\\n    let sortedArray = [];\\r\\n    let i = 0, j = 0;\\r\\n\\r\\n    // Merge elements in sorted order\\r\\n    while (i < left.length && j < right.length) {\\r\\n        if (left[i] < right[j]) {\\r\\n            sortedArray.push(left[i]);\\r\\n            i++;\\r\\n        } else {\\r\\n            sortedArray.push(right[j]);\\r\\n            j++;\\r\\n        }\\r\\n    }\\r\\n\\r\\n    // Add any remaining elements from left or right\\r\\n    return sortedArray.concat(left.slice(i)).concat(right.slice(j));\\r\\n}\\r\\n\\r\\n// Example usage:\\r\\nlet numbers = [5, 3, 8, 4, 2];\\r\\nconsole.log(mergeSort(numbers)); // Output: [2, 3, 4, 5, 8]\\r\\n`\\r\\n    let jsPseudo = `Procedure MergeSort(array):\\r\\n    1. Start with an array that needs to be sorted.\\r\\n    2. If the array has only one element or is empty, return it (base case).\\r\\n    3. Otherwise, divide the array into two halves:\\r\\n        a. Find the middle index.\\r\\n        b. Split the array into a left half and a right half.\\r\\n    4. Recursively apply Merge Sort on both halves until they are sorted.\\r\\n    5. Merge the two sorted halves\\r\\n        a. Compare elements from both halves and insert the smaller one into a new sorted array.\\r\\n        b. Repeat until all elements from both halves are merged.\\r\\n    6. Continue merging back up the recursive calls until the entire array is sorted.\\r\\n    7. End the algorithm when all elements are in order.`\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n    .cell {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        border: 1px solid teal;\\r\\n        height: auto;\\r\\n    }\\r\\n    .grid {\\r\\n        display: grid;\\r\\n        gap: 0.1em;\\r\\n        height: 300px;\\r\\n        width: 300px;\\r\\n        border: 1px solid gray;\\r\\n        padding: 0.1em;\\r\\n        margin: auto;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Algorithms</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/layout\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Merge Sort\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#description\\">Description</a></li>\\r\\n                <li><a href=\\"#visualization\\">Visualization</a></li>\\r\\n                <li><a href=\\"#pseudo\\">Pseudo code</a></li>\\r\\n                <li><a href=\\"#analysis\\">Analysis</a></li>\\r\\n                <li><a href=\\"#javascript\\">Javascript code</a></li>\\r\\n                <li><a href=\\"#questions\\">Questions</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"description\\">Description</h6>\\r\\n            <p>\\r\\n                Merge sort involves the recursive idea of splitting the given unsorted array into equal parts, sorting each part and then merging them into the final sorted array. This algorithm takes {`\\\\\\\\(O(n\\\\\\\\log n)\\\\\\\\)`} number of comparisons and is stable as well.  \\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"visualization\\">Visualization</h6>\\r\\n            <Merge />\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"pseudo\\">Pseudo code</h6>\\r\\n            <Highlight language={xml} code={jsPseudo} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"analysis\\">Analysis</h6>\\r\\n            <p>\\r\\n                Let {`\\\\\\\\(T(n)\\\\\\\\)`} represent the time taken by the algorithm. At each recursive step, we have two merge sort instances of half size and merging them requires {`O(n)`} time. This leads to the following recurrence relation:\\r\\n                {`\\\\\\\\[\\r\\n                \\\\\\\\begin{align}\\r\\n                T(n) &= 2  T\\\\\\\\left(\\\\\\\\frac{n}{2}\\\\\\\\right ) + O(n)\\\\\\\\\\\\\\\\\\r\\n                     &= O(n\\\\\\\\log n)\\r\\n                \\\\\\\\end{align}\\r\\n                \\\\\\\\]`}\\r\\n            </p>\\r\\n            <DataTable style=\\"width: 100%\\">\\r\\n                <Head>\\r\\n                    <Row>\\r\\n                        <Cell>Aspect</Cell>\\r\\n                        <Cell>Complexity</Cell>\\r\\n                        <Cell>Description</Cell>\\r\\n                    </Row>\\r\\n                </Head>\\r\\n                <Body>\\r\\n                    <Row>\\r\\n                        <Cell>Best-case time complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{`\\\\\\\\(O(n\\\\\\\\log n)\\\\\\\\)`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Always divides array into halves and merges efficiently.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Worst-case time complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{`\\\\\\\\(O(n\\\\\\\\log n)\\\\\\\\)`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Even in the worst case, the recursive structure remains the same.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Average-case time complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{`\\\\\\\\(O(n\\\\\\\\log n)\\\\\\\\)`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Same as before.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Space complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{`\\\\\\\\(O(n)\\\\\\\\)`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Requires extra space for temporary arrays during merging.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Stable?</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Yes</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Preserves the order of equal elements</Cell>\\r\\n                    </Row>\\r\\n                    \\r\\n                    <Row>\\r\\n                        <Cell>Adaptive?</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">No</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">but can be made to check before merging</Cell>\\r\\n                    </Row>\\r\\n                </Body>\\r\\n            </DataTable>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <h6 id=\\"javascript\\">Javascript code</h6>\\r\\n    <WebPractice htmlContent={\'Click on the run button to show console output.\'} cssContent={\' \'} jsContent={jsMerge} selected={\'JS\'} showConsole />\\r\\n    \\r\\n    <!-- <Card>\\r\\n        <Content>\\r\\n            <Highlight language={xml} code={code2} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card> -->\\r\\n    <h6 id=\\"questions\\">Questions</h6>\\r\\n    \\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">When can the algorithm terminate early? Can this algorithm be parallelized?</div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AA8EI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAC,CAAE,iBAAG,CACF,OAAO,CAAE,GACb,CACQ,iBAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CAKA,gBAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB,CACA,wBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb"}'
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
  set_store_value(currentPath, $currentPath = "Merge Sort", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
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
  )} <h4 class="svelte-1ptklpl" data-svelte-h="svelte-1x3zhgi">Merge Sort</h4> ${validate_component(Card, "Card").$$render(
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
          return `<h6 id="description" class="svelte-1ptklpl" data-svelte-h="svelte-16ffqii">Description</h6> <p class="svelte-1ptklpl">Merge sort involves the recursive idea of splitting the given unsorted array into equal parts, sorting each part and then merging them into the final sorted array. This algorithm takes ${escape(`\\(O(n\\log n)\\)`)} number of comparisons and is stable as well.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="visualization" class="svelte-1ptklpl" data-svelte-h="svelte-1plo0r2">Visualization</h6> ${validate_component(Merge, "Merge").$$render($$result, {}, {}, {})}`;
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
          return `<h6 id="analysis" class="svelte-1ptklpl" data-svelte-h="svelte-6lxl32">Analysis</h6> <p class="svelte-1ptklpl">Let ${escape(`\\(T(n)\\)`)} represent the time taken by the algorithm. At each recursive step, we have two merge sort instances of half size and merging them requires ${escape(`O(n)`)} time. This leads to the following recurrence relation:
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
  })} <h6 id="javascript" class="svelte-1ptklpl" data-svelte-h="svelte-1fyitox">Javascript code</h6> ${validate_component(WebPractice, "WebPractice").$$render(
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
//# sourceMappingURL=_page.svelte-BXUFlHt_.js.map
