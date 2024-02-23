import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-HSn4Y_Gl.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import './Subheader-nJdHlnFA.js';
import './client-_MkdHwD5.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-MGSbm_Vc.js';
import { c as contentNav, a as contents } from './content2-7tUv1pJG.js';
import { P as Pathlist } from './Pathlist-Rliv_14E.js';
import { C as CourseNavigation } from './CourseNavigation-nZg0bqlC.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './exports-mq_1S73-.js';
import './index2-z1g76_ny.js';

const css = {
  code: "article.svelte-98uzi2{display:flex;flex-direction:column;gap:0.5em}p.svelte-98uzi2,li.svelte-98uzi2{opacity:0.8}h4.svelte-98uzi2{margin:0.5em 0}h6.svelte-98uzi2{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}strong.svelte-98uzi2{color:goldenrod;opacity:1}",
  map: null
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
  set_store_value(currentPath, $currentPath = "Bases and linear independence", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-su6ao3_START -->${$$result.title = `<title>Linear Algebra</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/linearalgebra/bases"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-su6ao3_END -->`, ""} <article class="svelte-98uzi2">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-98uzi2" data-svelte-h="svelte-lve8hw">Bases and linear independence</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-98uzi2" data-svelte-h="svelte-1w6yfxn">Vector space</h6> <p class="svelte-98uzi2" data-svelte-h="svelte-1r4pa2f">A vector space over a field \\(F\\) is a non-empty set \\(V\\) together with a binary operation and a binary function</p> <ul data-svelte-h="svelte-gvm3dt"><li class="svelte-98uzi2"><strong class="svelte-98uzi2">binary operation</strong> called vector addition such that forall \\( \\vert \\psi\\rangle\\) and \\(\\vert \\phi\\rangle\\) in \\(V\\), their sum \\(\\vert \\psi\\rangle + \\vert \\phi\\rangle\\) belongs to \\(V\\).</li> <li class="svelte-98uzi2"><strong class="svelte-98uzi2">binary function</strong> called scalar multiplication such that for any scalar \\(a\\in F\\) and any vector \\(\\vert \\psi\\rangle \\in V\\), we have \\(a\\vert \\psi\\rangle \\in V\\).</li></ul> <p class="svelte-98uzi2" data-svelte-h="svelte-15uyl2g">These operations then must satisfy for \\(V\\) to be a vector space:</p> <ol data-svelte-h="svelte-1qjthdc"><li class="svelte-98uzi2"><strong class="svelte-98uzi2">Associativity</strong> of vector addition</li> <li class="svelte-98uzi2"><strong class="svelte-98uzi2">Commutativity</strong> of vector addition</li> <li class="svelte-98uzi2"><strong class="svelte-98uzi2">Identity element</strong> of vector addition</li> <li class="svelte-98uzi2"><strong class="svelte-98uzi2">Inverse elements</strong> of vector addition</li> <li class="svelte-98uzi2"><strong class="svelte-98uzi2">Identity element</strong> of scalar multiplication</li> <li class="svelte-98uzi2"><strong class="svelte-98uzi2">Distributivity</strong> of scalar multiplication with respect to vector addition</li> <li class="svelte-98uzi2"><strong class="svelte-98uzi2">Distributivity</strong> of scalar multiplication with respect to field addition</li></ol>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-98uzi2" data-svelte-h="svelte-2hz4nf">Vector space in Quantum computing</h6> <p class="svelte-98uzi2">In quantum computing, we are interested in vector space over ${escape(`\\(\\mathbb{C}^n\\)`)} where ${escape(`\\(\\mathbb{C}\\)`)} is the set of complex numbers. A vector is represented via <strong class="svelte-98uzi2" data-svelte-h="svelte-qwfs5s">bra-ket</strong> notation. A vector ${escape(`\\(\\mathbb{v}\\)`)} is denoted by \\(\\vert v\\rangle\\) (called ket \\(v\\)). In terms of matrices, a vector is specified using a column vector of length \\(n\\), i.e.
                ${escape(`\\[
                    \\vert v\\rangle \\equiv \\begin{bmatrix}
                        v_1\\\\
                        v_2\\\\
                        \\vdots\\\\
                        v_n
                    \\end{bmatrix}
                    \\]`)}
                where ${escape(`\\(\\forall i, ~ v_i \\in \\mathbb{C}\\)`)}.</p> <p class="svelte-98uzi2">The vector addition ${escape(`\\(\\vert u\\rangle + \\vert v\\rangle\\)`)} is defined as 
                ${escape(`\\[
                    \\begin{bmatrix}
                        u_1\\\\
                        u_2\\\\
                        \\vdots\\\\
                        u_n
                    \\end{bmatrix} + \\begin{bmatrix}
                        v_1\\\\
                        v_2\\\\
                        \\vdots\\\\
                        v_n
                    \\end{bmatrix} \\equiv \\begin{bmatrix}
                        u_1 + v_1\\\\
                        u_2 + v_2\\\\
                        \\vdots\\\\
                        u_n + v_n
                    \\end{bmatrix}
                \\]`)}</p> <p class="svelte-98uzi2">The scalar multiplication ${escape(`\\(\\alpha\\vert v\\rangle\\)`)} is defined as 
                ${escape(`\\[
                    \\alpha\\begin{bmatrix}
                        v_1\\\\
                        v_2\\\\
                        \\vdots\\\\
                        v_n
                    \\end{bmatrix} \\equiv \\begin{bmatrix}
                        \\alpha v_1\\\\
                        \\alpha v_2\\\\
                        \\vdots\\\\
                        \\alpha v_n
                    \\end{bmatrix}
                \\]`)}
                where \\(\\alpha\\) is a complex number.</p> <p class="svelte-98uzi2" data-svelte-h="svelte-1ey6gtd">With these definitions, it is easy to verify that all the above axioms are satisfied.</p> <p class="svelte-98uzi2">The <strong class="svelte-98uzi2" data-svelte-h="svelte-1kykyu5">zero vector</strong> is represented not by \\(\\vert 0\\rangle\\), but by ${escape(`\\(\\mathbb{0}\\)`)}. This is the only exception. We can write 
                ${escape(`\\[
                    \\begin{aligned}
                    \\vert v\\rangle + \\mathbb{0} &= \\vert v\\rangle\\\\
                    \\alpha \\mathbb{0} &= \\mathbb{0}
                    \\end{aligned}    
                \\]`)}</p> <p class="svelte-98uzi2">Notice that the zero vector ${escape(`\\(\\mathbb{0}\\)`)} is represented with a column of all zeroes.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-98uzi2" data-svelte-h="svelte-1f3x9xp">Vector subspace</h6> <p class="svelte-98uzi2" data-svelte-h="svelte-me4p9n">A vector subspace of a vector space \\(V\\) is a subset \\(W\\) of \\(V\\) such that \\(W\\) is also a vector space, i.e., \\(W\\) must be closed under scalar multiplication and addition.</p> <p class="svelte-98uzi2" data-svelte-h="svelte-1g66aek">One way to construct subspaces is to set some of the coordinates to zero, i.e. a fixed set of coordinates are always zero in constructed subspace \\(W\\).</p> <p class="svelte-98uzi2" data-svelte-h="svelte-5hd3af">We&#39;ll learn another way to create subspaces using basis vectors.</p>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-egIVATKc.js.map
