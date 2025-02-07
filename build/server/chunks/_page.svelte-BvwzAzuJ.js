import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr2-CDgUAJs6.js';
import { g as github, a as githubDark } from './github-dark-DeAsbMVW.js';
import './Suffix-CtI6fDI6.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import { p as page } from './stores3-DPEAZJnM.js';
import './Subheader-DEm_inUP.js';
import './client-k3u4ChD_.js';
import { c as currentPath, n as navList, d as darkMode } from './stores-Cecnyqn_.js';
import { c as contentNav, a as contents } from './content7-CS5adbwd.js';
import { P as Pathlist } from './Pathlist-B9wgcfC1.js';
import { C as CourseNavigation } from './CourseNavigation-DznSxbmO.js';
import { P as Paper } from './Paper2-DwFUsx4R.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './exports-kR70XCWV.js';
import './index2-D2s-XE5r.js';

const css$1 = {
  code: "article.svelte-nv31ix{display:flex;flex-direction:column;gap:0.5em;max-width:750px;width:90%;margin:auto}p.svelte-nv31ix,li.svelte-nv31ix{opacity:0.8}h4.svelte-nv31ix{margin:0.5em 0}h6.svelte-nv31ix{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}strong.svelte-nv31ix{color:goldenrod;opacity:1}a.svelte-nv31ix{cursor:pointer;text-decoration:none}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    \\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, {Body, Head, Row, Cell} from '@smui/data-table';\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/research/content\\";\\r\\n    import { typeset } from '$lib/shared/typeset';\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n\\r\\n    import Paper from \\"$lib/components/Paper.svelte\\";\\r\\n\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Reducing Lattice Enumeration Search Trees\\";\\r\\n    // $darkMode = false;\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n        max-width: 750px;\\r\\n        width: 90%;\\r\\n        margin: auto;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h4 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Reducing Lattice Enumeration Search Trees</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/layout\\" />\\r\\n    <meta name=\\"abstract\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Reducing Lattice Enumeration Search Trees\\r\\n    </h4>\\r\\n    <Paper>\\r\\n        <span slot=\\"authors\\">\\r\\n            Mithilesh Kumar, Srimathi Varadarajan, Håvard Raddum\\r\\n        </span>\\r\\n        <span slot=\\"title\\">\\r\\n            Reducing Lattice Enumeration Search Trees\\r\\n        </span>\\r\\n        <span slot=\\"venue\\">\\r\\n            <a href=\\"https://www.infocommunications.hu/documents/169298/4647244/InfocomJ_2019_4_All.pdf\\">Infocommunications Journal, 2019</a>\\r\\n        </span>\\r\\n    </Paper>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#introduction\\">Introduction</a></li>\\r\\n                <li><a href=\\"#previous\\">Previous Work</a></li>\\r\\n                <li><a href=\\"#contributions\\">Contributions</a></li>\\r\\n                <li><a href=\\"#methods\\">Methodology</a></li>\\r\\n                <li><a href=\\"#significance\\">Significance</a></li>\\r\\n                <li><a href=\\"#conclusion\\">Conclusion</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Introduction</h6>\\r\\n            <ul>\\r\\n                <li><strong>Lattices:</strong> A lattice in {\`\\\\\\\\( \\\\\\\\mathbb{R}^n \\\\\\\\)\`} is the set of all integer combinations of {\`\\\\\\\\( n \\\\\\\\)\`} linearly independent vectors {\`\\\\\\\\( b_1, b_2, ..., b_n \\\\\\\\)\`}.</li>\\r\\n                <li><strong>Shortest Vector Problem (SVP):</strong> Given a lattice basis, the task is to find the non-zero lattice vector with the smallest Euclidean norm.</li>\\r\\n                <li><strong>Enumeration Algorithms:</strong> These algorithms perform an exhaustive search to find the shortest vector by exploring a search tree where nodes represent partial assignments of integer coefficients.</li>\\r\\n                <li><strong>Pruning Techniques:</strong> Methods like those introduced by Schnorr, Euchner, and Hörner in the 1990s aim to reduce the search space by eliminating subtrees unlikely to contain the shortest vector, thereby improving efficiency.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Previous Work</h6>\\r\\n            <ul>\\r\\n                <li><strong>Early Enumeration Methods:</strong> In the 1980s, Fincke, Pohst, and Kannan developed deterministic algorithms based on exhaustive search within a convex set, with performance heavily dependent on the quality of the input basis.</li>\\r\\n                <li><strong>Pruning Strategies:</strong> Schnorr, Euchner, and Hörner introduced pruning techniques in the 1990s to enhance enumeration efficiency by cutting off parts of the search tree deemed less promising.</li>\\r\\n                <li><strong>Extreme Pruning:</strong> Gama, Nguyen, and Regev proposed extreme pruning in 2010, significantly reducing the search tree size by aggressively pruning, accepting a lower probability of finding the shortest vector in a single run but compensating through multiple runs with varied basis permutations.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Contributions</h6>\\r\\n            <ul>\\r\\n                <li><strong>Hybrid Enumeration Algorithm:</strong> The authors propose a hybrid enumeration approach that selects permutations of basis vectors to minimize the search tree size, leading to improved performance for large lattices.</li>\\r\\n                <li><strong>Sign-Based Pruning Strategy:</strong> They introduce a pruning method based on estimating the signs of the coefficients that yield the shortest vector, effectively reducing the number of nodes in the search tree without missing the shortest vector in their experiments.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Methodology</h6>\\r\\n            <ul>\\r\\n                <li><strong>Basis Permutation:</strong> Investigated the impact of different permutations of basis vectors on the search tree size and identified classes of permutations that result in fewer nodes.</li>\\r\\n                <li><strong>Hybrid Enumeration:</strong> Developed an algorithm that combines advantageous basis permutations with standard enumeration to enhance efficiency, particularly for large lattices.</li>\\r\\n                <li><strong>Sign Estimation for Pruning:</strong> Devised a strategy to estimate the signs of coefficients leading to the shortest vector, enabling pruning of subtrees with unlikely sign combinations, thereby reducing the search space.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Significance</h6>\\r\\n            <ul>\\r\\n                <li><strong>Efficiency Improvement:</strong> The proposed methods reduce the number of nodes in the enumeration search tree, leading to faster solutions for the Shortest Vector Problem.</li>\\r\\n                <li><strong>Practical Applicability:</strong> The hybrid enumeration and sign-based pruning strategies can be integrated into existing lattice enumeration frameworks to enhance their performance.</li>\\r\\n                <li><strong>Advancement in Pruning Techniques:</strong> The sign-based pruning approach offers a novel perspective on reducing search spaces in lattice enumeration algorithms.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Conclusion</h6>\\r\\n            <p>This work presents innovative strategies to reduce the search space in lattice enumeration algorithms, specifically through hybrid enumeration and sign-based pruning, contributing to more efficient solutions for the Shortest Vector Problem.</p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    \\r\\n    \\r\\n</article>\\r\\n"],"names":[],"mappings":"AAgCI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KAAK,CACV,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IACZ,CACA,eAAC,CAAE,gBAAG,CACF,OAAO,CAAE,GACb,CACA,gBAAG,CACC,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,gBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,oBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb,CACA,eAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB"}`
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
  set_store_value(currentPath, $currentPath = "Reducing Lattice Enumeration Search Trees", $currentPath);
  $$result.css.add(css$1);
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_darkMode();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-um0hrp_START -->${$$result.title = `<title>Reducing Lattice Enumeration Search Trees</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/layout"><meta name="abstract" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-um0hrp_END -->`, ""} <article class="svelte-nv31ix">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-nv31ix" data-svelte-h="svelte-1avz5lv">Reducing Lattice Enumeration Search Trees</h4> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<span slot="venue" data-svelte-h="svelte-1xu511y"><a href="https://www.infocommunications.hu/documents/169298/4647244/InfocomJ_2019_4_All.pdf" class="svelte-nv31ix">Infocommunications Journal, 2019</a></span>`;
    },
    title: () => {
      return `<span slot="title" data-svelte-h="svelte-137rbfu">Reducing Lattice Enumeration Search Trees</span>`;
    },
    authors: () => {
      return `<span slot="authors" data-svelte-h="svelte-19apgvl">Mithilesh Kumar, Srimathi Varadarajan, Håvard Raddum</span>`;
    }
  })} ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-nv31ix" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-1ua7sc0"><li class="svelte-nv31ix"><a href="#introduction" class="svelte-nv31ix">Introduction</a></li> <li class="svelte-nv31ix"><a href="#previous" class="svelte-nv31ix">Previous Work</a></li> <li class="svelte-nv31ix"><a href="#contributions" class="svelte-nv31ix">Contributions</a></li> <li class="svelte-nv31ix"><a href="#methods" class="svelte-nv31ix">Methodology</a></li> <li class="svelte-nv31ix"><a href="#significance" class="svelte-nv31ix">Significance</a></li> <li class="svelte-nv31ix"><a href="#conclusion" class="svelte-nv31ix">Conclusion</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-nv31ix" data-svelte-h="svelte-92fxym">Introduction</h6> <ul><li class="svelte-nv31ix"><strong class="svelte-nv31ix" data-svelte-h="svelte-1o48ujf">Lattices:</strong> A lattice in ${escape(`\\( \\mathbb{R}^n \\)`)} is the set of all integer combinations of ${escape(`\\( n \\)`)} linearly independent vectors ${escape(`\\( b_1, b_2, ..., b_n \\)`)}.</li> <li class="svelte-nv31ix" data-svelte-h="svelte-15xyn2h"><strong class="svelte-nv31ix">Shortest Vector Problem (SVP):</strong> Given a lattice basis, the task is to find the non-zero lattice vector with the smallest Euclidean norm.</li> <li class="svelte-nv31ix" data-svelte-h="svelte-2odpb3"><strong class="svelte-nv31ix">Enumeration Algorithms:</strong> These algorithms perform an exhaustive search to find the shortest vector by exploring a search tree where nodes represent partial assignments of integer coefficients.</li> <li class="svelte-nv31ix" data-svelte-h="svelte-1ug4p69"><strong class="svelte-nv31ix">Pruning Techniques:</strong> Methods like those introduced by Schnorr, Euchner, and Hörner in the 1990s aim to reduce the search space by eliminating subtrees unlikely to contain the shortest vector, thereby improving efficiency.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-nv31ix" data-svelte-h="svelte-k8tpvg">Previous Work</h6> <ul data-svelte-h="svelte-18loghg"><li class="svelte-nv31ix"><strong class="svelte-nv31ix">Early Enumeration Methods:</strong> In the 1980s, Fincke, Pohst, and Kannan developed deterministic algorithms based on exhaustive search within a convex set, with performance heavily dependent on the quality of the input basis.</li> <li class="svelte-nv31ix"><strong class="svelte-nv31ix">Pruning Strategies:</strong> Schnorr, Euchner, and Hörner introduced pruning techniques in the 1990s to enhance enumeration efficiency by cutting off parts of the search tree deemed less promising.</li> <li class="svelte-nv31ix"><strong class="svelte-nv31ix">Extreme Pruning:</strong> Gama, Nguyen, and Regev proposed extreme pruning in 2010, significantly reducing the search tree size by aggressively pruning, accepting a lower probability of finding the shortest vector in a single run but compensating through multiple runs with varied basis permutations.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-nv31ix" data-svelte-h="svelte-8mlfqz">Contributions</h6> <ul data-svelte-h="svelte-xkj919"><li class="svelte-nv31ix"><strong class="svelte-nv31ix">Hybrid Enumeration Algorithm:</strong> The authors propose a hybrid enumeration approach that selects permutations of basis vectors to minimize the search tree size, leading to improved performance for large lattices.</li> <li class="svelte-nv31ix"><strong class="svelte-nv31ix">Sign-Based Pruning Strategy:</strong> They introduce a pruning method based on estimating the signs of the coefficients that yield the shortest vector, effectively reducing the number of nodes in the search tree without missing the shortest vector in their experiments.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-nv31ix" data-svelte-h="svelte-1ynbecn">Methodology</h6> <ul data-svelte-h="svelte-mipyo"><li class="svelte-nv31ix"><strong class="svelte-nv31ix">Basis Permutation:</strong> Investigated the impact of different permutations of basis vectors on the search tree size and identified classes of permutations that result in fewer nodes.</li> <li class="svelte-nv31ix"><strong class="svelte-nv31ix">Hybrid Enumeration:</strong> Developed an algorithm that combines advantageous basis permutations with standard enumeration to enhance efficiency, particularly for large lattices.</li> <li class="svelte-nv31ix"><strong class="svelte-nv31ix">Sign Estimation for Pruning:</strong> Devised a strategy to estimate the signs of coefficients leading to the shortest vector, enabling pruning of subtrees with unlikely sign combinations, thereby reducing the search space.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-nv31ix" data-svelte-h="svelte-iodqf7">Significance</h6> <ul data-svelte-h="svelte-1bkxdti"><li class="svelte-nv31ix"><strong class="svelte-nv31ix">Efficiency Improvement:</strong> The proposed methods reduce the number of nodes in the enumeration search tree, leading to faster solutions for the Shortest Vector Problem.</li> <li class="svelte-nv31ix"><strong class="svelte-nv31ix">Practical Applicability:</strong> The hybrid enumeration and sign-based pruning strategies can be integrated into existing lattice enumeration frameworks to enhance their performance.</li> <li class="svelte-nv31ix"><strong class="svelte-nv31ix">Advancement in Pruning Techniques:</strong> The sign-based pruning approach offers a novel perspective on reducing search spaces in lattice enumeration algorithms.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-nv31ix" data-svelte-h="svelte-1h8nw31">Conclusion</h6> <p class="svelte-nv31ix" data-svelte-h="svelte-o02cir">This work presents innovative strategies to reduce the search space in lattice enumeration algorithms, specifically through hybrid enumeration and sign-based pruning, contributing to more efficient solutions for the Shortest Vector Problem.</p>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BvwzAzuJ.js.map
