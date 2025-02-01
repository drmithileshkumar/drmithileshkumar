import { a as subscribe, b as set_store_value } from "../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../../chunks/ssr2.js";
import { g as githubDark, a as github } from "../../../../../../chunks/github-dark.js";
import "../../../../../../chunks/Suffix.js";
import { C as Card } from "../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../chunks/ActionIcons.js";
/* empty css                                                                 */
import { p as page } from "../../../../../../chunks/stores3.js";
import "../../../../../../chunks/Subheader.js";
import "../../../../../../chunks/client.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../../chunks/stores.js";
/* empty css                                                             */
import { c as contentNav, a as contents } from "../../../../../../chunks/content7.js";
import { P as Pathlist } from "../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../chunks/CourseNavigation.js";
import { P as Paper } from "../../../../../../chunks/Paper2.js";
const css$1 = {
  code: "article.svelte-1af2q2m{display:flex;flex-direction:column;gap:0.5em}p.svelte-1af2q2m,li.svelte-1af2q2m{opacity:0.8}h4.svelte-1af2q2m{margin:0.5em 0}h6.svelte-1af2q2m{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}strong.svelte-1af2q2m{color:goldenrod;opacity:1}a.svelte-1af2q2m{cursor:pointer;text-decoration:none}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    \\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, {Body, Head, Row, Cell} from '@smui/data-table';\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/research/content\\";\\r\\n    import { typeset } from '$lib/shared/typeset';\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n\\r\\n    import Paper from \\"$lib/components/Paper.svelte\\";\\r\\n\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Reducing Lattice Enumeration Search Trees\\";\\r\\n    $darkMode = false;\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h4 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Reducing Lattice Enumeration Search Trees</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/layout\\" />\\r\\n    <meta name=\\"abstract\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Reducing Lattice Enumeration Search Trees\\r\\n    </h4>\\r\\n    <Paper>\\r\\n        <span slot=\\"authors\\">\\r\\n            Mithilesh Kumar, Srimathi Varadarajan, Håvard Raddum\\r\\n        </span>\\r\\n        <span slot=\\"title\\">\\r\\n            Reducing Lattice Enumeration Search Trees\\r\\n        </span>\\r\\n        <span slot=\\"venue\\">\\r\\n            <a href=\\"https://www.infocommunications.hu/documents/169298/4647244/InfocomJ_2019_4_All.pdf\\">Infocommunications Journal, 2019</a>\\r\\n        </span>\\r\\n    </Paper>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#introduction\\">Introduction</a></li>\\r\\n                <li><a href=\\"#previous\\">Previous Work</a></li>\\r\\n                <li><a href=\\"#contributions\\">Contributions</a></li>\\r\\n                <li><a href=\\"#methods\\">Methodology</a></li>\\r\\n                <li><a href=\\"#significance\\">Significance</a></li>\\r\\n                <li><a href=\\"#conclusion\\">Conclusion</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Introduction</h6>\\r\\n            <ul>\\r\\n                <li><strong>Lattices:</strong> A lattice in {\`\\\\\\\\( \\\\\\\\mathbb{R}^n \\\\\\\\)\`} is the set of all integer combinations of {\`\\\\\\\\( n \\\\\\\\)\`} linearly independent vectors {\`\\\\\\\\( b_1, b_2, ..., b_n \\\\\\\\)\`}.</li>\\r\\n                <li><strong>Shortest Vector Problem (SVP):</strong> Given a lattice basis, the task is to find the non-zero lattice vector with the smallest Euclidean norm.</li>\\r\\n                <li><strong>Enumeration Algorithms:</strong> These algorithms perform an exhaustive search to find the shortest vector by exploring a search tree where nodes represent partial assignments of integer coefficients.</li>\\r\\n                <li><strong>Pruning Techniques:</strong> Methods like those introduced by Schnorr, Euchner, and Hörner in the 1990s aim to reduce the search space by eliminating subtrees unlikely to contain the shortest vector, thereby improving efficiency.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Previous Work</h6>\\r\\n            <ul>\\r\\n                <li><strong>Early Enumeration Methods:</strong> In the 1980s, Fincke, Pohst, and Kannan developed deterministic algorithms based on exhaustive search within a convex set, with performance heavily dependent on the quality of the input basis.</li>\\r\\n                <li><strong>Pruning Strategies:</strong> Schnorr, Euchner, and Hörner introduced pruning techniques in the 1990s to enhance enumeration efficiency by cutting off parts of the search tree deemed less promising.</li>\\r\\n                <li><strong>Extreme Pruning:</strong> Gama, Nguyen, and Regev proposed extreme pruning in 2010, significantly reducing the search tree size by aggressively pruning, accepting a lower probability of finding the shortest vector in a single run but compensating through multiple runs with varied basis permutations.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Contributions</h6>\\r\\n            <ul>\\r\\n                <li><strong>Hybrid Enumeration Algorithm:</strong> The authors propose a hybrid enumeration approach that selects permutations of basis vectors to minimize the search tree size, leading to improved performance for large lattices.</li>\\r\\n                <li><strong>Sign-Based Pruning Strategy:</strong> They introduce a pruning method based on estimating the signs of the coefficients that yield the shortest vector, effectively reducing the number of nodes in the search tree without missing the shortest vector in their experiments.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Methodology</h6>\\r\\n            <ul>\\r\\n                <li><strong>Basis Permutation:</strong> Investigated the impact of different permutations of basis vectors on the search tree size and identified classes of permutations that result in fewer nodes.</li>\\r\\n                <li><strong>Hybrid Enumeration:</strong> Developed an algorithm that combines advantageous basis permutations with standard enumeration to enhance efficiency, particularly for large lattices.</li>\\r\\n                <li><strong>Sign Estimation for Pruning:</strong> Devised a strategy to estimate the signs of coefficients leading to the shortest vector, enabling pruning of subtrees with unlikely sign combinations, thereby reducing the search space.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Significance</h6>\\r\\n            <ul>\\r\\n                <li><strong>Efficiency Improvement:</strong> The proposed methods reduce the number of nodes in the enumeration search tree, leading to faster solutions for the Shortest Vector Problem.</li>\\r\\n                <li><strong>Practical Applicability:</strong> The hybrid enumeration and sign-based pruning strategies can be integrated into existing lattice enumeration frameworks to enhance their performance.</li>\\r\\n                <li><strong>Advancement in Pruning Techniques:</strong> The sign-based pruning approach offers a novel perspective on reducing search spaces in lattice enumeration algorithms.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Conclusion</h6>\\r\\n            <p>This work presents innovative strategies to reduce the search space in lattice enumeration algorithms, specifically through hybrid enumeration and sign-based pruning, contributing to more efficient solutions for the Shortest Vector Problem.</p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    \\r\\n    \\r\\n</article>\\r\\n"],"names":[],"mappings":"AAgCI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAC,CAAE,iBAAG,CACF,OAAO,CAAE,GACb,CACA,iBAAG,CACC,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,qBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb,CACA,gBAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB"}`
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
  set_store_value(currentPath, $currentPath = "Reducing Lattice Enumeration Search Trees", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-um0hrp_START -->${$$result.title = `<title>Reducing Lattice Enumeration Search Trees</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/layout"><meta name="abstract" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-um0hrp_END -->`, ""} <article class="svelte-1af2q2m">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1af2q2m" data-svelte-h="svelte-1avz5lv">Reducing Lattice Enumeration Search Trees</h4> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<span slot="venue" data-svelte-h="svelte-1xu511y"><a href="https://www.infocommunications.hu/documents/169298/4647244/InfocomJ_2019_4_All.pdf" class="svelte-1af2q2m">Infocommunications Journal, 2019</a></span>`;
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
            return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-1ua7sc0"><li class="svelte-1af2q2m"><a href="#introduction" class="svelte-1af2q2m">Introduction</a></li> <li class="svelte-1af2q2m"><a href="#previous" class="svelte-1af2q2m">Previous Work</a></li> <li class="svelte-1af2q2m"><a href="#contributions" class="svelte-1af2q2m">Contributions</a></li> <li class="svelte-1af2q2m"><a href="#methods" class="svelte-1af2q2m">Methodology</a></li> <li class="svelte-1af2q2m"><a href="#significance" class="svelte-1af2q2m">Significance</a></li> <li class="svelte-1af2q2m"><a href="#conclusion" class="svelte-1af2q2m">Conclusion</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-92fxym">Introduction</h6> <ul><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m" data-svelte-h="svelte-1o48ujf">Lattices:</strong> A lattice in ${escape(`\\( \\mathbb{R}^n \\)`)} is the set of all integer combinations of ${escape(`\\( n \\)`)} linearly independent vectors ${escape(`\\( b_1, b_2, ..., b_n \\)`)}.</li> <li class="svelte-1af2q2m" data-svelte-h="svelte-15xyn2h"><strong class="svelte-1af2q2m">Shortest Vector Problem (SVP):</strong> Given a lattice basis, the task is to find the non-zero lattice vector with the smallest Euclidean norm.</li> <li class="svelte-1af2q2m" data-svelte-h="svelte-2odpb3"><strong class="svelte-1af2q2m">Enumeration Algorithms:</strong> These algorithms perform an exhaustive search to find the shortest vector by exploring a search tree where nodes represent partial assignments of integer coefficients.</li> <li class="svelte-1af2q2m" data-svelte-h="svelte-1ug4p69"><strong class="svelte-1af2q2m">Pruning Techniques:</strong> Methods like those introduced by Schnorr, Euchner, and Hörner in the 1990s aim to reduce the search space by eliminating subtrees unlikely to contain the shortest vector, thereby improving efficiency.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-k8tpvg">Previous Work</h6> <ul data-svelte-h="svelte-18loghg"><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Early Enumeration Methods:</strong> In the 1980s, Fincke, Pohst, and Kannan developed deterministic algorithms based on exhaustive search within a convex set, with performance heavily dependent on the quality of the input basis.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Pruning Strategies:</strong> Schnorr, Euchner, and Hörner introduced pruning techniques in the 1990s to enhance enumeration efficiency by cutting off parts of the search tree deemed less promising.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Extreme Pruning:</strong> Gama, Nguyen, and Regev proposed extreme pruning in 2010, significantly reducing the search tree size by aggressively pruning, accepting a lower probability of finding the shortest vector in a single run but compensating through multiple runs with varied basis permutations.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-8mlfqz">Contributions</h6> <ul data-svelte-h="svelte-xkj919"><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Hybrid Enumeration Algorithm:</strong> The authors propose a hybrid enumeration approach that selects permutations of basis vectors to minimize the search tree size, leading to improved performance for large lattices.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Sign-Based Pruning Strategy:</strong> They introduce a pruning method based on estimating the signs of the coefficients that yield the shortest vector, effectively reducing the number of nodes in the search tree without missing the shortest vector in their experiments.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-1ynbecn">Methodology</h6> <ul data-svelte-h="svelte-mipyo"><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Basis Permutation:</strong> Investigated the impact of different permutations of basis vectors on the search tree size and identified classes of permutations that result in fewer nodes.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Hybrid Enumeration:</strong> Developed an algorithm that combines advantageous basis permutations with standard enumeration to enhance efficiency, particularly for large lattices.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Sign Estimation for Pruning:</strong> Devised a strategy to estimate the signs of coefficients leading to the shortest vector, enabling pruning of subtrees with unlikely sign combinations, thereby reducing the search space.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-iodqf7">Significance</h6> <ul data-svelte-h="svelte-1bkxdti"><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Efficiency Improvement:</strong> The proposed methods reduce the number of nodes in the enumeration search tree, leading to faster solutions for the Shortest Vector Problem.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Practical Applicability:</strong> The hybrid enumeration and sign-based pruning strategies can be integrated into existing lattice enumeration frameworks to enhance their performance.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Advancement in Pruning Techniques:</strong> The sign-based pruning approach offers a novel perspective on reducing search spaces in lattice enumeration algorithms.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-1h8nw31">Conclusion</h6> <p class="svelte-1af2q2m" data-svelte-h="svelte-o02cir">This work presents innovative strategies to reduce the search space in lattice enumeration algorithms, specifically through hybrid enumeration and sign-based pruning, contributing to more efficient solutions for the Shortest Vector Problem.</p>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
