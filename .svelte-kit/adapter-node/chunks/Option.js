import { c as compute_rest_props, s as subscribe, b as set_store_value, e as compute_slots } from "./utils.js";
import { f as forwardEventsBuilder, c as classMap, g as globals } from "./classAdderBuilder.js";
import { c as create_ssr_component, a as get_current_component, s as spread, b as escape_attribute_value, d as escape_object, f as add_attribute, g as getContext, h as setContext, o as onDestroy, v as validate_component, e as escape } from "./ssr.js";
import { w as writable } from "./index2.js";
import { e as exclude, p as prefixFilter } from "./prefixFilter.js";
import { M as Menu } from "./Menu.js";
import "./SelectionGroupIcon.js";
import { L as List, I as Item } from "./Item.js";
import "./Subheader.js";
import { F as FloatingLabel, N as NotchedOutline, L as LineRipple } from "./NotchedOutline.js";
let counter$1 = 0;
const HelperText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "id", "persistent", "validationMsg", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { id = "SMUI-select-helper-text-" + counter$1++ } = $$props;
  let { persistent = false } = $$props;
  let { validationMsg = false } = $$props;
  let element;
  let internalClasses = {};
  let internalAttrs = {};
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.persistent === void 0 && $$bindings.persistent && persistent !== void 0)
    $$bindings.persistent(persistent);
  if ($$props.validationMsg === void 0 && $$bindings.validationMsg && validationMsg !== void 0)
    $$bindings.validationMsg(validationMsg);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-select-helper-text": true,
          "mdc-select-helper-text--validation-msg": validationMsg,
          "mdc-select-helper-text--validation-msg-persistent": persistent,
          ...internalClasses
        }))
      },
      {
        "aria-hidden": escape_attribute_value(persistent ? void 0 : "true")
      },
      { id: escape_attribute_value(id) },
      escape_object(internalAttrs),
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${`${slots.default ? slots.default({}) : ``}`} </div>`;
});
const { Object: Object_1 } = globals;
let counter = 0;
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "ripple",
    "disabled",
    "variant",
    "noLabel",
    "label",
    "value",
    "key",
    "dirty",
    "invalid",
    "updateInvalid",
    "required",
    "inputId",
    "hiddenInput",
    "withLeadingIcon",
    "anchor$use",
    "anchor$class",
    "selectedTextContainer$use",
    "selectedTextContainer$class",
    "selectedText$use",
    "selectedText$class",
    "dropdownIcon$use",
    "dropdownIcon$class",
    "menu$class",
    "getUseDefaultValidation",
    "setUseDefaultValidation",
    "focus",
    "layout",
    "getElement"
  ]);
  let $$slots = compute_slots(slots);
  let $selectedTextStore, $$unsubscribe_selectedTextStore;
  let $valueStore, $$unsubscribe_valueStore;
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
  let { ripple = true } = $$props;
  let { disabled = false } = $$props;
  let { variant = "standard" } = $$props;
  let { noLabel = false } = $$props;
  let { label = void 0 } = $$props;
  let { value = "" } = $$props;
  let { key = (item) => item } = $$props;
  let { dirty = false } = $$props;
  let { invalid = uninitializedValue } = $$props;
  let { updateInvalid = isUninitializedValue(invalid) } = $$props;
  if (isUninitializedValue(invalid)) {
    invalid = false;
  }
  let { required = false } = $$props;
  let { inputId = "SMUI-select-" + counter++ } = $$props;
  let { hiddenInput = false } = $$props;
  let { withLeadingIcon = uninitializedValue } = $$props;
  let { anchor$use = [] } = $$props;
  let { anchor$class = "" } = $$props;
  let { selectedTextContainer$use = [] } = $$props;
  let { selectedTextContainer$class = "" } = $$props;
  let { selectedText$use = [] } = $$props;
  let { selectedText$class = "" } = $$props;
  let { dropdownIcon$use = [] } = $$props;
  let { dropdownIcon$class = "" } = $$props;
  let { menu$class = "" } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  let selectAnchor;
  let selectAnchorAttrs = {};
  let selectedIndex = -1;
  let menuId = (_a = $$restProps["menu$id"]) !== null && _a !== void 0 ? _a : inputId + "-menu";
  let helperId = void 0;
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  let menuOpen = false;
  let menuClasses = {};
  let anchorElement = void 0;
  let anchorCorner = void 0;
  let wrapFocus = false;
  let list;
  let context = getContext("SMUI:select:context");
  let floatingLabel = void 0;
  let lineRipple = void 0;
  let notchedOutline = void 0;
  setContext("SMUI:list:role", "");
  setContext("SMUI:list:nav", false);
  const selectedTextStore = writable("");
  $$unsubscribe_selectedTextStore = subscribe(selectedTextStore, (value2) => $selectedTextStore = value2);
  setContext("SMUI:select:selectedText", selectedTextStore);
  const valueStore = writable(value);
  $$unsubscribe_valueStore = subscribe(valueStore, (value2) => $valueStore = value2);
  setContext("SMUI:select:value", valueStore);
  let previousSelectedIndex = selectedIndex;
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });
  function getMenuItemValues() {
    return list.getOrderedList().map((accessor) => accessor.getValue());
  }
  function getUseDefaultValidation() {
    return instance.getUseDefaultValidation();
  }
  function setUseDefaultValidation(useDefaultValidation) {
    instance.setUseDefaultValidation(useDefaultValidation);
  }
  function focus() {
    selectAnchor.focus();
  }
  function layout() {
    instance.layout();
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
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.noLabel === void 0 && $$bindings.noLabel && noLabel !== void 0)
    $$bindings.noLabel(noLabel);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.dirty === void 0 && $$bindings.dirty && dirty !== void 0)
    $$bindings.dirty(dirty);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.updateInvalid === void 0 && $$bindings.updateInvalid && updateInvalid !== void 0)
    $$bindings.updateInvalid(updateInvalid);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.inputId === void 0 && $$bindings.inputId && inputId !== void 0)
    $$bindings.inputId(inputId);
  if ($$props.hiddenInput === void 0 && $$bindings.hiddenInput && hiddenInput !== void 0)
    $$bindings.hiddenInput(hiddenInput);
  if ($$props.withLeadingIcon === void 0 && $$bindings.withLeadingIcon && withLeadingIcon !== void 0)
    $$bindings.withLeadingIcon(withLeadingIcon);
  if ($$props.anchor$use === void 0 && $$bindings.anchor$use && anchor$use !== void 0)
    $$bindings.anchor$use(anchor$use);
  if ($$props.anchor$class === void 0 && $$bindings.anchor$class && anchor$class !== void 0)
    $$bindings.anchor$class(anchor$class);
  if ($$props.selectedTextContainer$use === void 0 && $$bindings.selectedTextContainer$use && selectedTextContainer$use !== void 0)
    $$bindings.selectedTextContainer$use(selectedTextContainer$use);
  if ($$props.selectedTextContainer$class === void 0 && $$bindings.selectedTextContainer$class && selectedTextContainer$class !== void 0)
    $$bindings.selectedTextContainer$class(selectedTextContainer$class);
  if ($$props.selectedText$use === void 0 && $$bindings.selectedText$use && selectedText$use !== void 0)
    $$bindings.selectedText$use(selectedText$use);
  if ($$props.selectedText$class === void 0 && $$bindings.selectedText$class && selectedText$class !== void 0)
    $$bindings.selectedText$class(selectedText$class);
  if ($$props.dropdownIcon$use === void 0 && $$bindings.dropdownIcon$use && dropdownIcon$use !== void 0)
    $$bindings.dropdownIcon$use(dropdownIcon$use);
  if ($$props.dropdownIcon$class === void 0 && $$bindings.dropdownIcon$class && dropdownIcon$class !== void 0)
    $$bindings.dropdownIcon$class(dropdownIcon$class);
  if ($$props.menu$class === void 0 && $$bindings.menu$class && menu$class !== void 0)
    $$bindings.menu$class(menu$class);
  if ($$props.getUseDefaultValidation === void 0 && $$bindings.getUseDefaultValidation && getUseDefaultValidation !== void 0)
    $$bindings.getUseDefaultValidation(getUseDefaultValidation);
  if ($$props.setUseDefaultValidation === void 0 && $$bindings.setUseDefaultValidation && setUseDefaultValidation !== void 0)
    $$bindings.setUseDefaultValidation(setUseDefaultValidation);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  if ($$props.layout === void 0 && $$bindings.layout && layout !== void 0)
    $$bindings.layout(layout);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (previousSelectedIndex !== selectedIndex) {
        previousSelectedIndex = selectedIndex;
        {
          const values = getMenuItemValues();
          if (value !== values[selectedIndex]) {
            value = values[selectedIndex];
          }
        }
      }
    }
    set_store_value(valueStore, $valueStore = value, $valueStore);
    $$rendered = `<div${spread(
      [
        {
          class: escape_attribute_value(classMap({
            [className]: true,
            "mdc-select": true,
            "mdc-select--required": required,
            "mdc-select--disabled": disabled,
            "mdc-select--filled": variant === "filled",
            "mdc-select--outlined": variant === "outlined",
            "smui-select--standard": variant === "standard",
            "mdc-select--with-leading-icon": isUninitializedValue(withLeadingIcon) ? $$slots.leadingIcon : withLeadingIcon,
            "mdc-select--no-label": noLabel || label == null && !$$slots.label,
            "mdc-select--invalid": invalid,
            "mdc-select--activated": menuOpen,
            "mdc-data-table__pagination-rows-per-page-select": context === "data-table:pagination",
            ...internalClasses
          }))
        },
        {
          style: escape_attribute_value(Object.entries(internalStyles).map(([name, value2]) => `${name}: ${value2};`).concat([style]).join(" "))
        },
        escape_object(exclude($$restProps, [
          "input$",
          "anchor$",
          "label$",
          "outline$",
          "selectedTextContainer$",
          "selectedText$",
          "dropdownIcon$",
          "ripple$",
          "menu$",
          "list$",
          "helperText$"
        ]))
      ],
      {}
    )}${add_attribute("this", element, 0)}>${hiddenInput ? `<input${spread(
      [
        { type: "hidden" },
        { required: required || null },
        { disabled: disabled || null },
        { value: escape_attribute_value(value) },
        escape_object(prefixFilter($$restProps, "input$"))
      ],
      {}
    )}>` : ``} <div${spread(
      [
        {
          class: escape_attribute_value(classMap({
            [anchor$class]: true,
            "mdc-select__anchor": true
          }))
        },
        {
          "aria-required": escape_attribute_value(required ? "true" : void 0)
        },
        {
          "aria-disabled": escape_attribute_value(disabled ? "true" : void 0)
        },
        {
          "aria-controls": escape_attribute_value(menuId)
        },
        {
          "aria-expanded": escape_attribute_value(menuOpen ? "true" : "false")
        },
        {
          "aria-describedby": escape_attribute_value(helperId)
        },
        { role: "combobox" },
        { tabindex: "0" },
        escape_object(selectAnchorAttrs),
        escape_object(prefixFilter($$restProps, "anchor$"))
      ],
      {}
    )}${add_attribute("this", selectAnchor, 0)}>${variant === "filled" ? `<span class="mdc-select__ripple"></span>` : ``} ${variant !== "outlined" && !noLabel && (label != null || $$slots.label) ? `${validate_component(FloatingLabel, "FloatingLabel").$$render(
      $$result,
      Object_1.assign({}, { id: inputId + "-smui-label" }, { floatAbove: $selectedTextStore !== "" }, { required }, prefixFilter($$restProps, "label$"), { this: floatingLabel }),
      {
        this: ($$value) => {
          floatingLabel = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${escape(label == null ? "" : label)}${slots.label ? slots.label({}) : ``}`;
        }
      }
    )}` : ``} ${variant === "outlined" ? `${validate_component(NotchedOutline, "NotchedOutline").$$render(
      $$result,
      Object_1.assign(
        {},
        {
          noLabel: noLabel || label == null && !$$slots.label
        },
        prefixFilter($$restProps, "outline$"),
        { this: notchedOutline }
      ),
      {
        this: ($$value) => {
          notchedOutline = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${!noLabel && (label != null || $$slots.label) ? `${validate_component(FloatingLabel, "FloatingLabel").$$render(
            $$result,
            Object_1.assign({}, { id: inputId + "-smui-label" }, { floatAbove: $selectedTextStore !== "" }, { required }, prefixFilter($$restProps, "label$"), { this: floatingLabel }),
            {
              this: ($$value) => {
                floatingLabel = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${escape(label == null ? "" : label)}${slots.label ? slots.label({}) : ``}`;
              }
            }
          )}` : ``}`;
        }
      }
    )}` : ``} ${slots.leadingIcon ? slots.leadingIcon({}) : ``} <span${spread(
      [
        {
          class: escape_attribute_value(classMap({
            [selectedTextContainer$class]: true,
            "mdc-select__selected-text-container": true
          }))
        },
        escape_object(prefixFilter($$restProps, "selectedTextContainer$"))
      ],
      {}
    )}><span${spread(
      [
        {
          id: escape_attribute_value(inputId + "-smui-selected-text")
        },
        {
          class: escape_attribute_value(classMap({
            [selectedText$class]: true,
            "mdc-select__selected-text": true
          }))
        },
        { role: "button" },
        { "aria-haspopup": "listbox" },
        {
          "aria-labelledby": escape_attribute_value(inputId + "-smui-label")
        },
        escape_object(prefixFilter($$restProps, "selectedText$"))
      ],
      {}
    )}>${escape($selectedTextStore)}</span></span> <span${spread(
      [
        {
          class: escape_attribute_value(classMap({
            [dropdownIcon$class]: true,
            "mdc-select__dropdown-icon": true
          }))
        },
        escape_object(prefixFilter($$restProps, "dropdownIcon$"))
      ],
      {}
    )}><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> ${variant !== "outlined" && ripple ? `${validate_component(LineRipple, "LineRipple").$$render(
      $$result,
      Object_1.assign({}, prefixFilter($$restProps, "ripple$"), { this: lineRipple }),
      {
        this: ($$value) => {
          lineRipple = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</div> ${validate_component(Menu, "Menu").$$render(
      $$result,
      Object_1.assign(
        {},
        {
          class: classMap({
            [menu$class]: true,
            "mdc-select__menu": true,
            ...menuClasses
          })
        },
        { id: menuId },
        { fullWidth: true },
        { anchor: false },
        { anchorElement },
        { anchorCorner },
        prefixFilter($$restProps, "menu$"),
        { open: menuOpen }
      ),
      {
        open: ($$value) => {
          menuOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(List, "List").$$render(
            $$result,
            Object_1.assign({}, { role: "listbox" }, { wrapFocus }, prefixFilter($$restProps, "list$"), { selectedIndex }),
            {
              selectedIndex: ($$value) => {
                selectedIndex = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${slots.default ? slots.default({}) : ``}`;
              }
            }
          )}`;
        }
      }
    )}</div> ${$$slots.helperText ? `${validate_component(HelperText, "HelperText").$$render($$result, Object_1.assign({}, prefixFilter($$restProps, "helperText$")), {}, {
      default: () => {
        return `${slots.helperText ? slots.helperText({}) : ``}`;
      }
    })}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_selectedTextStore();
  $$unsubscribe_valueStore();
  return $$rendered;
});
const Option = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let usePass;
  let selected;
  let $$restProps = compute_rest_props($$props, ["use", "class", "value", "getElement"]);
  let $selectedText, $$unsubscribe_selectedText;
  let $selectedValue, $$unsubscribe_selectedValue;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  const className = "";
  let { value = "" } = $$props;
  let element;
  const selectedText = getContext("SMUI:select:selectedText");
  $$unsubscribe_selectedText = subscribe(selectedText, (value2) => $selectedText = value2);
  const selectedValue = getContext("SMUI:select:value");
  $$unsubscribe_selectedValue = subscribe(selectedValue, (value2) => $selectedValue = value2);
  setContext("SMUI:list:item:role", "option");
  onDestroy(setSelectedText);
  function setSelectedText() {
    if (selected && element) {
      set_store_value(selectedText, $selectedText = element.getPrimaryText(), $selectedText);
    }
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    usePass = [forwardEvents, ...use];
    selected = value != null && value !== "" && $selectedValue === value;
    $$rendered = `${validate_component(Item, "Item").$$render(
      $$result,
      Object.assign({}, { use: usePass }, { "data-value": value }, { value }, { selected }, $$restProps, { this: element }),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_selectedText();
  $$unsubscribe_selectedValue();
  return $$rendered;
});
export {
  Option as O,
  Select as S
};
