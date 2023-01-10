import { c as create_ssr_component, d as subscribe, e as escape, f as add_attribute, r as add_classes } from './index-87a5488c.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from './stores2-74e83705.js';
import { T as TeX } from './constants-e3dde4f2.js';
import { p as page } from './stores-d134afd4.js';
import './index3-41f46450.js';

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
        <section><div class="${"definition"}"><p>Suppose \\(f\\) is a real function on a subset of the real numbers and let \\(c\\) be a point in the domain of \\(f\\). Then \\(f\\) is continuous at \\(c\\) if ${escape(`\\[\\lim_{x\\to c}f(x) = f(c)\\]`)}</p></div>
            <div class="${"definition"}">A real function \\(f\\) is said to be continuous if it is continuous at every point in the domain of \\(f\\).
            </div></section>
        <section><h2>Algebra of continuous functions</h2>
            <div class="${"theorem"}"><p>Suppose \\(f\\) and \\(g\\) be two real functions continuous at a real number \\(c\\). Then
                </p>
                <ol><li>\\(f + g\\) is continuous at \\(x = c\\).
                    </li>
                    <li>\\(f - g\\) is continuous at \\(x = c\\).
                    </li>
                    <li>\\(f\\cdot g\\) is continuous at \\(x = c\\).
                    </li>
                    <li>\\(\\Big [${escape(TeX.dfrac("f", "g"))}\\Big ]\\) is continuous at \\(x = c\\) (provided \\(g(c)\\neq 0\\))
                    </li></ol></div>
            <div class="${"theorem"}"><p>Suppose \\(f\\) and \\(g\\) are real valued functions such that \\((f\\circ g)\\) is continuous at \\(c\\).
                </p></div></section>
        
        
        
        </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ffb2c265.js.map
