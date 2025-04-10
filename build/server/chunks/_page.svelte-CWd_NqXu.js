import { a as subscribe, d as set_store_value, c as null_to_empty } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, i as each, e as escape } from './ssr2-CDgUAJs6.js';
import { a as githubDark, g as github } from './github-dark-DeAsbMVW.js';
import { W as WebPractice } from './WebPractice-DZHtRtZk.js';
import { p as page } from './stores3-kDd52ji6.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import { A as Actions } from './Actions-DlQ11USC.js';
import { D as DataTable, R as Row, C as Cell, B as Body } from './Cell-Y_QU_UIA.js';
import { H as Head } from './Head-B4BwnM3n.js';
import { C as CommonLabel } from './CommonLabel-CFEgn-mu.js';
import { B as Button } from './Button-DTp4JSRw.js';
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
import './Suffix-CtI6fDI6.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import '@codemirror/lang-javascript';
import '@codemirror/lang-xml';
import '@codemirror/lang-css';
import './prefixFilter-B6cFZsw3.js';
import './Ripple-N--aPaMn.js';
import './exports-DKuYoYKl.js';

const css$1 = {
  code: "article.svelte-1ptklpl{display:flex;flex-direction:column;gap:0.5em}p.svelte-1ptklpl,li.svelte-1ptklpl{opacity:0.8}h4.svelte-1ptklpl,h5.svelte-1ptklpl{margin:0.5em 0}h5.svelte-1ptklpl{font-size:1.1em}h6.svelte-1ptklpl{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}a.svelte-1ptklpl{cursor:pointer;text-decoration:none}.question.svelte-1ptklpl{cursor:pointer;padding:0.3em}.cell.svelte-1ptklpl{display:flex;align-items:center;justify-content:center;border:1px solid teal;height:auto}.grid.svelte-1ptklpl{display:grid;gap:0.1em;height:300px;width:300px;border:1px solid gray;padding:0.1em;margin:auto}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { tileGrid } from \\"$lib/utils/common/tile\\";\\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import {page} from \'$app/stores\';\\r\\n    import {onMount} from \'svelte\';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, {Body, Head, Row, Cell} from \'@smui/data-table\';\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from \'$lib/components/NavList.svelte\'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/internet/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Layout\\";\\r\\n    $darkMode = false;\\r\\n    // tileGrid(5, 5)\\r\\n    let cssLayout = [];\\r\\n    let nDivs = 0;\\r\\n    let gridLayout;\\r\\n    let hasZero = false;\\r\\n    const generateLayout = () => {\\r\\n        let {grid, rectangleCount} = tileGrid(5, 5);\\r\\n        //check zero\\r\\n        hasZero = 0;\\r\\n        for(let i = 0; i < grid.length; i++) {\\r\\n            for(let j = 0; j < grid[i].length; j++) {\\r\\n                if(grid[i][j] === 0) {\\r\\n                    hasZero = true;\\r\\n                    break;\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n        cssLayout = grid;\\r\\n        nDivs = rectangleCount;\\r\\n        // console.log(rectangleCount, grid);\\r\\n        let areas = \\"\\";\\r\\n        let rows = []\\r\\n        for(let i = 0; i < grid.length; i++) {\\r\\n            rows.push((grid[i].map((c) => \'item\' + c)).join(\\" \\"));\\r\\n        }\\r\\n        areas = rows.map(r => `\\"${r}\\"`).join(\\" \\");\\r\\n        // grid.map(row => `\\"${row.join(\\" \\")}\\"`).join(\\"\\\\n\\");\\r\\n        gridLayout.style.gridTemplateAreas = areas;\\r\\n    }   \\r\\n\\r\\n    onMount(() => {\\r\\n        generateLayout();\\r\\n    });\\r\\n    let code1=`<!--Inline CSS-->\\r\\n<p style=\\"color: tomato;\\">I\'m tomato</p>`\\r\\n    let code2=`<head>\\r\\n    <!---CSS from external file-->\\r\\n    <link rel=\\"stylesheet\\" href=\\"/app.css\\"> \\r\\n    <!--Document level CSS-->\\r\\n    <style>\\r\\n    /* set text color of p elements to tomato */\\r\\n        p {\\r\\n            color: tomato;\\r\\n        }\\r\\n    /* ignore *{} BUG */\\r\\n    </style>\\r\\n</head>`\\r\\n    let htmlContentFlex = `<section class=\\"container\\">\\r\\n    <div class=\\"cell one centerFlex\\">One</div>\\r\\n    <div class=\\"cell one centerFlex\\">One</div>\\r\\n    <div class=\\"cell two centerFlex\\">Two</div>\\r\\n    <div class=\\"cell two centerFlex\\">Two</div>\\r\\n    <div class=\\"cell three centerFlex\\">Three</div>\\r\\n    <div class=\\"cell three centerFlex\\">Three</div>\\r\\n</section>`\\r\\n    let cssContentFlex = `.container {\\r\\n    height: 200px;\\r\\n    width: 100%;\\r\\n    border: 1px solid gray;\\r\\n    padding: 1em;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    align-items: center;\\r\\n    justify-content: start;\\r\\n    gap: 1em;\\r\\n    flex-wrap: wrap;\\r\\n}\\r\\n.centerFlex {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n.cell {\\r\\n    border: 1px solid teal;\\r\\n}\\r\\n.one {\\r\\n    width: 10%;\\r\\n    height: 15%;\\r\\n}\\r\\n.two {\\r\\n    width: 20%;\\r\\n    height: 15%;\\r\\n}\\r\\n.three {\\r\\n    width: 30%;\\r\\n    height: 15%;\\r\\n}`\\r\\nlet htmlContentGrid = `<section class=\\"containerG\\">\\r\\n    <div class=\\"cell oneG centerFlex\\">One</div>\\r\\n    \\r\\n    <div class=\\"cell twoG centerFlex\\">Two</div>\\r\\n    \\r\\n    <div class=\\"cell threeG centerFlex\\">Three</div>\\r\\n    \\r\\n</section>`\\r\\n    let cssContentGrid = `.containerG {\\r\\n    height: 200px;\\r\\n    width: 100%;\\r\\n    border: 1px solid gray;\\r\\n    padding: 1em;\\r\\n    display: grid;\\r\\n    grid-template-areas: \\"one two two\\"\\r\\n    \\"one two two\\"\\r\\n    \\"one three three\\";\\r\\n    gap: 1em;\\r\\n}\\r\\n.centerFlex {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n.cell {\\r\\n    border: 1px solid teal;\\r\\n}\\r\\n.oneG {\\r\\n    grid-area: one;\\r\\n}\\r\\n.twoG {\\r\\n    grid-area: two;\\r\\n}\\r\\n.threeG {\\r\\n    grid-area: three;\\r\\n}`\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n    .cell {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        border: 1px solid teal;\\r\\n        height: auto;\\r\\n    }\\r\\n    .grid {\\r\\n        display: grid;\\r\\n        gap: 0.1em;\\r\\n        height: 300px;\\r\\n        width: 300px;\\r\\n        border: 1px solid gray;\\r\\n        padding: 0.1em;\\r\\n        margin: auto;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Internet Technologies</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/layout\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Layout\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#display\\">Display</a></li>\\r\\n                <li><a href=\\"#flex\\">Flex</a></li>\\r\\n                <li><a href=\\"#grid\\">Grid</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"display\\">Display</h6>\\r\\n            <p>\\r\\n                The <code>display</code> property sets an element\'s inner and outer display properties.\\r\\n            </p>\\r\\n            <DataTable style=\\"width:100%\\">\\r\\n                <Head>\\r\\n                    <Row>\\r\\n                        <Cell>Propert value</Cell>\\r\\n                        <Cell>Description</Cell>\\r\\n                    </Row>\\r\\n                </Head>\\r\\n                <Body>\\r\\n                    <Row>\\r\\n                        <Cell><code>block</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">line breaks before and after the element</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>inline</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">keeps the element in the same line</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>none</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">removes the element from the DOM</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>flex</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">The element behaves like a block-level element and lays out its content according to the flexbox model.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>grid</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">The element behaves like a block-level element and lays out its content according to the grid model.</Cell>\\r\\n                    </Row>\\r\\n                </Body>\\r\\n            </DataTable>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"flex\\">The flexbox model</h6>\\r\\n            <p>\\r\\n                We can set <code>display: flex;</code> to use flexbox model for layouting items inside the element. The items are placed automatically in one dimension (row-wise or column-wise) and items <em>adjust</em> their size depending on the content.\\r\\n            </p>\\r\\n            <DataTable style=\\"width: 100%\\">\\r\\n                <Head>\\r\\n                    <Row>\\r\\n                        <Cell>Property</Cell>\\r\\n                        <Cell>Values</Cell>\\r\\n                        <Cell>Description</Cell>\\r\\n                    </Row>\\r\\n                </Head>\\r\\n                <Body>\\r\\n                    <Row>\\r\\n                        <Cell><code>flex-direction</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\"><code>row, column, row-reverse, column-reverse</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">arranges items according to the value</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>flex-wrap</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\"><code>wrap, nowrap, wrap-reverse</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">wraps the items depending on available width and value</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>row-gap</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">number</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">set the row gap between items</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>column-gap</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">number</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">set the column gap between items</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>gap</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">number(s)</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">sets row (and) column gap between items</Cell>\\r\\n                    </Row>\\r\\n                    \\r\\n                    <Row>\\r\\n                        <Cell><code>align-items</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\"><code>center, start, end, stretch</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">aligns items according cross-axis</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>justify-content</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\"><code>center, start, end, space-between, space-around, space-evenly</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">control space between items along the main-axis</Cell>\\r\\n                    </Row>\\r\\n                </Body>\\r\\n            </DataTable>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentFlex} cssContent={cssContentFlex} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"grid\\">The grid model</h6>\\r\\n            <p>\\r\\n                We can set <code>display: grid;</code> to use grid model for layouting items inside the element. Unlike <code>flex</code> model, the items are placed in a two-dimensional grid system defined using <code>grid-template-columns</code>,<code>grid-template-rows</code> and <code>grid-template-areas</code>.\\r\\n            </p>\\r\\n            <DataTable style=\\"width: 100%\\">\\r\\n                <Head>\\r\\n                    <Row>\\r\\n                        <Cell>Property</Cell>\\r\\n                        <Cell>Values</Cell>\\r\\n                        <Cell>Description</Cell>\\r\\n                    </Row>\\r\\n                </Head>\\r\\n                <Body>\\r\\n                    <Row>\\r\\n                        <Cell><code>grid-template-columns</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">a list of length or fraction units (<code>fr</code>)</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">creates as many columns of the given length as in the list.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>grid-template-rows</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">a list of length or fraction units (<code>fr</code>)</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">creates as many rows of the given length as in the list.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>grid-template-areas</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">list of strings of names of areas of items</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">places items according to the structure defined by the string</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>grid-area</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">name (not as string)</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">it is set on the items of the grid. These names are parts of the string in <code>grid-template-areas</code></Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>column-gap</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">number</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">set the column gap between items</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>gap</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">number(s)</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">sets row (and) column gap between items</Cell>\\r\\n                    </Row>\\r\\n                    \\r\\n                    <Row>\\r\\n                        <Cell><code>align-items</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\"><code>center, start, end, stretch</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">aligns items according to cross-axis</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>justify-content</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\"><code>center, start, end, space-between, space-around, space-evenly</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">control space between items along the main-axis</Cell>\\r\\n                    </Row>\\r\\n                </Body>\\r\\n            </DataTable>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentGrid} cssContent={cssContentGrid} jsContent={\\"\\"} />\\r\\n    <!-- <Card>\\r\\n        <Content>\\r\\n            <Highlight language={xml} code={code2} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card> -->\\r\\n    <h5>Questions</h5>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                <p>Use <code>grid-template-areas</code> to obtain the following layout:</p>\\r\\n                <div class=\\"grid\\" bind:this={gridLayout}>\\r\\n                    {#if hasZero}\\r\\n                        {#each (new Array(nDivs + 1)) as rect, i}\\r\\n                            <div class={\\"cell item\\" + (i)} style=\\"grid-area: {\'item\' + (i)}\\">{i}</div>\\r\\n                        {/each}\\r\\n                    {:else}\\r\\n                        {#each (new Array(nDivs)) as rect, i}\\r\\n                            <div class={\\"cell item\\" + (i + 1)} style=\\"grid-area: {\'item\' + (i + 1)}\\">{i + 1}</div>\\r\\n                        {/each}\\r\\n                    {/if}\\r\\n                    \\r\\n                </div>\\r\\n            </div>\\r\\n        </Content>\\r\\n        <Actions>\\r\\n            <Button on:click={generateLayout}><Label>Generate new layout</Label></Button>\\r\\n        </Actions>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">Use grid and flex layouts in your resume and college websites.</div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAsJI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAC,CAAE,iBAAG,CACF,OAAO,CAAE,GACb,CACQ,iBAAE,CAAE,iBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,iBAAG,CACC,SAAS,CAAE,KACf,CACA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CAKA,gBAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB,CACA,wBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb,CACA,oBAAM,CACF,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,MAAM,CAAE,IACZ,CACA,oBAAM,CACF,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,KAAK,CACV,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,IACZ"}'
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
  set_store_value(currentPath, $currentPath = "Layout", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let nDivs = 0;
  let gridLayout;
  let htmlContentFlex = `<section class="container">
    <div class="cell one centerFlex">One</div>
    <div class="cell one centerFlex">One</div>
    <div class="cell two centerFlex">Two</div>
    <div class="cell two centerFlex">Two</div>
    <div class="cell three centerFlex">Three</div>
    <div class="cell three centerFlex">Three</div>
</section>`;
  let cssContentFlex = `.container {
    height: 200px;
    width: 100%;
    border: 1px solid gray;
    padding: 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 1em;
    flex-wrap: wrap;
}
.centerFlex {
    display: flex;
    align-items: center;
    justify-content: center;
}
.cell {
    border: 1px solid teal;
}
.one {
    width: 10%;
    height: 15%;
}
.two {
    width: 20%;
    height: 15%;
}
.three {
    width: 30%;
    height: 15%;
}`;
  let htmlContentGrid = `<section class="containerG">
    <div class="cell oneG centerFlex">One</div>
    
    <div class="cell twoG centerFlex">Two</div>
    
    <div class="cell threeG centerFlex">Three</div>
    
</section>`;
  let cssContentGrid = `.containerG {
    height: 200px;
    width: 100%;
    border: 1px solid gray;
    padding: 1em;
    display: grid;
    grid-template-areas: "one two two"
    "one two two"
    "one three three";
    gap: 1em;
}
.centerFlex {
    display: flex;
    align-items: center;
    justify-content: center;
}
.cell {
    border: 1px solid teal;
}
.oneG {
    grid-area: one;
}
.twoG {
    grid-area: two;
}
.threeG {
    grid-area: three;
}`;
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-11nx1nb_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/layout"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-11nx1nb_END -->`, ""} <article class="svelte-1ptklpl">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1ptklpl" data-svelte-h="svelte-i9jd9s">Layout</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1ptklpl" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-13694rd"><li class="svelte-1ptklpl"><a href="#display" class="svelte-1ptklpl">Display</a></li> <li class="svelte-1ptklpl"><a href="#flex" class="svelte-1ptklpl">Flex</a></li> <li class="svelte-1ptklpl"><a href="#grid" class="svelte-1ptklpl">Grid</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="display" class="svelte-1ptklpl" data-svelte-h="svelte-rpfnp6">Display</h6> <p class="svelte-1ptklpl" data-svelte-h="svelte-16mqb8m">The <code>display</code> property sets an element&#39;s inner and outer display properties.</p> ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width:100%" }, {}, {
            default: () => {
              return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Propert value`;
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
                          return `<code data-svelte-h="svelte-1y1ums9">block</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `line breaks before and after the element`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-ph1flp">inline</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `keeps the element in the same line`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-k8g4pa">none</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `removes the element from the DOM`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-5a9wff">flex</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `The element behaves like a block-level element and lays out its content according to the flexbox model.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-lwg1k8">grid</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `The element behaves like a block-level element and lays out its content according to the grid model.`;
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
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="flex" class="svelte-1ptklpl" data-svelte-h="svelte-yt90fr">The flexbox model</h6> <p class="svelte-1ptklpl" data-svelte-h="svelte-3gsw13">We can set <code>display: flex;</code> to use flexbox model for layouting items inside the element. The items are placed automatically in one dimension (row-wise or column-wise) and items <em>adjust</em> their size depending on the content.</p> ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width: 100%" }, {}, {
            default: () => {
              return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Property`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Values`;
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
                          return `<code data-svelte-h="svelte-1jzer5j">flex-direction</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-e2z5r4">row, column, row-reverse, column-reverse</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `arranges items according to the value`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-120l0qw">flex-wrap</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-uao0t8">wrap, nowrap, wrap-reverse</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `wraps the items depending on available width and value`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-125fmhx">row-gap</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `number`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `set the row gap between items`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1iysvyz">column-gap</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `number`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `set the column gap between items`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1qm15hq">gap</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `number(s)`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `sets row (and) column gap between items`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-e748ze">align-items</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1qs8x19">center, start, end, stretch</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `aligns items according cross-axis`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1mtvmta">justify-content</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1cog54d">center, start, end, space-between, space-around, space-evenly</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `control space between items along the main-axis`;
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
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentFlex,
      cssContent: cssContentFlex,
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="grid" class="svelte-1ptklpl" data-svelte-h="svelte-ub1k4a">The grid model</h6> <p class="svelte-1ptklpl" data-svelte-h="svelte-173xwx2">We can set <code>display: grid;</code> to use grid model for layouting items inside the element. Unlike <code>flex</code> model, the items are placed in a two-dimensional grid system defined using <code>grid-template-columns</code>,<code>grid-template-rows</code> and <code>grid-template-areas</code>.</p> ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width: 100%" }, {}, {
            default: () => {
              return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Property`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Values`;
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
                          return `<code data-svelte-h="svelte-o5h4hn">grid-template-columns</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `a list of length or fraction units (<code data-svelte-h="svelte-vvgz54">fr</code>)`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `creates as many columns of the given length as in the list.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-wq602l">grid-template-rows</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `a list of length or fraction units (<code data-svelte-h="svelte-vvgz54">fr</code>)`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `creates as many rows of the given length as in the list.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-kqf21s">grid-template-areas</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `list of strings of names of areas of items`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `places items according to the structure defined by the string`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1vd6y0w">grid-area</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `name (not as string)`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `it is set on the items of the grid. These names are parts of the string in <code data-svelte-h="svelte-kqf21s">grid-template-areas</code>`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1iysvyz">column-gap</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `number`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `set the column gap between items`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1qm15hq">gap</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `number(s)`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `sets row (and) column gap between items`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-e748ze">align-items</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1qs8x19">center, start, end, stretch</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `aligns items according to cross-axis`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1mtvmta">justify-content</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1cog54d">center, start, end, space-between, space-around, space-evenly</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `control space between items along the main-axis`;
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
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentGrid,
      cssContent: cssContentGrid,
      jsContent: ""
    },
    {},
    {}
  )}  <h5 class="svelte-1ptklpl" data-svelte-h="svelte-1984kyx">Questions</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1ptklpl"><p class="svelte-1ptklpl" data-svelte-h="svelte-1m9fiqi">Use <code>grid-template-areas</code> to obtain the following layout:</p> <div class="grid svelte-1ptklpl"${add_attribute("this", gridLayout, 0)}>${`${each(new Array(nDivs), (rect, i) => {
            return `<div class="${escape(null_to_empty("cell item" + (i + 1)), true) + " svelte-1ptklpl"}" style="${"grid-area: " + escape("item" + (i + 1), true)}">${escape(i + 1)}</div>`;
          })}`}</div></div>`;
        }
      })} ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                default: () => {
                  return `Generate new layout`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1ptklpl" data-svelte-h="svelte-sguf9i">Use grid and flex layouts in your resume and college websites.</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CWd_NqXu.js.map
