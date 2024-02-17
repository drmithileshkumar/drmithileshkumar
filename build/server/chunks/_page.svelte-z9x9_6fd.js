import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, i as each, e as escape } from './ssr-HSn4Y_Gl.js';
import './client-_MkdHwD5.js';
import { p as page } from './stores-J1hWMOsb.js';
import './ActionIcons-o14w9cnK.js';
import { B as Button } from './Button-FylIdC7C.js';
import { A as Assignment } from './Assignment-I1kj9Em5.js';
import { c as currentPath } from './stores2-MGSbm_Vc.js';
import { S as Select, O as Option } from './Option-ca41O35N.js';
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
import './Menu-ecQaSKb2.js';
import './SelectionGroupIcon-hfGPm6DC.js';
import './Subheader-nJdHlnFA.js';
import './Graphic-XmKV_FS_.js';
import './Item-20QUQFRc.js';

const css = {
  code: "article.svelte-1s9ex9t{display:flex;flex-direction:column;gap:0.5em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Assignments", $currentPath);
  let { data } = $$props;
  let courses = [
    { name: "Mathematics II", id: "22CA1201" },
    {
      name: "Internet Technologies",
      id: "22CA2402"
    },
    {
      name: "Internet Technologies Lab",
      id: "22CA2405"
    }
  ];
  let assignments = [];
  let selectedCourse;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<article class="svelte-1s9ex9t">${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `New assignment`;
      }
    })} <div class="courses">${validate_component(Select, "Select").$$render(
      $$result,
      {
        variant: "outlined",
        label: "Course",
        value: selectedCourse
      },
      {
        value: ($$value) => {
          selectedCourse = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Option, "Option").$$render($$result, { value: "" }, {}, {})} ${each(courses, (course) => {
            return `${validate_component(Option, "Option").$$render($$result, { value: course.id }, {}, {
              default: () => {
                return `${escape(course.name)}`;
              }
            })}`;
          })}`;
        }
      }
    )} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Get Assignments`;
      }
    })}</div> ${each(assignments, (assignment) => {
      return `${validate_component(Assignment, "Assignment").$$render($$result, { assignment }, {}, {})}`;
    })}</article>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_currentPath();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-z9x9_6fd.js.map
