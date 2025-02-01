import { a as subscribe, b as set_store_value } from "../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../../chunks/ssr2.js";
/* empty css                                                          */
import { p as page } from "../../../../../../chunks/stores3.js";
import { C as Card } from "../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../chunks/ActionIcons.js";
import "../../../../../../chunks/Subheader.js";
import "../../../../../../chunks/client.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../../chunks/stores.js";
/* empty css                                                             */
import { c as contentNav, a as contents } from "../../../../../../chunks/content4.js";
import { P as Pathlist } from "../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../chunks/CourseNavigation.js";
const css = {
  code: "article.svelte-98uzi2{display:flex;flex-direction:column;gap:0.5em}p.svelte-98uzi2,li.svelte-98uzi2{opacity:0.8}h4.svelte-98uzi2{margin:0.5em 0}h6.svelte-98uzi2{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}strong.svelte-98uzi2{color:goldenrod;opacity:1}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Link from \'$lib/ui/Link.svelte\';\\r\\n    import {page} from \'$app/stores\';\\r\\n    import {onMount} from \'svelte\';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from \'$lib/components/NavList.svelte\'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/linearalgebra/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n\\timport CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Bases and linear independence\\";\\r\\n    $darkMode = false;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.7em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Linear Algebra</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/linearalgebra/bases\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Bases and linear independence\\r\\n    </h4>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Vector space</h6>\\r\\n            <p>\\r\\n                A vector space over a field \\\\(F\\\\) is a non-empty set \\\\(V\\\\) together with a binary operation and a binary function\\r\\n            </p>\\r\\n            <ul>\\r\\n                <li>\\r\\n                    <strong>binary operation</strong> called vector addition such that forall \\\\( \\\\vert \\\\psi\\\\rangle\\\\) and \\\\(\\\\vert \\\\phi\\\\rangle\\\\) in \\\\(V\\\\), their sum \\\\(\\\\vert \\\\psi\\\\rangle + \\\\vert \\\\phi\\\\rangle\\\\) belongs to \\\\(V\\\\).\\r\\n                </li>\\r\\n                <li>\\r\\n                    <strong>binary function</strong> called scalar multiplication such that for any scalar \\\\(a\\\\in F\\\\) and any vector \\\\(\\\\vert \\\\psi\\\\rangle \\\\in V\\\\), we have \\\\(a\\\\vert \\\\psi\\\\rangle \\\\in V\\\\).\\r\\n                </li>\\r\\n            </ul>\\r\\n            <p>\\r\\n                These operations then must satisfy for \\\\(V\\\\) to be a vector space:\\r\\n            </p>\\r\\n            <ol>\\r\\n                <li>\\r\\n                    <strong>Associativity</strong> of vector addition\\r\\n                </li>\\r\\n                <li>\\r\\n                    <strong>Commutativity</strong> of vector addition\\r\\n                </li>\\r\\n                <li>\\r\\n                    <strong>Identity element</strong> of vector addition\\r\\n                </li>\\r\\n                <li>\\r\\n                    <strong>Inverse elements</strong> of vector addition\\r\\n                </li>\\r\\n                <li>\\r\\n                    <strong>Identity element</strong> of scalar multiplication\\r\\n                </li>\\r\\n                <li>\\r\\n                    <strong>Distributivity</strong> of scalar multiplication with respect to vector addition\\r\\n                </li>\\r\\n                <li>\\r\\n                    <strong>Distributivity</strong> of scalar multiplication with respect to field addition\\r\\n                </li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Vector space in Quantum computing</h6>\\r\\n            <p>\\r\\n                In quantum computing, we are interested in vector space over {`\\\\\\\\(\\\\\\\\mathbb{C}^n\\\\\\\\)`} where {`\\\\\\\\(\\\\\\\\mathbb{C}\\\\\\\\)`} is the set of complex numbers. A vector is represented via <strong>bra-ket</strong> notation. A vector {`\\\\\\\\(\\\\\\\\mathbb{v}\\\\\\\\)`} is denoted by \\\\(\\\\vert v\\\\rangle\\\\) (called ket \\\\(v\\\\)). In terms of matrices, a vector is specified using a column vector of length \\\\(n\\\\), i.e.\\r\\n                {`\\\\\\\\[\\r\\n                    \\\\\\\\vert v\\\\\\\\rangle \\\\\\\\equiv \\\\\\\\begin{bmatrix}\\r\\n                        v_1\\\\\\\\\\\\\\\\\\r\\n                        v_2\\\\\\\\\\\\\\\\\\r\\n                        \\\\\\\\vdots\\\\\\\\\\\\\\\\\\r\\n                        v_n\\r\\n                    \\\\\\\\end{bmatrix}\\r\\n                    \\\\\\\\]`}\\r\\n                where {`\\\\\\\\(\\\\\\\\forall i, ~ v_i \\\\\\\\in \\\\\\\\mathbb{C}\\\\\\\\)`}.\\r\\n            </p>\\r\\n            <p>\\r\\n                The vector addition {`\\\\\\\\(\\\\\\\\vert u\\\\\\\\rangle + \\\\\\\\vert v\\\\\\\\rangle\\\\\\\\)`} is defined as \\r\\n                {`\\\\\\\\[\\r\\n                    \\\\\\\\begin{bmatrix}\\r\\n                        u_1\\\\\\\\\\\\\\\\\\r\\n                        u_2\\\\\\\\\\\\\\\\\\r\\n                        \\\\\\\\vdots\\\\\\\\\\\\\\\\\\r\\n                        u_n\\r\\n                    \\\\\\\\end{bmatrix} + \\\\\\\\begin{bmatrix}\\r\\n                        v_1\\\\\\\\\\\\\\\\\\r\\n                        v_2\\\\\\\\\\\\\\\\\\r\\n                        \\\\\\\\vdots\\\\\\\\\\\\\\\\\\r\\n                        v_n\\r\\n                    \\\\\\\\end{bmatrix} \\\\\\\\equiv \\\\\\\\begin{bmatrix}\\r\\n                        u_1 + v_1\\\\\\\\\\\\\\\\\\r\\n                        u_2 + v_2\\\\\\\\\\\\\\\\\\r\\n                        \\\\\\\\vdots\\\\\\\\\\\\\\\\\\r\\n                        u_n + v_n\\r\\n                    \\\\\\\\end{bmatrix}\\r\\n                \\\\\\\\]`}\\r\\n            </p>\\r\\n            <p>\\r\\n                The scalar multiplication {`\\\\\\\\(\\\\\\\\alpha\\\\\\\\vert v\\\\\\\\rangle\\\\\\\\)`} is defined as \\r\\n                {`\\\\\\\\[\\r\\n                    \\\\\\\\alpha\\\\\\\\begin{bmatrix}\\r\\n                        v_1\\\\\\\\\\\\\\\\\\r\\n                        v_2\\\\\\\\\\\\\\\\\\r\\n                        \\\\\\\\vdots\\\\\\\\\\\\\\\\\\r\\n                        v_n\\r\\n                    \\\\\\\\end{bmatrix} \\\\\\\\equiv \\\\\\\\begin{bmatrix}\\r\\n                        \\\\\\\\alpha v_1\\\\\\\\\\\\\\\\\\r\\n                        \\\\\\\\alpha v_2\\\\\\\\\\\\\\\\\\r\\n                        \\\\\\\\vdots\\\\\\\\\\\\\\\\\\r\\n                        \\\\\\\\alpha v_n\\r\\n                    \\\\\\\\end{bmatrix}\\r\\n                \\\\\\\\]`}\\r\\n                where \\\\(\\\\alpha\\\\) is a complex number.\\r\\n            </p>\\r\\n            <p>\\r\\n                With these definitions, it is easy to verify that all the above axioms are satisfied.\\r\\n            </p>\\r\\n            <p>\\r\\n                The <strong>zero vector</strong> is represented not by \\\\(\\\\vert 0\\\\rangle\\\\), but by {`\\\\\\\\(\\\\\\\\mathbb{0}\\\\\\\\)`}. This is the only exception. We can write \\r\\n                {`\\\\\\\\[\\r\\n                    \\\\\\\\begin{aligned}\\r\\n                    \\\\\\\\vert v\\\\\\\\rangle + \\\\\\\\mathbb{0} &= \\\\\\\\vert v\\\\\\\\rangle\\\\\\\\\\\\\\\\\\r\\n                    \\\\\\\\alpha \\\\\\\\mathbb{0} &= \\\\\\\\mathbb{0}\\r\\n                    \\\\\\\\end{aligned}    \\r\\n                \\\\\\\\]`}\\r\\n            </p>\\r\\n            <p>\\r\\n                Notice that the zero vector {`\\\\\\\\(\\\\\\\\mathbb{0}\\\\\\\\)`} is represented with a column of all zeroes.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Vector subspace</h6>\\r\\n            <p>\\r\\n                A vector subspace of a vector space \\\\(V\\\\) is a subset \\\\(W\\\\) of \\\\(V\\\\) such that \\\\(W\\\\) is also a vector space, i.e., \\\\(W\\\\) must be closed under scalar multiplication and addition.\\r\\n            </p>\\r\\n            <p>\\r\\n                One way to construct subspaces is to set some of the coordinates to zero, i.e. a fixed set of coordinates are always zero in constructed subspace \\\\(W\\\\).\\r\\n            </p>\\r\\n            <p>\\r\\n                We\'ll learn another way to create subspaces using basis vectors.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Spanning Set</h6>\\r\\n            <div class=\\"definition\\">\\r\\n                A <em>spanning set</em> for a vector space is a set of vectors \\\\(\\\\vert v_1\\\\rangle,\\\\dots, \\\\vert v_n\\\\rangle\\\\) such that any vector \\\\(\\\\vert v\\\\rangle\\\\) in the vector space can be written as a linear combination \\\\[\\\\vert v\\\\rangle = \\\\sum_i a_i\\\\vert v_i\\\\rangle\\\\] of vectors in that set.\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAwBI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,eAAC,CAAE,gBAAG,CACF,OAAO,CAAE,GACb,CACQ,gBAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,gBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAC9B,CACA,oBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb"}'
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
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-98uzi2" data-svelte-h="svelte-uwkxw">Spanning Set</h6> <div class="definition" data-svelte-h="svelte-1qtercx">A <em>spanning set</em> for a vector space is a set of vectors \\(\\vert v_1\\rangle,\\dots, \\vert v_n\\rangle\\) such that any vector \\(\\vert v\\rangle\\) in the vector space can be written as a linear combination \\[\\vert v\\rangle = \\sum_i a_i\\vert v_i\\rangle\\] of vectors in that set.</div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
