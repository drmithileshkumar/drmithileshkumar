import { c as create_ssr_component, d as subscribe, e as escape, f as add_attribute, r as add_classes } from './index3-f5b946c7.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from './stores2-0ea907fa.js';
import { T as TeX } from './constants-e3dde4f2.js';
import { p as page } from './stores-de16fb70.js';
import './index2-3468083b.js';

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
        <section><ul><li><strong>Zero Vector:</strong> A vector whose initial and terminal points coincide, is called a zero vector ( or null vector ), and denoted as 0. Zero vector can not be assigned a definite direction as it has zero magnitude. Or, alternatively otherwise, it may be regarded as having any direction.
                </li>
                <li><strong>Unit Vector:</strong> A vector whose magnitude is unity is called a unit vector. The unit vector in the direction of a given vector \\(a\\) is denoted by \\(${escape(TeX.hat("a"))}\\).
                </li>
                <li><strong>Coinitial Vectors:</strong> Two or more vectors having the same initial point are called coinitial vectors.
                </li>
                <li><strong>Collinear Vectors:</strong> Two or more vectors are said to be collinear if they are parallel to the same line, irrespective of their magnitude and directions.
                </li>
                <li><strong>Equal Vectors:</strong> Two vectors \\(a\\) and \\(b\\) are said to be equal, if they have the same magnitude and direction regardless of the positions of their initial points, and written as \\(a = b\\)
                </li>
                <li><strong>Negative of a Vector:</strong> A vector whose magnitude is the same as that of a given vector, but direction is opposite to that of it, is called negative of the given vector. For example, vector BA is negative of the vector AB, and written as BA = -BA.
                </li></ul>
            <div class="${"remark"}"><p>The vector defined above are such that any of them may be subject to its parallel displacement without changing its magnitude and direction. Such vectors are called <em>free vectors</em>. 
                </p></div></section>
        
        
        
        </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-cd9277c4.js.map
