import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component } from './ssr2-CDgUAJs6.js';
import { g as githubDark, a as github } from './github-dark-BC3MHtr2.js';
import { p as page } from './stores3-DPEAZJnM.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import { N as NavList } from './NavList-BiywRBoU.js';
import { d as darkMode, c as currentPath, n as navList } from './stores-Cecnyqn_.js';
import { c as contentNav, a as contents } from './content-BQQ-ySeG.js';
import { P as Pathlist } from './Pathlist-B9wgcfC1.js';
import { C as CourseNavigation } from './CourseNavigation-DznSxbmO.js';
import './client-k3u4ChD_.js';
import './exports-kR70XCWV.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import './Item-T2YrjSpA.js';
import './dispatch-BOSWPsEc.js';
import './Ripple-N--aPaMn.js';
import './Subheader-DEm_inUP.js';
import './Graphic-CnHJKmsY.js';
import './Svg-Dkxrus40.js';
import './IconButton-Bt4YIh4x.js';
import './index2-D2s-XE5r.js';

const css$1 = {
  code: "article.svelte-wl5xjl{display:flex;flex-direction:column;gap:0.5em}p.svelte-wl5xjl,li.svelte-wl5xjl{opacity:0.8}h4.svelte-wl5xjl,h5.svelte-wl5xjl{margin:0.5em 0}h5.svelte-wl5xjl{font-size:1.1em}h6.svelte-wl5xjl{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { slide } from 'svelte/transition';\\r\\n\\timport { quintOut } from 'svelte/easing';\\r\\n\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Link from '$lib/ui/Link.svelte';\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/algorithms/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n\\t\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Sorting Algorithms\\";\\r\\n    $darkMode = false;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    let code1=\`<!--Inline CSS-->\\r\\n<p style=\\"color: tomato;\\">I'm tomato</p>\`\\r\\n    let code2=\`<head>\\r\\n    <!---CSS from external file-->\\r\\n    <link rel=\\"stylesheet\\" href=\\"/app.css\\"> \\r\\n    <!--Document level CSS-->\\r\\n    <style>\\r\\n    /* set text color of p elements to tomato */\\r\\n        p {\\r\\n            color: tomato;\\r\\n        }\\r\\n    </style>\\r\\n</head>\`\\r\\n    let code3 = \`selector1 {\\r\\n    property1: value1;\\r\\n    property2: value2;\\r\\n}\\r\\nselector2 {\\r\\n    property3: value3;\\r\\n    property4: value4;\\r\\n}\`\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Algorithms</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/algorithms/sorting\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Sorting Algorithms\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h5>Contents</h5>\\r\\n            <NavList name=\\"{$navList[0].topics[0].name}\\" url=\\"{$navList[0].topics[0].url}\\" topics={$navList[0].topics[0].topics} expanded={false} />\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>What is sorting?</h6>\\r\\n            <p>\\r\\n                Sorting is rearranging data according to some order, usually <em>increasing</em> or <em>decreasing</em>.\\r\\n            </p>\\r\\n            <!-- <Highlight language={xml} code={code1} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight> -->\\r\\n            \\r\\n           \\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Various ideas used for sorting</h6>\\r\\n            <ul>\\r\\n                <li>Keep swapping larger numbers to the right.</li>\\r\\n                <li>Insert chosen number at right place.</li>\\r\\n                <li>Find the current largest number and place it correctly.</li>\\r\\n                <li>Divide the array into equal parts, sort them and merge.</li>\\r\\n                <li>Pick a number and shift smaller numbers to the left and larger numbers to the right.</li>\\r\\n                <li>If the array of positive integers are given that lie in a range, use a larger array to place them at their index.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Constraints</h6>\\r\\n            <ul>\\r\\n                <li>Speed</li>\\r\\n                <li>Work memory</li>\\r\\n                <li>Stability</li>\\r\\n                <li>Adaptability</li>\\r\\n                <li>Parallelization</li>\\r\\n                <li>Distributed data</li>\\r\\n                <li>Streamed data</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Types</h6>\\r\\n            <ul>\\r\\n                <li>Comparison-based\\r\\n                    <ul>\\r\\n                        <li>Bubble sort</li>\\r\\n                        <li>Insertion sort</li>\\r\\n                        <li>Merge sort</li>\\r\\n                        <li>Quick sort</li>\\r\\n                    </ul>\\r\\n                </li>\\r\\n                <li>Non-comparison-based\\r\\n                    <ul>\\r\\n                        <li>\\r\\n                            Bucket sort\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            Redix sort\\r\\n                        </li>\\r\\n                    </ul>\\r\\n                </li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAsDI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,eAAC,CAAE,gBAAG,CACF,OAAO,CAAE,GACb,CACQ,gBAAE,CAAE,gBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,gBAAG,CACC,SAAS,CAAE,KACf,CACA,gBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B"}`
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
  set_store_value(currentPath, $currentPath = "Sorting Algorithms", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-a2kdj3_START -->${$$result.title = `<title>Algorithms</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/algorithms/sorting"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-a2kdj3_END -->`, ""} <article class="svelte-wl5xjl">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-wl5xjl" data-svelte-h="svelte-14hie8">Sorting Algorithms</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h5 class="svelte-wl5xjl" data-svelte-h="svelte-vrhswa">Contents</h5> ${validate_component(NavList, "NavList").$$render(
              $$result,
              {
                name: $navList[0].topics[0].name,
                url: $navList[0].topics[0].url,
                topics: $navList[0].topics[0].topics,
                expanded: false
              },
              {},
              {}
            )}`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-wl5xjl" data-svelte-h="svelte-k365i5">What is sorting?</h6> <p class="svelte-wl5xjl" data-svelte-h="svelte-17g6hul">Sorting is rearranging data according to some order, usually <em>increasing</em> or <em>decreasing</em>.</p> `;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-wl5xjl" data-svelte-h="svelte-1mxcptz">Various ideas used for sorting</h6> <ul data-svelte-h="svelte-uhq8xy"><li class="svelte-wl5xjl">Keep swapping larger numbers to the right.</li> <li class="svelte-wl5xjl">Insert chosen number at right place.</li> <li class="svelte-wl5xjl">Find the current largest number and place it correctly.</li> <li class="svelte-wl5xjl">Divide the array into equal parts, sort them and merge.</li> <li class="svelte-wl5xjl">Pick a number and shift smaller numbers to the left and larger numbers to the right.</li> <li class="svelte-wl5xjl">If the array of positive integers are given that lie in a range, use a larger array to place them at their index.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-wl5xjl" data-svelte-h="svelte-1m749pu">Constraints</h6> <ul data-svelte-h="svelte-qg8r0k"><li class="svelte-wl5xjl">Speed</li> <li class="svelte-wl5xjl">Work memory</li> <li class="svelte-wl5xjl">Stability</li> <li class="svelte-wl5xjl">Adaptability</li> <li class="svelte-wl5xjl">Parallelization</li> <li class="svelte-wl5xjl">Distributed data</li> <li class="svelte-wl5xjl">Streamed data</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-wl5xjl" data-svelte-h="svelte-gqimsh">Types</h6> <ul data-svelte-h="svelte-shams8"><li class="svelte-wl5xjl">Comparison-based
                    <ul><li class="svelte-wl5xjl">Bubble sort</li> <li class="svelte-wl5xjl">Insertion sort</li> <li class="svelte-wl5xjl">Merge sort</li> <li class="svelte-wl5xjl">Quick sort</li></ul></li> <li class="svelte-wl5xjl">Non-comparison-based
                    <ul><li class="svelte-wl5xjl">Bucket sort</li> <li class="svelte-wl5xjl">Redix sort</li></ul></li></ul>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-7lnG2v3H.js.map
