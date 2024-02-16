import { s as subscribe } from "../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, e as escape, j as each } from "../../../../../../chunks/ssr.js";
import { p as page } from "../../../../../../chunks/stores.js";
import "../../../../../../chunks/client.js";
import "../../../../../../chunks/ActionIcons.js";
import { B as Button } from "../../../../../../chunks/Button.js";
import { C as CommonLabel } from "../../../../../../chunks/CommonLabel.js";
import "../../../../../../chunks/Suffix.js";
import { A as Assignment } from "../../../../../../chunks/Assignment.js";
import { S as ShowQuestion } from "../../../../../../chunks/ShowQuestion.js";
const css = {
  code: "article.svelte-1s9ex9t{display:flex;flex-direction:column;gap:0.5em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<article class="svelte-1s9ex9t">${`${validate_component(Assignment, "Assignment").$$render(
      $$result,
      {
        assignment: data.assignment,
        viewable: false
      },
      {},
      {}
    )}`} <div class="actions">${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `${escape("Edit Assignment")}`;
          }
        })}`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `${escape("Hide")} Questions`;
          }
        })}`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `Add Questions`;
          }
        })}`;
      }
    })}</div> ${`<h6 style="margin:0.5em 0" data-svelte-h="svelte-x7cyf2">Questions</h6> ${each(data.assignment.questions, (question) => {
      return `${validate_component(ShowQuestion, "ShowQuestion").$$render(
        $$result,
        {
          assignmentID: data.assignment._id,
          question
        },
        {},
        {}
      )}`;
    })}`}</article>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
