import { c as create_ssr_component, d as subscribe, e as escape, f as add_attribute, r as add_classes } from './index-caf19234.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from './stores2-7b617de3.js';
import { T as TeX } from './constants-e3dde4f2.js';
import { p as page } from './stores-f8df57c6.js';
import './index3-3865ea4a.js';

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
  return `${$$result.head += `<!-- HEAD_svelte-fc07ip_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-fc07ip_END -->`, ""}
    <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1>
        <section><ul><li>If in a circle of radius \\(r\\), an arc of length \\(l\\) subtends an angle of \\(\\theta\\) radians, then \\(l = r\\theta\\)
            </li>
            <li>Radian measure = \\(${escape(TeX.dfrac("\\pi", 180))}\\times\\) Degree measure
            </li>
            <br>
            <li>Degree measure = \\(${escape(TeX.dfrac(180, "\\pi"))}\\times\\) Radian measure
            </li></ul></section>
        
        
        
        </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ccc9564f.js.map
