import { e as compute_rest_props } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, b as get_current_component, d as spread, f as escape_attribute_value, h as escape_object, a as add_attribute } from './ssr2-q3O0l93f.js';
import { f as forwardEventsBuilder, c as classMap } from './SmuiElement-DA9PKsv2.js';

const Media = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "aspectRatio", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { aspectRatio = void 0 } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.aspectRatio === void 0 && $$bindings.aspectRatio && aspectRatio !== void 0) $$bindings.aspectRatio(aspectRatio);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0) $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-card__media": true,
          "mdc-card__media--square": aspectRatio === "square",
          "mdc-card__media--16-9": aspectRatio === "16x9"
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``} </div>`;
});

export { Media as M };
//# sourceMappingURL=Media-C8oNwSit.js.map
