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
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    \\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import {page} from \'$app/stores\';\\r\\n    import {onMount} from \'svelte\';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, {Body, Head, Row, Cell} from \'@smui/data-table\';\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from \'$lib/components/NavList.svelte\'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/research/content\\";\\r\\n    import { typeset } from \'$lib/shared/typeset\';\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n\\r\\n    import Paper from \\"$lib/components/Paper.svelte\\";\\r\\n\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Induced Matching\\";\\r\\n    $darkMode = false;\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h4 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Induced Matching</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/layout\\" />\\r\\n    <meta name=\\"abstract\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Induced Matching\\r\\n    </h4>\\r\\n    <Paper>\\r\\n        <span slot=\\"authors\\">\\r\\n            Akash Kumar, Mithilesh Kumar\\r\\n        </span>\\r\\n        <span slot=\\"title\\">\\r\\n            Deletion to Induced Matching\\r\\n        </span>\\r\\n        <span slot=\\"venue\\">\\r\\n            <a href=\\"https://arxiv.org/abs/2008.09660\\">CoRR abs/2008.09660 (2020)</a>\\r\\n        </span>\\r\\n    </Paper>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#introduction\\">Introduction</a></li>\\r\\n                <li><a href=\\"#previous\\">Previous Work</a></li>\\r\\n                <li><a href=\\"#contributions\\">Contributions</a></li>\\r\\n                <li><a href=\\"#methods\\">Methodology</a></li>\\r\\n                <li><a href=\\"#significance\\">Significance</a></li>\\r\\n                <li><a href=\\"#conclusion\\">Conclusion</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Introduction</h6>\\r\\n            <ul>\\r\\n                <li><strong>Induced Matching:</strong> A set of edges in a graph where no two edges share a common vertex, and no edge exists between any two edges in the set.</li>\\r\\n                <li><strong>Deletion to Induced Matching Problem:</strong> Given a graph {`\\\\\\\\( G \\\\\\\\)`} and an integer {`\\\\\\\\( k \\\\\\\\)`}, determine whether there exists a set {`\\\\\\\\( S \\\\\\\\subseteq V(G) \\\\\\\\)`} with {`\\\\\\\\( |S| \\\\\\\\leq k \\\\\\\\)`} such that every connected component in {`\\\\\\\\( G - S \\\\\\\\)`} is an induced matching.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Previous Work</h6>\\r\\n            <ul>\\r\\n                <li><strong>Vertex Cover Problem:</strong> A well-studied problem where the goal is to find a set of vertices covering all edges in the graph.</li>\\r\\n                <li><strong>Generalization:</strong> The Deletion to Induced Matching problem can be seen as a generalization of the Vertex Cover problem, focusing on reducing the graph to disjoint 2-vertex components.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Contributions</h6>\\r\\n            <ul>\\r\\n                <li><strong>Fixed-Parameter Tractable Algorithm:</strong> Developed an algorithm with a running time of {`\\\\\\\\( O^*(1.748^k) \\\\\\\\)`} using branch-and-reduce strategy and path decomposition.</li>\\r\\n                <li><strong>Exact Exponential Algorithm:</strong> Extended the approach to provide an exact exponential-time algorithm for the problem.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Methodology</h6>\\r\\n            <ul>\\r\\n                <li><strong>Branch-and-Reduce Strategy:</strong> Applied branching techniques to systematically explore possible vertex deletions.</li>\\r\\n                <li><strong>Path Decomposition:</strong> Utilized path decomposition to manage and simplify the graph structure during the algorithm\'s execution.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Significance</h6>\\r\\n            <ul>\\r\\n                <li><strong>Algorithmic Efficiency:</strong> The proposed algorithm improves upon previous approaches in terms of running time and parameterization.</li>\\r\\n                <li><strong>Broader Implications:</strong> The techniques developed may be applicable to other graph modification problems and contribute to the field of parameterized complexity.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Conclusion</h6>\\r\\n            <p>This work presents an efficient algorithm for the Deletion to Induced Matching problem, advancing the understanding and methodology for tackling such graph modification challenges.</p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    \\r\\n</article>\\r\\n"],"names":[],"mappings":"AAgCI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAC,CAAE,iBAAG,CACF,OAAO,CAAE,GACb,CACA,iBAAG,CACC,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,qBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb,CACA,gBAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB"}'
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
  set_store_value(currentPath, $currentPath = "Induced Matching", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1hlbr9j_START -->${$$result.title = `<title>Induced Matching</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/layout"><meta name="abstract" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1hlbr9j_END -->`, ""} <article class="svelte-1af2q2m">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1af2q2m" data-svelte-h="svelte-11gqtqb">Induced Matching</h4> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<span slot="venue" data-svelte-h="svelte-z3m55a"><a href="https://arxiv.org/abs/2008.09660" class="svelte-1af2q2m">CoRR abs/2008.09660 (2020)</a></span>`;
    },
    title: () => {
      return `<span slot="title" data-svelte-h="svelte-z0j0kz">Deletion to Induced Matching</span>`;
    },
    authors: () => {
      return `<span slot="authors" data-svelte-h="svelte-w9qqc2">Akash Kumar, Mithilesh Kumar</span>`;
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
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-92fxym">Introduction</h6> <ul><li class="svelte-1af2q2m" data-svelte-h="svelte-mqr0bi"><strong class="svelte-1af2q2m">Induced Matching:</strong> A set of edges in a graph where no two edges share a common vertex, and no edge exists between any two edges in the set.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m" data-svelte-h="svelte-1vrqks9">Deletion to Induced Matching Problem:</strong> Given a graph ${escape(`\\( G \\)`)} and an integer ${escape(`\\( k \\)`)}, determine whether there exists a set ${escape(`\\( S \\subseteq V(G) \\)`)} with ${escape(`\\( |S| \\leq k \\)`)} such that every connected component in ${escape(`\\( G - S \\)`)} is an induced matching.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-k8tpvg">Previous Work</h6> <ul data-svelte-h="svelte-d3ire3"><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Vertex Cover Problem:</strong> A well-studied problem where the goal is to find a set of vertices covering all edges in the graph.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Generalization:</strong> The Deletion to Induced Matching problem can be seen as a generalization of the Vertex Cover problem, focusing on reducing the graph to disjoint 2-vertex components.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-8mlfqz">Contributions</h6> <ul><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m" data-svelte-h="svelte-1uv85ov">Fixed-Parameter Tractable Algorithm:</strong> Developed an algorithm with a running time of ${escape(`\\( O^*(1.748^k) \\)`)} using branch-and-reduce strategy and path decomposition.</li> <li class="svelte-1af2q2m" data-svelte-h="svelte-z84qzx"><strong class="svelte-1af2q2m">Exact Exponential Algorithm:</strong> Extended the approach to provide an exact exponential-time algorithm for the problem.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-1ynbecn">Methodology</h6> <ul data-svelte-h="svelte-19ydajv"><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Branch-and-Reduce Strategy:</strong> Applied branching techniques to systematically explore possible vertex deletions.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Path Decomposition:</strong> Utilized path decomposition to manage and simplify the graph structure during the algorithm&#39;s execution.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-iodqf7">Significance</h6> <ul data-svelte-h="svelte-13tmikw"><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Algorithmic Efficiency:</strong> The proposed algorithm improves upon previous approaches in terms of running time and parameterization.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Broader Implications:</strong> The techniques developed may be applicable to other graph modification problems and contribute to the field of parameterized complexity.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-1h8nw31">Conclusion</h6> <p class="svelte-1af2q2m" data-svelte-h="svelte-1svvmha">This work presents an efficient algorithm for the Deletion to Induced Matching problem, advancing the understanding and methodology for tackling such graph modification challenges.</p>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BP0ilzta.js.map
