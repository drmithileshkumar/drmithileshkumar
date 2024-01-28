import { c as create_ssr_component, b as subscribe, e as escape, l as add_attribute, t as add_classes } from './ssr-GucKmJ_k.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, p as presentationMode, a as presentation } from './stores4-ZnNac0wf.js';
import { p as page } from './stores-LtksOdo1.js';
import './index2-yB1Itf2W.js';
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
  return `${$$result.head += `<!-- HEAD_svelte-fc07ip_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-fc07ip_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section data-svelte-h="svelte-8391xz"><ul><li>The <em>composition</em> of functions \\(f:A\\to B\\) and \\(g:B\\to C\\) is the function \\(gof:A\\to C\\) given by \\(\\forall x\\in A~~gof(x) = g(f(x))\\)</li> <li>A function \\(f:X\\to Y\\) is <em>invertible</em> if \\(\\exists ~ g:Y\\to X\\) such that \\(gof = I_X\\) and \\(fog = I_Y\\)</li> <li>A function \\(f:X\\to Y\\) is invertible if and only if \\(f\\) is one-one and onto.</li> <li>Given a finite set \\(X\\), a function \\(f:X\\to X\\) is one-one (respectively onto) if and only if \\(f\\) is onto (respectively one-one). This is the characteristic property of a finite set. This is not true for infinite set.</li></ul></section>  </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Dqe52sN4.js.map
