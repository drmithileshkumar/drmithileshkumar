import { c as compute_rest_props, s as subscribe, b as set_store_value, d as null_to_empty } from "../../../chunks/utils.js";
import { c as create_ssr_component, a as get_current_component, h as setContext, o as onDestroy, s as spread, b as escape_attribute_value, d as escape_object, f as add_attribute, v as validate_component, m as missing_component, g as getContext, e as escape } from "../../../chunks/ssr.js";
import { MDCDismissibleDrawerFoundation, MDCModalDrawerFoundation } from "@material/drawer";
import { f as forwardEventsBuilder, c as classMap, a as classAdderBuilder, S as SmuiElement, g as globals } from "../../../chunks/classAdderBuilder.js";
import { d as dispatch, L as List, I as Item } from "../../../chunks/Item.js";
import { R as Ripple } from "../../../chunks/Ripple.js";
import { S as Svg, N as NavList, C as CommonIcon } from "../../../chunks/NavList.js";
import { T as Text, P as PrimaryText, S as SecondaryText } from "../../../chunks/Subheader.js";
import { G as Graphic } from "../../../chunks/Graphic.js";
import { B as Button } from "../../../chunks/Button.js";
import "../../../chunks/client.js";
import { p as page } from "../../../chunks/stores.js";
import { i as isAuth, p as profileImage, n as navList, e as showRight, r as refreshApp, d as darkMode, T as TopBarHeight, s as showLeft, c as currentPath } from "../../../chunks/stores3.js";
import { C as Card } from "../../../chunks/Card.js";
import { C as Content$1 } from "../../../chunks/ActionIcons.js";
/* empty css                                                 */
import { T as TopAppBar } from "../../../chunks/TopAppBar.js";
import { R as Row, S as Section } from "../../../chunks/Title.js";
import { I as IconButton } from "../../../chunks/IconButton.js";
import { p as presentationMode } from "../../../chunks/stores4.js";
/* empty css                                                     */
const Drawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "variant", "open", "fixed", "setOpen", "isOpen", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { variant = void 0 } = $$props;
  let { open = false } = $$props;
  let { fixed = true } = $$props;
  let element;
  let instance = void 0;
  let internalClasses = {};
  let previousFocus = null;
  let focusTrap;
  let scrim = false;
  setContext("SMUI:list:nav", true);
  setContext("SMUI:list:item:nav", true);
  setContext("SMUI:list:wrapFocus", true);
  let oldVariant = variant;
  onDestroy(() => {
    instance && instance.destroy();
    scrim && scrim.removeEventListener("SMUIDrawerScrim:click", handleScrimClick);
  });
  function getInstance() {
    var _a, _b;
    if (scrim) {
      scrim.removeEventListener("SMUIDrawerScrim:click", handleScrimClick);
    }
    if (variant === "modal") {
      scrim = (_b = (_a = element.parentNode) === null || _a === void 0 ? void 0 : _a.querySelector(".mdc-drawer-scrim")) !== null && _b !== void 0 ? _b : false;
      if (scrim) {
        scrim.addEventListener("SMUIDrawerScrim:click", handleScrimClick);
      }
    }
    const Foundation = variant === "dismissible" ? MDCDismissibleDrawerFoundation : variant === "modal" ? MDCModalDrawerFoundation : void 0;
    return Foundation ? new Foundation({
      addClass,
      removeClass,
      hasClass,
      elementHasClass: (element2, className2) => element2.classList.contains(className2),
      saveFocus: () => previousFocus = document.activeElement,
      restoreFocus: () => {
        if (previousFocus && "focus" in previousFocus && element.contains(document.activeElement)) {
          previousFocus.focus();
        }
      },
      focusActiveNavigationItem: () => {
        const activeNavItemEl = element.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");
        if (activeNavItemEl) {
          activeNavItemEl.focus();
        }
      },
      notifyClose: () => {
        open = false;
        dispatch(element, "SMUIDrawer:closed", void 0, void 0, true);
      },
      notifyOpen: () => {
        open = true;
        dispatch(element, "SMUIDrawer:opened", void 0, void 0, true);
      },
      trapFocus: () => focusTrap.trapFocus(),
      releaseFocus: () => focusTrap.releaseFocus()
    }) : void 0;
  }
  function hasClass(className2) {
    return className2 in internalClasses ? internalClasses[className2] : getElement().classList.contains(className2);
  }
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
  function handleScrimClick() {
    instance && "handleScrimClick" in instance && instance.handleScrimClick();
  }
  function setOpen(value) {
    open = value;
  }
  function isOpen() {
    return open;
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
  if ($$props.setOpen === void 0 && $$bindings.setOpen && setOpen !== void 0)
    $$bindings.setOpen(setOpen);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    if (oldVariant !== variant) {
      oldVariant = variant;
      instance && instance.destroy();
      internalClasses = {};
      instance = getInstance();
      instance && instance.init();
    }
  }
  {
    if (instance && instance.isOpen() !== open) {
      if (open) {
        instance.open();
      } else {
        instance.close();
      }
    }
  }
  return `<aside${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-drawer": true,
          "mdc-drawer--dismissible": variant === "dismissible",
          "mdc-drawer--modal": variant === "modal",
          "smui-drawer__absolute": variant === "modal" && !fixed,
          ...internalClasses
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``} </aside>`;
});
const AppContent = classAdderBuilder({
  class: "mdc-drawer-app-content",
  tag: "div"
});
const Content = classAdderBuilder({
  class: "mdc-drawer__content",
  tag: "div"
});
classAdderBuilder({
  class: "mdc-drawer__header",
  tag: "div"
});
classAdderBuilder({
  class: "mdc-drawer__title",
  tag: "h1"
});
classAdderBuilder({
  class: "mdc-drawer__subtitle",
  tag: "h2"
});
const Scrim = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "fixed", "component", "tag", "getElement"]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { fixed = true } = $$props;
  let element;
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? "div" : void 0 } = $$props;
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
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
            "mdc-drawer-scrim": true,
            "smui-drawer-scrim__absolute": !fixed
          })
        },
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
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.focusRing === void 0 && $$bindings.focusRing && focusRing !== void 0)
    $$bindings.focusRing(focusRing);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.mini === void 0 && $$bindings.mini && mini !== void 0)
    $$bindings.mini(mini);
  if ($$props.exited === void 0 && $$bindings.exited && exited !== void 0)
    $$bindings.exited(exited);
  if ($$props.extended === void 0 && $$bindings.extended && extended !== void 0)
    $$bindings.extended(extended);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0)
    $$bindings.touch(touch);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
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
const Separator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "padded",
    "inset",
    "insetLeading",
    "insetTrailing",
    "insetPadding",
    "component",
    "tag",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { padded = false } = $$props;
  let { inset = false } = $$props;
  let { insetLeading = false } = $$props;
  let { insetTrailing = false } = $$props;
  let { insetPadding = false } = $$props;
  let element;
  let nav = getContext("SMUI:list:item:nav");
  let context = getContext("SMUI:separator:context");
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? nav || context !== "list" ? "hr" : "li" : void 0 } = $$props;
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.padded === void 0 && $$bindings.padded && padded !== void 0)
    $$bindings.padded(padded);
  if ($$props.inset === void 0 && $$bindings.inset && inset !== void 0)
    $$bindings.inset(inset);
  if ($$props.insetLeading === void 0 && $$bindings.insetLeading && insetLeading !== void 0)
    $$bindings.insetLeading(insetLeading);
  if ($$props.insetTrailing === void 0 && $$bindings.insetTrailing && insetTrailing !== void 0)
    $$bindings.insetTrailing(insetTrailing);
  if ($$props.insetPadding === void 0 && $$bindings.insetPadding && insetPadding !== void 0)
    $$bindings.insetPadding(insetPadding);
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
            "mdc-deprecated-list-divider": true,
            "mdc-deprecated-list-divider--padded": padded,
            "mdc-deprecated-list-divider--inset": inset,
            "mdc-deprecated-list-divider--inset-leading": insetLeading,
            "mdc-deprecated-list-divider--inset-trailing": insetTrailing,
            "mdc-deprecated-list-divider--inset-padding": insetPadding
          })
        },
        { role: "separator" },
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const css$6 = {
  code: "nav.svelte-1hx4pyo{overflow-y:auto;display:flex;justify-content:start;flex-direction:column;padding-bottom:5em}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $isAuth, $$unsubscribe_isAuth;
  let $profileImage, $$unsubscribe_profileImage;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_isAuth = subscribe(isAuth, (value) => $isAuth = value);
  $$unsubscribe_profileImage = subscribe(profileImage, (value) => $profileImage = value);
  $$result.css.add(css$6);
  set_store_value(isAuth, $isAuth = $page.data.user, $isAuth);
  $$unsubscribe_page();
  $$unsubscribe_isAuth();
  $$unsubscribe_profileImage();
  return `<nav class="svelte-1hx4pyo"><div class="top">${validate_component(List, "List").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `local_library`;
            }
          })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `Courses`;
            }
          })}`;
        }
      })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `groups`;
            }
          })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `Students`;
            }
          })}`;
        }
      })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-symbols-outlined" }, {}, {
            default: () => {
              return `podium`;
            }
          })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `Talks`;
            }
          })}`;
        }
      })} ${validate_component(Separator, "Separator").$$render($$result, {}, {}, {})} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `person`;
            }
          })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `About`;
            }
          })}`;
        }
      })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `article`;
            }
          })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `Publications`;
            }
          })}`;
        }
      })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `badge`;
            }
          })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `CV`;
            }
          })}`;
        }
      })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Svg, "Svg").$$render(
                $$result,
                {
                  style: "width: 100%; height: 100%;",
                  viewBox: "0 0 400 400",
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink"
                },
                {},
                {
                  default: () => {
                    return `<defs><linearGradient id="LinearGradient-VectorialApp19R21-3" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="rgba(255, 0, 0, 1)"></stop><stop offset="100%" stop-color="rgba(0, 175, 255, 1)"></stop></linearGradient></defs> <g><g class="draggable" id="Layer-VectorialApp19R21-0" fill="none" stroke="none" stroke-width="0" stroke-dasharray="none" opacity="1" mask="none" filter="none" transform="matrix(1 0 0 1 0 0)"><rect id="Rect-VectorialApp19R21-2" x="200" y="200" width="350" height="25" rx="0" ry="0" fill="url(#LinearGradient-VectorialApp19R21-3)" stroke="rgba(0, 0, 0, 1)" stroke-width="0" stroke-dasharray="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 -176 -175)"></rect><rect id="Rect-VectorialApp19R21-4" x="200" y="200" width="350" height="25" rx="0" ry="0" fill="url(#LinearGradient-VectorialApp19R21-3)" stroke="rgba(0, 0, 0, 1)" stroke-width="0" stroke-dasharray="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 -175 -125)"></rect><rect id="Rect-VectorialApp19R21-5" x="200" y="200" width="275" height="25" rx="0" ry="0" fill="url(#LinearGradient-VectorialApp19R21-3)" stroke="rgba(0, 0, 0, 1)" stroke-width="0" stroke-dasharray="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 -175 -75)"></rect><rect id="Rect-VectorialApp19R21-6" x="200" y="200" width="200" height="25" rx="0" ry="0" fill="url(#LinearGradient-VectorialApp19R21-3)" stroke="rgba(0, 0, 0, 1)" stroke-width="0" stroke-dasharray="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 -175 -25)"></rect><circle id="Circle-VectorialApp19R21-7" cx="200" cy="200" r="40" fill="rgba(255, 255, 255, 0.3)" stroke="rgba(0, 175, 0, 1)" stroke-width="5" stroke-dasharray="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 -100 75)"></circle><circle id="Circle-VectorialApp19R21-8" cx="200" cy="200" r="30" fill="rgba(0, 175, 0, 1)" stroke="rgba(0, 175, 0, 1)" stroke-width="5" stroke-dasharray="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 -100 75)"></circle><circle id="Circle-VectorialApp19R21-9" cx="200" cy="200" r="25" fill="rgba(255, 255, 255, 0)" stroke="rgba(0, 175, 255, 1)" stroke-width="10" stroke-dasharray="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 100.5 75)"></circle><circle id="Circle-VectorialApp19R21-10" cx="200" cy="200" r="25" fill="rgba(255, 255, 255, 0)" stroke="rgba(0, 175, 255, 1)" stroke-width="10" stroke-dasharray="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 100.5 159)"></circle><circle id="Circle-VectorialApp19R21-11" cx="200" cy="200" r="25" fill="rgba(255, 255, 255, 0)" stroke="rgba(0, 175, 255, 1)" stroke-width="10" stroke-dasharray="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 -100 159)"></circle></g></g>`;
                  }
                }
              )}`;
            }
          })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `mathril`;
            }
          })}`;
        }
      })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Svg, "Svg").$$render(
                $$result,
                {
                  style: "width: 100%; height: 100%;",
                  viewBox: "-336 -140 224.00000095367432 222.00000286102295",
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  class: "s-96Qa8tULeGx4"
                },
                {},
                {
                  default: () => {
                    return `<defs class="s-96Qa8tULeGx4"><radialGradient id="radGrad604" cx="50%" cy="50%" r="50%" fx="50%" fy="50%" fr="0%" class="s-96Qa8tULeGx4"><stop offset="0%" stop-color="rgba(0, 0, 0, 0.1)" class="s-96Qa8tULeGx4"></stop><stop offset="100%" stop-color="rgba(0, 0, 0, 1)" class="s-96Qa8tULeGx4"></stop></radialGradient><linearGradient id="linGrad990" x1="0%" y1="0%" x2="100%" y2="0%" class="s-96Qa8tULeGx4"><stop offset="0%" stop-color="rgba(255, 0, 0, 1)" class="s-96Qa8tULeGx4"></stop><stop offset="100%" stop-color="rgba(0, 159, 163, 1)" class="s-96Qa8tULeGx4"></stop></linearGradient><filter id="shadow183" x="0%" y="0%" width="500%" height="500%" class="s-2BksElCIcH9B"><feDropShadow dx="30" dy="30" stdDeviation="5" flood-color="rgba(0, 0, 0, 0.5)" flood-opacity="1" class="s-2BksElCIcH9B"></feDropShadow></filter></defs> <g class="s-96Qa8tULeGx4"><g id="Layer-0" fill="none" stroke="none" stroke-width="0" stroke-dasharray="none" opacity="1" filter="none" transform="matrix(1 0 0 1 0 0)" class="s-QQIalB0-gg3s"><circle cx="0" cy="0" r="100" fill="url(#linGrad990)" stroke="rgba(0, 0, 0, 1)" stroke-width="0" stroke-dasharray="none" opacity="1" filter="none" transform="matrix(1 0 0 1 -224 -30)" class="s-QOZdKfZP-a_N"></circle><g id="Latex-3" fill="rgba(255, 255, 255, 1)" opacity="1" filter="url(#shadow183)" transform="matrix(0.22421523772725804 0 0 0.22026430842809952 -283.0785199922724 22.28708863364809)" class="s-8WhOemGd3PFV"><defs><path id="MJX-1039-TEX-I-1D463" d="M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D463" xlink:href="#MJX-1039-TEX-I-1D463"></use></g></g></g></g></g></g>`;
                  }
                }
              )}`;
            }
          })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `vectorial`;
            }
          })}`;
        }
      })}`;
    }
  })}</div> <div class="bottom">${validate_component(List, "List").$$render($$result, { twoLine: true, avatarList: true }, {}, {
    default: () => {
      return `${$isAuth ? `${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, {}, {}, {
            default: () => {
              return `<img class="round" width="40px" height="40px"${add_attribute("src", $profileImage, 0)} alt="Profile">`;
            }
          })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(PrimaryText, "PrimaryText").$$render($$result, {}, {}, {
                default: () => {
                  return `${escape($isAuth.name)}`;
                }
              })} ${validate_component(SecondaryText, "SecondaryText").$$render($$result, {}, {}, {
                default: () => {
                  return `${escape($isAuth.publicID)}`;
                }
              })}`;
            }
          })}`;
        }
      })}` : `${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `Log in / Sign up`;
            }
          })}`;
        }
      })}`}`;
    }
  })}</div> </nav>`;
});
const css$5 = {
  code: ".title.svelte-y40hrq{font-size:1.2em}p.svelte-y40hrq{display:flex;align-items:center;gap:1em;font-size:0.8em;margin:0.5em 0}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<article data-svelte-h="svelte-1yse8m4"><p class="title svelte-y40hrq">Contact</p> <p class="svelte-y40hrq"><span class="material-icons">email</span> <span><strong>info</strong>@drmithileshkumar.com</span></p> <p class="svelte-y40hrq"><span class="material-icons">phone</span> +91 8797081308, +91 8235463666</p> </article>`;
});
const css$4 = {
  code: "p.svelte-a6gmw5{font-size:0.8em;font-weight:300}",
  map: null
};
const Copyright = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<article data-svelte-h="svelte-1l9daw7"><p class="svelte-a6gmw5">Copyright © 2023 drmithileshkumar.com All Rights Reserved</p></article>`;
});
const css$3 = {
  code: "nav.svelte-svkd07{display:flex;flex-direction:row;flex-wrap:wrap;gap:1em;align-items:center}",
  map: null
};
const Social = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<nav class="svelte-svkd07" data-svelte-h="svelte-1ibtdud"> <a href="https://www.facebook.com/profile.php?id=100029086776754"><img width="23px" height="23px" src="/facebook.svg" alt="facebook"></a> <a href="https://twitter.com/DrMithileshKr"><img width="23px" height="23px" src="/twitter.png" alt="twitter"></a> <a href="https://www.youtube.com/DrMithileshKr"><img width="23px" height="23px" src="/youtube.svg" alt="youtube"></a> <a href="https://www.instagram.com/drmithileshkumar_com/" style="font-size: 0.8em;"><img width="23px" height="23px" src="/instagram.svg" alt="instagram"></a></nav>`;
});
const css$2 = {
  code: "footer.svelte-1juizb1{padding-top:1em;font-family:roboto;padding-bottom:4em}nav.svelte-1juizb1{display:flex;gap:0.5em;align-items:center;flex-wrap:wrap;margin-top:1em}a.svelte-1juizb1{font-size:0.8em}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<footer class="svelte-1juizb1">${validate_component(Social, "Social").$$render($$result, {}, {}, {})} ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})} <nav class="svelte-1juizb1" data-svelte-h="svelte-w37za3"><ul><li><a href="/about" class="svelte-1juizb1">About</a></li> </ul></nav> ${validate_component(Copyright, "Copyright").$$render($$result, {}, {}, {})} </footer>`;
});
const css$1 = {
  code: "aside.svelte-kpoyhe{position:relative;display:flex;flex-direction:column;gap:0.5em;overflow-y:auto}",
  map: null
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navList, $$unsubscribe_navList;
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  let { isAuth: isAuth2 = null } = $$props;
  if ($$props.isAuth === void 0 && $$bindings.isAuth && isAuth2 !== void 0)
    $$bindings.isAuth(isAuth2);
  $$result.css.add(css$1);
  $$unsubscribe_navList();
  return `<aside class="svelte-kpoyhe">  ${$navList.length > 0 ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return ` ${validate_component(NavList, "NavList").$$render(
        $$result,
        {
          name: $navList[0].name,
          url: $navList[0].url,
          topics: $navList[0].topics,
          expanded: true
        },
        {},
        {}
      )}  `;
    }
  })}` : ``}   ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content$1, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })} </aside>`;
});
const Analytics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  {
    {
      if (typeof gtag !== "undefined") {
        gtag("config", "G-NLWD2V1K9N", {
          page_title: document.title,
          page_path: $page.url.pathname
        });
      }
    }
  }
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1r81vvh_START --><script async src="https://www.googletagmanager.com/gtag/js?id=G-NLWD2V1K9N" data-svelte-h="svelte-1evtf8t"><\/script><script data-svelte-h="svelte-1sh4zor">window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag("js", new Date());

        gtag("config", "G-NLWD2V1K9N");<\/script><!-- HEAD_svelte-1r81vvh_END -->`, ""}`;
});
const css = {
  code: ".modal.svelte-z3f1g{display:block;position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.32);z-index:5;transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.svelte-z3f1g{box-sizing:border-box}.container.svelte-z3f1g{width:100%}header.svelte-z3f1g{min-width:100%;z-index:200}.navback.svelte-z3f1g{min-height:4em}.nav.svelte-z3f1g{max-width:150px}main.svelte-z3f1g{display:flex}.grid.svelte-z3f1g{display:grid;grid-template-columns:calc(100% - 256px) 256px}.center.svelte-z3f1g{display:flex;flex-direction:column;width:100%;padding:0.5em}.side.svelte-z3f1g{min-width:300px;position:fixed;top:4em;right:0;height:100vh;overflow-y:auto;z-index:6;box-shadow:rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px}@media only screen and (max-width: 600px){.navback.svelte-z3f1g{min-height:3.5em}}",
  map: null
};
let mainClass = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fixed;
  let sideWidth;
  let $showRight, $$unsubscribe_showRight;
  let $$unsubscribe_refreshApp;
  let $darkMode, $$unsubscribe_darkMode;
  let $TopBarHeight, $$unsubscribe_TopBarHeight;
  let $showLeft, $$unsubscribe_showLeft;
  let $currentPath, $$unsubscribe_currentPath;
  let $$unsubscribe_page;
  let $presentationMode, $$unsubscribe_presentationMode;
  $$unsubscribe_showRight = subscribe(showRight, (value) => $showRight = value);
  $$unsubscribe_refreshApp = subscribe(refreshApp, (value) => value);
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_TopBarHeight = subscribe(TopBarHeight, (value) => $TopBarHeight = value);
  $$unsubscribe_showLeft = subscribe(showLeft, (value) => $showLeft = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  let W = 500;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    fixed = W < 600;
    sideWidth = $showRight ? 300 : 0;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-191nvh5_START --><link rel="stylesheet" id="theme" href="${"/smui" + escape($darkMode ? "-dark" : "", true) + ".css"}" class="svelte-z3f1g"><!-- HEAD_svelte-191nvh5_END -->`, ""} ${validate_component(Analytics, "Analytics").$$render($$result, {}, {}, {})} <header style="position: relative;" class="svelte-z3f1g">${validate_component(TopAppBar, "TopAppBar").$$render($$result, { variant: "fixed", color: "secondary" }, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Section, "Section").$$render($$result, { style: "align-items:center;" }, {}, {
              default: () => {
                return `${validate_component(IconButton, "IconButton").$$render(
                  $$result,
                  { toggle: true, pressed: $showLeft },
                  {
                    pressed: ($$value) => {
                      $showLeft = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    default: () => {
                      return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons", on: true }, {}, {
                        default: () => {
                          return `close`;
                        }
                      })} ${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
                        default: () => {
                          return `menu`;
                        }
                      })}`;
                    }
                  }
                )} <div class="logo svelte-z3f1g">${validate_component(Fab, "Fab").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(CommonIcon, "Icon").$$render($$result, {}, {}, {
                      default: () => {
                        return `<img width="40px" height="40px" style="background:white; border-radius:50%;" src="/favicon.png" alt="1" class="svelte-z3f1g">`;
                      }
                    })}`;
                  }
                })}</div> <span class="svelte-z3f1g">${escape($currentPath)}</span>`;
              }
            })} ${validate_component(Section, "Section").$$render($$result, { align: "end", toolbar: true }, {}, {
              default: () => {
                return ` ${validate_component(IconButton, "IconButton").$$render(
                  $$result,
                  {
                    class: "material-icons",
                    "aria-label": "Refresh"
                  },
                  {},
                  {
                    default: () => {
                      return `refresh`;
                    }
                  }
                )}  ${validate_component(IconButton, "IconButton").$$render(
                  $$result,
                  { toggle: true, pressed: $darkMode },
                  {
                    pressed: ($$value) => {
                      $darkMode = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    default: () => {
                      return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons", on: true }, {}, {
                        default: () => {
                          return `dark_mode`;
                        }
                      })} ${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
                        default: () => {
                          return `light_mode`;
                        }
                      })}`;
                    }
                  }
                )} ${validate_component(IconButton, "IconButton").$$render(
                  $$result,
                  { toggle: true, pressed: $showRight },
                  {
                    pressed: ($$value) => {
                      $showRight = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    default: () => {
                      return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons", on: true }, {}, {
                        default: () => {
                          return `close`;
                        }
                      })} ${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
                        default: () => {
                          return `menu`;
                        }
                      })}`;
                    }
                  }
                )}`;
              }
            })}`;
          }
        })}`;
      }
    })} <div class="navback svelte-z3f1g"></div></header> <div class="container svelte-z3f1g">${validate_component(Drawer, "Drawer").$$render(
      $$result,
      {
        style: "width:180px;",
        variant: "modal",
        open: $showLeft
      },
      {
        open: ($$value) => {
          $showLeft = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
            default: () => {
              return `<header class="nav svelte-z3f1g">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}</header>`;
            }
          })}`;
        }
      }
    )}  ${fixed ? `${validate_component(Scrim, "Scrim").$$render($$result, {}, {}, {})}` : ``} ${validate_component(AppContent, "AppContent").$$render(
      $$result,
      {
        style: "margin-left: " + (!fixed && $showLeft ? "180px" : "0px") + ";margin-right: " + ($showRight && W > 600 ? "300px" : "0px") + ";"
      },
      {},
      {
        default: () => {
          return `<main class="${escape(null_to_empty(mainClass), true) + " svelte-z3f1g"}"><div class="center svelte-z3f1g">${slots.default ? slots.default({}) : ``}</div> </main>`;
        }
      }
    )} ${!$presentationMode && $showRight ? `<div class="side svelte-z3f1g" style="${"width:" + escape(sideWidth, true) + "px; top: " + escape($TopBarHeight, true) + "px;"}">${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}</div>` : ``} ${fixed ? ` <div class="modal svelte-z3f1g" style="${"display: " + escape($showRight ? "" : "none", true)}"></div>` : ``} </div>`;
  } while (!$$settled);
  $$unsubscribe_showRight();
  $$unsubscribe_refreshApp();
  $$unsubscribe_darkMode();
  $$unsubscribe_TopBarHeight();
  $$unsubscribe_showLeft();
  $$unsubscribe_currentPath();
  $$unsubscribe_page();
  $$unsubscribe_presentationMode();
  return $$rendered;
});
export {
  Layout as default
};
