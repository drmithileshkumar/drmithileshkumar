import { e as compute_rest_props } from './utils-iZWwlC2F.js';
import { f as forwardEventsBuilder, c as classMap, g as globals, S as SmuiElement } from './SmuiElement-DA9PKsv2.js';
import { c as create_ssr_component, b as get_current_component, s as setContext, v as validate_component, m as missing_component } from './ssr2-q3O0l93f.js';
import { R as Ripple } from './Ripple-Zq_D_mxy.js';

const { Object: Object_1 } = globals;
const Fab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "ripple",
    "focusRing",
    "color",
    "mini",
    "exited",
    "extended",
    "touch",
    "href",
    "component",
    "tag",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { focusRing = false } = $$props;
  let { color = "secondary" } = $$props;
  let { mini = false } = $$props;
  let { exited = false } = $$props;
  let { extended = false } = $$props;
  let { touch = false } = $$props;
  let { href = void 0 } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? href == null ? "button" : "a" : void 0 } = $$props;
  setContext("SMUI:label:context", "fab");
  setContext("SMUI:icon:context", "fab");
  function addClass(className2) {
    if (!internalClasses[className2]) {
      internalClasses[className2] = true;
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0) $$bindings.ripple(ripple);
  if ($$props.focusRing === void 0 && $$bindings.focusRing && focusRing !== void 0) $$bindings.focusRing(focusRing);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.mini === void 0 && $$bindings.mini && mini !== void 0) $$bindings.mini(mini);
  if ($$props.exited === void 0 && $$bindings.exited && exited !== void 0) $$bindings.exited(exited);
  if ($$props.extended === void 0 && $$bindings.extended && extended !== void 0) $$bindings.extended(extended);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0) $$bindings.touch(touch);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
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
      Object_1.assign(
        {},
        { tag },
        {
          use: [
            [
              Ripple,
              {
                ripple,
                unbounded: false,
                color,
                disabled: !!$$restProps.disabled,
                addClass,
                removeClass,
                addStyle
              }
            ],
            forwardEvents,
            ...use
          ]
        },
        {
          class: classMap({
            [className]: true,
            "mdc-fab": true,
            "mdc-fab--mini": mini,
            "mdc-fab--exited": exited,
            "mdc-fab--extended": extended,
            "smui-fab--color-primary": color === "primary",
            "mdc-fab--touch": touch,
            ...internalClasses
          })
        },
        {
          style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" ")
        },
        { href },
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
          return `<div class="mdc-fab__ripple"></div> ${focusRing ? `<div class="mdc-fab__focus-ring"></div>` : ``} ${slots.default ? slots.default({}) : ``}${touch ? `<div class="mdc-fab__touch"></div>` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});

export { Fab as F };
//# sourceMappingURL=Fab-BRqAjlUV.js.map
