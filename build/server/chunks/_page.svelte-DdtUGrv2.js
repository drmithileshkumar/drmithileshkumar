import { a as subscribe, e as set_store_value } from './utils-DH7689cv.js';
import { c as create_ssr_component, v as validate_component } from './ssr-Cv_bEuJL.js';
import './client-CjdeEz1m.js';
import { C as Card } from './Card-w0EtY1mU.js';
import './ActionIcons-CEcRhLH3.js';
import { N as NavList } from './NavList-Cy1rruyL.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-DCuXQBIu.js';
import './exports-DuWZopOC.js';
import './classAdderBuilder-B5RJlVtK.js';
import './Item-X5iuBhs5.js';
import './Ripple-Yt1ZX6hy.js';
import './Subheader-BwOM49vC.js';
import './Graphic-CTyan_iC.js';
import './IconButton-CpGaokyO.js';
import './index2-B3zlhmO5.js';

const contents = [
  {
    name: "Quantum Mechanics",
    url: "/courses/quantummechanics",
    topics: [
      {
        name: "State space",
        url: "/courses/quantummechanics/state",
        topics: []
      },
      {
        name: "Evolution",
        url: "/courses/quantummechanics/evolution",
        topics: []
      },
      {
        name: "Quantum measurement",
        url: "/courses/quantummechanics/measurement",
        topics: []
      },
      {
        name: "Distinguishing quantum states",
        url: "/courses/quantummechanics/distinguishing",
        topics: []
      },
      {
        name: "Projective measurement",
        url: "/courses/quantummechanics/projective",
        topics: []
      },
      {
        name: "POVM measurements",
        url: "/courses/quantummechanics/povm",
        topics: []
      },
      {
        name: "Phase",
        url: "/courses/quantummechanics/phase",
        topics: []
      },
      {
        name: "Composite systems",
        url: "/courses/quantummechanics/composite",
        topics: []
      },
      {
        name: "Superdense Coding",
        url: "/courses/quantummechanics/superdense",
        topics: []
      },
      {
        name: "The density operator",
        url: "/courses/quantummechanics/density",
        topics: [
          {
            name: "Ensembles of quantum states",
            url: "/courses/quantummechanics/density/ensembles"
          },
          {
            name: "General properties of the density operator",
            url: "/courses/quantummechanics/density/properties"
          },
          {
            name: "The reduced density operator",
            url: "/courses/quantummechanics/density/reduced"
          }
        ]
      },
      {
        name: "The Schmidt decomposition and purifications",
        url: "/courses/quantummechanics/purification",
        topics: []
      },
      {
        name: "EPR and the Bell inequality",
        url: "/courses/quantummechanics/bell",
        topics: []
      }
    ]
  }
];
const css = {
  code: "article.svelte-n59hwk{display:flex;flex-direction:column;gap:0.5em}h2.svelte-n59hwk,h3.svelte-n59hwk{margin:0.5em 0}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Link from '$lib/ui/Link.svelte';\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents } from \\"$lib/pages/courses/quantumml/content\\";\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Quantum Machine Learning\\";\\r\\n    $darkMode = false;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Quantum Machine Learning</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/quantumml\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <h2>\\r\\n        Quantum Machine Learning \\r\\n    </h2>\\r\\n    <h3>Contents</h3>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <NavList name=\\"{$navList[0].name}\\" url=\\"{$navList[0].url}\\" topics={$navList[0].topics} expanded />\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAsBI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CAIA,gBAAE,CAAE,gBAAW,CACX,MAAM,CAAE,KAAK,CAAC,CAClB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  let $navList, $$unsubscribe_navList;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Quantum Machine Learning", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-1p551hk_START -->${$$result.title = `<title>Quantum Machine Learning</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/quantumml"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1p551hk_END -->`, ""} <article class="svelte-n59hwk"><h2 class="svelte-n59hwk" data-svelte-h="svelte-1ij9210">Quantum Machine Learning</h2> <h3 class="svelte-n59hwk" data-svelte-h="svelte-1ee0su2">Contents</h3> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
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
    }
  )}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DdtUGrv2.js.map
