import { c as create_ssr_component, s as subscribe, q as setContext, r as onDestroy, m as set_store_value, h as compute_rest_props, i as get_current_component, g as getContext, v as validate_component, w as missing_component, b as spread, j as escape_attribute_value, d as escape_object, k as add_attribute, e as escape, t as compute_slots } from "../../../../../../../../chunks/ssr.js";
import { g as githubDark, a as github, c as contents } from "../../../../../../../../chunks/content2.js";
/* empty css                                                                */
import "../../../../../../../../chunks/client.js";
import { C as Card } from "../../../../../../../../chunks/Card.js";
import { f as forwardEventsBuilder, c as classMap, g as globals, S as SmuiElement, a as classAdderBuilder, C as Content } from "../../../../../../../../chunks/ActionIcons.js";
import "../../../../../../../../chunks/NavList.svelte_svelte_type_style_lang.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../../../../chunks/stores3.js";
import { e as exclude, p as prefixFilter } from "../../../../../../../../chunks/prefixFilter.js";
import { w as writable } from "../../../../../../../../chunks/index2.js";
import { R as Ripple } from "../../../../../../../../chunks/Ripple.js";
const ContextFragment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $storeValue, $$unsubscribe_storeValue;
  let { key } = $$props;
  let { value } = $$props;
  const storeValue = writable(value);
  $$unsubscribe_storeValue = subscribe(storeValue, (value2) => $storeValue = value2);
  setContext(key, storeValue);
  onDestroy(() => {
    storeValue.set(void 0);
  });
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  set_store_value(storeValue, $storeValue = value, $storeValue);
  $$unsubscribe_storeValue();
  return `${slots.default ? slots.default({}) : ``}`;
});
const { Object: Object_1$1 } = globals;
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let actionProp;
  let defaultProp;
  let secondaryProp;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "variant",
    "touch",
    "href",
    "action",
    "defaultAction",
    "secondary",
    "component",
    "tag",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { color = "primary" } = $$props;
  let { variant = "text" } = $$props;
  let { touch = false } = $$props;
  let { href = void 0 } = $$props;
  let { action = "close" } = $$props;
  let { defaultAction = false } = $$props;
  let { secondary = false } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let context = getContext("SMUI:button:context");
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? href == null ? "button" : "a" : void 0 } = $$props;
  let previousDisabled = $$restProps.disabled;
  setContext("SMUI:label:context", "button");
  setContext("SMUI:icon:context", "button");
  function addClass(className2) {
    if (!internalClasses[className2]) {
      internalClasses[className2] = true;
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0)
    $$bindings.touch(touch);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.defaultAction === void 0 && $$bindings.defaultAction && defaultAction !== void 0)
    $$bindings.defaultAction(defaultAction);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    actionProp = context === "dialog:action" && action != null ? { "data-mdc-dialog-action": action } : { action: $$props.action };
    defaultProp = context === "dialog:action" && defaultAction ? { "data-mdc-dialog-button-default": "" } : { default: $$props.default };
    secondaryProp = context === "banner" ? {} : { secondary: $$props.secondary };
    {
      if (previousDisabled !== $$restProps.disabled) {
        const el = getElement();
        if ("blur" in el) {
          el.blur();
        }
        previousDisabled = $$restProps.disabled;
      }
    }
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object_1$1.assign(
        {},
        { tag },
        {
          use: [
            [
              Ripple,
              {
                ripple,
                unbounded: false,
                color,
                disabled: !!$$restProps.disabled,
                addClass,
                removeClass,
                addStyle
              }
            ],
            forwardEvents,
            ...use
          ]
        },
        {
          class: classMap({
            [className]: true,
            "mdc-button": true,
            "mdc-button--raised": variant === "raised",
            "mdc-button--unelevated": variant === "unelevated",
            "mdc-button--outlined": variant === "outlined",
            "smui-button--color-secondary": color === "secondary",
            "mdc-button--touch": touch,
            "mdc-card__action": context === "card:action",
            "mdc-card__action--button": context === "card:action",
            "mdc-dialog__button": context === "dialog:action",
            "mdc-top-app-bar__navigation-icon": context === "top-app-bar:navigation",
            "mdc-top-app-bar__action-item": context === "top-app-bar:action",
            "mdc-snackbar__action": context === "snackbar:actions",
            "mdc-banner__secondary-action": context === "banner" && secondary,
            "mdc-banner__primary-action": context === "banner" && !secondary,
            "mdc-tooltip__action": context === "tooltip:rich-actions",
            ...internalClasses
          })
        },
        {
          style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" ")
        },
        actionProp,
        defaultProp,
        secondaryProp,
        { href },
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="mdc-button__ripple"></div> ${slots.default ? slots.default({}) : ``}${touch ? `<div class="mdc-button__touch"></div>` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const FloatingLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "for",
    "floatAbove",
    "required",
    "wrapped",
    "shake",
    "float",
    "setRequired",
    "getWidth",
    "getElement"
  ]);
  var _a;
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { for: forId = void 0 } = $$props;
  let { floatAbove = false } = $$props;
  let { required = false } = $$props;
  let { wrapped = false } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  let inputProps = (_a = getContext("SMUI:generic:input:props")) !== null && _a !== void 0 ? _a : {};
  function shake(shouldShake) {
    instance.shake(shouldShake);
  }
  function float(shouldFloat) {
    floatAbove = shouldFloat;
  }
  function setRequired(isRequired) {
    required = isRequired;
  }
  function getWidth() {
    return instance.getWidth();
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
  if ($$props.for === void 0 && $$bindings.for && forId !== void 0)
    $$bindings.for(forId);
  if ($$props.floatAbove === void 0 && $$bindings.floatAbove && floatAbove !== void 0)
    $$bindings.floatAbove(floatAbove);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.wrapped === void 0 && $$bindings.wrapped && wrapped !== void 0)
    $$bindings.wrapped(wrapped);
  if ($$props.shake === void 0 && $$bindings.shake && shake !== void 0)
    $$bindings.shake(shake);
  if ($$props.float === void 0 && $$bindings.float && float !== void 0)
    $$bindings.float(float);
  if ($$props.setRequired === void 0 && $$bindings.setRequired && setRequired !== void 0)
    $$bindings.setRequired(setRequired);
  if ($$props.getWidth === void 0 && $$bindings.getWidth && getWidth !== void 0)
    $$bindings.getWidth(getWidth);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `${wrapped ? `<span${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-floating-label": true,
          "mdc-floating-label--float-above": floatAbove,
          "mdc-floating-label--required": required,
          ...internalClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</span>` : `<label${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-floating-label": true,
          "mdc-floating-label--float-above": floatAbove,
          "mdc-floating-label--required": required,
          ...internalClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
      },
      {
        for: escape_attribute_value(forId || (inputProps ? inputProps.id : void 0))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</label>`}`;
});
const LineRipple = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "active",
    "activate",
    "deactivate",
    "setRippleCenter",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { active = false } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  function activate() {
    instance.activate();
  }
  function deactivate() {
    instance.deactivate();
  }
  function setRippleCenter(xCoordinate) {
    instance.setRippleCenter(xCoordinate);
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
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.activate === void 0 && $$bindings.activate && activate !== void 0)
    $$bindings.activate(activate);
  if ($$props.deactivate === void 0 && $$bindings.deactivate && deactivate !== void 0)
    $$bindings.deactivate(deactivate);
  if ($$props.setRippleCenter === void 0 && $$bindings.setRippleCenter && setRippleCenter !== void 0)
    $$bindings.setRippleCenter(setRippleCenter);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-line-ripple": true,
          "mdc-line-ripple--active": active,
          ...internalClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}></div>`;
});
const NotchedOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { notched = false } = $$props;
  let { noLabel = false } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let notchStyles = {};
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function notch(notchWidth) {
    instance.notch(notchWidth);
  }
  function closeNotch() {
    instance.closeNotch();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.notched === void 0 && $$bindings.notched && notched !== void 0)
    $$bindings.notched(notched);
  if ($$props.noLabel === void 0 && $$bindings.noLabel && noLabel !== void 0)
    $$bindings.noLabel(noLabel);
  if ($$props.notch === void 0 && $$bindings.notch && notch !== void 0)
    $$bindings.notch(notch);
  if ($$props.closeNotch === void 0 && $$bindings.closeNotch && closeNotch !== void 0)
    $$bindings.closeNotch(closeNotch);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    {
      removeClass("mdc-notched-outline--upgraded");
    }
  }
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-notched-outline": true,
          "mdc-notched-outline--notched": notched,
          "mdc-notched-outline--no-label": noLabel,
          ...internalClasses
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}><div class="mdc-notched-outline__leading"></div> ${!noLabel ? `<div class="mdc-notched-outline__notch"${add_attribute("style", Object.entries(notchStyles).map(([name, value]) => `${name}: ${value};`).join(" "), 0)}>${slots.default ? slots.default({}) : ``}</div>` : ``} <div class="mdc-notched-outline__trailing"></div> </div>`;
});
const HelperLine = classAdderBuilder({
  class: "mdc-text-field-helper-line",
  tag: "div"
});
const Prefix = classAdderBuilder({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
});
const Suffix = classAdderBuilder({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "type",
    "placeholder",
    "value",
    "files",
    "dirty",
    "invalid",
    "updateInvalid",
    "emptyValueNull",
    "emptyValueUndefined",
    "getAttr",
    "addAttr",
    "removeAttr",
    "focus",
    "blur",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value2) {
    return value2 === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { type = "text" } = $$props;
  let { placeholder = " " } = $$props;
  let { value = uninitializedValue } = $$props;
  const valueUninitialized = isUninitializedValue(value);
  if (valueUninitialized) {
    value = "";
  }
  let { files = null } = $$props;
  let { dirty = false } = $$props;
  let { invalid = false } = $$props;
  let { updateInvalid = true } = $$props;
  let { emptyValueNull = value === null } = $$props;
  if (valueUninitialized && emptyValueNull) {
    value = null;
  }
  let { emptyValueUndefined = value === void 0 } = $$props;
  if (valueUninitialized && emptyValueUndefined) {
    value = void 0;
  }
  let element;
  let internalAttrs = {};
  let valueProp = {};
  function getAttr(name) {
    var _a;
    return name in internalAttrs ? (_a = internalAttrs[name]) !== null && _a !== void 0 ? _a : null : getElement().getAttribute(name);
  }
  function addAttr(name, value2) {
    if (internalAttrs[name] !== value2) {
      internalAttrs[name] = value2;
    }
  }
  function removeAttr(name) {
    if (!(name in internalAttrs) || internalAttrs[name] != null) {
      internalAttrs[name] = void 0;
    }
  }
  function focus() {
    getElement().focus();
  }
  function blur() {
    getElement().blur();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.dirty === void 0 && $$bindings.dirty && dirty !== void 0)
    $$bindings.dirty(dirty);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.updateInvalid === void 0 && $$bindings.updateInvalid && updateInvalid !== void 0)
    $$bindings.updateInvalid(updateInvalid);
  if ($$props.emptyValueNull === void 0 && $$bindings.emptyValueNull && emptyValueNull !== void 0)
    $$bindings.emptyValueNull(emptyValueNull);
  if ($$props.emptyValueUndefined === void 0 && $$bindings.emptyValueUndefined && emptyValueUndefined !== void 0)
    $$bindings.emptyValueUndefined(emptyValueUndefined);
  if ($$props.getAttr === void 0 && $$bindings.getAttr && getAttr !== void 0)
    $$bindings.getAttr(getAttr);
  if ($$props.addAttr === void 0 && $$bindings.addAttr && addAttr !== void 0)
    $$bindings.addAttr(addAttr);
  if ($$props.removeAttr === void 0 && $$bindings.removeAttr && removeAttr !== void 0)
    $$bindings.removeAttr(removeAttr);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0)
    $$bindings.blur(blur);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    if (type === "file") {
      delete valueProp.value;
      valueProp = valueProp;
    } else {
      valueProp.value = value == null ? "" : value;
    }
  }
  return `<input${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-text-field__input": true
        }))
      },
      { type: escape_attribute_value(type) },
      {
        placeholder: escape_attribute_value(placeholder)
      },
      escape_object(valueProp),
      escape_object(internalAttrs),
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>`;
});
const Textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "value",
    "dirty",
    "invalid",
    "updateInvalid",
    "resizable",
    "getAttr",
    "addAttr",
    "removeAttr",
    "focus",
    "blur",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { value = "" } = $$props;
  let { dirty = false } = $$props;
  let { invalid = false } = $$props;
  let { updateInvalid = true } = $$props;
  let { resizable = true } = $$props;
  let element;
  let internalAttrs = {};
  function getAttr(name) {
    var _a;
    return name in internalAttrs ? (_a = internalAttrs[name]) !== null && _a !== void 0 ? _a : null : getElement().getAttribute(name);
  }
  function addAttr(name, value2) {
    if (internalAttrs[name] !== value2) {
      internalAttrs[name] = value2;
    }
  }
  function removeAttr(name) {
    if (!(name in internalAttrs) || internalAttrs[name] != null) {
      internalAttrs[name] = void 0;
    }
  }
  function focus() {
    getElement().focus();
  }
  function blur() {
    getElement().blur();
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
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.dirty === void 0 && $$bindings.dirty && dirty !== void 0)
    $$bindings.dirty(dirty);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.updateInvalid === void 0 && $$bindings.updateInvalid && updateInvalid !== void 0)
    $$bindings.updateInvalid(updateInvalid);
  if ($$props.resizable === void 0 && $$bindings.resizable && resizable !== void 0)
    $$bindings.resizable(resizable);
  if ($$props.getAttr === void 0 && $$bindings.getAttr && getAttr !== void 0)
    $$bindings.getAttr(getAttr);
  if ($$props.addAttr === void 0 && $$bindings.addAttr && addAttr !== void 0)
    $$bindings.addAttr(addAttr);
  if ($$props.removeAttr === void 0 && $$bindings.removeAttr && removeAttr !== void 0)
    $$bindings.removeAttr(removeAttr);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0)
    $$bindings.blur(blur);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<textarea${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-text-field__input": true
        }))
      },
      {
        style: escape_attribute_value(`${resizable ? "" : "resize: none; "}${style}`)
      },
      escape_object(internalAttrs),
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${escape(value || "")}</textarea>`;
});
const { Object: Object_1 } = globals;
const Textfield = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "ripple",
    "disabled",
    "required",
    "textarea",
    "variant",
    "noLabel",
    "label",
    "type",
    "value",
    "files",
    "invalid",
    "updateInvalid",
    "dirty",
    "prefix",
    "suffix",
    "validateOnValueChange",
    "useNativeValidation",
    "withLeadingIcon",
    "withTrailingIcon",
    "input",
    "floatingLabel",
    "lineRipple",
    "notchedOutline",
    "focus",
    "blur",
    "layout",
    "getElement"
  ]);
  let $$slots = compute_slots(slots);
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
  let { required = false } = $$props;
  let { textarea = false } = $$props;
  let { variant = textarea ? "outlined" : "standard" } = $$props;
  let { noLabel = false } = $$props;
  let { label = void 0 } = $$props;
  let { type = "text" } = $$props;
  let { value = $$restProps.input$emptyValueUndefined ? void 0 : uninitializedValue } = $$props;
  let { files = uninitializedValue } = $$props;
  const valued = !isUninitializedValue(value) || !isUninitializedValue(files);
  if (isUninitializedValue(value)) {
    value = void 0;
  }
  if (isUninitializedValue(files)) {
    files = null;
  }
  let { invalid = uninitializedValue } = $$props;
  let { updateInvalid = isUninitializedValue(invalid) } = $$props;
  if (isUninitializedValue(invalid)) {
    invalid = false;
  }
  let { dirty = false } = $$props;
  let { prefix = void 0 } = $$props;
  let { suffix = void 0 } = $$props;
  let { validateOnValueChange = updateInvalid } = $$props;
  let { useNativeValidation = updateInvalid } = $$props;
  let { withLeadingIcon = uninitializedValue } = $$props;
  let { withTrailingIcon = uninitializedValue } = $$props;
  let { input = void 0 } = $$props;
  let { floatingLabel = void 0 } = $$props;
  let { lineRipple = void 0 } = $$props;
  let { notchedOutline = void 0 } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let helperId = void 0;
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  new Promise((resolve) => resolve);
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });
  function focus() {
    input === null || input === void 0 ? void 0 : input.focus();
  }
  function blur() {
    input === null || input === void 0 ? void 0 : input.blur();
  }
  function layout() {
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
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.textarea === void 0 && $$bindings.textarea && textarea !== void 0)
    $$bindings.textarea(textarea);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.noLabel === void 0 && $$bindings.noLabel && noLabel !== void 0)
    $$bindings.noLabel(noLabel);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.updateInvalid === void 0 && $$bindings.updateInvalid && updateInvalid !== void 0)
    $$bindings.updateInvalid(updateInvalid);
  if ($$props.dirty === void 0 && $$bindings.dirty && dirty !== void 0)
    $$bindings.dirty(dirty);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  if ($$props.validateOnValueChange === void 0 && $$bindings.validateOnValueChange && validateOnValueChange !== void 0)
    $$bindings.validateOnValueChange(validateOnValueChange);
  if ($$props.useNativeValidation === void 0 && $$bindings.useNativeValidation && useNativeValidation !== void 0)
    $$bindings.useNativeValidation(useNativeValidation);
  if ($$props.withLeadingIcon === void 0 && $$bindings.withLeadingIcon && withLeadingIcon !== void 0)
    $$bindings.withLeadingIcon(withLeadingIcon);
  if ($$props.withTrailingIcon === void 0 && $$bindings.withTrailingIcon && withTrailingIcon !== void 0)
    $$bindings.withTrailingIcon(withTrailingIcon);
  if ($$props.input === void 0 && $$bindings.input && input !== void 0)
    $$bindings.input(input);
  if ($$props.floatingLabel === void 0 && $$bindings.floatingLabel && floatingLabel !== void 0)
    $$bindings.floatingLabel(floatingLabel);
  if ($$props.lineRipple === void 0 && $$bindings.lineRipple && lineRipple !== void 0)
    $$bindings.lineRipple(lineRipple);
  if ($$props.notchedOutline === void 0 && $$bindings.notchedOutline && notchedOutline !== void 0)
    $$bindings.notchedOutline(notchedOutline);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0)
    $$bindings.blur(blur);
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
    input && input.getElement();
    $$rendered = `${valued ? `<label${spread(
      [
        {
          class: escape_attribute_value(classMap({
            [className]: true,
            "mdc-text-field": true,
            "mdc-text-field--disabled": disabled,
            "mdc-text-field--textarea": textarea,
            "mdc-text-field--filled": variant === "filled",
            "mdc-text-field--outlined": variant === "outlined",
            "smui-text-field--standard": variant === "standard" && !textarea,
            "mdc-text-field--no-label": noLabel || label == null && !$$slots.label,
            "mdc-text-field--label-floating": value != null && value !== "",
            "mdc-text-field--with-leading-icon": isUninitializedValue(withLeadingIcon) ? $$slots.leadingIcon : withLeadingIcon,
            "mdc-text-field--with-trailing-icon": isUninitializedValue(withTrailingIcon) ? $$slots.trailingIcon : withTrailingIcon,
            "mdc-text-field--with-internal-counter": textarea && $$slots.internalCounter,
            "mdc-text-field--invalid": invalid,
            ...internalClasses
          }))
        },
        {
          style: escape_attribute_value(Object.entries(internalStyles).map(([name, value2]) => `${name}: ${value2};`).concat([style]).join(" "))
        },
        {
          for: escape_attribute_value(
            /* suppress a11y warning, since this is wrapped */
            void 0
          )
        },
        escape_object(exclude($$restProps, ["input$", "label$", "ripple$", "outline$", "helperLine$"]))
      ],
      {}
    )}${add_attribute("this", element, 0)}>${!textarea && variant !== "outlined" ? `${variant === "filled" ? `<span class="mdc-text-field__ripple"></span>` : ``} ${!noLabel && (label != null || $$slots.label) ? `${validate_component(FloatingLabel, "FloatingLabel").$$render(
      $$result,
      Object_1.assign(
        {},
        {
          floatAbove: value != null && value !== "" && (typeof value !== "number" || !isNaN(value))
        },
        { required },
        { wrapped: true },
        prefixFilter($$restProps, "label$"),
        { this: floatingLabel }
      ),
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
    )}` : ``}` : ``} ${textarea || variant === "outlined" ? `${validate_component(NotchedOutline, "NotchedOutline").$$render(
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
            Object_1.assign(
              {},
              {
                floatAbove: value != null && value !== "" && (typeof value !== "number" || !isNaN(value))
              },
              { required },
              { wrapped: true },
              prefixFilter($$restProps, "label$"),
              { this: floatingLabel }
            ),
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
    )}` : ``} ${validate_component(ContextFragment, "ContextFragment").$$render(
      $$result,
      {
        key: "SMUI:textfield:icon:leading",
        value: true
      },
      {},
      {
        default: () => {
          return `${slots.leadingIcon ? slots.leadingIcon({}) : ``}`;
        }
      }
    )} ${slots.default ? slots.default({}) : ``} ${textarea && typeof value === "string" ? `<span${add_attribute(
      "class",
      classMap({
        "mdc-text-field__resizer": !("input$resizable" in $$restProps) || $$restProps.input$resizable
      }),
      0
    )}>${validate_component(Textarea, "Textarea").$$render(
      $$result,
      Object_1.assign({}, { disabled }, { required }, { updateInvalid }, { "aria-controls": helperId }, { "aria-describedby": helperId }, prefixFilter($$restProps, "input$"), { this: input }, { value }, { dirty }, { invalid }),
      {
        this: ($$value) => {
          input = $$value;
          $$settled = false;
        },
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        },
        dirty: ($$value) => {
          dirty = $$value;
          $$settled = false;
        },
        invalid: ($$value) => {
          invalid = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${slots.internalCounter ? slots.internalCounter({}) : ``}</span>` : `${slots.prefix ? slots.prefix({}) : ``} ${prefix != null ? `${validate_component(Prefix, "Prefix").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(prefix)}`;
      }
    })}` : ``} ${validate_component(Input, "Input").$$render(
      $$result,
      Object_1.assign({}, { type }, { disabled }, { required }, { updateInvalid }, { "aria-controls": helperId }, { "aria-describedby": helperId }, noLabel && label != null ? { placeholder: label } : {}, prefixFilter($$restProps, "input$"), { this: input }, { value }, { files }, { dirty }, { invalid }),
      {
        this: ($$value) => {
          input = $$value;
          $$settled = false;
        },
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        },
        files: ($$value) => {
          files = $$value;
          $$settled = false;
        },
        dirty: ($$value) => {
          dirty = $$value;
          $$settled = false;
        },
        invalid: ($$value) => {
          invalid = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${suffix != null ? `${validate_component(Suffix, "Suffix").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(suffix)}`;
      }
    })}` : ``} ${slots.suffix ? slots.suffix({}) : ``}`} ${validate_component(ContextFragment, "ContextFragment").$$render(
      $$result,
      {
        key: "SMUI:textfield:icon:leading",
        value: false
      },
      {},
      {
        default: () => {
          return `${slots.trailingIcon ? slots.trailingIcon({}) : ``}`;
        }
      }
    )} ${!textarea && variant !== "outlined" && ripple ? `${validate_component(LineRipple, "LineRipple").$$render(
      $$result,
      Object_1.assign({}, prefixFilter($$restProps, "ripple$"), { this: lineRipple }),
      {
        this: ($$value) => {
          lineRipple = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</label>` : `<div${spread(
      [
        {
          class: escape_attribute_value(classMap({
            [className]: true,
            "mdc-text-field": true,
            "mdc-text-field--disabled": disabled,
            "mdc-text-field--textarea": textarea,
            "mdc-text-field--filled": variant === "filled",
            "mdc-text-field--outlined": variant === "outlined",
            "smui-text-field--standard": variant === "standard" && !textarea,
            "mdc-text-field--no-label": noLabel || !$$slots.label,
            "mdc-text-field--with-leading-icon": $$slots.leadingIcon,
            "mdc-text-field--with-trailing-icon": $$slots.trailingIcon,
            "mdc-text-field--invalid": invalid,
            ...internalClasses
          }))
        },
        {
          style: escape_attribute_value(Object.entries(internalStyles).map(([name, value2]) => `${name}: ${value2};`).concat([style]).join(" "))
        },
        escape_object(exclude($$restProps, ["input$", "label$", "ripple$", "outline$", "helperLine$"]))
      ],
      {}
    )}${add_attribute("this", element, 0)}>${slots.label ? slots.label({}) : ``} ${validate_component(ContextFragment, "ContextFragment").$$render(
      $$result,
      {
        key: "SMUI:textfield:icon:leading",
        value: true
      },
      {},
      {
        default: () => {
          return `${slots.leadingIcon ? slots.leadingIcon({}) : ``}`;
        }
      }
    )} ${slots.default ? slots.default({}) : ``} ${validate_component(ContextFragment, "ContextFragment").$$render(
      $$result,
      {
        key: "SMUI:textfield:icon:leading",
        value: false
      },
      {},
      {
        default: () => {
          return `${slots.trailingIcon ? slots.trailingIcon({}) : ``}`;
        }
      }
    )} ${slots.ripple ? slots.ripple({}) : ``}</div>`} ${$$slots.helper ? `${validate_component(HelperLine, "HelperLine").$$render($$result, Object_1.assign({}, prefixFilter($$restProps, "helperLine$")), {}, {
      default: () => {
        return `${slots.helper ? slots.helper({}) : ``}`;
      }
    })}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const css$1 = {
  code: ".inputFrame.svelte-1ko1l5{display:flex;flex-wrap:wrap;gap:1em;align-items:center;margin-top:1em}.preview.svelte-1ko1l5{all:unset}.preview *{all:default}",
  map: null
};
const WebPractice = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let htmlContent = "";
  let previewFrame;
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="inputFrame svelte-1ko1l5">${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        style: "min-width: 100%; min-height: 300px;",
        label: "HTML",
        textarea: true,
        value: htmlContent
      },
      {
        value: ($$value) => {
          htmlContent = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Preview`;
      }
    })} <iframe class="preview svelte-1ko1l5" style="width:100%; height:300px;"${add_attribute("this", previewFrame, 0)} data-svelte-h="svelte-1w8e77q"></iframe>`;
  } while (!$$settled);
  return $$rendered;
});
const css = {
  code: "article.svelte-9tb2l5{display:flex;flex-direction:column;gap:0.5em}p.svelte-9tb2l5{opacity:0.8}h4.svelte-9tb2l5{margin:0.5em 0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  let $navList, $$unsubscribe_navList;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Basic Syntax", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-y89own_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/syntax"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-y89own_END -->`, ""} <article class="svelte-9tb2l5"><h4 class="svelte-9tb2l5" data-svelte-h="svelte-pxy1ot">Basic Syntax</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-9tb2l5" data-svelte-h="svelte-1gn783g">HTML is a markup language, which means it is used to mark parts of documents to indicate how they should appear, in print or on a display. CSS was added to HTML in 1990s.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render($$result, {}, {}, {})}</article>`;
});
export {
  Page as default
};
