import { c as create_ssr_component, d as subscribe, e as escape, f as add_attribute, r as add_classes } from './index-450bbd42.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from './stores2-c9b26d6a.js';
import { T as TeX } from './constants-e3dde4f2.js';
import { p as page } from './stores-2cecc6a9.js';
import './index3-18f69db9.js';

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
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""}
    <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1>
        <section><ul><li>If \\(${escape(TeX.vec("n_1"))}\\) and \\(${escape(TeX.vec("n_2"))}\\) are normals to the planes and \\(\\theta\\) be the angle between the planes, then ${escape(`\\[\\cos\\theta = \\Bigg|\\frac{\\vec{n_1}\\cdot\\vec{n_2}}{|\\vec{n_1}||\\vec{n_2}|}\\Bigg|\\]`)}</li></ul></section>
        
        
        
        </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-48f21f35.js.map
