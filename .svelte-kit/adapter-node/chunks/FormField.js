import { c as compute_rest_props } from "./utils.js";
import { c as create_ssr_component, a as get_current_component, g as getContext, s as spread, b as escape_attribute_value, d as escape_object, f as add_attribute, h as setContext } from "./ssr.js";
import { f as forwardEventsBuilder, c as classMap } from "./classAdderBuilder.js";
import { e as exclude, p as prefixFilter } from "./prefixFilter.js";
const Radio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "disabled",
    "touch",
    "group",
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
  let { group = void 0 } = $$props;
  let { value = null } = $$props;
  let { valueKey = uninitializedValue } = $$props;
  let { input$use = [] } = $$props;
  let { input$class = "" } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let inputProps = (_a = getContext("SMUI:generic:input:props")) !== null && _a !== void 0 ? _a : {};
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
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
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
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-radio": true,
          "mdc-radio--disabled": disabled,
          "mdc-radio--touch": touch,
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
          "mdc-radio__native-control": true
        }))
      },
      { type: "radio" },
      escape_object(inputProps),
      { disabled: disabled || null },
      {
        value: escape_attribute_value(isUninitializedValue(valueKey) ? value : valueKey)
      },
      escape_object(prefixFilter($$restProps, "input$"))
    ],
    {}
  )}${(isUninitializedValue(valueKey) ? value : valueKey) === group ? add_attribute("checked", true, 1) : ""}> <div class="mdc-radio__background" data-svelte-h="svelte-14iudo4"><div class="mdc-radio__outer-circle"></div> <div class="mdc-radio__inner-circle"></div></div> <div class="mdc-radio__ripple"></div> </div>`;
});
let counter = 0;
const FormField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "align", "noWrap", "inputId", "label$use", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { align = "start" } = $$props;
  let { noWrap = false } = $$props;
  let { inputId = "SMUI-form-field-" + counter++ } = $$props;
  let { label$use = [] } = $$props;
  let element;
  let label;
  setContext("SMUI:generic:input:props", { id: inputId });
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.noWrap === void 0 && $$bindings.noWrap && noWrap !== void 0)
    $$bindings.noWrap(noWrap);
  if ($$props.inputId === void 0 && $$bindings.inputId && inputId !== void 0)
    $$bindings.inputId(inputId);
  if ($$props.label$use === void 0 && $$bindings.label$use && label$use !== void 0)
    $$bindings.label$use(label$use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-form-field": true,
          "mdc-form-field--align-end": align === "end",
          "mdc-form-field--nowrap": noWrap
        }))
      },
      escape_object(exclude($$restProps, ["label$"]))
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``} <label${spread(
    [
      { for: escape_attribute_value(inputId) },
      escape_object(prefixFilter($$restProps, "label$"))
    ],
    {}
  )}${add_attribute("this", label, 0)}>${slots.label ? slots.label({}) : ``}</label> </div>`;
});
export {
  FormField as F,
  Radio as R
};
