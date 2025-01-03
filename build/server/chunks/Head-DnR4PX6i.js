import { e as compute_rest_props } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, b as get_current_component, s as setContext, d as spread, h as escape_object, a as add_attribute } from './ssr2-q3O0l93f.js';
import { f as forwardEventsBuilder } from './SmuiElement-DA9PKsv2.js';

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

export { Head as H };
//# sourceMappingURL=Head-DnR4PX6i.js.map
