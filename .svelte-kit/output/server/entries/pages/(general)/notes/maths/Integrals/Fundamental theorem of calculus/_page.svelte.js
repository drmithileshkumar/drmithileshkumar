import { s as subscribe } from "../../../../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, f as add_attribute, k as add_classes } from "../../../../../../../chunks/ssr.js";
import { c as currentSlide, s as slideCounter, a as selectedSection, b as selectedChapter, p as presentationMode, d as presentation } from "../../../../../../../chunks/stores3.js";
/* empty css                                                                 */
/* empty css                                                                */
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
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section data-svelte-h="svelte-gu4khj"><div class="definition"><p>The area function is given by \\[A(x) = \\int_a^x f(x)dx\\]</p></div> <div class="theorem"><p><strong>First fundamental theorem of integral calculus:</strong> Let \\(f\\) be a continuous function on the closed interval \\([a, b]\\) and let \\(A(x)\\) be the area function. Then \\[A&#39;(x) = f(x)\\], for all \\(x\\in [a,b]\\)</p></div> <div class="theor"><p><strong>Second fundamental theorem of integral calculus:</strong> Let \\(f\\) be continuous function defined on the closed interval \\([a, b]\\) and \\(F\\) be an anti derivative of \\(f\\). Then \\[\\int_a^bf(x)dx = [F(x)]_a^b = F(b) - F(a)\\]</p></div></section>  </article>`;
});
export {
  Page as default
};
