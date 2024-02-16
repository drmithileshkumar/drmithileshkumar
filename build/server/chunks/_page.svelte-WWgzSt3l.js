import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, i as each, e as escape } from './ssr-HSn4Y_Gl.js';
import './client-_MkdHwD5.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { B as Button } from './Button-FylIdC7C.js';
import { C as Card } from './Card-w5WL3--T.js';
import { A as Actions } from './Actions-d1scvOhV.js';
import { C as Checkbox } from './Checkbox-Msw7lxtv.js';
import { F as FormField } from './FormField-hBqnQrbd.js';
import { S as Select, O as Option } from './Option-ca41O35N.js';
import { c as currentPath } from './stores3-MGSbm_Vc.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './Ripple-IoYaH5-z.js';
import './prefixFilter-IAYI75FL.js';
import './index2-z1g76_ny.js';
import './Menu-ecQaSKb2.js';
import './SelectionGroupIcon-hfGPm6DC.js';
import './Subheader-nJdHlnFA.js';
import './Graphic-XmKV_FS_.js';
import './Item-20QUQFRc.js';
import './NotchedOutline-ZS7UkzLO.js';

const css$1 = {
  code: ".assignments.svelte-hxlsrk{padding-bottom:1em}.options.svelte-hxlsrk{display:flex;flex-direction:column}",
  map: null
};
const Question = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { question } = $$props;
  let { assignments = [] } = $$props;
  let assignmentID;
  if ($$props.question === void 0 && $$bindings.question && question !== void 0)
    $$bindings.question(question);
  if ($$props.assignments === void 0 && $$bindings.assignments && assignments !== void 0)
    $$bindings.assignments(assignments);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="assignments svelte-hxlsrk">${validate_component(Select, "Select").$$render(
              $$result,
              {
                variant: "outlined",
                label: "Assignments",
                style: "width:70%",
                value: assignmentID
              },
              {
                value: ($$value) => {
                  assignmentID = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `${validate_component(Option, "Option").$$render($$result, { value: "" }, {}, {})} ${each(assignments, (assignment) => {
                    return `${validate_component(Option, "Option").$$render($$result, { value: assignment._id }, {}, {
                      default: () => {
                        return `${escape(assignment.courseCode)} ${escape(assignment.title)} ${escape(assignment.session)} `;
                      }
                    })}`;
                  })}`;
                }
              }
            )} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `Add`;
              }
            })}</div> <div class="question"><!-- HTML_TAG_START -->${question.statement}<!-- HTML_TAG_END --></div> <div class="options svelte-hxlsrk">${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
              label: () => {
                return `<span slot="label"><!-- HTML_TAG_START -->${question.optionA}<!-- HTML_TAG_END --></span>`;
              },
              default: () => {
                return `${validate_component(Checkbox, "Checkbox").$$render(
                  $$result,
                  {
                    checked: question.correct.indexOf("A") !== -1
                  },
                  {},
                  {}
                )}`;
              }
            })} ${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
              label: () => {
                return `<span slot="label"><!-- HTML_TAG_START -->${question.optionB}<!-- HTML_TAG_END --></span>`;
              },
              default: () => {
                return `${validate_component(Checkbox, "Checkbox").$$render(
                  $$result,
                  {
                    checked: question.correct.indexOf("B") !== -1
                  },
                  {},
                  {}
                )}`;
              }
            })} ${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
              label: () => {
                return `<span slot="label"><!-- HTML_TAG_START -->${question.optionC}<!-- HTML_TAG_END --></span>`;
              },
              default: () => {
                return `${validate_component(Checkbox, "Checkbox").$$render(
                  $$result,
                  {
                    checked: question.correct.indexOf("C") !== -1
                  },
                  {},
                  {}
                )}`;
              }
            })} ${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
              label: () => {
                return `<span slot="label"><!-- HTML_TAG_START -->${question.optionD}<!-- HTML_TAG_END --></span>`;
              },
              default: () => {
                return `${validate_component(Checkbox, "Checkbox").$$render(
                  $$result,
                  {
                    checked: question.correct.indexOf("D") !== -1
                  },
                  {},
                  {}
                )}`;
              }
            })}</div> <div class="solution"><!-- HTML_TAG_START -->${question.solution}<!-- HTML_TAG_END --></div>`;
          }
        })} ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `Edit`;
              }
            })}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
const css = {
  code: "article.svelte-1s9ex9t{display:flex;flex-direction:column;gap:0.5em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Questions", $currentPath);
  let courses = ["Mathematics II", "Internet Technologies", "Internet Technologies Lab"];
  let questions = [], assignments = [];
  let selectedCourse;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<article class="svelte-1s9ex9t">${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `New Question`;
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
            return `${validate_component(Option, "Option").$$render($$result, { value: course }, {}, {
              default: () => {
                return `${escape(course)}`;
              }
            })}`;
          })}`;
        }
      }
    )} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Get Questions`;
      }
    })}</div> ${each(questions, (question) => {
      return `${validate_component(Question, "Question").$$render($$result, { question, assignments }, {}, {})}`;
    })}</article>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_currentPath();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-WWgzSt3l.js.map
