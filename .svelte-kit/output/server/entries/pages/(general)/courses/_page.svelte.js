import { c as create_ssr_component, s as subscribe, m as set_store_value, v as validate_component } from "../../../../chunks/ssr.js";
/* empty css                                                       */
import { L as Link } from "../../../../chunks/Link.js";
import "../../../../chunks/client.js";
import { d as darkMode, c as currentPath } from "../../../../chunks/stores3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Courses", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  return `${$$result.head += `<!-- HEAD_svelte-1g0w0gr_START -->${$$result.title = `<title>Courses</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1g0w0gr_END -->`, ""} <article><h1 data-svelte-h="svelte-jv3hik">Courses</h1> <h3 data-svelte-h="svelte-k8gjmi">DSU</h3> ${validate_component(Link, "Link").$$render($$result, { href: `/courses/mathematics2` }, {}, {
    default: () => {
      return `Mathematics II`;
    }
  })} ${validate_component(Link, "Link").$$render($$result, { href: `/courses/internet` }, {}, {
    default: () => {
      return `Internet Technologies`;
    }
  })} ${validate_component(Link, "Link").$$render($$result, { href: `/courses/internetlab` }, {}, {
    default: () => {
      return `Internet Technologies Lab`;
    }
  })} <br> <h3 data-svelte-h="svelte-i0dsms">Quantum Computation</h3> ${validate_component(Link, "Link").$$render($$result, { href: `/courses/linearalgebra` }, {}, {
    default: () => {
      return `Linear Algebra`;
    }
  })} ${validate_component(Link, "Link").$$render($$result, { href: `/courses/quantummechanics` }, {}, {
    default: () => {
      return `Quantum Mechanics`;
    }
  })} ${validate_component(Link, "Link").$$render($$result, { href: `/courses/circuits` }, {}, {
    default: () => {
      return `Quantum Circuits`;
    }
  })} ${validate_component(Link, "Link").$$render($$result, { href: `/courses/quantumalgorithms` }, {}, {
    default: () => {
      return `Quantum Algorithms`;
    }
  })} ${validate_component(Link, "Link").$$render($$result, { href: `/courses/quantumcomputers` }, {}, {
    default: () => {
      return `Quantum Computers`;
    }
  })} ${validate_component(Link, "Link").$$render($$result, { href: `/courses/quantuminformation1` }, {}, {
    default: () => {
      return `Quantum Information 1`;
    }
  })} ${validate_component(Link, "Link").$$render($$result, { href: `/courses/qec` }, {}, {
    default: () => {
      return `Quantum Error Correction`;
    }
  })} ${validate_component(Link, "Link").$$render($$result, { href: `/courses/quantuminformation2` }, {}, {
    default: () => {
      return `Quantum Information 2`;
    }
  })} ${validate_component(Link, "Link").$$render($$result, { href: `/courses/quantumcryptography` }, {}, {
    default: () => {
      return `Quantum Cryptography`;
    }
  })} ${validate_component(Link, "Link").$$render($$result, { href: `/courses/quantumcommunication` }, {}, {
    default: () => {
      return `Quantum Communication`;
    }
  })} ${validate_component(Link, "Link").$$render($$result, { href: `/courses/quantumml` }, {}, {
    default: () => {
      return `Quantum Machine Learning`;
    }
  })}</article>`;
});
export {
  Page as default
};
