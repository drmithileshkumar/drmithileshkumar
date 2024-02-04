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
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section><ul><li data-svelte-h="svelte-1g69mna">\\(A\\) is a symmetric matrix if \\(A^T = A\\)</li> <li data-svelte-h="svelte-5l242l">\\(A\\) is a skew symmetric matrix if \\(A^T = -A\\)</li> <li data-svelte-h="svelte-w0lgi3">For any square matrix \\(A\\) with real number entries, \\(A+A^T\\) is a symmetric matrix and \\(A-A^T\\) is a skew symmetric matrix.</li> <li>Any square matrix can be expressed as the sum of a symmetric and a skew symmetric matrix. \\[A = ${escape(TeX.frac(1, 2))}(A + A^T) + ${escape(TeX.frac(1, 2))}(A - A^T)\\]</li></ul></section>  </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-y3oP2H72.js.map
