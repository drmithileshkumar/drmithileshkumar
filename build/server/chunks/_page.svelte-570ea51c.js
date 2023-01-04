import { c as create_ssr_component, d as subscribe, e as escape, f as add_attribute, r as add_classes } from './index-caf19234.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from './stores2-857f0e53.js';
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
  return `${$$result.head += `<!-- HEAD_svelte-iu5uph_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}"${add_attribute("content", $selectedSection, 0)}><!-- HEAD_svelte-iu5uph_END -->`, ""}
    <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1>
        <h2>Definition</h2>
        <section><p class="${"svelte-1m6zy9y"}">We are used to a practical idea of what is a <em>collection</em>. A <em>set</em> is the mathematical refinement of this idea of collection. It turns out that not every collection can be a set. One basic requirement of a mathematical concept is that its definition must be unique. Not every collection has a unique definition. Consider, for example, <span class="${"specialtext"}">the collection of favourite songs</span>. Pretty much every person would have their own unique collection of favourite songs. 
            </p>
            <p class="${"svelte-1m6zy9y"}">Although the collection of favourite songs is defined for each person, but it is not unique for everyone. We can not consider such collections as mathematical object. Then the question remains <em>&quot;how do we eliminate such bad cases of collections?&quot;</em></p>
            <p class="${"svelte-1m6zy9y"}">This problem of uniquenss can be solved if it is possible to decide, with certainty, whether an object is part of the collection. This is how we define the mathematical notion of a <em>set</em>.
            </p>
            <div class="${"definition"}">A <strong>set</strong> is a <em>well-defined</em> collection of objects.
            </div>
            <p class="${"svelte-1m6zy9y"}">The property <em>well-defined</em> means given a set and an object, we can determine, without ambiguity, whether the object <em>belongs</em> to the set or not.
            </p></section>
        
        <section><h3 class="${"examples"}">Examples</h3>
            <ul><li>Collection of students in a given class is a set.
                </li>
                <li>Alphabets in English is a set.
                </li>
                <li>Natural numbers divisible by 2 is a set.
                </li>
                <li>Collection of circles of different radii is a set.
                </li>
                <li>Collection of all rivers in the world is a set.
                </li></ul></section>
        <h2>Elements of a set</h2>
        <section><ul><li>A set is usually denoted by capital letters \\(A, B, X, Y\\) etc.
                </li>
                <li>Members of a set are called elements of the set. 
                </li>
                <li>Elements of a set are usually represented by small letters \\(a, b, x, y\\) etc.
                </li></ul>
            <h3>Epsilon (\\(\\in\\)) notation</h3>
            <ul><li>If \\(a\\) is an elment of a set \\(A\\), we say that \\(a\\) <em>belongs to</em> \\(A\\) and denote this fact using \\(a\\in A\\).
                </li>
                <li>If \\(a\\) is <strong>not</strong> an elment of a set \\(A\\), we say that \\(a\\) <em>does not belongs to</em> \\(A\\) and denote this fact using \\(a\\notin A\\).
                </li></ul></section>
        <section><h3 class="${"examples"}">Examples</h3>
            <ul><li>If \\(A\\) is the set of vowels in English, then \\(a\\in A\\) because \\(a\\) is a vowel, but \\(x\\notin A\\) because \\(x\\) is not a vowel.
                </li>
                <li>If \\(E\\) is the set of Natural numbers divisible by 2, then \\(2\\in E\\), but \\(0\\notin E\\) and \\(3\\notin E\\).
                </li>
                <li>If \\(R\\) is the set of all rivers in the world, then \\(Ganga\\in R\\), but \\(India\\notin R\\).
                </li></ul></section>
        <h2>Roster Form</h2>
        <section><div class="${"definition"}"><p class="${"svelte-1m6zy9y"}">In roster form, all the elements of a set are listed, comma-separated and enclosed within braces ${escape("\\[\\{a_1, a_2,\\dots, a_n \\}\\]")}</p></div></section>
        <h3 class="${"examples"}">Examples</h3>
        <section><ul><li>Set of natural numbers less than 10 and divisible by 2 is ${escape(`\\(\\{2, 4, 6, 8\\}\\)`)}.
                </li>
                <li>Set of English vowels is ${escape(`\\(\\{a, e, i, o, u\\}\\)`)}.
                </li>
                <li>Set of roots of quadratic equation \\(x^2 - 3x + 2 = 0\\) is ${escape(`\\(\\{1, 2\\}\\)`)}.
                </li></ul></section>
        <section><h3 class="${"remark"}">Remarks </h3>
            <ul><li>In roster form, the order in which the elements are listed does not matter. For example, the set ${escape(`\\(\\{2, 4\\}\\)`)} is the same as ${escape(`\\(\\{4, 2\\}\\)`)}.
                </li>
                <li>In roster form, repeating an element in the list does not change the set. Hence, an element is usually listed only once in the set. For example, the set of letter in BETTER is ${escape(`\\(\\{B, E, T, T, E, R\\}\\)`)}, there is no need to repeat E and T. We can just write ${escape(`\\(\\{B, E, T, R\\}\\)`)}.
                </li>
                <li>The set of roots of quadratic equation \\(x^2 - 2x + 1 = 0\\) is ${escape(`\\(\\{1, 1\\}\\)`)} or just ${escape(`\\(\\{1\\}\\)`)}.
                </li></ul></section>
        <h2>Set Builder Form</h2>
        <section><div class="${"definition"}"><p class="${"svelte-1m6zy9y"}">In set-builder form, we specify a property that is satisfied <strong>only</strong> by the elements of the set. It is written as ${escape(`\\[\\{x : \\text{Property satisfied by } x\\}\\]`)} The symbol \\(x\\) can be replaced with any other symbol like \\(a, b, y\\) etc. The colon (:) stands for &quot;such that&quot;. After colon (:) we write the property satisfied by all elements of the set.
                </p></div></section>
         
         <section><h3 class="${"examples"}">Examples</h3>
             <ul><li>The set-builder form of the set ${escape(`\\(\\{2, 4, 6, 8\\}\\)`)} is ${escape(`\\(\\{x: x\\)`)} is a natural numbers less than 10 and divisible by  2${escape(`\\(\\}\\)`)}.
                 </li>
                 <li>The set-builder form of the set ${escape(`\\(\\{a, e, i, o, u\\}\\)`)} is ${escape(`\\(\\{x : x \\text{ is an English vowel}\\}\\)`)}.
                 </li></ul></section>
        </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-570ea51c.js.map
