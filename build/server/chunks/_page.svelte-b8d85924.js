import { c as create_ssr_component, d as subscribe, e as escape } from './index-2bbd6063.js';
import { a as selectedSection, b as selectedChapter } from './stores2-c0701737.js';
import { p as page } from './stores-7c08ea0c.js';
import './index3-dd48deaa.js';

const css = {
  code: "p.svelte-6m6ati{text-indent:2em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedSection, $$unsubscribe_selectedSection;
  let $$unsubscribe_selectedChapter;
  let $page, $$unsubscribe_page;
  $$unsubscribe_selectedSection = subscribe(selectedSection, (value) => $selectedSection = value);
  $$unsubscribe_selectedChapter = subscribe(selectedChapter, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_selectedSection();
  $$unsubscribe_selectedChapter();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1cm2kk7_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}" content="${"Introduction to sets"}"><!-- HEAD_svelte-1cm2kk7_END -->`, ""}
<article><h1>${escape($selectedSection)}</h1>
    <section><p class="${"svelte-6m6ati"}">Consider the following problem.
        </p>
        <div class="${"question"}">In an IIT sports event, 50 medals were awarded in race, 30 in football and 25 in cricket. If only 60 students got any medal and only 5 students got medals in all events, how many received medals in exactly two of the events?
            
        </div>
        
        <p class="${"svelte-6m6ati"}">This simple problem is tricky to solve without using the language of <strong>Sets</strong>. In this chapter, we&#39;ll define what is a <em>set</em> and use it to solve problems of type stated above and many more.
        </p></section>
    
    </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-b8d85924.js.map
