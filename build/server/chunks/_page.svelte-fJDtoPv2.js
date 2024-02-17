import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, i as each } from './ssr-HSn4Y_Gl.js';
import { p as page } from './stores-J1hWMOsb.js';
import './client-_MkdHwD5.js';
import './ActionIcons-o14w9cnK.js';
import { B as Button } from './Button-FylIdC7C.js';
import './Suffix-ybHP5eir.js';
import { c as currentPath } from './stores2-MGSbm_Vc.js';
import { A as Assignment } from './Assignment-I1kj9Em5.js';
import { T as TestQuestion } from './TestQuestion-_DTqUWMU.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './Ripple-IoYaH5-z.js';
import './index2-z1g76_ny.js';
import './Card-w5WL3--T.js';
import './Actions-d1scvOhV.js';
import './Text-BdLt2y7P.js';
import './ContextFragment-h_zhkUzP.js';
import './Textfield-wU2X7R0w.js';
import './prefixFilter-IAYI75FL.js';
import './NotchedOutline-ZS7UkzLO.js';
import './Checkbox-Msw7lxtv.js';
import './FormField-hBqnQrbd.js';
import './SelectionGroupIcon-hfGPm6DC.js';
import './Subheader-nJdHlnFA.js';
import './Graphic-XmKV_FS_.js';

const css = {
  code: "article.svelte-1s9ex9t{display:flex;flex-direction:column;gap:0.5em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  let { data } = $$props;
  set_store_value(currentPath, $currentPath = "Assignment", $currentPath);
  let studentID;
  let answers = {};
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<article class="svelte-1s9ex9t">${validate_component(Assignment, "Assignment").$$render(
      $$result,
      {
        assignment: data.assignment,
        viewable: false,
        showStudent: true,
        showQuestionList: false,
        studentName: $page.data.user.name,
        studentID
      },
      {
        studentID: ($$value) => {
          studentID = $$value;
          $$settled = false;
        }
      },
      {}
    )} <h6 style="margin:0.5em 0" data-svelte-h="svelte-x7cyf2">Questions</h6> ${each(data.assignment.questions, (question, index) => {
      return `${validate_component(TestQuestion, "TestQuestion").$$render(
        $$result,
        {
          assignmentID: data.assignment._id,
          question,
          questionNumber: index,
          showSolution: false,
          answer: answers[question._id]
        },
        {
          answer: ($$value) => {
            answers[question._id] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Submit`;
      }
    })}</article>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_currentPath();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-fJDtoPv2.js.map
