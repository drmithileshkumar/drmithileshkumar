import { c as create_ssr_component, b as subscribe, e as escape, f as add_attribute, r as add_classes } from './index3-27cd0b89.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from './stores2-84db76e6.js';
import { T as TeX } from './constants-e3dde4f2.js';
import { p as page } from './stores-f8ec62fa.js';
import './index2-6ed83499.js';

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
        <section><ul><li><strong>Integration by parts:</strong> \\(\\int uv dx = u\\int vdx - \\int \\Big[u&#39;\\int vdx\\Big]dx\\)
                </li>
                <li>\\(\\int e^x[f(x) + f&#39;(x)]dx = e^xf(x) + C\\)
                </li>
                <li>Some special integrals
                    <ol><li>\\(\\int ${escape(TeX.sqrt("x^2-a^2"))} dx = ${escape(TeX.dfrac("x", 2))}${escape(TeX.sqrt("x^2-a^2"))} - ${escape(TeX.dfrac("a^2", 2))}\\log|x + ${escape(TeX.sqrt("x^2 - a^2"))}| + C\\)
                        </li>
                        <li style="${"padding-top: 0.5em;"}">\\(\\int ${escape(TeX.sqrt("x^2+a^2"))} dx = ${escape(TeX.dfrac("x", 2))}${escape(TeX.sqrt("x^2+a^2"))} + ${escape(TeX.dfrac("a^2", 2))}\\log|x + ${escape(TeX.sqrt("x^2 + a^2"))}| + C\\)
                        </li>
                        <li style="${"padding-top: 0.5em;"}">\\(\\int ${escape(TeX.sqrt("a^2-x^2"))} dx = ${escape(TeX.dfrac("x", 2))}${escape(TeX.sqrt("a^2-x^2"))} + ${escape(TeX.asin)}${escape(TeX.dfrac("x", "a"))} + C\\)
                        </li></ol></li></ul></section>
        
        
        
        </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-02b8d7c0.js.map
