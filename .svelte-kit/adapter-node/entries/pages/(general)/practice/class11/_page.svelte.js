import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { M as Message } from "../../../../../chunks/Message.js";
/* empty css                                                       */
import "../../../../../chunks/client.js";
import { a as selectedChapter, s as selectedGenerator } from "../../../../../chunks/stores4.js";
import { P as Practice } from "../../../../../chunks/Practice.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedChapter, $$unsubscribe_selectedChapter;
  let $selectedGenerator, $$unsubscribe_selectedGenerator;
  $$unsubscribe_selectedChapter = subscribe(selectedChapter, (value) => $selectedChapter = value);
  $$unsubscribe_selectedGenerator = subscribe(selectedGenerator, (value) => $selectedGenerator = value);
  $$unsubscribe_selectedChapter();
  $$unsubscribe_selectedGenerator();
  return `${$$result.head += `<!-- HEAD_svelte-1430w95_START -->${$$result.title = `<title>XI Practice Mathematics</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/practice"><meta name="description" content="Learn and practice Physics and Mathematics for school, IIT JEE, Olympiad"><!-- HEAD_svelte-1430w95_END -->`, ""} <article><h2 data-svelte-h="svelte-1keu77z">Mathematics XI</h2> ${validate_component(Message, "Message").$$render($$result, {}, {}, {
    default: () => {
      return `<ul style="color:green;" data-svelte-h="svelte-dfq9zh"><li>Select a chapter to start solving problems.</li> <li>To generate similar problem type, click refresh button <span class="material-icons" style="vertical-align:middle;">refresh</span></li> <li>To generate next problem type, click next button <span class="material-icons" style="vertical-align:middle;">arrow_forward</span></li></ul>`;
    }
  })} <h3>${escape($selectedChapter)}</h3> ${$selectedGenerator ? `${validate_component(Practice, "Practice").$$render($$result, { generateProblem: $selectedGenerator }, {}, {})} <br>` : ``}</article>`;
});
export {
  Page as default
};
