import { c as compute_rest_props, a as subscribe, b as set_store_value } from "./utils.js";
import { c as create_ssr_component, a as get_current_component, g as getContext, o as onDestroy, b as spread, d as escape_attribute_value, f as escape_object, h as add_attribute, s as setContext } from "./ssr2.js";
import { f as forwardEventsBuilder, c as classMap } from "./forwardEventsBuilder.js";
import { e as exclude, p as prefixFilter } from "./prefixFilter.js";
import { w as writable } from "./index2.js";
import { c as classAdderBuilder } from "./classAdderBuilder.js";
let counter = 0;
const Tooltip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let roleProps;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "id",
    "unbounded",
    "xPos",
    "yPos",
    "persistent",
    "interactive",
    "hideFromScreenreader",
    "showDelay",
    "hideDelay",
    "surface$class",
    "surface$style",
    "attachScrollHandler",
    "removeScrollHandler",
    "getElement"
  ]);
  let $$unsubscribe_anchor;
  let $$unsubscribe_tooltip;
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { id = "SMUI-tooltip-" + counter++ } = $$props;
  let { unbounded = false } = $$props;
  let { xPos = "detected" } = $$props;
  let { yPos = "detected" } = $$props;
  let { persistent = false } = $$props;
  let { interactive = persistent } = $$props;
  let { hideFromScreenreader = false } = $$props;
  let { showDelay = void 0 } = $$props;
  let { hideDelay = void 0 } = $$props;
  let { surface$class = "" } = $$props;
  let { surface$style = "" } = $$props;
  let element;
  let nonReactiveLocationStore = {
    setParent(value) {
      Object.defineProperty(this, "parent", { value });
    },
    setNextSibling(value) {
      Object.defineProperty(this, "nextSibling", { value });
    }
  };
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};
  let surfaceAnimationStyles = {};
  let anchor = getContext("SMUI:tooltip:wrapper:anchor");
  $$unsubscribe_anchor = subscribe(anchor, (value) => value);
  let tooltip = getContext("SMUI:tooltip:wrapper:tooltip");
  $$unsubscribe_tooltip = subscribe(tooltip, (value) => value);
  const rich = getContext("SMUI:tooltip:rich");
  onDestroy(() => {
    var _a;
    if (!rich && typeof document !== "undefined" && document.body === getElement().parentElement && nonReactiveLocationStore.parent !== getElement().parentElement && ((_a = nonReactiveLocationStore.parent) === null || _a === void 0 ? void 0 : _a.insertBefore) && nonReactiveLocationStore.nextSibling) {
      nonReactiveLocationStore.parent.insertBefore(getElement(), nonReactiveLocationStore.nextSibling);
    }
  });
  function attachScrollHandler(addEventListenerFn) {
  }
  function removeScrollHandler(removeEventHandlerFn) {
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.unbounded === void 0 && $$bindings.unbounded && unbounded !== void 0) $$bindings.unbounded(unbounded);
  if ($$props.xPos === void 0 && $$bindings.xPos && xPos !== void 0) $$bindings.xPos(xPos);
  if ($$props.yPos === void 0 && $$bindings.yPos && yPos !== void 0) $$bindings.yPos(yPos);
  if ($$props.persistent === void 0 && $$bindings.persistent && persistent !== void 0) $$bindings.persistent(persistent);
  if ($$props.interactive === void 0 && $$bindings.interactive && interactive !== void 0) $$bindings.interactive(interactive);
  if ($$props.hideFromScreenreader === void 0 && $$bindings.hideFromScreenreader && hideFromScreenreader !== void 0) $$bindings.hideFromScreenreader(hideFromScreenreader);
  if ($$props.showDelay === void 0 && $$bindings.showDelay && showDelay !== void 0) $$bindings.showDelay(showDelay);
  if ($$props.hideDelay === void 0 && $$bindings.hideDelay && hideDelay !== void 0) $$bindings.hideDelay(hideDelay);
  if ($$props.surface$class === void 0 && $$bindings.surface$class && surface$class !== void 0) $$bindings.surface$class(surface$class);
  if ($$props.surface$style === void 0 && $$bindings.surface$style && surface$style !== void 0) $$bindings.surface$style(surface$style);
  if ($$props.attachScrollHandler === void 0 && $$bindings.attachScrollHandler && attachScrollHandler !== void 0) $$bindings.attachScrollHandler(attachScrollHandler);
  if ($$props.removeScrollHandler === void 0 && $$bindings.removeScrollHandler && removeScrollHandler !== void 0) $$bindings.removeScrollHandler(removeScrollHandler);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0) $$bindings.getElement(getElement);
  roleProps = {
    role: rich && interactive ? "dialog" : "tooltip",
    tabindex: rich && persistent ? -1 : void 0
  };
  $$unsubscribe_anchor();
  $$unsubscribe_tooltip();
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-tooltip": true,
          "mdc-tooltip--rich": rich,
          ...internalClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
      },
      { "aria-hidden": "true" },
      { id: escape_attribute_value(id) },
      {
        "data-mdc-tooltip-persist": escape_attribute_value(rich && persistent ? "true" : void 0)
      },
      {
        "data-mdc-tooltip-persistent": escape_attribute_value(
          /* MDC uses this attr, but document the one above */
          rich && persistent ? "true" : void 0
        )
      },
      {
        "data-mdc-tooltip-has-caret": escape_attribute_value(void 0)
      },
      {
        "data-hide-tooltip-from-screenreader": escape_attribute_value(hideFromScreenreader ? "true" : void 0)
      },
      escape_object(roleProps),
      escape_object(internalAttrs),
      escape_object(exclude($$restProps, ["surface$"]))
    ],
    {}
  )}${add_attribute("this", element, 0)}><div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [surface$class]: true,
          "mdc-tooltip__surface": true,
          "mdc-tooltip__surface-animation": true
        }))
      },
      {
        style: escape_attribute_value(Object.entries(surfaceAnimationStyles).map(([name, value]) => `${name}: ${value};`).concat([surface$style]).join(" "))
      },
      escape_object(prefixFilter($$restProps, "surface$"))
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div> </div>`;
});
const Wrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "rich", "getElement"]);
  let $tooltip, $$unsubscribe_tooltip;
  let $anchor, $$unsubscribe_anchor;
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { rich = false } = $$props;
  let element;
  const anchor = writable(void 0);
  $$unsubscribe_anchor = subscribe(anchor, (value) => $anchor = value);
  const tooltip = writable(void 0);
  $$unsubscribe_tooltip = subscribe(tooltip, (value) => $tooltip = value);
  setContext("SMUI:tooltip:wrapper:anchor", anchor);
  setContext("SMUI:tooltip:wrapper:tooltip", tooltip);
  setContext("SMUI:tooltip:rich", rich);
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.rich === void 0 && $$bindings.rich && rich !== void 0) $$bindings.rich(rich);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0) $$bindings.getElement(getElement);
  {
    if ($tooltip && !$anchor) {
      set_store_value(anchor, $anchor = $tooltip.previousElementSibling, $anchor);
    }
  }
  $$unsubscribe_tooltip();
  $$unsubscribe_anchor();
  return `${rich ? `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-tooltip-wrapper--rich": true
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</div>` : `${slots.default ? slots.default({}) : ``}`}`;
});
const Title = classAdderBuilder({
  class: "mdc-tooltip__title",
  tag: "h2"
});
const Content = classAdderBuilder({
  class: "mdc-tooltip__content",
  tag: "div"
});
classAdderBuilder({
  class: "mdc-tooltip__content-link",
  tag: "a"
});
const RichActions = classAdderBuilder({
  class: "mdc-tooltip--rich-actions",
  tag: "div",
  contexts: {
    "SMUI:button:context": "tooltip:rich-actions"
  }
});
export {
  Content as C,
  RichActions as R,
  Tooltip as T,
  Wrapper as W,
  Title as a
};
