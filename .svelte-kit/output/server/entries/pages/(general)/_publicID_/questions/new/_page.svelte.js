import { c as create_ssr_component, v as validate_component, j as each, f as add_attribute, e as escape } from "../../../../../../chunks/ssr.js";
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
import { R as Radio } from "../../../../../../chunks/Radio.js";
const css = {
  code: ".options.svelte-pwz68h{display:flex;flex-direction:column;gap:0.5em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let type = "Objective", course = "", statement = "", optionA = "", optionB = "", optionC = "", optionD = "", solution = "", correct = [];
  let options = ["A", "B", "C", "D"];
  let types = ["Objective", "Subjective"];
  let preview;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<article><h5 data-svelte-h="svelte-13hv5wu">New Question</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render(
          $$result,
          {
            style: "display: flex; flex-direction:column;gap:0.5em;"
          },
          {},
          {
            default: () => {
              return `<div style="display:flex;gap: 1.5em;">${each(types, (option) => {
                return `${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
                  label: () => {
                    return `<span slot="label">${escape(option)}</span>`;
                  },
                  default: () => {
                    return `${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: option, group: type },
                      {
                        group: ($$value) => {
                          type = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )} `;
                  }
                })}`;
              })}</div> ${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  variant: "outlined",
                  label: "Course Name",
                  style: "width:100%",
                  value: course
                },
                {
                  value: ($$value) => {
                    course = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  textarea: true,
                  label: "Question",
                  style: "width:100%",
                  value: statement
                },
                {
                  value: ($$value) => {
                    statement = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${type === "Objective" ? `${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  textarea: true,
                  label: "Option A",
                  style: "width:100%",
                  value: optionA
                },
                {
                  value: ($$value) => {
                    optionA = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  textarea: true,
                  label: "Option B",
                  style: "width:100%",
                  value: optionB
                },
                {
                  value: ($$value) => {
                    optionB = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  textarea: true,
                  label: "Option C",
                  style: "width:100%",
                  value: optionC
                },
                {
                  value: ($$value) => {
                    optionC = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  textarea: true,
                  label: "Option D",
                  style: "width:100%",
                  value: optionD
                },
                {
                  value: ($$value) => {
                    optionD = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} <h6 style="margin:1em 0 0.5em 0" data-svelte-h="svelte-1r558ms">Correct options</h6> <div style="display:flex;gap: 1.5em;">${each(options, (option) => {
                return `${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
                  label: () => {
                    return `<span slot="label">${escape(option)}</span>`;
                  },
                  default: () => {
                    return `${validate_component(Checkbox, "Checkbox").$$render(
                      $$result,
                      { value: option, group: correct },
                      {
                        group: ($$value) => {
                          correct = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )} `;
                  }
                })}`;
              })}</div>` : ``} ${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  textarea: true,
                  label: "Solution",
                  style: "width:100%",
                  value: solution
                },
                {
                  value: ($$value) => {
                    solution = $$value;
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
    })} <h5 data-svelte-h="svelte-xuhjly">Preview</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<div${add_attribute("this", preview, 0)}><div class="question"><!-- HTML_TAG_START -->${statement}<!-- HTML_TAG_END --></div> <div class="options svelte-pwz68h">${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
              label: () => {
                return `<span slot="label"><!-- HTML_TAG_START -->${optionA}<!-- HTML_TAG_END --></span>`;
              },
              default: () => {
                return `${validate_component(Checkbox, "Checkbox").$$render($$result, {}, {}, {})}`;
              }
            })} ${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
              label: () => {
                return `<span slot="label"><!-- HTML_TAG_START -->${optionB}<!-- HTML_TAG_END --></span>`;
              },
              default: () => {
                return `${validate_component(Checkbox, "Checkbox").$$render($$result, {}, {}, {})}`;
              }
            })} ${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
              label: () => {
                return `<span slot="label"><!-- HTML_TAG_START -->${optionC}<!-- HTML_TAG_END --></span>`;
              },
              default: () => {
                return `${validate_component(Checkbox, "Checkbox").$$render($$result, {}, {}, {})}`;
              }
            })} ${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
              label: () => {
                return `<span slot="label"><!-- HTML_TAG_START -->${optionD}<!-- HTML_TAG_END --></span>`;
              },
              default: () => {
                return `${validate_component(Checkbox, "Checkbox").$$render($$result, {}, {}, {})}`;
              }
            })}</div> <div class="solution"><!-- HTML_TAG_START -->${solution}<!-- HTML_TAG_END --></div></div>`;
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
