import { a as subscribe } from './utils-DH7689cv.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-Cv_bEuJL.js';
import { M as Message } from './Message-CdtHNkR5.js';
import './client-CjdeEz1m.js';
import { a as selectedChapter, s as selectedGenerator } from './stores4-rYFnb3Dq.js';
import { P as Practice } from './Practice-C1EGdlLk.js';
import './exports-DuWZopOC.js';
import './index2-B3zlhmO5.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedChapter, $$unsubscribe_selectedChapter;
  let $selectedGenerator, $$unsubscribe_selectedGenerator;
  $$unsubscribe_selectedChapter = subscribe(selectedChapter, (value) => $selectedChapter = value);
  $$unsubscribe_selectedGenerator = subscribe(selectedGenerator, (value) => $selectedGenerator = value);
  $$unsubscribe_selectedChapter();
  $$unsubscribe_selectedGenerator();
  return `${$$result.head += `<!-- HEAD_svelte-57s2ec_START -->${$$result.title = `<title>XII Practice Mathematics</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/practice"><meta name="description" content="Learn and practice Physics and Mathematics for school, IIT JEE, Olympiad"><!-- HEAD_svelte-57s2ec_END -->`, ""} <article><h2 data-svelte-h="svelte-1iprkr6">Mathematics XII</h2> ${validate_component(Message, "Message").$$render($$result, {}, {}, {
    default: () => {
      return `<ul style="color:green;" data-svelte-h="svelte-dfq9zh"><li>Select a chapter to start solving problems.</li> <li>To generate similar problem type, click refresh button <span class="material-icons" style="vertical-align:middle;">refresh</span></li> <li>To generate next problem type, click next button <span class="material-icons" style="vertical-align:middle;">arrow_forward</span></li></ul>`;
    }
  })} <h3>${escape($selectedChapter)}</h3> ${$selectedGenerator ? `${validate_component(Practice, "Practice").$$render($$result, { generateProblem: $selectedGenerator }, {}, {})} <br>` : ``}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CtYGh6cP.js.map
