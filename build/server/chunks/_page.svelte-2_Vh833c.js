import { c as create_ssr_component, v as validate_component, i as each, d as add_attribute, e as escape, a as get_current_component, g as getContext, s as spread, h as escape_attribute_value, b as escape_object } from './ssr-APL1hDOv.js';
import './client-_MkdHwD5.js';
import { C as Card } from './Card-1SmK_YC9.js';
import { C as Content } from './ActionIcons-6VPbDzCy.js';
import { A as Actions } from './Actions-ueArzwKl.js';
import { B as Button, C as CommonLabel } from './Button-6UuJyN6u.js';
import { T as Textfield } from './Textfield-vuig9jST.js';
import './Suffix-SJkMZbJw.js';
import { F as FormField, R as Radio } from './FormField-1Fcyp9fM.js';
import { c as compute_rest_props } from './utils-yAS0eczJ.js';
import { f as forwardEventsBuilder, c as classMap } from './classAdderBuilder-0kAhHSI7.js';
import { e as exclude, p as prefixFilter } from './prefixFilter-IAYI75FL.js';
import './exports-mq_1S73-.js';
import './Ripple-cfQYXJny.js';
import './ContextFragment-7g4vMbeP.js';
import './index2-NBMbjtFx.js';

const Checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "disabled",
    "touch",
    "indeterminate",
    "group",
    "checked",
    "value",
    "valueKey",
    "input$use",
    "input$class",
    "getId",
    "getElement"
  ]);
  var _a;
  forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value2) {
    return value2 === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { disabled = false } = $$props;
  let { touch = false } = $$props;
  let { indeterminate = uninitializedValue } = $$props;
  let { group = uninitializedValue } = $$props;
  let { checked = uninitializedValue } = $$props;
  let { value = null } = $$props;
  let { valueKey = uninitializedValue } = $$props;
  let { input$use = [] } = $$props;
  let { input$class = "" } = $$props;
  let element;
  let instance;
  let checkbox;
  let internalClasses = {};
  let internalStyles = {};
  let nativeControlAttrs = {};
  let inputProps = (_a = getContext("SMUI:generic:input:props")) !== null && _a !== void 0 ? _a : {};
  let nativeChecked = isUninitializedValue(group) ? isUninitializedValue(checked) ? false : checked !== null && checked !== void 0 ? checked : void 0 : group.indexOf(value) !== -1;
  let context = getContext("SMUI:checkbox:context");
  let dataTableHeader = getContext("SMUI:data-table:row:header");
  let previousChecked = checked;
  let previousGroup = isUninitializedValue(group) ? [] : [...group];
  let previousNativeChecked = nativeChecked;
  function getId() {
    return inputProps && inputProps.id;
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0)
    $$bindings.touch(touch);
  if ($$props.indeterminate === void 0 && $$bindings.indeterminate && indeterminate !== void 0)
    $$bindings.indeterminate(indeterminate);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.valueKey === void 0 && $$bindings.valueKey && valueKey !== void 0)
    $$bindings.valueKey(valueKey);
  if ($$props.input$use === void 0 && $$bindings.input$use && input$use !== void 0)
    $$bindings.input$use(input$use);
  if ($$props.input$class === void 0 && $$bindings.input$class && input$class !== void 0)
    $$bindings.input$class(input$class);
  if ($$props.getId === void 0 && $$bindings.getId && getId !== void 0)
    $$bindings.getId(getId);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    {
      let callHandleChange = false;
      if (!isUninitializedValue(group)) {
        if (previousNativeChecked !== nativeChecked) {
          const idx = group.indexOf(value);
          if (nativeChecked && idx === -1) {
            group.push(value);
            group = group;
          } else if (!nativeChecked && idx !== -1) {
            group.splice(idx, 1);
            group = group;
          }
          callHandleChange = true;
        } else {
          const idxPrev = previousGroup.indexOf(value);
          const idx = group.indexOf(value);
          if (idxPrev > -1 && idx === -1) {
            nativeChecked = false;
            callHandleChange = true;
          } else if (idx > -1 && idxPrev === -1) {
            nativeChecked = true;
            callHandleChange = true;
          }
        }
      }
      if (isUninitializedValue(checked)) {
        if (!!previousNativeChecked !== !!nativeChecked) {
          callHandleChange = true;
        }
      } else if (checked !== (nativeChecked !== null && nativeChecked !== void 0 ? nativeChecked : null)) {
        if (checked === previousChecked) {
          checked = nativeChecked !== null && nativeChecked !== void 0 ? nativeChecked : null;
          if (!isUninitializedValue(indeterminate)) {
            indeterminate = false;
          }
        } else {
          nativeChecked = checked !== null && checked !== void 0 ? checked : void 0;
        }
        callHandleChange = true;
      }
      previousChecked = checked;
      previousGroup = isUninitializedValue(group) ? [] : [...group];
      previousNativeChecked = nativeChecked;
      if (callHandleChange && instance) {
        instance.handleChange();
      }
    }
  }
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-checkbox": true,
          "mdc-checkbox--disabled": disabled,
          "mdc-checkbox--touch": touch,
          "mdc-data-table__header-row-checkbox": context === "data-table" && dataTableHeader,
          "mdc-data-table__row-checkbox": context === "data-table" && !dataTableHeader,
          ...internalClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value2]) => `${name}: ${value2};`).concat([style]).join(" "))
      },
      escape_object(exclude($$restProps, ["input$"]))
    ],
    {}
  )}${add_attribute("this", element, 0)}><input${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [input$class]: true,
          "mdc-checkbox__native-control": true
        }))
      },
      { type: "checkbox" },
      escape_object(inputProps),
      { disabled: disabled || null },
      {
        value: escape_attribute_value(isUninitializedValue(valueKey) ? value : valueKey)
      },
      {
        "data-indeterminate": escape_attribute_value(!isUninitializedValue(indeterminate) && indeterminate ? "true" : void 0)
      },
      escape_object(nativeControlAttrs),
      escape_object(prefixFilter($$restProps, "input$"))
    ],
    {}
  )}${add_attribute("this", checkbox, 0)}${add_attribute("checked", nativeChecked, 1)}> <div class="mdc-checkbox__background" data-svelte-h="svelte-1l3hdyl"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> <div class="mdc-checkbox__mixedmark"></div></div> <div class="mdc-checkbox__ripple"></div> </div>`;
});
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

export { Page as default };
//# sourceMappingURL=_page.svelte-2_Vh833c.js.map
