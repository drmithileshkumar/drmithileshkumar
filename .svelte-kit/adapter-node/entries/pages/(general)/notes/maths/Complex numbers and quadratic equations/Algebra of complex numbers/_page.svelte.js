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
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section>Let \\(z_1 = a + ib\\) and \\(z_2 = c + id\\). Then
            <ol data-svelte-h="svelte-n8mxr5"><li>\\(z_1 + z_2 = (a + c) + i (b + d)\\)</li> <li>\\(z_1z_2 = (ac-bd) + i(ad + bc)\\)</li></ol> <p>For any non-zero complex number \\(z = a + ib (a\\neq 0, b\\neq 0)\\), there exists the complex number \\(${escape(TeX.dfrac("a", "a^2 + b^2"))} + i${escape(TeX.dfrac("-b", "a^2 + b^2"))}\\), denoted by \\(${escape(TeX.dfrac(1, "z"))}\\) or \\(${escape(TeX.pow("z", -1))}\\), called the <em data-svelte-h="svelte-1diif8">multiplicative inverse</em> of \\(z\\).</p> <p>For any integer \\(k\\), \\(${escape(TeX.pow("i", "4k"))} = 1, ${escape(TeX.pow("i", "4k + 1"))} = i, ${escape(TeX.pow("i", "4k + 2"))} = -1, ${escape(TeX.pow("i", "4k + 3"))} = -i\\)</p></section>  </article>`;
});
export {
  Page as default
};
