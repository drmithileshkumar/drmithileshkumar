import { c as create_ssr_component, s as subscribe, e as escape, k as add_attribute, o as add_classes } from "../../../../../../../chunks/ssr.js";
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
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section><ul><li><strong data-svelte-h="svelte-1wff3gv">Probability:</strong> Number \\(P(\\omega_i)\\) associated with sample point \\(\\omega_i\\) such that 
                    <ol><li data-svelte-h="svelte-3i75b0">\\(0\\leq P(\\omega_i)\\leq 1\\)</li> <li>\\(${escape(TeX.sum("\\omega_i\\in S"))}P(\\omega_i) = 1\\)</li> <li>\\(P(A) = ${escape(TeX.sum("\\omega_i\\in A"))}P(\\omega_i)\\)</li></ol>
                    The number \\(P(\\omega_i)\\) is called the <em data-svelte-h="svelte-6ctc7b">probability</em> of the outcome \\(\\omega_i\\).</li> <li data-svelte-h="svelte-wtz47k"><strong>Equally likely outcomes:</strong> All outcomes with equal probability</li> <li><strong data-svelte-h="svelte-1jgf9v">Probability of an event:</strong> For a finite sample space with equally likely outcomes, Probability of an event \\(P(A) = ${escape(TeX.dfrac("n(A)", "n(S)"))}\\), where \\(n(A)\\) = number of elements in the set \\(A\\), \\(n(S)\\) = number of elements in the set \\(S\\).</li> <li data-svelte-h="svelte-v0o8ds">If \\(A\\) and \\(B\\) are any two events, then \\(P(A~or~B) = P(A) + P(B) - P(A~and~B)\\), equivalently, \\(P(A\\cup B) = P(A) + P(B) - P(A\\cap B)\\)</li> <li data-svelte-h="svelte-1n9ml7n">If \\(A\\) and \\(B\\) are mutually exclusive, then \\(P(A\\cup B) = P(A) + P(B)\\)</li> <li data-svelte-h="svelte-6ycc5v">If \\(A\\) is any event, then \\(P(not~A) = 1 - P(A)\\)</li></ul></section>  </article>`;
});
export {
  Page as default
};
