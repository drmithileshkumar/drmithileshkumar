import { a as subscribe } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-HSn4Y_Gl.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { A as Actions } from './Actions-d1scvOhV.js';
import { B as Button } from './Button-FylIdC7C.js';
import { S as Set_1, C as Chip, T as Text } from './Text-BdLt2y7P.js';
import './client-_MkdHwD5.js';
import { p as page } from './stores-J1hWMOsb.js';

const css = {
  code: ".place.svelte-4rm2o4{display:flex;justify-content:space-between}.university.svelte-4rm2o4{font-variant:small-caps}.department.svelte-4rm2o4{font-variant:small-caps}.assignmentDetails.svelte-4rm2o4{display:flex;justify-content:center;gap:1em;font-size:1.5em;margin:1em}.courseDetails.svelte-4rm2o4{display:grid;grid-template-columns:1fr 1fr;justify-content:space-between;padding-bottom:0.7em;border-bottom:2px solid}.course.svelte-4rm2o4,.marks.svelte-4rm2o4{display:flex;flex-direction:column}.marks.svelte-4rm2o4{text-align:end}",
  map: null
};
const Assignment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { assignment } = $$props;
  let { viewable = true } = $$props;
  if ($$props.assignment === void 0 && $$bindings.assignment && assignment !== void 0)
    $$bindings.assignment(assignment);
  if ($$props.viewable === void 0 && $$bindings.viewable && viewable !== void 0)
    $$bindings.viewable(viewable);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="place svelte-4rm2o4"><span class="university svelte-4rm2o4">${escape(assignment.university)}</span> <span class="department svelte-4rm2o4">${escape(assignment.department)}</span></div> <div class="assignmentDetails svelte-4rm2o4"><span class="semester">Semester ${escape(assignment.semester)}</span> <span class="title">${escape(assignment.title)}</span> <span class="session">${escape(assignment.session)}</span></div> <div class="courseDetails svelte-4rm2o4"><div class="course svelte-4rm2o4"><span class="name"><strong data-svelte-h="svelte-1q686am">Course Name:</strong> ${escape(assignment.courseName)}</span> <span class="code"><strong data-svelte-h="svelte-11qxd68">Course Code:</strong> ${escape(assignment.courseCode)}</span></div> <div class="marks svelte-4rm2o4"><span class="number"><strong data-svelte-h="svelte-g8ercx">No. of Questions:</strong> ${escape(assignment.numberOfQuestions)}</span> <span class="totalMarks"><strong data-svelte-h="svelte-182ioya">Max Marks:</strong> ${escape(assignment.totalMarks)}</span></div></div> <div class="questions">${validate_component(Set_1, "Set").$$render(
            $$result,
            {
              chips: assignment.questions.map((q, i) => "Q" + (i + 1))
            },
            {},
            {
              default: ({ chip }) => {
                return `${validate_component(Chip, "Chip").$$render($$result, { chip }, {}, {
                  default: () => {
                    return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(chip)}`;
                      }
                    })}`;
                  }
                })}`;
              }
            }
          )}</div>`;
        }
      })} ${viewable ? `${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `View`;
            }
          })}`;
        }
      })}` : ``}`;
    }
  })}`;
});

export { Assignment as A };
//# sourceMappingURL=Assignment-4LNihYcO.js.map
