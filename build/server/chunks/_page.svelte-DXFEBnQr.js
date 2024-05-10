import { a as subscribe, e as set_store_value } from './utils-DH7689cv.js';
import { c as create_ssr_component, v as validate_component } from './ssr-Cv_bEuJL.js';
import { g as githubDark, a as github } from './github-dark-BC3MHtr2.js';
import { W as WebPractice } from './WebPractice-sTeZPA3c.js';
import { p as page } from './stores-CD1QeJjc.js';
import { C as Card } from './Card-w0EtY1mU.js';
import { C as Content } from './ActionIcons-CEcRhLH3.js';
import { D as DataTable, H as Head, R as Row, C as Cell, B as Body } from './Cell-C8wtb_ZZ.js';
import './Subheader-BwOM49vC.js';
import './client-CjdeEz1m.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-DCuXQBIu.js';
import { c as contentNav, a as contents } from './content-ChhWH1Ps.js';
import { P as Pathlist } from './Pathlist-VvNEpviv.js';
import { C as CourseNavigation } from './CourseNavigation-GbSn10Xu.js';
import './index2-B3zlhmO5.js';
import './classAdderBuilder-B5RJlVtK.js';
import './ContextFragment-Dwx7Ej1j.js';
import './CommonLabel-Bjz32QAu.js';
import './Suffix-DUyW9-NK.js';
import './Button-nlTGW0Wq.js';
import './Ripple-Yt1ZX6hy.js';
import '@codemirror/lang-javascript';
import '@codemirror/lang-xml';
import '@codemirror/lang-css';
import './prefixFilter-B6cFZsw3.js';
import './exports-DuWZopOC.js';

const css$1 = {
  code: "article.svelte-1ptklpl{display:flex;flex-direction:column;gap:0.5em}p.svelte-1ptklpl,li.svelte-1ptklpl{opacity:0.8}h4.svelte-1ptklpl,h5.svelte-1ptklpl{margin:0.5em 0}h5.svelte-1ptklpl{font-size:1.1em}h6.svelte-1ptklpl{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}a.svelte-1ptklpl{cursor:pointer;text-decoration:none}.question.svelte-1ptklpl{cursor:pointer;padding:0.3em}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { tileGrid } from \\"$lib/utils/common/tile\\";\\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import {page} from \'$app/stores\';\\r\\n    import {onMount} from \'svelte\';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, {Body, Head, Row, Cell} from \'@smui/data-table\';\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from \'$lib/components/NavList.svelte\'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/internet/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Typography\\";\\r\\n    $darkMode = false;\\r\\n    // tileGrid(5, 5)\\r\\n    let cssLayout = [];\\r\\n    let nDivs = 0;\\r\\n    let gridLayout;\\r\\n    let hasZero = false;\\r\\n    const generateLayout = () => {\\r\\n        let {grid, rectangleCount} = tileGrid(5, 5);\\r\\n        hasZero = 0;\\r\\n        for(let i = 0; i < grid.length; i++) {\\r\\n            for(let j = 0; j < grid[i].length; j++) {\\r\\n                if(grid[i][j] === 0) {\\r\\n                    hasZero = true;\\r\\n                    break;\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n        cssLayout = grid;\\r\\n        nDivs = rectangleCount;\\r\\n        // console.log(rectangleCount, grid);\\r\\n        let areas = \\"\\";\\r\\n        let rows = []\\r\\n        for(let i = 0; i < grid.length; i++) {\\r\\n            rows.push((grid[i].map((c) => \'item\' + c)).join(\\" \\"));\\r\\n        }\\r\\n        areas = rows.map(r => `\\"${r}\\"`).join(\\" \\");\\r\\n        // grid.map(row => `\\"${row.join(\\" \\")}\\"`).join(\\"\\\\n\\");\\r\\n        gridLayout.style.gridTemplateAreas = areas;\\r\\n    }   \\r\\n\\r\\n    onMount(() => {\\r\\n        //generateLayout();\\r\\n    });\\r\\n    let htmlContentFont = `<section class=\\"container\\">\\r\\n    <div class=\\"cell family centerFlex\\">Font-family</div>\\r\\n    <div class=\\"cell size centerFlex\\">Font-size</div>\\r\\n    <div class=\\"cell variant centerFlex\\">Font-variant</div>\\r\\n    <div class=\\"cell style centerFlex\\">Font-style</div>\\r\\n    <div class=\\"cell weight centerFlex\\">Font-weight</div>\\r\\n</section>`\\r\\n    let cssContentFont = `.container {\\r\\n    height: 200px;\\r\\n    width: 100%;\\r\\n    border: 1px solid gray;\\r\\n    padding: 1em;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    align-items: center;\\r\\n    justify-content: start;\\r\\n    gap: 1em;\\r\\n    flex-wrap: wrap;\\r\\n}\\r\\n.centerFlex {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n.cell {\\r\\n    border: 1px solid teal;\\r\\n    padding: 0.5em;\\r\\n}\\r\\n.family {\\r\\n    font-family: Arial Helvetica Georgia sans-serif;\\r\\n}\\r\\n.size {\\r\\n    font-size: 2em;\\r\\n}\\r\\n.variant {\\r\\n    font-variant: small-caps;\\r\\n}\\r\\n.style {\\r\\n    font-style: italic;\\r\\n}\\r\\n.weight {\\r\\n    font-weight: 600;\\r\\n}`\\r\\nlet htmlContentDecoration = `<section class=\\"containerG\\">\\r\\n    <div class=\\"cell lineThrough centerFlex\\">line-through</div>\\r\\n    <div class=\\"cell overline centerFlex\\">overline</div>\\r\\n    <div class=\\"cell underline centerFlex\\">underline</div>\\r\\n    <div class=\\"cell none centerFlex\\">none</div>\\r\\n</section>`\\r\\n    let cssContentDecoration = `.containerG {\\r\\n    height: auto;\\r\\n    width: 100%;\\r\\n    border: 1px solid gray;\\r\\n    padding: 1em;\\r\\n    display: flex;\\r\\n    gap: 1em;\\r\\n}\\r\\n.centerFlex {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n.cell {\\r\\n    border: 1px solid teal;\\r\\n    padding: 0.5em;\\r\\n}\\r\\n.lineThrough {\\r\\n    text-decoration: line-through;\\r\\n}\\r\\n.overline {\\r\\n    text-decoration: overline;\\r\\n}\\r\\n.underline {\\r\\n    text-decoration: underline;\\r\\n}\\r\\n.none {\\r\\n    text-decoration: none;\\r\\n}`\\r\\nlet htmlContentSpacing = `<section class=\\"containerG\\">\\r\\n    <div class=\\"cell letter centerFlex\\">letter-spacing</div>\\r\\n    <div class=\\"cell word centerFlex\\">word-spacing</div>\\r\\n    <div class=\\"cell line centerFlex\\">line-height</div>\\r\\n    <div class=\\"cell white centerFlex\\">white-space</div>\\r\\n</section>`\\r\\n    let cssContentSpacing = `.containerG {\\r\\n    height: auto;\\r\\n    width: 100%;\\r\\n    border: 1px solid gray;\\r\\n    padding: 1em;\\r\\n    display: flex;\\r\\n    gap: 1em;\\r\\n}\\r\\n.centerFlex {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n.cell {\\r\\n    border: 1px solid teal;\\r\\n    padding: 0.5em;\\r\\n}\\r\\n.letter {\\r\\n    letter-spacing: 0.5em;\\r\\n}\\r\\n.word {\\r\\n    word-spacing: 1em;\\r\\n}\\r\\n.line {\\r\\n    line-height: 1em;\\r\\n}\\r\\n.white {\\r\\n    white-space: nowrap;\\r\\n}`\\r\\nlet htmlContentAlign = `<section class=\\"containerG\\">\\r\\n    <div class=\\"cell indent\\"><p>This is the begining of the paragraph. Other statement is appearing as it is.</p></div>\\r\\n    <div class=\\"cell align\\">Text align</div>\\r\\n    <div class=\\"cell\\">\\r\\n        <img class=\\"float\\" src=\\"/favicon.png\\" width=\\"50px\\">\\r\\n        <p>Here the image is placed to the right of the text because the image has float right. Here the image is placed to the right of the text because the image has float right. Here the image is placed to the right of the text because the image has float right. Here the image is placed to the right of the text because the image has float right. Here the image is placed to the right of the text because the image has float right. Here the image is placed to the right of the text because the image has float right. Here the image is placed to the right of the text because the image has float right.</p>\\r\\n    </div>\\r\\n</section>`\\r\\n    let cssContentAlign = `.containerG {\\r\\n    box-sizing: border-box;\\r\\n    height: auto;\\r\\n    width: 100%;\\r\\n    border: 1px solid gray;\\r\\n    padding: 1em;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 1em;\\r\\n}\\r\\n.centerFlex {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n.cell {\\r\\n    border: 1px solid teal;\\r\\n    padding: 0.5em;\\r\\n}\\r\\n.indent {\\r\\n    text-indent: 5em;\\r\\n}\\r\\n.align {\\r\\n    text-align: right;\\r\\n}\\r\\n.float {\\r\\n    float: right;\\r\\n}`\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n    .cell {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        border: 1px solid teal;\\r\\n        height: auto;\\r\\n    }\\r\\n    .grid {\\r\\n        display: grid;\\r\\n        gap: 0.1em;\\r\\n        height: 300px;\\r\\n        width: 300px;\\r\\n        border: 1px solid gray;\\r\\n        padding: 0.1em;\\r\\n        margin: auto;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Internet Technologies</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/typography\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Typography\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#font\\">Font Properties</a></li>\\r\\n                <li><a href=\\"#decoration\\">Text Decoration</a></li>\\r\\n                <li><a href=\\"#spacing\\">Text Spacing</a></li>\\r\\n                <li><a href=\\"#alignment\\">Text Alignment</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"font\\">Font Properties</h6>\\r\\n            <p>\\r\\n                Font style in page can be changed using following CSS properties.\\r\\n            </p>\\r\\n            <DataTable style=\\"width:100%\\">\\r\\n                <Head>\\r\\n                    <Row>\\r\\n                        <Cell>Property</Cell>\\r\\n                        <Cell>Value</Cell>\\r\\n                        <Cell>Description</Cell>\\r\\n                    </Row>\\r\\n                </Head>\\r\\n                <Body>\\r\\n                    <Row>\\r\\n                        <Cell><code>font-family</code></Cell>\\r\\n                        <Cell>a list of names</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">browser uses the first font in the list it can. There are generic types like <code>Serif, Sans-serif, cursive, fantasy, monospace</code></Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>font-size</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">number</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">usual units are <code>em</code> or <code>px</code></Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>font-variant</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\"><code>normal, small-caps, petite-caps</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">sets the font-variant to use</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>font-style</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\"><code>normal, italic, oblique</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">changes font-style</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>font-weight</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\"><code>normal, light, lighter, bold, bolder, 100, 200, 300, 400, 500, 600, 700, 800</code></Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">Changes the thickness of the stroke used to draw the font</Cell>\\r\\n                    </Row>\\r\\n                </Body>\\r\\n            </DataTable>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentFont} cssContent={cssContentFont} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"decoration\\">Text Decoration</h6>\\r\\n            <p>\\r\\n                <code>text-decoration</code> can place decorations like underline, line-through etc.\\r\\n            </p>\\r\\n            <DataTable style=\\"width: 100%\\">\\r\\n                <Head>\\r\\n                    <Row>\\r\\n                        <Cell>Values</Cell>\\r\\n                        <Cell>Description</Cell>\\r\\n                    </Row>\\r\\n                </Head>\\r\\n                <Body>\\r\\n                    <Row>\\r\\n                        <Cell><code>line-through</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">draws line through the text</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>overline</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">draws line over the text</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>underline</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">draws line under the text</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>none</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">removes any decoration applied to the text</Cell>\\r\\n                    </Row>\\r\\n                </Body>\\r\\n            </DataTable>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentDecoration} cssContent={cssContentDecoration} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"spacing\\">Text Spacing</h6>\\r\\n            <p>\\r\\n               It is possible to control space between letters, words and lines using CSS.\\r\\n            </p>\\r\\n            <DataTable style=\\"width: 100%\\">\\r\\n                <Head>\\r\\n                    <Row>\\r\\n                        <Cell>Property</Cell>\\r\\n                        <Cell>Values</Cell>\\r\\n                        <Cell>Description</Cell>\\r\\n                    </Row>\\r\\n                </Head>\\r\\n                <Body>\\r\\n                    <Row>\\r\\n                        <Cell><code>letter-spacing</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\"><code>normal</code> or length</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">controls the amount of space between the letters in words</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>word-spacing</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\"><code>normal</code> or length</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">controls the amount of space between words</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>line-height</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\"><code>normal</code> or length</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">controls the amount of space between the lines</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>white-space</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\"><code>normal, nowrap, break-spaces</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">decides whether line-break is there in the text.</Cell>\\r\\n                    </Row>\\r\\n                </Body>\\r\\n            </DataTable>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentSpacing} cssContent={cssContentSpacing} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"alignment\\">Text Alignment</h6>\\r\\n            <p>\\r\\n                Many alignment properties like indentation and placement of text can be controlled using CSS.\\r\\n            </p>\\r\\n            <DataTable style=\\"width: 100%\\">\\r\\n                <Head>\\r\\n                    <Row>\\r\\n                        <Cell>Property</Cell>\\r\\n                        <Cell>Values</Cell>\\r\\n                        <Cell>Description</Cell>\\r\\n                    </Row>\\r\\n                </Head>\\r\\n                <Body>\\r\\n                    <Row>\\r\\n                        <Cell><code>text-indent</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\"><code>initial</code> or length</Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">indent the first line of a paragraph</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>text-align</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\"><code>left, center, right, justify</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">arrange text horizontally depending on the value</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell><code>float</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\"><code>left, right, none</code></Cell>\\r\\n                        <Cell style=\\"white-space: normal;\\">used to specify that text should flow around some \\r\\n                            element, often an image or a table.</Cell>\\r\\n                    </Row>\\r\\n                </Body>\\r\\n            </DataTable>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentAlign} cssContent={cssContentAlign} jsContent={\\"\\"} />\\r\\n    <!-- <Card>\\r\\n        <Content>\\r\\n            <Highlight language={xml} code={code2} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card> -->\\r\\n    <h5>Questions</h5>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">Apply these font properties to resume.</div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAgNI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAC,CAAE,iBAAG,CACF,OAAO,CAAE,GACb,CACQ,iBAAE,CAAE,iBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,iBAAG,CACC,SAAS,CAAE,KACf,CACA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CAKA,gBAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB,CACA,wBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb"}'
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
  set_store_value(currentPath, $currentPath = "Typography", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let htmlContentFont = `<section class="container">
    <div class="cell family centerFlex">Font-family</div>
    <div class="cell size centerFlex">Font-size</div>
    <div class="cell variant centerFlex">Font-variant</div>
    <div class="cell style centerFlex">Font-style</div>
    <div class="cell weight centerFlex">Font-weight</div>
</section>`;
  let cssContentFont = `.container {
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
    padding: 0.5em;
}
.family {
    font-family: Arial Helvetica Georgia sans-serif;
}
.size {
    font-size: 2em;
}
.variant {
    font-variant: small-caps;
}
.style {
    font-style: italic;
}
.weight {
    font-weight: 600;
}`;
  let htmlContentDecoration = `<section class="containerG">
    <div class="cell lineThrough centerFlex">line-through</div>
    <div class="cell overline centerFlex">overline</div>
    <div class="cell underline centerFlex">underline</div>
    <div class="cell none centerFlex">none</div>
</section>`;
  let cssContentDecoration = `.containerG {
    height: auto;
    width: 100%;
    border: 1px solid gray;
    padding: 1em;
    display: flex;
    gap: 1em;
}
.centerFlex {
    display: flex;
    align-items: center;
    justify-content: center;
}
.cell {
    border: 1px solid teal;
    padding: 0.5em;
}
.lineThrough {
    text-decoration: line-through;
}
.overline {
    text-decoration: overline;
}
.underline {
    text-decoration: underline;
}
.none {
    text-decoration: none;
}`;
  let htmlContentSpacing = `<section class="containerG">
    <div class="cell letter centerFlex">letter-spacing</div>
    <div class="cell word centerFlex">word-spacing</div>
    <div class="cell line centerFlex">line-height</div>
    <div class="cell white centerFlex">white-space</div>
</section>`;
  let cssContentSpacing = `.containerG {
    height: auto;
    width: 100%;
    border: 1px solid gray;
    padding: 1em;
    display: flex;
    gap: 1em;
}
.centerFlex {
    display: flex;
    align-items: center;
    justify-content: center;
}
.cell {
    border: 1px solid teal;
    padding: 0.5em;
}
.letter {
    letter-spacing: 0.5em;
}
.word {
    word-spacing: 1em;
}
.line {
    line-height: 1em;
}
.white {
    white-space: nowrap;
}`;
  let htmlContentAlign = `<section class="containerG">
    <div class="cell indent"><p>This is the begining of the paragraph. Other statement is appearing as it is.</p></div>
    <div class="cell align">Text align</div>
    <div class="cell">
        <img class="float" src="/favicon.png" width="50px">
        <p>Here the image is placed to the right of the text because the image has float right. Here the image is placed to the right of the text because the image has float right. Here the image is placed to the right of the text because the image has float right. Here the image is placed to the right of the text because the image has float right. Here the image is placed to the right of the text because the image has float right. Here the image is placed to the right of the text because the image has float right. Here the image is placed to the right of the text because the image has float right.</p>
    </div>
</section>`;
  let cssContentAlign = `.containerG {
    box-sizing: border-box;
    height: auto;
    width: 100%;
    border: 1px solid gray;
    padding: 1em;
    display: flex;
    flex-direction: column;
    gap: 1em;
}
.centerFlex {
    display: flex;
    align-items: center;
    justify-content: center;
}
.cell {
    border: 1px solid teal;
    padding: 0.5em;
}
.indent {
    text-indent: 5em;
}
.align {
    text-align: right;
}
.float {
    float: right;
}`;
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1wam636_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/typography"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1wam636_END -->`, ""} <article class="svelte-1ptklpl">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1ptklpl" data-svelte-h="svelte-1jugjh">Typography</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1ptklpl" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-1yuh16o"><li class="svelte-1ptklpl"><a href="#font" class="svelte-1ptklpl">Font Properties</a></li> <li class="svelte-1ptklpl"><a href="#decoration" class="svelte-1ptklpl">Text Decoration</a></li> <li class="svelte-1ptklpl"><a href="#spacing" class="svelte-1ptklpl">Text Spacing</a></li> <li class="svelte-1ptklpl"><a href="#alignment" class="svelte-1ptklpl">Text Alignment</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="font" class="svelte-1ptklpl" data-svelte-h="svelte-1mpexb9">Font Properties</h6> <p class="svelte-1ptklpl" data-svelte-h="svelte-1tkhvbk">Font style in page can be changed using following CSS properties.</p> ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width:100%" }, {}, {
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
                          return `Value`;
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
                          return `<code data-svelte-h="svelte-5vj03q">font-family</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `a list of names`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `browser uses the first font in the list it can. There are generic types like <code data-svelte-h="svelte-feu0ag">Serif, Sans-serif, cursive, fantasy, monospace</code>`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-so05nh">font-size</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `number`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `usual units are <code data-svelte-h="svelte-1h6uu3e">em</code> or <code data-svelte-h="svelte-wl9nl8">px</code>`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-hjso7t">font-variant</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1hs3ob7">normal, small-caps, petite-caps</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `sets the font-variant to use`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-xdpfct">font-style</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-16f7yao">normal, italic, oblique</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `changes font-style`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-ye7r6">font-weight</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-10jgiuz">normal, light, lighter, bold, bolder, 100, 200, 300, 400, 500, 600, 700, 800</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `Changes the thickness of the stroke used to draw the font`;
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
      htmlContent: htmlContentFont,
      cssContent: cssContentFont,
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="decoration" class="svelte-1ptklpl" data-svelte-h="svelte-1nwybh1">Text Decoration</h6> <p class="svelte-1ptklpl" data-svelte-h="svelte-fvj8xi"><code>text-decoration</code> can place decorations like underline, line-through etc.</p> ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width: 100%" }, {}, {
            default: () => {
              return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
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
                          return `<code data-svelte-h="svelte-1kl49aa">line-through</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `draws line through the text`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-fm1f70">overline</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `draws line over the text`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1es0mqu">underline</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `draws line under the text`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-k8g4pa">none</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `removes any decoration applied to the text`;
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
      htmlContent: htmlContentDecoration,
      cssContent: cssContentDecoration,
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="spacing" class="svelte-1ptklpl" data-svelte-h="svelte-1gi4ex3">Text Spacing</h6> <p class="svelte-1ptklpl" data-svelte-h="svelte-1r9jsxz">It is possible to control space between letters, words and lines using CSS.</p> ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width: 100%" }, {}, {
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
                          return `<code data-svelte-h="svelte-1e2jguc">letter-spacing</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-tzsywf">normal</code> or length`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `controls the amount of space between the letters in words`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-72pnf8">word-spacing</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-tzsywf">normal</code> or length`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `controls the amount of space between words`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-m839ng">line-height</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-tzsywf">normal</code> or length`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `controls the amount of space between the lines`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1ctrzb8">white-space</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1fkzgft">normal, nowrap, break-spaces</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `decides whether line-break is there in the text.`;
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
      htmlContent: htmlContentSpacing,
      cssContent: cssContentSpacing,
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="alignment" class="svelte-1ptklpl" data-svelte-h="svelte-14mas6j">Text Alignment</h6> <p class="svelte-1ptklpl" data-svelte-h="svelte-17bkbq5">Many alignment properties like indentation and placement of text can be controlled using CSS.</p> ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width: 100%" }, {}, {
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
                          return `<code data-svelte-h="svelte-ujof6e">text-indent</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-q8cfei">initial</code> or length`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `indent the first line of a paragraph`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-qkpqsj">text-align</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-y06syi">left, center, right, justify</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `arrange text horizontally depending on the value`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1yfd1c4">float</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1gs8gd3">left, right, none</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space: normal;" }, {}, {
                        default: () => {
                          return `used to specify that text should flow around some 
                            element, often an image or a table.`;
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
      htmlContent: htmlContentAlign,
      cssContent: cssContentAlign,
      jsContent: ""
    },
    {},
    {}
  )}  <h5 class="svelte-1ptklpl" data-svelte-h="svelte-1984kyx">Questions</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1ptklpl" data-svelte-h="svelte-k61vgi">Apply these font properties to resume.</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DXFEBnQr.js.map
