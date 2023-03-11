import { c as create_ssr_component, d as subscribe, v as validate_component, e as escape } from './index3-f5b946c7.js';
import { M as Message } from './Message-16c0c389.js';
import { a as selectedChapter, s as selectedGenerator } from './stores3-878ee6e5.js';
import { P as Practice } from './Practice-7b08064b.js';
import './index2-3468083b.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedChapter, $$unsubscribe_selectedChapter;
  let $selectedGenerator, $$unsubscribe_selectedGenerator;
  $$unsubscribe_selectedChapter = subscribe(selectedChapter, (value) => $selectedChapter = value);
  $$unsubscribe_selectedGenerator = subscribe(selectedGenerator, (value) => $selectedGenerator = value);
  $$unsubscribe_selectedChapter();
  $$unsubscribe_selectedGenerator();
  return `${$$result.head += `<!-- HEAD_svelte-1jd0cmq_START -->${$$result.title = `<title>Practice Mathematics</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com/practice"}"><meta name="${"description"}" content="${"Learn and practice Physics and Mathematics for school, IIT JEE, Olympiad"}"><!-- HEAD_svelte-1jd0cmq_END -->`, ""}
<article><h2>Practice Mathematics</h2>
    ${validate_component(Message, "Message").$$render($$result, {}, {}, {
    default: () => {
      return `<ul style="${"color:green;"}"><li>Select a chapter to start solving problems.
            </li>
            <li>To generate similar problem type, click refresh button <span class="${"material-icons"}" style="${"vertical-align:middle;"}">refresh</span></li>
            <li>To generate next problem type, click next button <span class="${"material-icons"}" style="${"vertical-align:middle;"}">arrow_forward</span></li></ul>`;
    }
  })}
    <h3>${escape($selectedChapter)}</h3>
    ${$selectedGenerator ? `${validate_component(Practice, "Practice").$$render($$result, { generateProblem: $selectedGenerator }, {}, {})}
        <br>` : ``}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2e6a63b9.js.map
