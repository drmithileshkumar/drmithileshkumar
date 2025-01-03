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
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { tileGrid } from \\"$lib/utils/common/tile\\";\\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import {page} from \'$app/stores\';\\r\\n    import {onMount} from \'svelte\';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, {Body, Head, Row, Cell} from \'@smui/data-table\';\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from \'$lib/components/NavList.svelte\'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/internet/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Responsive Design\\";\\r\\n    $darkMode = false;\\r\\n    // tileGrid(5, 5)\\r\\n    let cssLayout = [];\\r\\n    let nDivs = 0;\\r\\n    let gridLayout;\\r\\n    let hasZero = false;\\r\\n    const generateLayout = () => {\\r\\n        let {grid, rectangleCount} = tileGrid(5, 5);\\r\\n        hasZero = 0;\\r\\n        for(let i = 0; i < grid.length; i++) {\\r\\n            for(let j = 0; j < grid[i].length; j++) {\\r\\n                if(grid[i][j] === 0) {\\r\\n                    hasZero = true;\\r\\n                    break;\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n        cssLayout = grid;\\r\\n        nDivs = rectangleCount;\\r\\n        // console.log(rectangleCount, grid);\\r\\n        let areas = \\"\\";\\r\\n        let rows = []\\r\\n        for(let i = 0; i < grid.length; i++) {\\r\\n            rows.push((grid[i].map((c) => \'item\' + c)).join(\\" \\"));\\r\\n        }\\r\\n        areas = rows.map(r => `\\"${r}\\"`).join(\\" \\");\\r\\n        // grid.map(row => `\\"${row.join(\\" \\")}\\"`).join(\\"\\\\n\\");\\r\\n        gridLayout.style.gridTemplateAreas = areas;\\r\\n    }   \\r\\n\\r\\n    onMount(() => {\\r\\n        //generateLayout();\\r\\n    });\\r\\n    let htmlContentPosition = `<section class=\\"container\\">\\r\\n    <div class=\\"option\\">Option 1</div>\\r\\n    <div class=\\"option\\">Option 2</div>\\r\\n    <div class=\\"option\\">Option 3</div>\\r\\n    <div class=\\"option\\">Option 4</div>\\r\\n</section>`\\r\\n    let cssContentPosition = `.container {\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 1fr 1fr 1fr;\\r\\n    gap: 1em;\\r\\n}\\r\\n@media screen and (max-width: 700px) {\\r\\n    .container {\\r\\n        display: grid;\\r\\n        grid-template-columns: 1fr 1fr;\\r\\n    }\\r\\n}\\r\\n@media screen and (max-width: 500px) {\\r\\n    .container {\\r\\n        display: grid;\\r\\n        grid-template-columns: 1fr;\\r\\n    }\\r\\n}\\r\\n.option {\\r\\n    border: 1px solid;\\r\\n    padding: 0.5em;\\r\\n}`\\r\\n\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n    .cell {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        border: 1px solid teal;\\r\\n        height: auto;\\r\\n    }\\r\\n    .grid {\\r\\n        display: grid;\\r\\n        gap: 0.1em;\\r\\n        height: 300px;\\r\\n        width: 300px;\\r\\n        border: 1px solid gray;\\r\\n        padding: 0.1em;\\r\\n        margin: auto;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Internet Technologies</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/position\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Responsive Design\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#media\\">Media Queries</a></li>\\r\\n                <li><a href=\\"#layout\\">Responsive layout</a></li>\\r\\n                <li><a href=\\"#images\\">Responsive images</a></li>\\r\\n                <li><a href=\\"#typography\\">Responsive typography</a></li>\\r\\n                <li><a href=\\"#viewport\\">Viewport</li>\\r\\n            </ol>\\r\\n            <p>Responsive design is a way to design your web application that renders well on all screen sizes and resolutions.</p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    \\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"media\\">Media Queries</h6>\\r\\n            <p>\\r\\n                Media queries allow us to run a series of tests (e.g. whether the user\'s screen is greater than a certain width, or a certain resolution) and apply CSS selectively to style the page appropriately for the user\'s needs.\\r\\n                <Highlight language={css} \\r\\n                code={`@media screen and (min-width: 500px) {\\r\\n    .container {\\r\\n        display: grid;\\r\\n    }\\r\\n}`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n                In this case, <code>.container</code> will set <code>display</code> to <code>grid</code> when the screen width is greater than or equal to 500px.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    \\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"layout\\">Responsive layout</h6>\\r\\n            <p>\\r\\n                Responsive layout of a page makes sure that the page changes when the screen changes. The most used feature is changing between <code>flex</code> and <code>grid</code> using media query.\\r\\n                <Highlight language={css} \\r\\n                code={`.container { \\r\\n    display: grid; \\r\\n}\\r\\n@media screen and (min-width: 500px) {\\r\\n    .container {\\r\\n        display: flex;\\r\\n    }\\r\\n}`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n            </p>\\r\\n\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"images\\">Responsive images</h6>\\r\\n            <p>\\r\\n                Images should have responsive width and height properties.\\r\\n                <Highlight language={css} \\r\\n                code={`img { max-width: 100%; }\\r\\n}`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n                The above ensures that the image does not overflow its container.\\r\\n            </p>\\r\\n\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"typography\\">Responsive typography</h6>\\r\\n            <p>\\r\\n                Text can be set based on media queries.\\r\\n                <Highlight language={css} \\r\\n                code={`.container { \\r\\n    h1: 4em; \\r\\n}\\r\\n@media screen and (max-width: 500px) {\\r\\n    .container {\\r\\n        display: 1.5em;\\r\\n    }\\r\\n}`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n            </p>\\r\\n\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"viewport\\">Viewport</h6>\\r\\n            <p>\\r\\n                This viewport meta tag tells mobile browsers that they should set the width of the viewport to the device width, and scale the document to 100% of its intended size, which shows the document at the mobile-optimized size that you intended.\\r\\n                <Highlight language={xml} \\r\\n                code={`<meta name=\\"viewport\\" content=\\"width=device-width,initial-scale=1\\" />`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n            </p>\\r\\n\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentPosition} cssContent={cssContentPosition} jsContent={\\"\\"} />\\r\\n    \\r\\n    <!-- <Card>\\r\\n        <Content>\\r\\n            <Highlight language={xml} code={code2} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card> -->\\r\\n    <h5>Questions</h5>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">Make your resume, college, and hometown pages responsive.</div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAuFI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAC,CAAE,iBAAG,CACF,OAAO,CAAE,GACb,CACQ,iBAAE,CAAE,iBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,iBAAG,CACC,SAAS,CAAE,KACf,CACA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CAKA,gBAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB,CACA,wBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb"}'
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
  set_store_value(currentPath, $currentPath = "Responsive Design", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let htmlContentPosition = `<section class="container">
    <div class="option">Option 1</div>
    <div class="option">Option 2</div>
    <div class="option">Option 3</div>
    <div class="option">Option 4</div>
</section>`;
  let cssContentPosition = `.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1em;
}
@media screen and (max-width: 700px) {
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}
@media screen and (max-width: 500px) {
    .container {
        display: grid;
        grid-template-columns: 1fr;
    }
}
.option {
    border: 1px solid;
    padding: 0.5em;
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
  )} <h4 class="svelte-1ptklpl" data-svelte-h="svelte-1bghvg2">Responsive Design</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1ptklpl" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-1eg4361"><li class="svelte-1ptklpl"><a href="#media" class="svelte-1ptklpl">Media Queries</a></li> <li class="svelte-1ptklpl"><a href="#layout" class="svelte-1ptklpl">Responsive layout</a></li> <li class="svelte-1ptklpl"><a href="#images" class="svelte-1ptklpl">Responsive images</a></li> <li class="svelte-1ptklpl"><a href="#typography" class="svelte-1ptklpl">Responsive typography</a></li> <li class="svelte-1ptklpl"><a href="#viewport" class="svelte-1ptklpl">Viewport</a></li></ol> <p class="svelte-1ptklpl" data-svelte-h="svelte-1xbvsjw">Responsive design is a way to design your web application that renders well on all screen sizes and resolutions.</p>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="media" class="svelte-1ptklpl" data-svelte-h="svelte-777jh2">Media Queries</h6> <p class="svelte-1ptklpl">Media queries allow us to run a series of tests (e.g. whether the user&#39;s screen is greater than a certain width, or a certain resolution) and apply CSS selectively to style the page appropriately for the user&#39;s needs.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `@media screen and (min-width: 500px) {
    .container {
        display: grid;
    }
}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                In this case, <code data-svelte-h="svelte-gh48vl">.container</code> will set <code data-svelte-h="svelte-1sqpd20">display</code> to <code data-svelte-h="svelte-lwg1k8">grid</code> when the screen width is greater than or equal to 500px.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="layout" class="svelte-1ptklpl" data-svelte-h="svelte-1xh4fbk">Responsive layout</h6> <p class="svelte-1ptklpl">Responsive layout of a page makes sure that the page changes when the screen changes. The most used feature is changing between <code data-svelte-h="svelte-5a9wff">flex</code> and <code data-svelte-h="svelte-lwg1k8">grid</code> using media query.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `.container { 
    display: grid; 
}
@media screen and (min-width: 500px) {
    .container {
        display: flex;
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
          return `<h6 id="images" class="svelte-1ptklpl" data-svelte-h="svelte-2je8ps">Responsive images</h6> <p class="svelte-1ptklpl">Images should have responsive width and height properties.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `img { max-width: 100%; }
}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                The above ensures that the image does not overflow its container.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="typography" class="svelte-1ptklpl" data-svelte-h="svelte-ateucu">Responsive typography</h6> <p class="svelte-1ptklpl">Text can be set based on media queries.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `.container { 
    h1: 4em; 
}
@media screen and (max-width: 500px) {
    .container {
        display: 1.5em;
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
          return `<h6 id="viewport" class="svelte-1ptklpl" data-svelte-h="svelte-k9m7i2">Viewport</h6> <p class="svelte-1ptklpl">This viewport meta tag tells mobile browsers that they should set the width of the viewport to the device width, and scale the document to 100% of its intended size, which shows the document at the mobile-optimized size that you intended.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `<meta name="viewport" content="width=device-width,initial-scale=1" />`
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
          return `<div class="question svelte-1ptklpl" data-svelte-h="svelte-esqoqa">Make your resume, college, and hometown pages responsive.</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BrRJdbnt.js.map
