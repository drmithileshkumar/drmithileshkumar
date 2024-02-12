import { a as subscribe } from './utils-yAS0eczJ.js';
import { c as create_ssr_component, e as escape, d as add_attribute, n as add_classes } from './ssr-APL1hDOv.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from './stores4-oqF8qUAY.js';
import { T as TeX } from './constants-TOZ-JGRv.js';
import { p as page } from './stores-nClpd4CO.js';
import './index2-NBMbjtFx.js';
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
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section><div class="definition"><p>We say \\(${escape(TeX.lim("x", "a^-"))}f(x)\\) is the expected value of \\(f\\) at \\(x = a\\) given the values of \\(f\\) near \\(x\\) to the left of \\(a\\). This value is called the <em data-svelte-h="svelte-1yty0jl">left hand limit</em> of \\(f\\) at \\(a\\).</p> <p>We say \\(${escape(TeX.lim("x", "a^+"))}f(x)\\) is the expected value of \\(f\\) at \\(x = a\\) given the values of \\(f\\) near \\(x\\) to the right of \\(a\\). This value is called the <em data-svelte-h="svelte-18mo9j6">right hand limit</em> of \\(f\\) at \\(a\\).</p> <p>If the right and left hand limits coincide, we call that common value as the limit of \\(f(x)\\) at \\(x = a\\) and denote it by \\(${escape(TeX.lim("x", "a"))}f(x)\\)</p></div> <ul><li style="padding-top: 0.5em;">\\(${escape(TeX.lim("x", "a"))}${escape(TeX.dfrac("x^n - a^n", "x-a"))} = n${escape(TeX.pow("a", "n-1"))}\\)</li> <li style="padding-top: 0.5em;">\\(${escape(TeX.lim("x", 0))}${escape(TeX.dfrac("\\sin x", "x"))} = 1\\)</li> <li style="padding-top: 0.5em;">\\(${escape(TeX.lim("x", 0))}${escape(TeX.dfrac("1-\\cos x", "x"))} = 0\\)</li></ul></section> <section><h2 data-svelte-h="svelte-3mpgux">Algebra of limits</h2> <p>Let \\(f\\) and \\(g\\) be two functions such that both \\(${escape(TeX.lim("x", "a"))}f(x)\\) and \\(${escape(TeX.lim("x", "a"))}g(x)\\) exist. Then,</p> <ol><li>Limit of sum of two functions is sum of the limits of the functions, i.e.,
                    \\[${escape(TeX.lim("x", "a"))}[f(x) + g(x)] = ${escape(TeX.lim("x", "a"))}f(x) + ${escape(TeX.lim("x", "a"))} g(x)\\]</li> <li>Limit of difference of two functions is difference of the limits of the functions, i.e.,
                    \\[${escape(TeX.lim("x", "a"))}[f(x) - g(x)] = ${escape(TeX.lim("x", "a"))}f(x) - ${escape(TeX.lim("x", "a"))} g(x)\\]</li> <li>Limit of product of two functions is product of the limits of the functions, i.e.,
                    \\[${escape(TeX.lim("x", "a"))}[f(x) \\cdot g(x)] = ${escape(TeX.lim("x", "a"))}f(x) \\cdot ${escape(TeX.lim("x", "a"))} g(x)\\]</li> <li>Limit of quotient of two functions is quotient of the limits of the functions ( whenever the denominator is non-zero ), i.e.,
                    \\[${escape(TeX.lim("x", "a"))}${escape(TeX.frac("f(x)", "g(x)"))} = ${escape(TeX.frac(TeX.lim("x", "a") + "f(x)", TeX.lim("x", "a") + "g(x)"))}\\]</li></ol></section>  </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DJ8EHslw.js.map
