import { c as create_ssr_component, b as subscribe, e as escape, l as add_attribute, u as add_classes } from './ssr-QYhyCQFk.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, p as presentationMode, a as presentation } from './stores3-N3vs8YOS.js';
import { T as TeX } from './constants-TOZ-JGRv.js';
import { p as page } from './stores-LjwRQ76V.js';
import './index2-2iq6SjbL.js';
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
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section><div class="definition"><p>Suppose \\(f\\) is a real function. Then, the function defined by ${escape(`\\[
                    f'(x) = \\lim_{h\\to 0}\\frac{f(x + h) - f(x)}{h}\\]`)} wherever the limit exists is defined to be the derivative of \\(f\\).</p></div> <div class="theorem" data-svelte-h="svelte-1p146h1"><p>If a function \\(f\\) is differentiable at a point \\(c\\), then it is also continuous at that point.</p></div> <div class="theorem"><p><strong data-svelte-h="svelte-g2yzd1">Chain Rule:</strong> Let \\(f\\) be a real valued function which is a composite of two functions \\(u\\) and \\(v\\); i.e. \\(f = v\\circ u\\). Suppose \\(t = u(x)\\) and if both \\(${escape(TeX.dfrac("dt", "dx"))}\\) and \\(${escape(TeX.dfrac("dv", "dt"))}\\) exist, we have ${escape(`\\[\\frac{df}{dx} = \\frac{dv}{dt}\\cdot \\frac{dt}{dx}\\]`)}</p></div> <table><tr><td>\\(${escape(TeX.dfrac("d", "dx"))}(${escape(TeX.asin)}x) = ${escape(TeX.dfrac(1, TeX.sqrt("1-x^2")))}\\)</td> <td>\\(${escape(TeX.dfrac("d", "dx"))}(${escape(TeX.acos)}x) = -${escape(TeX.dfrac(1, TeX.sqrt("1-x^2")))}\\)</td></tr> <tr><td>\\(${escape(TeX.dfrac("d", "dx"))}(${escape(TeX.atan)}x) = ${escape(TeX.dfrac(1, "1+x^2"))}\\)</td> <td>\\(${escape(TeX.dfrac("d", "dx"))}(${escape(TeX.acot)}x) = -${escape(TeX.dfrac(1, "1+x^2"))}\\)</td></tr> <tr><td>\\(${escape(TeX.dfrac("d", "dx"))}(${escape(TeX.asec)}x) = ${escape(TeX.dfrac(1, "x" + TeX.sqrt("1-x^2")))}\\)</td> <td>\\(${escape(TeX.dfrac("d", "dx"))}(${escape(TeX.acosec)}x) = -${escape(TeX.dfrac(1, "x" + TeX.sqrt("1-x^2")))}\\)</td></tr></table></section>  </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-pBcSEwud.js.map
