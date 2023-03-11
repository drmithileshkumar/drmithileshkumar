import { c as create_ssr_component, d as subscribe, f as add_attribute, v as validate_component, e as escape } from './index3-f5b946c7.js';
import { T as Teacher } from './Teacher-af03edb1.js';
import { a as selectedChapter, s as selectedGenerator } from './stores3-878ee6e5.js';
import { P as Practice } from './Practice2-13940fbe.js';
import './index2-3468083b.js';

const css = {
  code: "article.svelte-198j990{overflow-x:auto}.katex{color:rgba(0, 175, 255, 1)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedChapter, $$unsubscribe_selectedChapter;
  let $selectedGenerator, $$unsubscribe_selectedGenerator;
  $$unsubscribe_selectedChapter = subscribe(selectedChapter, (value) => $selectedChapter = value);
  $$unsubscribe_selectedGenerator = subscribe(selectedGenerator, (value) => $selectedGenerator = value);
  let shorts;
  $$result.css.add(css);
  $$unsubscribe_selectedChapter();
  $$unsubscribe_selectedGenerator();
  return `${$$result.head += `<!-- HEAD_svelte-nfaqwe_START -->${$$result.title = `<title>Shorts Mathematics</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com/shorts/class12"}"><meta name="${"description"}" content="${"Learn and practice Physics and Mathematics for school, IIT JEE, Olympiad"}"><!-- HEAD_svelte-nfaqwe_END -->`, ""}
<article class="${"svelte-198j990"}"${add_attribute("this", shorts, 0)}><h2 style="${"color:green;"}">Mathematics XII</h2>
	${validate_component(Teacher, "Teacher").$$render($$result, {}, {}, {})}
	
	<h3 style="${"font-weight: 400;"}">${escape($selectedChapter)}</h3>
	${$selectedGenerator ? `${validate_component(Practice, "Practice").$$render($$result, { generateProblem: $selectedGenerator }, {}, {})}
		<br>` : ``}
</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-7344c6dc.js.map
