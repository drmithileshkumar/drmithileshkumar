import { a as subscribe } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, i as each, h as add_attribute, e as escape } from './ssr-HSn4Y_Gl.js';
import { p as page } from './stores-J1hWMOsb.js';
import './client-_MkdHwD5.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { A as Actions } from './Actions-d1scvOhV.js';
import { B as Button } from './Button-FylIdC7C.js';
import { C as CommonLabel } from './CommonLabel-QaCL5f48.js';
import { T as Textfield } from './Textfield-wU2X7R0w.js';
import './Suffix-ybHP5eir.js';
import { F as FormField } from './FormField-hBqnQrbd.js';
import { C as Checkbox } from './Checkbox-Msw7lxtv.js';
import { R as Radio } from './Radio-3MRTzT9M.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './Ripple-IoYaH5-z.js';
import './prefixFilter-IAYI75FL.js';
import './ContextFragment-h_zhkUzP.js';
import './index2-z1g76_ny.js';
import './NotchedOutline-ZS7UkzLO.js';

const css = {
  code: ".options.svelte-oih4w4{display:flex;flex-direction:column;gap:0.5em}h5.svelte-oih4w4{margin:1em 0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { data } = $$props;
  let type = "Objective", courseName = "", statement = "", optionA = "", optionB = "", optionC = "", optionD = "", solution = "", correct = [], isPublic = true;
  let options = ["A", "B", "C", "D"];
  let types = ["Objective", "Subjective"];
  let preview;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<article><h5 class="svelte-oih4w4" data-svelte-h="svelte-13hv5wu">New Question</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
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
              })}</div> ${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
                label: () => {
                  return `<span slot="label" data-svelte-h="svelte-1mcx8qw">Is Public</span>`;
                },
                default: () => {
                  return `${validate_component(Checkbox, "Checkbox").$$render(
                    $$result,
                    { value: isPublic, checked: isPublic },
                    {
                      checked: ($$value) => {
                        isPublic = $$value;
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
            })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                  default: () => {
                    return `Get Back to Questions`;
                  }
                })}`;
              }
            })}`;
          }
        })}`;
      }
    })} <h5 class="svelte-oih4w4" data-svelte-h="svelte-xuhjly">Preview</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<div${add_attribute("this", preview, 0)}><div class="question"><!-- HTML_TAG_START -->${statement}<!-- HTML_TAG_END --></div> <div class="options svelte-oih4w4">${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
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
  $$unsubscribe_page();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CpQcJ3HY.js.map
