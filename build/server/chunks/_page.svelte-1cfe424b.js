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
        <section><h2>Scalar Product</h2>
            <ul><li>The scalar product of two vectors \\(a\\) and \\(b\\) having angle \\(\\theta\\) between them is defined as \\[a\\cdot b = |a||b|\\cos\\theta\\]
                 </li></ul></section>
        <section><h2>Cross Product</h2>
            <p>If \\(\\theta\\) is the angle between two vectors \\(a\\) and \\(b\\), then their cross product is given as \\[a\\times b = |a||b|\\sin\\theta ${escape(TeX.hat("n"))}\\] where \\(${escape(TeX.hat("n"))}\\) is a unit vector perpendicular to the plane containing \\(a\\) and \\(b\\). Such that, \\(a, b, ${escape(TeX.hat("n"))}\\) form right handed system of coordinate axes.
            </p>
            <ul><li>${escape(`\\[
                        \\vec{a}\\times\\vec{b} = \\left |\\begin{matrix}
                        \\hat{i} & \\hat{j} & \\hat{k}\\\\
                        a_1 & b_1 & c_1\\\\
                        a_2 & b_2 & c_2
                        \\end{matrix}\\right |
                        \\]`)}</li></ul></section>
        
        
        </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-1cfe424b.js.map
