import { c as create_ssr_component, a as subscribe, e as escape, k as add_attribute, A as add_classes } from "../../../../../../../chunks/index3.js";
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from "../../../../../../../chunks/stores2.js";
import "../../../../../../../chunks/stores3.js";
import "../../../../../../../chunks/Practice.svelte_svelte_type_style_lang.js";
/* empty css                                                                 */import { T as TeX } from "../../../../../../../chunks/constants.js";
import { p as page } from "../../../../../../../chunks/stores.js";
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
        <section><ul><li>\\(\\cos^2x + \\sin^2x = 1\\)
            </li>
            <li>\\(1 + \\tan^2x = \\sec^2x\\)
            </li>
            <li>\\(\\cot^2x + 1 = ${escape(TeX.text("cosec"))}^2x\\)
            </li>
            <li>\\(\\cos(2n\\pi + x) = \\cos x\\)
            </li>
            <li>\\(\\sin(2n\\pi + x) = \\sin x\\)
            </li>
            <li>\\(\\sin(-x) = -\\sin x\\)
            </li>
            <li>\\(\\cos(-x) = \\cos x\\)
            </li>
            <li>\\(\\cos(${escape(TeX.dfrac("\\pi", 2))} -x) = \\sin x\\)
            </li>
            <br>
            <li>\\(\\sin(${escape(TeX.dfrac("\\pi", 2))} -x) = \\cos x\\)
            </li></ul></section>
        
        
        
        </article>`;
});
export {
  Page as default
};
