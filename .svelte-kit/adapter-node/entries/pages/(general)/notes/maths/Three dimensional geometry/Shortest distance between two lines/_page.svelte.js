import { s as subscribe } from "../../../../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, f as add_attribute, k as add_classes } from "../../../../../../../chunks/ssr.js";
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
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section><ul><li><strong data-svelte-h="svelte-12tnrvg">Distance between two skew lines</strong>:  Let \\(${escape(TeX.vec("r"))} = ${escape(TeX.vec("a"))}_1 + \\lambda ${escape(TeX.vec("b"))}_1\\) and \\(${escape(TeX.vec("r"))} = ${escape(TeX.vec("a"))}_2 + \\mu ${escape(TeX.vec("b"))}_2\\) be two lines. The magnitude of the shortest distance vector is equal to the projection of  \\(\\Delta${escape(TeX.vec("a"))} = ${escape(TeX.vec("a"))}_2 -  ${escape(TeX.vec("a"))}_1\\) along the direction of the shortest vector. The shortest vector will be perpendicular to both the lines. Therefore, the direction of the shortest vector is given by \\(${escape(TeX.vec("b"))} = ${escape(TeX.vec("b"))}_1 \\times  ${escape(TeX.vec("b"))}_2\\). Hence, the length of the shortest vector will \\[d = \\Big |${escape(TeX.frac(TeX.vec("b") + "\\cdot\\Delta" + TeX.vec("a"), "|" + TeX.vec("b") + "|"))}\\Big |\\]</li></ul></section>  </article>`;
});
export {
  Page as default
};
