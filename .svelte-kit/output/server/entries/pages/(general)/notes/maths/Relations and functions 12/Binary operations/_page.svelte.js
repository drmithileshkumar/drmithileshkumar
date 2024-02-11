import { s as subscribe } from "../../../../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, f as add_attribute, j as add_classes } from "../../../../../../../chunks/ssr.js";
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
  return `${$$result.head += `<!-- HEAD_svelte-fc07ip_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-fc07ip_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section><ul><li data-svelte-h="svelte-2mnx0x">A <strong>binary operation \\(*\\)</strong> on a set \\(A\\) is a function \\(*\\) from \\(A\\times A\\) to \\(A\\).</li> <li data-svelte-h="svelte-1vq0iq8">An element \\(e\\in X\\) is the <strong>identity</strong> element for binary operation \\(*:X\\times X\\to X\\), if \\(a*e = a = e*a~~\\forall a\\in X\\)</li> <li>An element \\(a\\in X\\) is invertible for binary operation \\(*:X\\times X\\to X\\), if there exists \\(b\\in X\\) such that \\(a*b = e = b*a\\) where, \\(e\\) is the identity for the binary operation \\(*\\). The element \\(b\\) is called <strong data-svelte-h="svelte-r6m4xi">inverse</strong> of \\(a\\) and is denoted by \\(${escape(TeX.pow("a", "-1"))}\\)</li> <li data-svelte-h="svelte-uvzsb1">An operation \\(*\\) on \\(X\\) is <strong>commutative</strong> if \\(a*b = b*a~~\\forall a,b\\in X\\)</li> <li data-svelte-h="svelte-1xpd7oj">An operation \\(*\\) on \\(X\\) is <strong>associative</strong> if \\((a*b)*c = a*(b*c)~~\\forall a,b,c\\in X\\)</li></ul></section>  </article>`;
});
export {
  Page as default
};
