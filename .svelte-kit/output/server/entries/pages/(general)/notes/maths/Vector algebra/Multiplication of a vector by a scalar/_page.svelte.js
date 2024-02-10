import { c as create_ssr_component, s as subscribe, e as escape, i as add_attribute, j as add_classes } from "../../../../../../../chunks/ssr.js";
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
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section><p data-svelte-h="svelte-19wzl4m">The multiplication of a given vector by a scalar \\(\\lambda\\), changes the magnitude of the vector by the multiple \\(|\\lambda|\\) and keeps the direction same (or make it opposite) according as the value of \\(\\lambda\\) is positive (or negative).</p> <ul><li>For a given vector \\(a\\), the vector \\(${escape(TeX.hat("a"))}=${escape(TeX.dfrac("a", "|a|"))}\\) gives the unit vector in the direction of \\(a\\).</li> <li>The position vector of a point R dividing a line segment joining the points P and Q  whose position vectors are \\(a\\) and \\(b\\) respectively, in the ratio \\(m:n\\)
                    <ol><li>internally, is given by \\(${escape(TeX.dfrac("na + mb", "m+n"))}\\)</li> <li>externally, is given by \\(${escape(TeX.dfrac("mb - na", "m-n"))}\\)</li></ol></li></ul></section>  </article>`;
});
export {
  Page as default
};
