import { c as create_ssr_component, b as subscribe, e as escape, k as add_attribute, A as add_classes } from './index3-56178c7e.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from './stores2-a34ce954.js';
import { T as TeX } from './constants-e3dde4f2.js';
import { p as page } from './stores-94dce133.js';
import './index2-f0b96196.js';

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
        <section><div class="definition"><p>Let \\(f\\) be a function defined on an interval \\(I\\). Then
                </p>
                <ol><li>\\(f\\) is said to have a <em>maximum value</em> in \\(I\\), if there exists a point \\(c\\) in \\(I\\) such that \\(f(c)${escape(TeX.more)}f(x)\\), for all \\(x\\in I\\). The number \\(f(c)\\) is called the maximum value of \\(f\\) in \\(I\\) and the point \\(c\\) is called a <em>point of maximum value </em> of \\(f\\) in \\(I\\). 
                    </li>
                    <li>\\(f\\) is said to have a <em>minimum value</em> in \\(I\\), if there exists a point \\(c\\) in \\(I\\) such that \\(f(c)${escape(TeX.less)}f(x)\\), for all \\(x\\in I\\). The number \\(f(c)\\) is called the minimum value of \\(f\\) in \\(I\\) and the point \\(c\\) is called a <em>point of minimum value </em> of \\(f\\) in \\(I\\). 
                    </li>
                    <li>\\(f\\) is said to have an extreme value in \\(I\\) if there exists a point \\(c\\) in \\(I\\) such that \\(f(c)\\) is either a maximum value or a minimum value of \\(f\\) in \\(I\\). The number \\(f(c)\\), in this case, is called an <em>extreme value </em> of \\(f\\) in \\(I\\) and the point \\(c\\) is called an <em>extreme point</em>.
                    </li></ol></div>
            <div class="definition"><p>By a monotonic function \\(f\\) in an interval \\(I\\), we mean that \\(f\\) is either increasing in \\(I\\) or decreasing in \\(I\\).
                </p></div>
            <div class="theorem"><p>Let \\(f\\) be a function defined on an open interval \\(I\\). Suppose \\(c\\in I\\) be any point. If \\(f\\) has a local maxima or a local minima at \\(x = c\\), then either \\(f&#39;(c) = 0\\) or \\(f\\) is not differentiable at \\(c\\).
                </p></div></section>
        
        
        
        </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-cf90bff0.js.map
