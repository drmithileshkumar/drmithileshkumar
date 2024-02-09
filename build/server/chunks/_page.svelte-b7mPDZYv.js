import { c as create_ssr_component, b as subscribe, e as escape, l as add_attribute, u as add_classes } from './ssr-QYhyCQFk.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, p as presentationMode, a as presentation } from './stores3-N3vs8YOS.js';
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
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section><ul><li>Minor of an element \\(${escape(TeX.sub("a", "ij"))}\\) of the determinant of matrix \\(A\\) is the determinant obtained by deleting \\(i\\)the row and \\(j\\)th column and denoted by \\(${escape(TeX.sub("M", "ij"))}\\).</li> <li>Cofactor of \\(${escape(TeX.sub("a", "ij"))}\\) is given by \\(${escape(TeX.sub("A", "ij"))} = ${escape(TeX.pow("(-1)", "i + j"))}${escape(TeX.sub("M", "ij"))}\\)</li> <li>For any row \\(i\\), \\(|A| = ${escape(TeX.sum("j"))}${escape(TeX.sub("a", "ij"))}${escape(TeX.sub("A", "ij"))}\\)</li> <li>For any row \\(i\\neq k\\), \\(${escape(TeX.sum("j"))}${escape(TeX.sub("a", "ij"))}${escape(TeX.sub("A", "kj"))} = 0\\)</li></ul></section>  </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-b7mPDZYv.js.map
