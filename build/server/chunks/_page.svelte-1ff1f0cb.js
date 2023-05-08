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
        <section><div class="${"definition"}"><p>Given that \\(${escape(TeX.dydx())} = f(x)\\), we write \\(y = \\int f(x)dx\\)
                </p></div></section>
        <section><h2>Some properties of indefinite integral</h2>
            <ol><li>The process of differentiation and integration are inverses of each other in the sense that 
                    ${escape(`\\(\\dfrac{d}{dx}\\int f(x)dx = f(x)\\)`)} and ${escape(`\\(\\int f'(x)dx = f(x) + C\\)`)}, where \\(C\\) is any arbitrary constant.
                </li>
                <li>Two indefinite integrals with the same derivative lead to the same family of curves and so they are equivalent.
                </li>
                <li>${escape(`\\(\\int[f(x) + g(x)]dx = \\int f(x)dx + \\int g(x)dx\\)`)}</li>
                <li>For any real number \\(k\\), ${escape(`\\(\\int kf(x)dx = k\\int f(x)dx\\)`)}</li></ol></section>
        
        
        
        </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-1ff1f0cb.js.map
