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
  code: ".options.svelte-3r2vkh{display:flex;flex-direction:column}",
  map: null
};
const ShowQuestion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  new createEventDispatcher();
  let { question } = $$props;
  let { assignmentID = "" } = $$props;
  let { showOptions = true } = $$props;
  let { showSolution = true } = $$props;
  if ($$props.question === void 0 && $$bindings.question && question !== void 0)
    $$bindings.question(question);
  if ($$props.assignmentID === void 0 && $$bindings.assignmentID && assignmentID !== void 0)
    $$bindings.assignmentID(assignmentID);
  if ($$props.showOptions === void 0 && $$bindings.showOptions && showOptions !== void 0)
    $$bindings.showOptions(showOptions);
  if ($$props.showSolution === void 0 && $$bindings.showSolution && showSolution !== void 0)
    $$bindings.showSolution(showSolution);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question"><!-- HTML_TAG_START -->${question.statement}<!-- HTML_TAG_END --></div> ${showOptions ? `<div class="options svelte-3r2vkh">${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
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
          })}</div>` : ``} ${showSolution ? `<div class="solution"><!-- HTML_TAG_START -->${question.solution}<!-- HTML_TAG_END --></div>` : ``}`;
        }
      })} ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
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
      })}`;
    }
  })}`;
});

export { ShowQuestion as S };
//# sourceMappingURL=ShowQuestion-HJsrkWEr.js.map
