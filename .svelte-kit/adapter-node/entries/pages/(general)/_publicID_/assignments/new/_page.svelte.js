import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import "../../../../../../chunks/client.js";
import { C as Card } from "../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../chunks/ActionIcons.js";
import { A as Actions } from "../../../../../../chunks/Actions.js";
import { B as Button } from "../../../../../../chunks/Button.js";
import { C as CommonLabel } from "../../../../../../chunks/CommonLabel.js";
import { T as Textfield } from "../../../../../../chunks/Textfield.js";
import "../../../../../../chunks/Suffix.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title = "Assignment 1", university = "Dayananda Sagar University", department = "Computer Applications", session = "2023-2024", semester = "II", courseName = "Mathematics II", totalMarks = 100, numberOfQuestions = 10;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<article><h5 data-svelte-h="svelte-1vpfza7">New assignment</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render(
          $$result,
          {
            style: "display: flex; flex-direction:column;gap:1em;"
          },
          {},
          {
            default: () => {
              return `${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  variant: "outlined",
                  label: "Title",
                  style: "width:100%",
                  value: title
                },
                {
                  value: ($$value) => {
                    title = $$value;
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
                  value: university
                },
                {
                  value: ($$value) => {
                    university = $$value;
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
                  value: department
                },
                {
                  value: ($$value) => {
                    department = $$value;
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
                  value: session
                },
                {
                  value: ($$value) => {
                    session = $$value;
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
                  value: semester
                },
                {
                  value: ($$value) => {
                    semester = $$value;
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
                  value: courseName
                },
                {
                  value: ($$value) => {
                    courseName = $$value;
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
                  value: totalMarks
                },
                {
                  value: ($$value) => {
                    totalMarks = $$value;
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
                  value: numberOfQuestions
                },
                {
                  value: ($$value) => {
                    numberOfQuestions = $$value;
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
    })}</article>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
