import { a as subscribe, e as set_store_value } from './utils-DH7689cv.js';
import { c as create_ssr_component, v as validate_component } from './ssr-Cv_bEuJL.js';
import { x as xml } from './xml-DVVcaHI4.js';
import { c as css } from './css-8DWL9UPi.js';
import { g as githubDark, a as github } from './github-dark-BC3MHtr2.js';
import { W as WebPractice } from './WebPractice-sTeZPA3c.js';
import { p as page } from './stores-CD1QeJjc.js';
import { C as Card } from './Card-w0EtY1mU.js';
import { C as Content } from './ActionIcons-CEcRhLH3.js';
import './Subheader-BwOM49vC.js';
import './client-CjdeEz1m.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-DCuXQBIu.js';
import { c as contentNav, a as contents } from './content-ChhWH1Ps.js';
import { P as Pathlist } from './Pathlist-VvNEpviv.js';
import { C as CourseNavigation } from './CourseNavigation-GbSn10Xu.js';
import { H as Highlight, L as LineNumbers } from './LineNumbers-DOWFXNhn.js';
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
import './exports-DuWZopOC.js';
import './_commonjsHelpers-B85MJLTf.js';

const css$1 = {
  code: "article.svelte-1ptklpl{display:flex;flex-direction:column;gap:0.5em}p.svelte-1ptklpl,li.svelte-1ptklpl{opacity:0.8}h4.svelte-1ptklpl{margin:0.5em 0}h6.svelte-1ptklpl{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}strong.svelte-1ptklpl{color:goldenrod;opacity:1}a.svelte-1ptklpl{cursor:pointer;text-decoration:none}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { tileGrid } from \\"$lib/utils/common/tile\\";\\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import {page} from \'$app/stores\';\\r\\n    import {onMount} from \'svelte\';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, {Body, Head, Row, Cell} from \'@smui/data-table\';\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from \'$lib/components/NavList.svelte\'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/internet/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Selectors\\";\\r\\n    $darkMode = false;\\r\\n    // tileGrid(5, 5)\\r\\n    let cssLayout = [];\\r\\n    let nDivs = 0;\\r\\n    let gridLayout;\\r\\n    let hasZero = false;\\r\\n    const generateLayout = () => {\\r\\n        let {grid, rectangleCount} = tileGrid(5, 5);\\r\\n        hasZero = 0;\\r\\n        for(let i = 0; i < grid.length; i++) {\\r\\n            for(let j = 0; j < grid[i].length; j++) {\\r\\n                if(grid[i][j] === 0) {\\r\\n                    hasZero = true;\\r\\n                    break;\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n        cssLayout = grid;\\r\\n        nDivs = rectangleCount;\\r\\n        // console.log(rectangleCount, grid);\\r\\n        let areas = \\"\\";\\r\\n        let rows = []\\r\\n        for(let i = 0; i < grid.length; i++) {\\r\\n            rows.push((grid[i].map((c) => \'item\' + c)).join(\\" \\"));\\r\\n        }\\r\\n        areas = rows.map(r => `\\"${r}\\"`).join(\\" \\");\\r\\n        // grid.map(row => `\\"${row.join(\\" \\")}\\"`).join(\\"\\\\n\\");\\r\\n        gridLayout.style.gridTemplateAreas = areas;\\r\\n    }   \\r\\n\\r\\n    onMount(() => {\\r\\n        //generateLayout();\\r\\n    });\\r\\n    let htmlContentSelector = `<section class=\\"container\\">\\r\\n    <h1>I\'m a red head.</h1>\\r\\n    <h2 class=\\"blue\\">I\'m blue subhead.</h2>\\r\\n    <p class=\\"gray blue\\">My class is blue, but I\'m not blue.</p>\\r\\n    <span class=\\"gray\\">Gray span.</span>\\r\\n    <p id=\\"golden\\">I\'m golden paragraph.</p>\\r\\n    <p>Normal paragraph</p>\\r\\n</section>`\\r\\n    let cssContentSelector = `h1 { color: red; }\\r\\nh2.blue { color: blue; }\\r\\n.gray { color: gray; }\\r\\n#golden { color: goldenrod; }\\r\\n.container :nth-child(2n) { background: yellow; }`\\r\\n\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n    .cell {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        border: 1px solid teal;\\r\\n        height: auto;\\r\\n    }\\r\\n    .grid {\\r\\n        display: grid;\\r\\n        gap: 0.1em;\\r\\n        height: 300px;\\r\\n        width: 300px;\\r\\n        border: 1px solid gray;\\r\\n        padding: 0.1em;\\r\\n        margin: auto;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Internet Technologies</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/selectors\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Selectors\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#simple\\">Simple Selectors</a></li>\\r\\n                <li><a href=\\"#class\\">Class Selectors</a></li>\\r\\n                <li><a href=\\"#generic\\">Generic Selectors</a></li>\\r\\n                <li><a href=\\"#id\\"><code>id</code> Selectors</a></li>\\r\\n                <li><a href=\\"#contextual\\">Contextual Selectors</a></li>\\r\\n                <li><a href=\\"#pseudo\\">Pseudo Classes</a></li>\\r\\n                <li><a href=\\"#universal\\">The Universal Selector</a></li>\\r\\n            </ol>\\r\\n            <p>A selector specifies the elements to which the style information applies. We have seen a form of selectors in previous chapters which uses <code>class</code> names. In this chapter, we\'ll see many other types of selectors.</p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    \\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"simple\\">Simple Selectors</h6>\\r\\n            <p>\\r\\n                We can use tag name as selector.\\r\\n                <Highlight language={css} code={`h1 { color: red;}`} let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n                Here all <code>h1</code> elements will be colored red.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    \\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"class\\">Class Selectors</h6>\\r\\n            <p>\\r\\n                To color some of the elements differently than what has been set above, we can use <code>class</code> selectors. For example,\\r\\n                <Highlight language={css} \\r\\n                code={`h1 { color: red; }\\r\\nh1.blue { color: blue;}`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n                In this case, all <code>h1</code> elements with <code>class=\\"blue\\"</code> will be colored blue and rest will be colored red.\\r\\n                <Highlight language={xml} \\r\\n                code={`<h1 class=\\"blue\\">I\'m blue not red.</h1>\\r\\n<p class=\\"blue\\">I have class blue, but I\'m not blue.</p>`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n            </p>\\r\\n\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"generic\\">Generic Selectors</h6>\\r\\n            <p>\\r\\n                Generic selectors use <code>class</code> name to apply the same style to all elements irrespective of their tag. For example,\\r\\n                <Highlight language={css} \\r\\n                code={`.red { color: red;}`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n                In this case, all <code>class</code> when set to <code>\\"red\\"</code> for any tag.\\r\\n                <Highlight language={xml} \\r\\n                code={`<h1 class=\\"red\\">I\'m h1 and red.</h1>\\r\\n<p class=\\"red\\">I\'m p and red as well.</p>`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n            </p>\\r\\n\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"id\\"><code>id</code> Selectors</h6>\\r\\n            <p>\\r\\n                In an HTML document, any element can be assigned <code>id</code>, just like <code>class</code>. While same <code>class</code> name can be given to many elements, <code>id</code> must be unique. In CSS, the selector for <code>id</code> has the form <code>#idname</code> For example,\\r\\n                <Highlight language={css} \\r\\n                code={`#red { color: red;}`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n                In this case, all <code>class</code> when set to <code>\\"red\\"</code> for any tag.\\r\\n                <Highlight language={xml} \\r\\n                code={`<h1 id=\\"red\\">I\'m red, because my id is red.</h1>\\r\\n<p class=\\"red\\">I\'m not red.</p>`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n            </p>\\r\\n\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"contextual\\">Contextual Selectors</h6>\\r\\n            <p>\\r\\n                The simplest form of contextual selector is the descendant selector. Element B is a <strong>descendant</strong> of element A if it appears in the content of A. In this situation, A is the ancestor of B.  For example,\\r\\n                <Highlight language={css} \\r\\n                code={`section p { color: red;}`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n                In this case, all <code>p</code> elements inside <code>section</code> will have color red.\\r\\n                <Highlight language={xml} \\r\\n                code={`<div><p>I\'m not red.</p></div>\\r\\n<section><p>I\'m red.</p></section>`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n            </p>\\r\\n            <p>\\r\\n                An element A is a <strong>child</strong> of another element B if it is a descendant and it is nested directly in that element. The element B is called the <strong>parent</strong> of A.\\r\\n                <Highlight language={xml} \\r\\n                code={`<section>\\r\\n    <p>I\'m child of section.</p>\\r\\n    <div>\\r\\n        <p>I\'m not child of section.</p>\\r\\n    </div>\\r\\n</section>`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n                <code>&gt;</code> is used as a child selector.\\r\\n                <Highlight language={css} \\r\\n                code={`section > p { color: red;}`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n                This sets the first <code>p</code> element with <code>color</code> red, but not the <code>p</code> inside <code>div</code>.\\r\\n            </p>\\r\\n            <p>\\r\\n                The <code>first-child</code> selector specifies the first child of the element to whose name it is atteched.\\r\\n                <Highlight language={xml} \\r\\n                code={`<div>\\r\\n    <p>I\'m red.</p>\\r\\n    <p>I\'m not red.</p>\\r\\n    <p>I\'m not red either.</p>\\r\\n</div>`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n                The following CSS only sets the first <code>p</code> to red.\\r\\n                <Highlight language={css} \\r\\n                code={`div:first-child { color: red;}`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n            </p>\\r\\n            <p>\\r\\n                The <code>last-child</code> selector specifies the last child of the element to whose name it is atteched.\\r\\n                <Highlight language={xml} \\r\\n                code={`<div>\\r\\n    <p>I\'m not red.</p>\\r\\n    <p>I\'m not red.</p>\\r\\n    <p>I\'m red.</p>\\r\\n</div>`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n                The following CSS only sets the last <code>p</code> to red.\\r\\n                <Highlight language={css} \\r\\n                code={`div:last-child { color: red;}`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n            </p>\\r\\n            <p>\\r\\n                The <code>:nth-child()</code> selector specifies the nth child of the element to whose name it is atteched. <code>nth-child()</code> takes a single argument that describes a pattern for matching element indices in a list of siblings. Element indices are 1-based.\\r\\n                <Highlight language={xml} \\r\\n                code={`<div>\\r\\n    <p>I\'m red.</p>\\r\\n    <p>I\'m not red.</p>\\r\\n    <p>I\'m red.</p>\\r\\n</div>`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n                The following CSS only sets odd children to red.\\r\\n                <Highlight language={css} \\r\\n                code={`div:nth-child(2n + 1) { color: red;}`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"pseudo\\">Pseudo Classes</h6>\\r\\n            <p>\\r\\n                Pseudo classes are <em>applied</em> to existing elements by specifying the effect after :. For example, The two pseudo classes for styling links are <code>link</code> and <code>visited</code>. The <code>link</code> pseudo class is used to style a link that has not been selected; <code>visited</code> is used to style a link that previously has been selected.\\r\\n                <Highlight language={css} \\r\\n                code={`a:link { color: teal;}\\r\\na:visited { color: red; }`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n            </p>\\r\\n            <p>\\r\\n                The <code>hover</code> pseudo class is used often. When mouse is over an element, <code>hover</code> effect is applied.\\r\\n                <Highlight language={css} \\r\\n                code={`p:hover { color: red;}`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"universal\\">The Universal Selector</h6>\\r\\n            <p>\\r\\n                The universal selector, denoted by an asterisk (*), applies its style to all elements in a document. \\r\\n                <Highlight language={css} \\r\\n                code={`* { margin: 0; }`} \\r\\n                let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContentSelector} cssContent={cssContentSelector} jsContent={\\"\\"} />\\r\\n    \\r\\n    <!-- <Card>\\r\\n        <Content>\\r\\n            <Highlight language={xml} code={code2} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card> -->\\r\\n    <!-- <h5>Questions</h5>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">Apply these border properties to resume.</div>\\r\\n        </Content>\\r\\n    </Card> -->\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAyEI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAC,CAAE,iBAAG,CACF,OAAO,CAAE,GACb,CACQ,iBAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,qBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb,CACA,gBAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB"}'
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
  set_store_value(currentPath, $currentPath = "Selectors", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let htmlContentSelector = `<section class="container">
    <h1>I'm a red head.</h1>
    <h2 class="blue">I'm blue subhead.</h2>
    <p class="gray blue">My class is blue, but I'm not blue.</p>
    <span class="gray">Gray span.</span>
    <p id="golden">I'm golden paragraph.</p>
    <p>Normal paragraph</p>
</section>`;
  let cssContentSelector = `h1 { color: red; }
h2.blue { color: blue; }
.gray { color: gray; }
#golden { color: goldenrod; }
.container :nth-child(2n) { background: yellow; }`;
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-p5eim1_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/selectors"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-p5eim1_END -->`, ""} <article class="svelte-1ptklpl">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1ptklpl" data-svelte-h="svelte-ex1rms">Selectors</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1ptklpl" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-19hx7ow"><li class="svelte-1ptklpl"><a href="#simple" class="svelte-1ptklpl">Simple Selectors</a></li> <li class="svelte-1ptklpl"><a href="#class" class="svelte-1ptklpl">Class Selectors</a></li> <li class="svelte-1ptklpl"><a href="#generic" class="svelte-1ptklpl">Generic Selectors</a></li> <li class="svelte-1ptklpl"><a href="#id" class="svelte-1ptklpl"><code>id</code> Selectors</a></li> <li class="svelte-1ptklpl"><a href="#contextual" class="svelte-1ptklpl">Contextual Selectors</a></li> <li class="svelte-1ptklpl"><a href="#pseudo" class="svelte-1ptklpl">Pseudo Classes</a></li> <li class="svelte-1ptklpl"><a href="#universal" class="svelte-1ptklpl">The Universal Selector</a></li></ol> <p class="svelte-1ptklpl" data-svelte-h="svelte-tlfd7z">A selector specifies the elements to which the style information applies. We have seen a form of selectors in previous chapters which uses <code>class</code> names. In this chapter, we&#39;ll see many other types of selectors.</p>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="simple" class="svelte-1ptklpl" data-svelte-h="svelte-1wobjgk">Simple Selectors</h6> <p class="svelte-1ptklpl">We can use tag name as selector.
                ${validate_component(Highlight, "Highlight").$$render($$result, { language: css, code: `h1 { color: red;}` }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })}
                Here all <code data-svelte-h="svelte-clsj7r">h1</code> elements will be colored red.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="class" class="svelte-1ptklpl" data-svelte-h="svelte-1h0tw24">Class Selectors</h6> <p class="svelte-1ptklpl">To color some of the elements differently than what has been set above, we can use <code data-svelte-h="svelte-899e0m">class</code> selectors. For example,
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `h1 { color: red; }
h1.blue { color: blue;}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                In this case, all <code data-svelte-h="svelte-clsj7r">h1</code> elements with <code data-svelte-h="svelte-4i8hb3">class=&quot;blue&quot;</code> will be colored blue and rest will be colored red.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `<h1 class="blue">I'm blue not red.</h1>
<p class="blue">I have class blue, but I'm not blue.</p>`
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
          return `<h6 id="generic" class="svelte-1ptklpl" data-svelte-h="svelte-a8b6yq">Generic Selectors</h6> <p class="svelte-1ptklpl">Generic selectors use <code data-svelte-h="svelte-899e0m">class</code> name to apply the same style to all elements irrespective of their tag. For example,
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `.red { color: red;}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                In this case, all <code data-svelte-h="svelte-899e0m">class</code> when set to <code data-svelte-h="svelte-okgpnl">&quot;red&quot;</code> for any tag.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `<h1 class="red">I'm h1 and red.</h1>
<p class="red">I'm p and red as well.</p>`
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
          return `<h6 id="id" class="svelte-1ptklpl" data-svelte-h="svelte-yj7p4z"><code>id</code> Selectors</h6> <p class="svelte-1ptklpl">In an HTML document, any element can be assigned <code data-svelte-h="svelte-xc6dj1">id</code>, just like <code data-svelte-h="svelte-899e0m">class</code>. While same <code data-svelte-h="svelte-899e0m">class</code> name can be given to many elements, <code data-svelte-h="svelte-xc6dj1">id</code> must be unique. In CSS, the selector for <code data-svelte-h="svelte-xc6dj1">id</code> has the form <code data-svelte-h="svelte-j8dgjb">#idname</code> For example,
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `#red { color: red;}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                In this case, all <code data-svelte-h="svelte-899e0m">class</code> when set to <code data-svelte-h="svelte-okgpnl">&quot;red&quot;</code> for any tag.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `<h1 id="red">I'm red, because my id is red.</h1>
<p class="red">I'm not red.</p>`
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
          return `<h6 id="contextual" class="svelte-1ptklpl" data-svelte-h="svelte-1s62iz0">Contextual Selectors</h6> <p class="svelte-1ptklpl">The simplest form of contextual selector is the descendant selector. Element B is a <strong class="svelte-1ptklpl" data-svelte-h="svelte-gun7jf">descendant</strong> of element A if it appears in the content of A. In this situation, A is the ancestor of B.  For example,
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `section p { color: red;}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                In this case, all <code data-svelte-h="svelte-1vekeb2">p</code> elements inside <code data-svelte-h="svelte-14gpkwf">section</code> will have color red.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `<div><p>I'm not red.</p></div>
<section><p>I'm red.</p></section>`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</p> <p class="svelte-1ptklpl">An element A is a <strong class="svelte-1ptklpl" data-svelte-h="svelte-g339mk">child</strong> of another element B if it is a descendant and it is nested directly in that element. The element B is called the <strong class="svelte-1ptklpl" data-svelte-h="svelte-1sc3t68">parent</strong> of A.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `<section>
    <p>I'm child of section.</p>
    <div>
        <p>I'm not child of section.</p>
    </div>
</section>`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )} <code data-svelte-h="svelte-1shd99i">&gt;</code> is used as a child selector.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `section > p { color: red;}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                This sets the first <code data-svelte-h="svelte-1vekeb2">p</code> element with <code data-svelte-h="svelte-v9hqaf">color</code> red, but not the <code data-svelte-h="svelte-1vekeb2">p</code> inside <code data-svelte-h="svelte-3f20o3">div</code>.</p> <p class="svelte-1ptklpl">The <code data-svelte-h="svelte-1tcizpd">first-child</code> selector specifies the first child of the element to whose name it is atteched.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `<div>
    <p>I'm red.</p>
    <p>I'm not red.</p>
    <p>I'm not red either.</p>
</div>`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                The following CSS only sets the first <code data-svelte-h="svelte-1vekeb2">p</code> to red.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `div:first-child { color: red;}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</p> <p class="svelte-1ptklpl">The <code data-svelte-h="svelte-1bneqhn">last-child</code> selector specifies the last child of the element to whose name it is atteched.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `<div>
    <p>I'm not red.</p>
    <p>I'm not red.</p>
    <p>I'm red.</p>
</div>`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                The following CSS only sets the last <code data-svelte-h="svelte-1vekeb2">p</code> to red.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `div:last-child { color: red;}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</p> <p class="svelte-1ptklpl">The <code data-svelte-h="svelte-2jhnok">:nth-child()</code> selector specifies the nth child of the element to whose name it is atteched. <code data-svelte-h="svelte-1ig1qtk">nth-child()</code> takes a single argument that describes a pattern for matching element indices in a list of siblings. Element indices are 1-based.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `<div>
    <p>I'm red.</p>
    <p>I'm not red.</p>
    <p>I'm red.</p>
</div>`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                The following CSS only sets odd children to red.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `div:nth-child(2n + 1) { color: red;}`
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
          return `<h6 id="pseudo" class="svelte-1ptklpl" data-svelte-h="svelte-hlwlge">Pseudo Classes</h6> <p class="svelte-1ptklpl">Pseudo classes are <em data-svelte-h="svelte-1nd9zl1">applied</em> to existing elements by specifying the effect after :. For example, The two pseudo classes for styling links are <code data-svelte-h="svelte-1n61io0">link</code> and <code data-svelte-h="svelte-coac50">visited</code>. The <code data-svelte-h="svelte-1n61io0">link</code> pseudo class is used to style a link that has not been selected; <code data-svelte-h="svelte-coac50">visited</code> is used to style a link that previously has been selected.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `a:link { color: teal;}
a:visited { color: red; }`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</p> <p class="svelte-1ptklpl">The <code data-svelte-h="svelte-n4hqvc">hover</code> pseudo class is used often. When mouse is over an element, <code data-svelte-h="svelte-n4hqvc">hover</code> effect is applied.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `p:hover { color: red;}`
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
          return `<h6 id="universal" class="svelte-1ptklpl" data-svelte-h="svelte-1rllrqs">The Universal Selector</h6> <p class="svelte-1ptklpl">The universal selector, denoted by an asterisk (*), applies its style to all elements in a document. 
                ${validate_component(Highlight, "Highlight").$$render($$result, { language: css, code: `* { margin: 0; }` }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })}</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentSelector,
      cssContent: cssContentSelector,
      jsContent: ""
    },
    {},
    {}
  )}  </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CPEHW5dK.js.map
