import { a as subscribe } from "../../../../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, h as add_attribute, k as add_classes } from "../../../../../../../chunks/ssr2.js";
import { c as currentSlide, s as slideCounter, a as selectedSection, b as selectedChapter, p as presentationMode, d as presentation } from "../../../../../../../chunks/stores4.js";
/* empty css                                                                 */
/* empty css                                                                */
import { T as TeX } from "../../../../../../../chunks/constants.js";
import { p as page } from "../../../../../../../chunks/stores3.js";
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
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section data-svelte-h="svelte-dukejf"><ul><li><strong>Column matrix</strong>: A matrix is said to be a <em>column matrix</em> if it has only one column.</li> <li><strong>Row matrix</strong>: A matrix is said to be a <em>row matrix</em> if it has only one row.</li> <li><strong>Square matrix</strong>: A matrix is said to be a <em>square matrix</em> if it has same number of rows and columns.</li> <li><strong>Diagonal matrix</strong>: A square matrix is said to be a <em>diagonal matrix</em> if all its non-diagonal elements are zero.</li> <li><strong>Scalar matrix</strong>: A diagonal matrix is said to be a <em>scalar matrix</em> if its diagonal elements are equal.</li> <li><strong>Identity matrix</strong>: A square matrix is said to be a <em>identity matrix</em> if its diagonal elements are equal to 1.</li> <li><strong>Zero matrix</strong>: A matrix is said to be a <em>zero matrix</em> if all its elements are zero.</li></ul></section> <section><h2 data-svelte-h="svelte-kivurd">Equality of matrices</h2> <p data-svelte-h="svelte-1got49a">Two matrices \\(A\\) and \\(B\\) are said to be equal if</p> <ol><li data-svelte-h="svelte-urcc64">they are of the same order</li> <li>each element of \\(A\\) is equal to the corresponding elements of \\(B\\), that is \\(${escape(TeX.sub("a", "ij"))} = ${escape(TeX.sub("b", "ij"))}\\) for all \\(i\\) and \\(j\\).</li></ol></section>  </article>`;
});
export {
  Page as default
};
