import { c as create_ssr_component, d as subscribe, e as escape, f as add_attribute, r as add_classes } from "../../../../../../chunks/index.js";
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
        <section><ul><li>A sequence is said to be a <em>geometric progression</em> or G.P., if the ratio of any term to its preceding term is same throughout. This constant factor is called the <em>common ratio</em>. Usually, we denote the first term of a G.P. by \\(a\\) and its common ratio by \\(r\\). The general or the \\(n\\)th term of G.P. is given by \\(a_n = a${escape(TeX.pow("r", "n-1"))}\\).
                </li>
                <li>The sum \\(S_n\\) of the first \\(n\\) terms of G.P. is given by \\[S_n = ${escape(TeX.frac("a(r^n - 1)", "r-1"))}\\] if \\(r\\neq 1\\).
                </li>
                <li>The geometric mean (G) of any two positive numbers \\(a\\) and \\(b\\) is given by \\(${escape(TeX.sqrt("ab"))}\\), i.e. the sequence \\(a, G, b\\) is G.P.
                </li></ul></section>
        
        
        
        </article>`;
});
export {
  Page as default
};
