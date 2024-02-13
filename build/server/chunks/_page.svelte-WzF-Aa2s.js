import { a as subscribe } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, e as escape, n as add_classes, h as add_attribute } from './ssr-HSn4Y_Gl.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, p as presentationMode, a as presentation } from './stores4-uhob_-DC.js';
import { T as TeX } from './constants-TOZ-JGRv.js';
import { p as page } from './stores-J1hWMOsb.js';
import './index2-z1g76_ny.js';
import './client-_MkdHwD5.js';
import './exports-mq_1S73-.js';

const css = {
  code: "p.svelte-1m6zy9y{text-indent:2em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentSlide;
  let $$unsubscribe_slideCounter;
  let $selectedSection, $$unsubscribe_selectedSection;
  let $$unsubscribe_selectedChapter;
  let $page, $$unsubscribe_page;
  let $presentationMode, $$unsubscribe_presentationMode;
  let $presentation, $$unsubscribe_presentation;
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => value);
  $$unsubscribe_slideCounter = subscribe(slideCounter, (value) => value);
  $$unsubscribe_selectedSection = subscribe(selectedSection, (value) => $selectedSection = value);
  $$unsubscribe_selectedChapter = subscribe(selectedChapter, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_presentation = subscribe(presentation, (value) => $presentation = value);
  $$result.css.add(css);
  $$unsubscribe_currentSlide();
  $$unsubscribe_slideCounter();
  $$unsubscribe_selectedSection();
  $$unsubscribe_selectedChapter();
  $$unsubscribe_page();
  $$unsubscribe_presentationMode();
  $$unsubscribe_presentation();
  return `${$$result.head += `<!-- HEAD_svelte-ho89p8_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description" content="Power set"><!-- HEAD_svelte-ho89p8_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section data-svelte-h="svelte-1h86h3s"><p class="svelte-1m6zy9y">The concept of universal set is contextual.</p> <div class="definition"><p class="svelte-1m6zy9y">Universal set contains all elements. Any other set is a subset of the universal set. The universal set is usually denoted by \\(U\\).</p></div></section> <section><h3 class="examples" data-svelte-h="svelte-1i75whp">Examples</h3> <ul><li>If we are studying a system of numbers, then we can <em data-svelte-h="svelte-7jl92f">choose</em> the set of natural numbers ${escape(TeX.N)} as the universal set.</li> <li data-svelte-h="svelte-18y3758">We are studying about students of a class, then the set of all students in the class should be chosen as the universal set.</li></ul></section> </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-WzF-Aa2s.js.map
