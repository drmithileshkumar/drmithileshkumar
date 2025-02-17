import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr2-CDgUAJs6.js';
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
import { c as contentNav, a as contents } from './content-M0Arlrvl.js';
import { P as Pathlist } from './Pathlist-B9wgcfC1.js';
import { C as CourseNavigation } from './CourseNavigation-DznSxbmO.js';
import { M as Merge } from './Merge-gY33u7VT.js';
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

const css$1 = {
  code: "article.svelte-1j0eos5.svelte-1j0eos5{display:flex;flex-direction:column;gap:0.5em;max-width:750px;width:90%;margin:auto}p.svelte-1j0eos5.svelte-1j0eos5,li.svelte-1j0eos5.svelte-1j0eos5{opacity:0.8}h4.svelte-1j0eos5.svelte-1j0eos5{margin:0.5em 0}h6.svelte-1j0eos5.svelte-1j0eos5{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}strong.svelte-1j0eos5.svelte-1j0eos5{color:goldenrod;opacity:1}a.svelte-1j0eos5.svelte-1j0eos5{cursor:pointer;text-decoration:none}.question.svelte-1j0eos5.svelte-1j0eos5{cursor:pointer;padding:0.3em}.pseudocode.svelte-1j0eos5.svelte-1j0eos5{font-family:monospace;font-size:1em}.pseudocode.svelte-1j0eos5 strong.svelte-1j0eos5{color:rgb(20, 175, 175)}.pseudocode.svelte-1j0eos5 ul.svelte-1j0eos5{margin:0;border-left:1px solid}.comment.svelte-1j0eos5.svelte-1j0eos5{color:green}.media.svelte-1j0eos5.svelte-1j0eos5{display:flex;align-items:center;justify-content:center}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { tileGrid } from \\"$lib/utils/common/tile\\";\\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import {page} from \'$app/stores\';\\r\\n    import {onMount} from \'svelte\';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, {Body, Head, Row, Cell} from \'@smui/data-table\';\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from \'$lib/components/NavList.svelte\'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/algorithms/content\\";\\r\\n    import { typeset } from \'$lib/shared/typeset\';\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n\\r\\n    import Merge from \\"$lib/pages/courses/algorithms/Merge.svelte\\";\\r\\n\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Merge Sort\\";\\r\\n    \\r\\n    \\r\\n    let jsMerge = `function mergeSort(arr) {\\r\\n    if (arr.length <= 1) return arr; // Base case: a single element is already sorted\\r\\n\\r\\n    let mid = Math.floor(arr.length / 2); // Find the middle index\\r\\n    let left = mergeSort(arr.slice(0, mid)); // Recursively sort left half\\r\\n    let right = mergeSort(arr.slice(mid)); // Recursively sort right half\\r\\n\\r\\n    return merge(left, right); // Merge the sorted halves\\r\\n}\\r\\n\\r\\nfunction merge(left, right) {\\r\\n    let sortedArray = [];\\r\\n    let i = 0, j = 0;\\r\\n\\r\\n    // Merge elements in sorted order\\r\\n    while (i < left.length && j < right.length) {\\r\\n        if (left[i] < right[j]) {\\r\\n            sortedArray.push(left[i]);\\r\\n            i++;\\r\\n        } else {\\r\\n            sortedArray.push(right[j]);\\r\\n            j++;\\r\\n        }\\r\\n    }\\r\\n\\r\\n    // Add any remaining elements from left or right\\r\\n    return sortedArray.concat(left.slice(i)).concat(right.slice(j));\\r\\n}\\r\\n\\r\\n// Example usage:\\r\\nlet numbers = [5, 3, 8, 4, 2];\\r\\nconsole.log(mergeSort(numbers)); // Output: [2, 3, 4, 5, 8]\\r\\n`\\r\\n    let jsPseudo = `Procedure MergeSort(array):\\r\\n    1. Start with an array that needs to be sorted.\\r\\n    2. If the array has only one element or is empty, return it (base case).\\r\\n    3. Otherwise, divide the array into two halves:\\r\\n        a. Find the middle index.\\r\\n        b. Split the array into a left half and a right half.\\r\\n    4. Recursively apply Merge Sort on both halves until they are sorted.\\r\\n    5. Merge the two sorted halves\\r\\n        a. Compare elements from both halves and insert the smaller one into a new sorted array.\\r\\n        b. Repeat until all elements from both halves are merged.\\r\\n    6. Continue merging back up the recursive calls until the entire array is sorted.\\r\\n    7. End the algorithm when all elements are in order.`\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n        max-width: 750px;\\r\\n        width: 90%;\\r\\n        margin: auto;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n    .pseudocode {\\r\\n        font-family:monospace;\\r\\n        font-size: 1em;\\r\\n    }\\r\\n    .pseudocode strong {\\r\\n        color: rgb(20, 175, 175);\\r\\n    }\\r\\n    .pseudocode ul {\\r\\n        margin: 0;\\r\\n        border-left: 1px solid;\\r\\n    }\\r\\n    .comment {\\r\\n        color:green;\\r\\n    }\\r\\n    .media {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Algorithms</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/layout\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Merge Sort\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#description\\">Description</a></li>\\r\\n                <li><a href=\\"#visualization\\">Visualization</a></li>\\r\\n                <li><a href=\\"#pseudo\\">Pseudo code</a></li>\\r\\n                <li><a href=\\"#analysis\\">Analysis</a></li>\\r\\n                <li><a href=\\"#javascript\\">Javascript code</a></li>\\r\\n                <li><a href=\\"#questions\\">Questions</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"description\\">Description</h6>\\r\\n            <div class=\\"media\\">\\r\\n                <svg class=\\"SVG Vectorial svelte-p2dk90\\" width=\\"300px\\" viewBox=\\"0.8334445953369141 111.16656494140625 477 329\\" xmlns=\\"http://www.w3.org/2000/svg\\" xmlns:xlink=\\"http://www.w3.org/1999/xlink\\"><g class=\\"Vectorial\\" transform=\\"translate(0 0) scale(1)\\"><defs><marker id=\\"Arrow-localImage3-10\\" refX=\\"0\\" refY=\\"5\\" markerWidth=\\"6\\" markerHeight=\\"6\\" markerUnits=\\"strokeWidth\\" orient=\\"auto-start-reverse\\" viewBox=\\"0 0 10 10\\" preserveAspectRatio=\\"xMidYMid meet\\"><path d=\\"M 0 0 L 10 5 L 0 10 z\\" fill=\\"currentColor\\" stroke=\\"currentColor\\" stroke-width=\\"0\\" stroke-dasharray=\\"none\\" opacity=\\"1\\" filter=\\"none\\" transform=\\"matrix(1 0 0 1 0 0)\\"></path></marker></defs><g id=\\"Layer-localImage3-0\\" class=\\"draggable\\" fill=\\"none\\" stroke=\\"none\\" stroke-width=\\"0\\" stroke-dasharray=\\"none\\" vector-effect=\\"none\\" opacity=\\"1\\" filter=\\"none\\" mask=\\"none\\" transform=\\"matrix(1 0 0 1 0 0)\\">   <rect id=\\"Rect-localImage3-2\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 -184.99999445676804 -107.33340454101562)\\"></rect>           <rect id=\\"Rect-localImage3-3\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 -125.00000508626363 -107.33340454101562)\\"></rect>           <rect id=\\"Rect-localImage3-4\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 -65.00000250339508 -107.33340454101562)\\"></rect>           <rect id=\\"Rect-localImage3-5\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 -5 -107.33340454101562)\\"></rect>           <rect id=\\"Rect-localImage3-6\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 55.00000059604645 -107.33340454101562)\\"></rect>           <rect id=\\"Rect-localImage3-7\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 114.99999976158142 -107.33340454101562)\\"></rect>               <text id=\\"Text-localImage3-11\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" fill=\\"currentColor\\" font-size=\\"20px\\" font-weight=\\"400\\" font-family=\\"Roboto, sans-serif\\" filter=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 -38.6666259765625 -19.33331298828125)\\">divide</text>       <rect id=\\"Rect-localImage3-12\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 -105.99991858005524 1.999908447265625)\\"></rect>           <rect id=\\"Rect-localImage3-13\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 -162.99993260701558 1.999908447265625)\\"></rect>           <rect id=\\"Rect-localImage3-14\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 -219.99993896484375 1.999908447265625)\\"></rect>           <rect id=\\"Rect-localImage3-15\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 34.66668891906738 2.666534423828125)\\"></rect>           <rect id=\\"Rect-localImage3-16\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 91.66675245761871 2.666534423828125)\\"></rect>           <rect id=\\"Rect-localImage3-17\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 148.66682744026184 2.666534423828125)\\"></rect>           <rect id=\\"Rect-localImage3-18\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 -184.99999478459358 108.66653442382812)\\"></rect>           <rect id=\\"Rect-localImage3-19\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 -124.99999936421773 108.66653442382812)\\"></rect>           <rect id=\\"Rect-localImage3-20\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 -65.00000202655792 108.66653442382812)\\"></rect>           <rect id=\\"Rect-localImage3-21\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 -5.000004529953003 108.66653442382812)\\"></rect>           <rect id=\\"Rect-localImage3-22\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 54.99999451637268 108.66653442382812)\\"></rect>           <rect id=\\"Rect-localImage3-23\\" class=\\"draggable\\" x=\\"250\\" y=\\"250\\" width=\\"50\\" height=\\"50\\" rx=\\"0\\" ry=\\"0\\" fill=\\"rgba(255, 255, 255, 0.3)\\" filter=\\"none\\" mask=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" vector-effect=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 114.9999934732914 108.66653442382812)\\"></rect>               <text id=\\"Text-localImage3-22\\" class=\\"draggable\\" x=\\"257.83336639404297\\" y=\\"270.49999237060547\\" fill=\\"currentColor\\" font-size=\\"20px\\" font-weight=\\"400\\" font-family=\\"Roboto, sans-serif\\" filter=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 -37.3333740234375 11.33331298828125)\\">sort</text>           <text id=\\"Text-localImage3-23\\" class=\\"draggable\\" x=\\"257.83336639404297\\" y=\\"270.49999237060547\\" fill=\\"currentColor\\" font-size=\\"20px\\" font-weight=\\"400\\" font-family=\\"Roboto, sans-serif\\" filter=\\"none\\" opacity=\\"1\\" transform=\\"matrix(1 0 0 1 -47.3333740234375 66.66668701171875)\\">merge</text>          <path id=\\"Path-localImage3-24\\" class=\\"draggable\\" d=\\"M 143.49998867015177,206.1770828909549 L 114.8333635479213,238.51039491562835\\" fill=\\"rgba(0, 0, 0, 0)\\" fill-rule=\\"evenodd\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" stroke-linejoin=\\"miter\\" stroke-miterlimit=\\"4\\" vector-effect=\\"none\\" opacity=\\"1\\" filter=\\"none\\" mask=\\"none\\" marker-start=\\"none\\" marker-mid=\\"none\\" marker-end=\\"url(#Arrow-localImage3-10)\\" transform=\\"matrix(1 0 0 1 6 -4)\\"></path>           <path id=\\"Path-localImage3-25\\" class=\\"draggable\\" d=\\"M 143.49998867015177,206.1770828909549 L 114.8333635479213,238.51039491562835\\" fill=\\"rgba(0, 0, 0, 0)\\" fill-rule=\\"evenodd\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" stroke-linejoin=\\"miter\\" stroke-miterlimit=\\"4\\" vector-effect=\\"none\\" opacity=\\"1\\" filter=\\"none\\" mask=\\"none\\" marker-start=\\"none\\" marker-mid=\\"none\\" marker-end=\\"url(#Arrow-localImage3-10)\\" transform=\\"matrix(1 0 0 1 220.66668701171875 104.66668701171875)\\"></path>           <path id=\\"Path-localImage3-26\\" class=\\"draggable\\" d=\\"M 143.49998867015177,206.1770828909549 L 114.8333635479213,238.51039491562835\\" fill=\\"rgba(0, 0, 0, 0)\\" fill-rule=\\"evenodd\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" stroke-linejoin=\\"miter\\" stroke-miterlimit=\\"4\\" vector-effect=\\"none\\" opacity=\\"1\\" filter=\\"none\\" mask=\\"none\\" marker-start=\\"none\\" marker-mid=\\"none\\" marker-end=\\"url(#Arrow-localImage3-10)\\" transform=\\"matrix(-1 0 0 1 473.6666564941406 -3.3333740234375)\\"></path>           <path id=\\"Path-localImage3-27\\" class=\\"draggable\\" d=\\"M 143.49998867015177,206.1770828909549 L 114.8333635479213,238.51039491562835\\" fill=\\"rgba(0, 0, 0, 0)\\" fill-rule=\\"evenodd\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-dasharray=\\"none\\" stroke-linecap=\\"butt\\" stroke-linejoin=\\"miter\\" stroke-miterlimit=\\"4\\" vector-effect=\\"none\\" opacity=\\"1\\" filter=\\"none\\" mask=\\"none\\" marker-start=\\"none\\" marker-mid=\\"none\\" marker-end=\\"url(#Arrow-localImage3-10)\\" transform=\\"matrix(-1 0 0 1 256.9999694824219 103.33331298828125)\\"></path>     </g></g></svg>\\r\\n            </div>\\r\\n            <p>\\r\\n                Merge sort involves the recursive idea of splitting the given unsorted array into equal parts, sorting each part and then merging them into the final sorted array. This algorithm takes {`\\\\\\\\(O(n\\\\\\\\log n)\\\\\\\\)`} number of comparisons and is stable as well.  \\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"visualization\\">Visualization</h6>\\r\\n            <Merge />\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"pseudo\\">Pseudo code</h6>\\r\\n            <div class=\\"pseudocode\\">\\r\\n                <span>function <strong>MergeSort</strong>(a, start, end):</span>\\r\\n                <ul>\\r\\n                    <li>n = a.length</li>\\r\\n                    <li>if n &lt; 2 return a <span class=\\"comment\\">//nothing to do here</span></li>\\r\\n                    <li>else divide the array into two parts</li>\\r\\n                    <ul>\\r\\n                        <li>middle = (start + end)/2</li>\\r\\n                        <li>left = <strong>MergeSort</strong>(a, start, mid)</li>\\r\\n                        <li>right = <strong>MergeSort</strong>(a, mid+1, end)</li>\\r\\n                        <li>sorted = <strong>Merge</strong>(left, right)</li>\\r\\n                    </ul>\\r\\n                    <li>return sorted</li>\\r\\n                </ul>\\r\\n                <span>function <strong>Merge</strong>(left, right):</span>\\r\\n                <ul>\\r\\n                    <li>if either left or right are empty, return the other</li>\\r\\n                    <li>merged = [] <span class=\\"comment\\">//empty merged array</span></li>\\r\\n                    <li>while left or right have elements:\\r\\n                        <ul>\\r\\n                            <li>if left[first] &lt; right[first] or right is empty: \\r\\n                                <ul>\\r\\n                                    <li>put left[first] at the end of merged</li>\\r\\n                                    <li>remove left[first] <span class=\\"comment\\">//left is smaller now</span></li> \\r\\n                                </ul>\\r\\n                            </li>\\r\\n                            <li>\\r\\n                                else \\r\\n                                <ul>\\r\\n                                    <li>put right[first] at the end of merged</li>\\r\\n                                    <li>remove right[first] <span class=\\"comment\\">//right is smaller now</span></li>\\r\\n                                </ul>\\r\\n                            </li>\\r\\n                        </ul>\\r\\n                    </li>\\r\\n                    <li>return merged</li>\\r\\n                </ul>\\r\\n            </div>\\r\\n            <!-- <Highlight language={xml} code={jsPseudo} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight> -->\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"analysis\\">Analysis</h6>\\r\\n            <p>\\r\\n                Let {`\\\\\\\\(T(n)\\\\\\\\)`} represent the time taken by the algorithm. At each recursive step, we have two merge sort instances of half size and merging them requires {`O(n)`} time. This leads to the following recurrence relation:\\r\\n                {`\\\\\\\\[\\r\\n                \\\\\\\\begin{align}\\r\\n                T(n) &= 2  T\\\\\\\\left(\\\\\\\\frac{n}{2}\\\\\\\\right ) + O(n)\\\\\\\\\\\\\\\\\\r\\n                     &= O(n\\\\\\\\log n)\\r\\n                \\\\\\\\end{align}\\r\\n                \\\\\\\\]`}\\r\\n            </p>\\r\\n            <DataTable style=\\"width: 100%\\">\\r\\n                <Head>\\r\\n                    <Row>\\r\\n                        <Cell>Aspect</Cell>\\r\\n                        <Cell>Complexity</Cell>\\r\\n                        <Cell>Description</Cell>\\r\\n                    </Row>\\r\\n                </Head>\\r\\n                <Body>\\r\\n                    <Row>\\r\\n                        <Cell>Best-case time complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{`\\\\\\\\(O(n\\\\\\\\log n)\\\\\\\\)`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Always divides array into halves and merges efficiently.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Worst-case time complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{`\\\\\\\\(O(n\\\\\\\\log n)\\\\\\\\)`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Even in the worst case, the recursive structure remains the same.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Average-case time complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{`\\\\\\\\(O(n\\\\\\\\log n)\\\\\\\\)`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Same as before.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Space complexity</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">{`\\\\\\\\(O(n)\\\\\\\\)`}</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Requires extra space for temporary arrays during merging.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>Stable?</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Yes</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">Preserves the order of equal elements</Cell>\\r\\n                    </Row>\\r\\n                    \\r\\n                    <Row>\\r\\n                        <Cell>Adaptive?</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">No</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">but can be made to check before merging</Cell>\\r\\n                    </Row>\\r\\n                </Body>\\r\\n            </DataTable>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <h6 id=\\"javascript\\">Javascript code</h6>\\r\\n    <WebPractice htmlContent={\'Click on the run button to show console output.\'} cssContent={\' \'} jsContent={jsMerge} selected={\'JS\'} showConsole />\\r\\n    \\r\\n    <!-- <Card>\\r\\n        <Content>\\r\\n            <Highlight language={xml} code={code2} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card> -->\\r\\n    <h6 id=\\"questions\\">Questions</h6>\\r\\n    \\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">When can the algorithm terminate early? Can this algorithm be parallelized?</div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AA8EI,qCAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KAAK,CACV,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IACZ,CACA,+BAAC,CAAE,gCAAG,CACF,OAAO,CAAE,GACb,CACQ,gCAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,gCAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,oCAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb,CACA,+BAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB,CACA,uCAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb,CACA,yCAAY,CACR,YAAY,SAAS,CACrB,SAAS,CAAE,GACf,CACA,0BAAW,CAAC,qBAAO,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,0BAAW,CAAC,iBAAG,CACX,MAAM,CAAE,CAAC,CACT,WAAW,CAAE,GAAG,CAAC,KACrB,CACA,sCAAS,CACL,MAAM,KACV,CACA,oCAAO,CACH,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACrB"}'
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
  return `${$$result.head += `<!-- HEAD_svelte-u9p3hi_START -->${$$result.title = `<title>Algorithms</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/layout"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-u9p3hi_END -->`, ""} <article class="svelte-1j0eos5">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1j0eos5" data-svelte-h="svelte-1x3zhgi">Merge Sort</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1j0eos5" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-1xd3in8"><li class="svelte-1j0eos5"><a href="#description" class="svelte-1j0eos5">Description</a></li> <li class="svelte-1j0eos5"><a href="#visualization" class="svelte-1j0eos5">Visualization</a></li> <li class="svelte-1j0eos5"><a href="#pseudo" class="svelte-1j0eos5">Pseudo code</a></li> <li class="svelte-1j0eos5"><a href="#analysis" class="svelte-1j0eos5">Analysis</a></li> <li class="svelte-1j0eos5"><a href="#javascript" class="svelte-1j0eos5">Javascript code</a></li> <li class="svelte-1j0eos5"><a href="#questions" class="svelte-1j0eos5">Questions</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="description" class="svelte-1j0eos5" data-svelte-h="svelte-16ffqii">Description</h6> <div class="media svelte-1j0eos5" data-svelte-h="svelte-sck2cp"><svg class="SVG Vectorial svelte-p2dk90" width="300px" viewBox="0.8334445953369141 111.16656494140625 477 329" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g class="Vectorial" transform="translate(0 0) scale(1)"><defs><marker id="Arrow-localImage3-10" refX="0" refY="5" markerWidth="6" markerHeight="6" markerUnits="strokeWidth" orient="auto-start-reverse" viewBox="0 0 10 10" preserveAspectRatio="xMidYMid meet"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-dasharray="none" opacity="1" filter="none" transform="matrix(1 0 0 1 0 0)"></path></marker></defs><g id="Layer-localImage3-0" class="draggable" fill="none" stroke="none" stroke-width="0" stroke-dasharray="none" vector-effect="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 0 0)"><rect id="Rect-localImage3-2" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -184.99999445676804 -107.33340454101562)"></rect><rect id="Rect-localImage3-3" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -125.00000508626363 -107.33340454101562)"></rect><rect id="Rect-localImage3-4" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -65.00000250339508 -107.33340454101562)"></rect><rect id="Rect-localImage3-5" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -5 -107.33340454101562)"></rect><rect id="Rect-localImage3-6" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 55.00000059604645 -107.33340454101562)"></rect><rect id="Rect-localImage3-7" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 114.99999976158142 -107.33340454101562)"></rect><text id="Text-localImage3-11" class="draggable" x="250" y="250" fill="currentColor" font-size="20px" font-weight="400" font-family="Roboto, sans-serif" filter="none" opacity="1" transform="matrix(1 0 0 1 -38.6666259765625 -19.33331298828125)">divide</text><rect id="Rect-localImage3-12" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -105.99991858005524 1.999908447265625)"></rect><rect id="Rect-localImage3-13" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -162.99993260701558 1.999908447265625)"></rect><rect id="Rect-localImage3-14" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -219.99993896484375 1.999908447265625)"></rect><rect id="Rect-localImage3-15" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 34.66668891906738 2.666534423828125)"></rect><rect id="Rect-localImage3-16" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 91.66675245761871 2.666534423828125)"></rect><rect id="Rect-localImage3-17" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 148.66682744026184 2.666534423828125)"></rect><rect id="Rect-localImage3-18" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -184.99999478459358 108.66653442382812)"></rect><rect id="Rect-localImage3-19" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -124.99999936421773 108.66653442382812)"></rect><rect id="Rect-localImage3-20" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -65.00000202655792 108.66653442382812)"></rect><rect id="Rect-localImage3-21" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -5.000004529953003 108.66653442382812)"></rect><rect id="Rect-localImage3-22" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 54.99999451637268 108.66653442382812)"></rect><rect id="Rect-localImage3-23" class="draggable" x="250" y="250" width="50" height="50" rx="0" ry="0" fill="rgba(255, 255, 255, 0.3)" filter="none" mask="none" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 114.9999934732914 108.66653442382812)"></rect><text id="Text-localImage3-22" class="draggable" x="257.83336639404297" y="270.49999237060547" fill="currentColor" font-size="20px" font-weight="400" font-family="Roboto, sans-serif" filter="none" opacity="1" transform="matrix(1 0 0 1 -37.3333740234375 11.33331298828125)">sort</text><text id="Text-localImage3-23" class="draggable" x="257.83336639404297" y="270.49999237060547" fill="currentColor" font-size="20px" font-weight="400" font-family="Roboto, sans-serif" filter="none" opacity="1" transform="matrix(1 0 0 1 -47.3333740234375 66.66668701171875)">merge</text><path id="Path-localImage3-24" class="draggable" d="M 143.49998867015177,206.1770828909549 L 114.8333635479213,238.51039491562835" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="url(#Arrow-localImage3-10)" transform="matrix(1 0 0 1 6 -4)"></path><path id="Path-localImage3-25" class="draggable" d="M 143.49998867015177,206.1770828909549 L 114.8333635479213,238.51039491562835" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="url(#Arrow-localImage3-10)" transform="matrix(1 0 0 1 220.66668701171875 104.66668701171875)"></path><path id="Path-localImage3-26" class="draggable" d="M 143.49998867015177,206.1770828909549 L 114.8333635479213,238.51039491562835" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="url(#Arrow-localImage3-10)" transform="matrix(-1 0 0 1 473.6666564941406 -3.3333740234375)"></path><path id="Path-localImage3-27" class="draggable" d="M 143.49998867015177,206.1770828909549 L 114.8333635479213,238.51039491562835" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="url(#Arrow-localImage3-10)" transform="matrix(-1 0 0 1 256.9999694824219 103.33331298828125)"></path></g></g></svg></div> <p class="svelte-1j0eos5">Merge sort involves the recursive idea of splitting the given unsorted array into equal parts, sorting each part and then merging them into the final sorted array. This algorithm takes ${escape(`\\(O(n\\log n)\\)`)} number of comparisons and is stable as well.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="visualization" class="svelte-1j0eos5" data-svelte-h="svelte-1plo0r2">Visualization</h6> ${validate_component(Merge, "Merge").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="pseudo" class="svelte-1j0eos5" data-svelte-h="svelte-avl5bh">Pseudo code</h6> <div class="pseudocode svelte-1j0eos5" data-svelte-h="svelte-tdu6cn"><span>function <strong class="svelte-1j0eos5">MergeSort</strong>(a, start, end):</span> <ul class="svelte-1j0eos5"><li class="svelte-1j0eos5">n = a.length</li> <li class="svelte-1j0eos5">if n &lt; 2 return a <span class="comment svelte-1j0eos5">//nothing to do here</span></li> <li class="svelte-1j0eos5">else divide the array into two parts</li> <ul class="svelte-1j0eos5"><li class="svelte-1j0eos5">middle = (start + end)/2</li> <li class="svelte-1j0eos5">left = <strong class="svelte-1j0eos5">MergeSort</strong>(a, start, mid)</li> <li class="svelte-1j0eos5">right = <strong class="svelte-1j0eos5">MergeSort</strong>(a, mid+1, end)</li> <li class="svelte-1j0eos5">sorted = <strong class="svelte-1j0eos5">Merge</strong>(left, right)</li></ul> <li class="svelte-1j0eos5">return sorted</li></ul> <span>function <strong class="svelte-1j0eos5">Merge</strong>(left, right):</span> <ul class="svelte-1j0eos5"><li class="svelte-1j0eos5">if either left or right are empty, return the other</li> <li class="svelte-1j0eos5">merged = [] <span class="comment svelte-1j0eos5">//empty merged array</span></li> <li class="svelte-1j0eos5">while left or right have elements:
                        <ul class="svelte-1j0eos5"><li class="svelte-1j0eos5">if left[first] &lt; right[first] or right is empty: 
                                <ul class="svelte-1j0eos5"><li class="svelte-1j0eos5">put left[first] at the end of merged</li> <li class="svelte-1j0eos5">remove left[first] <span class="comment svelte-1j0eos5">//left is smaller now</span></li></ul></li> <li class="svelte-1j0eos5">else 
                                <ul class="svelte-1j0eos5"><li class="svelte-1j0eos5">put right[first] at the end of merged</li> <li class="svelte-1j0eos5">remove right[first] <span class="comment svelte-1j0eos5">//right is smaller now</span></li></ul></li></ul></li> <li class="svelte-1j0eos5">return merged</li></ul></div> `;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="analysis" class="svelte-1j0eos5" data-svelte-h="svelte-6lxl32">Analysis</h6> <p class="svelte-1j0eos5">Let ${escape(`\\(T(n)\\)`)} represent the time taken by the algorithm. At each recursive step, we have two merge sort instances of half size and merging them requires ${escape(`O(n)`)} time. This leads to the following recurrence relation:
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
  })} <h6 id="javascript" class="svelte-1j0eos5" data-svelte-h="svelte-1fyitox">Javascript code</h6> ${validate_component(WebPractice, "WebPractice").$$render(
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
  )}  <h6 id="questions" class="svelte-1j0eos5" data-svelte-h="svelte-7cwkek">Questions</h6> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1j0eos5" data-svelte-h="svelte-sb4s8s">When can the algorithm terminate early? Can this algorithm be parallelized?</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BVR7dOwF.js.map
