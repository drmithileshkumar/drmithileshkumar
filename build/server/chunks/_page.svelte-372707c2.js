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
        <section><div class="${"definition"}"><p>The area of the region enclosed between two curves \\(y=f(x), y = g(x)\\) and the lines \\(x=a,x=b\\) is given by \\[A = \\int_a^b[f(x) - g(x)]dx\\] where \\(f(x)\\geq g(x)\\) in \\([a,b]\\)
                </p>
                <p>If \\(f(x)\\geq g(x)\\) in \\([a, c]\\) and \\(f(x)\\leq g(x)\\) in \\([c, b]\\), for \\(a${escape(TeX.less)} c ${escape(TeX.less)} b\\), then \\[\\int_a^c[f(x) - g(x)]dx + \\int_c^b[g(x) - f(x)]dx\\]
                </p></div></section>
        
        
        
        </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-372707c2.js.map
