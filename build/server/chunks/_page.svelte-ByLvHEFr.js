import { a as subscribe, d as set_store_value } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, v as validate_component } from './ssr2-q3O0l93f.js';
import './client-k3u4ChD_.js';
import { C as Card } from './Card-jWUNhZC7.js';
import './ActionIcons-Co7bojT-.js';
import { N as NavList } from './NavList-CiukFc6-.js';
import { d as darkMode, c as currentPath, n as navList } from './stores-Dd7WnHpz.js';
import './exports-kR70XCWV.js';
import './SmuiElement-DA9PKsv2.js';
import './classAdderBuilder-B9W9nXDD.js';
import './Item-Cixi8uf3.js';
import './dispatch-BOSWPsEc.js';
import './Ripple-Zq_D_mxy.js';
import './Subheader-BV9F6O0P.js';
import './Graphic-BjEt0ZHi.js';
import './Svg-BUOACmlE.js';
import './IconButton-3ebkBHL3.js';
import './index2-BZnI6xu7.js';

const contents = [
  {
    name: "Quantum Circuits",
    url: "/courses/circuits",
    topics: [
      {
        name: "Quantum algorithms",
        url: "/courses/circuits/algorithms",
        topics: []
      },
      {
        name: "Single qubit operations",
        url: "/courses/circuits/singlequbit",
        topics: []
      },
      {
        name: "Controlled operations",
        url: "/courses/circuits/controlled",
        topics: []
      },
      {
        name: "Measurement",
        url: "/courses/circuits/measurement",
        topics: []
      },
      {
        name: "Universal quantum gates",
        url: "/courses/circuits/universal",
        topics: [
          {
            name: "Two-level unitary gates are universal",
            url: "/courses/circuits/universal/twolevel"
          },
          {
            name: "Single qubit and CNOT gates are universal",
            url: "/courses/circuits/universal/singlecnot"
          },
          {
            name: "A discrete set of universal operations",
            url: "/courses/circuits/universal/discrete"
          },
          {
            name: "Approximating arbitrary unitary gates",
            url: "/courses/circuits/universal/approximation"
          },
          {
            name: "Quantum computational complexity",
            url: "/courses/circuits/universal/complexity"
          }
        ]
      },
      {
        name: "Quantum circuit model of computation",
        url: "/courses/circuits/model",
        topics: []
      },
      {
        name: "Simulation of quantum systems",
        url: "/courses/circuits/simulation",
        topics: [
          {
            name: "Simulation in action",
            url: "/courses/circuits/simulation/action"
          },
          {
            name: "The quantum simulation algorithm",
            url: "/courses/circuits/simulation/algorithm"
          },
          {
            name: "Simulating a Hamiltonian",
            url: "/courses/circuits/simulation/hamiltonian"
          },
          {
            name: "Perspectives on quantum simulation",
            url: "/courses/circuits/simulation/perspectives"
          }
        ]
      }
    ]
  }
];
const css = {
  code: "article.svelte-n59hwk{display:flex;flex-direction:column;gap:0.5em}h2.svelte-n59hwk,h3.svelte-n59hwk{margin:0.5em 0}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Link from '$lib/ui/Link.svelte';\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents } from \\"$lib/pages/courses/circuits/content\\";\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Quantum Circuits\\";\\r\\n    $darkMode = false;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Quantum Circuits</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/circuits\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <h2>\\r\\n        Quantum Circuits  \\r\\n    </h2>\\r\\n    <h3>Contents</h3>\\r\\n    <Card>\\r\\n        <NavList name=\\"{$navList[0].name}\\" url=\\"{$navList[0].url}\\" topics={$navList[0].topics} expanded />\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAsBI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CAIA,gBAAE,CAAE,gBAAW,CACX,MAAM,CAAE,KAAK,CAAC,CAClB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  let $navList, $$unsubscribe_navList;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Quantum Circuits", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-1cjl7bx_START -->${$$result.title = `<title>Quantum Circuits</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/circuits"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1cjl7bx_END -->`, ""} <article class="svelte-n59hwk"><h2 class="svelte-n59hwk" data-svelte-h="svelte-1unxa4f">Quantum Circuits</h2> <h3 class="svelte-n59hwk" data-svelte-h="svelte-1ee0su2">Contents</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(NavList, "NavList").$$render(
        $$result,
        {
          name: $navList[0].name,
          url: $navList[0].url,
          topics: $navList[0].topics,
          expanded: true
        },
        {},
        {}
      )}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ByLvHEFr.js.map
