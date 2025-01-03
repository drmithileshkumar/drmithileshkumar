import { a as subscribe, d as set_store_value } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, v as validate_component } from './ssr2-q3O0l93f.js';
import { x as xml } from './xml-DVVcaHI4.js';
import { c as css } from './css-8DWL9UPi.js';
import { g as githubDark, a as github } from './github-dark-BC3MHtr2.js';
import { W as WebPractice } from './WebPractice-C-mzGWf8.js';
import { p as page } from './stores3-BrNJmxTp.js';
import { C as Card } from './Card-jWUNhZC7.js';
import { C as Content } from './ActionIcons-Co7bojT-.js';
import './Subheader-BV9F6O0P.js';
import './client-k3u4ChD_.js';
import { d as darkMode, c as currentPath, n as navList } from './stores-Dd7WnHpz.js';
import { c as contentNav, a as contents } from './content-ChhWH1Ps.js';
import { P as Pathlist } from './Pathlist-xYGsVQiJ.js';
import { C as CourseNavigation } from './CourseNavigation-pnGRCnsg.js';
import { H as Highlight, L as LineNumbers } from './LineNumbers-BZtnLenZ.js';
import './Segment-CR_jnDNQ.js';
import './index2-BZnI6xu7.js';
import './SmuiElement-DA9PKsv2.js';
import './ContextFragment-e-oupRQm.js';
import './CommonLabel-BuPx8XxF.js';
import './Suffix-CzM54Q0Q.js';
import './classAdderBuilder-B9W9nXDD.js';
import './Button-DRRmGjqZ.js';
import './Ripple-Zq_D_mxy.js';
import '@codemirror/lang-javascript';
import '@codemirror/lang-xml';
import '@codemirror/lang-css';
import './exports-kR70XCWV.js';
import './_commonjsHelpers-B85MJLTf.js';

const css$1 = {
  code: "article.svelte-1ptklpl{display:flex;flex-direction:column;gap:0.5em}p.svelte-1ptklpl,li.svelte-1ptklpl{opacity:0.8}h4.svelte-1ptklpl,h5.svelte-1ptklpl{margin:0.5em 0}h5.svelte-1ptklpl{font-size:1.1em}h6.svelte-1ptklpl{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}a.svelte-1ptklpl{cursor:pointer;text-decoration:none}.question.svelte-1ptklpl{cursor:pointer;padding:0.3em}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { tileGrid } from \\"$lib/utils/common/tile\\";\\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import {page} from \'$app/stores\';\\r\\n    import {onMount} from \'svelte\';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, {Body, Head, Row, Cell} from \'@smui/data-table\';\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from \'$lib/components/NavList.svelte\'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/internet/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Position\\";\\r\\n    $darkMode = false;\\r\\n    // tileGrid(5, 5)\\r\\n    let cssLayout = [];\\r\\n    let nDivs = 0;\\r\\n    let gridLayout;\\r\\n    let hasZero = false;\\r\\n    const generateLayout = () => {\\r\\n        let {grid, rectangleCount} = tileGrid(5, 5);\\r\\n        hasZero = 0;\\r\\n        for(let i = 0; i < grid.length; i++) {\\r\\n            for(let j = 0; j < grid[i].length; j++) {\\r\\n                if(grid[i][j] === 0) {\\r\\n                    hasZero = true;\\r\\n                    break;\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n        cssLayout = grid;\\r\\n        nDivs = rectangleCount;\\r\\n        // console.log(rectangleCount, grid);\\r\\n        let areas = \\"\\";\\r\\n        let rows = []\\r\\n        for(let i = 0; i < grid.length; i++) {\\r\\n            rows.push((grid[i].map((c) => \'item\' + c)).join(\\" \\"));\\r\\n        }\\r\\n        areas = rows.map(r => `\\"${r}\\"`).join(\\" \\");\\r\\n        // grid.map(row => `\\"${row.join(\\" \\")}\\"`).join(\\"\\\\n\\");\\r\\n        gridLayout.style.gridTemplateAreas = areas;\\r\\n    }   \\r\\n\\r\\n    onMount(() => {\\r\\n        //generateLayout();\\r\\n    });\\r\\n    let htmlContentPosition = `<section class=\\"container\\">\\r\\n    <div class=\\"circle zero\\">Zero</div>\\r\\n    <div class=\\"circle one\\">One</div>\\r\\n    <div class=\\"stickyDiv\\">Sticky guy</div>\\r\\n    <div class=\\"circle two\\">\\r\\n        <div class=\\"circle inner1\\">\\r\\n            <div class=\\"circle inner2\\">\\r\\n                two\\r\\n            </div>\\r\\n        </div>\\r\\n    </div>\\r\\n    <div class=\\"circle three\\">Three</div>\\r\\n    <div class=\\"circle four\\">Four</div>\\r\\n</section>`\\r\\n    let cssContentPosition = `.section { position: relative; }\\r\\n.circle { border: 2px solid;\\r\\n    border-radius: 50%;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n.zero {\\r\\n    width: 100px;\\r\\n    height: 100px;\\r\\n}\\r\\n.one {\\r\\n    width: 100px;\\r\\n    height: 100px;\\r\\n}\\r\\n.two {\\r\\n    position: absolute;\\r\\n    width: 100px;\\r\\n    height: 100px;\\r\\n    top: 150px;\\r\\n    left: 50%;\\r\\n}\\r\\n.inner1 {\\r\\n    width: 90px;\\r\\n    height: 90px;\\r\\n}\\r\\n.inner2 {\\r\\n    width: 80px;\\r\\n    height: 80px;\\r\\n}\\r\\n.three {\\r\\n    width: 100px;\\r\\n    height: 100px;\\r\\n}\\r\\n.four {\\r\\n    width: 100px;\\r\\n    height: 100px;\\r\\n}\\r\\n.stickyDiv {\\r\\n    position: sticky;\\r\\n    top: 0px;\\r\\n    left: 0px;\\r\\n    background: red;\\r\\n    padding: 10px;\\r\\n    margin: 10px;\\r\\n}`\\r\\n\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n    .cell {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        border: 1px solid teal;\\r\\n        height: auto;\\r\\n    }\\r\\n    .grid {\\r\\n        display: grid;\\r\\n        gap: 0.1em;\\r\\n        height: 300px;\\r\\n        width: 300px;\\r\\n        border: 1px solid gray;\\r\\n        padding: 0.1em;\\r\\n        margin: auto;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Internet Technologies</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/position\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Position\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#static\\">Static</a></li>\\r\\n                <li><a href=\\"#relative\\">Relative</a></li>\\r\\n                <li><a href=\\"#absolute\\">Absolute</a></li>\\r\\n                <li><a href=\\"#fixed\\">Fixed</a></li>\\r\\n                <li><a href=\\"#sticky\\">Sticky</li>\\r\\n            </ol>\\r\\n            <p>The <code>position</code> property sets how an element is positioned in a document. The <code>top, right, bottom,</code> and <code>left</code> properties determine the final location of positioned elements.</p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    \\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"static\\">Static</h6>\\r\\n            <p>\\r\\n                The <code>position</code> of an element can be set to <code>static</code>.\\r\\n                <Highlight language={css} \\r\\n                code={`section { position: static; }`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n                In this case, <code>section</code> is positioned according to the normal flow of the document. The <code>top, bottom, left, z-index</code> propertiecs have no effect.\\r\\n                <Highlight language={xml} \\r\\n                code={`<section class=\\"blue\\">\\r\\n    <p>I am inside a static section.</p>\\r\\n</section`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    \\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"relative\\">Relative</h6>\\r\\n            <p>\\r\\n                The <code>position</code> of an element can be set to <code>relative</code>.\\r\\n                <Highlight language={css} \\r\\n                code={`.relative { \\r\\n    position: relative; \\r\\n    top: 30px;\\r\\n    left: 40px;\\r\\n}`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n                In this case, all <code>p</code> elements with class <code>relative</code> is first placed according to the normal order and then shifted 30px from top and 40px from left.\\r\\n                <Highlight language={xml} \\r\\n                code={`<section>\\r\\n    <p>I have static position.</p>\\r\\n    <p class=\\"relative\\">I have relative position.</p>\\r\\n    <p>I have static position</p>\\r\\n</section`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n            </p>\\r\\n\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"absolute\\">Absolute</h6>\\r\\n            <p>\\r\\n                The <code>position</code> of an element can be set to <code>absolute</code>.\\r\\n                <Highlight language={css} \\r\\n                code={`section { position: relative; }\\r\\n.absolute { \\r\\n    position: absolute; \\r\\n    top: 30px;\\r\\n    left: 40px;\\r\\n}`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n                In this case, all <code>p</code> elements with class <code>absolute</code> is removed from the normal document flow, and no space is created for the element in the page layout. The element is positioned relative to its closest positioned ancestor (if any) or to the initial containing block. Its final position is determined by the values of <code>top, right, bottom, left</code>.\\r\\n                <Highlight language={xml} \\r\\n                code={`<section>\\r\\n    <p>I have static position.</p>\\r\\n    <p class=\\"absolute\\">I have absolute position.</p>\\r\\n    <p>I have static position</p>\\r\\n</section`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n            </p>\\r\\n\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"fixed\\">Fixed</h6>\\r\\n            <p>\\r\\n                The <code>position</code> of an element can be set to <code>fixed</code>.\\r\\n                <Highlight language={css} \\r\\n                code={`section { position: relative; }\\r\\n.fixed { \\r\\n    position: fixed; \\r\\n    top: 30px;\\r\\n    left: 40px;\\r\\n}`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n                In this case, all <code>p</code> elements with class <code>fixed</code> is removed from the normal document flow, and no space is created for the element in the page layout. The element is positioned relative to viewport. Its final position is determined by the values of <code>top, right, bottom, left</code>.\\r\\n                <Highlight language={xml} \\r\\n                code={`<section>\\r\\n    <p>I have static position.</p>\\r\\n    <p class=\\"fixed\\">I have fixed position.</p>\\r\\n    <p>I have static position</p>\\r\\n</section`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n            </p>\\r\\n\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"sticky\\">Sticky</h6>\\r\\n            <p>\\r\\n                The <code>position</code> of an element can be set to <code>sticky</code>.\\r\\n                <Highlight language={css} \\r\\n                code={`section { position: relative; }\\r\\n.sticky { \\r\\n    position: sticky; \\r\\n    top: 30px;\\r\\n    left: 40px;\\r\\n}`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n                In this case, all <code>p</code> elements with class <code>sticky</code> is positioned according to the normal document flow, and then offset relative to its nearest scrolling ancestor and containing block. Its final position is determined by the values of <code>top, right, bottom, left</code>.\\r\\n                <Highlight language={xml} \\r\\n                code={`<section>\\r\\n    <p>I have static position.</p>\\r\\n    <p class=\\"sticky\\">I have sticky position.</p>\\r\\n    <p>I have static position</p>\\r\\n</section`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n            </p>\\r\\n\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentPosition} cssContent={cssContentPosition} jsContent={\\"\\"} />\\r\\n    \\r\\n    <!-- <Card>\\r\\n        <Content>\\r\\n            <Highlight language={xml} code={code2} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card> -->\\r\\n    <h5>Questions</h5>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">Create <code>sticky</code> titles to sections in your resume, college and hometown pages.</div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">Create the following pattern.\\r\\n                <section style=\\"position: relative;border: 1px solid; padding: 1em;margin: 1em;height: 200px;\\">\\r\\n                    <div style=\\"position: absolute; border: 2px solid teal;width:50px; height:50px;border-radius:50%;left:50%;top:20%;\\"></div>\\r\\n                    <div style=\\"position: absolute; border: 2px solid teal;width:50px; height:50px;border-radius:50%;left:45.25%;top:41%;\\"></div>\\r\\n                    <div style=\\"position: absolute; border: 2px solid teal;width:50px; height:50px;border-radius:50%;left:54.75%;top:41%;\\"></div>\\r\\n                </section>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAwHI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAC,CAAE,iBAAG,CACF,OAAO,CAAE,GACb,CACQ,iBAAE,CAAE,iBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,iBAAG,CACC,SAAS,CAAE,KACf,CACA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CAKA,gBAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB,CACA,wBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb"}'
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
  set_store_value(currentPath, $currentPath = "Position", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let htmlContentPosition = `<section class="container">
    <div class="circle zero">Zero</div>
    <div class="circle one">One</div>
    <div class="stickyDiv">Sticky guy</div>
    <div class="circle two">
        <div class="circle inner1">
            <div class="circle inner2">
                two
            </div>
        </div>
    </div>
    <div class="circle three">Three</div>
    <div class="circle four">Four</div>
</section>`;
  let cssContentPosition = `.section { position: relative; }
.circle { border: 2px solid;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.zero {
    width: 100px;
    height: 100px;
}
.one {
    width: 100px;
    height: 100px;
}
.two {
    position: absolute;
    width: 100px;
    height: 100px;
    top: 150px;
    left: 50%;
}
.inner1 {
    width: 90px;
    height: 90px;
}
.inner2 {
    width: 80px;
    height: 80px;
}
.three {
    width: 100px;
    height: 100px;
}
.four {
    width: 100px;
    height: 100px;
}
.stickyDiv {
    position: sticky;
    top: 0px;
    left: 0px;
    background: red;
    padding: 10px;
    margin: 10px;
}`;
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1j1afec_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/position"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1j1afec_END -->`, ""} <article class="svelte-1ptklpl">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1ptklpl" data-svelte-h="svelte-17x8xkf">Position</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1ptklpl" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-18fqzpz"><li class="svelte-1ptklpl"><a href="#static" class="svelte-1ptklpl">Static</a></li> <li class="svelte-1ptklpl"><a href="#relative" class="svelte-1ptklpl">Relative</a></li> <li class="svelte-1ptklpl"><a href="#absolute" class="svelte-1ptklpl">Absolute</a></li> <li class="svelte-1ptklpl"><a href="#fixed" class="svelte-1ptklpl">Fixed</a></li> <li class="svelte-1ptklpl"><a href="#sticky" class="svelte-1ptklpl">Sticky</a></li></ol> <p class="svelte-1ptklpl" data-svelte-h="svelte-1anipzk">The <code>position</code> property sets how an element is positioned in a document. The <code>top, right, bottom,</code> and <code>left</code> properties determine the final location of positioned elements.</p>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="static" class="svelte-1ptklpl" data-svelte-h="svelte-sg9d5e">Static</h6> <p class="svelte-1ptklpl">The <code data-svelte-h="svelte-19s3xqn">position</code> of an element can be set to <code data-svelte-h="svelte-uk9qxq">static</code>.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `section { position: static; }`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                In this case, <code data-svelte-h="svelte-14gpkwf">section</code> is positioned according to the normal flow of the document. The <code data-svelte-h="svelte-bc5ntk">top, bottom, left, z-index</code> propertiecs have no effect.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `<section class="blue">
    <p>I am inside a static section.</p>
</section`
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
          return `<h6 id="relative" class="svelte-1ptklpl" data-svelte-h="svelte-24y6xa">Relative</h6> <p class="svelte-1ptklpl">The <code data-svelte-h="svelte-19s3xqn">position</code> of an element can be set to <code data-svelte-h="svelte-tzs70s">relative</code>.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `.relative { 
    position: relative; 
    top: 30px;
    left: 40px;
}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                In this case, all <code data-svelte-h="svelte-1vekeb2">p</code> elements with class <code data-svelte-h="svelte-tzs70s">relative</code> is first placed according to the normal order and then shifted 30px from top and 40px from left.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `<section>
    <p>I have static position.</p>
    <p class="relative">I have relative position.</p>
    <p>I have static position</p>
</section`
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
          return `<h6 id="absolute" class="svelte-1ptklpl" data-svelte-h="svelte-6dmjsu">Absolute</h6> <p class="svelte-1ptklpl">The <code data-svelte-h="svelte-19s3xqn">position</code> of an element can be set to <code data-svelte-h="svelte-l5jez5">absolute</code>.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `section { position: relative; }
.absolute { 
    position: absolute; 
    top: 30px;
    left: 40px;
}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                In this case, all <code data-svelte-h="svelte-1vekeb2">p</code> elements with class <code data-svelte-h="svelte-l5jez5">absolute</code> is removed from the normal document flow, and no space is created for the element in the page layout. The element is positioned relative to its closest positioned ancestor (if any) or to the initial containing block. Its final position is determined by the values of <code data-svelte-h="svelte-1qxz989">top, right, bottom, left</code>.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `<section>
    <p>I have static position.</p>
    <p class="absolute">I have absolute position.</p>
    <p>I have static position</p>
</section`
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
          return `<h6 id="fixed" class="svelte-1ptklpl" data-svelte-h="svelte-1xid61e">Fixed</h6> <p class="svelte-1ptklpl">The <code data-svelte-h="svelte-19s3xqn">position</code> of an element can be set to <code data-svelte-h="svelte-1oyammk">fixed</code>.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `section { position: relative; }
.fixed { 
    position: fixed; 
    top: 30px;
    left: 40px;
}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                In this case, all <code data-svelte-h="svelte-1vekeb2">p</code> elements with class <code data-svelte-h="svelte-1oyammk">fixed</code> is removed from the normal document flow, and no space is created for the element in the page layout. The element is positioned relative to viewport. Its final position is determined by the values of <code data-svelte-h="svelte-1qxz989">top, right, bottom, left</code>.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `<section>
    <p>I have static position.</p>
    <p class="fixed">I have fixed position.</p>
    <p>I have static position</p>
</section`
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
          return `<h6 id="sticky" class="svelte-1ptklpl" data-svelte-h="svelte-w07rdy">Sticky</h6> <p class="svelte-1ptklpl">The <code data-svelte-h="svelte-19s3xqn">position</code> of an element can be set to <code data-svelte-h="svelte-1jdfilr">sticky</code>.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `section { position: relative; }
.sticky { 
    position: sticky; 
    top: 30px;
    left: 40px;
}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                In this case, all <code data-svelte-h="svelte-1vekeb2">p</code> elements with class <code data-svelte-h="svelte-1jdfilr">sticky</code> is positioned according to the normal document flow, and then offset relative to its nearest scrolling ancestor and containing block. Its final position is determined by the values of <code data-svelte-h="svelte-1qxz989">top, right, bottom, left</code>.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `<section>
    <p>I have static position.</p>
    <p class="sticky">I have sticky position.</p>
    <p>I have static position</p>
</section`
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
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentPosition,
      cssContent: cssContentPosition,
      jsContent: ""
    },
    {},
    {}
  )}  <h5 class="svelte-1ptklpl" data-svelte-h="svelte-1984kyx">Questions</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1ptklpl" data-svelte-h="svelte-1d86frt">Create <code>sticky</code> titles to sections in your resume, college and hometown pages.</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1ptklpl" data-svelte-h="svelte-15kj375">Create the following pattern.
                <section style="position: relative;border: 1px solid; padding: 1em;margin: 1em;height: 200px;"><div style="position: absolute; border: 2px solid teal;width:50px; height:50px;border-radius:50%;left:50%;top:20%;"></div> <div style="position: absolute; border: 2px solid teal;width:50px; height:50px;border-radius:50%;left:45.25%;top:41%;"></div> <div style="position: absolute; border: 2px solid teal;width:50px; height:50px;border-radius:50%;left:54.75%;top:41%;"></div></section></div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Hm4AMhgA.js.map
