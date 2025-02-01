import { c as classAdderBuilder } from './classAdderBuilder-BpEtv-Pl.js';
import { e as compute_rest_props } from './utils-DhkojCd_.js';
import { c as create_ssr_component, b as get_current_component, s as setContext, d as spread, f as escape_attribute_value, h as escape_object, a as add_attribute } from './ssr2-CDgUAJs6.js';
import { f as forwardEventsBuilder, c as classMap } from './forwardEventsBuilder-DOj2b3iN.js';

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

export { Row as R, Section as S, Title as T };
//# sourceMappingURL=Title-HH4z9KSc.js.map
