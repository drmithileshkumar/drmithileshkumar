import { a as subscribe } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, e as escape, a as add_attribute, n as add_classes } from './ssr2-q3O0l93f.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, p as presentationMode, a as presentation } from './stores4-DLB_GG7W.js';
import { T as TeX } from './constants-DrqH0LK4.js';
import { p as page } from './stores3-BrNJmxTp.js';
import './index2-BZnI6xu7.js';
import './client-k3u4ChD_.js';
import './exports-kR70XCWV.js';

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
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section><div class="definition"><p>If \\(A\\) is a square matrix of order \\(m\\), and if there exists another square matrix \\(B\\) of the same order \\(m\\), such that \\(AB = BA = I\\), then \\(B\\) is called the <em data-svelte-h="svelte-1cdz84a">inverse</em> matrix of \\(A\\) and it is denoted by \\(${escape(TeX.inv("A"))}\\).</p></div> <ul><li data-svelte-h="svelte-p4gzvr">Inverse of a square matrix, if it exists, is unique.</li> <li>If \\(A\\) and \\(B\\) are invertible matrices of the same order, then \\(${escape(TeX.inv("AB"))} = ${escape(TeX.inv("B"))}${escape(TeX.inv("A"))}\\).</li></ul></section>   </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D1UPj0Q3.js.map
