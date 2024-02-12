import { a as subscribe } from './utils-yAS0eczJ.js';
import { c as create_ssr_component, e as escape, d as add_attribute, n as add_classes } from './ssr-APL1hDOv.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from './stores4-oqF8qUAY.js';
import { T as TeX } from './constants-TOZ-JGRv.js';
import { p as page } from './stores-nClpd4CO.js';
import './index2-NBMbjtFx.js';
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
  return `${$$result.head += `<!-- HEAD_svelte-fc07ip_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-fc07ip_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section><table><thead data-svelte-h="svelte-82d9ql"><th>Functions</th> <th>Domain</th> <th>Range (Principal Value Branches)</th></thead> <tr><td>\\(y = ${escape(TeX.asin)} x\\)</td> <td data-svelte-h="svelte-10cntog">\\([-1, 1]\\)</td> <td>\\([${escape(TeX.frac("-\\pi", 2))}, ${escape(TeX.frac("\\pi", 2))}]\\)</td></tr> <tr><td>\\(y = ${escape(TeX.acos)} x\\)</td> <td data-svelte-h="svelte-10cntog">\\([-1, 1]\\)</td> <td data-svelte-h="svelte-9xzobs">\\([0, \\pi]\\)</td></tr> <tr><td>\\(y = ${escape(TeX.atan)} x\\)</td> <td>${escape(TeX.R)}</td> <td>\\([${escape(TeX.frac("-\\pi", 2))}, ${escape(TeX.frac("\\pi", 2))}]\\)</td></tr> <tr><td>\\(y = ${escape(TeX.acot)} x\\)</td> <td>${escape(TeX.R)}</td> <td data-svelte-h="svelte-9xzobs">\\([0, \\pi]\\)</td></tr> <tr><td>\\(y = ${escape(TeX.asec)} x\\)</td> <td>${escape(TeX.R)}\\(-(-1,1)\\)</td> <td>\\([0, \\pi] - ${escape(TeX.Set(TeX.piby2))}\\)</td></tr> <tr><td>\\(y = ${escape(TeX.acosec)} x\\)</td> <td>${escape(TeX.R)}\\(-(-1,1)\\)</td> <td>\\([${escape(TeX.mpiby2)}, ${escape(TeX.piby2)}] - ${escape(TeX.Set(0))}\\)</td></tr></table></section>  </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2GH1DHj0.js.map
