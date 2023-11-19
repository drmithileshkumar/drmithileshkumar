import { c as create_ssr_component, b as subscribe, e as escape, k as add_attribute, w as add_classes } from './index3-ea5e928f.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from './stores2-1fe27092.js';
import { p as page } from './stores-45c9804a.js';
import './index2-ab5ba032.js';

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
        <section><div class="definition"><p>Procedure to form a differential equation that will represent a given family of curves
                </p>
                <ol><li>If the given family \\(F_1\\) of curves depends on only one parameter then it is represented by an equation of the form \\[F_1(x,y,a) = 0\\]
                        Differentiating this equation with respect to \\(x\\), we get an equation involving \\(y&#39;, y, x,\\) and \\(a\\), i.e. \\[g(x,y,y&#39;,a) = 0\\]
                        The required differential equation is then obtained by eliminating \\(a\\) from these equations \\[F(x,y,y&#39;) = 0\\]
                    </li>
                    <li>If the given family \\(F_2\\) of curves depends on two parameters then it is represented by an equation of the form \\[F_2(x,y,a,b) = 0\\]
                        Differentiating this equation with respect to \\(x\\), we get an equation involving \\(y&#39;, y, x,a\\) and \\(b\\), i.e. \\[g(x,y,y&#39;,a,b) = 0\\]
                        But it is not possible to eliminate two parameters \\(a\\) and \\(b\\) from the two equations and so, we need a third equation. This equation is obtained by differentiating this equation, with respect to \\(x\\), to obtain a relation of the form \\[h(x,y,y&#39;,y&#39;&#39;,a,b)=0\\]
                        The required differential equation is then obtained by eliminating \\(a\\) and \\(b\\) from these equations \\[F(x,y,y&#39;,y&#39;&#39;) = 0\\]
                    </li></ol></div></section>
        
        
        
        </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-584677c5.js.map
