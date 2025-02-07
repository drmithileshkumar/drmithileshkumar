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
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    \\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import {page} from \'$app/stores\';\\r\\n    import {onMount} from \'svelte\';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, {Body, Head, Row, Cell} from \'@smui/data-table\';\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from \'$lib/components/NavList.svelte\'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/research/content\\";\\r\\n    import { typeset } from \'$lib/shared/typeset\';\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n\\r\\n    import Paper from \\"$lib/components/Paper.svelte\\";\\r\\n\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Induced Matching\\";\\r\\n    // $darkMode = false;\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n        max-width: 750px;\\r\\n        width: 90%;\\r\\n        margin: auto;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h4 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Induced Matching</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/layout\\" />\\r\\n    <meta name=\\"abstract\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Induced Matching\\r\\n    </h4>\\r\\n    <Paper>\\r\\n        <span slot=\\"authors\\">\\r\\n            Akash Kumar, Mithilesh Kumar\\r\\n        </span>\\r\\n        <span slot=\\"title\\">\\r\\n            Deletion to Induced Matching\\r\\n        </span>\\r\\n        <span slot=\\"venue\\">\\r\\n            <a href=\\"https://arxiv.org/abs/2008.09660\\">CoRR abs/2008.09660 (2020)</a>\\r\\n        </span>\\r\\n    </Paper>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#introduction\\">Introduction</a></li>\\r\\n                <li><a href=\\"#previous\\">Previous Work</a></li>\\r\\n                <li><a href=\\"#contributions\\">Contributions</a></li>\\r\\n                <li><a href=\\"#methods\\">Methodology</a></li>\\r\\n                <li><a href=\\"#significance\\">Significance</a></li>\\r\\n                <li><a href=\\"#conclusion\\">Conclusion</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Introduction</h6>\\r\\n            <ul>\\r\\n                <li><strong>Induced Matching:</strong> A set of edges in a graph where no two edges share a common vertex, and no edge exists between any two edges in the set.</li>\\r\\n                <li><strong>Deletion to Induced Matching Problem:</strong> Given a graph {`\\\\\\\\( G \\\\\\\\)`} and an integer {`\\\\\\\\( k \\\\\\\\)`}, determine whether there exists a set {`\\\\\\\\( S \\\\\\\\subseteq V(G) \\\\\\\\)`} with {`\\\\\\\\( |S| \\\\\\\\leq k \\\\\\\\)`} such that every connected component in {`\\\\\\\\( G - S \\\\\\\\)`} is an induced matching.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Previous Work</h6>\\r\\n            <ul>\\r\\n                <li><strong>Vertex Cover Problem:</strong> A well-studied problem where the goal is to find a set of vertices covering all edges in the graph.</li>\\r\\n                <li><strong>Generalization:</strong> The Deletion to Induced Matching problem can be seen as a generalization of the Vertex Cover problem, focusing on reducing the graph to disjoint 2-vertex components.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Contributions</h6>\\r\\n            <ul>\\r\\n                <li><strong>Fixed-Parameter Tractable Algorithm:</strong> Developed an algorithm with a running time of {`\\\\\\\\( O^*(1.748^k) \\\\\\\\)`} using branch-and-reduce strategy and path decomposition.</li>\\r\\n                <li><strong>Exact Exponential Algorithm:</strong> Extended the approach to provide an exact exponential-time algorithm for the problem.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Methodology</h6>\\r\\n            <p>The strategy is to reduce the problem to dynamic programming on <strong>path decompositon</strong> of the graph.</p>\\r\\n            <p>Via branching it can be ensured that the maximum degree in the graph is at most 3.</p>\\r\\n            <p>The following theorem guarantees that there is a path decomposition:</p>\\r\\n            <strong>Theorem (Fedor, Høie)</strong>\\r\\n            <p>\\r\\n                For any \\\\(\\\\epsilon \\\\gt 0\\\\), there exists an integer \\\\(n_\\\\epsilon\\\\) such that for every graph \\\\(G\\\\) of maximum degree 3 with at least \\\\(n_\\\\epsilon\\\\) vertices has path decomposition of path width at most {`\\\\\\\\((\\\\\\\\frac{1}{6} + \\\\\\\\epsilon)n\\\\\\\\)`}. \\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Significance</h6>\\r\\n            <ul>\\r\\n                <li><strong>Algorithmic Efficiency:</strong> The proposed algorithm improves upon previous approaches in terms of running time and parameterization.</li>\\r\\n                <li><strong>Broader Implications:</strong> The techniques developed may be applicable to other graph modification problems and contribute to the field of parameterized complexity.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Conclusion</h6>\\r\\n            <p>This work presents an efficient algorithm for the Deletion to Induced Matching problem, advancing the understanding and methodology for tackling such graph modification challenges.</p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    \\r\\n</article>\\r\\n"],"names":[],"mappings":"AAgCI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KAAK,CACV,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IACZ,CACA,eAAC,CAAE,gBAAG,CACF,OAAO,CAAE,GACb,CACA,gBAAG,CACC,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,gBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,oBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb,CACA,eAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB"}'
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
  set_store_value(currentPath, $currentPath = "Induced Matching", $currentPath);
  $$result.css.add(css$1);
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_darkMode();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1hlbr9j_START -->${$$result.title = `<title>Induced Matching</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/layout"><meta name="abstract" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1hlbr9j_END -->`, ""} <article class="svelte-nv31ix">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-nv31ix" data-svelte-h="svelte-11gqtqb">Induced Matching</h4> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<span slot="venue" data-svelte-h="svelte-z3m55a"><a href="https://arxiv.org/abs/2008.09660" class="svelte-nv31ix">CoRR abs/2008.09660 (2020)</a></span>`;
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
            return `<h6 class="svelte-nv31ix" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-1ua7sc0"><li class="svelte-nv31ix"><a href="#introduction" class="svelte-nv31ix">Introduction</a></li> <li class="svelte-nv31ix"><a href="#previous" class="svelte-nv31ix">Previous Work</a></li> <li class="svelte-nv31ix"><a href="#contributions" class="svelte-nv31ix">Contributions</a></li> <li class="svelte-nv31ix"><a href="#methods" class="svelte-nv31ix">Methodology</a></li> <li class="svelte-nv31ix"><a href="#significance" class="svelte-nv31ix">Significance</a></li> <li class="svelte-nv31ix"><a href="#conclusion" class="svelte-nv31ix">Conclusion</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-nv31ix" data-svelte-h="svelte-92fxym">Introduction</h6> <ul><li class="svelte-nv31ix" data-svelte-h="svelte-mqr0bi"><strong class="svelte-nv31ix">Induced Matching:</strong> A set of edges in a graph where no two edges share a common vertex, and no edge exists between any two edges in the set.</li> <li class="svelte-nv31ix"><strong class="svelte-nv31ix" data-svelte-h="svelte-1vrqks9">Deletion to Induced Matching Problem:</strong> Given a graph ${escape(`\\( G \\)`)} and an integer ${escape(`\\( k \\)`)}, determine whether there exists a set ${escape(`\\( S \\subseteq V(G) \\)`)} with ${escape(`\\( |S| \\leq k \\)`)} such that every connected component in ${escape(`\\( G - S \\)`)} is an induced matching.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-nv31ix" data-svelte-h="svelte-k8tpvg">Previous Work</h6> <ul data-svelte-h="svelte-d3ire3"><li class="svelte-nv31ix"><strong class="svelte-nv31ix">Vertex Cover Problem:</strong> A well-studied problem where the goal is to find a set of vertices covering all edges in the graph.</li> <li class="svelte-nv31ix"><strong class="svelte-nv31ix">Generalization:</strong> The Deletion to Induced Matching problem can be seen as a generalization of the Vertex Cover problem, focusing on reducing the graph to disjoint 2-vertex components.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-nv31ix" data-svelte-h="svelte-8mlfqz">Contributions</h6> <ul><li class="svelte-nv31ix"><strong class="svelte-nv31ix" data-svelte-h="svelte-1uv85ov">Fixed-Parameter Tractable Algorithm:</strong> Developed an algorithm with a running time of ${escape(`\\( O^*(1.748^k) \\)`)} using branch-and-reduce strategy and path decomposition.</li> <li class="svelte-nv31ix" data-svelte-h="svelte-z84qzx"><strong class="svelte-nv31ix">Exact Exponential Algorithm:</strong> Extended the approach to provide an exact exponential-time algorithm for the problem.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-nv31ix" data-svelte-h="svelte-1ynbecn">Methodology</h6> <p class="svelte-nv31ix" data-svelte-h="svelte-osr9p1">The strategy is to reduce the problem to dynamic programming on <strong class="svelte-nv31ix">path decompositon</strong> of the graph.</p> <p class="svelte-nv31ix" data-svelte-h="svelte-1vr66i5">Via branching it can be ensured that the maximum degree in the graph is at most 3.</p> <p class="svelte-nv31ix" data-svelte-h="svelte-vidj71">The following theorem guarantees that there is a path decomposition:</p> <strong class="svelte-nv31ix" data-svelte-h="svelte-zb7p43">Theorem (Fedor, Høie)</strong> <p class="svelte-nv31ix">For any \\(\\epsilon \\gt 0\\), there exists an integer \\(n_\\epsilon\\) such that for every graph \\(G\\) of maximum degree 3 with at least \\(n_\\epsilon\\) vertices has path decomposition of path width at most ${escape(`\\((\\frac{1}{6} + \\epsilon)n\\)`)}.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-nv31ix" data-svelte-h="svelte-iodqf7">Significance</h6> <ul data-svelte-h="svelte-13tmikw"><li class="svelte-nv31ix"><strong class="svelte-nv31ix">Algorithmic Efficiency:</strong> The proposed algorithm improves upon previous approaches in terms of running time and parameterization.</li> <li class="svelte-nv31ix"><strong class="svelte-nv31ix">Broader Implications:</strong> The techniques developed may be applicable to other graph modification problems and contribute to the field of parameterized complexity.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-nv31ix" data-svelte-h="svelte-1h8nw31">Conclusion</h6> <p class="svelte-nv31ix" data-svelte-h="svelte-1svvmha">This work presents an efficient algorithm for the Deletion to Induced Matching problem, advancing the understanding and methodology for tackling such graph modification challenges.</p>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-i4GVPHFS.js.map
