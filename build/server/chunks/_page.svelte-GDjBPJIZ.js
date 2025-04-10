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
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n\\t// @ts-nocheck\\r\\n\\timport Highlight, { LineNumbers } from 'svelte-highlight';\\r\\n\\timport javascript from 'svelte-highlight/languages/javascript';\\r\\n\\timport xml from 'svelte-highlight/languages/xml';\\r\\n\\timport css from 'svelte-highlight/languages/css';\\r\\n\\timport github from 'svelte-highlight/styles/github';\\r\\n\\timport githubDark from 'svelte-highlight/styles/github-dark';\\r\\n\\timport { tileGrid } from '$lib/utils/common/tile';\\r\\n\\timport WebPractice from '$lib/pages/courses/internet/WebPractice.svelte';\\r\\n\\timport { page } from '$app/stores';\\r\\n\\timport { onMount } from 'svelte';\\r\\n\\timport Card, { Content, Actions } from '@smui/card';\\r\\n\\timport DataTable, { Body, Head, Row, Cell } from '@smui/data-table';\\r\\n\\timport Button, { Label } from '@smui/button';\\r\\n\\timport Ripple from '@smui/ripple';\\r\\n\\timport NavList from '$lib/components/NavList.svelte';\\r\\n\\timport { currentPath } from '$lib/stores';\\r\\n\\timport { darkMode, navList } from '$lib/stores';\\r\\n\\timport { contents, contentNav } from '$lib/pages/courses/internet/content';\\r\\n\\timport Pathlist from '$lib/components/Pathlist.svelte';\\r\\n\\timport CourseNavigation from '$lib/components/CourseNavigation.svelte';\\r\\n\\t$navList = contents;\\r\\n\\t$currentPath = 'Conditions';\\r\\n\\t$darkMode = false;\\r\\n\\t// tileGrid(5, 5)\\r\\n\\tlet cssLayout = [];\\r\\n\\tlet nDivs = 0;\\r\\n\\tlet gridLayout;\\r\\n\\tlet hasZero = false;\\r\\n\\tconst generateLayout = () => {\\r\\n\\t\\tlet { grid, rectangleCount } = tileGrid(5, 5);\\r\\n\\t\\thasZero = 0;\\r\\n\\t\\tfor (let i = 0; i < grid.length; i++) {\\r\\n\\t\\t\\tfor (let j = 0; j < grid[i].length; j++) {\\r\\n\\t\\t\\t\\tif (grid[i][j] === 0) {\\r\\n\\t\\t\\t\\t\\thasZero = true;\\r\\n\\t\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t\\t}\\r\\n\\t\\t\\t}\\r\\n\\t\\t}\\r\\n\\t\\tcssLayout = grid;\\r\\n\\t\\tnDivs = rectangleCount;\\r\\n\\t\\t// console.log(rectangleCount, grid);\\r\\n\\t\\tlet areas = '';\\r\\n\\t\\tlet rows = [];\\r\\n\\t\\tfor (let i = 0; i < grid.length; i++) {\\r\\n\\t\\t\\trows.push(grid[i].map((c) => 'item' + c).join(' '));\\r\\n\\t\\t}\\r\\n\\t\\tareas = rows.map((r) => \`\\"\${r}\\"\`).join(' ');\\r\\n\\t\\t// grid.map(row => \`\\"\${row.join(\\" \\")}\\"\`).join(\\"\\\\n\\");\\r\\n\\t\\tgridLayout.style.gridTemplateAreas = areas;\\r\\n\\t};\\r\\n\\r\\n\\tonMount(() => {\\r\\n\\t\\t//generateLayout();\\r\\n\\t});\\r\\n\\tlet htmlContentPosition = \`<div id=\\"container\\">\\r\\n    <div id=\\"io\\">\\r\\n        <div id=\\"expression\\"></div>\\r\\n        <div id=\\"output\\"></div>\\r\\n    </div>\\r\\n    <div id=\\"input\\">\\r\\n        <div id=\\"advanced\\"></div>\\r\\n        <div id=\\"basic\\">\\r\\n            <button class=\\"operation C\\" onclick=\\"setOperator('C')\\">C</button>\\r\\n            <button class=\\"operation pm\\" onclick=\\"setOperator('pm')\\">&plusmn;</button>\\r\\n            <button class=\\"operation per\\" onclick=\\"setOperator('%')\\">&percnt;</button>\\r\\n            <button class=\\"operation div\\" onclick=\\"setOperator('/')\\">&divide;</button>\\r\\n\\r\\n            <button class=\\"seven\\" onclick=\\"setNumber(7)\\">7</button>\\r\\n            <button class=\\"eight\\" onclick=\\"setNumber(8)\\">8</button>\\r\\n            <button class=\\"nine\\" onclick=\\"setNumber(9)\\">9</button>\\r\\n            <button class=\\"operation mul\\" onclick=\\"setOperator('*')\\">&times;</button>\\r\\n\\r\\n            <button class=\\"four\\" onclick=\\"setNumber(4)\\">4</button>\\r\\n            <button class=\\"five\\" onclick=\\"setNumber(5)\\">5</button>\\r\\n            <button class=\\"six\\" onclick=\\"setNumber(6)\\">6</button>\\r\\n            <button class=\\"operation min\\" onclick=\\"setOperator('-')\\">&minus;</button>\\r\\n\\r\\n            <button class=\\"one\\" onclick=\\"setNumber(1)\\">1</button>\\r\\n            <button class=\\"two\\" onclick=\\"setNumber(2)\\">2</button>\\r\\n            <button class=\\"three\\" onclick=\\"setNumber(3)\\">3</button>\\r\\n            <button class=\\"operation plus\\" onclick=\\"setOperator('+')\\">+</button>\\r\\n\\r\\n            <button class=\\"zero\\" onclick=\\"setNumber(0)\\">0</button>\\r\\n            <button class=\\"dot\\" onclick=\\"setNumber('.')\\">.</button>\\r\\n            <button class=\\"operation eq\\" onclick=\\"setOperator('=')\\">&equals;</button>\\r\\n        </div>\\r\\n    </div>\\r\\n</div>\`;\\r\\n\\tlet cssContentPosition = \`* {\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n#container {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 0.5em;\\r\\n    width: 300px;\\r\\n    align-items: center;\\r\\n    border: 1px solid;\\r\\n    padding: 0.2em;\\r\\n}\\r\\n#io {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    padding: 0.5em 0.2em;\\r\\n    border: 1px solid;\\r\\n    min-height: 1.5em;\\r\\n    width: 100%;\\r\\n}\\r\\n#expression {\\r\\n    color: gray;\\r\\n    display: flex;\\r\\n    justify-content: end;\\r\\n    padding: 0.5em 0.2em;\\r\\n    height: 1.5em;\\r\\n}\\r\\n#output {\\r\\n    display: flex;\\r\\n    justify-content: end;\\r\\n    padding: 0.5em 0.2em;\\r\\n    height: 1.5em;\\r\\n}\\r\\n#input {\\r\\n    width: 100%;\\r\\n    display: grid;\\r\\n    padding: 0.2em;\\r\\n    border: 1px solid;\\r\\n}\\r\\n#basic {\\r\\n    display: grid;\\r\\n    gap: 0.2em;\\r\\n    grid-template-areas:\\r\\n        'C pm per div'\\r\\n        'seven eight nine mul'\\r\\n        'four five six min'\\r\\n        'one two three plus'\\r\\n        'zero zero dot eq';\\r\\n}\\r\\n.C {\\r\\n    grid-area: C;\\r\\n}\\r\\n.pm {\\r\\n    grid-area: pm;\\r\\n}\\r\\n.per {\\r\\n    grid-area: per;\\r\\n}\\r\\n.div {\\r\\n    grid-area: div;\\r\\n}\\r\\n.mul {\\r\\n    grid-area: mul;\\r\\n}\\r\\n.min {\\r\\n    grid-area: min;\\r\\n}\\r\\n.plus {\\r\\n    grid-area: plus;\\r\\n}\\r\\n.eq {\\r\\n    grid-area: eq;\\r\\n}\\r\\n.zero {\\r\\n    grid-area: zero;\\r\\n}\\r\\n.one {\\r\\n    grid-area: one;\\r\\n}\\r\\n.two {\\r\\n    grid-area: two;\\r\\n}\\r\\n.three {\\r\\n    grid-area: three;\\r\\n}\\r\\n.four {\\r\\n    grid-area: four;\\r\\n}\\r\\n.five {\\r\\n    grid-area: five;\\r\\n}\\r\\n.six {\\r\\n    grid-area: six;\\r\\n}\\r\\n.seven {\\r\\n    grid-area: seven;\\r\\n}\\r\\n.eight {\\r\\n    grid-area: eight;\\r\\n}\\r\\n.nine {\\r\\n    grid-area: nine;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n    font-size: 1.2em;\\r\\n}\\r\\n.operation {\\r\\n    background-color: rgb(245, 162, 7);\\r\\n    border-color: rgb(245, 162, 7);\\r\\n}\`;\\r\\n    let javaScriptContent = \`let expression = document.querySelector(\\"#expression\\");\\r\\nlet output = document.querySelector(\\"#output\\");\\r\\nexpression.textContent = '';\\r\\nlet currentExpression = '';\\r\\nlet result = 0;\\r\\nlet operator = '';\\r\\nlet number = 0;\\r\\nlet lastInput = 'Number';\\r\\nlet currentOperation = '';\\r\\nlet currentNumber = '';\\r\\nfunction setOperator(op) {\\r\\n    if(expression.textContent == '') return;\\r\\n    currentOperation = op;\\r\\n    currentNumber = '';\\r\\n    if(lastInput == 'op') {\\r\\n        //remove the last operation to new operation in expression\\r\\n        expression.textContent = expression.textContent.slice(0, -1);\\r\\n    }\\r\\n    lastInput = 'op';\\r\\n    switch(op) {\\r\\n        case 'C': {\\r\\n            expression.textContent = '';\\r\\n            output.textContent = '';\\r\\n            break;\\r\\n        } \\r\\n        case 'pm': {\\r\\n            break;\\r\\n        }\\r\\n        case '=': {\\r\\n            result = eval(expression.textContent);\\r\\n            output.textContent = result;\\r\\n            lastInput = '';\\r\\n            break;\\r\\n        }\\r\\n        default: {\\r\\n            expression.textContent += op;\\r\\n            break;\\r\\n        }\\r\\n    }\\r\\n}\\r\\nfunction setNumber(num) {\\r\\n    lastInput = \\"Number\\";\\r\\n    if(!(num == '0' && currentNumber == '0')) {\\r\\n        currentNumber += num;\\r\\n        expression.textContent += num;\\r\\n    }\\r\\n}\\r\\n\`\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>Internet Technologies</title>\\r\\n\\t<link\\r\\n\\t\\trel=\\"canonical\\"\\r\\n\\t\\thref=\\"https://drmithileshkumar.com/courses/internet/javascript/basics/conditions\\"\\r\\n\\t/>\\r\\n\\t<meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n\\t{#if $darkMode}\\r\\n\\t\\t{@html githubDark}\\r\\n\\t{:else}\\r\\n\\t\\t{@html github}\\r\\n\\t{/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n\\t<Pathlist origin={$page.url.origin} pathname={$page.url.pathname} />\\r\\n\\t<CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n\\t<h4>Conditions</h4>\\r\\n\\t<Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#if\\"><code>if</code></a></li>\\r\\n                <li><a href=\\"#switch\\"><code>switch</code></a></li>\\r\\n            </ol>\\r\\n            <p>Conditional statements like <code>if...else</code> and <code>switch</code> introduce branching in the normal flow of the program.</p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n\\r\\n\\t<Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"if\\"><code>if</code></h6>\\r\\n            <p>\\r\\n\\t\\t\\t\\tThe general syntax of <code>if...else</code> statement is as follows:\\r\\n                <Highlight language={javascript} \\r\\n                code={\`if(condition1) {\\r\\n\\t//statements to execute when condition1 is true\\r\\n} else if(condition2) {\\r\\n\\t//statements to execute when condition1 is false and condition2 is true\\r\\n} else {\\r\\n\\t//statements to execute when both condition1 and condition2 are false\\r\\n}\`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n\\t\\r\\n\\t<!-- <WebPractice htmlContent={htmlContentPosition} cssContent={cssContentPosition} jsContent={javaScriptContent} /> -->\\r\\n\\r\\n\\t<Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"switch\\"><code>switch</code></h6>\\r\\n            <p>\\r\\n\\t\\t\\t\\tThe general syntax of <code>switch...case</code> statement is as follows:\\r\\n                <Highlight language={javascript} \\r\\n                code={\`switch(variable) {\\r\\n\\tcase value1: {\\r\\n\\t\\t//when variable = value1;\\r\\n\\t\\tbreak;//exit when done\\r\\n\\t}\\r\\n\\tcase value2: {\\r\\n\\t\\t//when variable = value2;\\r\\n\\t\\tbreak;//exit when done\\r\\n\\t}\\r\\n\\tdefault: {\\r\\n\\t\\t//when value of the variable is not value1 and value2\\r\\n\\t\\tbreak;//exit when done\\r\\n\\t}\\r\\n}\`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n\\t<h4>Questions</h4>\\r\\n\\t<Card>\\r\\n\\t\\t<Content>\\r\\n\\t\\t\\t<ol>\\r\\n\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\tWrite a JavaScript program that checks if a number is even or odd using if-else statements.\\r\\n\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\tCreate a function that determines whether a given year is a leap year using if-else statements.\\r\\n\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\tImplement a JavaScript function that calculates the grade of a student based on their score using if-else statements.\\r\\n\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\tWrite a program that determines the type of a triangle (equilateral, isosceles, or scalene) based on the lengths of its sides using if-else statements.\\r\\n\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\tDevelop a JavaScript function that converts a numerical grade into a letter grade (A, B, C, D, F) using if-else statements.\\r\\n\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\tImplement a switch statement in JavaScript to determine the name of the day based on its number representation (1 for Monday, 2 for Tuesday, etc.).\\r\\n\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\tWrite a program that categorizes a given month into seasons (spring, summer, autumn, winter) using switch statements.\\r\\n\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\tCreate a function that determines the discount percentage based on the total purchase amount using a switch statement (e.g., 0-100: no discount, 101-500: 10% discount, etc.).\\r\\n\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\tWrite a JavaScript program that converts a given month number into its corresponding name (e.g., 1 for January) using a switch statement.\\r\\n\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\tImplement a function that calculates the area of a shape (circle, square, triangle) based on user input and using a switch statement to determine the shape type.\\r\\n\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t</ol>\\r\\n\\t\\t</Content>\\r\\n\\t</Card>\\r\\n</article>\\r\\n\\r\\n<style>\\r\\n\\tarticle {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\tgap: 0.5em;\\r\\n\\t}\\r\\n\\tp,\\r\\n\\tli {\\r\\n\\t\\topacity: 0.8;\\r\\n\\t}\\r\\n\\th2,\\r\\n\\th3,\\r\\n\\th4,\\r\\n\\th5 {\\r\\n\\t\\tmargin: 0.5em 0;\\r\\n\\t}\\r\\n\\th5 {\\r\\n\\t\\tfont-size: 1.1em;\\r\\n\\t}\\r\\n\\th6 {\\r\\n\\t\\tfont-size: 1em;\\r\\n\\t\\tmargin: 0.5em 0;\\r\\n\\t\\tcolor: rgb(74, 155, 139);\\r\\n\\t}\\r\\n\\tstrong {\\r\\n\\t\\tcolor: goldenrod;\\r\\n\\t\\topacity: 1;\\r\\n\\t}\\r\\n\\ta {\\r\\n\\t\\tcursor: pointer;\\r\\n\\t\\ttext-decoration: none;\\r\\n\\t}\\r\\n\\tol li::marker {\\r\\n        font-size: 1.2em;\\r\\n        color: red;\\r\\n        font-weight: bold;\\r\\n    }\\r\\n    ol li {\\r\\n        padding: 0.5em 0;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAgXC,mCAAQ,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACN,CACA,6BAAC,CACD,8BAAG,CACF,OAAO,CAAE,GACV,CAGA,8BACG,CACF,MAAM,CAAE,KAAK,CAAC,CACf,CAIA,8BAAG,CACF,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACxB,CAKA,6BAAE,CACD,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IAClB,CACA,gBAAE,CAAC,gBAAE,QAAS,CACP,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,GAAG,CACV,WAAW,CAAE,IACjB,CACA,gBAAE,CAAC,gBAAG,CACF,OAAO,CAAE,KAAK,CAAC,CACnB"}`
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
  set_store_value(currentPath, $currentPath = "Conditions", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1bpznm0_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/javascript/basics/conditions"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1bpznm0_END -->`, ""} <article class="svelte-xhs4zz">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-xhs4zz" data-svelte-h="svelte-1ogm98s">Conditions</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-xhs4zz" data-svelte-h="svelte-zdr1se">Topics</h6> <ol class="svelte-xhs4zz" data-svelte-h="svelte-1rcc51o"><li class="svelte-xhs4zz"><a href="#if" class="svelte-xhs4zz"><code>if</code></a></li> <li class="svelte-xhs4zz"><a href="#switch" class="svelte-xhs4zz"><code>switch</code></a></li></ol> <p class="svelte-xhs4zz" data-svelte-h="svelte-188azs8">Conditional statements like <code>if...else</code> and <code>switch</code> introduce branching in the normal flow of the program.</p>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="if" class="svelte-xhs4zz" data-svelte-h="svelte-m1wtmx"><code>if</code></h6> <p class="svelte-xhs4zz">The general syntax of <code data-svelte-h="svelte-1dijpjs">if...else</code> statement is as follows:
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: javascript,
              code: `if(condition1) {
	//statements to execute when condition1 is true
} else if(condition2) {
	//statements to execute when condition1 is false and condition2 is true
} else {
	//statements to execute when both condition1 and condition2 are false
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
  })}  ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="switch" class="svelte-xhs4zz" data-svelte-h="svelte-mtljh"><code>switch</code></h6> <p class="svelte-xhs4zz">The general syntax of <code data-svelte-h="svelte-1twcug8">switch...case</code> statement is as follows:
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: javascript,
              code: `switch(variable) {
	case value1: {
		//when variable = value1;
		break;//exit when done
	}
	case value2: {
		//when variable = value2;
		break;//exit when done
	}
	default: {
		//when value of the variable is not value1 and value2
		break;//exit when done
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
          return `<ol class="svelte-xhs4zz" data-svelte-h="svelte-pmvxc2"><li class="svelte-xhs4zz">Write a JavaScript program that checks if a number is even or odd using if-else statements.</li> <li class="svelte-xhs4zz">Create a function that determines whether a given year is a leap year using if-else statements.</li> <li class="svelte-xhs4zz">Implement a JavaScript function that calculates the grade of a student based on their score using if-else statements.</li> <li class="svelte-xhs4zz">Write a program that determines the type of a triangle (equilateral, isosceles, or scalene) based on the lengths of its sides using if-else statements.</li> <li class="svelte-xhs4zz">Develop a JavaScript function that converts a numerical grade into a letter grade (A, B, C, D, F) using if-else statements.</li> <li class="svelte-xhs4zz">Implement a switch statement in JavaScript to determine the name of the day based on its number representation (1 for Monday, 2 for Tuesday, etc.).</li> <li class="svelte-xhs4zz">Write a program that categorizes a given month into seasons (spring, summer, autumn, winter) using switch statements.</li> <li class="svelte-xhs4zz">Create a function that determines the discount percentage based on the total purchase amount using a switch statement (e.g., 0-100: no discount, 101-500: 10% discount, etc.).</li> <li class="svelte-xhs4zz">Write a JavaScript program that converts a given month number into its corresponding name (e.g., 1 for January) using a switch statement.</li> <li class="svelte-xhs4zz">Implement a function that calculates the area of a shape (circle, square, triangle) based on user input and using a switch statement to determine the shape type.</li></ol>`;
        }
      })}`;
    }
  })} </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-GDjBPJIZ.js.map
