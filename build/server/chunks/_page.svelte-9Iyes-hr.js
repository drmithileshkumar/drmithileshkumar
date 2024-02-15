import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, i as each } from './ssr-HSn4Y_Gl.js';
import './client-_MkdHwD5.js';
import { p as page } from './stores-J1hWMOsb.js';
import './ActionIcons-o14w9cnK.js';
import { B as Button } from './Button-FylIdC7C.js';
import { A as Assignment } from './Assignment-yNsqkjmr.js';
import { c as currentPath } from './stores3-MGSbm_Vc.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './Ripple-IoYaH5-z.js';
import './Card-w5WL3--T.js';
import './Actions-d1scvOhV.js';
import './Text-BdLt2y7P.js';
import './index2-z1g76_ny.js';
import './ContextFragment-h_zhkUzP.js';
import './Textfield-wU2X7R0w.js';
import './prefixFilter-IAYI75FL.js';
import './NotchedOutline-ZS7UkzLO.js';
import './Suffix-ybHP5eir.js';

const css = {
  code: "article.svelte-1s9ex9t{display:flex;flex-direction:column;gap:0.5em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  let $$unsubscribe_page;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  set_store_value(currentPath, $currentPath = "Assignments", $currentPath);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  $$unsubscribe_page();
  return `<article class="svelte-1s9ex9t">${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `New assignment`;
    }
  })} ${each(data.assignments, (assignment) => {
    return `${validate_component(Assignment, "Assignment").$$render($$result, { assignment }, {}, {})}`;
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-9Iyes-hr.js.map
