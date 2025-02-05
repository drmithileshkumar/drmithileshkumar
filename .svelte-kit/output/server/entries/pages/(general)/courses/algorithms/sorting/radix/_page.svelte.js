import { a as subscribe, b as set_store_value } from "../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../../../chunks/ssr2.js";
import { x as xml } from "../../../../../../../chunks/xml.js";
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
import "../../../../../../../chunks/Actions2.js";
/* empty css                                                               */
import { H as Highlight, L as LineNumbers } from "../../../../../../../chunks/LineNumbers.js";
const css$1 = {
  code: "article.svelte-1e1e0x2{display:flex;flex-direction:column;gap:0.5em;max-width:750px;margin:auto;width:90%}p.svelte-1e1e0x2,li.svelte-1e1e0x2{opacity:0.8}h4.svelte-1e1e0x2{margin:0.5em 0}h6.svelte-1e1e0x2{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}a.svelte-1e1e0x2{cursor:pointer;text-decoration:none}.question.svelte-1e1e0x2{cursor:pointer;padding:0.3em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { tileGrid } from \\"$lib/utils/common/tile\\";\\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, {Body, Head, Row, Cell} from '@smui/data-table';\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/algorithms/content\\";\\r\\n    import { typeset } from '$lib/shared/typeset';\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n\\r\\n    import Bubble from \\"$lib/pages/courses/algorithms/Bubble.svelte\\";\\r\\n\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Radix Sort\\";\\r\\n    \\r\\n    \\r\\n    let jsBubble = \`function getDigit(num, place) {\\r\\n    return Math.floor(num / Math.pow(10, place)) % 10;\\r\\n}\\r\\n\\r\\nfunction countSort(arr, place) {\\r\\n    let output = new Array(arr.length).fill(0);\\r\\n    let count = new Array(10).fill(0);\\r\\n\\r\\n    // Count occurrences of each digit\\r\\n    for (let num of arr) {\\r\\n        let digit = getDigit(num, place);\\r\\n        count[digit]++;\\r\\n    }\\r\\n\\r\\n    // Update count[i] to store actual position of this digit\\r\\n    for (let i = 1; i < 10; i++) {\\r\\n        count[i] += count[i - 1];\\r\\n    }\\r\\n\\r\\n    // Build the output array using stable sort\\r\\n    for (let i = arr.length - 1; i >= 0; i--) {\\r\\n        let digit = getDigit(arr[i], place);\\r\\n        output[count[digit] - 1] = arr[i];\\r\\n        count[digit]--;\\r\\n    }\\r\\n\\r\\n    // Copy the sorted values back to arr\\r\\n    for (let i = 0; i < arr.length; i++) {\\r\\n        arr[i] = output[i];\\r\\n    }\\r\\n}\\r\\n\\r\\nfunction radixSort(arr) {\\r\\n    if (arr.length === 0) return arr;\\r\\n\\r\\n    let maxNum = Math.max(...arr);\\r\\n    let numDigits = Math.floor(Math.log10(maxNum)) + 1;\\r\\n\\r\\n    for (let i = 0; i < numDigits; i++) {\\r\\n        countSort(arr, i);\\r\\n    }\\r\\n\\r\\n    return arr;\\r\\n}\\r\\n\\r\\n// Example Usage:\\r\\nlet numbers = [170, 45, 75, 90, 802, 24, 2, 66];\\r\\nconsole.log(radixSort(numbers));  // Output: [2, 24, 45, 66, 75, 90, 170, 802]\\r\\n\`\\r\\n\\r\\n    let jsPseudo = \`Procedure RadixSort(array):\\r\\n    1. Find the maximum number in the array to determine the number of digits.\\r\\n    2. Start from the least significant digit (LSD) and move to the most significant digit (MSD).\\r\\n    3. For each digit place:\\r\\n    a. Use a stable sorting algorithm (like Counting Sort) to sort numbers based on the current digit.\\r\\n    b. Reassemble the numbers in sorted order.\\r\\n    4. Repeat until all digits have been processed.\\r\\n    5. The array is now sorted.\`\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n        max-width: 750px;\\r\\n        margin: auto;\\r\\n        width: 90%;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n    .cell {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        border: 1px solid teal;\\r\\n        height: auto;\\r\\n    }\\r\\n    .grid {\\r\\n        display: grid;\\r\\n        gap: 0.1em;\\r\\n        height: 300px;\\r\\n        width: 300px;\\r\\n        border: 1px solid gray;\\r\\n        padding: 0.1em;\\r\\n        margin: auto;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Algorithms</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/layout\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Radix Sort\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#description\\">Description</a></li>\\r\\n                <li><a href=\\"#visualization\\">Visualization</a></li>\\r\\n                <li><a href=\\"#pseudo\\">Pseudo code</a></li>\\r\\n                <li><a href=\\"#analysis\\">Analysis</a></li>\\r\\n                <li><a href=\\"#javascript\\">Javascript code</a></li>\\r\\n                <li><a href=\\"#questions\\">Questions</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"description\\">Description</h6>\\r\\n            <p>\\r\\n                Radix Sort is a non-comparative sorting algorithm that sorts numbers by processing individual digits from the least significant to the most significant (LSD Radix Sort) or vice versa (MSD Radix Sort). It works best for integer keys or fixed-length strings and is commonly used when the number of digits (or character width) is significantly smaller than the number of elements.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"visualization\\">Visualization</h6>\\r\\n            <!-- <Bubble /> -->\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"pseudo\\">Pseudo code</h6>\\r\\n            <Highlight language={xml} code={jsPseudo} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"analysis\\">Analysis</h6>\\r\\n            <p>\\r\\n                Let \\\\(k\\\\) be the number of digits in the largest number. If \\\\(k\\\\) is small, Radix Sort is practically linear \\\\(O(n)\\\\). If \\\\(k\\\\) is large \\\\(O(\\\\log n)\\\\), it approaches \\\\(O(n\\\\log n)\\\\).\\r\\n            </p>\\r\\n            <DataTable style=\\"width: 100%\\">\\r\\n                <Head>\\r\\n                    <Row>\\r\\n                        <Cell>Aspect</Cell>\\r\\n                        <Cell>Complexity</Cell>\\r\\n                        <Cell>Description</Cell>\\r\\n                    </Row>\\r\\n                </Head>\\r\\n                <Body>\\r\\n                    <Row>\\r\\n                        <Cell>Worst-case time complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{\`\\\\\\\\(O(nk)\\\\\\\\)\`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">very large numbers</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Best-case time complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{\`\\\\\\\\(O(nk)\\\\\\\\)\`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">uniformly distributed digits</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Average-case time complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{\`\\\\\\\\(O(nk)\\\\\\\\)\`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">assume random distribution</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Space complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{\`\\\\\\\\(O(n)\\\\\\\\)\`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">for buckets</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Stable?</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Yes</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Use Counting Sort</Cell>\\r\\n                    </Row>\\r\\n                    \\r\\n                    <Row>\\r\\n                        <Cell>Adaptive?</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">No</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">always processes all digits, even if nearly sorted</Cell>\\r\\n                    </Row>\\r\\n                </Body>\\r\\n            </DataTable>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <h6 id=\\"javascript\\">Javascript code</h6>\\r\\n    <WebPractice htmlContent={'Click on the run button to show console output.'} cssContent={' '} jsContent={jsBubble} selected={'JS'} showConsole />\\r\\n    \\r\\n    <!-- <Card>\\r\\n        <Content>\\r\\n            <Highlight language={xml} code={code2} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card> -->\\r\\n    <h6 id=\\"questions\\">Questions</h6>\\r\\n    \\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">When can the algorithm terminate early? Can this algorithm be parallelized?</div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AA2FI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KAAK,CACV,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,GACX,CACA,gBAAC,CAAE,iBAAG,CACF,OAAO,CAAE,GACb,CACQ,iBAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CAKA,gBAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB,CACA,wBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb"}`
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
  set_store_value(currentPath, $currentPath = "Radix Sort", $currentPath);
  let jsBubble = `function getDigit(num, place) {
    return Math.floor(num / Math.pow(10, place)) % 10;
}

function countSort(arr, place) {
    let output = new Array(arr.length).fill(0);
    let count = new Array(10).fill(0);

    // Count occurrences of each digit
    for (let num of arr) {
        let digit = getDigit(num, place);
        count[digit]++;
    }

    // Update count[i] to store actual position of this digit
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array using stable sort
    for (let i = arr.length - 1; i >= 0; i--) {
        let digit = getDigit(arr[i], place);
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    // Copy the sorted values back to arr
    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }
}

function radixSort(arr) {
    if (arr.length === 0) return arr;

    let maxNum = Math.max(...arr);
    let numDigits = Math.floor(Math.log10(maxNum)) + 1;

    for (let i = 0; i < numDigits; i++) {
        countSort(arr, i);
    }

    return arr;
}

// Example Usage:
let numbers = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(numbers));  // Output: [2, 24, 45, 66, 75, 90, 170, 802]
`;
  let jsPseudo = `Procedure RadixSort(array):
    1. Find the maximum number in the array to determine the number of digits.
    2. Start from the least significant digit (LSD) and move to the most significant digit (MSD).
    3. For each digit place:
    a. Use a stable sorting algorithm (like Counting Sort) to sort numbers based on the current digit.
    b. Reassemble the numbers in sorted order.
    4. Repeat until all digits have been processed.
    5. The array is now sorted.`;
  $$result.css.add(css$1);
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_darkMode();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-u9p3hi_START -->${$$result.title = `<title>Algorithms</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/layout"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-u9p3hi_END -->`, ""} <article class="svelte-1e1e0x2">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1e1e0x2" data-svelte-h="svelte-1yh61kc">Radix Sort</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1e1e0x2" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-1xd3in8"><li class="svelte-1e1e0x2"><a href="#description" class="svelte-1e1e0x2">Description</a></li> <li class="svelte-1e1e0x2"><a href="#visualization" class="svelte-1e1e0x2">Visualization</a></li> <li class="svelte-1e1e0x2"><a href="#pseudo" class="svelte-1e1e0x2">Pseudo code</a></li> <li class="svelte-1e1e0x2"><a href="#analysis" class="svelte-1e1e0x2">Analysis</a></li> <li class="svelte-1e1e0x2"><a href="#javascript" class="svelte-1e1e0x2">Javascript code</a></li> <li class="svelte-1e1e0x2"><a href="#questions" class="svelte-1e1e0x2">Questions</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="description" class="svelte-1e1e0x2" data-svelte-h="svelte-16ffqii">Description</h6> <p class="svelte-1e1e0x2" data-svelte-h="svelte-1vpelao">Radix Sort is a non-comparative sorting algorithm that sorts numbers by processing individual digits from the least significant to the most significant (LSD Radix Sort) or vice versa (MSD Radix Sort). It works best for integer keys or fixed-length strings and is commonly used when the number of digits (or character width) is significantly smaller than the number of elements.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="visualization" class="svelte-1e1e0x2" data-svelte-h="svelte-1plo0r2">Visualization</h6> `;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="pseudo" class="svelte-1e1e0x2" data-svelte-h="svelte-avl5bh">Pseudo code</h6> ${validate_component(Highlight, "Highlight").$$render($$result, { language: xml, code: jsPseudo }, {}, {
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
          return `<h6 id="analysis" class="svelte-1e1e0x2" data-svelte-h="svelte-6lxl32">Analysis</h6> <p class="svelte-1e1e0x2" data-svelte-h="svelte-kcll4n">Let \\(k\\) be the number of digits in the largest number. If \\(k\\) is small, Radix Sort is practically linear \\(O(n)\\). If \\(k\\) is large \\(O(\\log n)\\), it approaches \\(O(n\\log n)\\).</p> ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width: 100%" }, {}, {
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
                          return `${escape(`\\(O(nk)\\)`)}`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `very large numbers`;
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
                          return `${escape(`\\(O(nk)\\)`)}`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `uniformly distributed digits`;
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
                          return `${escape(`\\(O(nk)\\)`)}`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `assume random distribution`;
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
                          return `for buckets`;
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
                          return `Use Counting Sort`;
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
                          return `always processes all digits, even if nearly sorted`;
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
  })} <h6 id="javascript" class="svelte-1e1e0x2" data-svelte-h="svelte-1fyitox">Javascript code</h6> ${validate_component(WebPractice, "WebPractice").$$render(
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
  )}  <h6 id="questions" class="svelte-1e1e0x2" data-svelte-h="svelte-7cwkek">Questions</h6> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1e1e0x2" data-svelte-h="svelte-sb4s8s">When can the algorithm terminate early? Can this algorithm be parallelized?</div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
