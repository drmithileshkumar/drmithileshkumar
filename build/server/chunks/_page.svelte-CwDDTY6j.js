import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component } from './ssr2-CDgUAJs6.js';
import { g as github, a as githubDark } from './github-dark-DeAsbMVW.js';
import './Suffix-CtI6fDI6.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import { p as page } from './stores3-kDd52ji6.js';
import './Subheader-DEm_inUP.js';
import './client-CAo-6NMJ.js';
import { c as currentPath, n as navList, d as darkMode } from './stores-Cecnyqn_.js';
import { c as contentNav, a as contents } from './content7-CS5adbwd.js';
import { P as Pathlist } from './Pathlist-B9wgcfC1.js';
import { C as CourseNavigation } from './CourseNavigation-DznSxbmO.js';
import { P as Paper } from './Paper2-DwFUsx4R.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './exports-DKuYoYKl.js';
import './index2-D2s-XE5r.js';

const css$1 = {
  code: "article.svelte-1l8969l{display:flex;flex-direction:column;gap:0.5em;max-width:750px;width:90%;margin:auto}p.svelte-1l8969l,li.svelte-1l8969l{opacity:0.8}h4.svelte-1l8969l{margin:0.5em 0}h6.svelte-1l8969l{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}strong.svelte-1l8969l{color:goldenrod;opacity:1}a.svelte-1l8969l{cursor:pointer;text-decoration:none}.media.svelte-1l8969l{display:flex;align-items:center;justify-content:center}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    \\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, {Body, Head, Row, Cell} from '@smui/data-table';\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/research/content\\";\\r\\n    import { typeset } from '$lib/shared/typeset';\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n\\r\\n    import Paper from \\"$lib/components/Paper.svelte\\";\\r\\n\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Club\\";\\r\\n    // $darkMode = false;\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n        max-width: 750px;\\r\\n        width: 90%;\\r\\n        margin: auto;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h4 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n    .media {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Club</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/layout\\" />\\r\\n    <meta name=\\"abstract\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        2-Club\\r\\n    </h4>\\r\\n    <Paper>\\r\\n        <span slot=\\"authors\\">\\r\\n            Mithilesh Kumar\\r\\n        </span>\\r\\n        <span slot=\\"title\\">\\r\\n            2-CLUB is NP-hard for distance to 2-club cluster graphs\\r\\n        </span>\\r\\n        <span slot=\\"venue\\">\\r\\n            <a href=\\"https://doi.org/10.48550/arXiv.1903.05425\\">CoRR abs/1903.05425 (2019)</a>\\r\\n        </span>\\r\\n    </Paper>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#introduction\\">Introduction</a></li>\\r\\n                <li><a href=\\"#previous\\">Previous Work</a></li>\\r\\n                <li><a href=\\"#contributions\\">Contributions</a></li>\\r\\n                <li><a href=\\"#methods\\">Methodology</a></li>\\r\\n                <li><a href=\\"#significance\\">Significance</a></li>\\r\\n                <li><a href=\\"#conclusion\\">Conclusion</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Introduction</h6>\\r\\n            <ul>\\r\\n                <li><strong>2-Club:</strong> A subgraph where the maximum distance between any two vertices is at most 2.</li>\\r\\n                <li><strong>2-Club Cluster Graph:</strong> A graph in which each connected component is a 2-club.</li>\\r\\n                <li><strong>Problem Statement:</strong> Determine whether finding a 2-club in graphs that are a certain distance from being 2-club cluster graphs is NP-hard.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Previous Work</h6>\\r\\n            <ul>\\r\\n                <li><strong>Hartung et al. (2013):</strong> Studied the 2-Club problem under various structural restrictions and posed open questions regarding its complexity in specific graph classes.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Contributions</h6>\\r\\n            <ul>\\r\\n                <li><strong>Main Result:</strong> Proved that the 2-CLUB problem is NP-hard even for graphs that are at a distance of two vertex deletions from being 2-club cluster graphs.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Methodology</h6>\\r\\n            <div class=\\"media\\">\\r\\n                <img src=\\"/Research/Club/club.png\\" alt=\\"Club reduction\\" width=\\"50%\\">\\r\\n            </div>\\r\\n            <ul>\\r\\n                <li><strong>Reduction from CLIQUE:</strong> Employed a reduction from the NP-hard CLIQUE problem to demonstrate the NP-hardness of 2-CLUB in the specified graph class.</li>\\r\\n                <li><strong>Graph Construction:</strong> Constructed a graph \\\\( G \\\\) from a given graph \\\\( H \\\\) by adding specific sets of vertices and edges to control the graph's structure and properties.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Significance</h6>\\r\\n            <ul>\\r\\n                <li><strong>Complexity Insight:</strong> Provides a deeper understanding of the computational complexity of the 2-CLUB problem in relation to graph modifications.</li>\\r\\n                <li><strong>Answering Open Questions:</strong> Addresses an open problem posed by Hartung et al. (2013) regarding the complexity of 2-CLUB in certain graph classes.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Conclusion</h6>\\r\\n            <p>This work establishes the NP-hardness of the 2-CLUB problem for graphs that are two vertex deletions away from being 2-club cluster graphs, thereby contributing to the understanding of the problem's complexity in structurally restricted graph classes.</p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n     \\r\\n</article>\\r\\n"],"names":[],"mappings":"AAgCI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KAAK,CACV,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IACZ,CACA,gBAAC,CAAE,iBAAG,CACF,OAAO,CAAE,GACb,CACA,iBAAG,CACC,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,qBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb,CACA,gBAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB,CACA,qBAAO,CACH,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACrB"}`
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
  set_store_value(currentPath, $currentPath = "Club", $currentPath);
  $$result.css.add(css$1);
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_darkMode();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-15xtfdu_START -->${$$result.title = `<title>Club</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/layout"><meta name="abstract" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-15xtfdu_END -->`, ""} <article class="svelte-1l8969l">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1l8969l" data-svelte-h="svelte-684mgl">2-Club</h4> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<span slot="venue" data-svelte-h="svelte-k9rymd"><a href="https://doi.org/10.48550/arXiv.1903.05425" class="svelte-1l8969l">CoRR abs/1903.05425 (2019)</a></span>`;
    },
    title: () => {
      return `<span slot="title" data-svelte-h="svelte-zsltgl">2-CLUB is NP-hard for distance to 2-club cluster graphs</span>`;
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
            return `<h6 class="svelte-1l8969l" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-1ua7sc0"><li class="svelte-1l8969l"><a href="#introduction" class="svelte-1l8969l">Introduction</a></li> <li class="svelte-1l8969l"><a href="#previous" class="svelte-1l8969l">Previous Work</a></li> <li class="svelte-1l8969l"><a href="#contributions" class="svelte-1l8969l">Contributions</a></li> <li class="svelte-1l8969l"><a href="#methods" class="svelte-1l8969l">Methodology</a></li> <li class="svelte-1l8969l"><a href="#significance" class="svelte-1l8969l">Significance</a></li> <li class="svelte-1l8969l"><a href="#conclusion" class="svelte-1l8969l">Conclusion</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1l8969l" data-svelte-h="svelte-92fxym">Introduction</h6> <ul data-svelte-h="svelte-e562mu"><li class="svelte-1l8969l"><strong class="svelte-1l8969l">2-Club:</strong> A subgraph where the maximum distance between any two vertices is at most 2.</li> <li class="svelte-1l8969l"><strong class="svelte-1l8969l">2-Club Cluster Graph:</strong> A graph in which each connected component is a 2-club.</li> <li class="svelte-1l8969l"><strong class="svelte-1l8969l">Problem Statement:</strong> Determine whether finding a 2-club in graphs that are a certain distance from being 2-club cluster graphs is NP-hard.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1l8969l" data-svelte-h="svelte-k8tpvg">Previous Work</h6> <ul data-svelte-h="svelte-et5e67"><li class="svelte-1l8969l"><strong class="svelte-1l8969l">Hartung et al. (2013):</strong> Studied the 2-Club problem under various structural restrictions and posed open questions regarding its complexity in specific graph classes.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1l8969l" data-svelte-h="svelte-8mlfqz">Contributions</h6> <ul data-svelte-h="svelte-65zzgz"><li class="svelte-1l8969l"><strong class="svelte-1l8969l">Main Result:</strong> Proved that the 2-CLUB problem is NP-hard even for graphs that are at a distance of two vertex deletions from being 2-club cluster graphs.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1l8969l" data-svelte-h="svelte-1ynbecn">Methodology</h6> <div class="media svelte-1l8969l" data-svelte-h="svelte-9c2rta"><img src="/Research/Club/club.png" alt="Club reduction" width="50%"></div> <ul data-svelte-h="svelte-u4i1y0"><li class="svelte-1l8969l"><strong class="svelte-1l8969l">Reduction from CLIQUE:</strong> Employed a reduction from the NP-hard CLIQUE problem to demonstrate the NP-hardness of 2-CLUB in the specified graph class.</li> <li class="svelte-1l8969l"><strong class="svelte-1l8969l">Graph Construction:</strong> Constructed a graph \\( G \\) from a given graph \\( H \\) by adding specific sets of vertices and edges to control the graph&#39;s structure and properties.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1l8969l" data-svelte-h="svelte-iodqf7">Significance</h6> <ul data-svelte-h="svelte-feva43"><li class="svelte-1l8969l"><strong class="svelte-1l8969l">Complexity Insight:</strong> Provides a deeper understanding of the computational complexity of the 2-CLUB problem in relation to graph modifications.</li> <li class="svelte-1l8969l"><strong class="svelte-1l8969l">Answering Open Questions:</strong> Addresses an open problem posed by Hartung et al. (2013) regarding the complexity of 2-CLUB in certain graph classes.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1l8969l" data-svelte-h="svelte-1h8nw31">Conclusion</h6> <p class="svelte-1l8969l" data-svelte-h="svelte-hm6pi1">This work establishes the NP-hardness of the 2-CLUB problem for graphs that are two vertex deletions away from being 2-club cluster graphs, thereby contributing to the understanding of the problem&#39;s complexity in structurally restricted graph classes.</p>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CwDDTY6j.js.map
