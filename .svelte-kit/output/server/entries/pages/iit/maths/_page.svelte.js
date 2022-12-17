import { c as create_ssr_component, i as add_attribute, e as escape } from "../../../../chunks/index.js";
/* empty css                                                     */import { T as TeX } from "../../../../chunks/constants.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-1asvsve{text-decoration:none}.options.svelte-1asvsve{display:flex;flex-direction:row;gap:2em;width:100%;flex-wrap:wrap}",
  map: null
};
async function load({ session, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    return {
      status: 301,
      redirect: `https://drmithileshkumar.com/iit/maths`
    };
  }
  return { props: {} };
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-dssud7_START -->${$$result.title = `<title>Mathematics Questions</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com/iit/maths"}"><meta name="${"description"}" content="${"Learn and practice Mathematics for school, IIT JEE, Olympiad"}"><!-- HEAD_svelte-dssud7_END -->`, ""}
<article><h1 style="${"margin-bottom:0;"}">Practice Problems in Mathematics</h1>
    <h2 style="${"font-size: 1.2em; font-weight: 400;color: #888; margin-top:0;"}">Suitable for Class XI, XII and IIT JEE and other examinations.</h2>
    
    <div class="${"problemlist"}"><h3>Question 1 [JEE adv, 2021]</h3>
        <a${add_attribute("href", "/iit/maths/question1", 0)} class="${"svelte-1asvsve"}"><p>Let \\(${escape(TeX.vec("u"))}, ${escape(TeX.vec("v"))}\\) and \\(${escape(TeX.vec("w"))}\\) be vectors in three-dimensional space, where \\(${escape(TeX.vec("u"))}\\) and \\(${escape(TeX.vec("v"))}\\) are unit vectors which are not perpendicular to each other and \\[${escape(TeX.vec("u"))}\\cdot ${escape(TeX.vec("w"))} = 1,\\quad ${escape(TeX.vec("v"))}\\cdot ${escape(TeX.vec("w"))} = 1\\quad ${escape(TeX.vec("w"))}\\cdot ${escape(TeX.vec("w"))} = 4\\]
                If the volume of the parallelopiped, whose adjacent sides are represented by the vectors \\(${escape(TeX.vec("u"))}, ${escape(TeX.vec("v"))}\\) and \\(${escape(TeX.vec("w"))}\\), is \\(${escape(TeX.sqrt("2"))}\\), then the value of \\(|3${escape(TeX.vec("u"))} + 5${escape(TeX.vec("v"))}|\\) is ______.
            </p></a>
        <h3>Question 2 [JEE adv, 2021]</h3>
        <a${add_attribute("href", "/iit/maths/question2", 0)} class="${"svelte-1asvsve"}"><p>In a triangle ABC, let \\(AB = ${escape(TeX.sqrt("23"))}\\), and \\(BC = 3\\) and \\(CA = 4\\). Then the value of \\(${escape(TeX.dfrac("\\cot A + \\cot C", "\\cot B"))}\\) is ______.
            </p></a>
        <h3>Question 3 [JEE adv, 2021]</h3>
        <a${add_attribute("href", "/iit/maths/question3", 0)} class="${"svelte-1asvsve"}"><p>For \\(x${escape(TeX.inR)}\\), thi number of real roots of the equation \\(3x^2-4|x^2 - 1| + x - 1 = 0\\) is ______.
            </p></a>
        <h3>Question 4 [JEE adv, 2021]</h3>
        <a${add_attribute("href", "/iit/maths/question4", 0)} class="${"svelte-1asvsve"}"><p>For any complex number \\(w = c + id\\), let \\(arg(w)\\in (-\\pi,\\pi]\\), where \\(i=${escape(TeX.sqrt("-1"))}\\). Let \\(\\alpha\\) and \\(\\beta\\) be real numbers such that for all complex numbers \\(z = x + iy\\) satisfying \\(arg\\Big[${escape(TeX.dfrac("z + \\alpha", "z + \\beta"))}\\Big]=${escape(TeX.dfrac("\\pi", "4"))}\\), the ordered pair \\((x, y)\\) lies on the circle \\(x^2 + y^2 + 5x - 3y + 4 = 0\\). Then, which of the following statements is (are) <strong>True</strong>?
            </p>
            <ol class="${"options svelte-1asvsve"}"><li>${escape(`\\(\\alpha = -1\\)`)}</li>
                <li>${escape(`\\(\\alpha\\beta = 4\\)`)}</li>
                <li>${escape(`\\(\\alpha\\beta = -4\\)`)}</li>
                <li>${escape(`\\(\\beta = 4\\)`)}</li></ol></a>
        <h3>Question 5 [JEE adv, 2021]</h3>
        <a${add_attribute("href", "/iit/maths/question5", 0)} class="${"svelte-1asvsve"}"><p>For any positive integer \\(n\\), let \\(S_n : (0,\\infty)\\to ${escape(TeX.bbR)}\\) be defined by \\[S_n(x) = ${escape(TeX.sum("k=1", "n"))}${escape(TeX.acot)}\\Big(${escape(TeX.frac("1 + k(k + 1)x^2", "x"))}\\Big)\\] where for any \\(x${escape(TeX.inR)}, ${escape(TeX.acot)}(x)\\in (0, \\pi)\\) and \\(${escape(TeX.atan)}(x)\\in \\Big(-${escape(TeX.piby2)}, ${escape(TeX.piby2)}\\Big)\\). Then which of the following statements is (are) <strong>True</strong>?
            </p>
            <ol class="${"options svelte-1asvsve"}"><li>${escape(`\\(S_{10}(x) = \\dfrac{\\pi}{2}-\\tan^{-1}\\Big(\\dfrac{1 + 11x^2}{10x}\\Big)\\)`)}, for all \\(x&gt;0\\) </li>
                <li>${escape(`\\(\\lim_{n\\to \\infty}\\cot(S_n(x)) = x\\)`)}, for all \\(x&gt;0\\) </li>
                <li>The equation ${escape(`\\(S_3(x)=\\dfrac{\\pi}{4}\\)`)} has a root in \\((0,\\infty)\\)</li>
                <li>${escape(`\\(\\tan(S_n(x))\\leq \\dfrac{1}{2}\\)`)}, for all \\(n\\geq 1\\) and \\(x &gt; 0\\) </li></ol></a>
        <h3>Question 6 [JEE adv, 2021]</h3>
        <a${add_attribute("href", "/iit/maths/question6", 0)} class="${"svelte-1asvsve"}"><p>For any \\(3\\times 3\\) matrix \\(M\\), let \\(|M|\\) denote the determinant of \\(M\\). Let \\(I\\) be the \\(3\\times 3\\) identity matrix. Let \\(E\\) and \\(F\\) be two \\(3\\times 3\\) matrices such that \\(I-EF\\) is invertible. If \\(G = ${escape(TeX.pow("(I - EF)", "-1"))}\\), then which of the following statements is (are) <strong>True</strong>?
            </p>
            <ol class="${"options svelte-1asvsve"}"><li>${escape(`\\(|FE| = |I-FE||FGE|\\)`)}</li>
                <li>${escape(`\\((I-FE)(I + FGE) = I\\)`)}</li>
                <li>\\(EFG = GEF\\)</li>
                <li>\\((I - FE)(I-FGE) = I\\) </li></ol></a></div></article>`;
});
export {
  Page as default,
  load
};
