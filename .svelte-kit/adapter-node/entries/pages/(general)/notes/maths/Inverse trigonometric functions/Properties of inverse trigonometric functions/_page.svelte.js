import { c as create_ssr_component, a as subscribe, e as escape, i as add_attribute, t as add_classes } from "../../../../../../../chunks/ssr.js";
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, p as presentationMode, a as presentation } from "../../../../../../../chunks/stores3.js";
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
  return `${$$result.head += `<!-- HEAD_svelte-fc07ip_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-fc07ip_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section><table><tr><td>\\(y = ${escape(TeX.asin)}x\\implies x = \\sin y\\)</td> <td>\\(x = \\sin y\\implies y = ${escape(TeX.asin)} x\\)</td></tr> <tr><td>\\(\\sin (${escape(TeX.asin)}x) = x\\)</td> <td>\\(${escape(TeX.asin)} (\\sin x) = x\\)</td></tr> <tr><td>\\(${escape(TeX.asin)}${escape(TeX.dfrac(1, "x"))} = ${escape(TeX.acosec)}x\\)</td> <td>\\(${escape(TeX.acos)}(-x) = \\pi - ${escape(TeX.acos)}x\\)</td></tr> <tr><td>\\(${escape(TeX.acos)}${escape(TeX.dfrac(1, "x"))} = ${escape(TeX.asec)}x\\)</td> <td>\\(${escape(TeX.asec)}(-x) = \\pi - ${escape(TeX.asec)}x\\)</td></tr> <tr><td>\\(${escape(TeX.atan)}${escape(TeX.dfrac(1, "x"))} = ${escape(TeX.acot)}x\\)</td> <td>\\(${escape(TeX.acot)}(-x) = \\pi - ${escape(TeX.acot)}x\\)</td></tr> <tr><td>\\(${escape(TeX.asin)}(-x) = -${escape(TeX.asin)}x\\)</td> <td>\\(${escape(TeX.atan)}(-x) = -${escape(TeX.atan)}x\\)</td></tr> <tr><td>\\(${escape(TeX.atan)}x + ${escape(TeX.acot)}x = ${escape(TeX.piby2)}\\)</td> <td>\\(${escape(TeX.acosec)}(-x) = -${escape(TeX.acosec)}x\\)</td></tr> <tr><td>\\(${escape(TeX.asin)}x + ${escape(TeX.acos)}x = ${escape(TeX.piby2)}\\)</td> <td>\\(${escape(TeX.acosec)}x + ${escape(TeX.asec)}x = ${escape(TeX.piby2)}\\)</td></tr> <tr><td>\\(${escape(TeX.atan)}x + ${escape(TeX.atan)}y = ${escape(TeX.atan)}${escape(TeX.dfrac("x + y", "1-xy"))} \\)</td> <td>\\(2${escape(TeX.atan)}x = ${escape(TeX.atan)}${escape(TeX.dfrac("2x", "1-x^2"))}\\)</td></tr> <tr><td>\\(${escape(TeX.atan)}x - ${escape(TeX.atan)}y = ${escape(TeX.atan)}${escape(TeX.dfrac("x - y", "1+xy"))} \\)</td> <td>\\(2${escape(TeX.atan)}x = ${escape(TeX.asin)}${escape(TeX.dfrac("2x", "1+x^2"))} = ${escape(TeX.acos)}${escape(TeX.dfrac("1-x^2", "1+x^2"))}\\)</td></tr></table></section>  </article>`;
});
export {
  Page as default
};
