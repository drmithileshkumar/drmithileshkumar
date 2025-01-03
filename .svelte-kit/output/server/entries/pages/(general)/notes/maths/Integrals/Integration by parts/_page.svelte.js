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
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section><ul><li data-svelte-h="svelte-192kjkv"><strong>Integration by parts:</strong> \\(\\int uv dx = u\\int vdx - \\int \\Big[u&#39;\\int vdx\\Big]dx\\)</li> <li data-svelte-h="svelte-1t89evy">\\(\\int e^x[f(x) + f&#39;(x)]dx = e^xf(x) + C\\)</li> <li>Some special integrals
                    <ol><li>\\(\\int ${escape(TeX.sqrt("x^2-a^2"))} dx = ${escape(TeX.dfrac("x", 2))}${escape(TeX.sqrt("x^2-a^2"))} - ${escape(TeX.dfrac("a^2", 2))}\\log|x + ${escape(TeX.sqrt("x^2 - a^2"))}| + C\\)</li> <li style="padding-top: 0.5em;">\\(\\int ${escape(TeX.sqrt("x^2+a^2"))} dx = ${escape(TeX.dfrac("x", 2))}${escape(TeX.sqrt("x^2+a^2"))} + ${escape(TeX.dfrac("a^2", 2))}\\log|x + ${escape(TeX.sqrt("x^2 + a^2"))}| + C\\)</li> <li style="padding-top: 0.5em;">\\(\\int ${escape(TeX.sqrt("a^2-x^2"))} dx = ${escape(TeX.dfrac("x", 2))}${escape(TeX.sqrt("a^2-x^2"))} + ${escape(TeX.asin)}${escape(TeX.dfrac("x", "a"))} + C\\)</li></ol></li></ul></section>  </article>`;
});
export {
  Page as default
};
