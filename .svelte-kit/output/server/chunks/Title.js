import { c as classAdderBuilder } from "./classAdderBuilder.js";
import { c as compute_rest_props } from "./utils.js";
import { c as create_ssr_component, a as get_current_component, h as setContext, s as spread, b as escape_attribute_value, d as escape_object, f as add_attribute } from "./ssr2.js";
import { f as forwardEventsBuilder, c as classMap } from "./forwardEventsBuilder.js";
const Row = classAdderBuilder({
  class: "mdc-top-app-bar__row",
  tag: "div"
});
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "align", "toolbar", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { align = "start" } = $$props;
  let { toolbar = false } = $$props;
  let element;
  setContext("SMUI:icon-button:context", toolbar ? "top-app-bar:action" : "top-app-bar:navigation");
  setContext("SMUI:button:context", toolbar ? "top-app-bar:action" : "top-app-bar:navigation");
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0) $$bindings.align(align);
  if ($$props.toolbar === void 0 && $$bindings.toolbar && toolbar !== void 0) $$bindings.toolbar(toolbar);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0) $$bindings.getElement(getElement);
  return `<section${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-top-app-bar__section": true,
          "mdc-top-app-bar__section--align-start": align === "start",
          "mdc-top-app-bar__section--align-end": align === "end"
        }))
      },
      escape_object(toolbar ? { role: "toolbar" } : {}),
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``} </section>`;
});
const Title = classAdderBuilder({
  class: "mdc-top-app-bar__title",
  tag: "span"
});
export {
  Row as R,
  Section as S,
  Title as T
};
