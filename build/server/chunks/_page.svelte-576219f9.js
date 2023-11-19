import { c as create_ssr_component, b as subscribe, e as escape, k as add_attribute, w as add_classes } from './index3-ea5e928f.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from './stores2-1fe27092.js';
import { p as page } from './stores-45c9804a.js';
import './index2-ab5ba032.js';

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
  return `${$$result.head += `<!-- HEAD_svelte-fc07ip_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-fc07ip_END -->`, ""}
    <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1>
        <section><div class="definition"><p><strong>Relation</strong> A relation \\(R\\) from a set \\(A\\) to a set \\(B\\) is a subset of the cartesian product \\(A\\times B\\) obtained by describing a relationship between the first element \\(x\\) and the second element \\(y\\) of the ordered pairs in \\(A\\times B\\).
               </p></div>
           <ul><li>The <strong>image</strong> of an element \\(x\\) under a relation \\(R\\) is given by \\(y\\), where \\((x,y)\\in R\\).
                </li>
                <li>The <strong>domain</strong> of \\(R\\) is the set of all first elements of the ordered pair in a relation \\(R\\).
                </li>
                <li>The <strong>range</strong> of the relation \\(R\\) is the set of all second elements of the ordered pairs in a relation \\(R\\).
                </li></ul></section>
        
        
        
        </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-576219f9.js.map
