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
  return `${$$result.head += `<!-- HEAD_svelte-fc07ip_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-fc07ip_END -->`, ""}
    <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1>
        <section><ul><li><em>Empty relation</em> is the relation \\(R\\) in \\(X\\) given by \\(R=\\phi\\subset X\\times X\\)
                </li>
                <li><em>Universal relation</em> is the relation \\(R\\) in \\(X\\) given by \\(R = X\\times X\\)
                </li>
                <li><em>Reflexive relation</em> \\(R\\) in \\(X\\) is a relation with \\(\\forall a\\in X\\quad(a,a)\\in R\\)
                </li>
                <li><em>Symmetric relation</em> \\(R\\) in \\(X\\) is a relation satisfying \\((a,b)\\in R\\implies (b,a)\\in R\\) 
                </li>
                <li><em>Transitive relation</em> \\(R\\) in \\(X\\) is a relation satisfying \\((a,b), (b,c)\\in R\\implies (a,c)\\in R\\)
                </li>
                <li><em>Equivalence relation</em> \\(R\\) in \\(X\\) is a relation which is reflexive, symmetric, and transitive.
                </li>
                <li><em>Equivalence class \\([a]\\)</em> containing \\(a\\in X\\) for an equivalence relation \\(R\\) in \\(X\\) is the subset of \\(X\\) containing all elements \\(b\\) related to \\(a\\).
                </li></ul></section>
        
        
        
        </article>`;
});
export {
  Page as default
};
