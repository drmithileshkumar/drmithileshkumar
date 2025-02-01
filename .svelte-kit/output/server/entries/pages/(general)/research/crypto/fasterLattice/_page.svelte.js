import { a as subscribe, b as set_store_value } from "../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr2.js";
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
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    \\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, {Body, Head, Row, Cell} from '@smui/data-table';\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/research/content\\";\\r\\n    import { typeset } from '$lib/shared/typeset';\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n\\r\\n    import Paper from \\"$lib/components/Paper.svelte\\";\\r\\n\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Faster Lattice Enumeration\\";\\r\\n    $darkMode = false;\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h4 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Faster Lattice Enumeration</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/layout\\" />\\r\\n    <meta name=\\"abstract\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Faster Lattice Enumeration\\r\\n    </h4>\\r\\n    <Paper>\\r\\n        <span slot=\\"authors\\">\\r\\n            Mithilesh Kumar\\r\\n        </span>\\r\\n        <span slot=\\"title\\">\\r\\n            Faster Lattice Enumeration\\r\\n        </span>\\r\\n        <span slot=\\"venue\\">\\r\\n            <a href=\\"https://arxiv.org/abs/1912.01781\\">CoRR abs/1912.01781 (2019)</a>\\r\\n        </span>\\r\\n    </Paper>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#introduction\\">Introduction</a></li>\\r\\n                <li><a href=\\"#previous\\">Previous Work</a></li>\\r\\n                <li><a href=\\"#contributions\\">Contributions</a></li>\\r\\n                <li><a href=\\"#methods\\">Methodology</a></li>\\r\\n                <li><a href=\\"#significance\\">Significance</a></li>\\r\\n                <li><a href=\\"#conclusion\\">Conclusion</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Introduction</h6>\\r\\n            <ul>\\r\\n                <li><strong>Lattice Reduction:</strong> Transforms a given lattice basis into another basis to simplify problems like finding the shortest vector. Common algorithms include LLL and BKZ reductions.</li>\\r\\n                <li><strong>Obtuse Basis:</strong> A newly defined class of bases where the angle between any pair of basis vectors is obtuse (i.e., their inner product is non-positive).</li>\\r\\n                <li><strong>Research Objective:</strong> To demonstrate that any lattice basis can be transformed into an obtuse basis in \\\\( O(n^4) \\\\) time, facilitating more efficient lattice enumeration.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Previous Work</h6>\\r\\n            <ul>\\r\\n                <li><strong>LLL Reduction:</strong> Introduced by Lenstra, Lenstra, and Lovász, this polynomial-time algorithm produces a nearly orthogonal basis but doesn't guarantee obtuse angles between basis vectors.</li>\\r\\n                <li><strong>BKZ Reduction:</strong> An extension of LLL that provides stronger reductions using block-wise techniques, yet still may not yield an obtuse basis.</li>\\r\\n                <li><strong>Enumeration Algorithms:</strong> Techniques like Kannan's algorithm systematically explore lattice points within a certain radius but can be computationally intensive.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Contributions</h6>\\r\\n            <ul>\\r\\n                <li><strong>Obtuse Basis Transformation:</strong> Developed an algorithm to convert any lattice basis into an obtuse basis in \\\\( O(n^4) \\\\) time.</li>\\r\\n                <li><strong>Positive Coefficients Property:</strong> In an obtuse basis, the coefficients \\\\( v_1, v_2, ..., v_n \\\\) in the linear combination \\\\( s = v_1b_1 + v_2b_2 + ... + v_nb_n \\\\) for the shortest vector \\\\( s \\\\) can all be chosen as positive integers.</li>\\r\\n                <li><strong>Enhanced Enumeration Efficiency:</strong> This property allows lattice enumeration algorithms to operate more efficiently, reducing the search space exponentially.</li>\\r\\n                <li><strong>Compatibility with Extreme Pruning:</strong> The obtuse basis is compatible with extreme pruning techniques, further accelerating the enumeration process.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Methodology</h6>\\r\\n            <ul>\\r\\n                <li><strong>Obtuse Basis Algorithm:</strong> Introduced a deterministic algorithm that transforms any given lattice basis into an obtuse basis by adjusting the signs of basis vectors to ensure non-positive inner products between all pairs.</li>\\r\\n                <li><strong>Enumeration Process:</strong> Utilized the property that in an obtuse basis, all coefficients in the representation of the shortest vector can be positive, leading to a more streamlined and faster enumeration process.</li>\\r\\n                <li><strong>Extreme Pruning Integration:</strong> Demonstrated that extreme pruning methods can be effectively applied to the obtuse basis, further enhancing enumeration speed.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Significance</h6>\\r\\n            <ul>\\r\\n                <li><strong>Exponential Speedup:</strong> The transformation to an obtuse basis results in an exponential reduction in the search space for lattice enumeration algorithms.</li>\\r\\n                <li><strong>Practical Efficiency:</strong> The proposed methods offer practical improvements in solving the shortest vector problem, which is fundamental in fields like cryptography and number theory.</li>\\r\\n                <li><strong>Algorithmic Compatibility:</strong> The obtuse basis framework is compatible with existing enumeration enhancements like extreme pruning, making it versatile for various applications.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Conclusion</h6>\\r\\n            <p>This work introduces the concept of an obtuse basis and provides an efficient algorithm to transform any lattice basis into this form. The obtuse basis significantly accelerates lattice enumeration algorithms by allowing all positive coefficients in the representation of the shortest vector and is compatible with advanced techniques like extreme pruning.</p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    \\r\\n</article>\\r\\n"],"names":[],"mappings":"AAgCI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAC,CAAE,iBAAG,CACF,OAAO,CAAE,GACb,CACA,iBAAG,CACC,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,qBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb,CACA,gBAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB"}`
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
  set_store_value(currentPath, $currentPath = "Faster Lattice Enumeration", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-4hlmbu_START -->${$$result.title = `<title>Faster Lattice Enumeration</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/layout"><meta name="abstract" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-4hlmbu_END -->`, ""} <article class="svelte-1af2q2m">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1af2q2m" data-svelte-h="svelte-9mt6rm">Faster Lattice Enumeration</h4> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<span slot="venue" data-svelte-h="svelte-19mzpv0"><a href="https://arxiv.org/abs/1912.01781" class="svelte-1af2q2m">CoRR abs/1912.01781 (2019)</a></span>`;
    },
    title: () => {
      return `<span slot="title" data-svelte-h="svelte-1cc4q59">Faster Lattice Enumeration</span>`;
    },
    authors: () => {
      return `<span slot="authors" data-svelte-h="svelte-1190io">Mithilesh Kumar</span>`;
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
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-92fxym">Introduction</h6> <ul data-svelte-h="svelte-17c5w1f"><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Lattice Reduction:</strong> Transforms a given lattice basis into another basis to simplify problems like finding the shortest vector. Common algorithms include LLL and BKZ reductions.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Obtuse Basis:</strong> A newly defined class of bases where the angle between any pair of basis vectors is obtuse (i.e., their inner product is non-positive).</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Research Objective:</strong> To demonstrate that any lattice basis can be transformed into an obtuse basis in \\( O(n^4) \\) time, facilitating more efficient lattice enumeration.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-k8tpvg">Previous Work</h6> <ul data-svelte-h="svelte-1fhobxd"><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">LLL Reduction:</strong> Introduced by Lenstra, Lenstra, and Lovász, this polynomial-time algorithm produces a nearly orthogonal basis but doesn&#39;t guarantee obtuse angles between basis vectors.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">BKZ Reduction:</strong> An extension of LLL that provides stronger reductions using block-wise techniques, yet still may not yield an obtuse basis.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Enumeration Algorithms:</strong> Techniques like Kannan&#39;s algorithm systematically explore lattice points within a certain radius but can be computationally intensive.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-8mlfqz">Contributions</h6> <ul data-svelte-h="svelte-1mblxc7"><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Obtuse Basis Transformation:</strong> Developed an algorithm to convert any lattice basis into an obtuse basis in \\( O(n^4) \\) time.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Positive Coefficients Property:</strong> In an obtuse basis, the coefficients \\( v_1, v_2, ..., v_n \\) in the linear combination \\( s = v_1b_1 + v_2b_2 + ... + v_nb_n \\) for the shortest vector \\( s \\) can all be chosen as positive integers.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Enhanced Enumeration Efficiency:</strong> This property allows lattice enumeration algorithms to operate more efficiently, reducing the search space exponentially.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Compatibility with Extreme Pruning:</strong> The obtuse basis is compatible with extreme pruning techniques, further accelerating the enumeration process.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-1ynbecn">Methodology</h6> <ul data-svelte-h="svelte-1jbc8cp"><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Obtuse Basis Algorithm:</strong> Introduced a deterministic algorithm that transforms any given lattice basis into an obtuse basis by adjusting the signs of basis vectors to ensure non-positive inner products between all pairs.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Enumeration Process:</strong> Utilized the property that in an obtuse basis, all coefficients in the representation of the shortest vector can be positive, leading to a more streamlined and faster enumeration process.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Extreme Pruning Integration:</strong> Demonstrated that extreme pruning methods can be effectively applied to the obtuse basis, further enhancing enumeration speed.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-iodqf7">Significance</h6> <ul data-svelte-h="svelte-1kpw7ff"><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Exponential Speedup:</strong> The transformation to an obtuse basis results in an exponential reduction in the search space for lattice enumeration algorithms.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Practical Efficiency:</strong> The proposed methods offer practical improvements in solving the shortest vector problem, which is fundamental in fields like cryptography and number theory.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Algorithmic Compatibility:</strong> The obtuse basis framework is compatible with existing enumeration enhancements like extreme pruning, making it versatile for various applications.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-1h8nw31">Conclusion</h6> <p class="svelte-1af2q2m" data-svelte-h="svelte-q9brzd">This work introduces the concept of an obtuse basis and provides an efficient algorithm to transform any lattice basis into this form. The obtuse basis significantly accelerates lattice enumeration algorithms by allowing all positive coefficients in the representation of the shortest vector and is compatible with advanced techniques like extreme pruning.</p>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
