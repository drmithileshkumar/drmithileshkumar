import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, e as escape, i as each } from './ssr-HSn4Y_Gl.js';
import { p as page } from './stores-J1hWMOsb.js';
import './client-_MkdHwD5.js';
import './ActionIcons-o14w9cnK.js';
import './Suffix-ybHP5eir.js';
import { c as currentPath } from './stores3-yqJRp7mD.js';
import { A as Assignment } from './Assignment-yNsqkjmr.js';
import { S as ShowQuestion } from './ShowQuestion-xkiYTC11.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './index2-z1g76_ny.js';
import './Card-w5WL3--T.js';
import './Actions-d1scvOhV.js';
import './Button-FylIdC7C.js';
import './Ripple-IoYaH5-z.js';
import './Text-BdLt2y7P.js';
import './ContextFragment-h_zhkUzP.js';
import './Textfield-wU2X7R0w.js';
import './prefixFilter-IAYI75FL.js';
import './NotchedOutline-ZS7UkzLO.js';
import './CommonLabel-QaCL5f48.js';
import './Checkbox-Msw7lxtv.js';
import './FormField-hBqnQrbd.js';
import './SelectionGroupIcon-hfGPm6DC.js';
import './Subheader-nJdHlnFA.js';
import './Graphic-XmKV_FS_.js';

const css = {
  code: "article.svelte-x7chvv{display:flex;flex-direction:column;gap:0.5em}.marks.svelte-x7chvv{display:flex;justify-content:end;color:white;background:green;padding:0.5em;gap:0.5em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  let { data } = $$props;
  set_store_value(currentPath, $currentPath = "Assignment", $currentPath);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_page();
  $$unsubscribe_currentPath();
  return `<article class="svelte-x7chvv">${validate_component(Assignment, "Assignment").$$render(
    $$result,
    {
      assignment: data.assignment,
      viewable: false,
      showStudent: true,
      showQuestionList: false,
      studentName: $page.data.user.name,
      studentID: data.studentAssignment.id
    },
    {},
    {}
  )} <h6 style="margin:0.5em 0" data-svelte-h="svelte-x7cyf2">Questions</h6> <div class="marks svelte-x7chvv"><strong data-svelte-h="svelte-18ehjgy">Total Marks:</strong> ${escape(data.studentAssignment.total)}</div> ${each(data.assignment.questions, (question, index) => {
    return `${validate_component(ShowQuestion, "ShowQuestion").$$render(
      $$result,
      {
        assignmentID: data.assignment._id,
        question,
        questionNumber: index,
        showSolution: true,
        answer: data.studentAssignment.answers[question._id],
        showActions: false,
        marks: data.studentAssignment.marks[question._id]
      },
      {},
      {}
    )}`;
  })} </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-fAKOMBDZ.js.map
