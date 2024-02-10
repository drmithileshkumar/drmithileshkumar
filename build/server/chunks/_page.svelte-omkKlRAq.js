import { c as create_ssr_component, b as subscribe, q as set_store_value, v as validate_component } from './ssr-QYhyCQFk.js';
import './client-_MkdHwD5.js';
import { d as darkMode, c as currentPath, n as navList, C as Card } from './Card-sDgXjRKd.js';
import './ActionIcons-xBhwPEnE.js';
import { N as NavList } from './NavList-lQvNP1y_.js';
import './exports-mq_1S73-.js';
import './index2-2iq6SjbL.js';
import './Graphic-lGQRfn2K.js';
import './Ripple-3bzQ9j1i.js';
import './Subheader-vGMjMlem.js';

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
  set_store_value(currentPath, $currentPath = "Quantum Information 2", $currentPath);
  set_store_value(darkMode, $darkMode = true, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-35lbuq_START -->${$$result.title = `<title>Quantum Information 2</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/quantuminformation2"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-35lbuq_END -->`, ""} <article class="svelte-n59hwk"><h2 class="svelte-n59hwk" data-svelte-h="svelte-1r85dpn">Quantum Information 2</h2> <h3 class="svelte-n59hwk" data-svelte-h="svelte-1ee0su2">Contents</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
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
  })} </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-omkKlRAq.js.map
