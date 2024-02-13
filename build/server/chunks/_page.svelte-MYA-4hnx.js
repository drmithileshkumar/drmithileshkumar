import { a as subscribe } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, e as escape, h as add_attribute, n as add_classes } from './ssr-HSn4Y_Gl.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, p as presentationMode, a as presentation } from './stores4-uhob_-DC.js';
import { T as TeX } from './constants-TOZ-JGRv.js';
import { p as page } from './stores-J1hWMOsb.js';
import './index2-z1g76_ny.js';
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
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section><ul><li><em data-svelte-h="svelte-1g2904j">Slope</em> (\\(m\\)) of a non-vertical line passing through the points \\((x_1, y_1)\\) and \\((x_2, y_2)\\) is given by \\[m = ${escape(TeX.frac("y_2 - y_1", "x_2 - x_1"))}, x_1\\neq x_2\\]</li> <li data-svelte-h="svelte-11k7ojw">If a line makes an angle \\(\\alpha\\) with the positive direction of \\(x\\)-axis, then the slope of the line is given by \\(m = \\tan \\alpha, \\alpha\\neq 90^\\circ\\)</li> <li>An acute angle (say \\(\\theta\\)) between lines \\(L_1\\) and \\(L_2\\) with slopes \\(m_1\\) and \\(m_2\\) is given by \\[\\tan\\theta = \\Big |${escape(TeX.frac("m_2-m_1", "1 + m_1m2"))}\\Big |, 1 + m_1m_2\\neq 0\\]</li></ul></section>  </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-MYA-4hnx.js.map
