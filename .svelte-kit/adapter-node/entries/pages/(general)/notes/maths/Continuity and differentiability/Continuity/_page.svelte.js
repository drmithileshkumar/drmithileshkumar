import { c as create_ssr_component, a as subscribe, e as escape, i as add_attribute, t as add_classes } from "../../../../../../../chunks/ssr.js";
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, p as presentationMode, a as presentation } from "../../../../../../../chunks/stores3.js";
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
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section><div class="definition"><p>Suppose \\(f\\) is a real function on a subset of the real numbers and let \\(c\\) be a point in the domain of \\(f\\). Then \\(f\\) is continuous at \\(c\\) if ${escape(`\\[\\lim_{x\\to c}f(x) = f(c)\\]`)}</p></div> <div class="definition" data-svelte-h="svelte-wgeynr">A real function \\(f\\) is said to be continuous if it is continuous at every point in the domain of \\(f\\).</div></section> <section><h2 data-svelte-h="svelte-9o4wlt">Algebra of continuous functions</h2> <div class="theorem"><p data-svelte-h="svelte-1w306o2">Suppose \\(f\\) and \\(g\\) be two real functions continuous at a real number \\(c\\). Then</p> <ol><li data-svelte-h="svelte-1l833vq">\\(f + g\\) is continuous at \\(x = c\\).</li> <li data-svelte-h="svelte-1gbzhvc">\\(f - g\\) is continuous at \\(x = c\\).</li> <li data-svelte-h="svelte-1gus37f">\\(f\\cdot g\\) is continuous at \\(x = c\\).</li> <li>\\(\\Big [${escape(TeX.dfrac("f", "g"))}\\Big ]\\) is continuous at \\(x = c\\) (provided \\(g(c)\\neq 0\\))</li></ol></div> <div class="theorem" data-svelte-h="svelte-pe6dqd"><p>Suppose \\(f\\) and \\(g\\) are real valued functions such that \\((f\\circ g)\\) is continuous at \\(c\\).</p></div></section>   </article>`;
});
export {
  Page as default
};
