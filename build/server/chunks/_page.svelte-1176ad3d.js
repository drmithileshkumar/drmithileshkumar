import { c as create_ssr_component, d as subscribe, v as validate_component, e as escape } from './index-87a5488c.js';
import { a as selectedChapter, s as selectedGenerator } from './stores3-025412b1.js';
import { P as Practice } from './Practice-20cc213b.js';
import './index3-41f46450.js';

const css = {
  code: ".message.svelte-5cmsvs{display:flex;padding:0.5em 1em;align-items:center;flex-direction:row;gap:0.5em;justify-content:space-between;background:rgb(255, 255, 225);font-weight:400;font-size:0.9em;bottom:2em;margin-top:1em;margin-bottom:1em}span.svelte-5cmsvs{cursor:pointer}span.svelte-5cmsvs:hover{font-weight:600}",
  map: null
};
const Message = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = true } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css);
  return `${open ? `<div class="${"message svelte-5cmsvs"}"><div class="${"body"}">${slots.default ? slots.default({}) : ``}</div>
    <span class="${"material-icons svelte-5cmsvs"}">close</span></div>` : ``}`;
});
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
//# sourceMappingURL=_page.svelte-1176ad3d.js.map
