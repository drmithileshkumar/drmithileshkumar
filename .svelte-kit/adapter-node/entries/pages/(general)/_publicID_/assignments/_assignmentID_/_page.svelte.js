import { c as create_ssr_component, v as validate_component, j as each } from "../../../../../../chunks/ssr.js";
import "../../../../../../chunks/client.js";
import "../../../../../../chunks/ActionIcons.js";
import "../../../../../../chunks/Suffix.js";
import { A as Assignment } from "../../../../../../chunks/Assignment.js";
import { S as ShowQuestion } from "../../../../../../chunks/ShowQuestion.js";
const css = {
  code: "article.svelte-1s9ex9t{display:flex;flex-direction:column;gap:0.5em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<article class="svelte-1s9ex9t">${validate_component(Assignment, "Assignment").$$render(
    $$result,
    {
      assignment: data.assignment,
      viewable: false
    },
    {},
    {}
  )} <h6 style="margin:0.5em 0" data-svelte-h="svelte-x7cyf2">Questions</h6> ${each(data.assignment.questions, (question) => {
    return `${validate_component(ShowQuestion, "ShowQuestion").$$render(
      $$result,
      {
        assignmentID: data.assignment._id,
        question
      },
      {},
      {}
    )}`;
  })}</article>`;
});
export {
  Page as default
};
