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
  return `${$$result.head += `<!-- HEAD_svelte-fc07ip_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-fc07ip_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section data-svelte-h="svelte-1o86q6w"><div class="definition"><p><strong>Relation</strong> A relation \\(R\\) from a set \\(A\\) to a set \\(B\\) is a subset of the cartesian product \\(A\\times B\\) obtained by describing a relationship between the first element \\(x\\) and the second element \\(y\\) of the ordered pairs in \\(A\\times B\\).</p></div> <ul><li>The <strong>image</strong> of an element \\(x\\) under a relation \\(R\\) is given by \\(y\\), where \\((x,y)\\in R\\).</li> <li>The <strong>domain</strong> of \\(R\\) is the set of all first elements of the ordered pair in a relation \\(R\\).</li> <li>The <strong>range</strong> of the relation \\(R\\) is the set of all second elements of the ordered pairs in a relation \\(R\\).</li></ul></section>  </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-gH1hN1ld.js.map
