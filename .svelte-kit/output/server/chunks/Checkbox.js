import { c as compute_rest_props } from "./utils.js";
import { c as create_ssr_component, a as get_current_component, g as getContext, b as spread, d as escape_attribute_value, f as escape_object, h as add_attribute } from "./ssr2.js";
import { f as forwardEventsBuilder, c as classMap } from "./SmuiElement.js";
import { e as exclude, p as prefixFilter } from "./prefixFilter.js";
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
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0) $$bindings.touch(touch);
  if ($$props.indeterminate === void 0 && $$bindings.indeterminate && indeterminate !== void 0) $$bindings.indeterminate(indeterminate);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0) $$bindings.group(group);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0) $$bindings.checked(checked);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.valueKey === void 0 && $$bindings.valueKey && valueKey !== void 0) $$bindings.valueKey(valueKey);
  if ($$props.input$use === void 0 && $$bindings.input$use && input$use !== void 0) $$bindings.input$use(input$use);
  if ($$props.input$class === void 0 && $$bindings.input$class && input$class !== void 0) $$bindings.input$class(input$class);
  if ($$props.getId === void 0 && $$bindings.getId && getId !== void 0) $$bindings.getId(getId);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0) $$bindings.getElement(getElement);
  {
    {
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
        } else {
          const idxPrev = previousGroup.indexOf(value);
          const idx = group.indexOf(value);
          if (idxPrev > -1 && idx === -1) {
            nativeChecked = false;
          } else if (idx > -1 && idxPrev === -1) {
            nativeChecked = true;
          }
        }
      }
      if (isUninitializedValue(checked)) ;
      else if (checked !== (nativeChecked !== null && nativeChecked !== void 0 ? nativeChecked : null)) {
        if (checked === previousChecked) {
          checked = nativeChecked !== null && nativeChecked !== void 0 ? nativeChecked : null;
          if (!isUninitializedValue(indeterminate)) {
            indeterminate = false;
          }
        } else {
          nativeChecked = checked !== null && checked !== void 0 ? checked : void 0;
        }
      }
      previousChecked = checked;
      previousGroup = isUninitializedValue(group) ? [] : [...group];
      previousNativeChecked = nativeChecked;
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
export {
  Checkbox as C
};
