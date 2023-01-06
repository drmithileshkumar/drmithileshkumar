import { c as create_ssr_component, d as subscribe, e as escape, r as add_classes, f as add_attribute } from './index-caf19234.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from './stores2-60a97389.js';
import { p as page } from './stores-f8df57c6.js';
import './index3-3865ea4a.js';

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
  return `${$$result.head += `<!-- HEAD_svelte-1cd2i6b_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}" content="${"The empty set"}"><!-- HEAD_svelte-1cd2i6b_END -->`, ""}
    <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1>
        <section><p class="${"svelte-1m6zy9y"}">The simplest possible set is one that does not contain any element at all.</p>
           <div class="${"definition"}"><p class="${"svelte-1m6zy9y"}">A set which does not contain any element is called the <strong>empty</strong> set.
               </p>
               <ul><li>An empty set is also called the <em>null set</em> or the <em>void set</em>.
                   </li>
                   <li>An empty set is denoted either as ${escape("{ }")} or \\(\\varphi\\) (read as &quot;phi&quot;).
                   </li></ul></div></section>
        
        <section><h3 class="${"examples"}">Examples</h3>
            <ul><li>The set of positive numbers less than 0 contains no element. Hence, it is an empty set.
                </li>
                <li>The set of apples in an empty basket is an empty set.
                </li></ul></section>
        
        </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-aedb4af3.js.map
