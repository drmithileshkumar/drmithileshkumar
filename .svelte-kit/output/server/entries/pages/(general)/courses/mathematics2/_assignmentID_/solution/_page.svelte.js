import { s as subscribe, b as set_store_value } from "../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, e as escape, j as each } from "../../../../../../../chunks/ssr.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import "../../../../../../../chunks/client.js";
import "../../../../../../../chunks/ActionIcons.js";
import "../../../../../../../chunks/Suffix.js";
import { c as currentPath } from "../../../../../../../chunks/stores2.js";
import { A as Assignment } from "../../../../../../../chunks/Assignment.js";
import { S as ShowQuestion } from "../../../../../../../chunks/ShowQuestion.js";
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
export {
  Page as default
};
