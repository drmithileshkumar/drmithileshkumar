import { c as create_ssr_component, j as createEventDispatcher, v as validate_component } from "../../../../../../chunks/ssr2.js";
import "../../../../../../chunks/client.js";
import { C as Card } from "../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../chunks/ActionIcons.js";
import { A as Actions } from "../../../../../../chunks/Actions.js";
import { B as Button } from "../../../../../../chunks/Button.js";
import { C as CommonLabel } from "../../../../../../chunks/CommonLabel.js";
import { T as Textfield } from "../../../../../../chunks/Textfield.js";
import "../../../../../../chunks/Suffix.js";
import { F as FormField } from "../../../../../../chunks/FormField.js";
import { C as Checkbox } from "../../../../../../chunks/Checkbox.js";
const EditAssignment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { assignment } = $$props;
  new createEventDispatcher();
  if ($$props.assignment === void 0 && $$bindings.assignment && assignment !== void 0) $$bindings.assignment(assignment);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render(
          $$result,
          {
            style: "display: flex; flex-direction:column;gap:1em;"
          },
          {},
          {
            default: () => {
              return `${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
                label: () => {
                  return `<span slot="label" data-svelte-h="svelte-1mcx8qw">Is Public</span>`;
                },
                default: () => {
                  return `${validate_component(Checkbox, "Checkbox").$$render(
                    $$result,
                    {
                      checked: assignment.isPublic,
                      value: assignment.isPublic
                    },
                    {
                      checked: ($$value) => {
                        assignment.isPublic = $$value;
                        $$settled = false;
                      },
                      value: ($$value) => {
                        assignment.isPublic = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })} ${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  variant: "outlined",
                  label: "Title",
                  style: "width:100%",
                  value: assignment.title
                },
                {
                  value: ($$value) => {
                    assignment.title = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  variant: "outlined",
                  label: "University",
                  style: "width:100%",
                  value: assignment.university
                },
                {
                  value: ($$value) => {
                    assignment.university = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  variant: "outlined",
                  label: "Department",
                  style: "width:100%",
                  value: assignment.department
                },
                {
                  value: ($$value) => {
                    assignment.department = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  variant: "outlined",
                  label: "Session",
                  style: "width:100%",
                  value: assignment.session
                },
                {
                  value: ($$value) => {
                    assignment.session = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  variant: "outlined",
                  label: "Semester",
                  style: "width:100%",
                  value: assignment.semester
                },
                {
                  value: ($$value) => {
                    assignment.semester = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  variant: "outlined",
                  label: "Course Name",
                  style: "width:100%",
                  value: assignment.courseName
                },
                {
                  value: ($$value) => {
                    assignment.courseName = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  variant: "outlined",
                  label: "Course ID",
                  style: "width:100%",
                  value: assignment.courseID
                },
                {
                  value: ($$value) => {
                    assignment.courseID = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  variant: "outlined",
                  type: "number",
                  label: "Total Marks",
                  style: "width:100%",
                  value: assignment.totalMarks
                },
                {
                  value: ($$value) => {
                    assignment.totalMarks = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  variant: "outlined",
                  type: "number",
                  label: "Number of Questions",
                  style: "width:100%",
                  value: assignment.numberOfQuestions
                },
                {
                  value: ($$value) => {
                    assignment.numberOfQuestions = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  variant: "outlined",
                  type: "text",
                  label: "Start",
                  placeholder: "dd-mm-yy",
                  value: assignment.dates.start
                },
                {
                  value: ($$value) => {
                    assignment.dates.start = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  variant: "outlined",
                  type: "text",
                  label: "End",
                  placeholder: "dd-mm-yy",
                  value: assignment.dates.end
                },
                {
                  value: ($$value) => {
                    assignment.dates.end = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          }
        )} ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                  default: () => {
                    return `Submit`;
                  }
                })}`;
              }
            })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                  default: () => {
                    return `Cancel`;
                  }
                })}`;
              }
            })}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title = "Assignment 1", university = "Dayananda Sagar University", department = "Computer Applications", session = "2023-2024", semester = "II", courseName = "Mathematics II", courseCode = "CA", totalMarks = 100, numberOfQuestions = 10, dates = { start: "dd-mm-yy", end: "dd-mm-yy" }, isPublic = true, questions = [];
  let assignment = {
    title,
    university,
    department,
    session,
    semester,
    courseName,
    courseCode,
    totalMarks,
    numberOfQuestions,
    questions,
    dates,
    isPublic
  };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<article><h5 data-svelte-h="svelte-1vpfza7">New assignment</h5> ${validate_component(EditAssignment, "EditAssignment").$$render(
      $$result,
      { assignment },
      {
        assignment: ($$value) => {
          assignment = $$value;
          $$settled = false;
        }
      },
      {}
    )} </article>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
