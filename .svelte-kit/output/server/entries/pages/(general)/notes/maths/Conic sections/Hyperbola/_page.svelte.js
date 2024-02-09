import { c as create_ssr_component, s as subscribe, e as escape, h as add_attribute, k as add_classes } from "../../../../../../../chunks/ssr.js";
import { c as currentSlide, s as slideCounter, a as selectedSection, b as selectedChapter, p as presentationMode, d as presentation } from "../../../../../../../chunks/stores3.js";
/* empty css                                                                 */
/* empty css                                                                */
import { T as TeX } from "../../../../../../../chunks/constants.js";
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
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section><ul><li data-svelte-h="svelte-m9wgj4">A hyperbola is the set of all points in a plane, the difference of whose distances from two fixed points in the plane is a constant.</li> <li>The equation of a hyperbola with foci on the \\(x\\)-axis is \\[${escape(TeX.frac("x^2", "a^2"))} - ${escape(TeX.frac("y^2", "b^2"))} = 1\\]</li> <li data-svelte-h="svelte-11972fe">Latus rectum of a hyperbola is a line segment perpendicular to the transverse axis through any of the foci and whose end points lie on the hyperbola.</li> <li>Length of the latus rectum of the hyperbola \\(${escape(TeX.dfrac("x^2", "a^2"))} - ${escape(TeX.dfrac("y^2", "b^2"))} = 1\\) is \\(${escape(TeX.dfrac("2b^2", "a"))}\\).</li> <li data-svelte-h="svelte-i9zbux">The eccentricity of a hyperbola is the ratio between the distances from the center of the hyperbola to one of the foci and to one of the vertices of the hyperbola.</li></ul></section>  </article>`;
});
export {
  Page as default
};
