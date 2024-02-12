import { c as compute_rest_props } from './utils-yAS0eczJ.js';
import { c as create_ssr_component, a as get_current_component, s as spread, h as escape_attribute_value, b as escape_object, d as add_attribute } from './ssr-APL1hDOv.js';
import { f as forwardEventsBuilder, c as classMap } from './classAdderBuilder-0kAhHSI7.js';

const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "variant", "padded", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { variant = "raised" } = $$props;
  let { padded = false } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.padded === void 0 && $$bindings.padded && padded !== void 0)
    $$bindings.padded(padded);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-card": true,
          "mdc-card--outlined": variant === "outlined",
          "smui-card--padded": padded
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``} </div>`;
});

export { Card as C };
//# sourceMappingURL=Card-1SmK_YC9.js.map
