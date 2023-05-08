import { c as create_ssr_component, a as subscribe, e as escape, A as add_classes, k as add_attribute } from "../../../../../../../chunks/index3.js";
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from "../../../../../../../chunks/stores2.js";
import "../../../../../../../chunks/stores3.js";
import "../../../../../../../chunks/Practice.svelte_svelte_type_style_lang.js";
/* empty css                                                                 */import { T as TeX } from "../../../../../../../chunks/constants.js";
import { p as page } from "../../../../../../../chunks/stores.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-1m6zy9y{text-indent:2em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentSlide;
  let $$unsubscribe_slideCounter;
  let $selectedSection, $$unsubscribe_selectedSection;
  let $$unsubscribe_selectedChapter;
  let $page, $$unsubscribe_page;
  let $presentationMode, $$unsubscribe_presentationMode;
  let $presentation, $$unsubscribe_presentation;
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => value);
  $$unsubscribe_slideCounter = subscribe(slideCounter, (value) => value);
  $$unsubscribe_selectedSection = subscribe(selectedSection, (value) => $selectedSection = value);
  $$unsubscribe_selectedChapter = subscribe(selectedChapter, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_presentation = subscribe(presentation, (value) => $presentation = value);
  $$result.css.add(css);
  $$unsubscribe_currentSlide();
  $$unsubscribe_slideCounter();
  $$unsubscribe_selectedSection();
  $$unsubscribe_selectedChapter();
  $$unsubscribe_page();
  $$unsubscribe_presentationMode();
  $$unsubscribe_presentation();
  return `${$$result.head += `<!-- HEAD_svelte-ho89p8_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}" content="${"Power set"}"><!-- HEAD_svelte-ho89p8_END -->`, ""}
    <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1>
        <section><p class="${"svelte-1m6zy9y"}">The concept of universal set is contextual.</p>
           <div class="${"definition"}"><p class="${"svelte-1m6zy9y"}">Universal set contains all elements. Any other set is a subset of the universal set. The universal set is usually denoted by \\(U\\).
               </p></div></section>
        
        <section><h3 class="${"examples"}">Examples</h3>
            <ul><li>If we are studying a system of numbers, then we can <em>choose</em> the set of natural numbers ${escape(TeX.N)} as the universal set.
                </li>
                <li>We are studying about students of a class, then the set of all students in the class should be chosen as the universal set.
                </li></ul></section>
        
        </article>`;
});
export {
  Page as default
};
