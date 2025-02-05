import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component } from './ssr2-CDgUAJs6.js';
import { g as github, a as githubDark } from './github-dark-DeAsbMVW.js';
import './Suffix-CtI6fDI6.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import { p as page } from './stores3-DPEAZJnM.js';
import './Subheader-DEm_inUP.js';
import './client-k3u4ChD_.js';
import { c as currentPath, n as navList, d as darkMode } from './stores-Cecnyqn_.js';
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
  code: "article.svelte-nv31ix{display:flex;flex-direction:column;gap:0.5em;max-width:750px;width:90%;margin:auto}p.svelte-nv31ix,li.svelte-nv31ix{opacity:0.8}h4.svelte-nv31ix{margin:0.5em 0}h6.svelte-nv31ix{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}strong.svelte-nv31ix{color:goldenrod;opacity:1}a.svelte-nv31ix{cursor:pointer;text-decoration:none}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    \\r\\n    import WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, {Body, Head, Row, Cell} from '@smui/data-table';\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/research/content\\";\\r\\n    import { typeset } from '$lib/shared/typeset';\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n\\r\\n    import Paper from \\"$lib/components/Paper.svelte\\";\\r\\n\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Obtuse Lattice Bases\\";\\r\\n    // $darkMode = false;\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n        max-width: 750px;\\r\\n        width: 90%;\\r\\n        margin: auto;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h4 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Obtuse Lattice Bases</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/css/layout\\" />\\r\\n    <meta name=\\"abstract\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Obtuse Lattice Bases\\r\\n    </h4>\\r\\n    <Paper>\\r\\n        <span slot=\\"authors\\">\\r\\n            Kanav Gupta, Mithilesh Kumar, Håvard Raddum\\r\\n        </span>\\r\\n        <span slot=\\"title\\">\\r\\n            Obtuse Lattice Bases\\r\\n        </span>\\r\\n        <span slot=\\"venue\\">\\r\\n            <a href=\\"https://arxiv.org/abs/2009.00384\\">CoRR abs/2009.00384 (2020)</a>\\r\\n        </span>\\r\\n    </Paper>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#introduction\\">Introduction</a></li>\\r\\n                <li><a href=\\"#previous\\">Previous Work</a></li>\\r\\n                <li><a href=\\"#contributions\\">Contributions</a></li>\\r\\n                <li><a href=\\"#methods\\">Methodology</a></li>\\r\\n                <li><a href=\\"#significance\\">Significance</a></li>\\r\\n                <li><a href=\\"#conclusion\\">Conclusion</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Introduction</h6>\\r\\n            <ul>\\r\\n                <li><strong>Lattice Reduction:</strong> Transforms a given lattice basis into another basis to simplify problems like finding the shortest vector.</li>\\r\\n                <li><strong>Obtuse Basis:</strong> A class of bases where the angle between any pair of basis vectors is obtuse, meaning their inner product is non-positive.</li>\\r\\n                <li><strong>Research Objective:</strong> To define obtuse bases and demonstrate that any lattice basis can be transformed into an obtuse basis, thereby expediting lattice enumeration algorithms.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Previous Work</h6>\\r\\n            <ul>\\r\\n                <li><strong>Lattice Reduction Algorithms:</strong> Algorithms like LLL and BKZ aim to produce nearly orthogonal bases but do not guarantee obtuse angles between basis vectors.</li>\\r\\n                <li><strong>Enumeration Techniques:</strong> Methods such as Kannan's algorithm systematically explore lattice points within a certain radius but can be computationally intensive.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Contributions</h6>\\r\\n            <ul>\\r\\n                <li><strong>Definition of Obtuse Bases:</strong> Introduced the concept of obtuse bases, where the inner product between any pair of basis vectors is non-positive.</li>\\r\\n                <li><strong>Transformation Algorithm:</strong> Developed an algorithm to convert any lattice basis into an obtuse basis.</li>\\r\\n                <li><strong>Enumeration Efficiency:</strong> Demonstrated that in an obtuse basis, the coefficients in the linear combination representing the shortest vector can all be chosen as positive integers, leading to an exponential speedup in lattice enumeration algorithms.</li>\\r\\n                <li><strong>Implementation and Testing:</strong> Implemented the obtuse basis transformation algorithm and tested it on small bases to validate its effectiveness.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Methodology</h6>\\r\\n            <ul>\\r\\n                <li><strong>Obtuse Basis Transformation:</strong> Designed an algorithm that adjusts the signs of basis vectors to ensure non-positive inner products between all pairs, effectively converting any given lattice basis into an obtuse basis.</li>\\r\\n                <li><strong>Enumeration Process:</strong> Utilized the property that in an obtuse basis, all coefficients in the representation of the shortest vector can be positive, leading to a more streamlined and faster enumeration process.</li>\\r\\n                <li><strong>Implementation Details:</strong> Implemented the transformation algorithm and conducted tests on small lattice bases to assess performance improvements.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Significance</h6>\\r\\n            <ul>\\r\\n                <li><strong>Exponential Speedup:</strong> The transformation to an obtuse basis results in an exponential reduction in the search space for lattice enumeration algorithms.</li>\\r\\n                <li><strong>Practical Efficiency:</strong> The proposed methods offer practical improvements in solving the shortest vector problem, which is fundamental in fields like cryptography and number theory.</li>\\r\\n                <li><strong>Algorithmic Compatibility:</strong> The obtuse basis framework is compatible with existing enumeration enhancements, making it versatile for various applications.</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Conclusion</h6>\\r\\n            <p>This work introduces the concept of obtuse bases and provides an efficient algorithm to transform any lattice basis into this form. The obtuse basis significantly accelerates lattice enumeration algorithms by allowing all positive coefficients in the representation of the shortest vector. The implementation and testing on small bases validate the practical benefits of this approach.</p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    \\r\\n</article>\\r\\n"],"names":[],"mappings":"AAgCI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KAAK,CACV,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IACZ,CACA,eAAC,CAAE,gBAAG,CACF,OAAO,CAAE,GACb,CACA,gBAAG,CACC,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,gBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,oBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb,CACA,eAAE,CACE,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IACrB"}`
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
  set_store_value(currentPath, $currentPath = "Obtuse Lattice Bases", $currentPath);
  $$result.css.add(css$1);
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_darkMode();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1tgzhdc_START -->${$$result.title = `<title>Obtuse Lattice Bases</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/layout"><meta name="abstract" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1tgzhdc_END -->`, ""} <article class="svelte-nv31ix">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-nv31ix" data-svelte-h="svelte-1l7voac">Obtuse Lattice Bases</h4> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
    venue: () => {
      return `<span slot="venue" data-svelte-h="svelte-1ah78ms"><a href="https://arxiv.org/abs/2009.00384" class="svelte-nv31ix">CoRR abs/2009.00384 (2020)</a></span>`;
    },
    title: () => {
      return `<span slot="title" data-svelte-h="svelte-1gwdlhf">Obtuse Lattice Bases</span>`;
    },
    authors: () => {
      return `<span slot="authors" data-svelte-h="svelte-177t9ml">Kanav Gupta, Mithilesh Kumar, Håvard Raddum</span>`;
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
          return `<h6 class="svelte-nv31ix" data-svelte-h="svelte-92fxym">Introduction</h6> <ul data-svelte-h="svelte-fk6yxi"><li class="svelte-nv31ix"><strong class="svelte-nv31ix">Lattice Reduction:</strong> Transforms a given lattice basis into another basis to simplify problems like finding the shortest vector.</li> <li class="svelte-nv31ix"><strong class="svelte-nv31ix">Obtuse Basis:</strong> A class of bases where the angle between any pair of basis vectors is obtuse, meaning their inner product is non-positive.</li> <li class="svelte-nv31ix"><strong class="svelte-nv31ix">Research Objective:</strong> To define obtuse bases and demonstrate that any lattice basis can be transformed into an obtuse basis, thereby expediting lattice enumeration algorithms.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-nv31ix" data-svelte-h="svelte-k8tpvg">Previous Work</h6> <ul data-svelte-h="svelte-lkbixa"><li class="svelte-nv31ix"><strong class="svelte-nv31ix">Lattice Reduction Algorithms:</strong> Algorithms like LLL and BKZ aim to produce nearly orthogonal bases but do not guarantee obtuse angles between basis vectors.</li> <li class="svelte-nv31ix"><strong class="svelte-nv31ix">Enumeration Techniques:</strong> Methods such as Kannan&#39;s algorithm systematically explore lattice points within a certain radius but can be computationally intensive.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-nv31ix" data-svelte-h="svelte-8mlfqz">Contributions</h6> <ul data-svelte-h="svelte-111fk1a"><li class="svelte-nv31ix"><strong class="svelte-nv31ix">Definition of Obtuse Bases:</strong> Introduced the concept of obtuse bases, where the inner product between any pair of basis vectors is non-positive.</li> <li class="svelte-nv31ix"><strong class="svelte-nv31ix">Transformation Algorithm:</strong> Developed an algorithm to convert any lattice basis into an obtuse basis.</li> <li class="svelte-nv31ix"><strong class="svelte-nv31ix">Enumeration Efficiency:</strong> Demonstrated that in an obtuse basis, the coefficients in the linear combination representing the shortest vector can all be chosen as positive integers, leading to an exponential speedup in lattice enumeration algorithms.</li> <li class="svelte-nv31ix"><strong class="svelte-nv31ix">Implementation and Testing:</strong> Implemented the obtuse basis transformation algorithm and tested it on small bases to validate its effectiveness.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-nv31ix" data-svelte-h="svelte-1ynbecn">Methodology</h6> <ul data-svelte-h="svelte-1j1rf4l"><li class="svelte-nv31ix"><strong class="svelte-nv31ix">Obtuse Basis Transformation:</strong> Designed an algorithm that adjusts the signs of basis vectors to ensure non-positive inner products between all pairs, effectively converting any given lattice basis into an obtuse basis.</li> <li class="svelte-nv31ix"><strong class="svelte-nv31ix">Enumeration Process:</strong> Utilized the property that in an obtuse basis, all coefficients in the representation of the shortest vector can be positive, leading to a more streamlined and faster enumeration process.</li> <li class="svelte-nv31ix"><strong class="svelte-nv31ix">Implementation Details:</strong> Implemented the transformation algorithm and conducted tests on small lattice bases to assess performance improvements.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-nv31ix" data-svelte-h="svelte-iodqf7">Significance</h6> <ul data-svelte-h="svelte-i1t1d"><li class="svelte-nv31ix"><strong class="svelte-nv31ix">Exponential Speedup:</strong> The transformation to an obtuse basis results in an exponential reduction in the search space for lattice enumeration algorithms.</li> <li class="svelte-nv31ix"><strong class="svelte-nv31ix">Practical Efficiency:</strong> The proposed methods offer practical improvements in solving the shortest vector problem, which is fundamental in fields like cryptography and number theory.</li> <li class="svelte-nv31ix"><strong class="svelte-nv31ix">Algorithmic Compatibility:</strong> The obtuse basis framework is compatible with existing enumeration enhancements, making it versatile for various applications.</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-nv31ix" data-svelte-h="svelte-1h8nw31">Conclusion</h6> <p class="svelte-nv31ix" data-svelte-h="svelte-v9hanb">This work introduces the concept of obtuse bases and provides an efficient algorithm to transform any lattice basis into this form. The obtuse basis significantly accelerates lattice enumeration algorithms by allowing all positive coefficients in the representation of the shortest vector. The implementation and testing on small bases validate the practical benefits of this approach.</p>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CMiUAH-q.js.map
