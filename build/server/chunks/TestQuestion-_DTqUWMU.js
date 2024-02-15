import { a as subscribe } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, j as createEventDispatcher, v as validate_component, e as escape } from './ssr-HSn4Y_Gl.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { C as Checkbox } from './Checkbox-Msw7lxtv.js';
import { F as FormField } from './FormField-hBqnQrbd.js';
import './SelectionGroupIcon-hfGPm6DC.js';
import './Subheader-nJdHlnFA.js';
import './client-_MkdHwD5.js';
import { p as page } from './stores-J1hWMOsb.js';

const css = {
  code: ".options.svelte-1mm3e8q{display:flex;flex-direction:column}.solution.svelte-1mm3e8q{margin:1em 0}",
  map: null
};
const TestQuestion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  new createEventDispatcher();
  let { question } = $$props;
  let { assignmentID = "" } = $$props;
  let { showOptions = true } = $$props;
  let { showSolution = true } = $$props;
  let { questionNumber = 0 } = $$props;
  let { answer = [] } = $$props;
  if ($$props.question === void 0 && $$bindings.question && question !== void 0)
    $$bindings.question(question);
  if ($$props.assignmentID === void 0 && $$bindings.assignmentID && assignmentID !== void 0)
    $$bindings.assignmentID(assignmentID);
  if ($$props.showOptions === void 0 && $$bindings.showOptions && showOptions !== void 0)
    $$bindings.showOptions(showOptions);
  if ($$props.showSolution === void 0 && $$bindings.showSolution && showSolution !== void 0)
    $$bindings.showSolution(showSolution);
  if ($$props.questionNumber === void 0 && $$bindings.questionNumber && questionNumber !== void 0)
    $$bindings.questionNumber(questionNumber);
  if ($$props.answer === void 0 && $$bindings.answer && answer !== void 0)
    $$bindings.answer(answer);
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
            return `<div class="question"><strong style="color:tomato;">Q ${escape(questionNumber + 1)} </strong><!-- HTML_TAG_START -->${question.statement}<!-- HTML_TAG_END --></div> ${showOptions ? `<div class="options svelte-1mm3e8q">${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
              label: () => {
                return `<span slot="label"><!-- HTML_TAG_START -->${question.optionA}<!-- HTML_TAG_END --></span>`;
              },
              default: () => {
                return `${validate_component(Checkbox, "Checkbox").$$render(
                  $$result,
                  { value: "A", group: answer },
                  {
                    group: ($$value) => {
                      answer = $$value;
                      $$settled = false;
                    }
                  },
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
                  { value: "B", group: answer },
                  {
                    group: ($$value) => {
                      answer = $$value;
                      $$settled = false;
                    }
                  },
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
                  { value: "C", group: answer },
                  {
                    group: ($$value) => {
                      answer = $$value;
                      $$settled = false;
                    }
                  },
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
                  { value: "D", group: answer },
                  {
                    group: ($$value) => {
                      answer = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })}</div>` : ``} ${showSolution ? `<div class="solution svelte-1mm3e8q"><!-- HTML_TAG_START -->${question.solution}<!-- HTML_TAG_END --></div>` : ``}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { TestQuestion as T };
//# sourceMappingURL=TestQuestion-_DTqUWMU.js.map
