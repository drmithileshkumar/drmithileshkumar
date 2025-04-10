import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component } from './ssr2-CDgUAJs6.js';
import { j as javascript } from './javascript-BRG9RdMS.js';
import { a as githubDark, g as github } from './github-dark-DeAsbMVW.js';
import './Suffix-CtI6fDI6.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import { p as page } from './stores3-kDd52ji6.js';
import './Subheader-DEm_inUP.js';
import './client-CAo-6NMJ.js';
import { d as darkMode, c as currentPath, n as navList } from './stores-Cecnyqn_.js';
import { c as contentNav, a as contents } from './content2-ChhWH1Ps.js';
import { P as Pathlist } from './Pathlist-B9wgcfC1.js';
import { C as CourseNavigation } from './CourseNavigation-DznSxbmO.js';
import { H as Highlight, L as LineNumbers } from './LineNumbers-Cbvr0mA1.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './exports-DKuYoYKl.js';
import './index2-D2s-XE5r.js';
import './_commonjsHelpers-B85MJLTf.js';

const css$1 = {
  code: "article.svelte-xhs4zz.svelte-xhs4zz{display:flex;flex-direction:column;gap:0.5em}p.svelte-xhs4zz.svelte-xhs4zz,li.svelte-xhs4zz.svelte-xhs4zz{opacity:0.8}h4.svelte-xhs4zz.svelte-xhs4zz{margin:0.5em 0}h6.svelte-xhs4zz.svelte-xhs4zz{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}a.svelte-xhs4zz.svelte-xhs4zz{cursor:pointer;text-decoration:none}ol.svelte-xhs4zz li.svelte-xhs4zz::marker{font-size:1.2em;color:red;font-weight:bold}ol.svelte-xhs4zz li.svelte-xhs4zz{padding:0.5em 0}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n\\t// @ts-nocheck\\r\\n\\timport Highlight, { LineNumbers } from 'svelte-highlight';\\r\\n\\timport javascript from 'svelte-highlight/languages/javascript';\\r\\n\\timport xml from 'svelte-highlight/languages/xml';\\r\\n\\timport css from 'svelte-highlight/languages/css';\\r\\n\\timport github from 'svelte-highlight/styles/github';\\r\\n\\timport githubDark from 'svelte-highlight/styles/github-dark';\\r\\n\\timport { tileGrid } from '$lib/utils/common/tile';\\r\\n\\timport WebPractice from '$lib/pages/courses/internet/WebPractice.svelte';\\r\\n\\timport { page } from '$app/stores';\\r\\n\\timport { onMount } from 'svelte';\\r\\n\\timport Card, { Content, Actions } from '@smui/card';\\r\\n\\timport DataTable, { Body, Head, Row, Cell } from '@smui/data-table';\\r\\n\\timport Button, { Label } from '@smui/button';\\r\\n\\timport Ripple from '@smui/ripple';\\r\\n\\timport NavList from '$lib/components/NavList.svelte';\\r\\n\\timport { currentPath } from '$lib/stores';\\r\\n\\timport { darkMode, navList } from '$lib/stores';\\r\\n\\timport { contents, contentNav } from '$lib/pages/courses/internet/content';\\r\\n\\timport Pathlist from '$lib/components/Pathlist.svelte';\\r\\n\\timport CourseNavigation from '$lib/components/CourseNavigation.svelte';\\r\\n\\t$navList = contents;\\r\\n\\t$currentPath = 'Error';\\r\\n\\t$darkMode = false;\\r\\n\\t// tileGrid(5, 5)\\r\\n\\tlet cssLayout = [];\\r\\n\\tlet nDivs = 0;\\r\\n\\tlet gridLayout;\\r\\n\\tlet hasZero = false;\\r\\n\\t\\r\\n\\r\\n\\tonMount(() => {\\r\\n\\t\\t//generateLayout();\\r\\n\\t});\\r\\n\\tlet htmlContentPosition = \`<div id=\\"container\\">\\r\\n    <div id=\\"io\\">\\r\\n        <div id=\\"expression\\"></div>\\r\\n        <div id=\\"output\\"></div>\\r\\n    </div>\\r\\n    <div id=\\"input\\">\\r\\n        <div id=\\"advanced\\"></div>\\r\\n        <div id=\\"basic\\">\\r\\n            <button class=\\"operation C\\" onclick=\\"setOperator('C')\\">C</button>\\r\\n            <button class=\\"operation pm\\" onclick=\\"setOperator('pm')\\">&plusmn;</button>\\r\\n            <button class=\\"operation per\\" onclick=\\"setOperator('%')\\">&percnt;</button>\\r\\n            <button class=\\"operation div\\" onclick=\\"setOperator('/')\\">&divide;</button>\\r\\n\\r\\n            <button class=\\"seven\\" onclick=\\"setNumber(7)\\">7</button>\\r\\n            <button class=\\"eight\\" onclick=\\"setNumber(8)\\">8</button>\\r\\n            <button class=\\"nine\\" onclick=\\"setNumber(9)\\">9</button>\\r\\n            <button class=\\"operation mul\\" onclick=\\"setOperator('*')\\">&times;</button>\\r\\n\\r\\n            <button class=\\"four\\" onclick=\\"setNumber(4)\\">4</button>\\r\\n            <button class=\\"five\\" onclick=\\"setNumber(5)\\">5</button>\\r\\n            <button class=\\"six\\" onclick=\\"setNumber(6)\\">6</button>\\r\\n            <button class=\\"operation min\\" onclick=\\"setOperator('-')\\">&minus;</button>\\r\\n\\r\\n            <button class=\\"one\\" onclick=\\"setNumber(1)\\">1</button>\\r\\n            <button class=\\"two\\" onclick=\\"setNumber(2)\\">2</button>\\r\\n            <button class=\\"three\\" onclick=\\"setNumber(3)\\">3</button>\\r\\n            <button class=\\"operation plus\\" onclick=\\"setOperator('+')\\">+</button>\\r\\n\\r\\n            <button class=\\"zero\\" onclick=\\"setNumber(0)\\">0</button>\\r\\n            <button class=\\"dot\\" onclick=\\"setNumber('.')\\">.</button>\\r\\n            <button class=\\"operation eq\\" onclick=\\"setOperator('=')\\">&equals;</button>\\r\\n        </div>\\r\\n    </div>\\r\\n</div>\`;\\r\\n\\tlet cssContentPosition = \`* {\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n#container {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 0.5em;\\r\\n    width: 300px;\\r\\n    align-items: center;\\r\\n    border: 1px solid;\\r\\n    padding: 0.2em;\\r\\n}\\r\\n#io {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    padding: 0.5em 0.2em;\\r\\n    border: 1px solid;\\r\\n    min-height: 1.5em;\\r\\n    width: 100%;\\r\\n}\\r\\n#expression {\\r\\n    color: gray;\\r\\n    display: flex;\\r\\n    justify-content: end;\\r\\n    padding: 0.5em 0.2em;\\r\\n    height: 1.5em;\\r\\n}\\r\\n#output {\\r\\n    display: flex;\\r\\n    justify-content: end;\\r\\n    padding: 0.5em 0.2em;\\r\\n    height: 1.5em;\\r\\n}\\r\\n#input {\\r\\n    width: 100%;\\r\\n    display: grid;\\r\\n    padding: 0.2em;\\r\\n    border: 1px solid;\\r\\n}\\r\\n#basic {\\r\\n    display: grid;\\r\\n    gap: 0.2em;\\r\\n    grid-template-areas:\\r\\n        'C pm per div'\\r\\n        'seven eight nine mul'\\r\\n        'four five six min'\\r\\n        'one two three plus'\\r\\n        'zero zero dot eq';\\r\\n}\\r\\n.C {\\r\\n    grid-area: C;\\r\\n}\\r\\n.pm {\\r\\n    grid-area: pm;\\r\\n}\\r\\n.per {\\r\\n    grid-area: per;\\r\\n}\\r\\n.div {\\r\\n    grid-area: div;\\r\\n}\\r\\n.mul {\\r\\n    grid-area: mul;\\r\\n}\\r\\n.min {\\r\\n    grid-area: min;\\r\\n}\\r\\n.plus {\\r\\n    grid-area: plus;\\r\\n}\\r\\n.eq {\\r\\n    grid-area: eq;\\r\\n}\\r\\n.zero {\\r\\n    grid-area: zero;\\r\\n}\\r\\n.one {\\r\\n    grid-area: one;\\r\\n}\\r\\n.two {\\r\\n    grid-area: two;\\r\\n}\\r\\n.three {\\r\\n    grid-area: three;\\r\\n}\\r\\n.four {\\r\\n    grid-area: four;\\r\\n}\\r\\n.five {\\r\\n    grid-area: five;\\r\\n}\\r\\n.six {\\r\\n    grid-area: six;\\r\\n}\\r\\n.seven {\\r\\n    grid-area: seven;\\r\\n}\\r\\n.eight {\\r\\n    grid-area: eight;\\r\\n}\\r\\n.nine {\\r\\n    grid-area: nine;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n    font-size: 1.2em;\\r\\n}\\r\\n.operation {\\r\\n    background-color: rgb(245, 162, 7);\\r\\n    border-color: rgb(245, 162, 7);\\r\\n}\`;\\r\\n    let javaScriptContent = \`let expression = document.querySelector(\\"#expression\\");\\r\\nlet output = document.querySelector(\\"#output\\");\\r\\nexpression.textContent = '';\\r\\nlet currentExpression = '';\\r\\nlet result = 0;\\r\\nlet operator = '';\\r\\nlet number = 0;\\r\\nlet lastInput = 'Number';\\r\\nlet currentOperation = '';\\r\\nlet currentNumber = '';\\r\\nfunction setOperator(op) {\\r\\n    if(expression.textContent == '') return;\\r\\n    currentOperation = op;\\r\\n    currentNumber = '';\\r\\n    if(lastInput == 'op') {\\r\\n        //remove the last operation to new operation in expression\\r\\n        expression.textContent = expression.textContent.slice(0, -1);\\r\\n    }\\r\\n    lastInput = 'op';\\r\\n    switch(op) {\\r\\n        case 'C': {\\r\\n            expression.textContent = '';\\r\\n            output.textContent = '';\\r\\n            break;\\r\\n        } \\r\\n        case 'pm': {\\r\\n            break;\\r\\n        }\\r\\n        case '=': {\\r\\n            result = eval(expression.textContent);\\r\\n            output.textContent = result;\\r\\n            lastInput = '';\\r\\n            break;\\r\\n        }\\r\\n        default: {\\r\\n            expression.textContent += op;\\r\\n            break;\\r\\n        }\\r\\n    }\\r\\n}\\r\\nfunction setNumber(num) {\\r\\n    lastInput = \\"Number\\";\\r\\n    if(!(num == '0' && currentNumber == '0')) {\\r\\n        currentNumber += num;\\r\\n        expression.textContent += num;\\r\\n    }\\r\\n}\\r\\n\`\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>Internet Technologies</title>\\r\\n\\t<link\\r\\n\\t\\trel=\\"canonical\\"\\r\\n\\t\\thref=\\"https://drmithileshkumar.com/courses/internet/javascript/basics/error\\"\\r\\n\\t/>\\r\\n\\t<meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n\\t{#if $darkMode}\\r\\n\\t\\t{@html githubDark}\\r\\n\\t{:else}\\r\\n\\t\\t{@html github}\\r\\n\\t{/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n\\t<Pathlist origin={$page.url.origin} pathname={$page.url.pathname} />\\r\\n\\t<CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n\\t<h4>Error handling</h4>\\r\\n\\t<Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <p>You can throw exceptions using the <code>throw</code> statement and handle them using the <code>try...catch</code> statements.</p>\\r\\n            <ol>\\r\\n                <li><a href=\\"#throw\\"><code>throw</code></a></li>\\r\\n                <li><a href=\\"#try\\"><code>try...catch</code></a></li>\\r\\n                <li><a href=\\"#finally\\"><code>finally</code></a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n\\r\\n\\t<Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"throw\\"><code>throw</code></h6>\\r\\n            <p>\\r\\n\\t\\t\\t\\tWe use the <code>throw</code> statement to throw an exception. A <code>throw</code> statement specifies the value to be thrown\\r\\n                <Highlight language={javascript} \\r\\n                code={\`throw expression;\\r\\n//examples\\r\\nthrow \\"Oops! Something went wrong!\\";\\r\\nthrow \\"404\\";\\r\\nthrow false;\\r\\nthrow {toString() {return \\"an object error\\"}}\`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n\\t\\r\\n\\t<!-- <WebPractice htmlContent={htmlContentPosition} cssContent={cssContentPosition} jsContent={javaScriptContent} /> -->\\r\\n\\r\\n\\t<Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"try\\"><code>try...catch</code></h6>\\r\\n            <p>\\r\\n\\t\\t\\t\\tThe <code>try...catch</code> statement consists of a <code>try</code> block, which contains one or more statements, and a <code>catch</code> block, containing statements that specify what to do if an <code>exception</code> is thrown in the <code>try</code> block.\\r\\n                <Highlight language={javascript} \\r\\n                code={\`try {\\r\\n    //try to excecute the code here\\r\\n    //throw error if something goes wrong\\r\\n} catch (e) {\\r\\n    //catch the error thrown from try and excecute the the codes here\\r\\n}\\r\\n//example\\r\\nlet divide = (a, b) => {\\r\\n    //divide a by b\\r\\n    try {\\r\\n        if(b !== 0) {\\r\\n            return a / b;\\r\\n        } else {\\r\\n            throw \\"Division by 0\\"\\r\\n        }\\r\\n    } catch (e) {\\r\\n        console.log(e);\\r\\n        console.log('Why are you dividing by zero?')\\r\\n    }\\r\\n}\`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"finally\\"><code>finally</code></h6>\\r\\n            <p>\\r\\n                The <code>finally</code> block runs after <code>try</code> and <code>catch</code> blocks has executed, irrespective of any exceptions thrown by the <code>try</code> block. If the <code>finally</code> block returns some value, then this value becomes the return value of the whole <code>try...catch...finally</code> statement.\\r\\n                <Highlight language={javascript} \\r\\n                code={\`try {\\r\\n    //try to excecute the code here\\r\\n    //throw error if something goes wrong\\r\\n} catch (e) {\\r\\n    //catch the error thrown from try and excecute the the codes here\\r\\n} finally {\\r\\n    //irrespective of computation above, execute the code from here\\r\\n}\\r\\n//example\\r\\nlet divide = (a, b) => {\\r\\n    //divide a by b\\r\\n    try {\\r\\n        if(b !== 0) {\\r\\n            return a / b;\\r\\n        } else {\\r\\n            throw \\"Division by 0\\"\\r\\n        }\\r\\n    } catch (e) {\\r\\n        console.log(e);\\r\\n        console.log('Why are you dividing by zero?')\\r\\n    } finally {\\r\\n        console.log('We are done dividing ', a, ' by ', b)\\r\\n    }\\r\\n}\`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n\\t<h4>Questions</h4>\\r\\n\\t<Card>\\r\\n\\t\\t<Content>\\r\\n\\t\\t\\t<div class=\\"question\\">Rewrite the functions in the previous chapter using <code>try...catch...finally</code> block.</div>\\r\\n\\t\\t</Content>\\r\\n\\t</Card>\\r\\n</article>\\r\\n\\r\\n<style>\\r\\n\\tarticle {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\tgap: 0.5em;\\r\\n\\t}\\r\\n\\tp,\\r\\n\\tli {\\r\\n\\t\\topacity: 0.8;\\r\\n\\t}\\r\\n\\th2,\\r\\n\\th3,\\r\\n\\th4,\\r\\n\\th5 {\\r\\n\\t\\tmargin: 0.5em 0;\\r\\n\\t}\\r\\n\\th5 {\\r\\n\\t\\tfont-size: 1.1em;\\r\\n\\t}\\r\\n\\th6 {\\r\\n\\t\\tfont-size: 1em;\\r\\n\\t\\tmargin: 0.5em 0;\\r\\n\\t\\tcolor: rgb(74, 155, 139);\\r\\n\\t}\\r\\n\\tstrong {\\r\\n\\t\\tcolor: goldenrod;\\r\\n\\t\\topacity: 1;\\r\\n\\t}\\r\\n\\ta {\\r\\n\\t\\tcursor: pointer;\\r\\n\\t\\ttext-decoration: none;\\r\\n\\t}\\r\\n\\tol li::marker {\\r\\n        font-size: 1.2em;\\r\\n        color: red;\\r\\n        font-weight: bold;\\r\\n    }\\r\\n    ol li {\\r\\n        padding: 0.5em 0;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAqWC,mCAAQ,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACN,CACA,6BAAC,CACD,8BAAG,CACF,OAAO,CAAE,GACV,CAGA,8BACG,CACF,MAAM,CAAE,KAAK,CAAC,CACf,CAIA,8BAAG,CACF,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACxB,CAKA,6BAAE,CACD,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IAClB,CACA,gBAAE,CAAC,gBAAE,QAAS,CACP,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,GAAG,CACV,WAAW,CAAE,IACjB,CACA,gBAAE,CAAC,gBAAG,CACF,OAAO,CAAE,KAAK,CAAC,CACnB"}`
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
  set_store_value(currentPath, $currentPath = "Error", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1ujgl1s_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/javascript/basics/error"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1ujgl1s_END -->`, ""} <article class="svelte-xhs4zz">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-xhs4zz" data-svelte-h="svelte-7ai0dd">Error handling</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-xhs4zz" data-svelte-h="svelte-zdr1se">Topics</h6> <p class="svelte-xhs4zz" data-svelte-h="svelte-ylxfmj">You can throw exceptions using the <code>throw</code> statement and handle them using the <code>try...catch</code> statements.</p> <ol class="svelte-xhs4zz" data-svelte-h="svelte-yfhtpt"><li class="svelte-xhs4zz"><a href="#throw" class="svelte-xhs4zz"><code>throw</code></a></li> <li class="svelte-xhs4zz"><a href="#try" class="svelte-xhs4zz"><code>try...catch</code></a></li> <li class="svelte-xhs4zz"><a href="#finally" class="svelte-xhs4zz"><code>finally</code></a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="throw" class="svelte-xhs4zz" data-svelte-h="svelte-fca2wv"><code>throw</code></h6> <p class="svelte-xhs4zz">We use the <code data-svelte-h="svelte-1nopam">throw</code> statement to throw an exception. A <code data-svelte-h="svelte-1nopam">throw</code> statement specifies the value to be thrown
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: javascript,
              code: `throw expression;
//examples
throw "Oops! Something went wrong!";
throw "404";
throw false;
throw {toString() {return "an object error"}}`
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
          return `<h6 id="try" class="svelte-xhs4zz" data-svelte-h="svelte-18n021s"><code>try...catch</code></h6> <p class="svelte-xhs4zz">The <code data-svelte-h="svelte-1kua6ka">try...catch</code> statement consists of a <code data-svelte-h="svelte-yygk5h">try</code> block, which contains one or more statements, and a <code data-svelte-h="svelte-1udk4rj">catch</code> block, containing statements that specify what to do if an <code data-svelte-h="svelte-e3k3q5">exception</code> is thrown in the <code data-svelte-h="svelte-yygk5h">try</code> block.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: javascript,
              code: `try {
    //try to excecute the code here
    //throw error if something goes wrong
} catch (e) {
    //catch the error thrown from try and excecute the the codes here
}
//example
let divide = (a, b) => {
    //divide a by b
    try {
        if(b !== 0) {
            return a / b;
        } else {
            throw "Division by 0"
        }
    } catch (e) {
        console.log(e);
        console.log('Why are you dividing by zero?')
    }
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
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="finally" class="svelte-xhs4zz" data-svelte-h="svelte-1pt7c4d"><code>finally</code></h6> <p class="svelte-xhs4zz">The <code data-svelte-h="svelte-1wd47h3">finally</code> block runs after <code data-svelte-h="svelte-yygk5h">try</code> and <code data-svelte-h="svelte-1udk4rj">catch</code> blocks has executed, irrespective of any exceptions thrown by the <code data-svelte-h="svelte-yygk5h">try</code> block. If the <code data-svelte-h="svelte-1wd47h3">finally</code> block returns some value, then this value becomes the return value of the whole <code data-svelte-h="svelte-1ti7ugx">try...catch...finally</code> statement.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: javascript,
              code: `try {
    //try to excecute the code here
    //throw error if something goes wrong
} catch (e) {
    //catch the error thrown from try and excecute the the codes here
} finally {
    //irrespective of computation above, execute the code from here
}
//example
let divide = (a, b) => {
    //divide a by b
    try {
        if(b !== 0) {
            return a / b;
        } else {
            throw "Division by 0"
        }
    } catch (e) {
        console.log(e);
        console.log('Why are you dividing by zero?')
    } finally {
        console.log('We are done dividing ', a, ' by ', b)
    }
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
          return `<div class="question" data-svelte-h="svelte-1ogi5dc">Rewrite the functions in the previous chapter using <code>try...catch...finally</code> block.</div>`;
        }
      })}`;
    }
  })} </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CPPY9VZN.js.map
