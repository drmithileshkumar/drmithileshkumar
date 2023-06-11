import { c as create_ssr_component, a as subscribe, e as escape, i as add_attribute, A as add_classes } from "../../../../../../../chunks/index3.js";
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from "../../../../../../../chunks/stores2.js";
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
        <section><p>Let \\(f\\) and \\(g\\) be two real valued functions with the same domain such that \\(f(x)\\leq g(x)\\) for all \\(x\\) in the domain of definition. For some \\(a\\), if both \\(${escape(TeX.lim("x", "a"))}f(x)\\) and \\(${escape(TeX.lim("x", "a"))}g(x)\\) exist, then \\[${escape(TeX.lim("x", "a"))}f(x) \\leq ${escape(TeX.lim("x", "a"))}g(x)
            \\]
            </p>
            
            <p><strong>Sandwich Theorem</strong>: Let \\(f, g\\) and \\(h\\) be real functions such that \\(f(x)\\leq g(x)\\leq h(x)\\) for all \\(x\\) in the common domain of definition. For some real number \\(a\\) if \\(${escape(TeX.lim("x", "a"))}f(x) = l = ${escape(TeX.lim("x", "a"))}h(x)\\), then \\(${escape(TeX.lim("x", "a"))}g(x) = l\\)
            </p></section>
        
        
        
        </article>`;
});
export {
  Page as default
};
