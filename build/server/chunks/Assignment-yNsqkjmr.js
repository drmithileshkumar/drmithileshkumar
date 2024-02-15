import { a as subscribe } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-HSn4Y_Gl.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { A as Actions } from './Actions-d1scvOhV.js';
import { B as Button } from './Button-FylIdC7C.js';
import { S as Set_1, C as Chip, T as Text } from './Text-BdLt2y7P.js';
import { T as Textfield } from './Textfield-wU2X7R0w.js';
import './Suffix-ybHP5eir.js';
import './client-_MkdHwD5.js';
import { p as page } from './stores-J1hWMOsb.js';

/* empty css                                         */
const css = {
  code: ".place.svelte-m1g8tn{display:flex;justify-content:space-between}.university.svelte-m1g8tn{font-variant:small-caps}.department.svelte-m1g8tn{font-variant:small-caps}.assignmentDetails.svelte-m1g8tn{display:flex;justify-content:center;gap:1em;font-size:1.5em;margin:1em}.courseDetails.svelte-m1g8tn,.student.svelte-m1g8tn{display:grid;grid-template-columns:1fr 1fr;justify-content:space-between;padding-bottom:0.7em}.student.svelte-m1g8tn{align-items:center;margin-top:1em}.courseDetails.svelte-m1g8tn{border-bottom:2px solid}.course.svelte-m1g8tn,.marks.svelte-m1g8tn{display:flex;flex-direction:column}.marks.svelte-m1g8tn{text-align:end}",
  map: null
};
const Assignment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { studentName = "" } = $$props;
  let { studentID = "" } = $$props;
  let { assignment } = $$props;
  let { viewable = true } = $$props;
  let { showQuestionList = true } = $$props;
  let { showStudent = false } = $$props;
  if ($$props.studentName === void 0 && $$bindings.studentName && studentName !== void 0)
    $$bindings.studentName(studentName);
  if ($$props.studentID === void 0 && $$bindings.studentID && studentID !== void 0)
    $$bindings.studentID(studentID);
  if ($$props.assignment === void 0 && $$bindings.assignment && assignment !== void 0)
    $$bindings.assignment(assignment);
  if ($$props.viewable === void 0 && $$bindings.viewable && viewable !== void 0)
    $$bindings.viewable(viewable);
  if ($$props.showQuestionList === void 0 && $$bindings.showQuestionList && showQuestionList !== void 0)
    $$bindings.showQuestionList(showQuestionList);
  if ($$props.showStudent === void 0 && $$bindings.showStudent && showStudent !== void 0)
    $$bindings.showStudent(showStudent);
  $$result.css.add(css);
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
            return `<div class="place svelte-m1g8tn"><span class="university svelte-m1g8tn">${escape(assignment.university)}</span> <span class="department svelte-m1g8tn">${escape(assignment.department)}</span></div> <div class="assignmentDetails svelte-m1g8tn"><span class="semester">Semester ${escape(assignment.semester)}</span> <span class="title">${escape(assignment.title)}</span> <span class="session">${escape(assignment.session)}</span></div> <div class="courseDetails svelte-m1g8tn"><div class="course svelte-m1g8tn"><span class="name"><strong data-svelte-h="svelte-1q686am">Course Name:</strong> ${escape(assignment.courseName)}</span> <span class="code"><strong data-svelte-h="svelte-11qxd68">Course Code:</strong> ${escape(assignment.courseCode)}</span> <span class="start"><strong data-svelte-h="svelte-1b6zxl4">Start date:</strong> ${escape(assignment.dates.start)}</span></div> <div class="marks svelte-m1g8tn"><span class="number"><strong data-svelte-h="svelte-g8ercx">No. of Questions:</strong> ${escape(assignment.numberOfQuestions)}</span> <span class="totalMarks"><strong data-svelte-h="svelte-182ioya">Max Marks:</strong> ${escape(assignment.totalMarks)}</span> <span class="end"><strong data-svelte-h="svelte-19rmqdb">End date:</strong> ${escape(assignment.dates.end)}</span></div></div> ${showStudent ? `<div class="student svelte-m1g8tn"><span class="name"><strong data-svelte-h="svelte-f3zr7y">Student Name:</strong> ${escape(studentName)}</span> ${validate_component(Textfield, "Textfield").$$render(
              $$result,
              {
                variant: "outlined",
                label: "USN",
                value: studentID
              },
              {
                value: ($$value) => {
                  studentID = $$value;
                  $$settled = false;
                }
              },
              {}
            )} </div>` : ``} ${showQuestionList ? `<div class="questions">${validate_component(Set_1, "Set").$$render(
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
            )}</div>` : ``}`;
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
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { Assignment as A };
//# sourceMappingURL=Assignment-yNsqkjmr.js.map
