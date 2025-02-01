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
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    \\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import {page} from \'$app/stores\';\\r\\n    import {onMount} from \'svelte\';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, {Body, Head, Row, Cell} from \'@smui/data-table\';\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from \'$lib/components/NavList.svelte\'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/research/content\\";\\r\\n    import { typeset } from \'$lib/shared/typeset\';\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n\\r\\n    import Paper from \\"$lib/components/Paper.svelte\\";\\r\\n\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Tournament\\";\\r\\n    $darkMode = false;\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h4 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Tournaments</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/layout\\" />\\r\\n    <meta name=\\"abstract\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Tournament\\r\\n    </h4>\\r\\n    <Paper>\\r\\n        <span slot=\\"authors\\">\\r\\n            Mithilesh Kumar, Daniel Lokshtanov\\r\\n        </span>\\r\\n        <span slot=\\"title\\">\\r\\n            Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Tournaments\\r\\n        </span>\\r\\n        <span slot=\\"venue\\">\\r\\n            <a href=\\"https://doi.org/10.4230/LIPIcs.STACS.2016.49\\">STACS 2016: 49:1-49:13</a>, <a href=\\"https://doi.org/10.48550/arXiv.1510.07676\\">CoRR abs/1510.07676 (2015)</a>\\r\\n        </span>\\r\\n    </Paper>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#introduction\\">Introduction</a></li>\\r\\n                <li><a href=\\"#previous\\">Previous Work</a></li>\\r\\n                <li><a href=\\"#contributions\\">Contributions</a></li>\\r\\n                <li><a href=\\"#methods\\">Methodology</a></li>\\r\\n                <li><a href=\\"#significance\\">Significance</a></li>\\r\\n                <li><a href=\\"#conclusion\\">Conclusion</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <!-- <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"abstract\\">Abstract</h6>\\r\\n            <ul>\\r\\n                <li>\\r\\n                    A <em>tournament</em> is a directed graph {`\\\\\\\\(T\\\\\\\\)`} such that every pair of vertices are connected by an arc.\\r\\n                </li>\\r\\n                <li>\\r\\n                    A <em>feedback vertex set</em> is a set {`\\\\\\\\(S\\\\\\\\)`} of vertices in {`\\\\\\\\(T\\\\\\\\)`} such that {`\\\\\\\\(T-S\\\\\\\\)`} is acyclic.\\r\\n                </li>\\r\\n                <li>\\r\\n                    In this article we consider the Feedback Vertex Set problem in tournaments.\\r\\n                </li>\\r\\n                <li>\\r\\n                    Here input is a tournament {`\\\\\\\\(T\\\\\\\\)`} and integer {`\\\\\\\\(k\\\\\\\\)`}, and the task is to determine whether {`\\\\\\\\(T\\\\\\\\)`} has a feedback vertex set of size at most {`\\\\\\\\(k\\\\\\\\)`}.\\r\\n                </li>\\r\\n                <li>\\r\\n                    We give a new algorithm for Feedback Vertex Set in Tournaments. The running time of our algorithm is upper bounded by {`\\\\\\\\(O(1.618^k + n^{O(1)})\\\\\\\\)`} and by {`\\\\\\\\(O(1.46^n)\\\\\\\\)`}.\\r\\n                </li>\\r\\n                <li>\\r\\n                    Thus our algorithm simultaneously improves over the fastest known parameterized algorithm for the problem by Dom et al. running in time {`\\\\\\\\(O(2^kk^{O(1)} + n^{O(1)})\\\\\\\\)`}, and the fastest known exact exponential time algorithm by Gaspers and Mnich with running time {`\\\\\\\\(O(1.674^n)\\\\\\\\)`}.\\r\\n                </li>\\r\\n                <li>\\r\\n                    On the way to prove our main result we prove a new partitioning theorem for undirected graphs.\\r\\n                </li>\\r\\n                <li>\\r\\n                    In particular we show that the vertices of any undirected {`\\\\\\\\(m\\\\\\\\)`}-edge graph of maximum degree {`\\\\\\\\(d\\\\\\\\)`} can be colored white or black in such a way that for each of the two colors, the number of edges with both endpoints of that color is between {`\\\\\\\\(\\\\\\\\frac{m}{4}-\\\\\\\\frac{d}{2}\\\\\\\\)`} and {`\\\\\\\\(\\\\\\\\frac{m}{4}+\\\\\\\\frac{d}{2}\\\\\\\\)`}.\\r\\n                </li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card> -->\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"introduction\\">Introduction</h6>\\r\\n            <ul>\\r\\n                <li><strong>Tournaments:</strong> A directed graph where every pair of vertices is connected by a single directed edge.</li>\\r\\n                <li><strong>Feedback Vertex Set (FVS):</strong> A set of vertices whose removal results in an acyclic graph.</li>\\r\\n                <li><strong>Problem Statement:</strong> Given a tournament {`\\\\\\\\( T \\\\\\\\)`} and an integer {`\\\\\\\\( k \\\\\\\\)`}, determine if there exists a feedback vertex set of size at most {`\\\\\\\\( k \\\\\\\\)`}.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"previous\\">Previous Work</h6>\\r\\n            <ul>\\r\\n                <li><strong>Parameterized Algorithms:</strong> Dom et al. developed an algorithm with a running time of {`\\\\\\\\( O(2^k \\\\\\\\cdot k^{O(1)} + n^{O(1)}) \\\\\\\\)`}.</li>\\r\\n                <li><strong>Exact Exponential Time Algorithms:</strong> Gaspers and Mnich proposed an algorithm with a running time of {`\\\\\\\\( O(1.674^n) \\\\\\\\)`}.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"contributions\\">Contributions</h6>\\r\\n            <ul>\\r\\n                <li><strong>New Algorithm:</strong> Improved running times:\\r\\n                    <ul>\\r\\n                        <li><strong>Parameterized Running Time:</strong> {`\\\\\\\\( O(1.618^k + n^{O(1)}) \\\\\\\\)`}</li>\\r\\n                        <li><strong>Exact Exponential Running Time:</strong> {`\\\\\\\\( O(1.46^n) \\\\\\\\)`}</li>\\r\\n                    </ul>\\r\\n                </li>\\r\\n                <li><strong>Partitioning Theorem:</strong> A novel theorem for undirected graphs states that vertices can be colored in two colors such that each color class has between {`\\\\\\\\( m/4 - d/2 \\\\\\\\)`} and {`\\\\\\\\( m/4 + d/4 \\\\\\\\)`} edges.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"methods\\">Methodology</h6>\\r\\n            <ul>\\r\\n                <li><strong>Kernelization:</strong> Reduce the tournament size to {`\\\\\\\\( O(k^3) \\\\\\\\)`}.</li>\\r\\n                <li><strong>Set Selection:</strong> Identify a set {`\\\\\\\\( M \\\\\\\\)`} of vertices, disjoint from the solution {`\\\\\\\\( S \\\\\\\\)`}, that is evenly distributed in the topological ordering of {`\\\\\\\\( T - S \\\\\\\\)`}.</li>\\r\\n                <li><strong>Topological Ordering:</strong> Utilize {`\\\\\\\\( M \\\\\\\\)`} to infer a preliminary topological ordering of {`\\\\\\\\( T - S \\\\\\\\)`}, assigning tentative positions to vertices.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"significance\\">Significance</h6>\\r\\n            <ul>\\r\\n                <li><strong>Efficiency:</strong> Outperforms previous algorithms in both parameterized and exact exponential time contexts.</li>\\r\\n                <li><strong>Theoretical Impact:</strong> The partitioning theorem may have broader applications in graph theory and algorithm design.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"conclusion\\">Conclusion</h6>\\r\\n            <p>This work advances the study of the Feedback Vertex Set problem in tournaments by providing a more efficient algorithm and introducing a useful graph partitioning theorem.</p>\\r\\n\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAgCI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAC,CAAE,iBAAG,CACF,OAAO,CAAE,GACb,CACA,iBAAG,CACC,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,qBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb,CACA,gBAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB"}'
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
  set_store_value(currentPath, $currentPath = "Tournament", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-o3axe0_START -->${$$result.title = `<title>Tournaments</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/layout"><meta name="abstract" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-o3axe0_END -->`, ""} <article class="svelte-1af2q2m">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1af2q2m" data-svelte-h="svelte-r6m3lj">Tournament</h4> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<span slot="venue" data-svelte-h="svelte-16nei38"><a href="https://doi.org/10.4230/LIPIcs.STACS.2016.49" class="svelte-1af2q2m">STACS 2016: 49:1-49:13</a>, <a href="https://doi.org/10.48550/arXiv.1510.07676" class="svelte-1af2q2m">CoRR abs/1510.07676 (2015)</a></span>`;
    },
    title: () => {
      return `<span slot="title" data-svelte-h="svelte-pb9yy3">Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Tournaments</span>`;
    },
    authors: () => {
      return `<span slot="authors" data-svelte-h="svelte-1ik9o38">Mithilesh Kumar, Daniel Lokshtanov</span>`;
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
  )}  ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="introduction" class="svelte-1af2q2m" data-svelte-h="svelte-u38tim">Introduction</h6> <ul><li class="svelte-1af2q2m" data-svelte-h="svelte-1iqyhvc"><strong class="svelte-1af2q2m">Tournaments:</strong> A directed graph where every pair of vertices is connected by a single directed edge.</li> <li class="svelte-1af2q2m" data-svelte-h="svelte-6l1bbv"><strong class="svelte-1af2q2m">Feedback Vertex Set (FVS):</strong> A set of vertices whose removal results in an acyclic graph.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m" data-svelte-h="svelte-1g855rw">Problem Statement:</strong> Given a tournament ${escape(`\\( T \\)`)} and an integer ${escape(`\\( k \\)`)}, determine if there exists a feedback vertex set of size at most ${escape(`\\( k \\)`)}.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="previous" class="svelte-1af2q2m" data-svelte-h="svelte-1mb33nt">Previous Work</h6> <ul><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m" data-svelte-h="svelte-1mumtep">Parameterized Algorithms:</strong> Dom et al. developed an algorithm with a running time of ${escape(`\\( O(2^k \\cdot k^{O(1)} + n^{O(1)}) \\)`)}.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m" data-svelte-h="svelte-f1z3s1">Exact Exponential Time Algorithms:</strong> Gaspers and Mnich proposed an algorithm with a running time of ${escape(`\\( O(1.674^n) \\)`)}.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="contributions" class="svelte-1af2q2m" data-svelte-h="svelte-rt005c">Contributions</h6> <ul><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m" data-svelte-h="svelte-1dtc9uz">New Algorithm:</strong> Improved running times:
                    <ul><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m" data-svelte-h="svelte-1mqmzvb">Parameterized Running Time:</strong> ${escape(`\\( O(1.618^k + n^{O(1)}) \\)`)}</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m" data-svelte-h="svelte-1avu5xc">Exact Exponential Running Time:</strong> ${escape(`\\( O(1.46^n) \\)`)}</li></ul></li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m" data-svelte-h="svelte-hc5dcu">Partitioning Theorem:</strong> A novel theorem for undirected graphs states that vertices can be colored in two colors such that each color class has between ${escape(`\\( m/4 - d/2 \\)`)} and ${escape(`\\( m/4 + d/4 \\)`)} edges.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="methods" class="svelte-1af2q2m" data-svelte-h="svelte-kaddv3">Methodology</h6> <ul><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m" data-svelte-h="svelte-mie8e3">Kernelization:</strong> Reduce the tournament size to ${escape(`\\( O(k^3) \\)`)}.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m" data-svelte-h="svelte-m09kz0">Set Selection:</strong> Identify a set ${escape(`\\( M \\)`)} of vertices, disjoint from the solution ${escape(`\\( S \\)`)}, that is evenly distributed in the topological ordering of ${escape(`\\( T - S \\)`)}.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m" data-svelte-h="svelte-exlj2x">Topological Ordering:</strong> Utilize ${escape(`\\( M \\)`)} to infer a preliminary topological ordering of ${escape(`\\( T - S \\)`)}, assigning tentative positions to vertices.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="significance" class="svelte-1af2q2m" data-svelte-h="svelte-8dvhda">Significance</h6> <ul data-svelte-h="svelte-1672bvt"><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Efficiency:</strong> Outperforms previous algorithms in both parameterized and exact exponential time contexts.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Theoretical Impact:</strong> The partitioning theorem may have broader applications in graph theory and algorithm design.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="conclusion" class="svelte-1af2q2m" data-svelte-h="svelte-1272jqm">Conclusion</h6> <p class="svelte-1af2q2m" data-svelte-h="svelte-1m419jq">This work advances the study of the Feedback Vertex Set problem in tournaments by providing a more efficient algorithm and introducing a useful graph partitioning theorem.</p>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BF-zLyOj.js.map
