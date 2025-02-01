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
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    \\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import {page} from \'$app/stores\';\\r\\n    import {onMount} from \'svelte\';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, {Body, Head, Row, Cell} from \'@smui/data-table\';\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from \'$lib/components/NavList.svelte\'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/research/content\\";\\r\\n    import { typeset } from \'$lib/shared/typeset\';\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n\\r\\n    import Paper from \\"$lib/components/Paper.svelte\\";\\r\\n\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Component Order Connectivity\\";\\r\\n    $darkMode = false;\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h4 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Component Order Connectivity</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/layout\\" />\\r\\n    <meta name=\\"abstract\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        {`\\\\\\\\(\\\\\\\\ell\\\\\\\\)`}-Component Order Connectivity\\r\\n    </h4>\\r\\n    <Paper>\\r\\n        <span slot=\\"authors\\">\\r\\n            Mithilesh Kumar, Daniel Lokshtanov\\r\\n        </span>\\r\\n        <span slot=\\"title\\">\\r\\n            A 2lk Kernel for l-Component Order Connectivity\\r\\n        </span>\\r\\n        <span slot=\\"venue\\">\\r\\n            <a href=\\"https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.IPEC.2016.20\\">IPEC 2016: 20:1-20:14</a>, <a href=\\"https://arxiv.org/abs/1610.04711\\">CoRR abs/1610.04711 (2016)</a>\\r\\n        </span>\\r\\n    </Paper>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#introduction\\">Introduction</a></li>\\r\\n                <li><a href=\\"#previous\\">Previous Work</a></li>\\r\\n                <li><a href=\\"#contributions\\">Contributions</a></li>\\r\\n                <li><a href=\\"#methods\\">Methodology</a></li>\\r\\n                <li><a href=\\"#significance\\">Significance</a></li>\\r\\n                <li><a href=\\"#conclusion\\">Conclusion</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Introduction</h6>\\r\\n            <ul>\\r\\n                <li><strong>{`\\\\\\\\(\\\\\\\\ell\\\\\\\\)`}-Component Order Connectivity ({`\\\\\\\\(\\\\\\\\ell\\\\\\\\)`}-COC):</strong> Given a graph {`\\\\\\\\( G \\\\\\\\)`} and an integer {`\\\\\\\\( k \\\\\\\\)`}, the problem asks whether there exists a set {`\\\\\\\\( S \\\\\\\\subseteq V(G) \\\\\\\\)`} with {`\\\\\\\\( |S| \\\\\\\\leq k \\\\\\\\)`} such that the largest connected component in {`\\\\\\\\( G - S \\\\\\\\)`} has at most {`\\\\\\\\( \\\\\\\\ell \\\\\\\\)`} vertices.</li>\\r\\n                <li><strong>Generalization of Vertex Cover:</strong> For {`\\\\\\\\( \\\\\\\\ell = 1 \\\\\\\\)`}, {`\\\\\\\\(\\\\\\\\ell\\\\\\\\)`}-COC reduces to the classic Vertex Cover problem.</li>\\r\\n                <li><strong>Applications:</strong> Serves as a measure of graph vulnerability, assessing how many vertices need removal to fragment the graph into small components.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Previous Work</h6>\\r\\n            <ul>\\r\\n                <li><strong>NP-Completeness:</strong> Lewis and Yannakakis (1980) established that {`\\\\\\\\(\\\\\\\\ell\\\\\\\\)`}-COC is NP-complete for every {`\\\\\\\\( \\\\\\\\ell \\\\\\\\geq 1 \\\\\\\\)`}.</li>\\r\\n                <li><strong>Kernelization:</strong> Drange et al. provided a kernel with {`\\\\\\\\( O(\\\\\\\\ell k (k + \\\\\\\\ell)) \\\\\\\\)`} vertices for {`\\\\\\\\(\\\\\\\\ell\\\\\\\\)`}-COC.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Contributions</h6>\\r\\n            <ul>\\r\\n                <li><strong>Improved Kernel:</strong> Developed a kernel for {`\\\\\\\\(\\\\\\\\ell\\\\\\\\)`}-COC with at most {`\\\\\\\\( 2{\\\\\\\\ell k} \\\\\\\\)`} vertices, significantly improving upon previous results.</li>\\r\\n                <li><strong>Generalized q-Expansion Lemma:</strong> Extended the q-Expansion Lemma to weighted graphs, a result that may have independent interest.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Methodology</h6>\\r\\n            <ul>\\r\\n                <li><strong>Kernelization Algorithm:</strong> Designed an algorithm that reduces the input graph to a smaller equivalent graph with at most {`\\\\\\\\( 2{\\\\\\\\ell k} \\\\\\\\)`} vertices in {`\\\\\\\\( n^{O(\\\\\\\\ell)} \\\\\\\\)`} time.</li>\\r\\n                <li><strong>Weighted q-Expansion Lemma:</strong> Proved a generalization of the q-Expansion Lemma for weighted graphs to facilitate the kernelization process.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Significance</h6>\\r\\n            <ul>\\r\\n                <li><strong>Efficiency:</strong> The proposed kernel significantly reduces the problem size, leading to more efficient algorithms for {`\\\\\\\\(\\\\\\\\ell\\\\\\\\)`}-COC.</li>\\r\\n                <li><strong>Theoretical Impact:</strong> The generalized q-Expansion Lemma may have broader applications in graph theory and algorithm design.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Conclusion</h6>\\r\\n            <p>This work advances the study of {`\\\\\\\\(\\\\\\\\ell\\\\\\\\)`}-Component Order Connectivity by providing a more efficient kernelization algorithm and introducing a generalized q-Expansion Lemma for weighted graphs.</p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    \\r\\n</article>\\r\\n"],"names":[],"mappings":"AAgCI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAC,CAAE,iBAAG,CACF,OAAO,CAAE,GACb,CACA,iBAAG,CACC,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,qBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb,CACA,gBAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB"}'
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
  set_store_value(currentPath, $currentPath = "Component Order Connectivity", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-qkzg7s_START -->${$$result.title = `<title>Component Order Connectivity</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/layout"><meta name="abstract" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-qkzg7s_END -->`, ""} <article class="svelte-1af2q2m">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1af2q2m">${escape(`\\(\\ell\\)`)}-Component Order Connectivity</h4> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<span slot="venue" data-svelte-h="svelte-1p2v6s3"><a href="https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.IPEC.2016.20" class="svelte-1af2q2m">IPEC 2016: 20:1-20:14</a>, <a href="https://arxiv.org/abs/1610.04711" class="svelte-1af2q2m">CoRR abs/1610.04711 (2016)</a></span>`;
    },
    title: () => {
      return `<span slot="title" data-svelte-h="svelte-1p9d2v4">A 2lk Kernel for l-Component Order Connectivity</span>`;
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
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-92fxym">Introduction</h6> <ul><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">${escape(`\\(\\ell\\)`)}-Component Order Connectivity (${escape(`\\(\\ell\\)`)}-COC):</strong> Given a graph ${escape(`\\( G \\)`)} and an integer ${escape(`\\( k \\)`)}, the problem asks whether there exists a set ${escape(`\\( S \\subseteq V(G) \\)`)} with ${escape(`\\( |S| \\leq k \\)`)} such that the largest connected component in ${escape(`\\( G - S \\)`)} has at most ${escape(`\\( \\ell \\)`)} vertices.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m" data-svelte-h="svelte-1tj8uz6">Generalization of Vertex Cover:</strong> For ${escape(`\\( \\ell = 1 \\)`)}, ${escape(`\\(\\ell\\)`)}-COC reduces to the classic Vertex Cover problem.</li> <li class="svelte-1af2q2m" data-svelte-h="svelte-ay6izp"><strong class="svelte-1af2q2m">Applications:</strong> Serves as a measure of graph vulnerability, assessing how many vertices need removal to fragment the graph into small components.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-k8tpvg">Previous Work</h6> <ul><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m" data-svelte-h="svelte-tryipt">NP-Completeness:</strong> Lewis and Yannakakis (1980) established that ${escape(`\\(\\ell\\)`)}-COC is NP-complete for every ${escape(`\\( \\ell \\geq 1 \\)`)}.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m" data-svelte-h="svelte-mie8e3">Kernelization:</strong> Drange et al. provided a kernel with ${escape(`\\( O(\\ell k (k + \\ell)) \\)`)} vertices for ${escape(`\\(\\ell\\)`)}-COC.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-8mlfqz">Contributions</h6> <ul><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m" data-svelte-h="svelte-1xuf0bh">Improved Kernel:</strong> Developed a kernel for ${escape(`\\(\\ell\\)`)}-COC with at most ${escape(`\\( 2{\\ell k} \\)`)} vertices, significantly improving upon previous results.</li> <li class="svelte-1af2q2m" data-svelte-h="svelte-1q4qsjo"><strong class="svelte-1af2q2m">Generalized q-Expansion Lemma:</strong> Extended the q-Expansion Lemma to weighted graphs, a result that may have independent interest.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-1ynbecn">Methodology</h6> <ul><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m" data-svelte-h="svelte-zj8tuw">Kernelization Algorithm:</strong> Designed an algorithm that reduces the input graph to a smaller equivalent graph with at most ${escape(`\\( 2{\\ell k} \\)`)} vertices in ${escape(`\\( n^{O(\\ell)} \\)`)} time.</li> <li class="svelte-1af2q2m" data-svelte-h="svelte-169uqmq"><strong class="svelte-1af2q2m">Weighted q-Expansion Lemma:</strong> Proved a generalization of the q-Expansion Lemma for weighted graphs to facilitate the kernelization process.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-iodqf7">Significance</h6> <ul><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m" data-svelte-h="svelte-8ox1h5">Efficiency:</strong> The proposed kernel significantly reduces the problem size, leading to more efficient algorithms for ${escape(`\\(\\ell\\)`)}-COC.</li> <li class="svelte-1af2q2m" data-svelte-h="svelte-f7heme"><strong class="svelte-1af2q2m">Theoretical Impact:</strong> The generalized q-Expansion Lemma may have broader applications in graph theory and algorithm design.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-1h8nw31">Conclusion</h6> <p class="svelte-1af2q2m">This work advances the study of ${escape(`\\(\\ell\\)`)}-Component Order Connectivity by providing a more efficient kernelization algorithm and introducing a generalized q-Expansion Lemma for weighted graphs.</p>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
