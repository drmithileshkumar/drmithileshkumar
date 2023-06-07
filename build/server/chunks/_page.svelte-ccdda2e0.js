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
        <section><table><tr><td>\\(\\int ${escape(TeX.dfrac(1, "x^2-a^2"))}dx = ${escape(TeX.dfrac(1, "2a"))}\\log |${escape(TeX.dfrac("x-a", "x+a"))}| + C\\)
                    </td>
                    <td>\\(\\int ${escape(TeX.dfrac(1, "a^2-x^2"))}dx = ${escape(TeX.dfrac(1, "2a"))}\\log |${escape(TeX.dfrac("a+x", "a-x"))}| + C\\)
                    </td></tr>
                <tr><td>\\(\\int ${escape(TeX.dfrac(1, "x^2+a^2"))}dx = ${escape(TeX.dfrac(1, "a"))}${escape(TeX.atan)}${escape(TeX.dfrac("x", "a"))} + C\\)
                    </td>
                    <td>\\(\\int ${escape(TeX.dfrac(1, TeX.sqrt("x^2-a^2")))}dx = \\log |x+${escape(TeX.sqrt("x^2-a^2"))}| + C\\)
                    </td></tr>
                <tr><td>\\(\\int ${escape(TeX.dfrac(1, TeX.sqrt("a^2-x^2")))}dx = ${escape(TeX.asin)}${escape(TeX.dfrac("x", "a"))} + C\\)
                    </td>
                    <td>\\(\\int ${escape(TeX.dfrac(1, TeX.sqrt("x^2+a^2")))}dx = \\log |x+${escape(TeX.sqrt("x^2+a^2"))}| + C\\)
                    </td></tr></table></section>
        
        
        
        </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ccdda2e0.js.map
