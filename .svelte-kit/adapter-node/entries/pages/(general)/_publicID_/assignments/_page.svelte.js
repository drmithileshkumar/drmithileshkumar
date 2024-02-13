import { s as subscribe } from "../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, k as each } from "../../../../../chunks/ssr.js";
import "../../../../../chunks/client.js";
import { p as page } from "../../../../../chunks/stores.js";
import "../../../../../chunks/ActionIcons.js";
import { B as Button } from "../../../../../chunks/Button.js";
import { A as Assignment } from "../../../../../chunks/Assignment.js";
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
  $$unsubscribe_page();
  return `<article class="svelte-1s9ex9t"><h2 data-svelte-h="svelte-1drpwhk">Assignments</h2> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `New assignment`;
    }
  })} ${each(data.assignments, (assignment) => {
    return `${validate_component(Assignment, "Assignment").$$render($$result, { assignment }, {}, {})}`;
  })}</article>`;
});
export {
  Page as default
};
