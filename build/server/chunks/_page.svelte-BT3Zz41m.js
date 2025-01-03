import { a as subscribe, d as set_store_value } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, v as validate_component } from './ssr2-q3O0l93f.js';
import { j as javascript } from './javascript-BRG9RdMS.js';
import { g as githubDark, a as github } from './github-dark-BC3MHtr2.js';
import './Suffix-CzM54Q0Q.js';
import { C as Card } from './Card-jWUNhZC7.js';
import { C as Content } from './ActionIcons-BJ7xikju.js';
import { p as page } from './stores3-BrNJmxTp.js';
import './Subheader-BV9F6O0P.js';
import './client-k3u4ChD_.js';
import { d as darkMode, c as currentPath, n as navList } from './stores-Bb_1fHB9.js';
import { c as contentNav, a as contents } from './content-ChhWH1Ps.js';
import { P as Pathlist } from './Pathlist-BHOBzrf2.js';
import { C as CourseNavigation } from './CourseNavigation-pnGRCnsg.js';
import { H as Highlight, L as LineNumbers } from './LineNumbers-BZtnLenZ.js';
import './classAdderBuilder-B9W9nXDD.js';
import './SmuiElement-DA9PKsv2.js';
import './exports-kR70XCWV.js';
import './index2-BZnI6xu7.js';
import './_commonjsHelpers-B85MJLTf.js';

const css$1 = {
  code: "article.svelte-xhs4zz.svelte-xhs4zz{display:flex;flex-direction:column;gap:0.5em}p.svelte-xhs4zz.svelte-xhs4zz,li.svelte-xhs4zz.svelte-xhs4zz{opacity:0.8}h4.svelte-xhs4zz.svelte-xhs4zz{margin:0.5em 0}h6.svelte-xhs4zz.svelte-xhs4zz{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}a.svelte-xhs4zz.svelte-xhs4zz{cursor:pointer;text-decoration:none}ol.svelte-xhs4zz li.svelte-xhs4zz::marker{font-size:1.2em;color:red;font-weight:bold}ol.svelte-xhs4zz li.svelte-xhs4zz{padding:0.5em 0}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n\\t// @ts-nocheck\\r\\n\\timport Highlight, { LineNumbers } from 'svelte-highlight';\\r\\n\\timport javascript from 'svelte-highlight/languages/javascript';\\r\\n\\timport xml from 'svelte-highlight/languages/xml';\\r\\n\\timport css from 'svelte-highlight/languages/css';\\r\\n\\timport github from 'svelte-highlight/styles/github';\\r\\n\\timport githubDark from 'svelte-highlight/styles/github-dark';\\r\\n\\timport { tileGrid } from '$lib/utils/common/tile';\\r\\n\\timport WebPractice from '$lib/pages/courses/internet/WebPractice.svelte';\\r\\n\\timport { page } from '$app/stores';\\r\\n\\timport { onMount } from 'svelte';\\r\\n\\timport Card, { Content, Actions } from '@smui/card';\\r\\n\\timport DataTable, { Body, Head, Row, Cell } from '@smui/data-table';\\r\\n\\timport Button, { Label } from '@smui/button';\\r\\n\\timport Ripple from '@smui/ripple';\\r\\n\\timport NavList from '$lib/components/NavList.svelte';\\r\\n\\timport { currentPath } from '$lib/stores';\\r\\n\\timport { darkMode, navList } from '$lib/stores';\\r\\n\\timport { contents, contentNav } from '$lib/pages/courses/internet/content';\\r\\n\\timport Pathlist from '$lib/components/Pathlist.svelte';\\r\\n\\timport CourseNavigation from '$lib/components/CourseNavigation.svelte';\\r\\n\\t$navList = contents;\\r\\n\\t$currentPath = 'Functions';\\r\\n\\t$darkMode = false;\\r\\n\\t// tileGrid(5, 5)\\r\\n\\tlet cssLayout = [];\\r\\n\\tlet nDivs = 0;\\r\\n\\tlet gridLayout;\\r\\n\\tlet hasZero = false;\\r\\n\\t\\r\\n\\r\\n\\tonMount(() => {\\r\\n\\t\\t//generateLayout();\\r\\n\\t});\\r\\n\\tlet htmlContentPosition = \`<div id=\\"container\\">\\r\\n    <div id=\\"io\\">\\r\\n        <div id=\\"expression\\"></div>\\r\\n        <div id=\\"output\\"></div>\\r\\n    </div>\\r\\n    <div id=\\"input\\">\\r\\n        <div id=\\"advanced\\"></div>\\r\\n        <div id=\\"basic\\">\\r\\n            <button class=\\"operation C\\" onclick=\\"setOperator('C')\\">C</button>\\r\\n            <button class=\\"operation pm\\" onclick=\\"setOperator('pm')\\">&plusmn;</button>\\r\\n            <button class=\\"operation per\\" onclick=\\"setOperator('%')\\">&percnt;</button>\\r\\n            <button class=\\"operation div\\" onclick=\\"setOperator('/')\\">&divide;</button>\\r\\n\\r\\n            <button class=\\"seven\\" onclick=\\"setNumber(7)\\">7</button>\\r\\n            <button class=\\"eight\\" onclick=\\"setNumber(8)\\">8</button>\\r\\n            <button class=\\"nine\\" onclick=\\"setNumber(9)\\">9</button>\\r\\n            <button class=\\"operation mul\\" onclick=\\"setOperator('*')\\">&times;</button>\\r\\n\\r\\n            <button class=\\"four\\" onclick=\\"setNumber(4)\\">4</button>\\r\\n            <button class=\\"five\\" onclick=\\"setNumber(5)\\">5</button>\\r\\n            <button class=\\"six\\" onclick=\\"setNumber(6)\\">6</button>\\r\\n            <button class=\\"operation min\\" onclick=\\"setOperator('-')\\">&minus;</button>\\r\\n\\r\\n            <button class=\\"one\\" onclick=\\"setNumber(1)\\">1</button>\\r\\n            <button class=\\"two\\" onclick=\\"setNumber(2)\\">2</button>\\r\\n            <button class=\\"three\\" onclick=\\"setNumber(3)\\">3</button>\\r\\n            <button class=\\"operation plus\\" onclick=\\"setOperator('+')\\">+</button>\\r\\n\\r\\n            <button class=\\"zero\\" onclick=\\"setNumber(0)\\">0</button>\\r\\n            <button class=\\"dot\\" onclick=\\"setNumber('.')\\">.</button>\\r\\n            <button class=\\"operation eq\\" onclick=\\"setOperator('=')\\">&equals;</button>\\r\\n        </div>\\r\\n    </div>\\r\\n</div>\`;\\r\\n\\tlet cssContentPosition = \`* {\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n#container {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 0.5em;\\r\\n    width: 300px;\\r\\n    align-items: center;\\r\\n    border: 1px solid;\\r\\n    padding: 0.2em;\\r\\n}\\r\\n#io {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    padding: 0.5em 0.2em;\\r\\n    border: 1px solid;\\r\\n    min-height: 1.5em;\\r\\n    width: 100%;\\r\\n}\\r\\n#expression {\\r\\n    color: gray;\\r\\n    display: flex;\\r\\n    justify-content: end;\\r\\n    padding: 0.5em 0.2em;\\r\\n    height: 1.5em;\\r\\n}\\r\\n#output {\\r\\n    display: flex;\\r\\n    justify-content: end;\\r\\n    padding: 0.5em 0.2em;\\r\\n    height: 1.5em;\\r\\n}\\r\\n#input {\\r\\n    width: 100%;\\r\\n    display: grid;\\r\\n    padding: 0.2em;\\r\\n    border: 1px solid;\\r\\n}\\r\\n#basic {\\r\\n    display: grid;\\r\\n    gap: 0.2em;\\r\\n    grid-template-areas:\\r\\n        'C pm per div'\\r\\n        'seven eight nine mul'\\r\\n        'four five six min'\\r\\n        'one two three plus'\\r\\n        'zero zero dot eq';\\r\\n}\\r\\n.C {\\r\\n    grid-area: C;\\r\\n}\\r\\n.pm {\\r\\n    grid-area: pm;\\r\\n}\\r\\n.per {\\r\\n    grid-area: per;\\r\\n}\\r\\n.div {\\r\\n    grid-area: div;\\r\\n}\\r\\n.mul {\\r\\n    grid-area: mul;\\r\\n}\\r\\n.min {\\r\\n    grid-area: min;\\r\\n}\\r\\n.plus {\\r\\n    grid-area: plus;\\r\\n}\\r\\n.eq {\\r\\n    grid-area: eq;\\r\\n}\\r\\n.zero {\\r\\n    grid-area: zero;\\r\\n}\\r\\n.one {\\r\\n    grid-area: one;\\r\\n}\\r\\n.two {\\r\\n    grid-area: two;\\r\\n}\\r\\n.three {\\r\\n    grid-area: three;\\r\\n}\\r\\n.four {\\r\\n    grid-area: four;\\r\\n}\\r\\n.five {\\r\\n    grid-area: five;\\r\\n}\\r\\n.six {\\r\\n    grid-area: six;\\r\\n}\\r\\n.seven {\\r\\n    grid-area: seven;\\r\\n}\\r\\n.eight {\\r\\n    grid-area: eight;\\r\\n}\\r\\n.nine {\\r\\n    grid-area: nine;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n    font-size: 1.2em;\\r\\n}\\r\\n.operation {\\r\\n    background-color: rgb(245, 162, 7);\\r\\n    border-color: rgb(245, 162, 7);\\r\\n}\`;\\r\\n    let javaScriptContent = \`let expression = document.querySelector(\\"#expression\\");\\r\\nlet output = document.querySelector(\\"#output\\");\\r\\nexpression.textContent = '';\\r\\nlet currentExpression = '';\\r\\nlet result = 0;\\r\\nlet operator = '';\\r\\nlet number = 0;\\r\\nlet lastInput = 'Number';\\r\\nlet currentOperation = '';\\r\\nlet currentNumber = '';\\r\\nfunction setOperator(op) {\\r\\n    if(expression.textContent == '') return;\\r\\n    currentOperation = op;\\r\\n    currentNumber = '';\\r\\n    if(lastInput == 'op') {\\r\\n        //remove the last operation to new operation in expression\\r\\n        expression.textContent = expression.textContent.slice(0, -1);\\r\\n    }\\r\\n    lastInput = 'op';\\r\\n    switch(op) {\\r\\n        case 'C': {\\r\\n            expression.textContent = '';\\r\\n            output.textContent = '';\\r\\n            break;\\r\\n        } \\r\\n        case 'pm': {\\r\\n            break;\\r\\n        }\\r\\n        case '=': {\\r\\n            result = eval(expression.textContent);\\r\\n            output.textContent = result;\\r\\n            lastInput = '';\\r\\n            break;\\r\\n        }\\r\\n        default: {\\r\\n            expression.textContent += op;\\r\\n            break;\\r\\n        }\\r\\n    }\\r\\n}\\r\\nfunction setNumber(num) {\\r\\n    lastInput = \\"Number\\";\\r\\n    if(!(num == '0' && currentNumber == '0')) {\\r\\n        currentNumber += num;\\r\\n        expression.textContent += num;\\r\\n    }\\r\\n}\\r\\n\`\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>Internet Technologies</title>\\r\\n\\t<link\\r\\n\\t\\trel=\\"canonical\\"\\r\\n\\t\\thref=\\"https://drmithileshkumar.com/courses/internet/javascript/basics/functions\\"\\r\\n\\t/>\\r\\n\\t<meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n\\t{#if $darkMode}\\r\\n\\t\\t{@html githubDark}\\r\\n\\t{:else}\\r\\n\\t\\t{@html github}\\r\\n\\t{/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n\\t<Pathlist origin={$page.url.origin} pathname={$page.url.pathname} />\\r\\n\\t<CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n\\t<h4>Functions</h4>\\r\\n\\t<Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#function\\"><code>function</code></a></li>\\r\\n                <li><a href=\\"#arrow\\">Arrow notation</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n\\r\\n\\t<Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"function\\"><code>function</code></h6>\\r\\n            <p>\\r\\n\\t\\t\\t\\tFunctions are created using the <code>function</code> keyword\\r\\n                <Highlight language={javascript} \\r\\n                code={\`//function with no parameter and no return value\\r\\nfunction noParamNoReturn() {\\r\\n    //execute my code\\r\\n}\\r\\n//function with no parameter and a return\\r\\nfunction noParamReturn() {\\r\\n    //execute my code\\r\\n    return someValue;\\r\\n}\\r\\n//function with a parameter and no return\\r\\nfunction paramNoReturn(a) {\\r\\n    //use a in the code\\r\\n}\\r\\n//function with a parameter and return\\r\\nfunction paramReturn(a) {\\r\\n    //use a in the code\\r\\n    return someValue;\\r\\n}\\r\\n//function with a default value\\r\\nfunction defaultValue(a = 1) {\\r\\n    //if a is not specified use a = 1\\r\\n}\\r\\n//calling the function\\r\\nnoParamNoReturn();\\r\\nlet returnValue = noParamReturn();\\r\\nparamNoReturn(5);\\r\\nlet anotherValue = paramReturn(6);\\r\\n//use default\\r\\ndefaultValue();//uses a = 1\\r\\ndefaultValue(10);//uses a = 10\`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n\\t\\r\\n\\t<!-- <WebPractice htmlContent={htmlContentPosition} cssContent={cssContentPosition} jsContent={javaScriptContent} /> -->\\r\\n\\r\\n\\t<Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"arrow\\">Arrow notation</h6>\\r\\n            <p>\\r\\n\\t\\t\\t\\tFunctions can be declared using the arrow notation as follows\\r\\n                <Highlight language={javascript} \\r\\n                code={\`//function with no parameter and no return value\\r\\nlet noParamNoReturn = () => {\\r\\n    //execute my code\\r\\n}\\r\\n//function with no parameter and a return\\r\\nlet noParamReturn = () => {\\r\\n    //execute my code\\r\\n    return someValue;\\r\\n}\\r\\n//function with a parameter and no return\\r\\nlet paramNoReturn = (a) => {\\r\\n    //use a in the code\\r\\n}\\r\\n//function with a parameter and return\\r\\nlet paramReturn = (a) => {\\r\\n    //use a in the code\\r\\n    return someValue;\\r\\n}\\r\\n//function with a default value\\r\\nlet defaultValue = (a = 1) => {\\r\\n    //if a is not specified use a = 1\\r\\n}\`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n\\t<h4>Questions</h4>\\r\\n\\t<Card>\\r\\n\\t\\t<Content>\\r\\n\\t\\t\\t<ol>\\r\\n\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\tWrite a JavaScript function to calculate the area of a rectangle given its length and width.\\r\\n\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\tCreate a function that takes an array of numbers as input and returns the sum of all the numbers.\\r\\n\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\tImplement a function that checks if a given number is a palindrome (reads the same forwards and backwards).\\r\\n\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\tWrite a JavaScript function to find the maximum and minimum elements in an array of numbers.\\r\\n\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\tDevelop a function that takes a string as input and returns the reverse of the string.\\r\\n\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\tCreate a JavaScript program that generates the Fibonacci sequence up to a certain limit using a while loop.\\r\\n\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\tImplement a function that takes two numbers as input and returns the greatest common divisor (GCD).\\r\\n\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\tWrite a JavaScript function to output the reverse of a string.\\r\\n\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\tCreate a function that takes an array of integers and returns a new array with only the unique values.\\r\\n\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\tDevelop a function that takes a sentence as input and returns the number of words in the sentence.\\r\\n\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t</ol>\\r\\n\\t\\t</Content>\\r\\n\\t</Card>\\r\\n</article>\\r\\n\\r\\n<style>\\r\\n\\tarticle {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\tgap: 0.5em;\\r\\n\\t}\\r\\n\\tp,\\r\\n\\tli {\\r\\n\\t\\topacity: 0.8;\\r\\n\\t}\\r\\n\\th2,\\r\\n\\th3,\\r\\n\\th4,\\r\\n\\th5 {\\r\\n\\t\\tmargin: 0.5em 0;\\r\\n\\t}\\r\\n\\th5 {\\r\\n\\t\\tfont-size: 1.1em;\\r\\n\\t}\\r\\n\\th6 {\\r\\n\\t\\tfont-size: 1em;\\r\\n\\t\\tmargin: 0.5em 0;\\r\\n\\t\\tcolor: rgb(74, 155, 139);\\r\\n\\t}\\r\\n\\tstrong {\\r\\n\\t\\tcolor: goldenrod;\\r\\n\\t\\topacity: 1;\\r\\n\\t}\\r\\n\\ta {\\r\\n\\t\\tcursor: pointer;\\r\\n\\t\\ttext-decoration: none;\\r\\n\\t}\\r\\n\\tol li::marker {\\r\\n        font-size: 1.2em;\\r\\n        color: red;\\r\\n        font-weight: bold;\\r\\n    }\\r\\n    ol li {\\r\\n        padding: 0.5em 0;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAwXC,mCAAQ,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACN,CACA,6BAAC,CACD,8BAAG,CACF,OAAO,CAAE,GACV,CAGA,8BACG,CACF,MAAM,CAAE,KAAK,CAAC,CACf,CAIA,8BAAG,CACF,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACxB,CAKA,6BAAE,CACD,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IAClB,CACA,gBAAE,CAAC,gBAAE,QAAS,CACP,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,GAAG,CACV,WAAW,CAAE,IACjB,CACA,gBAAE,CAAC,gBAAG,CACF,OAAO,CAAE,KAAK,CAAC,CACnB"}`
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
  set_store_value(currentPath, $currentPath = "Functions", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1bknnxn_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/javascript/basics/functions"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1bknnxn_END -->`, ""} <article class="svelte-xhs4zz">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-xhs4zz" data-svelte-h="svelte-aeduhh">Functions</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-xhs4zz" data-svelte-h="svelte-zdr1se">Topics</h6> <ol class="svelte-xhs4zz" data-svelte-h="svelte-118e6nz"><li class="svelte-xhs4zz"><a href="#function" class="svelte-xhs4zz"><code>function</code></a></li> <li class="svelte-xhs4zz"><a href="#arrow" class="svelte-xhs4zz">Arrow notation</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="function" class="svelte-xhs4zz" data-svelte-h="svelte-15prnl"><code>function</code></h6> <p class="svelte-xhs4zz">Functions are created using the <code data-svelte-h="svelte-gfnfj0">function</code> keyword
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: javascript,
              code: `//function with no parameter and no return value
function noParamNoReturn() {
    //execute my code
}
//function with no parameter and a return
function noParamReturn() {
    //execute my code
    return someValue;
}
//function with a parameter and no return
function paramNoReturn(a) {
    //use a in the code
}
//function with a parameter and return
function paramReturn(a) {
    //use a in the code
    return someValue;
}
//function with a default value
function defaultValue(a = 1) {
    //if a is not specified use a = 1
}
//calling the function
noParamNoReturn();
let returnValue = noParamReturn();
paramNoReturn(5);
let anotherValue = paramReturn(6);
//use default
defaultValue();//uses a = 1
defaultValue(10);//uses a = 10`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</p>`;
        }
      })}`;
    }
  })}  ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="arrow" class="svelte-xhs4zz" data-svelte-h="svelte-1kbcjqe">Arrow notation</h6> <p class="svelte-xhs4zz">Functions can be declared using the arrow notation as follows
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: javascript,
              code: `//function with no parameter and no return value
let noParamNoReturn = () => {
    //execute my code
}
//function with no parameter and a return
let noParamReturn = () => {
    //execute my code
    return someValue;
}
//function with a parameter and no return
let paramNoReturn = (a) => {
    //use a in the code
}
//function with a parameter and return
let paramReturn = (a) => {
    //use a in the code
    return someValue;
}
//function with a default value
let defaultValue = (a = 1) => {
    //if a is not specified use a = 1
}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</p>`;
        }
      })}`;
    }
  })} <h4 class="svelte-xhs4zz" data-svelte-h="svelte-9or4p">Questions</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<ol class="svelte-xhs4zz" data-svelte-h="svelte-1iffvxa"><li class="svelte-xhs4zz">Write a JavaScript function to calculate the area of a rectangle given its length and width.</li> <li class="svelte-xhs4zz">Create a function that takes an array of numbers as input and returns the sum of all the numbers.</li> <li class="svelte-xhs4zz">Implement a function that checks if a given number is a palindrome (reads the same forwards and backwards).</li> <li class="svelte-xhs4zz">Write a JavaScript function to find the maximum and minimum elements in an array of numbers.</li> <li class="svelte-xhs4zz">Develop a function that takes a string as input and returns the reverse of the string.</li> <li class="svelte-xhs4zz">Create a JavaScript program that generates the Fibonacci sequence up to a certain limit using a while loop.</li> <li class="svelte-xhs4zz">Implement a function that takes two numbers as input and returns the greatest common divisor (GCD).</li> <li class="svelte-xhs4zz">Write a JavaScript function to output the reverse of a string.</li> <li class="svelte-xhs4zz">Create a function that takes an array of integers and returns a new array with only the unique values.</li> <li class="svelte-xhs4zz">Develop a function that takes a sentence as input and returns the number of words in the sentence.</li></ol>`;
        }
      })}`;
    }
  })} </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BT3Zz41m.js.map
