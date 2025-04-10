import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component } from './ssr2-CDgUAJs6.js';
import { a as githubDark, g as github } from './github-dark-DeAsbMVW.js';
import { W as WebPractice } from './WebPractice-DZHtRtZk.js';
import { p as page } from './stores3-kDd52ji6.js';
import './ActionIcons-Bx2zL88O.js';
import './Subheader-DEm_inUP.js';
import './client-CAo-6NMJ.js';
import { d as darkMode, c as currentPath, n as navList } from './stores-Cecnyqn_.js';
import { c as contentNav, a as contents } from './content2-ChhWH1Ps.js';
import { P as Pathlist } from './Pathlist-B9wgcfC1.js';
import { C as CourseNavigation } from './CourseNavigation-DznSxbmO.js';
import './Segment-CO7DIWEy.js';
import './index2-D2s-XE5r.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './ContextFragment-CedcH2TL.js';
import './CommonLabel-CFEgn-mu.js';
import './SmuiElement-CKXCSgE1.js';
import './Suffix-CtI6fDI6.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './Card-BZ_KNbGw.js';
import './Button-DTp4JSRw.js';
import './Ripple-N--aPaMn.js';
import '@codemirror/lang-javascript';
import '@codemirror/lang-xml';
import '@codemirror/lang-css';
import './exports-DKuYoYKl.js';

const css$1 = {
  code: "article.svelte-1sv2bd8{display:flex;flex-direction:column;gap:0.5em}h4.svelte-1sv2bd8{margin:0.5em 0}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n\\t// @ts-nocheck\\r\\n\\timport Highlight, { LineNumbers } from 'svelte-highlight';\\r\\n\\timport javascript from 'svelte-highlight/languages/javascript';\\r\\n\\timport xml from 'svelte-highlight/languages/xml';\\r\\n\\timport css from 'svelte-highlight/languages/css';\\r\\n\\timport github from 'svelte-highlight/styles/github';\\r\\n\\timport githubDark from 'svelte-highlight/styles/github-dark';\\r\\n\\timport { tileGrid } from '$lib/utils/common/tile';\\r\\n\\timport WebPractice from '$lib/pages/courses/internet/WebPractice.svelte';\\r\\n\\timport { page } from '$app/stores';\\r\\n\\timport { onMount } from 'svelte';\\r\\n\\timport Card, { Content, Actions } from '@smui/card';\\r\\n\\timport DataTable, { Body, Head, Row, Cell } from '@smui/data-table';\\r\\n\\timport Button, { Label } from '@smui/button';\\r\\n\\timport Ripple from '@smui/ripple';\\r\\n\\timport NavList from '$lib/components/NavList.svelte';\\r\\n\\timport { currentPath } from '$lib/stores';\\r\\n\\timport { darkMode, navList } from '$lib/stores';\\r\\n\\timport { contents, contentNav } from '$lib/pages/courses/internet/content';\\r\\n\\timport Pathlist from '$lib/components/Pathlist.svelte';\\r\\n\\timport CourseNavigation from '$lib/components/CourseNavigation.svelte';\\r\\n\\t$navList = contents;\\r\\n\\t$currentPath = 'Calculator';\\r\\n\\t$darkMode = false;\\r\\n\\t// tileGrid(5, 5)\\r\\n\\tlet cssLayout = [];\\r\\n\\tlet nDivs = 0;\\r\\n\\tlet gridLayout;\\r\\n\\tlet hasZero = false;\\r\\n\\tconst generateLayout = () => {\\r\\n\\t\\tlet { grid, rectangleCount } = tileGrid(5, 5);\\r\\n\\t\\thasZero = 0;\\r\\n\\t\\tfor (let i = 0; i < grid.length; i++) {\\r\\n\\t\\t\\tfor (let j = 0; j < grid[i].length; j++) {\\r\\n\\t\\t\\t\\tif (grid[i][j] === 0) {\\r\\n\\t\\t\\t\\t\\thasZero = true;\\r\\n\\t\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t\\t}\\r\\n\\t\\t\\t}\\r\\n\\t\\t}\\r\\n\\t\\tcssLayout = grid;\\r\\n\\t\\tnDivs = rectangleCount;\\r\\n\\t\\t// console.log(rectangleCount, grid);\\r\\n\\t\\tlet areas = '';\\r\\n\\t\\tlet rows = [];\\r\\n\\t\\tfor (let i = 0; i < grid.length; i++) {\\r\\n\\t\\t\\trows.push(grid[i].map((c) => 'item' + c).join(' '));\\r\\n\\t\\t}\\r\\n\\t\\tareas = rows.map((r) => \`\\"\${r}\\"\`).join(' ');\\r\\n\\t\\t// grid.map(row => \`\\"\${row.join(\\" \\")}\\"\`).join(\\"\\\\n\\");\\r\\n\\t\\tgridLayout.style.gridTemplateAreas = areas;\\r\\n\\t};\\r\\n\\r\\n\\tonMount(() => {\\r\\n\\t\\t//generateLayout();\\r\\n\\t});\\r\\n\\tlet htmlContentPosition = \`<div id=\\"container\\">\\r\\n    <div id=\\"io\\">\\r\\n        <div id=\\"expression\\"></div>\\r\\n        <div id=\\"output\\"></div>\\r\\n    </div>\\r\\n    <div id=\\"input\\">\\r\\n        <div id=\\"advanced\\"></div>\\r\\n        <div id=\\"basic\\">\\r\\n            <button class=\\"operation C\\" onclick=\\"setOperator('C')\\">C</button>\\r\\n            <button class=\\"operation pm\\" onclick=\\"setOperator('pm')\\">&plusmn;</button>\\r\\n            <button class=\\"operation per\\" onclick=\\"setOperator('%')\\">&percnt;</button>\\r\\n            <button class=\\"operation div\\" onclick=\\"setOperator('/')\\">&divide;</button>\\r\\n\\r\\n            <button class=\\"seven\\" onclick=\\"setNumber(7)\\">7</button>\\r\\n            <button class=\\"eight\\" onclick=\\"setNumber(8)\\">8</button>\\r\\n            <button class=\\"nine\\" onclick=\\"setNumber(9)\\">9</button>\\r\\n            <button class=\\"operation mul\\" onclick=\\"setOperator('*')\\">&times;</button>\\r\\n\\r\\n            <button class=\\"four\\" onclick=\\"setNumber(4)\\">4</button>\\r\\n            <button class=\\"five\\" onclick=\\"setNumber(5)\\">5</button>\\r\\n            <button class=\\"six\\" onclick=\\"setNumber(6)\\">6</button>\\r\\n            <button class=\\"operation min\\" onclick=\\"setOperator('-')\\">&minus;</button>\\r\\n\\r\\n            <button class=\\"one\\" onclick=\\"setNumber(1)\\">1</button>\\r\\n            <button class=\\"two\\" onclick=\\"setNumber(2)\\">2</button>\\r\\n            <button class=\\"three\\" onclick=\\"setNumber(3)\\">3</button>\\r\\n            <button class=\\"operation plus\\" onclick=\\"setOperator('+')\\">+</button>\\r\\n\\r\\n            <button class=\\"zero\\" onclick=\\"setNumber(0)\\">0</button>\\r\\n            <button class=\\"dot\\" onclick=\\"setNumber('.')\\">.</button>\\r\\n            <button class=\\"operation eq\\" onclick=\\"setOperator('=')\\">&equals;</button>\\r\\n        </div>\\r\\n    </div>\\r\\n</div>\`;\\r\\n\\tlet cssContentPosition = \`* {\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n#container {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 0.5em;\\r\\n    width: 300px;\\r\\n    align-items: center;\\r\\n    border: 1px solid;\\r\\n    padding: 0.2em;\\r\\n}\\r\\n#io {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    padding: 0.5em 0.2em;\\r\\n    border: 1px solid;\\r\\n    min-height: 1.5em;\\r\\n    width: 100%;\\r\\n}\\r\\n#expression {\\r\\n    color: gray;\\r\\n    display: flex;\\r\\n    justify-content: end;\\r\\n    padding: 0.5em 0.2em;\\r\\n    height: 1.5em;\\r\\n}\\r\\n#output {\\r\\n    display: flex;\\r\\n    justify-content: end;\\r\\n    padding: 0.5em 0.2em;\\r\\n    height: 1.5em;\\r\\n}\\r\\n#input {\\r\\n    width: 100%;\\r\\n    display: grid;\\r\\n    padding: 0.2em;\\r\\n    border: 1px solid;\\r\\n}\\r\\n#basic {\\r\\n    display: grid;\\r\\n    gap: 0.2em;\\r\\n    grid-template-areas:\\r\\n        'C pm per div'\\r\\n        'seven eight nine mul'\\r\\n        'four five six min'\\r\\n        'one two three plus'\\r\\n        'zero zero dot eq';\\r\\n}\\r\\n.C {\\r\\n    grid-area: C;\\r\\n}\\r\\n.pm {\\r\\n    grid-area: pm;\\r\\n}\\r\\n.per {\\r\\n    grid-area: per;\\r\\n}\\r\\n.div {\\r\\n    grid-area: div;\\r\\n}\\r\\n.mul {\\r\\n    grid-area: mul;\\r\\n}\\r\\n.min {\\r\\n    grid-area: min;\\r\\n}\\r\\n.plus {\\r\\n    grid-area: plus;\\r\\n}\\r\\n.eq {\\r\\n    grid-area: eq;\\r\\n}\\r\\n.zero {\\r\\n    grid-area: zero;\\r\\n}\\r\\n.one {\\r\\n    grid-area: one;\\r\\n}\\r\\n.two {\\r\\n    grid-area: two;\\r\\n}\\r\\n.three {\\r\\n    grid-area: three;\\r\\n}\\r\\n.four {\\r\\n    grid-area: four;\\r\\n}\\r\\n.five {\\r\\n    grid-area: five;\\r\\n}\\r\\n.six {\\r\\n    grid-area: six;\\r\\n}\\r\\n.seven {\\r\\n    grid-area: seven;\\r\\n}\\r\\n.eight {\\r\\n    grid-area: eight;\\r\\n}\\r\\n.nine {\\r\\n    grid-area: nine;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n    font-size: 1.2em;\\r\\n}\\r\\n.operation {\\r\\n    background-color: rgb(245, 162, 7);\\r\\n    border-color: rgb(245, 162, 7);\\r\\n}\`;\\r\\n    let javaScriptContent = \`let expression = document.querySelector(\\"#expression\\");\\r\\nlet output = document.querySelector(\\"#output\\");\\r\\nexpression.textContent = '';\\r\\nlet currentExpression = '';\\r\\nlet result = 0;\\r\\nlet operator = '';\\r\\nlet number = 0;\\r\\nlet lastInput = 'Number';\\r\\nlet currentOperation = '';\\r\\nlet currentNumber = '';\\r\\nfunction setOperator(op) {\\r\\n    if(expression.textContent == '') return;\\r\\n    currentOperation = op;\\r\\n    currentNumber = '';\\r\\n    if(lastInput == 'op') {\\r\\n        //remove the last operation to new operation in expression\\r\\n        expression.textContent = expression.textContent.slice(0, -1);\\r\\n    }\\r\\n    lastInput = 'op';\\r\\n    switch(op) {\\r\\n        case 'C': {\\r\\n            expression.textContent = '';\\r\\n            output.textContent = '';\\r\\n            break;\\r\\n        } \\r\\n        case 'pm': {\\r\\n            break;\\r\\n        }\\r\\n        case '=': {\\r\\n            result = eval(expression.textContent);\\r\\n            output.textContent = result;\\r\\n            lastInput = '';\\r\\n            break;\\r\\n        }\\r\\n        default: {\\r\\n            expression.textContent += op;\\r\\n            break;\\r\\n        }\\r\\n    }\\r\\n}\\r\\nfunction setNumber(num) {\\r\\n    lastInput = \\"Number\\";\\r\\n    if(!(num == '0' && currentNumber == '0')) {\\r\\n        currentNumber += num;\\r\\n        expression.textContent += num;\\r\\n    }\\r\\n}\\r\\n\`\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>Internet Technologies</title>\\r\\n\\t<link\\r\\n\\t\\trel=\\"canonical\\"\\r\\n\\t\\thref=\\"https://drmithileshkumar.com/courses/internet/javascript/basics/calculator\\"\\r\\n\\t/>\\r\\n\\t<meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n\\t{#if $darkMode}\\r\\n\\t\\t{@html githubDark}\\r\\n\\t{:else}\\r\\n\\t\\t{@html github}\\r\\n\\t{/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n\\t<Pathlist origin={$page.url.origin} pathname={$page.url.pathname} />\\r\\n\\t<CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n\\t<h4>Calculator</h4>\\r\\n\\t<!-- <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#media\\">Media Queries</a></li>\\r\\n                <li><a href=\\"#layout\\">Responsive layout</a></li>\\r\\n                <li><a href=\\"#images\\">Responsive images</a></li>\\r\\n                <li><a href=\\"#typography\\">Responsive typography</a></li>\\r\\n                <li><a href=\\"#viewport\\">Viewport</li>\\r\\n            </ol>\\r\\n            <p>Responsive design is a way to design your web application that renders well on all screen sizes and resolutions.</p>\\r\\n        </Content>\\r\\n    </Card> -->\\r\\n\\r\\n\\t<!-- <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"media\\">Media Queries</h6>\\r\\n            <p>\\r\\n                Media queries allow us to run a series of tests (e.g. whether the user's screen is greater than a certain width, or a certain resolution) and apply CSS selectively to style the page appropriately for the user's needs.\\r\\n                <Highlight language={css} \\r\\n                code={\`@media screen and (min-width: 500px) {\\r\\n    .container {\\r\\n        display: grid;\\r\\n    }\\r\\n}\`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n                In this case, <code>.container</code> will set <code>display</code> to <code>grid</code> when the screen width is greater than or equal to 500px.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card> -->\\r\\n\\t\\r\\n\\t<WebPractice htmlContent={htmlContentPosition} cssContent={cssContentPosition} jsContent={javaScriptContent} />\\r\\n\\r\\n\\t<!-- <Card>\\r\\n        <Content>\\r\\n            <Highlight language={xml} code={code2} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card> -->\\r\\n\\t<!-- <h5>Questions</h5>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">Make your resume, college, and hometown pages responsive.</div>\\r\\n        </Content>\\r\\n    </Card> -->\\r\\n</article>\\r\\n\\r\\n<style>\\r\\n\\tarticle {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\tgap: 0.5em;\\r\\n\\t}\\r\\n\\tp,\\r\\n\\tli {\\r\\n\\t\\topacity: 0.8;\\r\\n\\t}\\r\\n\\th2,\\r\\n\\th3,\\r\\n\\th4,\\r\\n\\th5 {\\r\\n\\t\\tmargin: 0.5em 0;\\r\\n\\t}\\r\\n\\th5 {\\r\\n\\t\\tfont-size: 1.1em;\\r\\n\\t}\\r\\n\\th6 {\\r\\n\\t\\tfont-size: 1em;\\r\\n\\t\\tmargin: 0.5em 0;\\r\\n\\t\\tcolor: rgb(74, 155, 139);\\r\\n\\t}\\r\\n\\tstrong {\\r\\n\\t\\tcolor: goldenrod;\\r\\n\\t\\topacity: 1;\\r\\n\\t}\\r\\n\\ta {\\r\\n\\t\\tcursor: pointer;\\r\\n\\t\\ttext-decoration: none;\\r\\n\\t}\\r\\n\\t.question {\\r\\n\\t\\tcursor: pointer;\\r\\n\\t\\tpadding: 0.3em;\\r\\n\\t}\\r\\n\\t.cell {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t\\tborder: 1px solid teal;\\r\\n\\t\\theight: auto;\\r\\n\\t}\\r\\n\\t.grid {\\r\\n\\t\\tdisplay: grid;\\r\\n\\t\\tgap: 0.1em;\\r\\n\\t\\theight: 300px;\\r\\n\\t\\twidth: 300px;\\r\\n\\t\\tborder: 1px solid gray;\\r\\n\\t\\tpadding: 0.1em;\\r\\n\\t\\tmargin: auto;\\r\\n\\t}\\r\\n\\t#container {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\tgap: 0.5em;\\r\\n\\t\\twidth: 300px;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tborder: 1px solid;\\r\\n\\t\\tpadding: 0.2em;\\r\\n\\t}\\r\\n\\t#io {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\tpadding: 0.5em 0.2em;\\r\\n\\t\\tborder: 1px solid;\\r\\n\\t\\tmin-height: 1.5em;\\r\\n\\t\\twidth: 100%;\\r\\n\\t}\\r\\n\\t#expression {\\r\\n\\t\\tcolor: gray;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: end;\\r\\n\\t\\tpadding: 0.5em 0.2em;\\r\\n\\t\\tmin-height: 1.5em;\\r\\n\\t}\\r\\n\\t#output {\\r\\n\\t\\tcolor: gray;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: end;\\r\\n\\t\\tpadding: 0.5em 0.2em;\\r\\n\\t\\tmin-height: 1.5em;\\r\\n\\t}\\r\\n\\t#input {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tdisplay: grid;\\r\\n\\t\\tpadding: 0.2em;\\r\\n\\t\\tborder: 1px solid;\\r\\n\\t}\\r\\n\\t#basic {\\r\\n\\t\\tdisplay: grid;\\r\\n\\t\\tgap: 0.2em;\\r\\n\\t\\tgrid-template-areas:\\r\\n\\t\\t\\t'C pm per div'\\r\\n\\t\\t\\t'seven eight nine mul'\\r\\n\\t\\t\\t'four five six min'\\r\\n\\t\\t\\t'one two three plus'\\r\\n\\t\\t\\t'zero zero dot eq';\\r\\n\\t}\\r\\n\\t.C {\\r\\n\\t\\tgrid-area: C;\\r\\n\\t}\\r\\n\\t.pm {\\r\\n\\t\\tgrid-area: pm;\\r\\n\\t}\\r\\n\\t.per {\\r\\n\\t\\tgrid-area: per;\\r\\n\\t}\\r\\n\\t.div {\\r\\n\\t\\tgrid-area: div;\\r\\n\\t}\\r\\n\\t.mul {\\r\\n\\t\\tgrid-area: mul;\\r\\n\\t}\\r\\n\\t.min {\\r\\n\\t\\tgrid-area: min;\\r\\n\\t}\\r\\n\\t.plus {\\r\\n\\t\\tgrid-area: plus;\\r\\n\\t}\\r\\n\\t.eq {\\r\\n\\t\\tgrid-area: eq;\\r\\n\\t}\\r\\n\\t.zero {\\r\\n\\t\\tgrid-area: zero;\\r\\n\\t}\\r\\n\\t.one {\\r\\n\\t\\tgrid-area: one;\\r\\n\\t}\\r\\n\\t.two {\\r\\n\\t\\tgrid-area: two;\\r\\n\\t}\\r\\n\\t.three {\\r\\n\\t\\tgrid-area: three;\\r\\n\\t}\\r\\n\\t.four {\\r\\n\\t\\tgrid-area: four;\\r\\n\\t}\\r\\n\\t.five {\\r\\n\\t\\tgrid-area: five;\\r\\n\\t}\\r\\n\\t.six {\\r\\n\\t\\tgrid-area: six;\\r\\n\\t}\\r\\n\\t.seven {\\r\\n\\t\\tgrid-area: seven;\\r\\n\\t}\\r\\n\\t.eight {\\r\\n\\t\\tgrid-area: eight;\\r\\n\\t}\\r\\n\\t.nine {\\r\\n\\t\\tgrid-area: nine;\\r\\n\\t}\\r\\n\\r\\n\\tbutton {\\r\\n\\t\\tfont-size: 1.2em;\\r\\n\\t}\\r\\n\\t.operation {\\r\\n\\t\\tbackground-color: rgb(245, 162, 7);\\r\\n\\t\\tborder-color: rgb(245, 162, 7);\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAgUC,sBAAQ,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACN,CAOA,iBACG,CACF,MAAM,CAAE,KAAK,CAAC,CACf"}`
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
  set_store_value(currentPath, $currentPath = "Calculator", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let htmlContentPosition = `<div id="container">
    <div id="io">
        <div id="expression"></div>
        <div id="output"></div>
    </div>
    <div id="input">
        <div id="advanced"></div>
        <div id="basic">
            <button class="operation C" onclick="setOperator('C')">C</button>
            <button class="operation pm" onclick="setOperator('pm')">&plusmn;</button>
            <button class="operation per" onclick="setOperator('%')">&percnt;</button>
            <button class="operation div" onclick="setOperator('/')">&divide;</button>

            <button class="seven" onclick="setNumber(7)">7</button>
            <button class="eight" onclick="setNumber(8)">8</button>
            <button class="nine" onclick="setNumber(9)">9</button>
            <button class="operation mul" onclick="setOperator('*')">&times;</button>

            <button class="four" onclick="setNumber(4)">4</button>
            <button class="five" onclick="setNumber(5)">5</button>
            <button class="six" onclick="setNumber(6)">6</button>
            <button class="operation min" onclick="setOperator('-')">&minus;</button>

            <button class="one" onclick="setNumber(1)">1</button>
            <button class="two" onclick="setNumber(2)">2</button>
            <button class="three" onclick="setNumber(3)">3</button>
            <button class="operation plus" onclick="setOperator('+')">+</button>

            <button class="zero" onclick="setNumber(0)">0</button>
            <button class="dot" onclick="setNumber('.')">.</button>
            <button class="operation eq" onclick="setOperator('=')">&equals;</button>
        </div>
    </div>
</div>`;
  let cssContentPosition = `* {
    box-sizing: border-box;
}
#container {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    width: 300px;
    align-items: center;
    border: 1px solid;
    padding: 0.2em;
}
#io {
    display: flex;
    flex-direction: column;
    padding: 0.5em 0.2em;
    border: 1px solid;
    min-height: 1.5em;
    width: 100%;
}
#expression {
    color: gray;
    display: flex;
    justify-content: end;
    padding: 0.5em 0.2em;
    height: 1.5em;
}
#output {
    display: flex;
    justify-content: end;
    padding: 0.5em 0.2em;
    height: 1.5em;
}
#input {
    width: 100%;
    display: grid;
    padding: 0.2em;
    border: 1px solid;
}
#basic {
    display: grid;
    gap: 0.2em;
    grid-template-areas:
        'C pm per div'
        'seven eight nine mul'
        'four five six min'
        'one two three plus'
        'zero zero dot eq';
}
.C {
    grid-area: C;
}
.pm {
    grid-area: pm;
}
.per {
    grid-area: per;
}
.div {
    grid-area: div;
}
.mul {
    grid-area: mul;
}
.min {
    grid-area: min;
}
.plus {
    grid-area: plus;
}
.eq {
    grid-area: eq;
}
.zero {
    grid-area: zero;
}
.one {
    grid-area: one;
}
.two {
    grid-area: two;
}
.three {
    grid-area: three;
}
.four {
    grid-area: four;
}
.five {
    grid-area: five;
}
.six {
    grid-area: six;
}
.seven {
    grid-area: seven;
}
.eight {
    grid-area: eight;
}
.nine {
    grid-area: nine;
}

button {
    font-size: 1.2em;
}
.operation {
    background-color: rgb(245, 162, 7);
    border-color: rgb(245, 162, 7);
}`;
  let javaScriptContent = `let expression = document.querySelector("#expression");
let output = document.querySelector("#output");
expression.textContent = '';
let currentExpression = '';
let result = 0;
let operator = '';
let number = 0;
let lastInput = 'Number';
let currentOperation = '';
let currentNumber = '';
function setOperator(op) {
    if(expression.textContent == '') return;
    currentOperation = op;
    currentNumber = '';
    if(lastInput == 'op') {
        //remove the last operation to new operation in expression
        expression.textContent = expression.textContent.slice(0, -1);
    }
    lastInput = 'op';
    switch(op) {
        case 'C': {
            expression.textContent = '';
            output.textContent = '';
            break;
        } 
        case 'pm': {
            break;
        }
        case '=': {
            result = eval(expression.textContent);
            output.textContent = result;
            lastInput = '';
            break;
        }
        default: {
            expression.textContent += op;
            break;
        }
    }
}
function setNumber(num) {
    lastInput = "Number";
    if(!(num == '0' && currentNumber == '0')) {
        currentNumber += num;
        expression.textContent += num;
    }
}
`;
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-v1hggi_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/javascript/basics/calculator"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-v1hggi_END -->`, ""} <article class="svelte-1sv2bd8">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1sv2bd8" data-svelte-h="svelte-izhzzq">Calculator</h4>   ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentPosition,
      cssContent: cssContentPosition,
      jsContent: javaScriptContent
    },
    {},
    {}
  )}   </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-yMxIMUIm.js.map
