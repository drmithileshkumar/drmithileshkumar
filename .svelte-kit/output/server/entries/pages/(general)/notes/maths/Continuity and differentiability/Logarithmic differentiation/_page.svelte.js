import { c as create_ssr_component, s as subscribe, e as escape, h as add_attribute, k as add_classes } from "../../../../../../../chunks/ssr.js";
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
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section><p>Consider functions of the form ${escape(`\\[y = f(x) = [u(x)]^{v(x)}\\]`)} By taking logarithm (to base \\(e\\)) the above may be written as ${escape(`\\[\\log y = v(x) \\log [u(x)]\\]`)} Differentiating this we get ${escape(`\\[
                    \\begin{eqnarray}
                    \\frac{1}{y}\\cdot\\frac{dy}{dx} &=& v(x)\\cdot\\frac{1}{u(x)}\\cdot u'(x) + v'(x)\\cdot\\log [u(x)]\\\\
                    \\implies \\frac{dy}{dx} &=& y\\Big[\\frac{v(x)}{u(x)}\\cdot u'(x) + v'(x)\\cdot\\log[u(x)]\\Big]
                    \\end{eqnarray}
                    \\]`)}</p></section>  </article>`;
});
export {
  Page as default
};
