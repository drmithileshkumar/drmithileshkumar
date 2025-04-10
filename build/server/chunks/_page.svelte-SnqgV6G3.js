import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component } from './ssr2-CDgUAJs6.js';
import { a as githubDark, g as github } from './github-dark-DeAsbMVW.js';
import { p as page } from './stores3-kDd52ji6.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import './Subheader-DEm_inUP.js';
import './client-CAo-6NMJ.js';
import { d as darkMode, c as currentPath, n as navList } from './stores-Cecnyqn_.js';
import { c as contentNav, a as contents } from './content2-ChhWH1Ps.js';
import { W as WebPractice } from './WebPractice-DZHtRtZk.js';
import { P as Pathlist } from './Pathlist-B9wgcfC1.js';
import { C as CourseNavigation } from './CourseNavigation-DznSxbmO.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import './exports-DKuYoYKl.js';
import './index2-D2s-XE5r.js';
import './Segment-CO7DIWEy.js';
import './ContextFragment-CedcH2TL.js';
import './CommonLabel-CFEgn-mu.js';
import './Suffix-CtI6fDI6.js';
import './Button-DTp4JSRw.js';
import './Ripple-N--aPaMn.js';
import '@codemirror/lang-javascript';
import '@codemirror/lang-xml';
import '@codemirror/lang-css';

const css = {
  code: "article.svelte-beztui{display:flex;flex-direction:column;gap:0.5em}p.svelte-beztui,li.svelte-beztui{opacity:0.8}h4.svelte-beztui{margin:0.5em 0}h6.svelte-beztui{font-size:1em;margin:0.5em 0;color:rgb(240, 85, 0)}a.svelte-beztui{cursor:pointer;text-decoration:none}.question.svelte-beztui{cursor:pointer;padding:0.3em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { slide } from 'svelte/transition';\\r\\n\\timport { quintOut } from 'svelte/easing';\\r\\n\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Link from '$lib/ui/Link.svelte';\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/internet/content\\";\\r\\n\\timport WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n\\timport DataTable, {Head, Body, Row, Cell} from \\"@smui/data-table\\";\\r\\n    import Pathlist from '$lib/components/Pathlist.svelte';\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Lists\\";\\r\\n    $darkMode = false;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    let htmlContent = \`<!DOCTYPE html> \\r\\n<!-- File name and document purpose --> \\r\\n<html lang = \\"en\\">   \\r\\n    <head>     \\r\\n        <title> A title for the document </title>\\r\\n        <meta charset = \\"utf-8\\" />     \\r\\n        <!--include external resources here like adsense, javascript, styles-->\\r\\n    </head>   \\r\\n    <body>   \\r\\n        <p>There are three types of lists</p>\\r\\n        <ol>\\r\\n            <li>Unordered List</li>\\r\\n            <li>Ordered List</li>\\r\\n            <li>Definition List</li>\\r\\n        </ol>\\r\\n        <p>Above is an ordered list. It's unordered version will be</p>\\r\\n        <ul>\\r\\n            <li>Unordered List</li>\\r\\n            <li>Ordered List</li>\\r\\n            <li>Definition List</li>\\r\\n        </ul>\\r\\n        <p>Definition list has title and data for each item.</p>\\r\\n        <dl>\\r\\n            <dt>Unordered list</dt>\\r\\n            <dd>Lists are marked by bullets.</dd>\\r\\n            <dt>Ordered list</dt>\\r\\n            <dd>Lists are marked by numbers.</dd>\\r\\n            <dt>Definition list</dt>\\r\\n            <dd>List items have title and data.</dd>    \\r\\n        </dl>\\r\\n    </body> \\r\\n</html>\`\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(240, 85, 0);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Internet Technologies</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/wwwhtml/html/lists\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Lists\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#unorderedList\\">Unordered List</a></li>\\r\\n                <li><a href=\\"#orderedList\\">Ordered List</a></li>\\r\\n                <li><a href=\\"#definitionList\\">Definition List</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <p>\\r\\n                Lists are used to format content in some order, usually top to bottom with markers placed in front of each item.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContent} cssContent={\\"\\"} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"unorderedList\\">Unordered List</h6>\\r\\n            <p>\\r\\n                Unordered list is created using the tag <code>ul</code> (unordered list). Inside, the items are placed inside individual item tags <code>li</code> (list item).\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"orderedList\\">Ordered List</h6>\\r\\n            <p>\\r\\n                Ordered list is created using the tag <code>ol</code> (ordered list). Inside, the items are placed inside individual item tags <code>li</code> (list item).\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"definitionList\\">Definition List</h6>\\r\\n            <p>\\r\\n                Definition list is created using the tag <code>dl</code> (definition list). Inside, the items are placed inside individual item tags <code>dt</code> (definition title) and <code>dd</code> (definition data).\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <h4>Exercise</h4>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Groceries</h6>\\r\\n            <div class=\\"question\\">\\r\\n                \\r\\n                    Create a list of groceries. The primary list is of categories. The secondary lists are items in the categories.\\r\\n                \\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>HTML tags</h6>\\r\\n            <div class=\\"question\\">\\r\\n                \\r\\n                    Use definition list to create a list that defines <code>p, sub, sup, code, pre, img, a</code> tags.\\r\\n                \\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <h4>Assignment</h4>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                Create a section for education in your resume. Use list to show the list of your exams like Class X, Class XII etc.\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAiEI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,eAAC,CAAE,gBAAG,CACF,OAAO,CAAE,GACb,CACQ,gBAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,gBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CACzB,CAKA,eAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB,CACA,uBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb"}`
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
  set_store_value(currentPath, $currentPath = "Lists", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let htmlContent = `<!DOCTYPE html> 
<!-- File name and document purpose --> 
<html lang = "en">   
    <head>     
        <title> A title for the document </title>
        <meta charset = "utf-8" />     
        <!--include external resources here like adsense, javascript, styles-->
    </head>   
    <body>   
        <p>There are three types of lists</p>
        <ol>
            <li>Unordered List</li>
            <li>Ordered List</li>
            <li>Definition List</li>
        </ol>
        <p>Above is an ordered list. It's unordered version will be</p>
        <ul>
            <li>Unordered List</li>
            <li>Ordered List</li>
            <li>Definition List</li>
        </ul>
        <p>Definition list has title and data for each item.</p>
        <dl>
            <dt>Unordered list</dt>
            <dd>Lists are marked by bullets.</dd>
            <dt>Ordered list</dt>
            <dd>Lists are marked by numbers.</dd>
            <dt>Definition list</dt>
            <dd>List items have title and data.</dd>    
        </dl>
    </body> 
</html>`;
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1h7cwkd_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/lists"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1h7cwkd_END -->`, ""} <article class="svelte-beztui">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-beztui" data-svelte-h="svelte-1gv96er">Lists</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-beztui" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-64z3l3"><li class="svelte-beztui"><a href="#unorderedList" class="svelte-beztui">Unordered List</a></li> <li class="svelte-beztui"><a href="#orderedList" class="svelte-beztui">Ordered List</a></li> <li class="svelte-beztui"><a href="#definitionList" class="svelte-beztui">Definition List</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-beztui" data-svelte-h="svelte-a0x6z">Lists are used to format content in some order, usually top to bottom with markers placed in front of each item.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="unorderedList" class="svelte-beztui" data-svelte-h="svelte-1rwr9wy">Unordered List</h6> <p class="svelte-beztui" data-svelte-h="svelte-12he7pb">Unordered list is created using the tag <code>ul</code> (unordered list). Inside, the items are placed inside individual item tags <code>li</code> (list item).</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="orderedList" class="svelte-beztui" data-svelte-h="svelte-12gi53s">Ordered List</h6> <p class="svelte-beztui" data-svelte-h="svelte-1ji8m2r">Ordered list is created using the tag <code>ol</code> (ordered list). Inside, the items are placed inside individual item tags <code>li</code> (list item).</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="definitionList" class="svelte-beztui" data-svelte-h="svelte-qgi96e">Definition List</h6> <p class="svelte-beztui" data-svelte-h="svelte-1i7gbx5">Definition list is created using the tag <code>dl</code> (definition list). Inside, the items are placed inside individual item tags <code>dt</code> (definition title) and <code>dd</code> (definition data).</p>`;
        }
      })}`;
    }
  })} <h4 class="svelte-beztui" data-svelte-h="svelte-1yto96c">Exercise</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-beztui" data-svelte-h="svelte-1lggxmb">Groceries</h6> <div class="question svelte-beztui" data-svelte-h="svelte-gk5khy">Create a list of groceries. The primary list is of categories. The secondary lists are items in the categories.</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-beztui" data-svelte-h="svelte-1r4sj6k">HTML tags</h6> <div class="question svelte-beztui" data-svelte-h="svelte-1df74es">Use definition list to create a list that defines <code>p, sub, sup, code, pre, img, a</code> tags.</div>`;
        }
      })}`;
    }
  })} <h4 class="svelte-beztui" data-svelte-h="svelte-hc8mgz">Assignment</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-beztui" data-svelte-h="svelte-16q5n00">Create a section for education in your resume. Use list to show the list of your exams like Class X, Class XII etc.</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-SnqgV6G3.js.map
