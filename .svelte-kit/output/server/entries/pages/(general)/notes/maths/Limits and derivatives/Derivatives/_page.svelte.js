import { c as create_ssr_component, s as subscribe, e as escape, k as add_attribute, m as add_classes } from "../../../../../../../chunks/ssr.js";
import { c as currentSlide, s as slideCounter, a as selectedSection, b as selectedChapter, p as presentationMode, d as presentation } from "../../../../../../../chunks/stores4.js";
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
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section><ul><li>The derivative of a function \\(f\\) at \\(x\\) is defined by \\[f&#39;(x) = ${escape(TeX.frac("df(x)", "dx"))} = ${escape(TeX.lim("h", 0))}${escape(TeX.frac("f(x + h) - f(x)", "h"))}\\]</li> <li>For functions \\(u\\) and \\(v\\) the following holds:
                    <ol><li data-svelte-h="svelte-1solpqk">\\((u\\pm v)&#39; = u&#39;\\pm v&#39;\\)</li> <li data-svelte-h="svelte-ki76le">\\((uv)&#39; = u&#39;v + uv&#39;\\)</li> <li>\\(\\Big(${escape(TeX.dfrac("u", "v"))}\\Big )&#39; = ${escape(TeX.dfrac("u'v-uv'", "v^2"))}\\) provided all are defined.</li></ol></li> <li>Following are some of the standard derivatives
                    <ol><li>\\(${escape(TeX.dfrac("d", "dx"))}(x^n) = n${escape(TeX.pow("x", "n-1"))}\\)</li> <li style="padding-top: 0.5em;">\\(${escape(TeX.dfrac("d", "dx"))}(\\sin x) = \\cos x\\)</li> <li style="padding-top: 0.5em;">\\(${escape(TeX.dfrac("d", "dx"))}(\\cos x) = -\\sin x\\)</li></ol></li></ul></section>  </article>`;
});
export {
  Page as default
};
