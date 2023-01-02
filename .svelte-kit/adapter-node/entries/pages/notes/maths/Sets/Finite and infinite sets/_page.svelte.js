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
  return `${$$result.head += `<!-- HEAD_svelte-2tdyvs_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}" content="${"Finite and infinite sets"}"><!-- HEAD_svelte-2tdyvs_END -->`, ""}
    <article><h1>${escape($selectedSection)}</h1>
        <h2>Size of a set</h2>
        <section><p class="${"svelte-1m6zy9y"}">The analysis of sets begin with knowing its size.</p>
           <div class="${"definition"}"><p class="${"svelte-1m6zy9y"}">The size of a set is equal to the number of elements in the set.
               </p>
               <ul><li>The size of a set is also called the <em>cardinality</em> of the set.
                   </li>
                   <li>For a set \\(A\\), its size is denote by \\(|A|\\) or \\(n(A)\\).
                   </li></ul></div>
           <p class="${"remark svelte-1m6zy9y"}">Elements are counted only once. Repeating an element in the set will not change its size.
           </p></section>
        
        <section><h3 class="${"examples"}">Examples</h3>
            <ul><li>The size of set ${escape("\\(A = \\{1, 2, 3\\}\\)")} is \\(n(A) = 3\\).
                </li>
                <li>The size of set ${escape("\\(A = \\{1, 1, 2, 3, 3, 3\\}\\)")} is also \\(n(A) = 3\\).
                </li>
                <li>The number of elements in an empty set is 0. That is, \\(n(\\varphi) = 0\\).
                </li></ul></section>
        <h2>Finite Set</h2>
        <section><div class="${"definition"}"><p class="${"svelte-1m6zy9y"}">If counting of the elements of a set can finish, it called a <em>finite set</em>.
                </p>
                <ul><li>The size of a finite set is a positive integer.
                    </li>
                    <li>Empty set is a finite set as well.
                    </li></ul></div></section>
         
         <section><h3 class="${"examples"}">Examples</h3>
             <ul><li>Counting of elements of ${escape("\\(A = \\{1, 2, 3\\}\\)")} can finish, and hence it is finite.
                 </li>
                 <li>The set of number of letters in a given English word is finite.
                 </li>
                 <li>The set of roots of a finite degree polynomial is finite.
                 </li></ul></section>
         <h2>Infinite Set</h2>
         <section><div class="${"definition"}"><p class="${"svelte-1m6zy9y"}">If counting of the elements of a set can not finish, it called an <em>infinite set</em>.
                </p>
                <ul><li>The size of an infinite set is infinity (\\(\\infty\\)).
                    </li></ul></div></section>
         
         <section><h3 class="${"examples"}">Examples</h3>
             <ul><li>The set of natural numbers \\(N\\) is an infinite set.
                 </li>
                 <li>The set of numbers divisible by \\(2\\) is an infinite set.
                 </li>
                 <li>The set of real numbers in an infinite set.
                 </li></ul></section>
        </article>`;
});
export {
  Page as default
};
