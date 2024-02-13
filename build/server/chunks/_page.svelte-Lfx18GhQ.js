import { c as create_ssr_component, v as validate_component, i as each } from './ssr-HSn4Y_Gl.js';
import './client-_MkdHwD5.js';
import './ActionIcons-o14w9cnK.js';
import './Suffix-ybHP5eir.js';
import { A as Assignment } from './Assignment-4LNihYcO.js';
import { S as ShowQuestion } from './ShowQuestion-HJsrkWEr.js';
import './utils-TYqgk8Fj.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './Card-w5WL3--T.js';
import './Actions-d1scvOhV.js';
import './Button-FylIdC7C.js';
import './Ripple-IoYaH5-z.js';
import './Text-BdLt2y7P.js';
import './index2-z1g76_ny.js';
import './ContextFragment-h_zhkUzP.js';
import './stores-J1hWMOsb.js';
import './CommonLabel-QaCL5f48.js';
import './Checkbox-Msw7lxtv.js';
import './prefixFilter-IAYI75FL.js';
import './FormField-hBqnQrbd.js';
import './SelectionGroupIcon-hfGPm6DC.js';
import './Subheader-nJdHlnFA.js';
import './Graphic-XmKV_FS_.js';

const css = {
  code: "article.svelte-1s9ex9t{display:flex;flex-direction:column;gap:0.5em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<article class="svelte-1s9ex9t"><h5 data-svelte-h="svelte-1ir50o9">Assignment</h5> ${validate_component(Assignment, "Assignment").$$render(
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

export { Page as default };
//# sourceMappingURL=_page.svelte-Lfx18GhQ.js.map
