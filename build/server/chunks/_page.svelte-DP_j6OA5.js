import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr2-CDgUAJs6.js';
import { g as github, a as githubDark } from './github-dark-DeAsbMVW.js';
import { p as page } from './stores3-DPEAZJnM.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import { N as NavList } from './NavList-BiywRBoU.js';
import { c as currentPath, n as navList, d as darkMode } from './stores-Cecnyqn_.js';
import { c as contentNav, a as contents } from './content7-CS5adbwd.js';
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
  code: "article.svelte-f313e{display:flex;flex-direction:column;gap:0.5em;max-width:750px;width:90%;margin:auto}p.svelte-f313e,li.svelte-f313e{opacity:0.8}h4.svelte-f313e,h5.svelte-f313e{margin:0.5em 0}h5.svelte-f313e{font-size:1.1em}h6.svelte-f313e{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}strong.svelte-f313e{color:goldenrod;opacity:1}a.svelte-f313e{cursor:pointer}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { slide } from \'svelte/transition\';\\r\\n\\timport { quintOut } from \'svelte/easing\';\\r\\n\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Link from \'$lib/ui/Link.svelte\';\\r\\n    import {page} from \'$app/stores\';\\r\\n    import {onMount} from \'svelte\';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from \'$lib/components/NavList.svelte\'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/research/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n\\t\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Parameterized algorithms\\";\\r\\n    // $darkMode = false;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    let code1=`<!--Inline CSS-->\\r\\n<p style=\\"color: tomato;\\">I\'m tomato</p>`\\r\\n    let code2=`<head>\\r\\n    <!---CSS from external file-->\\r\\n    <link rel=\\"stylesheet\\" href=\\"/app.css\\"> \\r\\n    <!--Document level CSS-->\\r\\n    <style>\\r\\n    /* set text color of p elements to tomato */\\r\\n        p {\\r\\n            color: tomato;\\r\\n        }\\r\\n    </style>\\r\\n</head>`\\r\\n    let code3 = `selector1 {\\r\\n    property1: value1;\\r\\n    property2: value2;\\r\\n}\\r\\nselector2 {\\r\\n    property3: value3;\\r\\n    property4: value4;\\r\\n}`\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n        max-width: 750px;\\r\\n        width: 90%;\\r\\n        margin: auto;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Algorithms</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/algorithms/sorting\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Parameterized Algorithms\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h5>Contents</h5>\\r\\n            <NavList name=\\"{$navList[0].topics[0].name}\\" url=\\"{$navList[0].topics[0].url}\\" topics={$navList[0].topics[0].topics} expanded={false} />\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 class=\\"problem\\">Parameterized problem</h6>\\r\\n            <p>\\r\\n                <strong>Parameterized Problem:</strong> A <em>parameterized problem</em> is a language {`\\\\\\\\(L\\\\\\\\subseteq \\\\\\\\Sigma^*\\\\\\\\times \\\\\\\\mathbb{N}\\\\\\\\)`}, where \\\\(\\\\Sigma\\\\) is a fixed, finite alphabet. For an instance {`\\\\\\\\((x, k)\\\\\\\\in \\\\\\\\Sigma^*\\\\\\\\times \\\\\\\\mathbb{N}\\\\\\\\)`}, \\\\(k\\\\) is called the <em>parameter</em>.\\r\\n            </p>\\r\\n            <p>\\r\\n                <strong>Examples:</strong>\\r\\n            </p>\\r\\n            <ul>\\r\\n                <li>Vertex cover problem parameterized by solution size \\\\(k\\\\): \\\\((G,k)\\\\)</li>\\r\\n                <li>Clique problem parameterized by solution size \\\\(k\\\\): \\\\((G,k)\\\\)</li>\\r\\n                <li>CNF-SAT problem parameterized by number of variables \\\\(k\\\\): \\\\((\\\\varphi, k)\\\\)</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 class=\\"fpt\\">Fixed Parameter Tractability (FPT)</h6>\\r\\n            <p>\\r\\n                A parameterized problem is called FPT if there exists an algorithm {`\\\\\\\\(\\\\\\\\mathcal{A}\\\\\\\\)`}, a computable function {`\\\\\\\\(f:\\\\\\\\mathbb{N}\\\\\\\\to\\\\\\\\mathbb{N}\\\\\\\\)`}, and a constant \\\\(c\\\\) such that, given {`\\\\\\\\((x, k)\\\\\\\\in \\\\\\\\Sigma^*\\\\\\\\times \\\\\\\\mathbb{N}\\\\\\\\)`}, the algorithm {`\\\\\\\\(\\\\\\\\mathcal{A}\\\\\\\\)`} correctly decides whether \\\\((x, k)\\\\in L\\\\) in time bounded by \\\\(f(k)\\\\cdot |(x,k)|^c\\\\)\\r\\n            </p>\\r\\n            <p>\\r\\n                <strong>Examples:</strong>\\r\\n            </p>\\r\\n            <ul>\\r\\n                <li>Vertex cover parameterized by solution size can be solved in {`\\\\\\\\(O(1.25284^k\\\\\\\\cdot n^{O(1)})\\\\\\\\)`} [Harris, Narayanaswamy (2024)]</li>\\r\\n                <li>\\r\\n                    Feedback vertex set can be solved in {`\\\\\\\\(2.7^k\\\\\\\\cdot n^{O(1)}\\\\\\\\)`} time [Li, Nederlof (2020)].\\r\\n                </li>\\r\\n                <li>\\r\\n                    Directed feedback vertex set can be solved in {`\\\\\\\\(O(k!2^{o(k)}(n + m))\\\\\\\\)`} time [Xiong, Xiao (2025)].\\r\\n                </li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 class=\\"W\\">Fixed Parameter Intractability (W-heirarchy)</h6>\\r\\n            <p>Not all parameterized problems are known to admit FPT algorithms. The layers of difficulties are captured by <strong>W-heirarchy</strong> which is defined in terms of number of <em>large</em> input nodes along a path in Boolean circuit of the corresponding problem. Instead of giving the formal definition, it is helpful to know canonical problems in each class. Here the completeness is defined under FPT-reductions, i.e. the reduction algorithm is allowed to be FPT.</p>\\r\\n            <strong>Canonical problems:</strong>\\r\\n            <ul>\\r\\n                <li>Clique, Independent set is \\\\(W[1]\\\\)-complete.</li>\\r\\n                <li>Set Cover, Hitting Set, Dominating Set, Connected Dominating Set are \\\\(W[2]\\\\)-complete.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 class=\\"techniques\\">Common techniques</h6>\\r\\n            <p>There is a long list of techniques deployed in inventing parameterized algorithms (FPT or more). Some of them are as follows:</p>\\r\\n            <ul>\\r\\n                <li><strong>Branching</strong>: identify a forbidden structure and branch in possible ways the solution hits it.</li>\\r\\n                <li><strong>Kernelization</strong>: identify parts that are either unnecessary or has to be in solution, remove them.</li>\\r\\n                <li><strong>Iterative compression</strong>: find a larger solution to a part of the graph, compress this solution, repeat till the part is the whole graph.</li>\\r\\n                <li><strong>Color coding</strong>: color vertices using \\\\(k\\\\) colors uniformly at random such that with high probability the solution is \\\\(k\\\\)-colored</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 class=\\"bound\\">Lower bounds</h6>\\r\\n            <p>A lot of lower bounding techniques are based on following conjectures:</p>\\r\\n            <strong>Exponential-Time Hypothesis</strong>\\r\\n            <p>\\r\\n                There exists a constant \\\\(\\\\alpha \\\\gt 0\\\\) such that CNF-SAT on \\\\(n\\\\) variables and \\\\(m\\\\) clauses can not be solved in time {`\\\\\\\\(O(m2^{\\\\\\\\alpha n})\\\\\\\\)`} by a (classical) Turing machine.\\r\\n            </p>\\r\\n            <strong>Strong Exponential-Time Hypothesis</strong>\\r\\n            <p>\\r\\n                There does not exist \\\\(\\\\delta \\\\gt 0\\\\) such that CNF-SAT on \\\\(n\\\\) variables and \\\\(m\\\\) clauses can be solved in {`\\\\\\\\(O(m2^{n(1-\\\\\\\\delta)})\\\\\\\\)`} time by a (classical) Turing machine.\\r\\n            </p>\\r\\n            <strong>Usages:</strong>\\r\\n            <ul>\\r\\n                <li>3-SAT cannot be solved in {`\\\\\\\\(2^{o(n + m)}\\\\\\\\)`}</li>\\r\\n                <li>Problems like Vertex Cover, Dominating Set, Feedback Vertex Set on planar graphs can not be solved in {`\\\\\\\\(O^*(2^{o(\\\\\\\\sqrt{k})})\\\\\\\\)`} time.</li>\\r\\n                <li>Closest String problem can not be solved in {`\\\\\\\\(O^*(2^{o(k\\\\\\\\log k)}\\\\\\\\)`} where \\\\(k\\\\) is the maximum distance of the solution to each given string.</li>\\r\\n                <li>Hitting Set can not be solved in {`\\\\\\\\(O^*((2-\\\\\\\\epsilon)^n)\\\\\\\\)`} time for any \\\\(\\\\epsilon \\\\gt 0\\\\) where \\\\(n\\\\) is the size of the universe.</li>\\r\\n                <li>Dominating Set can not be solved in time {`\\\\\\\\(f(k)\\\\\\\\cdot n^{o(k)}\\\\\\\\)`} time.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 class=\\"references\\">References</h6>\\r\\n            <p>For more details on Parameterized algorithms and complexity refer to following books:</p>\\r\\n            <ul>\\r\\n                <li><a href=\\"https://link.springer.com/book/10.1007/978-3-319-21275-3\\">Parameterized Algorithms</a></li>\\r\\n                <li><a href=\\"https://link.springer.com/book/10.1007/978-1-4612-0515-9\\">Parameterized Complexity</a></li>\\r\\n                <li><a href=\\"https://www.cambridge.org/core/books/kernelization/36F327A8BB97CB6BBEA564368BF1AD4A\\">Kernelization</a></li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAsDI,oBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KAAK,CACV,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IACZ,CACA,cAAC,CAAE,eAAG,CACF,OAAO,CAAE,GACb,CACQ,eAAE,CAAE,eAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,eAAG,CACC,SAAS,CAAE,KACf,CACA,eAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,mBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb,CACA,cAAE,CACE,MAAM,CAAE,OACZ"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  let $navList, $$unsubscribe_navList;
  let $darkMode, $$unsubscribe_darkMode;
  let $page, $$unsubscribe_page;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Parameterized algorithms", $currentPath);
  $$result.css.add(css$1);
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_darkMode();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-a2kdj3_START -->${$$result.title = `<title>Algorithms</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/algorithms/sorting"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-a2kdj3_END -->`, ""} <article class="svelte-f313e">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-f313e" data-svelte-h="svelte-nwvaht">Parameterized Algorithms</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h5 class="svelte-f313e" data-svelte-h="svelte-vrhswa">Contents</h5> ${validate_component(NavList, "NavList").$$render(
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
          return `<h6 class="problem svelte-f313e" data-svelte-h="svelte-1rsi71k">Parameterized problem</h6> <p class="svelte-f313e"><strong class="svelte-f313e" data-svelte-h="svelte-1juvk">Parameterized Problem:</strong> A <em data-svelte-h="svelte-i7hqpk">parameterized problem</em> is a language ${escape(`\\(L\\subseteq \\Sigma^*\\times \\mathbb{N}\\)`)}, where \\(\\Sigma\\) is a fixed, finite alphabet. For an instance ${escape(`\\((x, k)\\in \\Sigma^*\\times \\mathbb{N}\\)`)}, \\(k\\) is called the <em data-svelte-h="svelte-mpcmzn">parameter</em>.</p> <p class="svelte-f313e" data-svelte-h="svelte-qi8jyy"><strong class="svelte-f313e">Examples:</strong></p> <ul data-svelte-h="svelte-133q790"><li class="svelte-f313e">Vertex cover problem parameterized by solution size \\(k\\): \\((G,k)\\)</li> <li class="svelte-f313e">Clique problem parameterized by solution size \\(k\\): \\((G,k)\\)</li> <li class="svelte-f313e">CNF-SAT problem parameterized by number of variables \\(k\\): \\((\\varphi, k)\\)</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="fpt svelte-f313e" data-svelte-h="svelte-53pbtx">Fixed Parameter Tractability (FPT)</h6> <p class="svelte-f313e">A parameterized problem is called FPT if there exists an algorithm ${escape(`\\(\\mathcal{A}\\)`)}, a computable function ${escape(`\\(f:\\mathbb{N}\\to\\mathbb{N}\\)`)}, and a constant \\(c\\) such that, given ${escape(`\\((x, k)\\in \\Sigma^*\\times \\mathbb{N}\\)`)}, the algorithm ${escape(`\\(\\mathcal{A}\\)`)} correctly decides whether \\((x, k)\\in L\\) in time bounded by \\(f(k)\\cdot |(x,k)|^c\\)</p> <p class="svelte-f313e" data-svelte-h="svelte-qi8jyy"><strong class="svelte-f313e">Examples:</strong></p> <ul><li class="svelte-f313e">Vertex cover parameterized by solution size can be solved in ${escape(`\\(O(1.25284^k\\cdot n^{O(1)})\\)`)} [Harris, Narayanaswamy (2024)]</li> <li class="svelte-f313e">Feedback vertex set can be solved in ${escape(`\\(2.7^k\\cdot n^{O(1)}\\)`)} time [Li, Nederlof (2020)].</li> <li class="svelte-f313e">Directed feedback vertex set can be solved in ${escape(`\\(O(k!2^{o(k)}(n + m))\\)`)} time [Xiong, Xiao (2025)].</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="W svelte-f313e" data-svelte-h="svelte-yynqiu">Fixed Parameter Intractability (W-heirarchy)</h6> <p class="svelte-f313e" data-svelte-h="svelte-1741zrw">Not all parameterized problems are known to admit FPT algorithms. The layers of difficulties are captured by <strong class="svelte-f313e">W-heirarchy</strong> which is defined in terms of number of <em>large</em> input nodes along a path in Boolean circuit of the corresponding problem. Instead of giving the formal definition, it is helpful to know canonical problems in each class. Here the completeness is defined under FPT-reductions, i.e. the reduction algorithm is allowed to be FPT.</p> <strong class="svelte-f313e" data-svelte-h="svelte-on7bma">Canonical problems:</strong> <ul data-svelte-h="svelte-58f39d"><li class="svelte-f313e">Clique, Independent set is \\(W[1]\\)-complete.</li> <li class="svelte-f313e">Set Cover, Hitting Set, Dominating Set, Connected Dominating Set are \\(W[2]\\)-complete.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="techniques svelte-f313e" data-svelte-h="svelte-11hyqp8">Common techniques</h6> <p class="svelte-f313e" data-svelte-h="svelte-1lwd48h">There is a long list of techniques deployed in inventing parameterized algorithms (FPT or more). Some of them are as follows:</p> <ul data-svelte-h="svelte-akfzpc"><li class="svelte-f313e"><strong class="svelte-f313e">Branching</strong>: identify a forbidden structure and branch in possible ways the solution hits it.</li> <li class="svelte-f313e"><strong class="svelte-f313e">Kernelization</strong>: identify parts that are either unnecessary or has to be in solution, remove them.</li> <li class="svelte-f313e"><strong class="svelte-f313e">Iterative compression</strong>: find a larger solution to a part of the graph, compress this solution, repeat till the part is the whole graph.</li> <li class="svelte-f313e"><strong class="svelte-f313e">Color coding</strong>: color vertices using \\(k\\) colors uniformly at random such that with high probability the solution is \\(k\\)-colored</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="bound svelte-f313e" data-svelte-h="svelte-1stqkd3">Lower bounds</h6> <p class="svelte-f313e" data-svelte-h="svelte-q04557">A lot of lower bounding techniques are based on following conjectures:</p> <strong class="svelte-f313e" data-svelte-h="svelte-mm659z">Exponential-Time Hypothesis</strong> <p class="svelte-f313e">There exists a constant \\(\\alpha \\gt 0\\) such that CNF-SAT on \\(n\\) variables and \\(m\\) clauses can not be solved in time ${escape(`\\(O(m2^{\\alpha n})\\)`)} by a (classical) Turing machine.</p> <strong class="svelte-f313e" data-svelte-h="svelte-18yvq9c">Strong Exponential-Time Hypothesis</strong> <p class="svelte-f313e">There does not exist \\(\\delta \\gt 0\\) such that CNF-SAT on \\(n\\) variables and \\(m\\) clauses can be solved in ${escape(`\\(O(m2^{n(1-\\delta)})\\)`)} time by a (classical) Turing machine.</p> <strong class="svelte-f313e" data-svelte-h="svelte-1obx0ug">Usages:</strong> <ul><li class="svelte-f313e">3-SAT cannot be solved in ${escape(`\\(2^{o(n + m)}\\)`)}</li> <li class="svelte-f313e">Problems like Vertex Cover, Dominating Set, Feedback Vertex Set on planar graphs can not be solved in ${escape(`\\(O^*(2^{o(\\sqrt{k})})\\)`)} time.</li> <li class="svelte-f313e">Closest String problem can not be solved in ${escape(`\\(O^*(2^{o(k\\log k)}\\)`)} where \\(k\\) is the maximum distance of the solution to each given string.</li> <li class="svelte-f313e">Hitting Set can not be solved in ${escape(`\\(O^*((2-\\epsilon)^n)\\)`)} time for any \\(\\epsilon \\gt 0\\) where \\(n\\) is the size of the universe.</li> <li class="svelte-f313e">Dominating Set can not be solved in time ${escape(`\\(f(k)\\cdot n^{o(k)}\\)`)} time.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="references svelte-f313e" data-svelte-h="svelte-19xx2dd">References</h6> <p class="svelte-f313e" data-svelte-h="svelte-1e796o7">For more details on Parameterized algorithms and complexity refer to following books:</p> <ul data-svelte-h="svelte-b7tbgt"><li class="svelte-f313e"><a href="https://link.springer.com/book/10.1007/978-3-319-21275-3" class="svelte-f313e">Parameterized Algorithms</a></li> <li class="svelte-f313e"><a href="https://link.springer.com/book/10.1007/978-1-4612-0515-9" class="svelte-f313e">Parameterized Complexity</a></li> <li class="svelte-f313e"><a href="https://www.cambridge.org/core/books/kernelization/36F327A8BB97CB6BBEA564368BF1AD4A" class="svelte-f313e">Kernelization</a></li></ul>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DP_j6OA5.js.map
