import { s as subscribe } from "../../../../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, f as add_attribute, j as add_classes } from "../../../../../../../chunks/ssr.js";
import { c as currentSlide, s as slideCounter, a as selectedSection, b as selectedChapter, p as presentationMode, d as presentation } from "../../../../../../../chunks/stores4.js";
/* empty css                                                                 */
/* empty css                                                                */
import { T as TeX } from "../../../../../../../chunks/constants.js";
import { p as page } from "../../../../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentSlide;
  let $$unsubscribe_slideCounter;
  let $selectedSection, $$unsubscribe_selectedSection;
  let $selectedChapter, $$unsubscribe_selectedChapter;
  let $page, $$unsubscribe_page;
  let $presentationMode, $$unsubscribe_presentationMode;
  let $presentation, $$unsubscribe_presentation;
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => value);
  $$unsubscribe_slideCounter = subscribe(slideCounter, (value) => value);
  $$unsubscribe_selectedSection = subscribe(selectedSection, (value) => $selectedSection = value);
  $$unsubscribe_selectedChapter = subscribe(selectedChapter, (value) => $selectedChapter = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_presentation = subscribe(presentation, (value) => $presentation = value);
  $$unsubscribe_currentSlide();
  $$unsubscribe_slideCounter();
  $$unsubscribe_selectedSection();
  $$unsubscribe_selectedChapter();
  $$unsubscribe_page();
  $$unsubscribe_presentationMode();
  $$unsubscribe_presentation();
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section><h2 data-svelte-h="svelte-1pi5oiz">Differential equations with variable seperable</h2> <p>A first order-first degree differential equation is of the form \\[${escape(TeX.dydx())} = F(x,y)\\]</p> <p>If \\(F(x,y)\\) can be expressed as a product \\(g(x)h(y)\\), where, \\(g(x)\\) is a function of \\(x\\) and \\(h(y)\\) is a function of \\(y\\), then the above differential equation is said to be of variable separable type. Then we can write \\[${escape(TeX.dydx())} = h(y)\\cdot g(x)\\]</p> <p>If \\(h(y)\\neq 0\\), separating the variables we get \\[${escape(TeX.frac("1", "h(y)"))}dy = g(x)dx\\]</p> <p>Integrating both sides, we get \\[\\int ${escape(TeX.frac("1", "h(y)"))}dy = \\int g(x)dx\\]</p></section> <section><h2 data-svelte-h="svelte-ua3537">Homogeneous differential equations</h2> <p class="definition" data-svelte-h="svelte-1x5ph9y">A function \\(F(x,y)\\) is said to be <em>homogeneous function of degree n</em> if \\(F(\\lambda x, \\lambda y) = \\lambda^n F(x, y)\\) for any nonzero constant \\(\\lambda\\).</p> <p>A function \\(F(x,y)\\) is a homogeneous function of degree \\(n\\) if \\[F(x,y) = x^ng(${escape(TeX.frac("y", "x"))})~or~y^nh(${escape(TeX.frac("x", "y"))})\\]</p> <p class="definition">A differential equation of the form \\(${escape(TeX.dydx())} = F(x,y)\\) is said to be <em data-svelte-h="svelte-1ao5j6h">homogeneous</em> if \\(F(x,y)\\) is a homogeneous function of degree zero.</p> <p>To solve a homogeneous differential equation of the type \\[${escape(TeX.dydx())} = F(x,y) = g(${escape(TeX.frac("y", "x"))})\\]</p> <p data-svelte-h="svelte-se9cr1">We make the substitution \\(y = v\\cdot x\\)</p> <p>Differentiating with respect to \\(x\\), we get \\[${escape(TeX.dydx())} = v + x${escape(TeX.frac("dv", "dx"))}\\]</p> <p>Substituting the value of \\(${escape(TeX.dydx())}\\), we get ${escape(`\\[
                    \\begin{eqnarray}
                        v + x\\frac{dv}{dx} &=& g(v)\\\\
                        x\\frac{dv}{dx} = g(v) - v\\\\
                        \\implies \\int \\frac{dv}{g(v) - v} &=& \\int \\frac{1}{x}dx + C
                    \\end{eqnarray}
                    \\]`)}</p></section> <section><h2 data-svelte-h="svelte-1ef3yqp">Linear differential equations</h2> <p>A differential equation of the form \\[${escape(TeX.dydx())} + Py = Q\\] where \\(P\\) and \\(Q\\) are constants or functions of \\(x\\) only, is known as a first order linear differential equation.</p> <p>To solve the first order linear differential equation, multiply both sides of the equation by a function of \\(x\\) say \\(g(x)\\) to get \\[g(x)${escape(TeX.dydx())} + P\\cdot g(x)\\cdot y = Q\\cdot g(x)\\]</p> <p>Choose \\(g(x)\\) in such a way that RHS becomes a derivative of \\(y\\cdot g(x)\\) ${escape(`\\[
                    \\begin{eqnarray}
                    g(x)\\frac{dy}{dx} + P\\cdot g(x)y &=& \\frac{d}{dx}[y\\cdot g(x)]\\\\
                    g(x)\\frac{dy}{dx} + P\\cdot g(x)y &=& g(x)\\frac{dy}{dx} + y\\cdot g'(x)]\\\\
                    \\implies P\\cdot g(x) &=& g'(x)\\\\
                    P &=& \\frac{g'(x)}{g(x)}\\\\
                    \\implies g(x) &=& e^{\\int Pdx}
                    \\end{eqnarray}
                    \\]`)}</p> <p>The function \\(g(x) = ${escape(TeX.pow("e", "\\int Pdx"))}\\) is called <em data-svelte-h="svelte-1ih6vih">integrating factor</em> of the given differential equation.</p> <p>Substituting the value of \\(g(x)\\) in the differential equation, we get ${escape(`\\[
                    \\begin{eqnarray}
                    e^{\\int Pdx}\\frac{dy}{dx} + Pe^{\\int Pdx}y &=& Q\\cdot e^{\\int Pdx}\\\\
                    \\frac{d}{dx}\\Big(ye^{\\int Pdx}\\Big) &=& Qe^{\\int Pdx}\\\\
                    y\\cdot e^{\\int Pdx} &=& \\int \\Big(Q\\cdot e^{\\int Pdx}\\Big)dx\\\\
                    y &=& e^{-\\int Pdx}\\cdot \\int \\Big(Q\\cdot e^{\\int Pdx}\\Big) + C
                    \\end{eqnarray}
                    \\]`)}</p></section>  </article>`;
});
export {
  Page as default
};
