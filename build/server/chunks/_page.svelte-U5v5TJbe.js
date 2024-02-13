import { a as subscribe } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, e as escape, h as add_attribute, n as add_classes } from './ssr-HSn4Y_Gl.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, p as presentationMode, a as presentation } from './stores4-uhob_-DC.js';
import { T as TeX } from './constants-TOZ-JGRv.js';
import { p as page } from './stores-J1hWMOsb.js';
import './index2-z1g76_ny.js';
import './client-_MkdHwD5.js';
import './exports-mq_1S73-.js';

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
  return `${$$result.head += `<!-- HEAD_svelte-fc07ip_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-fc07ip_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section data-svelte-h="svelte-ypowm0"><div class="definition"><p><strong>Function</strong> A function \\(f\\) from a set \\(A\\) to a set \\(B\\) is a specific type of relation for which every element \\(x\\) of set \\(A\\) has one and only one image \\(y\\) in set \\(B\\). We write \\(f:A\\to B\\), where \\(f(x) = y\\).</p></div> <ul><li>\\(A\\) is the domain and \\(B\\) is the codomain of \\(f\\).</li> <li>The range of the function is the set of images.</li> <li>A real function has the set of real numbers or one of its subsets both as its domain and as its range.</li></ul></section> <section><h2 data-svelte-h="svelte-c2jfu0">Algebra of real functions</h2> <p>For functions \\(f:X\\to R\\) and \\(g:X\\to R\\), we have 
                    ${escape(`\\[
                        \\begin{aligned}
                            (f + g)(x) &= f(x) + g(x), x\\in X\\\\
                            (f - g)(x) &= f(x) - g(x), x\\in X\\\\
                            (f\\cdot g)(x) &= f(x)\\cdot g(x), x\\in X\\\\
                            (kf)(x) &= k~f(x), x\\in X, k${TeX.inR}\\\\
                            \\Big(\\frac{f}{g}\\Big)(x) &= \\frac{f(x)}{g(x)}, x\\in X, g(x) \\neq 0
                        \\end{aligned}    
                    \\]`)}</p></section>  </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-U5v5TJbe.js.map
