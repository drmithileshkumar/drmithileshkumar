import { c as create_ssr_component, b as subscribe, e as escape, j as add_attribute, A as add_classes } from './index3-a65daa79.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from './stores2-cc63801e.js';
import { T as TeX } from './constants-e3dde4f2.js';
import { p as page } from './stores-c06efe28.js';
import './index2-dc48ccaf.js';

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
        <section><ul><li><strong>Column matrix</strong>: A matrix is said to be a <em>column matrix</em> if it has only one column.
                </li>
                <li><strong>Row matrix</strong>: A matrix is said to be a <em>row matrix</em> if it has only one row.
                </li>
                <li><strong>Square matrix</strong>: A matrix is said to be a <em>square matrix</em> if it has same number of rows and columns.
                </li>
                <li><strong>Diagonal matrix</strong>: A square matrix is said to be a <em>diagonal matrix</em> if all its non-diagonal elements are zero.
                </li>
                <li><strong>Scalar matrix</strong>: A diagonal matrix is said to be a <em>scalar matrix</em> if its diagonal elements are equal.
                </li>
                <li><strong>Identity matrix</strong>: A square matrix is said to be a <em>identity matrix</em> if its diagonal elements are equal to 1.
                </li>
                <li><strong>Zero matrix</strong>: A matrix is said to be a <em>zero matrix</em> if all its elements are zero.
                </li></ul></section>
        <section><h2>Equality of matrices</h2>
            <p>Two matrices \\(A\\) and \\(B\\) are said to be equal if
            </p>
            <ol><li>they are of the same order
                </li>
                <li>each element of \\(A\\) is equal to the corresponding elements of \\(B\\), that is \\(${escape(TeX.sub("a", "ij"))} = ${escape(TeX.sub("b", "ij"))}\\) for all \\(i\\) and \\(j\\).
                </li></ol></section>
        
        
        </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-3101b990.js.map
