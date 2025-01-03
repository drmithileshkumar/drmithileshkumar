import { c as compute_rest_props } from "./utils.js";
import { c as create_ssr_component, a as get_current_component, s as setContext, b as spread, f as escape_object, h as add_attribute } from "./ssr2.js";
import { f as forwardEventsBuilder } from "./SmuiElement.js";
const Head = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let element;
  setContext("SMUI:data-table:row:header", true);
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0) $$bindings.getElement(getElement);
  return `<thead${spread([escape_object($$restProps)], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</thead>`;
});
export {
  Head as H
};
