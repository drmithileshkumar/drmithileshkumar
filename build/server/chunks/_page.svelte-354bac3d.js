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
  return `${$$result.head += `<!-- HEAD_svelte-1f856b6_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}" content="${"Equal sets"}"><!-- HEAD_svelte-1f856b6_END -->`, ""}
    <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1>
        <section><p class="${"svelte-1m6zy9y"}">Usually, when a mathematical object is defined, if possible, its equality is defined as well. We can talk about equality of sets which is based on the content of the sets.</p>
           <div class="${"definition"}"><p class="${"svelte-1m6zy9y"}">Two sets \\(A\\) and \\(B\\) are said to be <em>equal</em> if they have exactly the same elements. Otherwise, the sets are said to be <em>unequal</em></p>
               <ul><li>If \\(A\\) and \\(B\\) are equal sets, we write \\(A = B\\).
                   </li>
                   <li>If \\(A\\) and \\(B\\) are unequal sets, we write \\(A \\neq B\\).
                   </li></ul></div></section>
        
        <section><h3 class="${"examples"}">Examples</h3>
            <ul><li>${escape(`\\(\\{1, 2, 3\\} = \\{2, 1, 3\\}\\)`)}</li>
                <li>${escape(`\\(\\{1, 2, 3\\} = \\{2, 1, 3, 3, 1\\}\\)`)}</li>
                <li>${escape(`\\(\\{E, F, R\\}\\)`)} and the set of letters in FREE are the same set.
                </li></ul></section>
        
        </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-354bac3d.js.map
