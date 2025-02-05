import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr2-CDgUAJs6.js';
import { x as xml } from './xml-DVVcaHI4.js';
import { g as github, a as githubDark } from './github-dark-DeAsbMVW.js';
import { W as WebPractice } from './WebPractice-DZHtRtZk.js';
import { p as page } from './stores3-DPEAZJnM.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import { D as DataTable, R as Row, C as Cell, B as Body } from './Cell-Y_QU_UIA.js';
import { H as Head } from './Head-B4BwnM3n.js';
import './Subheader-DEm_inUP.js';
import './client-k3u4ChD_.js';
import { c as currentPath, n as navList, d as darkMode } from './stores-Cecnyqn_.js';
import { c as contentNav, a as contents } from './content-BQ2vForv.js';
import { P as Pathlist } from './Pathlist-B9wgcfC1.js';
import { C as CourseNavigation } from './CourseNavigation-DznSxbmO.js';
import { B as Bubble } from './Bubble-DaXiQVpY.js';
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
  code: "article.svelte-6o6nlu{display:flex;flex-direction:column;gap:0.5em;max-width:750px;width:90%;margin:auto}p.svelte-6o6nlu,li.svelte-6o6nlu{opacity:0.8}h4.svelte-6o6nlu{margin:0.5em 0}h6.svelte-6o6nlu{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}a.svelte-6o6nlu{cursor:pointer;text-decoration:none}.question.svelte-6o6nlu{cursor:pointer;padding:0.3em}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { tileGrid } from \\"$lib/utils/common/tile\\";\\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import {page} from \'$app/stores\';\\r\\n    import {onMount} from \'svelte\';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, {Body, Head, Row, Cell} from \'@smui/data-table\';\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from \'$lib/components/NavList.svelte\'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/algorithms/content\\";\\r\\n    import { typeset } from \'$lib/shared/typeset\';\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n\\r\\n    import Bubble from \\"$lib/pages/courses/algorithms/Bubble.svelte\\";\\r\\n\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Bubble Sort\\";\\r\\n    \\r\\n    \\r\\n    let jsBubble = `function bubbleSort(arr) {\\r\\n    let n = arr.length;\\r\\n    let swapped;\\r\\n\\r\\n    do {\\r\\n        swapped = false;\\r\\n        for (let i = 0; i < n - 1; i++) {\\r\\n            if (arr[i] > arr[i + 1]) {\\r\\n                // Swap elements\\r\\n                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];\\r\\n                swapped = true;\\r\\n            }\\r\\n        }\\r\\n        n--; // Optimized by reducing the range of comparison\\r\\n    } while (swapped);\\r\\n\\r\\n    return arr;\\r\\n}\\r\\n\\r\\n// Example usage:\\r\\nlet numbers = [64, 34, 25, 12, 22, 11, 90];\\r\\nconsole.log(bubbleSort(numbers));\\r\\n`\\r\\n    let jsPseudo = `Procedure BubbleSort(array):\\r\\n    1. Set the length of the array as n.\\r\\n    2. Repeat the following steps until no swaps occur:\\r\\n        a. Set swapped to false (to track if any swaps happen in this pass).\\r\\n        b. For each element from the first to the second-last:\\r\\n            i. If the current element is greater than the next one:\\r\\n                - Swap the two elements.\\r\\n                - Set swapped to true (indicating that a swap occurred).\\r\\n        c. Reduce n by 1, since the largest element has bubbled to its correct position.\\r\\n    3. When no swaps occur in a full pass, the array is sorted.\\r\\n    4. Return the sorted array.`\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n        max-width: 750px;\\r\\n        width: 90%;\\r\\n        margin: auto;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n    .cell {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        border: 1px solid teal;\\r\\n        height: auto;\\r\\n    }\\r\\n    .grid {\\r\\n        display: grid;\\r\\n        gap: 0.1em;\\r\\n        height: 300px;\\r\\n        width: 300px;\\r\\n        border: 1px solid gray;\\r\\n        padding: 0.1em;\\r\\n        margin: auto;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Algorithms</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/layout\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Bubble Sort\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#description\\">Description</a></li>\\r\\n                <li><a href=\\"#visualization\\">Visualization</a></li>\\r\\n                <li><a href=\\"#pseudo\\">Pseudo code</a></li>\\r\\n                <li><a href=\\"#analysis\\">Analysis</a></li>\\r\\n                <li><a href=\\"#javascript\\">Javascript code</a></li>\\r\\n                <li><a href=\\"#questions\\">Questions</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"description\\">Description</h6>\\r\\n            <p>\\r\\n                In bubble sort, the algorithm goes over the <em>entire</em> array multiple times till it is sorted. In each pass, it compares {`\\\\\\\\(a_i\\\\\\\\)`} with {`\\\\\\\\(a_{i + 1}\\\\\\\\)`}. If {`\\\\\\\\(a_i\\\\\\\\gt a_{i + 1}\\\\\\\\)`}, then they are swapped. Typically, this algorithm requires {`\\\\\\\\(O(n^2)\\\\\\\\)`} comparisons, but it is stable in the sense that relative position of equal elements are not changed.\\r\\n            </p>\\r\\n            <!-- <DataTable style=\\"width:100%\\">\\r\\n                <Head>\\r\\n                    <Row>\\r\\n                        <Cell>Propert value</Cell>\\r\\n                        <Cell>Description</Cell>\\r\\n                    </Row>\\r\\n                </Head>\\r\\n                <Body>\\r\\n                    <Row>\\r\\n                        <Cell><code>block</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">line breaks before and after the element</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>inline</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">keeps the element in the same line</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>none</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">removes the element from the DOM</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>flex</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">The element behaves like a block-level element and lays out its content according to the flexbox model.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>grid</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">The element behaves like a block-level element and lays out its content according to the grid model.</Cell>\\r\\n                    </Row>\\r\\n                </Body>\\r\\n            </DataTable> -->\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"visualization\\">Visualization</h6>\\r\\n            <Bubble />\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"pseudo\\">Pseudo code</h6>\\r\\n            <Highlight language={xml} code={jsPseudo} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"analysis\\">Analysis</h6>\\r\\n            <p>\\r\\n                The outer loop runs {`\\\\\\\\(n\\\\\\\\)`} times. In the worst case, at the {`\\\\\\\\(i\\\\\\\\)`}th run, the algorithm makes {`\\\\\\\\(i\\\\\\\\)`} comparisons. This gives a total comparisons of {`\\\\\\\\[n + (n-1) + \\\\\\\\cdots + 1 = \\\\\\\\frac{n(n - 1)}{2}\\\\\\\\]`}\\r\\n            </p>\\r\\n            <DataTable style=\\"width: 100%\\">\\r\\n                <Head>\\r\\n                    <Row>\\r\\n                        <Cell>Aspect</Cell>\\r\\n                        <Cell>Complexity</Cell>\\r\\n                        <Cell>Description</Cell>\\r\\n                    </Row>\\r\\n                </Head>\\r\\n                <Body>\\r\\n                    <Row>\\r\\n                        <Cell>Worst-case time complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{`\\\\\\\\(O(n^2)\\\\\\\\)`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">almost reverse order</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Best-case time complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{`\\\\\\\\(O(n)\\\\\\\\)`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">almost sorted</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Average-case time complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{`\\\\\\\\(O(n^2)\\\\\\\\)`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">assume random sample</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Space complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{`\\\\\\\\(O(1)\\\\\\\\)`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">in-place algorithm</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Stable?</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Yes</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Preserves the order of equal elements</Cell>\\r\\n                    </Row>\\r\\n                    \\r\\n                    <Row>\\r\\n                        <Cell>Adaptive?</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Yes</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">with early exit condition</Cell>\\r\\n                    </Row>\\r\\n                </Body>\\r\\n            </DataTable>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <h6 id=\\"javascript\\">Javascript code</h6>\\r\\n    <WebPractice htmlContent={\'Click on the run button to show console output.\'} cssContent={\' \'} jsContent={jsBubble} selected={\'JS\'} showConsole />\\r\\n    \\r\\n    <!-- <Card>\\r\\n        <Content>\\r\\n            <Highlight language={xml} code={code2} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card> -->\\r\\n    <h6 id=\\"questions\\">Questions</h6>\\r\\n    \\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">When can the algorithm terminate early? Can this algorithm be parallelized?</div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAmEI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KAAK,CACV,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IACZ,CACA,eAAC,CAAE,gBAAG,CACF,OAAO,CAAE,GACb,CACQ,gBAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,gBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CAKA,eAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB,CACA,uBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb"}'
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
  let jsPseudo = `Procedure BubbleSort(array):
    1. Set the length of the array as n.
    2. Repeat the following steps until no swaps occur:
        a. Set swapped to false (to track if any swaps happen in this pass).
        b. For each element from the first to the second-last:
            i. If the current element is greater than the next one:
                - Swap the two elements.
                - Set swapped to true (indicating that a swap occurred).
        c. Reduce n by 1, since the largest element has bubbled to its correct position.
    3. When no swaps occur in a full pass, the array is sorted.
    4. Return the sorted array.`;
  $$result.css.add(css$1);
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_darkMode();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-u9p3hi_START -->${$$result.title = `<title>Algorithms</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/layout"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-u9p3hi_END -->`, ""} <article class="svelte-6o6nlu">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-6o6nlu" data-svelte-h="svelte-1lbzv54">Bubble Sort</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-6o6nlu" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-1xd3in8"><li class="svelte-6o6nlu"><a href="#description" class="svelte-6o6nlu">Description</a></li> <li class="svelte-6o6nlu"><a href="#visualization" class="svelte-6o6nlu">Visualization</a></li> <li class="svelte-6o6nlu"><a href="#pseudo" class="svelte-6o6nlu">Pseudo code</a></li> <li class="svelte-6o6nlu"><a href="#analysis" class="svelte-6o6nlu">Analysis</a></li> <li class="svelte-6o6nlu"><a href="#javascript" class="svelte-6o6nlu">Javascript code</a></li> <li class="svelte-6o6nlu"><a href="#questions" class="svelte-6o6nlu">Questions</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="description" class="svelte-6o6nlu" data-svelte-h="svelte-16ffqii">Description</h6> <p class="svelte-6o6nlu">In bubble sort, the algorithm goes over the <em data-svelte-h="svelte-1ju3pu3">entire</em> array multiple times till it is sorted. In each pass, it compares ${escape(`\\(a_i\\)`)} with ${escape(`\\(a_{i + 1}\\)`)}. If ${escape(`\\(a_i\\gt a_{i + 1}\\)`)}, then they are swapped. Typically, this algorithm requires ${escape(`\\(O(n^2)\\)`)} comparisons, but it is stable in the sense that relative position of equal elements are not changed.</p> `;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="visualization" class="svelte-6o6nlu" data-svelte-h="svelte-1plo0r2">Visualization</h6> ${validate_component(Bubble, "Bubble").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="pseudo" class="svelte-6o6nlu" data-svelte-h="svelte-avl5bh">Pseudo code</h6> ${validate_component(Highlight, "Highlight").$$render($$result, { language: xml, code: jsPseudo }, {}, {
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
          return `<h6 id="analysis" class="svelte-6o6nlu" data-svelte-h="svelte-6lxl32">Analysis</h6> <p class="svelte-6o6nlu">The outer loop runs ${escape(`\\(n\\)`)} times. In the worst case, at the ${escape(`\\(i\\)`)}th run, the algorithm makes ${escape(`\\(i\\)`)} comparisons. This gives a total comparisons of ${escape(`\\[n + (n-1) + \\cdots + 1 = \\frac{n(n - 1)}{2}\\]`)}</p> ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width: 100%" }, {}, {
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
  })} <h6 id="javascript" class="svelte-6o6nlu" data-svelte-h="svelte-1fyitox">Javascript code</h6> ${validate_component(WebPractice, "WebPractice").$$render(
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
  )}  <h6 id="questions" class="svelte-6o6nlu" data-svelte-h="svelte-7cwkek">Questions</h6> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-6o6nlu" data-svelte-h="svelte-sb4s8s">When can the algorithm terminate early? Can this algorithm be parallelized?</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-YTXI6cMj.js.map
