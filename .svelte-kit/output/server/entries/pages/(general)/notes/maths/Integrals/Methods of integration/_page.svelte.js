import { c as create_ssr_component, a as subscribe, e as escape, i as add_attribute, A as add_classes } from "../../../../../../../chunks/index3.js";
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from "../../../../../../../chunks/stores2.js";
/* empty css                                                                  *//* empty css                                                                 */import { T as TeX } from "../../../../../../../chunks/constants.js";
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
  return `${$$result.head += `<!-- HEAD_svelte-108lu2z_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedChapter + " " + $selectedSection, 0)}><!-- HEAD_svelte-108lu2z_END -->`, ""}
    <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1>
        <section><h2>Integration by Substitution</h2>
            <p>The given integral \\(\\int f(x)dx\\) can be transformed into another form by changing the independent variable \\(x\\) to \\(t\\) by substituting \\(x = g(t)\\).
            </p>
            <p>Consider \\(I = \\int f(x)dx\\)
            </p>
            <p>Put \\(x = g(t)\\) so that \\(${escape(TeX.dfrac("dx", "dt"))} = g&#39;(t)\\implies dx = g&#39;(t)dt\\)
            </p>
            <p>\\(I = \\int f(x)dx = \\int f(g(t))g&#39;(t)dt\\)
            </p></section>
        <section><h2>Integration using trigonometric identities</h2></section>
        <section><table><tr><td>\\(\\int\\tan xdx = \\log|\\sec x| + C\\)
                    </td>
                    <td>\\(\\int\\cot xdx = \\log|\\sin x| + C\\)
                    </td></tr>
                <tr><td>\\(\\int\\sec xdx = \\log|\\sec x + \\tan x| + C\\)
                    </td>
                    <td>\\(\\int${escape(TeX.cosec)} xdx = \\log|${escape(TeX.cosec)}x - \\cot x| + C\\)
                    </td></tr></table></section>
        
        
        </article>`;
});
export {
  Page as default
};
