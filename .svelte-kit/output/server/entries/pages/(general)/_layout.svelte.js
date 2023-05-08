import { l as listen, b as bubble, p as prevent_default, d as stop_propagation, c as create_ssr_component, f as compute_rest_props, g as get_current_component, s as setContext, o as onDestroy, h as spread, i as escape_attribute_value, j as escape_object, k as add_attribute, n as getContext, v as validate_component, m as missing_component, q as is_void, r as globals, a as subscribe, t as each, e as escape } from "../../../chunks/index3.js";
import { MDCDismissibleDrawerFoundation, MDCModalDrawerFoundation } from "@material/drawer";
import { MDCRippleFoundation, util } from "@material/ripple";
import { events, ponyfill } from "@material/dom";
import "../../../chunks/singletons.js";
import { p as page } from "../../../chunks/stores.js";
import { w as writable, r as readable } from "../../../chunks/index2.js";
/* empty css                                                  */import { MDCTopAppBarBaseFoundation, MDCShortTopAppBarFoundation, MDCFixedTopAppBarFoundation, MDCTopAppBarFoundation } from "@material/top-app-bar";
import { MDCIconButtonToggleFoundation } from "@material/icon-button";
function classMap(classObj) {
  return Object.entries(classObj).filter(([name, value]) => name !== "" && value).map(([name]) => name).join(" ");
}
function dispatch(element, eventType, detail, eventInit = { bubbles: true }, duplicateEventForMDC = false) {
  if (typeof Event === "undefined") {
    throw new Error("Event not defined.");
  }
  if (!element) {
    throw new Error("Tried to dipatch event without element.");
  }
  const event = new CustomEvent(eventType, Object.assign(Object.assign({}, eventInit), { detail }));
  element === null || element === void 0 ? void 0 : element.dispatchEvent(event);
  if (duplicateEventForMDC && eventType.startsWith("SMUI")) {
    const duplicateEvent = new CustomEvent(eventType.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, eventInit), { detail }));
    element === null || element === void 0 ? void 0 : element.dispatchEvent(duplicateEvent);
    if (duplicateEvent.defaultPrevented) {
      event.preventDefault();
    }
  }
  return event;
}
const oldModifierRegex = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
const newModifierRegex = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function forwardEventsBuilder(component) {
  let $on;
  let events2 = [];
  component.$on = (fullEventType, callback) => {
    let eventType = fullEventType;
    let destructor = () => {
    };
    if ($on) {
      destructor = $on(eventType, callback);
    } else {
      events2.push([eventType, callback]);
    }
    const oldModifierMatch = eventType.match(oldModifierRegex);
    if (oldModifierMatch && console) {
      console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', eventType);
    }
    return () => {
      destructor();
    };
  };
  function forward(e) {
    bubble(component, e);
  }
  return (node) => {
    const destructors = [];
    const forwardDestructors = {};
    $on = (fullEventType, callback) => {
      let eventType = fullEventType;
      let handler = callback;
      let options = false;
      const oldModifierMatch = eventType.match(oldModifierRegex);
      const newModifierMatch = eventType.match(newModifierRegex);
      const modifierMatch = oldModifierMatch || newModifierMatch;
      if (eventType.match(/^SMUI:\w+:/)) {
        const newEventTypeParts = eventType.split(":");
        let newEventType = "";
        for (let i = 0; i < newEventTypeParts.length; i++) {
          newEventType += i === newEventTypeParts.length - 1 ? ":" + newEventTypeParts[i] : newEventTypeParts[i].split("-").map((value) => value.slice(0, 1).toUpperCase() + value.slice(1)).join("");
        }
        console.warn(`The event ${eventType.split("$")[0]} has been renamed to ${newEventType.split("$")[0]}.`);
        eventType = newEventType;
      }
      if (modifierMatch) {
        const parts = eventType.split(oldModifierMatch ? ":" : "$");
        eventType = parts[0];
        const eventOptions = parts.slice(1).reduce((obj, mod) => {
          obj[mod] = true;
          return obj;
        }, {});
        if (eventOptions.passive) {
          options = options || {};
          options.passive = true;
        }
        if (eventOptions.nonpassive) {
          options = options || {};
          options.passive = false;
        }
        if (eventOptions.capture) {
          options = options || {};
          options.capture = true;
        }
        if (eventOptions.once) {
          options = options || {};
          options.once = true;
        }
        if (eventOptions.preventDefault) {
          handler = prevent_default(handler);
        }
        if (eventOptions.stopPropagation) {
          handler = stop_propagation(handler);
        }
      }
      const off = listen(node, eventType, handler, options);
      const destructor = () => {
        off();
        const idx = destructors.indexOf(destructor);
        if (idx > -1) {
          destructors.splice(idx, 1);
        }
      };
      destructors.push(destructor);
      if (!(eventType in forwardDestructors)) {
        forwardDestructors[eventType] = listen(node, eventType, forward);
      }
      return destructor;
    };
    for (let i = 0; i < events2.length; i++) {
      $on(events2[i][0], events2[i][1]);
    }
    return {
      destroy: () => {
        for (let i = 0; i < destructors.length; i++) {
          destructors[i]();
        }
        for (let entry of Object.entries(forwardDestructors)) {
          entry[1]();
        }
      }
    };
  };
}
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
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</aside>`;
});
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
  do {
    $$settled = true;
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
const SmuiElement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selfClosing;
  let $$restProps = compute_rest_props($$props, ["use", "tag", "getElement"]);
  let { use = [] } = $$props;
  let { tag } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  selfClosing = [
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
  ].indexOf(tag) > -1;
  return `${selfClosing ? `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps)], {})}${add_attribute("this", element, 0)}>${is_void(tag$1) ? "" : ``}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}` : `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps)], {})}${add_attribute("this", element, 0)}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`}`;
});
const Svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
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
const { Object: Object_1$3 } = globals;
const internals = {
  component: SmuiElement,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
const ClassAdder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "component", "tag", "getElement"]);
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let element;
  const smuiClass = internals.class;
  const smuiClassMap = {};
  const smuiClassUnsubscribes = [];
  const contexts = internals.contexts;
  const props = internals.props;
  let { component = internals.component } = $$props;
  let { tag = component === SmuiElement ? internals.tag : void 0 } = $$props;
  Object.entries(internals.classMap).forEach(([name, context]) => {
    const store = getContext(context);
    if (store && "subscribe" in store) {
      smuiClassUnsubscribes.push(store.subscribe((value) => {
        smuiClassMap[name] = value;
      }));
    }
  });
  const forwardEvents = forwardEventsBuilder(get_current_component());
  for (let context in contexts) {
    if (contexts.hasOwnProperty(context)) {
      setContext(context, contexts[context]);
    }
  }
  onDestroy(() => {
    for (const unsubscribe of smuiClassUnsubscribes) {
      unsubscribe();
    }
  });
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object_1$3.assign(
        {},
        { tag },
        { use: [forwardEvents, ...use] },
        {
          class: classMap({
            [className]: true,
            [smuiClass]: true,
            ...smuiClassMap
          })
        },
        props,
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
const defaults = Object.assign({}, internals);
function classAdderBuilder(props) {
  return new Proxy(ClassAdder, {
    construct: function(target, args) {
      Object.assign(internals, defaults, props);
      return new target(...args);
    },
    get: function(target, prop) {
      Object.assign(internals, defaults, props);
      return target[prop];
    }
  });
}
const AppContent = classAdderBuilder({
  class: "mdc-drawer-app-content",
  tag: "div"
});
const Content$1 = classAdderBuilder({
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
  do {
    $$settled = true;
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
const { applyPassive } = events;
const { matches } = ponyfill;
function Ripple(node, { ripple = true, surface = false, unbounded = false, disabled = false, color, active, rippleElement, eventTarget, activeTarget, addClass = (className) => node.classList.add(className), removeClass = (className) => node.classList.remove(className), addStyle = (name, value) => node.style.setProperty(name, value), initPromise = Promise.resolve() } = {}) {
  let instance;
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  let oldActive = active;
  let oldEventTarget = eventTarget;
  let oldActiveTarget = activeTarget;
  function handleProps() {
    if (surface) {
      addClass("mdc-ripple-surface");
      if (color === "primary") {
        addClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      } else if (color === "secondary") {
        removeClass("smui-ripple-surface--primary");
        addClass("smui-ripple-surface--secondary");
      } else {
        removeClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      }
    } else {
      removeClass("mdc-ripple-surface");
      removeClass("smui-ripple-surface--primary");
      removeClass("smui-ripple-surface--secondary");
    }
    if (instance && oldActive !== active) {
      oldActive = active;
      if (active) {
        instance.activate();
      } else if (active === false) {
        instance.deactivate();
      }
    }
    if (ripple && !instance) {
      instance = new MDCRippleFoundation({
        addClass,
        browserSupportsCssVars: () => util.supportsCssVariables(window),
        computeBoundingRect: () => (rippleElement || node).getBoundingClientRect(),
        containsEventTarget: (target) => node.contains(target),
        deregisterDocumentInteractionHandler: (evtType, handler) => document.documentElement.removeEventListener(evtType, handler, applyPassive()),
        deregisterInteractionHandler: (evtType, handler) => (eventTarget || node).removeEventListener(evtType, handler, applyPassive()),
        deregisterResizeHandler: (handler) => window.removeEventListener("resize", handler),
        getWindowPageOffset: () => ({
          x: window.pageXOffset,
          y: window.pageYOffset
        }),
        isSurfaceActive: () => active == null ? matches(activeTarget || node, ":active") : active,
        isSurfaceDisabled: () => !!disabled,
        isUnbounded: () => !!unbounded,
        registerDocumentInteractionHandler: (evtType, handler) => document.documentElement.addEventListener(evtType, handler, applyPassive()),
        registerInteractionHandler: (evtType, handler) => (eventTarget || node).addEventListener(evtType, handler, applyPassive()),
        registerResizeHandler: (handler) => window.addEventListener("resize", handler),
        removeClass,
        updateCssVariable: addStyle
      });
      initPromise.then(() => {
        if (instance) {
          instance.init();
          instance.setUnbounded(unbounded);
        }
      });
    } else if (instance && !ripple) {
      initPromise.then(() => {
        if (instance) {
          instance.destroy();
          instance = void 0;
        }
      });
    }
    if (instance && (oldEventTarget !== eventTarget || oldActiveTarget !== activeTarget)) {
      oldEventTarget = eventTarget;
      oldActiveTarget = activeTarget;
      instance.destroy();
      requestAnimationFrame(() => {
        if (instance) {
          instance.init();
          instance.setUnbounded(unbounded);
        }
      });
    }
    if (!ripple && unbounded) {
      addClass("mdc-ripple-upgraded--unbounded");
    }
  }
  handleProps();
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  function layout() {
    if (instance) {
      instance.layout();
    }
  }
  return {
    update(props) {
      ({
        ripple,
        surface,
        unbounded,
        disabled,
        color,
        active,
        rippleElement,
        eventTarget,
        activeTarget,
        addClass,
        removeClass,
        addStyle,
        initPromise
      } = Object.assign({ ripple: true, surface: false, unbounded: false, disabled: false, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (className) => node.classList.add(className), removeClass: (className) => node.classList.remove(className), addStyle: (name, value) => node.style.setProperty(name, value), initPromise: Promise.resolve() }, props));
      handleProps();
    },
    destroy() {
      if (instance) {
        instance.destroy();
        instance = void 0;
        removeClass("mdc-ripple-surface");
        removeClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      }
      if (removeLayoutListener) {
        removeLayoutListener();
      }
    }
  };
}
const { Object: Object_1$2 } = globals;
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
  do {
    $$settled = true;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object_1$2.assign(
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
          return `<div class="${"mdc-fab__ripple"}"></div>
  ${focusRing ? `<div class="${"mdc-fab__focus-ring"}"></div>` : ``}
  ${slots.default ? slots.default({}) : ``}${touch ? `<div class="${"mdc-fab__touch"}"></div>` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "nonInteractive",
    "dense",
    "textualList",
    "avatarList",
    "iconList",
    "imageList",
    "thumbnailList",
    "videoList",
    "twoLine",
    "threeLine",
    "vertical",
    "wrapFocus",
    "singleSelection",
    "disabledItemsFocusable",
    "selectedIndex",
    "radioList",
    "checkList",
    "hasTypeahead",
    "component",
    "tag",
    "layout",
    "setEnabled",
    "getTypeaheadInProgress",
    "getSelectedIndex",
    "getFocusedItemIndex",
    "focusItemAtIndex",
    "getElement"
  ]);
  var _a;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { nonInteractive = false } = $$props;
  let { dense = false } = $$props;
  let { textualList = false } = $$props;
  let { avatarList = false } = $$props;
  let { iconList = false } = $$props;
  let { imageList = false } = $$props;
  let { thumbnailList = false } = $$props;
  let { videoList = false } = $$props;
  let { twoLine = false } = $$props;
  let { threeLine = false } = $$props;
  let { vertical = true } = $$props;
  let { wrapFocus = (_a = getContext("SMUI:list:wrapFocus")) !== null && _a !== void 0 ? _a : false } = $$props;
  let { singleSelection = false } = $$props;
  let { disabledItemsFocusable = false } = $$props;
  let { selectedIndex = -1 } = $$props;
  let { radioList = false } = $$props;
  let { checkList = false } = $$props;
  let { hasTypeahead = false } = $$props;
  let element;
  let instance;
  let role = getContext("SMUI:list:role");
  let nav = getContext("SMUI:list:nav");
  const itemAccessorMap = /* @__PURE__ */ new WeakMap();
  let selectionDialog = getContext("SMUI:dialog:selection");
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? nav ? "nav" : "ul" : void 0 } = $$props;
  setContext("SMUI:list:nonInteractive", nonInteractive);
  setContext("SMUI:separator:context", "list");
  if (!role) {
    if (singleSelection) {
      role = "listbox";
      setContext("SMUI:list:item:role", "option");
    } else if (radioList) {
      role = "radiogroup";
      setContext("SMUI:list:item:role", "radio");
    } else if (checkList) {
      role = "group";
      setContext("SMUI:list:item:role", "checkbox");
    } else {
      role = "list";
      setContext("SMUI:list:item:role", void 0);
    }
  }
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });
  function getOrderedList() {
    if (element == null) {
      return [];
    }
    return [...getElement().children].map((element2) => itemAccessorMap.get(element2)).filter((accessor) => accessor && accessor._smui_list_item_accessor);
  }
  function layout() {
    return instance.layout();
  }
  function setEnabled(itemIndex, isEnabled) {
    return instance.setEnabled(itemIndex, isEnabled);
  }
  function getTypeaheadInProgress() {
    return instance.isTypeaheadInProgress();
  }
  function getSelectedIndex() {
    return instance.getSelectedIndex();
  }
  function getFocusedItemIndex() {
    return instance.getFocusedItemIndex();
  }
  function focusItemAtIndex(index) {
    const accessor = getOrderedList()[index];
    accessor && "focus" in accessor.element && accessor.element.focus();
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.nonInteractive === void 0 && $$bindings.nonInteractive && nonInteractive !== void 0)
    $$bindings.nonInteractive(nonInteractive);
  if ($$props.dense === void 0 && $$bindings.dense && dense !== void 0)
    $$bindings.dense(dense);
  if ($$props.textualList === void 0 && $$bindings.textualList && textualList !== void 0)
    $$bindings.textualList(textualList);
  if ($$props.avatarList === void 0 && $$bindings.avatarList && avatarList !== void 0)
    $$bindings.avatarList(avatarList);
  if ($$props.iconList === void 0 && $$bindings.iconList && iconList !== void 0)
    $$bindings.iconList(iconList);
  if ($$props.imageList === void 0 && $$bindings.imageList && imageList !== void 0)
    $$bindings.imageList(imageList);
  if ($$props.thumbnailList === void 0 && $$bindings.thumbnailList && thumbnailList !== void 0)
    $$bindings.thumbnailList(thumbnailList);
  if ($$props.videoList === void 0 && $$bindings.videoList && videoList !== void 0)
    $$bindings.videoList(videoList);
  if ($$props.twoLine === void 0 && $$bindings.twoLine && twoLine !== void 0)
    $$bindings.twoLine(twoLine);
  if ($$props.threeLine === void 0 && $$bindings.threeLine && threeLine !== void 0)
    $$bindings.threeLine(threeLine);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0)
    $$bindings.vertical(vertical);
  if ($$props.wrapFocus === void 0 && $$bindings.wrapFocus && wrapFocus !== void 0)
    $$bindings.wrapFocus(wrapFocus);
  if ($$props.singleSelection === void 0 && $$bindings.singleSelection && singleSelection !== void 0)
    $$bindings.singleSelection(singleSelection);
  if ($$props.disabledItemsFocusable === void 0 && $$bindings.disabledItemsFocusable && disabledItemsFocusable !== void 0)
    $$bindings.disabledItemsFocusable(disabledItemsFocusable);
  if ($$props.selectedIndex === void 0 && $$bindings.selectedIndex && selectedIndex !== void 0)
    $$bindings.selectedIndex(selectedIndex);
  if ($$props.radioList === void 0 && $$bindings.radioList && radioList !== void 0)
    $$bindings.radioList(radioList);
  if ($$props.checkList === void 0 && $$bindings.checkList && checkList !== void 0)
    $$bindings.checkList(checkList);
  if ($$props.hasTypeahead === void 0 && $$bindings.hasTypeahead && hasTypeahead !== void 0)
    $$bindings.hasTypeahead(hasTypeahead);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.layout === void 0 && $$bindings.layout && layout !== void 0)
    $$bindings.layout(layout);
  if ($$props.setEnabled === void 0 && $$bindings.setEnabled && setEnabled !== void 0)
    $$bindings.setEnabled(setEnabled);
  if ($$props.getTypeaheadInProgress === void 0 && $$bindings.getTypeaheadInProgress && getTypeaheadInProgress !== void 0)
    $$bindings.getTypeaheadInProgress(getTypeaheadInProgress);
  if ($$props.getSelectedIndex === void 0 && $$bindings.getSelectedIndex && getSelectedIndex !== void 0)
    $$bindings.getSelectedIndex(getSelectedIndex);
  if ($$props.getFocusedItemIndex === void 0 && $$bindings.getFocusedItemIndex && getFocusedItemIndex !== void 0)
    $$bindings.getFocusedItemIndex(getFocusedItemIndex);
  if ($$props.focusItemAtIndex === void 0 && $$bindings.focusItemAtIndex && focusItemAtIndex !== void 0)
    $$bindings.focusItemAtIndex(focusItemAtIndex);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign(
        {},
        { tag },
        { use: [forwardEvents, ...use] },
        {
          class: classMap({
            [className]: true,
            "mdc-deprecated-list": true,
            "mdc-deprecated-list--non-interactive": nonInteractive,
            "mdc-deprecated-list--dense": dense,
            "mdc-deprecated-list--textual-list": textualList,
            "mdc-deprecated-list--avatar-list": avatarList || selectionDialog,
            "mdc-deprecated-list--icon-list": iconList,
            "mdc-deprecated-list--image-list": imageList,
            "mdc-deprecated-list--thumbnail-list": thumbnailList,
            "mdc-deprecated-list--video-list": videoList,
            "mdc-deprecated-list--two-line": twoLine,
            "smui-list--three-line": threeLine && !twoLine
          })
        },
        { role },
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
const { Object: Object_1$1 } = globals;
let counter = 0;
const Item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tabindex;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "color",
    "nonInteractive",
    "ripple",
    "wrapper",
    "activated",
    "role",
    "selected",
    "disabled",
    "skipRestoreFocus",
    "tabindex",
    "inputId",
    "href",
    "component",
    "tag",
    "action",
    "getPrimaryText",
    "getElement"
  ]);
  var _a;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value) {
    return value === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { color = void 0 } = $$props;
  let { nonInteractive = (_a = getContext("SMUI:list:nonInteractive")) !== null && _a !== void 0 ? _a : false } = $$props;
  setContext("SMUI:list:nonInteractive", void 0);
  let { ripple = !nonInteractive } = $$props;
  let { wrapper = false } = $$props;
  let { activated = false } = $$props;
  let { role = wrapper ? "presentation" : getContext("SMUI:list:item:role") } = $$props;
  setContext("SMUI:list:item:role", void 0);
  let { selected = false } = $$props;
  let { disabled = false } = $$props;
  let { skipRestoreFocus = false } = $$props;
  let { tabindex: tabindexProp = uninitializedValue } = $$props;
  let { inputId = "SMUI-form-field-list-" + counter++ } = $$props;
  let { href = void 0 } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};
  let input;
  let nav = getContext("SMUI:list:item:nav");
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? nav ? href ? "a" : "span" : "li" : void 0 } = $$props;
  setContext("SMUI:generic:input:props", { id: inputId });
  setContext("SMUI:separator:context", void 0);
  onDestroy(() => {
  });
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
  function action(e) {
    if (!disabled) {
      dispatch(getElement(), "SMUI:action", e);
    }
  }
  function getPrimaryText() {
    var _a2, _b, _c;
    const element2 = getElement();
    const primaryText = element2.querySelector(".mdc-deprecated-list-item__primary-text");
    if (primaryText) {
      return (_a2 = primaryText.textContent) !== null && _a2 !== void 0 ? _a2 : "";
    }
    const text = element2.querySelector(".mdc-deprecated-list-item__text");
    if (text) {
      return (_b = text.textContent) !== null && _b !== void 0 ? _b : "";
    }
    return (_c = element2.textContent) !== null && _c !== void 0 ? _c : "";
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
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.nonInteractive === void 0 && $$bindings.nonInteractive && nonInteractive !== void 0)
    $$bindings.nonInteractive(nonInteractive);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.wrapper === void 0 && $$bindings.wrapper && wrapper !== void 0)
    $$bindings.wrapper(wrapper);
  if ($$props.activated === void 0 && $$bindings.activated && activated !== void 0)
    $$bindings.activated(activated);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.skipRestoreFocus === void 0 && $$bindings.skipRestoreFocus && skipRestoreFocus !== void 0)
    $$bindings.skipRestoreFocus(skipRestoreFocus);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindexProp !== void 0)
    $$bindings.tabindex(tabindexProp);
  if ($$props.inputId === void 0 && $$bindings.inputId && inputId !== void 0)
    $$bindings.inputId(inputId);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.getPrimaryText === void 0 && $$bindings.getPrimaryText && getPrimaryText !== void 0)
    $$bindings.getPrimaryText(getPrimaryText);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    tabindex = isUninitializedValue(tabindexProp) ? !nonInteractive && !disabled && (selected || input) ? 0 : -1 : tabindexProp;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object_1$1.assign(
        {},
        { tag },
        {
          use: [
            ...nonInteractive ? [] : [
              [
                Ripple,
                {
                  ripple: !input,
                  unbounded: false,
                  color: (activated || selected) && color == null ? "primary" : color,
                  disabled,
                  addClass,
                  removeClass,
                  addStyle
                }
              ]
            ],
            forwardEvents,
            ...use
          ]
        },
        {
          class: classMap({
            [className]: true,
            "mdc-deprecated-list-item": !wrapper,
            "mdc-deprecated-list-item__wrapper": wrapper,
            "mdc-deprecated-list-item--activated": activated,
            "mdc-deprecated-list-item--selected": selected,
            "mdc-deprecated-list-item--disabled": disabled,
            "mdc-menu-item--selected": !nav && role === "menuitem" && selected,
            "smui-menu-item--non-interactive": nonInteractive,
            ...internalClasses
          })
        },
        {
          style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" ")
        },
        nav && activated ? { "aria-current": "page" } : {},
        !nav || wrapper ? { role } : {},
        !nav && role === "option" ? {
          "aria-selected": selected ? "true" : "false"
        } : {},
        !nav && (role === "radio" || role === "checkbox") ? {
          "aria-checked": "false"
        } : {},
        !nav ? {
          "aria-disabled": disabled ? "true" : "false"
        } : {},
        {
          "data-menu-item-skip-restore-focus": skipRestoreFocus || void 0
        },
        { tabindex },
        { href },
        internalAttrs,
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
          return `${ripple ? `<span class="${"mdc-deprecated-list-item__ripple"}"></span>` : ``}${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Text = classAdderBuilder({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
classAdderBuilder({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
classAdderBuilder({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
const Graphic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let element;
  let menuSelectionGroup = getContext("SMUI:list:graphic:menu-selection-group");
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<span${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-deprecated-list-item__graphic": true,
          "mdc-menu__selection-group-icon": menuSelectionGroup
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</span>`;
});
classAdderBuilder({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
classAdderBuilder({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
classAdderBuilder({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
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
  do {
    $$settled = true;
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
writable("");
const currentPath = writable("Dr Mithilesh Kumar");
const navList = writable([]);
const darkMode = writable(true);
writable(false);
writable();
writable();
writable();
writable();
const showLeft = writable(true);
writable(false);
const defaultProfileImage = "/avatar.svg";
const initialProfileImage = defaultProfileImage;
const profileImage = writable(initialProfileImage);
profileImage.subscribe((value) => {
});
const defaultBannerImage = "/avatar.svg";
const initialBannerImage = defaultBannerImage;
const bannerImage = writable(initialBannerImage);
bannerImage.subscribe((value) => {
});
const Nav_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "nav.svelte-l592xr{overflow-y:auto;display:flex;justify-content:start;flex-direction:column;padding-bottom:5em}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { isAuth = null } = $$props;
  if ($$props.isAuth === void 0 && $$bindings.isAuth && isAuth !== void 0)
    $$bindings.isAuth(isAuth);
  $$result.css.add(css$6);
  $$unsubscribe_page();
  return `<nav class="${"svelte-l592xr"}"><div class="${"top"}">
        ${validate_component(List, "List").$$render($$result, {}, {}, {
    default: () => {
      return `${isAuth ? `${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `person`;
            }
          })}
                    ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `Profile`;
            }
          })}`;
        }
      })}
                
                ${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `card_membership`;
            }
          })}
                    ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `Quizzes`;
            }
          })}`;
        }
      })}
                ${validate_component(Separator, "Separator").$$render($$result, {}, {}, {})}` : ``}
                ${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `person`;
            }
          })}
                    ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `About`;
            }
          })}`;
        }
      })}
                ${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `badge`;
            }
          })}
                    ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `CV`;
            }
          })}`;
        }
      })}`;
    }
  })}
        ${validate_component(List, "List").$$render($$result, {}, {}, {
    default: () => {
      return `
            
            
            `;
    }
  })}
        </div>
    <div class="${"bottom"}"></div>
</nav>`;
});
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
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const Content = classAdderBuilder({
  class: "smui-card__content",
  tag: "div"
});
classAdderBuilder({
  class: "mdc-card__media-content",
  tag: "div"
});
classAdderBuilder({
  class: "mdc-card__action-buttons",
  tag: "div"
});
classAdderBuilder({
  class: "mdc-card__action-icons",
  tag: "div"
});
const Contact_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".title.svelte-y40hrq{font-size:1.2em}p.svelte-y40hrq{display:flex;align-items:center;gap:1em;font-size:0.8em;margin:0.5em 0}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<article><p class="${"title svelte-y40hrq"}">Contact</p>
    <p class="${"svelte-y40hrq"}"><span class="${"material-icons"}">email</span> <span><strong>info</strong>@drmithileshkumar.com</span></p>
    <p class="${"svelte-y40hrq"}"><span class="${"material-icons"}">phone</span> +91 8797081308, +91 8235463666</p>
    </article>`;
});
const Copyright_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "p.svelte-a6gmw5{font-size:0.8em;font-weight:300}",
  map: null
};
const Copyright = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<article><p class="${"svelte-a6gmw5"}">Copyright © 2023 drmithileshkumar.com All Rights Reserved</p></article>`;
});
const Social_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "nav.svelte-svkd07{display:flex;flex-direction:row;flex-wrap:wrap;gap:1em;align-items:center}",
  map: null
};
const Social = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<nav class="${"svelte-svkd07"}">
    <a href="${"https://www.facebook.com/profile.php?id=100029086776754"}"><img width="${"23px"}" height="${"23px"}" src="${"/facebook.svg"}" alt="${"facebook"}"></a>
    <a href="${"https://twitter.com/DrMithileshKr"}"><img width="${"23px"}" height="${"23px"}" src="${"/twitter.png"}" alt="${"twitter"}"></a>
    <a href="${"https://www.youtube.com/DrMithileshKr"}"><img width="${"23px"}" height="${"23px"}" src="${"/youtube.svg"}" alt="${"youtube"}"></a>
    <a href="${"https://www.instagram.com/drmithileshkumar_com/"}" style="${"font-size: 0.8em;"}"><img width="${"23px"}" height="${"23px"}" src="${"/instagram.svg"}" alt="${"instagram"}"></a></nav>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "footer.svelte-1juizb1{padding-top:1em;font-family:roboto;padding-bottom:4em}nav.svelte-1juizb1{display:flex;gap:0.5em;align-items:center;flex-wrap:wrap;margin-top:1em}a.svelte-1juizb1{font-size:0.8em}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<footer class="${"svelte-1juizb1"}">${validate_component(Social, "Social").$$render($$result, {}, {}, {})}
    ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}
    <nav class="${"svelte-1juizb1"}"><ul><li><a href="${"/about"}" class="${"svelte-1juizb1"}">About</a></li>
            </ul></nav>
    ${validate_component(Copyright, "Copyright").$$render($$result, {}, {}, {})}
</footer>`;
});
const Sidebar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "aside.svelte-kpoyhe{position:relative;display:flex;flex-direction:column;gap:0.5em;overflow-y:auto}",
  map: null
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navList, $$unsubscribe_navList;
  let $$unsubscribe_page;
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { isAuth = null } = $$props;
  if ($$props.isAuth === void 0 && $$bindings.isAuth && isAuth !== void 0)
    $$bindings.isAuth(isAuth);
  $$result.css.add(css$1);
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `<aside class="${"svelte-kpoyhe"}">
    ${isAuth ? `${$navList.length > 0 ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `

                ${validate_component(List, "List").$$render($$result, {}, {}, {
        default: () => {
          return `${each($navList, (link) => {
            return `${validate_component(Item, "Item").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
                  default: () => {
                    return `menu_book`;
                  }
                })}
                            ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(link.name)}`;
                  }
                })}
                        `;
              }
            })}`;
          })}`;
        }
      })}

                `;
    }
  })}` : ``}` : ``}
    
    ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })}
</aside>`;
});
const TopAppBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "variant",
    "color",
    "collapsed",
    "prominent",
    "dense",
    "scrollTarget",
    "getPropStore",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value) {
    return value === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { variant = "standard" } = $$props;
  let { color = "primary" } = $$props;
  let { collapsed = uninitializedValue } = $$props;
  const alwaysCollapsed = !isUninitializedValue(collapsed) && !!collapsed;
  if (isUninitializedValue(collapsed)) {
    collapsed = false;
  }
  let { prominent = false } = $$props;
  let { dense = false } = $$props;
  let { scrollTarget = void 0 } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  let propStoreSet;
  let propStore = readable({ variant, prominent, dense }, (set) => {
    propStoreSet = set;
  });
  let oldScrollTarget = void 0;
  let oldVariant = variant;
  function getInstance() {
    const Foundation = {
      static: MDCTopAppBarBaseFoundation,
      short: MDCShortTopAppBarFoundation,
      fixed: MDCFixedTopAppBarFoundation,
      standard: MDCTopAppBarFoundation
    }[variant] || MDCTopAppBarFoundation;
    return new Foundation({
      hasClass,
      addClass,
      removeClass,
      setStyle: addStyle,
      getTopAppBarHeight: () => element.clientHeight,
      notifyNavigationIconClicked: () => dispatch(element, "SMUITopAppBar:nav", void 0, void 0, true),
      getViewportScrollY: () => scrollTarget == null ? window.pageYOffset : scrollTarget.scrollTop,
      getTotalActionItems: () => element.querySelectorAll(".mdc-top-app-bar__action-item").length
    });
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
  function handleTargetScroll() {
    if (instance) {
      instance.handleTargetScroll();
      if (variant === "short") {
        collapsed = "isCollapsed" in instance && instance.isCollapsed;
      }
    }
  }
  function getPropStore() {
    return propStore;
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.collapsed === void 0 && $$bindings.collapsed && collapsed !== void 0)
    $$bindings.collapsed(collapsed);
  if ($$props.prominent === void 0 && $$bindings.prominent && prominent !== void 0)
    $$bindings.prominent(prominent);
  if ($$props.dense === void 0 && $$bindings.dense && dense !== void 0)
    $$bindings.dense(dense);
  if ($$props.scrollTarget === void 0 && $$bindings.scrollTarget && scrollTarget !== void 0)
    $$bindings.scrollTarget(scrollTarget);
  if ($$props.getPropStore === void 0 && $$bindings.getPropStore && getPropStore !== void 0)
    $$bindings.getPropStore(getPropStore);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    if (propStoreSet) {
      propStoreSet({ variant, prominent, dense });
    }
  }
  {
    if (oldVariant !== variant && instance) {
      oldVariant = variant;
      instance.destroy();
      internalClasses = {};
      internalStyles = {};
      instance = getInstance();
      instance.init();
    }
  }
  {
    if (instance && variant === "short" && "setAlwaysCollapsed" in instance) {
      instance.setAlwaysCollapsed(alwaysCollapsed);
    }
  }
  {
    if (oldScrollTarget !== scrollTarget) {
      if (oldScrollTarget) {
        oldScrollTarget.removeEventListener("scroll", handleTargetScroll);
      }
      if (scrollTarget) {
        scrollTarget.addEventListener("scroll", handleTargetScroll);
      }
      oldScrollTarget = scrollTarget;
    }
  }
  return `

<header${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-top-app-bar": true,
          "mdc-top-app-bar--short": variant === "short",
          "mdc-top-app-bar--short-collapsed": collapsed,
          "mdc-top-app-bar--fixed": variant === "fixed",
          "smui-top-app-bar--static": variant === "static",
          "smui-top-app-bar--color-secondary": color === "secondary",
          "mdc-top-app-bar--prominent": prominent,
          "mdc-top-app-bar--dense": dense,
          ...internalClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</header>`;
});
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
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.toolbar === void 0 && $$bindings.toolbar && toolbar !== void 0)
    $$bindings.toolbar(toolbar);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
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
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</section>`;
});
classAdderBuilder({
  class: "mdc-top-app-bar__title",
  tag: "span"
});
const { Object: Object_1 } = globals;
const IconButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let actionProp;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "toggle",
    "pressed",
    "ariaLabelOn",
    "ariaLabelOff",
    "touch",
    "displayFlex",
    "size",
    "href",
    "action",
    "component",
    "tag",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value) {
    return value === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { color = void 0 } = $$props;
  let { toggle = false } = $$props;
  let { pressed = uninitializedValue } = $$props;
  let { ariaLabelOn = void 0 } = $$props;
  let { ariaLabelOff = void 0 } = $$props;
  let { touch = false } = $$props;
  let { displayFlex = true } = $$props;
  let { size = "normal" } = $$props;
  let { href = void 0 } = $$props;
  let { action = void 0 } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};
  let context = getContext("SMUI:icon-button:context");
  let ariaDescribedby = getContext("SMUI:icon-button:aria-describedby");
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? href == null ? "button" : "a" : void 0 } = $$props;
  let previousDisabled = $$restProps.disabled;
  setContext("SMUI:icon:context", "icon-button");
  let oldToggle = null;
  onDestroy(() => {
    instance && instance.destroy();
  });
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
  function getAttr(name) {
    var _a;
    return name in internalAttrs ? (_a = internalAttrs[name]) !== null && _a !== void 0 ? _a : null : getElement().getAttribute(name);
  }
  function addAttr(name, value) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }
  function handleChange(evtData) {
    pressed = evtData.isOn;
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
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.pressed === void 0 && $$bindings.pressed && pressed !== void 0)
    $$bindings.pressed(pressed);
  if ($$props.ariaLabelOn === void 0 && $$bindings.ariaLabelOn && ariaLabelOn !== void 0)
    $$bindings.ariaLabelOn(ariaLabelOn);
  if ($$props.ariaLabelOff === void 0 && $$bindings.ariaLabelOff && ariaLabelOff !== void 0)
    $$bindings.ariaLabelOff(ariaLabelOff);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0)
    $$bindings.touch(touch);
  if ($$props.displayFlex === void 0 && $$bindings.displayFlex && displayFlex !== void 0)
    $$bindings.displayFlex(displayFlex);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    actionProp = (() => {
      if (context === "data-table:pagination") {
        switch (action) {
          case "first-page":
            return { "data-first-page": "true" };
          case "prev-page":
            return { "data-prev-page": "true" };
          case "next-page":
            return { "data-next-page": "true" };
          case "last-page":
            return { "data-last-page": "true" };
          default:
            return { "data-action": "true" };
        }
      } else if (context === "dialog:header" || context === "dialog:sheet") {
        return { "data-mdc-dialog-action": action };
      } else {
        return { action };
      }
    })();
    {
      if (previousDisabled !== $$restProps.disabled) {
        const elem = getElement();
        if ("blur" in elem) {
          elem.blur();
        }
        previousDisabled = $$restProps.disabled;
      }
    }
    {
      if (element && getElement() && toggle !== oldToggle) {
        if (toggle && !instance) {
          instance = new MDCIconButtonToggleFoundation({
            addClass,
            hasClass,
            notifyChange: (evtData) => {
              handleChange(evtData);
              dispatch(getElement(), "SMUIIconButtonToggle:change", evtData, void 0, true);
            },
            removeClass,
            getAttr,
            setAttr: addAttr
          });
          instance.init();
        } else if (!toggle && instance) {
          instance.destroy();
          instance = void 0;
          internalClasses = {};
          internalAttrs = {};
        }
        oldToggle = toggle;
      }
    }
    {
      if (instance && !isUninitializedValue(pressed) && instance.isOn() !== pressed) {
        instance.toggle(pressed);
      }
    }
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
                unbounded: true,
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
            "mdc-icon-button": true,
            "mdc-icon-button--on": !isUninitializedValue(pressed) && pressed,
            "mdc-icon-button--touch": touch,
            "mdc-icon-button--display-flex": displayFlex,
            "smui-icon-button--size-button": size === "button",
            "smui-icon-button--size-mini": size === "mini",
            "mdc-icon-button--reduced-size": size === "mini" || size === "button",
            "mdc-card__action": context === "card:action",
            "mdc-card__action--icon": context === "card:action",
            "mdc-top-app-bar__navigation-icon": context === "top-app-bar:navigation",
            "mdc-top-app-bar__action-item": context === "top-app-bar:action",
            "mdc-snackbar__dismiss": context === "snackbar:actions",
            "mdc-data-table__pagination-button": context === "data-table:pagination",
            "mdc-data-table__sort-icon-button": context === "data-table:sortable-header-cell",
            "mdc-dialog__close": (context === "dialog:header" || context === "dialog:sheet") && action === "close",
            ...internalClasses
          })
        },
        {
          style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" ")
        },
        {
          "aria-pressed": !isUninitializedValue(pressed) ? pressed ? "true" : "false" : null
        },
        {
          "aria-label": pressed ? ariaLabelOn : ariaLabelOff
        },
        { "data-aria-label-on": ariaLabelOn },
        { "data-aria-label-off": ariaLabelOff },
        { "aria-describedby": ariaDescribedby },
        { href },
        actionProp,
        internalAttrs,
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
          return `<div class="${"mdc-icon-button__ripple"}"></div>
  ${slots.default ? slots.default({}) : ``}${touch ? `<div class="${"mdc-icon-button__touch"}"></div>` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
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
  return `${$$result.head += `<!-- HEAD_svelte-1r81vvh_START --><script async src="${"https://www.googletagmanager.com/gtag/js?id=G-NLWD2V1K9N"}"><\/script><script>window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag("js", new Date());

        gtag("config", "G-NLWD2V1K9N");
    <\/script><!-- HEAD_svelte-1r81vvh_END -->`, ""}`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-uka8yf{box-sizing:border-box}.container.svelte-uka8yf{width:100%}.logo.svelte-uka8yf{margin-left:0.5em;margin-top:0.5em}header.svelte-uka8yf{min-width:100%;z-index:200}.navback.svelte-uka8yf{min-height:4em}.nav.svelte-uka8yf{max-width:150px}main.svelte-uka8yf{display:grid;grid-template-columns:calc(100% - 256px) 256px}.center.svelte-uka8yf{width:100%;flex-grow:1;padding:0.5em}.side.svelte-uka8yf{min-width:250px;position:sticky;top:4em;height:100vh}@media only screen and (max-width: 600px){main.svelte-uka8yf{display:flex;flex-direction:column;gap:1em;width:100%;flex:1;min-width:300px}.side.svelte-uka8yf{width:100%;position:relative;height:fit-content}.navback.svelte-uka8yf{min-height:3.5em}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fixed;
  let $darkMode, $$unsubscribe_darkMode;
  let $showLeft, $$unsubscribe_showLeft;
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_showLeft = subscribe(showLeft, (value) => $showLeft = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  let { data } = $$props;
  let W;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    fixed = W < 600;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-191nvh5_START --><link rel="${"stylesheet"}" id="${"theme"}" href="${"/smui" + escape($darkMode ? "-dark" : "", true) + ".css"}" class="${"svelte-uka8yf"}"><!-- HEAD_svelte-191nvh5_END -->`, ""}
${validate_component(Analytics, "Analytics").$$render($$result, {}, {}, {})}
<header class="${"svelte-uka8yf"}">${validate_component(TopAppBar, "TopAppBar").$$render($$result, { variant: "fixed", color: "secondary" }, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Section, "Section").$$render($$result, { style: "align-items:center;" }, {}, {
              default: () => {
                return `<div class="${"logo svelte-uka8yf"}">${validate_component(Fab, "Fab").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(CommonIcon, "Icon").$$render($$result, {}, {}, {
                      default: () => {
                        return `<img width="${"60px"}" height="${"60px"}" style="${"background:white; border-radius:50%;"}" src="${"/favicon.png"}" alt="${"1"}" class="${"svelte-uka8yf"}">`;
                      }
                    })}`;
                  }
                })}</div>
                ${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                  default: () => {
                    return `menu`;
                  }
                })}
                <span class="${"svelte-uka8yf"}">${escape($currentPath)}
                    </span>`;
              }
            })}
            ${validate_component(Section, "Section").$$render($$result, { align: "end", toolbar: true }, {}, {
              default: () => {
                return `
                ${validate_component(IconButton, "IconButton").$$render(
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
                      })}
                    ${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
                        default: () => {
                          return `light_mode`;
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
    })}
    <div class="${"navback svelte-uka8yf"}"></div></header>

<div class="${"container svelte-uka8yf"}">${validate_component(Drawer, "Drawer").$$render(
      $$result,
      {
        variant: "modal",
        fixed: true,
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
          return `${validate_component(Content$1, "Content").$$render($$result, {}, {}, {
            default: () => {
              return `<header class="${"nav svelte-uka8yf"}">${validate_component(Nav, "Nav").$$render($$result, { isAuth: data.user }, {}, {})}</header>`;
            }
          })}`;
        }
      }
    )}
    
    ${fixed ? `${validate_component(Scrim, "Scrim").$$render($$result, { fixed: false }, {}, {})}` : ``}
    ${validate_component(AppContent, "AppContent").$$render($$result, {}, {}, {
      default: () => {
        return `<main class="${"svelte-uka8yf"}"><div class="${"center svelte-uka8yf"}">${slots.default ? slots.default({}) : ``}</div>
            <div class="${"side svelte-uka8yf"}">${validate_component(Sidebar, "Sidebar").$$render($$result, { isAuth: data.user }, {}, {})}</div></main>`;
      }
    })}
</div>`;
  } while (!$$settled);
  $$unsubscribe_darkMode();
  $$unsubscribe_showLeft();
  $$unsubscribe_currentPath();
  return $$rendered;
});
export {
  Layout as default
};
