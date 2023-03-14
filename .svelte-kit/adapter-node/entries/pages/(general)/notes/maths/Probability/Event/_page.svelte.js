import { c as create_ssr_component, b as subscribe, e as escape, f as add_attribute, r as add_classes } from "../../../../../../../chunks/index3.js";
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from "../../../../../../../chunks/stores2.js";
/* empty css                                                                  *//* empty css                                                                 */import { p as page } from "../../../../../../../chunks/stores.js";
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
        <section><ul><li><strong>Event:</strong> A subset of the sample space
                </li>
                <li><strong>Impossible event:</strong> The empty set
                </li>
                <li><strong>Sure event:</strong> The whole sample space
                </li>
                <li><strong>Complementary event or &#39;not&#39; event:</strong> The set \\(A&#39;\\) or \\(S-A\\)
                </li>
                <li><strong>Event \\(A\\) or \\(B\\):</strong> The set \\(A\\cup B\\)
                </li>
                <li><strong>Event \\(A\\) and \\(B\\):</strong> The set \\(A\\cap B\\)
                </li>
                <li><strong>Event \\(A\\) and not \\(B\\):</strong> The set \\(A-B\\)
                </li>
                <li><strong>Mutually exclusive event:</strong> \\(A\\) and \\(B\\) are mutually exclusive if \\(A\\cap B=\\phi\\)
                </li>
                <li><strong>Exhaustive and mutually exclusive events:</strong> Events \\(E_1, E_2,\\dots,E_n\\) are mutually exclusive and exhaustive if \\(E_1\\cup E_2\\cup\\cdots\\cup E_n = S\\) and \\(\\forall i\\neq j, E_i\\cap E_j = \\phi\\)
                </li></ul></section>
        
        
        
        </article>`;
});
export {
  Page as default
};
