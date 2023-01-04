import { c as create_ssr_component, d as subscribe, e as escape, r as add_classes, f as add_attribute } from './index-caf19234.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from './stores2-7b617de3.js';
import { p as page } from './stores-f8df57c6.js';
import './index3-3865ea4a.js';

const css = {
  code: "p.svelte-6m6ati{text-indent:2em}",
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
  return `${$$result.head += `<!-- HEAD_svelte-1cm2kk7_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}" content="${"Introduction to sets"}"><!-- HEAD_svelte-1cm2kk7_END -->`, ""}
<article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1>
    <section><p class="${"svelte-6m6ati"}">Consider the following problem.
        </p>
        <div class="${"question"}">In an IIT sports event, 50 medals were awarded in race, 30 in football and 25 in cricket. If only 60 students got any medal and only 5 students got medals in all events, how many received medals in exactly two of the events?
            
        </div>
        
        <p class="${"svelte-6m6ati"}">This simple problem is tricky to solve without using the language of <strong>Sets</strong>. In this chapter, we&#39;ll define what is a <em>set</em> and use it to solve problems of type stated above and many more.
        </p></section>
    
    </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-df432070.js.map
