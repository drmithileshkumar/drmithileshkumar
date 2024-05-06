import { a as subscribe } from './utils-DH7689cv.js';
import { c as create_ssr_component, e as escape, h as add_attribute, n as add_classes } from './ssr-Cv_bEuJL.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, p as presentationMode, a as presentation } from './stores3-CTOyxJGl.js';
import { T as TeX } from './constants-DrqH0LK4.js';
import { p as page } from './stores-CD1QeJjc.js';
import './index2-B3zlhmO5.js';
import './client-CjdeEz1m.js';
import './exports-DuWZopOC.js';

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
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section><ul><li data-svelte-h="svelte-1yr2fxu">The region containing all the solutions of an inequality is called the <em>solution region</em>.</li> <li data-svelte-h="svelte-1ofuqbl">In order to identify the half plane represented by an inequality, it is just sufficient to take any point \\((a, b)\\) ( not online ) and check whether it satisfies the inequality or not. If it satisfies, then the inequality represents the half plane and shade the region which contains the point, otherwise, the inequality represents that half plane which does not contain the point within it. For convenience, the point \\((0, 0)\\) is preferred.</li> <li data-svelte-h="svelte-1l7vn8r">If an inequality is of type \\(ax + by \\geq c\\) or \\( ax + by \\leq c\\), then the points on the line \\(ax + by = c\\) are also included in the solution region. So draw a dark line in the solution region.</li> <li>If an inequality is of type \\(ax + by ${escape(TeX.more)} c\\) or \\( ax + by ${escape(TeX.less)} c\\), then the points on the line \\(ax + by = c\\) are not included in the solution region. So draw a broken or dotted line in the solution region.</li></ul></section>  </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DSE8gBSG.js.map
