import { c as create_ssr_component, a as subscribe, e as escape, i as add_attribute, w as add_classes } from "../../../../../../../chunks/index3.js";
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, p as presentationMode, a as presentation } from "../../../../../../../chunks/stores2.js";
/* empty css                                                                  *//* empty css                                                                 */import { T as TeX } from "../../../../../../../chunks/constants.js";
import { p as page } from "../../../../../../../chunks/stores.js";
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
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""}
    <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1>
        <section><p>When the plane cuts the nappe (other than the vertex) of the cone, we have the following situations;
            </p>
            <ul><li>When \\(\\beta = 90^\\circ\\), the section is a circle
                 </li>
                 <li>When \\(\\alpha ${escape(TeX.less)} \\beta ${escape(TeX.less)} 90^\\circ\\), the section is an ellipse
                 </li>
                 <li>When \\(\\beta = \\alpha\\), the section is a parabola
                 </li>
                 <li>When \\(0\\leq \\beta ${escape(TeX.less)} 90^\\circ\\), the section is a hyperbola
                 </li>
                 <li>When \\(\\beta = 90^\\circ\\), the section is a circle
                 </li></ul>
            <p>When the plane cuts the vertex of the cone, we have the following situations;
            </p>
            <ul><li>When \\(\\alpha ${escape(TeX.less)} \\beta \\leq 90^\\circ\\), the section is a point
                 </li>
                 <li>When \\(\\beta = \\alpha\\), the plane contains a generator of the cone and the section is a straight line
                 </li>
                 <li>When \\(0\\leq \\beta ${escape(TeX.less)} \\alpha\\), the section is a pair of intersecting straight lines. It is the degenerated case of a hyperbola.
                 </li>
                 <li>When \\(\\beta = 90^\\circ\\), the section is a circle
                 </li></ul></section>
        
        
        
        </article>`;
});
export {
  Page as default
};
