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
        <section><ul><li>Equation of a line passing through \\(${escape(TeX.vec("a"))}\\) parallel to another vector \\(${escape(TeX.vec("b"))}\\) is given by \\[${escape(TeX.vec("r"))} = ${escape(TeX.vec("a"))} + \\lambda ${escape(TeX.vec("b"))}\\]
                </li>
                <li>Direction cosines are \\(${escape(TeX.dfrac("b_x", "|b|"))}, ${escape(TeX.dfrac("b_y", "|b|"))}, ${escape(TeX.dfrac("b_z", "|b|"))}\\)
                </li>
                <li>Cartesian equation of the line is \\[${escape(TeX.dfrac("x - x_1", "b_x"))} = ${escape(TeX.dfrac("y - y_1", "b_y"))} = ${escape(TeX.dfrac("z - z_1", "b_z"))}\\]
                </li>
                <li>Equation of line passing through two points \\(${escape(TeX.vec("a"))}\\) and \\(${escape(TeX.vec("b"))}\\) is \\[${escape(TeX.vec("r"))} = ${escape(TeX.vec("a"))} + \\lambda (${escape(TeX.vec("b"))} - ${escape(TeX.vec("a"))})\\]
                </li>
                <li>Cartesian equation of the line is \\[${escape(TeX.dfrac("x - x_1", "x_2-x_1"))} = ${escape(TeX.dfrac("y - y_1", "y_2-y_1"))} = ${escape(TeX.dfrac("z - z_1", "z_2-z_1"))}\\]
                </li></ul></section>
        
        
        
        </article>`;
});
export {
  Page as default
};
