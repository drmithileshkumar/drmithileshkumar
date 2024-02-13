import { c as compute_rest_props } from "./utils.js";
import { c as create_ssr_component, a as get_current_component, g as getContext, s as spread, b as escape_attribute_value, d as escape_object, f as add_attribute } from "./ssr.js";
import { f as forwardEventsBuilder, c as classMap } from "./classAdderBuilder.js";
const Graphic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let element;
  let menuSelectionGroup = getContext("SMUI:list:graphic:menu-selection-group");
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<span${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-deprecated-list-item__graphic": true,
          "mdc-menu__selection-group-icon": menuSelectionGroup
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</span>`;
});
export {
  Graphic as G
};
