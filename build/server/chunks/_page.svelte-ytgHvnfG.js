import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr2-CDgUAJs6.js';
import { g as githubDark, a as github } from './github-dark-BC3MHtr2.js';
import './Suffix-CtI6fDI6.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import { p as page } from './stores3-DPEAZJnM.js';
import './Subheader-DEm_inUP.js';
import './client-k3u4ChD_.js';
import { d as darkMode, c as currentPath, n as navList } from './stores-Cecnyqn_.js';
import { c as contentNav, a as contents } from './content7-BIrw7GYp.js';
import { P as Pathlist } from './Pathlist-B9wgcfC1.js';
import { C as CourseNavigation } from './CourseNavigation-DznSxbmO.js';
import { P as Paper } from './Paper2-DwFUsx4R.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './exports-kR70XCWV.js';
import './index2-D2s-XE5r.js';

const css$1 = {
  code: "article.svelte-1af2q2m{display:flex;flex-direction:column;gap:0.5em}p.svelte-1af2q2m,li.svelte-1af2q2m{opacity:0.8}h4.svelte-1af2q2m{margin:0.5em 0}h6.svelte-1af2q2m{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}strong.svelte-1af2q2m{color:goldenrod;opacity:1}a.svelte-1af2q2m{cursor:pointer;text-decoration:none}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    \\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, {Body, Head, Row, Cell} from '@smui/data-table';\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/research/content\\";\\r\\n    import { typeset } from '$lib/shared/typeset';\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n\\r\\n    import Paper from \\"$lib/components/Paper.svelte\\";\\r\\n\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Self-dual Codes\\";\\r\\n    $darkMode = false;\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h4 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Self-dual Codes</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/layout\\" />\\r\\n    <meta name=\\"abstract\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Self-dual Codes\\r\\n    </h4>\\r\\n    <Paper>\\r\\n        <span slot=\\"authors\\">\\r\\n            Mithilesh Kumar, Srimathi Varadarajan, Håvard Raddum\\r\\n        </span>\\r\\n        <span slot=\\"title\\">\\r\\n            Graphs and Self-dual additive codes over GF(4)\\r\\n        </span>\\r\\n        <span slot=\\"venue\\">\\r\\n            <a href=\\"https://www.lebesgue.fr/sites/default/files/proceedings_WCC/WCC_2019_paper_24.pdf\\">WCC, 2019</a> \\r\\n        </span>\\r\\n    </Paper>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#introduction\\">Introduction</a></li>\\r\\n                <li><a href=\\"#previous\\">Previous Work</a></li>\\r\\n                <li><a href=\\"#contributions\\">Contributions</a></li>\\r\\n                <li><a href=\\"#methods\\">Methodology</a></li>\\r\\n                <li><a href=\\"#significance\\">Significance</a></li>\\r\\n                <li><a href=\\"#conclusion\\">Conclusion</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Introduction</h6>\\r\\n            <ul>\\r\\n                <li><strong>Self-dual Additive Codes over GF(4):</strong> These codes have applications in cryptography, quantum error correction, and the construction of unimodular lattices.</li>\\r\\n                <li><strong>Graph Representation:</strong> There is a one-to-one correspondence between self-dual additive codes over GF(4) and simple undirected graphs.</li>\\r\\n                <li><strong>Research Objective:</strong> To study self-dual codes whose corresponding graphs have fixed rankwidth, aiming to expedite their classification.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Previous Work</h6>\\r\\n            <ul>\\r\\n                <li><strong>Classification Efforts:</strong> Prior studies have classified self-dual additive codes over GF(4) up to length 12, but the complexity increases significantly for longer codes.</li>\\r\\n                <li><strong>Graph Isomorphism and Weight Enumeration:</strong> Existing algorithms for classifying these codes involve computationally intensive steps like graph isomorphism testing and weight enumeration.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Contributions</h6>\\r\\n            <ul>\\r\\n                <li><strong>Focus on Rankwidth:</strong> Initiated the study of self-dual codes whose corresponding graphs have fixed rankwidth, particularly rankwidth 1, to simplify classification.</li>\\r\\n                <li><strong>Improved Classification Algorithm:</strong> By leveraging the structural properties of rankwidth 1 graphs, the classification process becomes exponentially faster, reducing the branching factor from {\`\\\\\\\\(2^n - 1\\\\\\\\)\`} to {\`\\\\\\\\(3n - 3\\\\\\\\)\`}.</li>\\r\\n                <li><strong>Weight Enumerator Computation:</strong> Introduced a new algorithm using Binary Decision Diagrams (BDD) to compute weight enumerators more efficiently.</li>\\r\\n                <li><strong>Minimum Distance Analysis:</strong> Demonstrated that the minimum distance of a code is at least 3 if and only if the corresponding graph lacks pendant vertices and twin-pairs.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Methodology</h6>\\r\\n            <ul>\\r\\n                <li><strong>Rankwidth and Graph Properties:</strong> Utilized the fact that graphs with rankwidth 1 are distance-hereditary and that rankwidth is preserved under local complementation, aiding in efficient classification.</li>\\r\\n                <li><strong>Binary Decision Diagrams (BDD):</strong> Employed BDDs to represent and compute weight enumerators of self-dual codes, providing a unified and efficient approach.</li>\\r\\n                <li><strong>Minimum Distance Algorithm:</strong> Developed an algorithm to compute an approximate minimum distance of codes corresponding to general graphs.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Significance</h6>\\r\\n            <ul>\\r\\n                <li><strong>Enhanced Classification Efficiency:</strong> The approach allows for faster classification of self-dual additive codes over GF(4), especially for larger code lengths.</li>\\r\\n                <li><strong>Broader Applicability:</strong> The methods can be applied to other problems involving graph-based representations of codes.</li>\\r\\n                <li><strong>Insight into Code Properties:</strong> The analysis of minimum distance in relation to graph structures provides deeper understanding of code characteristics.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Conclusion</h6>\\r\\n            <p>This work advances the study of self-dual additive codes over GF(4) by focusing on graphs with fixed rankwidth, introducing efficient algorithms for classification and weight enumeration, and providing insights into the relationship between graph structures and code properties.</p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    \\r\\n</article>\\r\\n"],"names":[],"mappings":"AAgCI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAC,CAAE,iBAAG,CACF,OAAO,CAAE,GACb,CACA,iBAAG,CACC,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,qBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb,CACA,gBAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB"}`
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
  set_store_value(currentPath, $currentPath = "Self-dual Codes", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-16wsns1_START -->${$$result.title = `<title>Self-dual Codes</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/layout"><meta name="abstract" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-16wsns1_END -->`, ""} <article class="svelte-1af2q2m">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1af2q2m" data-svelte-h="svelte-14z9nlr">Self-dual Codes</h4> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<span slot="venue" data-svelte-h="svelte-ed3u82"><a href="https://www.lebesgue.fr/sites/default/files/proceedings_WCC/WCC_2019_paper_24.pdf" class="svelte-1af2q2m">WCC, 2019</a></span>`;
    },
    title: () => {
      return `<span slot="title" data-svelte-h="svelte-d8wtey">Graphs and Self-dual additive codes over GF(4)</span>`;
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
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-92fxym">Introduction</h6> <ul data-svelte-h="svelte-wwza0k"><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Self-dual Additive Codes over GF(4):</strong> These codes have applications in cryptography, quantum error correction, and the construction of unimodular lattices.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Graph Representation:</strong> There is a one-to-one correspondence between self-dual additive codes over GF(4) and simple undirected graphs.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Research Objective:</strong> To study self-dual codes whose corresponding graphs have fixed rankwidth, aiming to expedite their classification.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-k8tpvg">Previous Work</h6> <ul data-svelte-h="svelte-1slu504"><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Classification Efforts:</strong> Prior studies have classified self-dual additive codes over GF(4) up to length 12, but the complexity increases significantly for longer codes.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Graph Isomorphism and Weight Enumeration:</strong> Existing algorithms for classifying these codes involve computationally intensive steps like graph isomorphism testing and weight enumeration.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-8mlfqz">Contributions</h6> <ul><li class="svelte-1af2q2m" data-svelte-h="svelte-13vosxy"><strong class="svelte-1af2q2m">Focus on Rankwidth:</strong> Initiated the study of self-dual codes whose corresponding graphs have fixed rankwidth, particularly rankwidth 1, to simplify classification.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m" data-svelte-h="svelte-1y3b6jx">Improved Classification Algorithm:</strong> By leveraging the structural properties of rankwidth 1 graphs, the classification process becomes exponentially faster, reducing the branching factor from ${escape(`\\(2^n - 1\\)`)} to ${escape(`\\(3n - 3\\)`)}.</li> <li class="svelte-1af2q2m" data-svelte-h="svelte-1fbsxjh"><strong class="svelte-1af2q2m">Weight Enumerator Computation:</strong> Introduced a new algorithm using Binary Decision Diagrams (BDD) to compute weight enumerators more efficiently.</li> <li class="svelte-1af2q2m" data-svelte-h="svelte-1eif97e"><strong class="svelte-1af2q2m">Minimum Distance Analysis:</strong> Demonstrated that the minimum distance of a code is at least 3 if and only if the corresponding graph lacks pendant vertices and twin-pairs.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-1ynbecn">Methodology</h6> <ul data-svelte-h="svelte-1wuwrn4"><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Rankwidth and Graph Properties:</strong> Utilized the fact that graphs with rankwidth 1 are distance-hereditary and that rankwidth is preserved under local complementation, aiding in efficient classification.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Binary Decision Diagrams (BDD):</strong> Employed BDDs to represent and compute weight enumerators of self-dual codes, providing a unified and efficient approach.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Minimum Distance Algorithm:</strong> Developed an algorithm to compute an approximate minimum distance of codes corresponding to general graphs.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-iodqf7">Significance</h6> <ul data-svelte-h="svelte-154no8c"><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Enhanced Classification Efficiency:</strong> The approach allows for faster classification of self-dual additive codes over GF(4), especially for larger code lengths.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Broader Applicability:</strong> The methods can be applied to other problems involving graph-based representations of codes.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Insight into Code Properties:</strong> The analysis of minimum distance in relation to graph structures provides deeper understanding of code characteristics.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-1h8nw31">Conclusion</h6> <p class="svelte-1af2q2m" data-svelte-h="svelte-1o4txmb">This work advances the study of self-dual additive codes over GF(4) by focusing on graphs with fixed rankwidth, introducing efficient algorithms for classification and weight enumeration, and providing insights into the relationship between graph structures and code properties.</p>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ytgHvnfG.js.map
