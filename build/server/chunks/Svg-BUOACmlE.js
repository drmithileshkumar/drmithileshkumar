import { e as compute_rest_props } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, b as get_current_component, d as spread, h as escape_object, a as add_attribute, g as getContext, v as validate_component, m as missing_component } from './ssr2-q3O0l93f.js';
import { f as forwardEventsBuilder, c as classMap, S as SmuiElement } from './SmuiElement-DA9PKsv2.js';

const CommonIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "on", "component", "tag", "getElement"]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { on = false } = $$props;
  let element;
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? "i" : void 0 } = $$props;
  const svg = component === Svg;
  const context = getContext("SMUI:icon:context");
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.on === void 0 && $$bindings.on && on !== void 0) $$bindings.on(on);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0) $$bindings.component(component);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0) $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign(
        {},
        { tag },
        { use: [forwardEvents, ...use] },
        {
          class: classMap({
            [className]: true,
            "mdc-button__icon": context === "button",
            "mdc-fab__icon": context === "fab",
            "mdc-icon-button__icon": context === "icon-button",
            "mdc-icon-button__icon--on": context === "icon-button" && on,
            "mdc-tab__icon": context === "tab",
            "mdc-banner__icon": context === "banner",
            "mdc-segmented-button__icon": context === "segmented-button"
          })
        },
        { "aria-hidden": "true" },
        svg ? { focusable: "false", tabindex: "-1" } : {},
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  if (console && console.warn) {
    console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  }
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0) $$bindings.getElement(getElement);
  return `<svg${spread([escape_object($$restProps)], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</svg>`;
});

export { CommonIcon as C, Svg as S };
//# sourceMappingURL=Svg-BUOACmlE.js.map
