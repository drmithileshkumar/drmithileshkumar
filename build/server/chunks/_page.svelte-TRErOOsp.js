import { a as subscribe, d as set_store_value } from './utils-yAS0eczJ.js';
import { c as create_ssr_component, v as validate_component } from './ssr-APL1hDOv.js';
import './client-_MkdHwD5.js';
import { C as Card } from './Card-1SmK_YC9.js';
import './ActionIcons-6VPbDzCy.js';
import { N as NavList } from './NavList-BbD1mGoq.js';
import { d as darkMode, c as currentPath, n as navList } from './stores3-WCzcTCKR.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-0kAhHSI7.js';
import './Graphic-tQ1FVLXP.js';
import './Ripple-cfQYXJny.js';
import './Subheader-L9gPGS9m.js';
import './IconButton-SO8nJcPc.js';
import './index2-NBMbjtFx.js';

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
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  let $navList, $$unsubscribe_navList;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Quantum Computers", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-1j5bw4c_START -->${$$result.title = `<title>Quantum Computers</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/quantumcomputers"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1j5bw4c_END -->`, ""} <article class="svelte-n59hwk"><h2 class="svelte-n59hwk" data-svelte-h="svelte-a31xzp">Quantum Computers</h2> <h3 class="svelte-n59hwk" data-svelte-h="svelte-1ee0su2">Contents</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
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
//# sourceMappingURL=_page.svelte-TRErOOsp.js.map
