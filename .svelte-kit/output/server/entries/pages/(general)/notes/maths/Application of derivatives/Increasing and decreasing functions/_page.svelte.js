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
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section><div class="definition"><p data-svelte-h="svelte-xd0pym">Let \\(I\\) be an interval contained in the domain of a real valued function \\(f\\). Then \\(f\\) is said to be</p> <ol><li>increasing on \\(I\\) if \\(x_1${escape(TeX.less)} x_2\\) in \\(I\\) implies that \\(f(x_1)\\leq f(x_2)\\) for all \\(x_1, x_2\\in I\\).</li> <li>strictly increasing on \\(I\\) if \\(x_1${escape(TeX.less)} x_2\\) in \\(I\\) implies that \\(f(x_1)${escape(TeX.less)} f(x_2)\\) for all \\(x_1, x_2\\in I\\).</li> <li>decreasing on \\(I\\) if \\(x_1${escape(TeX.less)} x_2\\) in \\(I\\) implies that \\(f(x_1)\\geq f(x_2)\\) for all \\(x_1, x_2\\in I\\).</li> <li>strictly decreasing on \\(I\\) if \\(x_1${escape(TeX.less)} x_2\\) in \\(I\\) implies that \\(f(x_1)${escape(TeX.more)} f(x_2)\\) for all \\(x_1, x_2\\in I\\).</li></ol></div> <div class="theorem"><p data-svelte-h="svelte-19iiqqn">Let \\(f\\) be continuous on \\([a, b]\\) and differentiable on the open interval \\((a,b)\\). Then</p> <ol><li>\\(f\\) is strictly increasing in \\([a, b]\\) if \\(f&#39;(x) ${escape(TeX.more)} 0\\) for each \\(x\\in (a,b)\\)</li> <li>\\(f\\) is strictly decreasing in \\([a, b]\\) if \\(f&#39;(x) ${escape(TeX.less)} 0\\) for each \\(x\\in (a,b)\\)</li> <li data-svelte-h="svelte-ytel7y">\\(f\\) is a constant function in \\([a, b]\\) if \\(f&#39;(x) = 0\\) for each \\(x\\in (a,b)\\)</li></ol></div></section>  </article>`;
});
export {
  Page as default
};
