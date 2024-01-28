import { c as create_ssr_component, s as subscribe, e as escape, k as add_attribute, m as add_classes } from "../../../../../../../chunks/ssr.js";
import { c as currentSlide, s as slideCounter, a as selectedSection, b as selectedChapter, p as presentationMode, d as presentation } from "../../../../../../../chunks/stores4.js";
/* empty css                                                                 */
/* empty css                                                                */
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
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section data-svelte-h="svelte-1eh751b"><p>A linear programming problem is one that is concerned with finding the optimal value (maximum or minimum) of a linear function of several variables (called <strong>objective function</strong> ) subject to the conditions that the variables are non-negative and satisfy a set of linear inequalities (called linear <strong>constraints</strong> ). Variables are sometimes called <strong>decision variables</strong> and are <strong>non-negative</strong>.</p> <p>The common region determined by all the constraints including the non-negative constraints \\(x\\geq 0, y\\geq 0\\) of a linear programming problem is called the <strong>feasible region</strong> (or <strong>solution region</strong> ) for the problem.</p> <p>Points within and on the boundary of the feasible region represent <strong>feasible solutions</strong> of the constraints. Any point outside the feasible region is an <strong>infeasible solution</strong>.</p> <p>Any point in the feasible region that gives the optimal value (maximum or minimum) of the objective is called an <strong>optimal solution</strong>.</p> <p class="theorem"><strong>Theorem 1:</strong> Let \\(R\\) be the feasible region (convex polygon) for a linear programming problem and let \\(Z = ax + by\\) be the objective function. When \\(Z\\) has an optimal value (maximum or minimum), where the variables \\(x\\) and \\(y\\) are subject to constraints described by linear inequalities, this optimal value must occur at a corner point (vertex) of the feasible region.</p> <p class="theorem"><strong>Theorem 2:</strong> Let \\(R\\) be the feasible region (convex polygon) for a linear programming problem and let \\(Z = ax + by\\) be the objective function. If \\(R\\) is <strong>bounded</strong>, then the objective function \\(Z\\) has bothe a <strong>maximum</strong> and a <strong>minimum</strong> value on \\(R\\) and each of these occurs at a corner point (vertex) of \\(R\\).</p> <p>If the feasible region is unbounded, then a maximum or a minimum may not exist. However, if it exists, it must occur at a corner point of \\(R\\).</p></section>  </article>`;
});
export {
  Page as default
};
