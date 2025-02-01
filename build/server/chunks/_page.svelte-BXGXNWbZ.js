import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component } from './ssr2-CDgUAJs6.js';
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
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    \\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, {Body, Head, Row, Cell} from '@smui/data-table';\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/research/content\\";\\r\\n    import { typeset } from '$lib/shared/typeset';\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n\\r\\n    import Paper from \\"$lib/components/Paper.svelte\\";\\r\\n\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Schmidt Decomposition of Multipartite states\\";\\r\\n    $darkMode = false;\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h4 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Schmidt Decomposition of Multipartite states</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/layout\\" />\\r\\n    <meta name=\\"abstract\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Schmidt Decomposition of Multipartite states\\r\\n    </h4>\\r\\n    <Paper>\\r\\n        <span slot=\\"authors\\">\\r\\n            Mithilesh Kumar\\r\\n        </span>\\r\\n        <span slot=\\"title\\">\\r\\n            Schmidt Decomposition of Multipartite states\\r\\n        </span>\\r\\n        <span slot=\\"venue\\">\\r\\n            <a href=\\"https://arxiv.org/abs/2411.02473\\">CoRR abs/2411.02473 (2024)</a>, <a href=\\"https://www.researchgate.net/publication/385491083_Schmidt_Decomposition_of_Multipartite_States\\">10.13140/RG.2.2.19713.88162</a>, 2024\\r\\n        </span>\\r\\n    </Paper>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#introduction\\">Introduction</a></li>\\r\\n                <li><a href=\\"#previous\\">Previous Work</a></li>\\r\\n                <li><a href=\\"#contributions\\">Contributions</a></li>\\r\\n                <li><a href=\\"#methods\\">Methodology</a></li>\\r\\n                <li><a href=\\"#significance\\">Significance</a></li>\\r\\n                <li><a href=\\"#conclusion\\">Conclusion</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Introduction</h6>\\r\\n            <ul>\\r\\n                <li><strong>Quantum State Representation:</strong> Quantum states can be expressed in numerous ways depending on the choice of basis.</li>\\r\\n                <li><strong>Schmidt Decomposition:</strong> A method that simplifies the representation of bipartite quantum states, facilitating the study of entanglement.</li>\\r\\n                <li><strong>Research Objective:</strong> To establish necessary and sufficient conditions for the existence of Schmidt decompositions in multipartite quantum systems and to develop an efficient algorithm for obtaining such decompositions when they exist.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Previous Work</h6>\\r\\n            <ul>\\r\\n                <li><strong>Bipartite Systems:</strong> All bipartite quantum states admit Schmidt decomposition, which is instrumental in analyzing entanglement properties.</li>\\r\\n                <li><strong>Multipartite Systems:</strong> Extending Schmidt decomposition to systems with more than two subsystems is non-trivial and has been a subject of ongoing research.</li>\\r\\n                <li><strong>Prior Studies:</strong> Researchers have explored conditions under which multipartite states can be decomposed in a Schmidt-like manner, but a comprehensive criterion has been lacking.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Contributions</h6>\\r\\n            <ul>\\r\\n                <li><strong>Existence Criteria:</strong> Derived necessary and sufficient conditions for the existence of Schmidt decompositions in multipartite quantum states.</li>\\r\\n                <li><strong>Algorithm Development:</strong> Proposed an efficient algorithm to obtain the Schmidt decomposition for states that satisfy the derived conditions.</li>\\r\\n                <li><strong>Generalization:</strong> Extended the concept of Schmidt decomposition beyond bipartite systems, providing a framework applicable to systems with multiple subsystems.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Methodology</h6>\\r\\n            <ul>\\r\\n                <li><strong>Mathematical Framework:</strong> Utilized linear algebraic techniques to analyze the structure of multipartite quantum states.</li>\\r\\n                <li><strong>Condition Derivation:</strong> Investigated the commutation relations and normality conditions of matrices associated with quantum states to establish decomposition criteria.</li>\\r\\n                <li><strong>Algorithm Design:</strong> Developed a step-by-step procedure to transform a given multipartite state into its Schmidt-decomposed form, if the state meets the necessary conditions.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Significance</h6>\\r\\n            <ul>\\r\\n                <li><strong>Advancement in Quantum Theory:</strong> Provides a deeper understanding of the structure of multipartite quantum states and their entanglement properties.</li>\\r\\n                <li><strong>Practical Applications:</strong> The findings can be applied to quantum information processing tasks, where understanding entanglement in multipartite systems is crucial.</li>\\r\\n                <li><strong>Algorithmic Efficiency:</strong> The proposed algorithm offers a practical tool for researchers working with complex quantum systems.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Conclusion</h6>\\r\\n            <p>This study establishes a comprehensive criterion for the existence of Schmidt decompositions in multipartite quantum states and introduces an efficient algorithm for obtaining such decompositions. These contributions enhance the understanding of entanglement in complex quantum systems and provide practical tools for further research in quantum information science.</p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    \\r\\n</article>\\r\\n"],"names":[],"mappings":"AAgCI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAC,CAAE,iBAAG,CACF,OAAO,CAAE,GACb,CACA,iBAAG,CACC,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,qBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb,CACA,gBAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB"}`
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
  set_store_value(currentPath, $currentPath = "Schmidt Decomposition of Multipartite states", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-8exrtw_START -->${$$result.title = `<title>Schmidt Decomposition of Multipartite states</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/layout"><meta name="abstract" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-8exrtw_END -->`, ""} <article class="svelte-1af2q2m">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1af2q2m" data-svelte-h="svelte-vq9nsw">Schmidt Decomposition of Multipartite states</h4> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<span slot="venue" data-svelte-h="svelte-3384tw"><a href="https://arxiv.org/abs/2411.02473" class="svelte-1af2q2m">CoRR abs/2411.02473 (2024)</a>, <a href="https://www.researchgate.net/publication/385491083_Schmidt_Decomposition_of_Multipartite_States" class="svelte-1af2q2m">10.13140/RG.2.2.19713.88162</a>, 2024</span>`;
    },
    title: () => {
      return `<span slot="title" data-svelte-h="svelte-1psfl3r">Schmidt Decomposition of Multipartite states</span>`;
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
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-92fxym">Introduction</h6> <ul data-svelte-h="svelte-d2y9rx"><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Quantum State Representation:</strong> Quantum states can be expressed in numerous ways depending on the choice of basis.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Schmidt Decomposition:</strong> A method that simplifies the representation of bipartite quantum states, facilitating the study of entanglement.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Research Objective:</strong> To establish necessary and sufficient conditions for the existence of Schmidt decompositions in multipartite quantum systems and to develop an efficient algorithm for obtaining such decompositions when they exist.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-k8tpvg">Previous Work</h6> <ul data-svelte-h="svelte-15p8kb7"><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Bipartite Systems:</strong> All bipartite quantum states admit Schmidt decomposition, which is instrumental in analyzing entanglement properties.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Multipartite Systems:</strong> Extending Schmidt decomposition to systems with more than two subsystems is non-trivial and has been a subject of ongoing research.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Prior Studies:</strong> Researchers have explored conditions under which multipartite states can be decomposed in a Schmidt-like manner, but a comprehensive criterion has been lacking.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-8mlfqz">Contributions</h6> <ul data-svelte-h="svelte-1xfvet"><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Existence Criteria:</strong> Derived necessary and sufficient conditions for the existence of Schmidt decompositions in multipartite quantum states.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Algorithm Development:</strong> Proposed an efficient algorithm to obtain the Schmidt decomposition for states that satisfy the derived conditions.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Generalization:</strong> Extended the concept of Schmidt decomposition beyond bipartite systems, providing a framework applicable to systems with multiple subsystems.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-1ynbecn">Methodology</h6> <ul data-svelte-h="svelte-p3tc3x"><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Mathematical Framework:</strong> Utilized linear algebraic techniques to analyze the structure of multipartite quantum states.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Condition Derivation:</strong> Investigated the commutation relations and normality conditions of matrices associated with quantum states to establish decomposition criteria.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Algorithm Design:</strong> Developed a step-by-step procedure to transform a given multipartite state into its Schmidt-decomposed form, if the state meets the necessary conditions.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-iodqf7">Significance</h6> <ul data-svelte-h="svelte-ljo8de"><li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Advancement in Quantum Theory:</strong> Provides a deeper understanding of the structure of multipartite quantum states and their entanglement properties.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Practical Applications:</strong> The findings can be applied to quantum information processing tasks, where understanding entanglement in multipartite systems is crucial.</li> <li class="svelte-1af2q2m"><strong class="svelte-1af2q2m">Algorithmic Efficiency:</strong> The proposed algorithm offers a practical tool for researchers working with complex quantum systems.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1af2q2m" data-svelte-h="svelte-1h8nw31">Conclusion</h6> <p class="svelte-1af2q2m" data-svelte-h="svelte-7f1o2">This study establishes a comprehensive criterion for the existence of Schmidt decompositions in multipartite quantum states and introduces an efficient algorithm for obtaining such decompositions. These contributions enhance the understanding of entanglement in complex quantum systems and provide practical tools for further research in quantum information science.</p>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BXGXNWbZ.js.map
