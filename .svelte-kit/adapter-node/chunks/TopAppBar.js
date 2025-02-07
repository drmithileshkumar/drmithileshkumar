import { c as compute_rest_props } from "./utils.js";
import { c as create_ssr_component, a as get_current_component, s as spread, b as escape_attribute_value, d as escape_object, f as add_attribute } from "./ssr2.js";
import { r as readable } from "./index2.js";
import { f as forwardEventsBuilder, c as classMap } from "./forwardEventsBuilder.js";
const TopAppBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "variant",
    "color",
    "collapsed",
    "prominent",
    "dense",
    "scrollTarget",
    "getPropStore",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value) {
    return value === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { variant = "standard" } = $$props;
  let { color = "primary" } = $$props;
  let { collapsed = uninitializedValue } = $$props;
  if (isUninitializedValue(collapsed)) {
    collapsed = false;
  }
  let { prominent = false } = $$props;
  let { dense = false } = $$props;
  let { scrollTarget = void 0 } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let propStoreSet;
  let propStore = readable({ variant, prominent, dense }, (set) => {
    propStoreSet = set;
  });
  let oldScrollTarget = void 0;
  function handleTargetScroll() {
  }
  function getPropStore() {
    return propStore;
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.collapsed === void 0 && $$bindings.collapsed && collapsed !== void 0) $$bindings.collapsed(collapsed);
  if ($$props.prominent === void 0 && $$bindings.prominent && prominent !== void 0) $$bindings.prominent(prominent);
  if ($$props.dense === void 0 && $$bindings.dense && dense !== void 0) $$bindings.dense(dense);
  if ($$props.scrollTarget === void 0 && $$bindings.scrollTarget && scrollTarget !== void 0) $$bindings.scrollTarget(scrollTarget);
  if ($$props.getPropStore === void 0 && $$bindings.getPropStore && getPropStore !== void 0) $$bindings.getPropStore(getPropStore);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0) $$bindings.getElement(getElement);
  {
    if (propStoreSet) {
      propStoreSet({ variant, prominent, dense });
    }
  }
  {
    if (oldScrollTarget !== scrollTarget) {
      if (oldScrollTarget) {
        oldScrollTarget.removeEventListener("scroll", handleTargetScroll);
      }
      if (scrollTarget) {
        scrollTarget.addEventListener("scroll", handleTargetScroll);
      }
      oldScrollTarget = scrollTarget;
    }
  }
  return ` <header${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-top-app-bar": true,
          "mdc-top-app-bar--short": variant === "short",
          "mdc-top-app-bar--short-collapsed": collapsed,
          "mdc-top-app-bar--fixed": variant === "fixed",
          "smui-top-app-bar--static": variant === "static",
          "smui-top-app-bar--color-secondary": color === "secondary",
          "mdc-top-app-bar--prominent": prominent,
          "mdc-top-app-bar--dense": dense,
          ...internalClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``} </header>`;
});
export {
  TopAppBar as T
};
