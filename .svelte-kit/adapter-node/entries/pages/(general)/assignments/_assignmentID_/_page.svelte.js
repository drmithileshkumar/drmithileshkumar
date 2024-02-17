import { s as subscribe, b as set_store_value } from "../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, j as each } from "../../../../../chunks/ssr.js";
import { p as page } from "../../../../../chunks/stores.js";
import "../../../../../chunks/client.js";
import "../../../../../chunks/ActionIcons.js";
import { B as Button } from "../../../../../chunks/Button.js";
import { C as CommonLabel } from "../../../../../chunks/CommonLabel.js";
import "../../../../../chunks/Suffix.js";
import { c as currentPath } from "../../../../../chunks/stores2.js";
import { A as Assignment } from "../../../../../chunks/Assignment.js";
import { T as TestQuestion } from "../../../../../chunks/TestQuestion.js";
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
    })} ${data.studentAssignment && data.studentAssignment.status !== "Submitted" ? `<div>${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `Save Draft`;
          }
        })}`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `Submit Final`;
          }
        })}`;
      }
    })}</div>` : ``}</article>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_currentPath();
  return $$rendered;
});
export {
  Page as default
};
