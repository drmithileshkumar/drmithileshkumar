import { s as subscribe } from "../../../../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, j as add_classes, f as add_attribute } from "../../../../../../../chunks/ssr.js";
import { c as currentSlide, s as slideCounter, a as selectedSection, b as selectedChapter, p as presentationMode, d as presentation } from "../../../../../../../chunks/stores4.js";
/* empty css                                                                 */
/* empty css                                                                */
import { p as page } from "../../../../../../../chunks/stores.js";
const css = {
  code: "p.svelte-1m6zy9y{text-indent:2em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentSlide;
  let $$unsubscribe_slideCounter;
  let $selectedSection, $$unsubscribe_selectedSection;
  let $$unsubscribe_selectedChapter;
  let $page, $$unsubscribe_page;
  let $presentationMode, $$unsubscribe_presentationMode;
  let $presentation, $$unsubscribe_presentation;
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => value);
  $$unsubscribe_slideCounter = subscribe(slideCounter, (value) => value);
  $$unsubscribe_selectedSection = subscribe(selectedSection, (value) => $selectedSection = value);
  $$unsubscribe_selectedChapter = subscribe(selectedChapter, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_presentation = subscribe(presentation, (value) => $presentation = value);
  $$result.css.add(css);
  $$unsubscribe_currentSlide();
  $$unsubscribe_slideCounter();
  $$unsubscribe_selectedSection();
  $$unsubscribe_selectedChapter();
  $$unsubscribe_page();
  $$unsubscribe_presentationMode();
  $$unsubscribe_presentation();
  return `${$$result.head += `<!-- HEAD_svelte-ho89p8_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description" content="Power set"><!-- HEAD_svelte-ho89p8_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section data-svelte-h="svelte-1s82o6u"> <div class="definition"><p class="svelte-1m6zy9y">A power set of a set \\(A\\) is collection of all subsets of \\(A\\). It is denoted by \\(P(A)\\).</p> <ul><li>If \\(A\\) is a set with \\(n(A) = m\\), then \\(n(P(A)) = 2^m\\).</li></ul></div></section> <section><h3 class="examples" data-svelte-h="svelte-1i75whp">Examples</h3> <ul><li>Let ${escape(`\\(A = \\{1, 2\\}\\)`)}. The power set of \\(A\\) is ${escape(`\\[P(A) = \\{\\phi, \\{1\\}, \\{2\\}, \\{1, 2\\}\\}\\]`)}</li> <li>The power set of empty set is a set containing empty set. ${escape(`\\[P(\\phi) = \\{\\phi\\}\\]`)}</li></ul></section> </article>`;
});
export {
  Page as default
};
