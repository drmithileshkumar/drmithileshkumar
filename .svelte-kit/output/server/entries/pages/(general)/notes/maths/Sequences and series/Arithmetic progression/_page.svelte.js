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
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section><ul><li data-svelte-h="svelte-2n4jj5">An arithmetic progression (A.P.) is a sequence in which terms increase or decrease regularly by the same constant. This constant is called <em>common difference</em> of the A.P. Usually, we denote the first term of A.P. by \\(a\\), the common difference by \\(d\\) and the last term by \\(l\\). The general term or the \\(n\\)th term of the A.P. is given by \\(a_n = a + (n - 1)d\\).</li> <li>The sum \\(S_n\\) of the first \\(n\\) terms of A.P. is given by \\[S_n = ${escape(TeX.frac("n", 2))}[2a + (n-1)d] = ${escape(TeX.frac("n", 2))}(a + l)\\]</li> <li>The <em data-svelte-h="svelte-fxbllp">arithmetic mean</em> \\(A\\) of any two numbers \\(a\\) and \\(b\\) is given by \\(${escape(TeX.dfrac("a + b", 2))}\\), i.e. the sequence \\(a, A, b\\) is in A.P.</li></ul></section>  </article>`;
});
export {
  Page as default
};
