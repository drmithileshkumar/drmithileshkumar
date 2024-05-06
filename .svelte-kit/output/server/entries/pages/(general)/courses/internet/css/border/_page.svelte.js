import { s as subscribe, b as set_store_value } from "../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component } from "../../../../../../../chunks/ssr.js";
import { x as xml } from "../../../../../../../chunks/xml.js";
import { g as githubDark, a as github, c as contentNav, b as contents } from "../../../../../../../chunks/content4.js";
import { W as WebPractice } from "../../../../../../../chunks/WebPractice.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import { C as Card } from "../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../chunks/ActionIcons.js";
import "../../../../../../../chunks/Subheader.js";
import "../../../../../../../chunks/client.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../../../chunks/stores2.js";
/* empty css                                                                */
import { P as Pathlist } from "../../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../../chunks/CourseNavigation.js";
import { H as Highlight, L as LineNumbers } from "../../../../../../../chunks/LineNumbers.js";
const css$1 = {
  code: "article.svelte-1ptklpl{display:flex;flex-direction:column;gap:0.5em}p.svelte-1ptklpl,li.svelte-1ptklpl{opacity:0.8}h4.svelte-1ptklpl,h5.svelte-1ptklpl{margin:0.5em 0}h5.svelte-1ptklpl{font-size:1.1em}h6.svelte-1ptklpl{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}a.svelte-1ptklpl{cursor:pointer;text-decoration:none}.question.svelte-1ptklpl{cursor:pointer;padding:0.3em}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { tileGrid } from \\"$lib/utils/common/tile\\";\\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import {page} from \'$app/stores\';\\r\\n    import {onMount} from \'svelte\';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, {Body, Head, Row, Cell} from \'@smui/data-table\';\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from \'$lib/components/NavList.svelte\'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/internet/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Border\\";\\r\\n    $darkMode = false;\\r\\n    // tileGrid(5, 5)\\r\\n    let cssLayout = [];\\r\\n    let nDivs = 0;\\r\\n    let gridLayout;\\r\\n    let hasZero = false;\\r\\n    const generateLayout = () => {\\r\\n        let {grid, rectangleCount} = tileGrid(5, 5);\\r\\n        hasZero = 0;\\r\\n        for(let i = 0; i < grid.length; i++) {\\r\\n            for(let j = 0; j < grid[i].length; j++) {\\r\\n                if(grid[i][j] === 0) {\\r\\n                    hasZero = true;\\r\\n                    break;\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n        cssLayout = grid;\\r\\n        nDivs = rectangleCount;\\r\\n        // console.log(rectangleCount, grid);\\r\\n        let areas = \\"\\";\\r\\n        let rows = []\\r\\n        for(let i = 0; i < grid.length; i++) {\\r\\n            rows.push((grid[i].map((c) => \'item\' + c)).join(\\" \\"));\\r\\n        }\\r\\n        areas = rows.map(r => `\\"${r}\\"`).join(\\" \\");\\r\\n        // grid.map(row => `\\"${row.join(\\" \\")}\\"`).join(\\"\\\\n\\");\\r\\n        gridLayout.style.gridTemplateAreas = areas;\\r\\n    }   \\r\\n\\r\\n    onMount(() => {\\r\\n        //generateLayout();\\r\\n    });\\r\\n    let htmlContentSyntax = `<section class=\\"container\\">\\r\\n    <div class=\\"cell none centerFlex\\">none</div>\\r\\n    <div class=\\"cell hidden centerFlex\\">hidden</div>\\r\\n    <div class=\\"cell dotted centerFlex\\">dotted</div>\\r\\n    <div class=\\"cell dashed centerFlex\\">dashed</div>\\r\\n    <div class=\\"cell solid centerFlex\\">solid</div>\\r\\n    <div class=\\"cell double centerFlex\\">double</div>\\r\\n    <div class=\\"cell groove centerFlex\\">groove</div>\\r\\n    <div class=\\"cell ridge centerFlex\\">ridge</div>\\r\\n    <div class=\\"cell inset centerFlex\\">inset</div>\\r\\n    <div class=\\"cell outset centerFlex\\">outset</div>\\r\\n</section>`\\r\\n    let cssContentSyntax = `.container {\\r\\n    box-sizing: border-box;\\r\\n    height: 120px;\\r\\n    width: 100%;\\r\\n    border: 1px solid gray;\\r\\n    padding: 1em;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    align-items: center;\\r\\n    justify-content: start;\\r\\n    gap: 1em;\\r\\n    flex-wrap: wrap;\\r\\n}\\r\\n.centerFlex {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n.cell {\\r\\n    border: 2px solid;\\r\\n    padding: 0.5em;\\r\\n}\\r\\n.none {\\r\\n    border: 2px none red;\\r\\n}\\r\\n.hidden {\\r\\n    border: 2px hidden red;\\r\\n}\\r\\n.dotted {\\r\\n    border: 2px dotted red;\\r\\n}\\r\\n.dashed {\\r\\n    border: 2px dashed red;\\r\\n}\\r\\n.solid {\\r\\n    border: 2px solid red;\\r\\n}\\r\\n.double {\\r\\n    border: 2px double red;\\r\\n}\\r\\n.groove {\\r\\n    border: 2px groove red;\\r\\n}\\r\\n.ridge {\\r\\n    border: 2px ridge red;\\r\\n}\\r\\n.inset {\\r\\n    border: 2px inset red;\\r\\n}\\r\\n.outset {\\r\\n    border: 2px outset red;\\r\\n}`\\r\\n\\r\\nlet htmlContentSides = `<section class=\\"container\\">\\r\\n    <div class=\\"cell top centerFlex\\">top</div>\\r\\n    <div class=\\"cell right centerFlex\\">right</div>\\r\\n    <div class=\\"cell bottom centerFlex\\">bottom</div>\\r\\n    <div class=\\"cell left centerFlex\\">left</div>\\r\\n</section>`\\r\\n    let cssContentSides = `.container {\\r\\n    box-sizing: border-box;\\r\\n    height: 100px;\\r\\n    width: 100%;\\r\\n    border: 1px solid gray;\\r\\n    padding: 1em;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    align-items: center;\\r\\n    justify-content: start;\\r\\n    gap: 1em;\\r\\n    flex-wrap: wrap;\\r\\n}\\r\\n.centerFlex {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n.cell {\\r\\n    padding: 0.5em;\\r\\n}\\r\\n.top {\\r\\n    border-top: 2px solid red;\\r\\n}\\r\\n.right {\\r\\n    border-right: 2px solid red;\\r\\n}\\r\\n.bottom {\\r\\n    border-bottom: 2px solid red;\\r\\n}\\r\\n.left {\\r\\n    border-left: 2px solid red;\\r\\n}`\\r\\nlet htmlContentRadius = `<section class=\\"containerG\\">\\r\\n    <div class=\\"cell round centerFlex\\">round</div>\\r\\n    <div class=\\"cell opposite  centerFlex\\">opposite</div>\\r\\n    <div class=\\"cell different centerFlex\\">different</div>\\r\\n</section>`\\r\\n    let cssContentRadius = `.containerG {\\r\\n    box-sizing: border-box;\\r\\n    height: auto;\\r\\n    width: 100%;\\r\\n    border: 1px solid gray;\\r\\n    padding: 1em;\\r\\n    display: flex;\\r\\n    gap: 1em;\\r\\n}\\r\\n.centerFlex {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n.cell {\\r\\n    border: 1px solid teal;\\r\\n    padding: 0.5em;\\r\\n    width: 10%;\\r\\n    height: 50px;\\r\\n}\\r\\n.round {\\r\\n    border-radius: 50%;\\r\\n}\\r\\n.opposite {\\r\\n    border-radius: 50% 70%;\\r\\n}\\r\\n.different {\\r\\n    border-radius: 10% 20% 30% 40%;\\r\\n}\\r\\n`\\r\\n\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n    .cell {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        border: 1px solid teal;\\r\\n        height: auto;\\r\\n    }\\r\\n    .grid {\\r\\n        display: grid;\\r\\n        gap: 0.1em;\\r\\n        height: 300px;\\r\\n        width: 300px;\\r\\n        border: 1px solid gray;\\r\\n        padding: 0.1em;\\r\\n        margin: auto;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Internet Technologies</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/border\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Border\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#syntax\\">Syntax</a></li>\\r\\n                <li><a href=\\"#sides\\">Sides</a></li>\\r\\n                <li><a href=\\"#radius\\">Radius</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    \\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"syntax\\">Syntax</h6>\\r\\n            <p>\\r\\n               Border around an element is described using the <code>border</code> property which follows the following syntax:\\r\\n                <Highlight language={xml} code={`border = <line-width> <line-style> <color>`} let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n                where <code>line-width</code> is length, <code>line-style</code> can take one of the following values: <code>none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset</code>\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentSyntax} cssContent={cssContentSyntax} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"sides\\">Sides</h6>\\r\\n            <p>\\r\\n                Just like <code>margin</code> and <code>padding</code>, <code>border</code> has side-versions as well, namely <code>border-left, border-right, border-top, border-bottom</code>.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentSides} cssContent={cssContentSides} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"radius\\">Radius</h6>\\r\\n            <p>\\r\\n               The <code>border-radius</code> property sets radius at the corners. The corners can be referenced using <code>border-bottom-left-radius, border-bottom-right-radius, border-top-left-radius, border-top-right-radius</code>. An ellipse is used to construct the curve which has two radii.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentRadius} cssContent={cssContentRadius} jsContent={\\"\\"} />\\r\\n    \\r\\n    <!-- <Card>\\r\\n        <Content>\\r\\n            <Highlight language={xml} code={code2} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card> -->\\r\\n    <h5>Questions</h5>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">Apply these border properties to resume.</div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAuMI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAC,CAAE,iBAAG,CACF,OAAO,CAAE,GACb,CACQ,iBAAE,CAAE,iBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,iBAAG,CACC,SAAS,CAAE,KACf,CACA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CAKA,gBAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB,CACA,wBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb"}'
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
  set_store_value(currentPath, $currentPath = "Border", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let htmlContentSyntax = `<section class="container">
    <div class="cell none centerFlex">none</div>
    <div class="cell hidden centerFlex">hidden</div>
    <div class="cell dotted centerFlex">dotted</div>
    <div class="cell dashed centerFlex">dashed</div>
    <div class="cell solid centerFlex">solid</div>
    <div class="cell double centerFlex">double</div>
    <div class="cell groove centerFlex">groove</div>
    <div class="cell ridge centerFlex">ridge</div>
    <div class="cell inset centerFlex">inset</div>
    <div class="cell outset centerFlex">outset</div>
</section>`;
  let cssContentSyntax = `.container {
    box-sizing: border-box;
    height: 120px;
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
.none {
    border: 2px none red;
}
.hidden {
    border: 2px hidden red;
}
.dotted {
    border: 2px dotted red;
}
.dashed {
    border: 2px dashed red;
}
.solid {
    border: 2px solid red;
}
.double {
    border: 2px double red;
}
.groove {
    border: 2px groove red;
}
.ridge {
    border: 2px ridge red;
}
.inset {
    border: 2px inset red;
}
.outset {
    border: 2px outset red;
}`;
  let htmlContentSides = `<section class="container">
    <div class="cell top centerFlex">top</div>
    <div class="cell right centerFlex">right</div>
    <div class="cell bottom centerFlex">bottom</div>
    <div class="cell left centerFlex">left</div>
</section>`;
  let cssContentSides = `.container {
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
    padding: 0.5em;
}
.top {
    border-top: 2px solid red;
}
.right {
    border-right: 2px solid red;
}
.bottom {
    border-bottom: 2px solid red;
}
.left {
    border-left: 2px solid red;
}`;
  let htmlContentRadius = `<section class="containerG">
    <div class="cell round centerFlex">round</div>
    <div class="cell opposite  centerFlex">opposite</div>
    <div class="cell different centerFlex">different</div>
</section>`;
  let cssContentRadius = `.containerG {
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
.round {
    border-radius: 50%;
}
.opposite {
    border-radius: 50% 70%;
}
.different {
    border-radius: 10% 20% 30% 40%;
}
`;
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-jv14vb_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/border"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-jv14vb_END -->`, ""} <article class="svelte-1ptklpl">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1ptklpl" data-svelte-h="svelte-1i1fte4">Border</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1ptklpl" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-1owaycd"><li class="svelte-1ptklpl"><a href="#syntax" class="svelte-1ptklpl">Syntax</a></li> <li class="svelte-1ptklpl"><a href="#sides" class="svelte-1ptklpl">Sides</a></li> <li class="svelte-1ptklpl"><a href="#radius" class="svelte-1ptklpl">Radius</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="syntax" class="svelte-1ptklpl" data-svelte-h="svelte-1i5r2j6">Syntax</h6> <p class="svelte-1ptklpl">Border around an element is described using the <code data-svelte-h="svelte-1vmbaca">border</code> property which follows the following syntax:
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `border = <line-width> <line-style> <color>`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                where <code data-svelte-h="svelte-rdsvdn">line-width</code> is length, <code data-svelte-h="svelte-fy9c7i">line-style</code> can take one of the following values: <code data-svelte-h="svelte-1frc3zd">none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset</code></p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentSyntax,
      cssContent: cssContentSyntax,
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="sides" class="svelte-1ptklpl" data-svelte-h="svelte-16b0axy">Sides</h6> <p class="svelte-1ptklpl" data-svelte-h="svelte-1cljp85">Just like <code>margin</code> and <code>padding</code>, <code>border</code> has side-versions as well, namely <code>border-left, border-right, border-top, border-bottom</code>.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentSides,
      cssContent: cssContentSides,
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="radius" class="svelte-1ptklpl" data-svelte-h="svelte-a61haq">Radius</h6> <p class="svelte-1ptklpl" data-svelte-h="svelte-18nngwb">The <code>border-radius</code> property sets radius at the corners. The corners can be referenced using <code>border-bottom-left-radius, border-bottom-right-radius, border-top-left-radius, border-top-right-radius</code>. An ellipse is used to construct the curve which has two radii.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentRadius,
      cssContent: cssContentRadius,
      jsContent: ""
    },
    {},
    {}
  )}  <h5 class="svelte-1ptklpl" data-svelte-h="svelte-1984kyx">Questions</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1ptklpl" data-svelte-h="svelte-1pk1e0l">Apply these border properties to resume.</div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
