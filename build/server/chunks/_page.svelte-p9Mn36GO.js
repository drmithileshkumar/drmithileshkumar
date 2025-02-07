import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr2-CDgUAJs6.js';
import { p as page } from './stores3-DPEAZJnM.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import { N as NavList } from './NavList-BiywRBoU.js';
import { c as currentPath, n as navList } from './stores-Cecnyqn_.js';
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

const css = {
  code: "article.svelte-109zpgd{display:flex;flex-direction:column;gap:0.5em;max-width:750px;width:90%;margin:auto}p.svelte-109zpgd{opacity:0.8}h4.svelte-109zpgd{margin:0.5em 0}h6.svelte-109zpgd{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}strong.svelte-109zpgd{color:goldenrod;opacity:1}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n\\t// @ts-nocheck\\r\\n\\timport { typeset } from '$lib/shared/typeset';\\r\\n\\timport Link from '$lib/ui/Link.svelte';\\r\\n\\timport { page } from '$app/stores';\\r\\n\\timport { onMount } from 'svelte';\\r\\n\\timport Card, { Content, Actions } from '@smui/card';\\r\\n\\timport Button from '@smui/button';\\r\\n\\timport Ripple from '@smui/ripple';\\r\\n\\timport NavList from '$lib/components/NavList.svelte';\\r\\n\\timport { currentPath } from '$lib/stores';\\r\\n\\timport { darkMode, navList } from '$lib/stores';\\r\\n\\timport { contents, contentNav } from '$lib/pages/research/content';\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n\\t\\r\\n\\t$navList = contents;\\r\\n\\t$currentPath = 'Research';\\r\\n\\t// $darkMode = false;\\r\\n\\t// onMount(() => {\\r\\n\\t//     MathJax.typeset();\\r\\n\\t// });\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>Research</title>\\r\\n\\t<link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/algorithms\\" />\\r\\n\\t<meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4 style=\\"margin: 0.5em 0;\\">\\r\\n        Research\\r\\n    </h4>\\r\\n\\t<Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n\\t\\t<NavList name={$navList[0].name} url={$navList[0].url} topics={$navList[0].topics} expanded />\\r\\n\\t</Card>\\r\\n\\t<Card>\\r\\n\\t\\t<Content>\\r\\n\\t\\t\\t<h6 class=\\"introduction\\">Introduction</h6>\\r\\n\\t\\t\\t<p>\\r\\n\\t\\t\\t\\tMy research has mostly been about inventing algorithms for hard computational problems spanning many fields. The tools mostly come from probability, graph theory and linear algebra.\\r\\n\\t\\t\\t</p>\\r\\n\\t\\t\\t<p>\\r\\n\\t\\t\\t\\tMost of these algorithms tend to be very technical and as I journey through them, I intend to present the basic intuitions, hoping that the reader finds them useful.\\r\\n\\t\\t\\t</p>\\r\\n\\t\\t</Content>\\r\\n\\t</Card>\\r\\n\\t<Card>\\r\\n\\t\\t<Content>\\r\\n\\t\\t\\t<h6 class=\\"cycles\\">Removing cycles from graphs</h6>\\r\\n\\t\\t\\t<p>Given a graph, the task is to edit it such that graph becomes acyclic. This problem is called <em>feedback vertex/arc set</em>. The problem is <code>NP-complete</code> in general, polynomially solvable only in some graph classes.</p>\\r\\n\\t\\t\\t<p>It is polynomial-time solvable on chordal, interval and permutation graphs.</p>\\r\\n\\t\\t\\t<p>\\r\\n\\t\\t\\t\\t<strong>Approximation:</strong> Approximation ratio 2 for undirected graphs. Recently, integrality gap 2 achieved by Chandrasekaran et al (2025).\\r\\n\\t\\t\\t</p>\\r\\n\\t\\t\\t<p>\\r\\n\\t\\t\\t\\t<strong>Exact:</strong>\\r\\n\\t\\t\\t</p>\\r\\n\\t\\t\\t<p>\\r\\n\\t\\t\\t\\t<strong>Parameterized:</strong> In undirected graphs, the run time is \\\\(O^*(3.460^k)\\\\), while the randomized is \\\\(O^*(2.7^k)\\\\). DFVS can be solved in {\`\\\\\\\\(O(k!4^kk^5(n + m))\\\\\\\\)\`} due to Lokshtanov et al (2018) recently improved to {\`\\\\\\\\(O(k!2^{o(k)}(n + m))\\\\\\\\)\`} [Xiong, Xiao (2025)].\\r\\n\\t\\t\\t</p>\\r\\n\\t\\t\\t<p>\\r\\n\\t\\t\\t\\t<strong>Kernel:</strong> Polynomial kernel for DFVS parameterized by bounded-treewidth modulator [Lokshtanov et al (2025)]. In tournaments, recent almost linear kernel of {\`\\\\\\\\(O(k^{1 + \\\\\\\\frac{O(1)}{\\\\\\\\sqrt{\\\\\\\\log k}}})\\\\\\\\)\`} vertices.\\r\\n\\t\\t\\t</p>\\r\\n\\t\\t</Content>\\r\\n\\t</Card>\\r\\n</article>\\r\\n\\r\\n<style>\\r\\n\\tarticle {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\tgap: 0.5em;\\r\\n\\t\\tmax-width: 750px;\\r\\n        width: 90%;\\r\\n        margin: auto;\\r\\n\\t}\\r\\n\\tp,\\r\\n\\tli {\\r\\n\\t\\topacity: 0.8;\\r\\n\\t}\\r\\n\\th2,\\r\\n\\th3,\\r\\n\\th4,\\r\\n\\th5 {\\r\\n\\t\\tmargin: 0.5em 0;\\r\\n\\t}\\r\\n\\th5 {\\r\\n\\t\\tfont-size: 1.1em;\\r\\n\\t}\\r\\n\\th6 {\\r\\n\\t\\tfont-size: 1em;\\r\\n\\t\\tmargin: 0.5em 0;\\r\\n\\t\\tcolor: rgba(0, 150, 200, 1);\\r\\n\\t}\\r\\n\\tstrong {\\r\\n\\t\\tcolor: goldenrod;\\r\\n\\t\\topacity: 1;\\r\\n\\t}\\r\\n\\ta {\\r\\n\\t\\tcursor: pointer;\\r\\n\\t}\\r\\n\\t.question {\\r\\n\\t\\tcursor: pointer;\\r\\n\\t\\tpadding: 0.3em;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAuEC,sBAAQ,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KAAK,CACV,SAAS,CAAE,KAAK,CACV,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IACf,CACA,gBACG,CACF,OAAO,CAAE,GACV,CAGA,iBACG,CACF,MAAM,CAAE,KAAK,CAAC,CACf,CAIA,iBAAG,CACF,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAC3B,CACA,qBAAO,CACN,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACV"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  let $navList, $$unsubscribe_navList;
  let $page, $$unsubscribe_page;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Research", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-5cvh1m_START -->${$$result.title = `<title>Research</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/algorithms"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-5cvh1m_END -->`, ""} <article class="svelte-109zpgd">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 style="margin: 0.5em 0;" class="svelte-109zpgd" data-svelte-h="svelte-31anrr">Research</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(NavList, "NavList").$$render(
          $$result,
          {
            name: $navList[0].name,
            url: $navList[0].url,
            topics: $navList[0].topics,
            expanded: true
          },
          {},
          {}
        )}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="introduction svelte-109zpgd" data-svelte-h="svelte-kwk7wd">Introduction</h6> <p class="svelte-109zpgd" data-svelte-h="svelte-k0wvet">My research has mostly been about inventing algorithms for hard computational problems spanning many fields. The tools mostly come from probability, graph theory and linear algebra.</p> <p class="svelte-109zpgd" data-svelte-h="svelte-1ptq16p">Most of these algorithms tend to be very technical and as I journey through them, I intend to present the basic intuitions, hoping that the reader finds them useful.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="cycles svelte-109zpgd" data-svelte-h="svelte-dhqqqj">Removing cycles from graphs</h6> <p class="svelte-109zpgd" data-svelte-h="svelte-z1z33">Given a graph, the task is to edit it such that graph becomes acyclic. This problem is called <em>feedback vertex/arc set</em>. The problem is <code>NP-complete</code> in general, polynomially solvable only in some graph classes.</p> <p class="svelte-109zpgd" data-svelte-h="svelte-sa0qi4">It is polynomial-time solvable on chordal, interval and permutation graphs.</p> <p class="svelte-109zpgd" data-svelte-h="svelte-8prv4m"><strong class="svelte-109zpgd">Approximation:</strong> Approximation ratio 2 for undirected graphs. Recently, integrality gap 2 achieved by Chandrasekaran et al (2025).</p> <p class="svelte-109zpgd" data-svelte-h="svelte-5vb2vn"><strong class="svelte-109zpgd">Exact:</strong></p> <p class="svelte-109zpgd"><strong class="svelte-109zpgd" data-svelte-h="svelte-f55skd">Parameterized:</strong> In undirected graphs, the run time is \\(O^*(3.460^k)\\), while the randomized is \\(O^*(2.7^k)\\). DFVS can be solved in ${escape(`\\(O(k!4^kk^5(n + m))\\)`)} due to Lokshtanov et al (2018) recently improved to ${escape(`\\(O(k!2^{o(k)}(n + m))\\)`)} [Xiong, Xiao (2025)].</p> <p class="svelte-109zpgd"><strong class="svelte-109zpgd" data-svelte-h="svelte-1iadbjx">Kernel:</strong> Polynomial kernel for DFVS parameterized by bounded-treewidth modulator [Lokshtanov et al (2025)]. In tournaments, recent almost linear kernel of ${escape(`\\(O(k^{1 + \\frac{O(1)}{\\sqrt{\\log k}}})\\)`)} vertices.</p>`;
        }
      })}`;
    }
  })} </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-p9Mn36GO.js.map
