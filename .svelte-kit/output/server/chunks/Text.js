import { r as run_all, c as compute_rest_props, a as subscribe } from "./utils.js";
import { l as set_current_component, n as current_component, c as create_ssr_component, b as spread, d as escape_attribute_value, f as escape_object, h as add_attribute, a as get_current_component, g as getContext, v as validate_component } from "./ssr2.js";
import { c as classMap, f as forwardEventsBuilder } from "./SmuiElement.js";
const dirty_components = [];
const binding_callbacks = [];
let render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = /* @__PURE__ */ Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
const seen_callbacks = /* @__PURE__ */ new Set();
let flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length) binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
const Checkmark = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "getElement"]);
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0) $$bindings.getElement(getElement);
  return `<span${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-chip__checkmark": true
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}><svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30"><path class="mdc-chip__checkmark-path" fill="none" stroke="black" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> </span>`;
});
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let roleProps;
  let $$restProps = compute_rest_props($$props, ["use", "class", "tabindex", "focus", "getInput", "getElement"]);
  let $choice, $$unsubscribe_choice;
  let $filter, $$unsubscribe_filter;
  let $nonInteractive, $$unsubscribe_nonInteractive;
  let $isSelected, $$unsubscribe_isSelected;
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { tabindex = getContext("SMUI:chips:chip:focusable") ? 0 : -1 } = $$props;
  let element;
  let input = void 0;
  let primaryAction = void 0;
  let internalAttrs = {};
  const nonInteractive = getContext("SMUI:chips:nonInteractive");
  $$unsubscribe_nonInteractive = subscribe(nonInteractive, (value) => $nonInteractive = value);
  const choice = getContext("SMUI:chips:choice");
  $$unsubscribe_choice = subscribe(choice, (value) => $choice = value);
  const filter = getContext("SMUI:chips:filter");
  $$unsubscribe_filter = subscribe(filter, (value) => $filter = value);
  const isSelected = getContext("SMUI:chips:chip:isSelected");
  $$unsubscribe_isSelected = subscribe(isSelected, (value) => $isSelected = value);
  function waitForTabindex(fn) {
    if (internalAttrs["tabindex"] !== element.getAttribute("tabindex")) {
      tick().then(fn);
    }
  }
  function focus() {
    waitForTabindex(() => {
    });
  }
  function getInput() {
    return input && input.getElement();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0) $$bindings.tabindex(tabindex);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0) $$bindings.focus(focus);
  if ($$props.getInput === void 0 && $$bindings.getInput && getInput !== void 0) $$bindings.getInput(getInput);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0) $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    roleProps = {
      role: $filter ? "checkbox" : $choice ? "radio" : "button",
      tabindex
    };
    $$rendered = `${$filter ? `${validate_component(Checkmark, "Checkmark").$$render(
      $$result,
      { this: input },
      {
        this: ($$value) => {
          input = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} <span role="gridcell"${add_attribute("this", element, 0)}>${$nonInteractive ? `<span class="mdc-chip__text">${slots.default ? slots.default({}) : ``}</span>` : `<span${spread(
      [
        {
          class: escape_attribute_value(classMap({
            [className]: true,
            "mdc-chip__primary-action": true
          }))
        },
        escape_object($filter || $choice ? {
          "aria-selected": $isSelected ? "true" : "false"
        } : {}),
        escape_object(roleProps),
        escape_object(internalAttrs),
        escape_object($$restProps)
      ],
      {}
    )}${add_attribute("this", primaryAction, 0)}><span class="mdc-chip__text">${slots.default ? slots.default({}) : ``}</span></span>`} </span>`;
  } while (!$$settled);
  $$unsubscribe_choice();
  $$unsubscribe_filter();
  $$unsubscribe_nonInteractive();
  $$unsubscribe_isSelected();
  return $$rendered;
});
export {
  Text as T
};
