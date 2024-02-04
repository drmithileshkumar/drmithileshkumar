import { c as create_ssr_component, b as subscribe, e as escape, l as add_attribute, u as add_classes } from './ssr-QYhyCQFk.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, p as presentationMode, a as presentation } from './stores4-N3vs8YOS.js';
import { T as TeX } from './constants-TOZ-JGRv.js';
import { p as page } from './stores-LjwRQ76V.js';
import './index2-2iq6SjbL.js';
import './client-_MkdHwD5.js';
import './exports-mq_1S73-.js';

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
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section><table><tr><td>\\(\\int ${escape(TeX.dfrac(1, "x^2-a^2"))}dx = ${escape(TeX.dfrac(1, "2a"))}\\log |${escape(TeX.dfrac("x-a", "x+a"))}| + C\\)</td> <td>\\(\\int ${escape(TeX.dfrac(1, "a^2-x^2"))}dx = ${escape(TeX.dfrac(1, "2a"))}\\log |${escape(TeX.dfrac("a+x", "a-x"))}| + C\\)</td></tr> <tr><td>\\(\\int ${escape(TeX.dfrac(1, "x^2+a^2"))}dx = ${escape(TeX.dfrac(1, "a"))}${escape(TeX.atan)}${escape(TeX.dfrac("x", "a"))} + C\\)</td> <td>\\(\\int ${escape(TeX.dfrac(1, TeX.sqrt("x^2-a^2")))}dx = \\log |x+${escape(TeX.sqrt("x^2-a^2"))}| + C\\)</td></tr> <tr><td>\\(\\int ${escape(TeX.dfrac(1, TeX.sqrt("a^2-x^2")))}dx = ${escape(TeX.asin)}${escape(TeX.dfrac("x", "a"))} + C\\)</td> <td>\\(\\int ${escape(TeX.dfrac(1, TeX.sqrt("x^2+a^2")))}dx = \\log |x+${escape(TeX.sqrt("x^2+a^2"))}| + C\\)</td></tr></table></section>  </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-7szIpC_B.js.map
