import { c as create_ssr_component, d as subscribe, e as escape, f as add_attribute, r as add_classes } from "../../../../../../chunks/index3.js";
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from "../../../../../../chunks/stores2.js";
/* empty css                                                               *//* empty css                                                              */import { T as TeX } from "../../../../../../chunks/constants.js";
import { p as page } from "../../../../../../chunks/stores.js";
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
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""}
    <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1>
        <section><div class="${"definition"}"><p>The exponential function with positive base \\(b${escape(TeX.more)} 1\\) is the function \\[y = f(x) = b^x\\]
                </p></div>
            <div class="${"definition"}"><p>Let \\(b${escape(TeX.more)} 1\\) be a real number. Then we say logarithm of \\(a\\) to base \\(b\\) is \\(x\\) if \\(b^x = a\\).
                </p></div>
            <ul><li>${escape(`\\(\\log_a p = \\dfrac{\\log_b p}{\\log_b a}\\)`)}</li>
                <li>${escape(`\\(\\log_b pq = \\log_b p + \\log_b q\\)`)}</li>
                <li>${escape(`\\(\\log_b \\frac{p}{q} = \\log_b p - \\log_b q\\)`)}</li></ul>
            <div class="${"theorem"}"><ul><li>The derivative of \\(e^x\\) w.r.t., \\(x\\) is \\(e^x\\).
                    </li>
                    <li>The derivative of \\(\\log x\\) w.r.t., \\(x\\) is \\(1/x\\).
                    </li></ul></div></section>
        
        
        
        </article>`;
});
export {
  Page as default
};
