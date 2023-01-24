import { c as create_ssr_component, d as subscribe, f as add_attribute, e as escape, v as validate_component } from './index3-f5b946c7.js';
import { a as selectedChapter, s as selectedGenerator } from './stores3-878ee6e5.js';
import { P as Practice } from './Practice2-ed9354e9.js';
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
  return `${$$result.head += `<!-- HEAD_svelte-f1es08_START -->${$$result.title = `<title>Shorts Mathematics</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com/practice"}"><meta name="${"description"}" content="${"Learn and practice Physics and Mathematics for school, IIT JEE, Olympiad"}"><!-- HEAD_svelte-f1es08_END -->`, ""}
<article class="${"svelte-198j990"}"${add_attribute("this", shorts, 0)}><h2 style="${"color:green;"}">Class XI XII Mathematics</h2>
	
	<h3 style="${"font-weight: 400;"}">${escape($selectedChapter)}</h3>
	${$selectedGenerator ? `${validate_component(Practice, "Practice").$$render($$result, { generateProblem: $selectedGenerator }, {}, {})}
		<br>` : ``}
</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-908a2f93.js.map
