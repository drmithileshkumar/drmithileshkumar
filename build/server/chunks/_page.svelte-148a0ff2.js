import { c as create_ssr_component, d as subscribe, e as escape, f as add_attribute, r as add_classes } from './index-caf19234.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from './stores2-60a97389.js';
import { T as TeX } from './constants-e3dde4f2.js';
import { p as page } from './stores-f8df57c6.js';
import './index3-3865ea4a.js';

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
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""}
    <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1>
        <section><div class="${"definition"}"><p>The number of permutations of \\(n\\) different things taken \\(r\\) at a time, where repetition is not allowed, is denoted by \\(${escape(TeX.npr("n", "r"))}\\) and is given by \\[${escape(TeX.npr("n", "r"))} = ${escape(TeX.dfrac("n!", "(n-r)!"))}\\] where \\(0\\leq r \\leq n\\)
                </p></div>
            <ul><li>\\(n! = 1\\times 2\\times 3\\times \\dots\\times n\\)
                </li>
                <li>\\(n! = n\\times (n - 1)!\\)
                </li>
                <li>The number of permutations of \\(n\\) different things, taken \\(r\\) at a time, where repeatition is allowed, is \\(n^r\\).
                </li>
                <li>The number of permutations of \\(n\\) objects taken all at a time, where \\(p_1\\) objects are of first kind, \\(p_2\\) objects are of the second kind, ..., \\(p_k\\) objects are of the \\(k\\)th kind and rest, if any, are all different is \\[${escape(TeX.frac("n!", "p_1!p_2!\\cdots p_k!"))}\\]
                </li></ul></section>
        
        
        
        </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-148a0ff2.js.map
