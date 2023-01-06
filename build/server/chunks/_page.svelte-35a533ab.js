import { c as create_ssr_component, d as subscribe, e as escape, f as add_attribute, r as add_classes } from './index-caf19234.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from './stores2-60a97389.js';
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
        <section><div class="${"definition"}"><p><strong>Ordered pair:</strong> A pair of elements grouped together in a particular order.
               </p></div>
           <div class="${"definition"}"><p><strong>Cartesian product</strong> \\(A\\times B\\) of two sets \\(A\\) and \\(B\\) is given by \\[A\\times B = ${escape(TeX.set("(a,b)", "a\\in A, b\\in B"))}\\] 
                    In particular, \\(${escape(TeX.bbR)}\\times ${escape(TeX.bbR)} = ${escape(TeX.set("(x,y)", `x,y${TeX.inR}`))}\\) and \\[${escape(TeX.bbR)}\\times ${escape(TeX.bbR)} \\times ${escape(TeX.bbR)} = ${escape(TeX.set("(x,y, z)", `x,y,z${TeX.inR}`))}\\] 
                </p></div>
            <ul><li>If \\((a,b) = (x,y)\\), then \\(a = x\\) and \\(b = x\\).
                </li>
                <li>If \\(n(A) = p\\) and \\(n(B) = q\\), then \\(n(A\\times B) = pq\\).
                </li>
                <li>\\(A\\times\\phi = \\phi\\)
                </li>
                <li>In general, \\(A\\times B \\neq B\\times A\\).
                </li></ul></section>
        
        
        
        </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-35a533ab.js.map
