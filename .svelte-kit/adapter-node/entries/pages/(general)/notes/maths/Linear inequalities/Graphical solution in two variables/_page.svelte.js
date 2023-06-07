import { c as create_ssr_component, a as subscribe, e as escape, i as add_attribute, A as add_classes } from "../../../../../../../chunks/index3.js";
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
        <section><ul><li>The region containing all the solutions of an inequality is called the <em>solution region</em>.
            </li>
            <li>In order to identify the half plane represented by an inequality, it is just sufficient to take any point \\((a, b)\\) ( not online ) and check whether it satisfies the inequality or not. If it satisfies, then the inequality represents the half plane and shade the region which contains the point, otherwise, the inequality represents that half plane which does not contain the point within it. For convenience, the point \\((0, 0)\\) is preferred.
            </li>
            <li>If an inequality is of type \\(ax + by \\geq c\\) or \\( ax + by \\leq c\\), then the points on the line \\(ax + by = c\\) are also included in the solution region. So draw a dark line in the solution region.
            </li>
            <li>If an inequality is of type \\(ax + by ${escape(TeX.more)} c\\) or \\( ax + by ${escape(TeX.less)} c\\), then the points on the line \\(ax + by = c\\) are not included in the solution region. So draw a broken or dotted line in the solution region.
            </li></ul></section>
        
        
        
        </article>`;
});
export {
  Page as default
};
