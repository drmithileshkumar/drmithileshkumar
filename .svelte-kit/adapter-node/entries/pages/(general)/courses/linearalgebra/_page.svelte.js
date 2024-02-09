import { c as create_ssr_component, s as subscribe, p as set_store_value, v as validate_component } from "../../../../../chunks/ssr.js";
/* empty css                                                       */
import "../../../../../chunks/client.js";
import { d as darkMode, c as currentPath, n as navList, C as Card } from "../../../../../chunks/Card.js";
import "../../../../../chunks/ActionIcons.js";
import { N as NavList } from "../../../../../chunks/NavList.js";
const contents = [
  {
    name: "Linear algebra",
    url: "/courses/linearalgebra",
    topics: [
      {
        name: "Bases and linear independence",
        url: "/courses/linearalgebra/bases",
        topics: []
      },
      {
        name: "Linear operators and matrices",
        url: "/courses/linearalgebra/operators",
        topics: []
      },
      {
        name: "The Pauli matrices",
        url: "/courses/linearalgebra/pauli",
        topics: []
      },
      {
        name: "Inner products",
        url: "/courses/linearalgebra/inner",
        topics: []
      },
      {
        name: "Eigenvectors and eignevalues",
        url: "/courses/linearalgebra/eigen",
        topics: []
      },
      {
        name: "Adjoints and Hermitian operators",
        url: "/courses/linearalgebra/adjoint",
        topics: []
      },
      {
        name: "Tensor products",
        url: "/courses/linearalgebra/tensor",
        topics: []
      },
      {
        name: "Operator functions",
        url: "/courses/linearalgebra/functions",
        topics: []
      },
      {
        name: "The commutator and anti-commutator",
        url: "/courses/linearalgebra/commutator",
        topics: []
      },
      {
        name: "The polar and singular value decompositions",
        url: "/courses/linearalgebra/decompositions",
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
  set_store_value(currentPath, $currentPath = "Linear Algebra", $currentPath);
  set_store_value(darkMode, $darkMode = true, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-mwsana_START -->${$$result.title = `<title>Linear Algebra</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/linearalgebra"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-mwsana_END -->`, ""} <article class="svelte-n59hwk"><h2 class="svelte-n59hwk" data-svelte-h="svelte-yu2det">Linear Algebra</h2> <h3 class="svelte-n59hwk" data-svelte-h="svelte-1ee0su2">Contents</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
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
export {
  Page as default
};
