import { c as create_ssr_component, b as subscribe, e as escape, k as add_attribute, A as add_classes } from './index3-343e8927.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from './stores2-777b8818.js';
import { T as TeX } from './constants-e3dde4f2.js';
import { p as page } from './stores-da0a4a87.js';
import './index2-0c17521e.js';

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
        <section><ul><li>\\(|A^T| = |A|\\)
                </li>
                <li>If we interchange any two rows (or columns), then sign of determinant changes. \\[|A(R_i\\leftrightarrow R_j)| = - |A|\\]
                </li>
                <li>If any two rows or any two columns are identical or propertional, then value of determinant is zero. \\[|A(R_i = kR_j)| = 0\\]
                </li>
                <li>If we multiply each element of a row or a column of a determinant by constant \\(k\\), then value of determinant is multiplied by \\(k\\). \\[|A(R_i \\to kR_i)| = k|A|\\]
                </li>
                <li>Multiplying a determinant by \\(k\\) means multiplying elements of only one row or one column by \\(k\\).
                </li>
                <li>If \\(A = ${escape(TeX.mat("a", "i", "j", 3, 3))}\\), then \\(\\vert k\\cdot A\\vert = k^3\\vert A\\vert\\)
                </li>
                <li>If elements of a row or a column in a determinant can be expressed as sum of two or more elements, then the given determinant can be expressed as sum of two or more determinants (other rows remain the same).
                </li>
                <li>If to each element of a row or a column of a determinant the equimultiples of corresponding elements of other rows or columns are added, then value of determinant remains same. \\[|A(R_i\\to R_i + kR_j)| = |A|\\]
                </li></ul></section>
        
        
        
        </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-5ac3e6df.js.map
