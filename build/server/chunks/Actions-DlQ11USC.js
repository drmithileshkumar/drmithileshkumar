import { e as compute_rest_props } from './utils-DhkojCd_.js';
import { c as create_ssr_component, b as get_current_component, s as setContext, d as spread, f as escape_attribute_value, h as escape_object, a as add_attribute } from './ssr2-CDgUAJs6.js';
import { f as forwardEventsBuilder, c as classMap } from './forwardEventsBuilder-DOj2b3iN.js';

const Actions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "fullBleed", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { fullBleed = false } = $$props;
  let element;
  setContext("SMUI:button:context", "card:action");
  setContext("SMUI:icon-button:context", "card:action");
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.fullBleed === void 0 && $$bindings.fullBleed && fullBleed !== void 0) $$bindings.fullBleed(fullBleed);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0) $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-card__actions": true,
          "mdc-card__actions--full-bleed": fullBleed
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``} </div>`;
});

export { Actions as A };
//# sourceMappingURL=Actions-DlQ11USC.js.map
