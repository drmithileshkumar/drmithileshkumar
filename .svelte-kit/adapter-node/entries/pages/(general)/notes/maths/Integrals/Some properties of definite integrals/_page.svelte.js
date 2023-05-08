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
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""}
    <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1>
        <section><ul><li>\\(\\int_a^bf(x)dx = \\int_a^bf(t)dt\\)
                </li>
                <li>\\(\\int_a^bf(x)dx = -\\int_b^af(x)dx\\). In particular, \\(\\int_a^af(x)dx = 0\\)
                </li>
                <li>\\(\\int_a^bf(x)dx = \\int_a^cf(x)dx +\\int_c^bf(x)dx\\)
                </li>
                <li>\\(\\int_a^bf(x)dx = \\int_a^bf(a+b-x)dx\\)
                </li>
                <li>\\(\\int_0^af(x)dx = \\int_0^af(a-x)dx\\)
                </li>
                <li>\\(${escape(TeX.pow("\\int_0", "2a"))}f(x)dx = \\int_0^af(x)dx + \\int_0^af(2a-x)dx\\)
                </li>
                <li>\\(${escape(TeX.pow("\\int_0", "2a"))}f(x)dx = 2\\int_0^af(x)dx\\), if \\(f(2a-x)=f(x)\\) and 0 if \\(f(2a-x) = -f(x)\\)
                </li>
                <li>If \\(f\\) is an even function, i.e. if \\(f(-x) = f(x)\\), then \\(${escape(TeX.pow("\\int_{-a}", "a"))} = 2\\int_0^af(x)dx\\)
                </li>
                <li>If \\(f\\) is an odd function, i.e. if \\(f(-x) = -f(x)\\), then \\(${escape(TeX.pow("\\int_{-a}", "a"))}f(x)dx = 0\\)
                </li></ul></section>
        
        
        
        </article>`;
});
export {
  Page as default
};
