import { c as create_ssr_component, d as subscribe, e as escape, f as add_attribute, r as add_classes } from './index-caf19234.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from './stores2-857f0e53.js';
import { T as TeX } from './constants-b4a0d30f.js';
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
        <section><ul><li>\\(\\sin x = 0\\) gives \\(x = n\\pi\\), where \\(n${escape(TeX.inZ)}\\)
            </li>
            <li>\\(\\cos x = 0\\) gives \\(x = (2n + 1)${escape(TeX.dfrac("\\pi", "2"))}\\), where \\(n${escape(TeX.inZ)}\\)
            </li>
            <li>\\(\\sin x = \\sin y\\) implies \\(x = n\\pi + (-1)^n y\\), where \\(n${escape(TeX.inZ)}\\)
            </li>
            <li>\\(\\cos x = \\cos y\\) implies \\(x = 2n\\pi \\pm y\\), where \\(n${escape(TeX.inZ)}\\)
            </li>
            <li>\\(\\tan x = \\tan y\\) implies \\(x = n\\pi + y\\), where \\(n${escape(TeX.inZ)}\\)
            </li></ul></section>
        
        
        
        </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-4032d6dc.js.map
