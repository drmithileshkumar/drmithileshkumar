import { c as create_ssr_component, b as subscribe, e as escape, k as add_attribute, A as add_classes } from './index3-343e8927.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from './stores2-777b8818.js';
import { T as TeX } from './constants-e3dde4f2.js';
import { p as page } from './stores-da0a4a87.js';
import './index2-0c17521e.js';

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
        <section><ul><li style="${"display: flex;"}"><table><tr><td>${escape(`\\[
                                \\begin{aligned}
                                \\cos(\\frac{\\pi}{2} + x) &= -\\sin x\\\\
                                \\cos(\\pi - x) &= -\\cos x\\\\
                                \\cos(\\pi + x) &= \\cos x\\\\
                                \\cos(2\\pi - x) &= \\cos x
                                \\end{aligned}
                                \\]`)}</td>
                        <td>${escape(`\\[
                                \\begin{aligned}
                                \\sin(\\frac{\\pi}{2} + x) &= \\cos x\\\\
                                \\sin(\\pi - x) &= \\sin x\\\\
                                \\sin(\\pi + x) &= -\\sin x\\\\
                                \\sin(2\\pi - x) &= -\\sin x
                                \\end{aligned}
                                \\]`)}</td></tr></table></li>
            <li>If none of the angles \\(x,y\\) and \\((x\\pm y)\\) is an odd multiple of \\(${escape(TeX.dfrac("\\pi", "2"))}\\), then \\[\\tan(x + y) = ${escape(TeX.frac("\\tan x + \\tan y", "1 - \\tan x \\tan y"))}\\]
            </li>
            <li>If none of the angles \\(x,y\\) and \\((x\\pm y)\\) is an odd multiple of \\(\\pi\\), then \\[\\cot(x + y) = ${escape(TeX.frac("\\cot x \\cot y - 1", "\\cot x + \\cot y"))}\\]
            </li>
            <li>\\(\\cos 2x = \\cos^2x - \\sin^2x = 2\\cos^2x - 1 = 1 - 2\\sin^2x = ${escape(TeX.dfrac("1-\\tan^2x", "1+\\tan^2x"))}\\)
            </li>
            <li>\\(\\sin 2x = 2\\sin x \\cos x = ${escape(TeX.dfrac("2\\tan x", "1 + \\tan^2x"))}\\)
            </li>
            <li>\\(\\tan 2x = ${escape(TeX.dfrac("2\\tan x", "1 - \\tan^2x"))}\\)
            </li>
            <li>\\(\\sin 3x = 3\\sin x - 4\\sin^3x\\)
            </li>
            <li>\\(\\cos 3x = 4\\cos^3x - 3\\cos x\\)
            </li>
            <li>\\(\\tan 3x = ${escape(TeX.dfrac("3\\tan x - \\tan^3x", "1 - 3\\tan^2x"))}\\)
            </li>
            <li><ol><li style="${"padding-top: 0.5em;"}">\\(\\cos x + \\cos y = 2\\cos ${escape(TeX.dfrac("x + y", "2"))} \\cos${escape(TeX.dfrac("x-y", "2"))}\\)
                    </li>
                    <li style="${"padding-top: 0.5em;"}">\\(\\cos x - \\cos y = -2\\sin ${escape(TeX.dfrac("x + y", "2"))} \\sin${escape(TeX.dfrac("x-y", "2"))}\\)
                    </li>
                    <li style="${"padding-top: 0.5em;"}">\\(\\sin x + \\sin y = 2\\sin ${escape(TeX.dfrac("x + y", "2"))} \\cos${escape(TeX.dfrac("x-y", "2"))}\\)
                    </li>
                    <li style="${"padding-top: 0.5em;"}">\\(\\sin x - \\sin y = 2\\cos ${escape(TeX.dfrac("x + y", "2"))} \\sin${escape(TeX.dfrac("x-y", "2"))}\\)
                    </li></ol></li>
            <li><ol><li>\\(2\\cos x \\cos y = \\cos(x + y) + \\cos(x-y)\\)
                    </li>
                    <li>\\(-2\\sin x \\sin y = \\cos(x + y) - \\cos(x -y)\\)
                    </li>
                    <li>\\(2\\sin x \\cos y = \\sin(x + y) + \\sin(x - y)\\)
                    </li>
                    <li>\\(2\\cos x \\sin y = \\sin(x + y) - \\sin(x - y)\\)
                    </li></ol></li></ul></section>
        
        
        
        </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d3c037db.js.map
