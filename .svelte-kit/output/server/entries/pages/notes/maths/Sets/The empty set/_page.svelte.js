import { c as create_ssr_component, d as subscribe, e as escape } from "../../../../../../chunks/index.js";
import { a as selectedSection, b as selectedChapter } from "../../../../../../chunks/stores2.js";
/* empty css                                                               *//* empty css                                                              */import { p as page } from "../../../../../../chunks/stores.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-1m6zy9y{text-indent:2em}",
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
  return `${$$result.head += `<!-- HEAD_svelte-y8ddav_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}" content="${"Introduction to sets"}"><!-- HEAD_svelte-y8ddav_END -->`, ""}
    <article><h1>${escape($selectedSection)}</h1>
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
export {
  Page as default
};
