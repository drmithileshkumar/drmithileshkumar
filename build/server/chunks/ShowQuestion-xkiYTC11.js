import { a as subscribe } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, j as createEventDispatcher, v as validate_component, e as escape } from './ssr-HSn4Y_Gl.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { A as Actions } from './Actions-d1scvOhV.js';
import { B as Button } from './Button-FylIdC7C.js';
import { C as CommonLabel } from './CommonLabel-QaCL5f48.js';
import { C as Checkbox } from './Checkbox-Msw7lxtv.js';
import { F as FormField } from './FormField-hBqnQrbd.js';
import './SelectionGroupIcon-hfGPm6DC.js';
import './Subheader-nJdHlnFA.js';
import './client-_MkdHwD5.js';
import { p as page } from './stores-J1hWMOsb.js';

const css = {
  code: ".options.svelte-48fbt2{display:flex;flex-direction:column;margin:1em 0}.solution.svelte-48fbt2{margin-top:1em}.marks.svelte-48fbt2{display:flex;justify-content:end;gap:0.5em;color:white;background:rgba(0, 155, 0, 0.5);margin-bottom:0.5em;padding:0.5em}",
  map: null
};
const ShowQuestion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  new createEventDispatcher();
  let { question } = $$props;
  let { answer = [] } = $$props;
  let { assignmentID = "" } = $$props;
  let { showOptions = true } = $$props;
  let { showSolution = true } = $$props;
  let { showActions = true } = $$props;
  let { marks = 0 } = $$props;
  if ($$props.question === void 0 && $$bindings.question && question !== void 0)
    $$bindings.question(question);
  if ($$props.answer === void 0 && $$bindings.answer && answer !== void 0)
    $$bindings.answer(answer);
  if ($$props.assignmentID === void 0 && $$bindings.assignmentID && assignmentID !== void 0)
    $$bindings.assignmentID(assignmentID);
  if ($$props.showOptions === void 0 && $$bindings.showOptions && showOptions !== void 0)
    $$bindings.showOptions(showOptions);
  if ($$props.showSolution === void 0 && $$bindings.showSolution && showSolution !== void 0)
    $$bindings.showSolution(showSolution);
  if ($$props.showActions === void 0 && $$bindings.showActions && showActions !== void 0)
    $$bindings.showActions(showActions);
  if ($$props.marks === void 0 && $$bindings.marks && marks !== void 0)
    $$bindings.marks(marks);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="marks svelte-48fbt2"><strong data-svelte-h="svelte-19ghlc4">Marks:</strong> ${escape(marks)}</div> <div class="question"><!-- HTML_TAG_START -->${question.statement}<!-- HTML_TAG_END --></div> ${showOptions ? `<div class="options svelte-48fbt2">${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
            label: () => {
              return `<span slot="label"><!-- HTML_TAG_START -->${question.optionA}<!-- HTML_TAG_END --></span>`;
            },
            default: () => {
              return `${validate_component(Checkbox, "Checkbox").$$render(
                $$result,
                {
                  checked: answer.indexOf("A") !== -1,
                  style: "background:" + (question.correct.indexOf("A") !== -1 ? "rgba(0, 155, 0, 0.5)" : "")
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
                  checked: answer.indexOf("B") !== -1,
                  style: "background:" + (question.correct.indexOf("B") !== -1 ? "rgba(0, 155, 0, 0.5)" : "")
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
                  checked: answer.indexOf("C") !== -1,
                  style: "background:" + (question.correct.indexOf("C") !== -1 ? "rgba(0, 155, 0, 0.5)" : "")
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
                  checked: answer.indexOf("D") !== -1,
                  style: "background:" + (question.correct.indexOf("D") !== -1 ? "rgba(0, 155, 0, 0.5)" : "")
                },
                {},
                {}
              )}`;
            }
          })}</div>` : ``} ${showSolution ? `<div class="solution svelte-48fbt2"><!-- HTML_TAG_START -->${question.solution}<!-- HTML_TAG_END --></div>` : ``}`;
        }
      })} ${showActions ? `${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                default: () => {
                  return `${escape(showOptions ? "Hide" : "Show")} Options`;
                }
              })}`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                default: () => {
                  return `${escape(showSolution ? "Hide" : "Show")} Solution`;
                }
              })}`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                default: () => {
                  return `Edit`;
                }
              })}`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                default: () => {
                  return `Remove`;
                }
              })}`;
            }
          })}`;
        }
      })}` : ``}`;
    }
  })}`;
});

export { ShowQuestion as S };
//# sourceMappingURL=ShowQuestion-xkiYTC11.js.map
