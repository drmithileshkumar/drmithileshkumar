import { c as create_ssr_component, d as subscribe, e as escape, f as add_attribute, r as add_classes } from './index3-f5b946c7.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from './stores2-39bfebc4.js';
import { T as TeX } from './constants-e3dde4f2.js';
import { p as page } from './stores-de16fb70.js';
import './index2-3468083b.js';

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
        <section><div class="${"definition"}"><p>If \\(A = ${escape(TeX.mat())}\\), then the matrix obtained by interchanging the rows and columns of \\(A\\) is called the <em>transpose</em> of \\(A\\). Transpose of the matrix \\(A\\) is denoted by \\(A&#39;\\) or \\(A^T\\). If \\(A = ${escape(TeX.mat())}\\), then \\(A&#39; = ${escape(TeX.mat("a", "j", "i", "n", "m"))}\\)
                </p></div></section>
        <section><h2>Properties of transpose of the matrices</h2>
            <ol><li>\\((A&#39;)&#39; = A\\)
                </li>
                <li>\\((kA)&#39; = kA&#39;\\) (where \\(k\\) is a constant)
                </li>
                <li>\\((A + B)&#39; = A&#39; + B&#39;\\)
                </li>
                <li>\\((AB)&#39; = B&#39;A&#39;\\)
                </li></ol></section>
        
        
        </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f8d5e809.js.map
