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
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    \\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import {page} from \'$app/stores\';\\r\\n    import {onMount} from \'svelte\';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, {Body, Head, Row, Cell} from \'@smui/data-table\';\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from \'$lib/components/NavList.svelte\'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/research/content\\";\\r\\n    import { typeset } from \'$lib/shared/typeset\';\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n\\r\\n    import Paper from \\"$lib/components/Paper.svelte\\";\\r\\n\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Connected Dominating Set\\";\\r\\n    $darkMode = false;\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h4 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Connected Dominating Set</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/layout\\" />\\r\\n    <meta name=\\"abstract\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Connected Dominating Set\\r\\n    </h4>\\r\\n    <Paper>\\r\\n        <span slot=\\"authors\\">\\r\\n            Eduard Eiben, Mithilesh Kumar, Amer E. Mouawad, Fahad Panolan, Sebastian Siebertz\\r\\n        </span>\\r\\n        <span slot=\\"title\\">\\r\\n            Lossy Kernels for Connected Dominating Set on Sparse Graphs\\r\\n        </span>\\r\\n        <span slot=\\"venue\\">\\r\\n            <a href=\\"https://epubs.siam.org/doi/10.1137/18M1172508\\">SIAM J. Discret. Math. 33(3): 1743-1771 (2019)</a>, <a href=\\"https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.STACS.2018.29\\">STACS 2018: 29:1-29:15</a>, <a href=\\"https://arxiv.org/abs/1706.09339\\">CoRR abs/1706.09339 (2017)</a>\\r\\n        </span>\\r\\n    </Paper>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#introduction\\">Introduction</a></li>\\r\\n                <li><a href=\\"#previous\\">Previous Work</a></li>\\r\\n                <li><a href=\\"#contributions\\">Contributions</a></li>\\r\\n                <li><a href=\\"#methods\\">Methodology</a></li>\\r\\n                <li><a href=\\"#significance\\">Significance</a></li>\\r\\n                <li><a href=\\"#conclusion\\">Conclusion</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Introduction</h6>\\r\\n            <ul>\\r\\n                <li><strong>Connected Dominating Set (CDS):</strong> A subset {`\\\\\\\\( D \\\\\\\\)`} of vertices in a graph {`\\\\\\\\( G \\\\\\\\)`} such that every vertex not in {`\\\\\\\\( D \\\\\\\\)`} is adjacent to at least one vertex in {`\\\\\\\\( D \\\\\\\\)`}, and the subgraph induced by {`\\\\\\\\( D \\\\\\\\)`} is connected.</li>\\r\\n                <li><strong>Problem Statement:</strong> Given a graph {`\\\\\\\\( G \\\\\\\\)`} and an integer {`\\\\\\\\( k \\\\\\\\)`}, determine whether there exists a connected dominating set of size at most {`\\\\\\\\( k \\\\\\\\)`}.</li>\\r\\n                <li><strong>Kernelization:</strong> A preprocessing technique that reduces the problem instance to a smaller instance (called a kernel) in polynomial time, while preserving the answer.</li>\\r\\n                <li><strong>Lossy Kernelization:</strong> An extension of kernelization that allows for approximate solutions, aiming to balance between instance size reduction and solution accuracy.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Previous Work</h6>\\r\\n            <ul>\\r\\n                <li><strong>Kernelization Complexity:</strong> It is known that the Connected Dominating Set problem does not admit a polynomial kernel on 2-degenerate graphs and graphs of bounded expansion, unless NP ⊆ coNP/poly.</li>\\r\\n                <li><strong>Approximate Kernelization:</strong> The framework of lossy kernelization was introduced to explore approximate kernels for problems where exact polynomial kernels are unlikely to exist.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Contributions</h6>\\r\\n            <ul>\\r\\n                <li><strong>Approximate Kernels for CDS:</strong> The authors developed polynomial-size {`\\\\\\\\(\\\\\\\\alpha\\\\\\\\)`}-approximate kernels for the Connected Dominating Set problem on various classes of sparse graphs, including:\\r\\n                    <ul>\\r\\n                        <li>Biclique-free graphs</li>\\r\\n                        <li>Graphs of bounded expansion</li>\\r\\n                        <li>Nowhere dense classes</li>\\r\\n                    </ul>\\r\\n                </li>\\r\\n                <li><strong>Conditional Lower Bounds:</strong> They demonstrated that for any class {`\\\\\\\\( C \\\\\\\\)`} that is somewhere dense and closed under taking subgraphs, there does not exist an {`\\\\\\\\(\\\\\\\\alpha\\\\\\\\)`}-approximate bi-kernel for the (Connected) Distance-{`\\\\\\\\( r \\\\\\\\)`} Dominating Set problem on {`\\\\\\\\( C \\\\\\\\)`} for any {`\\\\\\\\(\\\\\\\\alpha > 1\\\\\\\\)`}, assuming the Gap Exponential Time Hypothesis.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Methodology</h6>\\r\\n            <ul>\\r\\n                <li><strong>Lossy Kernelization Framework:</strong> Applied the framework of lossy kernelization to develop approximate kernels for the Connected Dominating Set problem.</li>\\r\\n                <li><strong>Graph Classes Analysis:</strong> Analyzed the properties of various sparse graph classes to design efficient reduction rules and ensure the existence of polynomial-size approximate kernels.</li>\\r\\n                <li><strong>Complexity Assumptions:</strong> Utilized complexity assumptions, such as the Gap Exponential Time Hypothesis, to establish conditional lower bounds for the existence of approximate kernels in certain graph classes.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Significance</h6>\\r\\n            <ul>\\r\\n                <li><strong>Advancement in Kernelization:</strong> This work extends the applicability of kernelization techniques to approximate solutions, providing efficient preprocessing methods for problems where exact kernels are unlikely to exist.</li>\\r\\n                <li><strong>Impact on Sparse Graphs:</strong> The results offer practical preprocessing tools for the Connected Dominating Set problem in various classes of sparse graphs, which are common in real-world applications.</li>\\r\\n                <li><strong>Theoretical Insights:</strong> The conditional lower bounds contribute to the understanding of the limitations of approximate kernelization in certain graph classes.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Conclusion</h6>\\r\\n            <p>This study presents polynomial-size approximate kernels for the Connected Dominating Set problem on several classes of sparse graphs, advancing the field of parameterized complexity and offering practical preprocessing techniques for complex graph problems.</p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    \\r\\n    \\r\\n</article>\\r\\n"],"names":[],"mappings":"AAgCI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAC,CAAE,iBAAG,CACF,OAAO,CAAE,GACb,CACA,iBAAG,CACC,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,qBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb,CACA,gBAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB"}'
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
  set_store_value(currentPath, $currentPath = "Connected Dominating Set", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1baggdf_START -->${$$result.title = `<title>Connected Dominating Set</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/layout"><meta name="abstract" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1baggdf_END -->`, ""} <article class="svelte-1af2q2m">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1af2q2m" data-svelte-h="svelte-ywszej">Connected Dominating Set</h4> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<span slot="venue" data-svelte-h="svelte-6nupcq"><a href="https://epubs.siam.org/doi/10.1137/18M1172508" class="svelte-1af2q2m">SIAM J. Discret. Math. 33(3): 1743-1771 (2019)</a>, <a href="https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.STACS.2018.29" class="svelte-1af2q2m">STACS 2018: 29:1-29:15</a>, <a href="https://arxiv.org/abs/1706.09339" class="svelte-1af2q2m">CoRR abs/1706.09339 (2017)</a></span>`;
    },
    title: () => {
      return `<span slot="title" data-svelte-h="svelte-1rx0t13">Lossy Kernels for Connected Dominating Set on Sparse Graphs</span>`;
    },
    authors: () => {
      return `<span slot="authors" data-svelte-h="svelte-1yr7tyj">Eduard Eiben, Mithilesh Kumar, Amer E. Mouawad, Fahad Panolan, Sebastian Siebertz</span>`;
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
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-92fxym">Introduction</h6> <ul><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m" data-svelte-h="svelte-1pc8xec">Connected Dominating Set (CDS):</strong> A subset ${escape(`\\( D \\)`)} of vertices in a graph ${escape(`\\( G \\)`)} such that every vertex not in ${escape(`\\( D \\)`)} is adjacent to at least one vertex in ${escape(`\\( D \\)`)}, and the subgraph induced by ${escape(`\\( D \\)`)} is connected.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m" data-svelte-h="svelte-1g855rw">Problem Statement:</strong> Given a graph ${escape(`\\( G \\)`)} and an integer ${escape(`\\( k \\)`)}, determine whether there exists a connected dominating set of size at most ${escape(`\\( k \\)`)}.</li> <li class="svelte-1af2q2m" data-svelte-h="svelte-1yce3fg"><strong class="svelte-1af2q2m">Kernelization:</strong> A preprocessing technique that reduces the problem instance to a smaller instance (called a kernel) in polynomial time, while preserving the answer.</li> <li class="svelte-1af2q2m" data-svelte-h="svelte-lovo2a"><strong class="svelte-1af2q2m">Lossy Kernelization:</strong> An extension of kernelization that allows for approximate solutions, aiming to balance between instance size reduction and solution accuracy.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-k8tpvg">Previous Work</h6> <ul data-svelte-h="svelte-19mmxjt"><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Kernelization Complexity:</strong> It is known that the Connected Dominating Set problem does not admit a polynomial kernel on 2-degenerate graphs and graphs of bounded expansion, unless NP ⊆ coNP/poly.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Approximate Kernelization:</strong> The framework of lossy kernelization was introduced to explore approximate kernels for problems where exact polynomial kernels are unlikely to exist.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-8mlfqz">Contributions</h6> <ul><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m" data-svelte-h="svelte-9ec7zn">Approximate Kernels for CDS:</strong> The authors developed polynomial-size ${escape(`\\(\\alpha\\)`)}-approximate kernels for the Connected Dominating Set problem on various classes of sparse graphs, including:
                    <ul data-svelte-h="svelte-1buiix8"><li class="svelte-1af2q2m">Biclique-free graphs</li> <li class="svelte-1af2q2m">Graphs of bounded expansion</li> <li class="svelte-1af2q2m">Nowhere dense classes</li></ul></li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m" data-svelte-h="svelte-1hn1n3m">Conditional Lower Bounds:</strong> They demonstrated that for any class ${escape(`\\( C \\)`)} that is somewhere dense and closed under taking subgraphs, there does not exist an ${escape(`\\(\\alpha\\)`)}-approximate bi-kernel for the (Connected) Distance-${escape(`\\( r \\)`)} Dominating Set problem on ${escape(`\\( C \\)`)} for any ${escape(`\\(\\alpha > 1\\)`)}, assuming the Gap Exponential Time Hypothesis.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-1ynbecn">Methodology</h6> <ul data-svelte-h="svelte-6a4x3i"><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Lossy Kernelization Framework:</strong> Applied the framework of lossy kernelization to develop approximate kernels for the Connected Dominating Set problem.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Graph Classes Analysis:</strong> Analyzed the properties of various sparse graph classes to design efficient reduction rules and ensure the existence of polynomial-size approximate kernels.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Complexity Assumptions:</strong> Utilized complexity assumptions, such as the Gap Exponential Time Hypothesis, to establish conditional lower bounds for the existence of approximate kernels in certain graph classes.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-iodqf7">Significance</h6> <ul data-svelte-h="svelte-eybmky"><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Advancement in Kernelization:</strong> This work extends the applicability of kernelization techniques to approximate solutions, providing efficient preprocessing methods for problems where exact kernels are unlikely to exist.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Impact on Sparse Graphs:</strong> The results offer practical preprocessing tools for the Connected Dominating Set problem in various classes of sparse graphs, which are common in real-world applications.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Theoretical Insights:</strong> The conditional lower bounds contribute to the understanding of the limitations of approximate kernelization in certain graph classes.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-1h8nw31">Conclusion</h6> <p class="svelte-1af2q2m" data-svelte-h="svelte-16vh0ee">This study presents polynomial-size approximate kernels for the Connected Dominating Set problem on several classes of sparse graphs, advancing the field of parameterized complexity and offering practical preprocessing techniques for complex graph problems.</p>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
