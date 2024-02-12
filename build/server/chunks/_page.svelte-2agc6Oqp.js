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
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""} <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1> <section data-svelte-h="svelte-1lr0csf"><p>A plane is determined uniquely if any one of the following is known:</p> <ul><li>the normal to the plane and its distance from the origin is given, i.e. equaton of a plane in normal form.</li> <li>it passes through a point and is perpendicular to a given direction.</li> <li>it passes through three given non collinear points.</li></ul></section> <section><ul><li>The equation of a plane whose perpendicular distance from the origin is \\(d\\) and normal vector is \\(${escape(TeX.hat("n"))}\\) is \\[${escape(TeX.vec("r"))}\\cdot${escape(TeX.hat("n"))} = d\\]</li> <li>\\(ax + by + cz = d\\) is equation of a plane whose normal vector is along \\(a${escape(TeX.hat("i"))} + b${escape(TeX.hat("j"))} + c${escape(TeX.hat("k"))}\\) and distance from the origin is proportional to \\(d\\).</li> <li>Equation of a plane passing through a point ${escape(`\\(\\vec{a}\\)`)} and perpendicular to a vector ${escape(`\\(\\hat{n}\\)`)} is given by ${escape(`\\[(\\vec{r} - \\vec{a})\\cdot \\hat{n} = 0\\]`)}</li> <li>Equation of a plane passing through three non-colinear points ${escape(`\\(\\vec{a}, \\vec{b}, \\vec{c}\\)`)} and perpendicular to a vector ${escape(`\\(\\hat{n}\\)`)} is given by ${escape(`\\[(\\vec{r} - \\vec{a})\\cdot [(\\vec{b} - \\vec{a})\\times (\\vec{c} - \\vec{a})] = 0\\]`)}</li> <li>Equation of a plane passing through the intersection of two given planes \\[${escape(TeX.vec("r"))}\\cdot(${escape(TeX.hat("n"))}_1 + \\lambda ${escape(TeX.hat("n"))}_2) = d_1 + \\lambda d_2\\]</li></ul></section>  </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2agc6Oqp.js.map
