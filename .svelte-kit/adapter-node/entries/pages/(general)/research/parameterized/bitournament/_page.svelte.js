import { a as subscribe, b as set_store_value } from "../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../../chunks/ssr2.js";
import { g as github, a as githubDark } from "../../../../../../chunks/github-dark.js";
import "../../../../../../chunks/Suffix.js";
import { C as Card } from "../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../chunks/ActionIcons.js";
/* empty css                                                                 */
import { p as page } from "../../../../../../chunks/stores3.js";
import "../../../../../../chunks/Subheader.js";
import "../../../../../../chunks/client.js";
import { c as currentPath, n as navList, d as darkMode } from "../../../../../../chunks/stores.js";
/* empty css                                                             */
import { c as contentNav, a as contents } from "../../../../../../chunks/content7.js";
import { P as Pathlist } from "../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../chunks/CourseNavigation.js";
import { P as Paper } from "../../../../../../chunks/Paper2.js";
const css$1 = {
  code: "article.svelte-1l8969l{display:flex;flex-direction:column;gap:0.5em;max-width:750px;width:90%;margin:auto}p.svelte-1l8969l,li.svelte-1l8969l{opacity:0.8}h4.svelte-1l8969l{margin:0.5em 0}h6.svelte-1l8969l{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}strong.svelte-1l8969l{color:goldenrod;opacity:1}a.svelte-1l8969l{cursor:pointer;text-decoration:none}.media.svelte-1l8969l{display:flex;align-items:center;justify-content:center}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    \\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import {page} from \'$app/stores\';\\r\\n    import {onMount} from \'svelte\';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, {Body, Head, Row, Cell} from \'@smui/data-table\';\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from \'$lib/components/NavList.svelte\'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/research/content\\";\\r\\n    import { typeset } from \'$lib/shared/typeset\';\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n\\r\\n    import Paper from \\"$lib/components/Paper.svelte\\";\\r\\n\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Bipartite Tournament\\";\\r\\n    // $darkMode = false;\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n        max-width: 750px;\\r\\n        width: 90%;\\r\\n        margin: auto;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h4 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n    .media {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Bipartite Tournaments</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/layout\\" />\\r\\n    <meta name=\\"abstract\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Bipartite Tournament\\r\\n    </h4>\\r\\n    <Paper>\\r\\n        <span slot=\\"authors\\">\\r\\n            Mithilesh Kumar, Daniel Lokshtanov\\r\\n        </span>\\r\\n        <span slot=\\"title\\">\\r\\n            Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Bipartite Tournaments\\r\\n        </span>\\r\\n        <span slot=\\"venue\\">\\r\\n            <a href=\\"https://doi.org/10.4230/LIPIcs.FSTTCS.2016.24\\">FSTTCS 2016: 24:1-24:15</a>, <a href=\\"https://doi.org/10.48550/arXiv.2411.02821\\">CoRR abs/2411.02821 (2024)</a>\\r\\n        </span>\\r\\n    </Paper>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#introduction\\">Introduction</a></li>\\r\\n                <li><a href=\\"#previous\\">Previous Work</a></li>\\r\\n                <li><a href=\\"#contributions\\">Contributions</a></li>\\r\\n                <li><a href=\\"#methods\\">Methodology</a></li>\\r\\n                <li><a href=\\"#significance\\">Significance</a></li>\\r\\n                <li><a href=\\"#conclusion\\">Conclusion</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"introduction\\">Introduction</h6>\\r\\n            <div class=\\"media\\">\\r\\n                <img src=\\"/Research/BTFVS/BipartiteTournament.png\\" width=\\"300px\\" alt=\\"Topological sort of an acyclic tournament\\">\\r\\n            </div>\\r\\n            <ul>\\r\\n                <li><strong>Bipartite Tournaments:</strong> A directed graph {`\\\\\\\\( T := (A \\\\\\\\cup B, E) \\\\\\\\)`} where every pair of vertices {`\\\\\\\\( (a, b) \\\\\\\\)`}, {`\\\\\\\\( a \\\\\\\\in A \\\\\\\\)`}, {`\\\\\\\\( b \\\\\\\\in B \\\\\\\\)`}, are connected by an arc, and no arc connects two vertices within {`\\\\\\\\( A \\\\\\\\)`} or {`\\\\\\\\( B \\\\\\\\)`}.</li>\\r\\n                <li><strong>Feedback Vertex Set (FVS):</strong> A set of vertices whose removal makes the graph acyclic.</li>\\r\\n                <li><strong>Problem Statement:</strong> Given a bipartite tournament {`\\\\\\\\( T \\\\\\\\)`} and an integer {`\\\\\\\\( k \\\\\\\\)`}, determine whether {`\\\\\\\\( T \\\\\\\\)`} has a feedback vertex set of size at most {`\\\\\\\\( k \\\\\\\\)`}.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"previous\\">Previous Work</h6>\\r\\n            <ul>\\r\\n                <li><strong>Parameterized Algorithms:</strong> Hsiao (ISAAC 2011) developed an algorithm with a running time of {`\\\\\\\\( 2^k \\\\\\\\cdot k^{O(1)} + n^{O(1)} \\\\\\\\)`}.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"contributions\\">Contributions</h6>\\r\\n            <ul>\\r\\n                <li><strong>New Algorithm:</strong> Improved running times:\\r\\n                    <ul>\\r\\n                        <li><strong>Parameterized Running Time:</strong> {`\\\\\\\\( O(1.6181^k + n^{O(1)}) \\\\\\\\)`}</li>\\r\\n                        <li><strong>Exact Exponential Running Time:</strong> {`\\\\\\\\( O(1.3820^n) \\\\\\\\)`}</li>\\r\\n                    </ul>\\r\\n                </li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"methods\\">Methodology</h6>\\r\\n            <p>Similar to finding feedback vertex set in tournaments.</p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"significance\\">Significance</h6>\\r\\n            <ul>\\r\\n                <li><strong>Efficiency:</strong> The proposed algorithm outperforms previous algorithms in both parameterized and exact exponential time contexts for bipartite tournaments.</li>\\r\\n                <li><strong>Theoretical Impact:</strong> Provides insights into the structure of bipartite tournaments and the Feedback Vertex Set problem.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"conclusion\\">Conclusion</h6>\\r\\n            <p>This work advances the study of the Feedback Vertex Set problem in bipartite tournaments by providing a more efficient algorithm and deepening the understanding of the problem\'s structure.</p>\\r\\n        </Content>\\r\\n    </Card>    \\r\\n</article>\\r\\n"],"names":[],"mappings":"AAgCI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KAAK,CACV,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IACZ,CACA,gBAAC,CAAE,iBAAG,CACF,OAAO,CAAE,GACb,CACA,iBAAG,CACC,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,qBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb,CACA,gBAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB,CACA,qBAAO,CACH,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACrB"}'
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
  set_store_value(currentPath, $currentPath = "Bipartite Tournament", $currentPath);
  $$result.css.add(css$1);
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_darkMode();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1i4xty4_START -->${$$result.title = `<title>Bipartite Tournaments</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/layout"><meta name="abstract" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1i4xty4_END -->`, ""} <article class="svelte-1l8969l">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1l8969l" data-svelte-h="svelte-1dkc6jf">Bipartite Tournament</h4> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<span slot="venue" data-svelte-h="svelte-iuvzqt"><a href="https://doi.org/10.4230/LIPIcs.FSTTCS.2016.24" class="svelte-1l8969l">FSTTCS 2016: 24:1-24:15</a>, <a href="https://doi.org/10.48550/arXiv.2411.02821" class="svelte-1l8969l">CoRR abs/2411.02821 (2024)</a></span>`;
    },
    title: () => {
      return `<span slot="title" data-svelte-h="svelte-vgooj3">Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Bipartite Tournaments</span>`;
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
            return `<h6 class="svelte-1l8969l" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-1ua7sc0"><li class="svelte-1l8969l"><a href="#introduction" class="svelte-1l8969l">Introduction</a></li> <li class="svelte-1l8969l"><a href="#previous" class="svelte-1l8969l">Previous Work</a></li> <li class="svelte-1l8969l"><a href="#contributions" class="svelte-1l8969l">Contributions</a></li> <li class="svelte-1l8969l"><a href="#methods" class="svelte-1l8969l">Methodology</a></li> <li class="svelte-1l8969l"><a href="#significance" class="svelte-1l8969l">Significance</a></li> <li class="svelte-1l8969l"><a href="#conclusion" class="svelte-1l8969l">Conclusion</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="introduction" class="svelte-1l8969l" data-svelte-h="svelte-u38tim">Introduction</h6> <div class="media svelte-1l8969l" data-svelte-h="svelte-16ji0re"><img src="/Research/BTFVS/BipartiteTournament.png" width="300px" alt="Topological sort of an acyclic tournament"></div> <ul><li class="svelte-1l8969l"><strong class="svelte-1l8969l" data-svelte-h="svelte-10bq3be">Bipartite Tournaments:</strong> A directed graph ${escape(`\\( T := (A \\cup B, E) \\)`)} where every pair of vertices ${escape(`\\( (a, b) \\)`)}, ${escape(`\\( a \\in A \\)`)}, ${escape(`\\( b \\in B \\)`)}, are connected by an arc, and no arc connects two vertices within ${escape(`\\( A \\)`)} or ${escape(`\\( B \\)`)}.</li> <li class="svelte-1l8969l" data-svelte-h="svelte-1ucxt17"><strong class="svelte-1l8969l">Feedback Vertex Set (FVS):</strong> A set of vertices whose removal makes the graph acyclic.</li> <li class="svelte-1l8969l"><strong class="svelte-1l8969l" data-svelte-h="svelte-1g855rw">Problem Statement:</strong> Given a bipartite tournament ${escape(`\\( T \\)`)} and an integer ${escape(`\\( k \\)`)}, determine whether ${escape(`\\( T \\)`)} has a feedback vertex set of size at most ${escape(`\\( k \\)`)}.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="previous" class="svelte-1l8969l" data-svelte-h="svelte-1mb33nt">Previous Work</h6> <ul><li class="svelte-1l8969l"><strong class="svelte-1l8969l" data-svelte-h="svelte-1mumtep">Parameterized Algorithms:</strong> Hsiao (ISAAC 2011) developed an algorithm with a running time of ${escape(`\\( 2^k \\cdot k^{O(1)} + n^{O(1)} \\)`)}.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="contributions" class="svelte-1l8969l" data-svelte-h="svelte-rt005c">Contributions</h6> <ul><li class="svelte-1l8969l"><strong class="svelte-1l8969l" data-svelte-h="svelte-1dtc9uz">New Algorithm:</strong> Improved running times:
                    <ul><li class="svelte-1l8969l"><strong class="svelte-1l8969l" data-svelte-h="svelte-1mqmzvb">Parameterized Running Time:</strong> ${escape(`\\( O(1.6181^k + n^{O(1)}) \\)`)}</li> <li class="svelte-1l8969l"><strong class="svelte-1l8969l" data-svelte-h="svelte-1avu5xc">Exact Exponential Running Time:</strong> ${escape(`\\( O(1.3820^n) \\)`)}</li></ul></li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="methods" class="svelte-1l8969l" data-svelte-h="svelte-kaddv3">Methodology</h6> <p class="svelte-1l8969l" data-svelte-h="svelte-ulx1od">Similar to finding feedback vertex set in tournaments.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="significance" class="svelte-1l8969l" data-svelte-h="svelte-8dvhda">Significance</h6> <ul data-svelte-h="svelte-19xdkvy"><li class="svelte-1l8969l"><strong class="svelte-1l8969l">Efficiency:</strong> The proposed algorithm outperforms previous algorithms in both parameterized and exact exponential time contexts for bipartite tournaments.</li> <li class="svelte-1l8969l"><strong class="svelte-1l8969l">Theoretical Impact:</strong> Provides insights into the structure of bipartite tournaments and the Feedback Vertex Set problem.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="conclusion" class="svelte-1l8969l" data-svelte-h="svelte-1272jqm">Conclusion</h6> <p class="svelte-1l8969l" data-svelte-h="svelte-1gf7jw1">This work advances the study of the Feedback Vertex Set problem in bipartite tournaments by providing a more efficient algorithm and deepening the understanding of the problem&#39;s structure.</p>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
