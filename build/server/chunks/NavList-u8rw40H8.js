import { c as create_ssr_component, a as get_current_component, g as getContext, v as validate_component, m as missing_component, h as add_attribute, e as escape, i as each, b as spread, f as escape_object } from './ssr-HSn4Y_Gl.js';
import { L as List, I as Item } from './Item-20QUQFRc.js';
import { T as Text } from './Subheader-nJdHlnFA.js';
import { G as Graphic } from './Graphic-XmKV_FS_.js';
import { d as compute_rest_props } from './utils-TYqgk8Fj.js';
import { f as forwardEventsBuilder, a as classMap, S as SmuiElement } from './classAdderBuilder-_WD_ZDF6.js';
import { I as IconButton } from './IconButton-EupF56OB.js';
import './client-_MkdHwD5.js';
import './stores3-yqJRp7mD.js';

/* empty css                                      */
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
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.on === void 0 && $$bindings.on && on !== void 0)
    $$bindings.on(on);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
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
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<svg${spread([escape_object($$restProps)], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</svg>`;
});
const css = {
  code: "a.svelte-1k0a8f0{text-decoration:none}",
  map: null
};
const NavList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { expanded = false } = $$props;
  let { name } = $$props;
  let { url } = $$props;
  let { topics } = $$props;
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.topics === void 0 && $$bindings.topics && topics !== void 0)
    $$bindings.topics(topics);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<span style="display:flex;flex-direction:row;align-items:center;">${validate_component(IconButton, "IconButton").$$render(
      $$result,
      { toggle: true, pressed: expanded },
      {
        pressed: ($$value) => {
          expanded = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons", on: true }, {}, {
            default: () => {
              return `remove`;
            }
          })} ${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `add`;
            }
          })}`;
        }
      }
    )} <a${add_attribute("href", url, 0)} style="color:currentColor;padding: 0.5em 0;margin:0;width:100%;font-weight: bold" class="svelte-1k0a8f0">${escape(name)}</a></span> ${expanded ? `${validate_component(List, "List").$$render(
      $$result,
      {
        style: "margin:0 0 0 0.5em;box-shadow: -1px 1px 1px rgba(0,0,0,0.1)",
        dense: true
      },
      {},
      {
        default: () => {
          return `${each(topics, (topic) => {
            return `${topic.topics ? `${validate_component(NavList, "svelte:self").$$render($$result, Object.assign({}, topic), {}, {})}` : `${validate_component(Item, "Item").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
                  default: () => {
                    return `topic`;
                  }
                })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(topic.name)}`;
                  }
                })} `;
              }
            })}`}`;
          })}`;
        }
      }
    )} ` : ``}`;
  } while (!$$settled);
  return $$rendered;
});

export { CommonIcon as C, NavList as N, Svg as S };
//# sourceMappingURL=NavList-u8rw40H8.js.map
