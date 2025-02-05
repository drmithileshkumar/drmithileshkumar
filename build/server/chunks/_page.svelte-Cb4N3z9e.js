import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component } from './ssr2-CDgUAJs6.js';
import { a as githubDark, g as github } from './github-dark-DeAsbMVW.js';
import { W as WebPractice } from './WebPractice-DZHtRtZk.js';
import { p as page } from './stores3-DPEAZJnM.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import './Subheader-DEm_inUP.js';
import './client-k3u4ChD_.js';
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
import './Button-DTp4JSRw.js';
import './Ripple-N--aPaMn.js';
import '@codemirror/lang-javascript';
import '@codemirror/lang-xml';
import '@codemirror/lang-css';
import './exports-kR70XCWV.js';

const css$1 = {
  code: "article.svelte-1ptklpl{display:flex;flex-direction:column;gap:0.5em}p.svelte-1ptklpl,li.svelte-1ptklpl{opacity:0.8}h4.svelte-1ptklpl,h5.svelte-1ptklpl{margin:0.5em 0}h5.svelte-1ptklpl{font-size:1.1em}h6.svelte-1ptklpl{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}a.svelte-1ptklpl{cursor:pointer;text-decoration:none}.question.svelte-1ptklpl{cursor:pointer;padding:0.3em}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { tileGrid } from \\"$lib/utils/common/tile\\";\\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import {page} from \'$app/stores\';\\r\\n    import {onMount} from \'svelte\';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, {Body, Head, Row, Cell} from \'@smui/data-table\';\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from \'$lib/components/NavList.svelte\'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/internet/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Colors\\";\\r\\n    $darkMode = false;\\r\\n    // tileGrid(5, 5)\\r\\n    let cssLayout = [];\\r\\n    let nDivs = 0;\\r\\n    let gridLayout;\\r\\n    let hasZero = false;\\r\\n    const generateLayout = () => {\\r\\n        let {grid, rectangleCount} = tileGrid(5, 5);\\r\\n        hasZero = 0;\\r\\n        for(let i = 0; i < grid.length; i++) {\\r\\n            for(let j = 0; j < grid[i].length; j++) {\\r\\n                if(grid[i][j] === 0) {\\r\\n                    hasZero = true;\\r\\n                    break;\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n        cssLayout = grid;\\r\\n        nDivs = rectangleCount;\\r\\n        // console.log(rectangleCount, grid);\\r\\n        let areas = \\"\\";\\r\\n        let rows = []\\r\\n        for(let i = 0; i < grid.length; i++) {\\r\\n            rows.push((grid[i].map((c) => \'item\' + c)).join(\\" \\"));\\r\\n        }\\r\\n        areas = rows.map(r => `\\"${r}\\"`).join(\\" \\");\\r\\n        // grid.map(row => `\\"${row.join(\\" \\")}\\"`).join(\\"\\\\n\\");\\r\\n        gridLayout.style.gridTemplateAreas = areas;\\r\\n    }   \\r\\n\\r\\n    onMount(() => {\\r\\n        //generateLayout();\\r\\n    });\\r\\n    let htmlContentForeground = `<section class=\\"container\\">\\r\\n    <div class=\\"cell red centerFlex\\">Red</div>\\r\\n    <div class=\\"cell rgb centerFlex\\">RGB</div>\\r\\n    <div class=\\"cell rgba centerFlex\\">RGBA</div>\\r\\n</section>`\\r\\n    let cssContentForeground = `.container {\\r\\n    box-sizing: border-box;\\r\\n    height: 100px;\\r\\n    width: 100%;\\r\\n    border: 1px solid gray;\\r\\n    padding: 1em;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    align-items: center;\\r\\n    justify-content: start;\\r\\n    gap: 1em;\\r\\n    flex-wrap: wrap;\\r\\n}\\r\\n.centerFlex {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n.cell {\\r\\n    border: 2px solid;\\r\\n    padding: 0.5em;\\r\\n}\\r\\n.red {\\r\\n    color: red;\\r\\n}\\r\\n.rgb {\\r\\n    color: rgb(150, 50, 0);\\r\\n}\\r\\n.rgba {\\r\\n    color: rgba(150, 50, 0, 0.1);\\r\\n}`\\r\\nlet htmlContentBackground = `<section class=\\"container\\">\\r\\n    <div class=\\"cell red centerFlex\\">Red</div>\\r\\n    <div class=\\"cell rgb centerFlex\\">RGB</div>\\r\\n    <div class=\\"cell rgba centerFlex\\">RGBA</div>\\r\\n</section>`\\r\\n    let cssContentBackground = `.container {\\r\\n    box-sizing: border-box;\\r\\n    height: 100px;\\r\\n    width: 100%;\\r\\n    border: 1px solid gray;\\r\\n    padding: 1em;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    align-items: center;\\r\\n    justify-content: start;\\r\\n    gap: 1em;\\r\\n    flex-wrap: wrap;\\r\\n}\\r\\n.centerFlex {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n.cell {\\r\\n    border: 2px solid;\\r\\n    padding: 0.5em;\\r\\n}\\r\\n.red {\\r\\n    color: red;\\r\\n    background-color: yellow;\\r\\n}\\r\\n.rgb {\\r\\n    color: rgb(150, 50, 0);\\r\\n    background-color: rgb(0, 150, 50);\\r\\n}\\r\\n.rgba {\\r\\n    color: rgba(150, 50, 0, 0.2);\\r\\n    background-color: rgba(150, 50, 0, 0.1);\\r\\n}`\\r\\nlet htmlContentLinear = `<section class=\\"containerG\\">\\r\\n    <div class=\\"cell two centerFlex\\"></div>\\r\\n    <div class=\\"cell more  centerFlex\\"></div>\\r\\n    <div class=\\"cell angle centerFlex\\"></div>\\r\\n    <div class=\\"cell multiple centerFlex\\"></div>\\r\\n</section>`\\r\\n    let cssContentLinear = `.containerG {\\r\\n    box-sizing: border-box;\\r\\n    height: auto;\\r\\n    width: 100%;\\r\\n    border: 1px solid gray;\\r\\n    padding: 1em;\\r\\n    display: flex;\\r\\n    gap: 1em;\\r\\n}\\r\\n.centerFlex {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n.cell {\\r\\n    border: 1px solid teal;\\r\\n    padding: 0.5em;\\r\\n    width: 10%;\\r\\n    height: 50px;\\r\\n}\\r\\n.two {\\r\\n    background: linear-gradient(red, green);\\r\\n}\\r\\n.more {\\r\\n    background: linear-gradient(red, green, blue);\\r\\n}\\r\\n.angle {\\r\\n    background: linear-gradient(45deg, red, green, blue);\\r\\n}\\r\\n.multiple {\\r\\n    background: linear-gradient(45deg, rgba(255, 0, 0, 0.5), rgba(0, 255, 0, 0.5)), linear-gradient(135deg, rgba(150, 120, 0, 0.5), blue);\\r\\n}`\\r\\nlet htmlContentRadial = `<section class=\\"containerG\\">\\r\\n    <div class=\\"cell two centerFlex\\"></div>\\r\\n    <div class=\\"cell more  centerFlex\\"></div>\\r\\n    <div class=\\"cell origin centerFlex\\"></div>\\r\\n    <div class=\\"cell multiple centerFlex\\"></div>\\r\\n</section>`\\r\\n    let cssContentRadial = `.containerG {\\r\\n    box-sizing: border-box;\\r\\n    height: auto;\\r\\n    width: 100%;\\r\\n    border: 1px solid gray;\\r\\n    padding: 1em;\\r\\n    display: flex;\\r\\n    gap: 1em;\\r\\n}\\r\\n.centerFlex {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n.cell {\\r\\n    border: 1px solid teal;\\r\\n    padding: 0.5em;\\r\\n    width: 10%;\\r\\n    height: 50px;\\r\\n}\\r\\n.two {\\r\\n    background: radial-gradient(red, green);\\r\\n}\\r\\n.more {\\r\\n    background: radial-gradient(red, green, blue);\\r\\n}\\r\\n.origin {\\r\\n    background: radial-gradient(circle at 100%, red, green, blue);\\r\\n}\\r\\n.multiple {\\r\\n    background: radial-gradient(circle at 0%, rgba(255, 0, 0, 0.5), rgba(0, 255, 0, 0.5)), radial-gradient(circle at 100%, rgba(150, 120, 0, 0.5), blue);\\r\\n}`\\r\\nlet htmlContentBox = `<section class=\\"containerG\\">\\r\\n    <div class=\\"cell offset centerFlex\\">Offset</div>\\r\\n    <div class=\\"cell blur  centerFlex\\">Blur</div>\\r\\n    <div class=\\"cell blurSpread centerFlex\\">Blur Spread</div>\\r\\n    <div class=\\"cell multiple centerFlex\\">Multiple</div>\\r\\n</section>`\\r\\nlet cssContentBox = `.containerG {\\r\\n    box-sizing: border-box;\\r\\n    height: auto;\\r\\n    width: 100%;\\r\\n    border: 1px solid gray;\\r\\n    padding: 1em;\\r\\n    display: flex;\\r\\n    gap: 1.5em;\\r\\n}\\r\\n.centerFlex {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n.cell {\\r\\n    border: 1px solid teal;\\r\\n    padding: 0.5em;\\r\\n    width: 10%;\\r\\n    height: 50px;\\r\\n}\\r\\n.offset {\\r\\n    box-shadow: 3px 2px gray;\\r\\n    text-shadow: 3px 2px gray;\\r\\n}\\r\\n.blur {\\r\\n    box-shadow: 3px 2px 2px gray;\\r\\n    text-shadow: 3px 2px 2px gray;\\r\\n}\\r\\n.blurSpread {\\r\\n    box-shadow: 3px 2px 2px 1px gray;\\r\\n    text-shadow: 3px 2px 2px gray;\\r\\n}\\r\\n.multiple {\\r\\n    box-shadow: 5px 5px 3px gray, -5px -5px 3px red;\\r\\n    text-shadow: 5px 5px 3px gray, -5px -5px 3px red;\\r\\n}`\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n    .cell {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        border: 1px solid teal;\\r\\n        height: auto;\\r\\n    }\\r\\n    .grid {\\r\\n        display: grid;\\r\\n        gap: 0.1em;\\r\\n        height: 300px;\\r\\n        width: 300px;\\r\\n        border: 1px solid gray;\\r\\n        padding: 0.1em;\\r\\n        margin: auto;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Internet Technologies</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/colors\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Colors\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#foreground\\">Foreground Color</a></li>\\r\\n                <li><a href=\\"#background\\">Background Color</a></li>\\r\\n                <li><a href=\\"#linear\\">Linear gradient</a></li>\\r\\n                <li><a href=\\"#radial\\">Radial gradient</a></li>\\r\\n                <li><a href=\\"#shadow\\">Shadows</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    \\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"foreground\\">Foreground Color</h6>\\r\\n            <p>\\r\\n                Foreground is the color which is used to render the element. It is specified using <code>color</code> property. There are various named colors like red, green, blue, teal etc. Colors can be specified using other schemes like RGB, RGBA, HS, CMYK. In this chapter we\'ll focus mostly on RGBA.\\r\\n            </p>\\r\\n            <p>\\r\\n                RGBA stands for Red, Green, Blue, Alpha where Alpha controls the opacity. When we set color to an element, then its border and other children inherit this property.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentForeground} cssContent={cssContentForeground} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"background\\">Background Color</h6>\\r\\n            <p>\\r\\n                The <code>background-color</code> or <code>background</code> property is used to set the background color of an element.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentBackground} cssContent={cssContentBackground} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"linear\\">Linear gradient</h6>\\r\\n            <p>\\r\\n               The <code>background</code> property can be set a <code>linear-gradient()</code> which creates an image that shows a transition between a list of colors along straight line.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentLinear} cssContent={cssContentLinear} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"radial\\">Radial gradient</h6>\\r\\n            <p>\\r\\n                The <code>background</code> property can be set a <code>radial-gradient()</code> which creates an image that shows a transition between a list of colors radiating from an origin with a shape circle or ellipse.\\r\\n             </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentRadial} cssContent={cssContentRadial} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"shadow\\">Shadows</h6>\\r\\n            <p>\\r\\n                The <code>box-shadow</code> property is used to set shadows around the element\'s frame. Multiple shadows can be set separated by commas. A box shadow is described by X and Y offsets, blur and spread radius, and color. \\r\\n            </p>\\r\\n            <p>\\r\\n                To apply shadow to text, use <code>text-shadow</code> instead of <code>box-shadow</code>, but the same syntax. The only difference is that <code>text-shadow</code> does not have the <code>spread</code> part.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentBox} cssContent={cssContentBox} jsContent={\\"\\"} />\\r\\n    <!-- <Card>\\r\\n        <Content>\\r\\n            <Highlight language={xml} code={code2} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card> -->\\r\\n    <h5>Questions</h5>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">Apply these color properties to resume.</div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AA4PI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAC,CAAE,iBAAG,CACF,OAAO,CAAE,GACb,CACQ,iBAAE,CAAE,iBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,iBAAG,CACC,SAAS,CAAE,KACf,CACA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CAKA,gBAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB,CACA,wBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb"}'
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
  set_store_value(currentPath, $currentPath = "Colors", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let htmlContentForeground = `<section class="container">
    <div class="cell red centerFlex">Red</div>
    <div class="cell rgb centerFlex">RGB</div>
    <div class="cell rgba centerFlex">RGBA</div>
</section>`;
  let cssContentForeground = `.container {
    box-sizing: border-box;
    height: 100px;
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
    border: 2px solid;
    padding: 0.5em;
}
.red {
    color: red;
}
.rgb {
    color: rgb(150, 50, 0);
}
.rgba {
    color: rgba(150, 50, 0, 0.1);
}`;
  let htmlContentBackground = `<section class="container">
    <div class="cell red centerFlex">Red</div>
    <div class="cell rgb centerFlex">RGB</div>
    <div class="cell rgba centerFlex">RGBA</div>
</section>`;
  let cssContentBackground = `.container {
    box-sizing: border-box;
    height: 100px;
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
    border: 2px solid;
    padding: 0.5em;
}
.red {
    color: red;
    background-color: yellow;
}
.rgb {
    color: rgb(150, 50, 0);
    background-color: rgb(0, 150, 50);
}
.rgba {
    color: rgba(150, 50, 0, 0.2);
    background-color: rgba(150, 50, 0, 0.1);
}`;
  let htmlContentLinear = `<section class="containerG">
    <div class="cell two centerFlex"></div>
    <div class="cell more  centerFlex"></div>
    <div class="cell angle centerFlex"></div>
    <div class="cell multiple centerFlex"></div>
</section>`;
  let cssContentLinear = `.containerG {
    box-sizing: border-box;
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
    width: 10%;
    height: 50px;
}
.two {
    background: linear-gradient(red, green);
}
.more {
    background: linear-gradient(red, green, blue);
}
.angle {
    background: linear-gradient(45deg, red, green, blue);
}
.multiple {
    background: linear-gradient(45deg, rgba(255, 0, 0, 0.5), rgba(0, 255, 0, 0.5)), linear-gradient(135deg, rgba(150, 120, 0, 0.5), blue);
}`;
  let htmlContentRadial = `<section class="containerG">
    <div class="cell two centerFlex"></div>
    <div class="cell more  centerFlex"></div>
    <div class="cell origin centerFlex"></div>
    <div class="cell multiple centerFlex"></div>
</section>`;
  let cssContentRadial = `.containerG {
    box-sizing: border-box;
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
    width: 10%;
    height: 50px;
}
.two {
    background: radial-gradient(red, green);
}
.more {
    background: radial-gradient(red, green, blue);
}
.origin {
    background: radial-gradient(circle at 100%, red, green, blue);
}
.multiple {
    background: radial-gradient(circle at 0%, rgba(255, 0, 0, 0.5), rgba(0, 255, 0, 0.5)), radial-gradient(circle at 100%, rgba(150, 120, 0, 0.5), blue);
}`;
  let htmlContentBox = `<section class="containerG">
    <div class="cell offset centerFlex">Offset</div>
    <div class="cell blur  centerFlex">Blur</div>
    <div class="cell blurSpread centerFlex">Blur Spread</div>
    <div class="cell multiple centerFlex">Multiple</div>
</section>`;
  let cssContentBox = `.containerG {
    box-sizing: border-box;
    height: auto;
    width: 100%;
    border: 1px solid gray;
    padding: 1em;
    display: flex;
    gap: 1.5em;
}
.centerFlex {
    display: flex;
    align-items: center;
    justify-content: center;
}
.cell {
    border: 1px solid teal;
    padding: 0.5em;
    width: 10%;
    height: 50px;
}
.offset {
    box-shadow: 3px 2px gray;
    text-shadow: 3px 2px gray;
}
.blur {
    box-shadow: 3px 2px 2px gray;
    text-shadow: 3px 2px 2px gray;
}
.blurSpread {
    box-shadow: 3px 2px 2px 1px gray;
    text-shadow: 3px 2px 2px gray;
}
.multiple {
    box-shadow: 5px 5px 3px gray, -5px -5px 3px red;
    text-shadow: 5px 5px 3px gray, -5px -5px 3px red;
}`;
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-ae7jfp_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/colors"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-ae7jfp_END -->`, ""} <article class="svelte-1ptklpl">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1ptklpl" data-svelte-h="svelte-7974r2">Colors</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1ptklpl" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-w2z3z4"><li class="svelte-1ptklpl"><a href="#foreground" class="svelte-1ptklpl">Foreground Color</a></li> <li class="svelte-1ptklpl"><a href="#background" class="svelte-1ptklpl">Background Color</a></li> <li class="svelte-1ptklpl"><a href="#linear" class="svelte-1ptklpl">Linear gradient</a></li> <li class="svelte-1ptklpl"><a href="#radial" class="svelte-1ptklpl">Radial gradient</a></li> <li class="svelte-1ptklpl"><a href="#shadow" class="svelte-1ptklpl">Shadows</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="foreground" class="svelte-1ptklpl" data-svelte-h="svelte-1uo2d5">Foreground Color</h6> <p class="svelte-1ptklpl" data-svelte-h="svelte-14se3au">Foreground is the color which is used to render the element. It is specified using <code>color</code> property. There are various named colors like red, green, blue, teal etc. Colors can be specified using other schemes like RGB, RGBA, HS, CMYK. In this chapter we&#39;ll focus mostly on RGBA.</p> <p class="svelte-1ptklpl" data-svelte-h="svelte-vyjyxn">RGBA stands for Red, Green, Blue, Alpha where Alpha controls the opacity. When we set color to an element, then its border and other children inherit this property.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentForeground,
      cssContent: cssContentForeground,
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="background" class="svelte-1ptklpl" data-svelte-h="svelte-gbua01">Background Color</h6> <p class="svelte-1ptklpl" data-svelte-h="svelte-juzogd">The <code>background-color</code> or <code>background</code> property is used to set the background color of an element.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentBackground,
      cssContent: cssContentBackground,
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="linear" class="svelte-1ptklpl" data-svelte-h="svelte-18g9iii">Linear gradient</h6> <p class="svelte-1ptklpl" data-svelte-h="svelte-c05whh">The <code>background</code> property can be set a <code>linear-gradient()</code> which creates an image that shows a transition between a list of colors along straight line.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentLinear,
      cssContent: cssContentLinear,
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="radial" class="svelte-1ptklpl" data-svelte-h="svelte-1bhk6dy">Radial gradient</h6> <p class="svelte-1ptklpl" data-svelte-h="svelte-1vz7zah">The <code>background</code> property can be set a <code>radial-gradient()</code> which creates an image that shows a transition between a list of colors radiating from an origin with a shape circle or ellipse.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentRadial,
      cssContent: cssContentRadial,
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="shadow" class="svelte-1ptklpl" data-svelte-h="svelte-o79zu9">Shadows</h6> <p class="svelte-1ptklpl" data-svelte-h="svelte-lujot2">The <code>box-shadow</code> property is used to set shadows around the element&#39;s frame. Multiple shadows can be set separated by commas. A box shadow is described by X and Y offsets, blur and spread radius, and color.</p> <p class="svelte-1ptklpl" data-svelte-h="svelte-30esxm">To apply shadow to text, use <code>text-shadow</code> instead of <code>box-shadow</code>, but the same syntax. The only difference is that <code>text-shadow</code> does not have the <code>spread</code> part.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentBox,
      cssContent: cssContentBox,
      jsContent: ""
    },
    {},
    {}
  )}  <h5 class="svelte-1ptklpl" data-svelte-h="svelte-1984kyx">Questions</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1ptklpl" data-svelte-h="svelte-s3nbh2">Apply these color properties to resume.</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Cb4N3z9e.js.map
