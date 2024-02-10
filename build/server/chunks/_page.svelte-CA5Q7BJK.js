import { c as create_ssr_component, b as subscribe, q as set_store_value, v as validate_component } from './ssr-QYhyCQFk.js';
import './client-_MkdHwD5.js';
import { d as darkMode, c as currentPath, n as navList, C as Card } from './Card-sDgXjRKd.js';
import './ActionIcons-xBhwPEnE.js';
import { N as NavList } from './NavList-5oz3h2MX.js';
import './exports-mq_1S73-.js';
import './index2-2iq6SjbL.js';
import './Subheader-vGMjMlem.js';

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
//# sourceMappingURL=_page.svelte-CA5Q7BJK.js.map
