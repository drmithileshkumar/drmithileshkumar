import { a as subscribe, e as null_to_empty, c as compute_rest_props } from './utils-yAS0eczJ.js';
import { c as create_ssr_component, e as escape, v as validate_component, a as get_current_component, f as setContext, o as onDestroy, s as spread, h as escape_attribute_value, b as escape_object, d as add_attribute, m as missing_component, g as getContext } from './ssr-APL1hDOv.js';
import { a as classAdderBuilder, f as forwardEventsBuilder, c as classMap, S as SmuiElement, g as globals } from './classAdderBuilder-0kAhHSI7.js';
import { L as List, I as Item, G as Graphic, d as dispatch } from './Graphic-tQ1FVLXP.js';
import { _ as __extends, a as __assign, M as MDCFoundation, R as Ripple } from './Ripple-cfQYXJny.js';
import { C as CommonIcon, S as Svg, N as NavList } from './NavList-BbD1mGoq.js';
import { T as Text } from './Subheader-L9gPGS9m.js';
import './client-_MkdHwD5.js';
import { p as page } from './stores-nClpd4CO.js';
import { e as showRight, r as refreshApp, d as darkMode, T as TopBarHeight, a as showLeft, c as currentPath, n as navList } from './stores3-WCzcTCKR.js';
import { C as Card } from './Card-1SmK_YC9.js';
import { C as Content$1 } from './ActionIcons-6VPbDzCy.js';
import { T as TopAppBar } from './TopAppBar-dixrszy1.js';
import { R as Row, S as Section } from './Title-2Dzds7NQ.js';
import { I as IconButton } from './IconButton-SO8nJcPc.js';
import { b as presentationMode } from './stores4-oqF8qUAY.js';
import './exports-mq_1S73-.js';
import './index2-NBMbjtFx.js';

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    ANIMATE: 'mdc-drawer--animate',
    CLOSING: 'mdc-drawer--closing',
    DISMISSIBLE: 'mdc-drawer--dismissible',
    MODAL: 'mdc-drawer--modal',
    OPEN: 'mdc-drawer--open',
    OPENING: 'mdc-drawer--opening',
    ROOT: 'mdc-drawer',
};
var strings = {
    APP_CONTENT_SELECTOR: '.mdc-drawer-app-content',
    CLOSE_EVENT: 'MDCDrawer:closed',
    OPEN_EVENT: 'MDCDrawer:opened',
    SCRIM_SELECTOR: '.mdc-drawer-scrim',
    LIST_SELECTOR: '.mdc-list,.mdc-deprecated-list',
    LIST_ITEM_ACTIVATED_SELECTOR: '.mdc-list-item--activated,.mdc-deprecated-list-item--activated',
};

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCDismissibleDrawerFoundation = /** @class */ (function (_super) {
    __extends(MDCDismissibleDrawerFoundation, _super);
    function MDCDismissibleDrawerFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCDismissibleDrawerFoundation.defaultAdapter), adapter)) || this;
        _this.animationFrame = 0;
        _this.animationTimer = 0;
        return _this;
    }
    Object.defineProperty(MDCDismissibleDrawerFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDismissibleDrawerFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDismissibleDrawerFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                elementHasClass: function () { return false; },
                notifyClose: function () { return undefined; },
                notifyOpen: function () { return undefined; },
                saveFocus: function () { return undefined; },
                restoreFocus: function () { return undefined; },
                focusActiveNavigationItem: function () { return undefined; },
                trapFocus: function () { return undefined; },
                releaseFocus: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCDismissibleDrawerFoundation.prototype.destroy = function () {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }
        if (this.animationTimer) {
            clearTimeout(this.animationTimer);
        }
    };
    /**
     * Opens the drawer from the closed state.
     */
    MDCDismissibleDrawerFoundation.prototype.open = function () {
        var _this = this;
        if (this.isOpen() || this.isOpening() || this.isClosing()) {
            return;
        }
        this.adapter.addClass(cssClasses.OPEN);
        this.adapter.addClass(cssClasses.ANIMATE);
        // Wait a frame once display is no longer "none", to establish basis for animation
        this.runNextAnimationFrame(function () {
            _this.adapter.addClass(cssClasses.OPENING);
        });
        this.adapter.saveFocus();
    };
    /**
     * Closes the drawer from the open state.
     */
    MDCDismissibleDrawerFoundation.prototype.close = function () {
        if (!this.isOpen() || this.isOpening() || this.isClosing()) {
            return;
        }
        this.adapter.addClass(cssClasses.CLOSING);
    };
    /**
     * Returns true if the drawer is in the open position.
     * @return true if drawer is in open state.
     */
    MDCDismissibleDrawerFoundation.prototype.isOpen = function () {
        return this.adapter.hasClass(cssClasses.OPEN);
    };
    /**
     * Returns true if the drawer is animating open.
     * @return true if drawer is animating open.
     */
    MDCDismissibleDrawerFoundation.prototype.isOpening = function () {
        return this.adapter.hasClass(cssClasses.OPENING) ||
            this.adapter.hasClass(cssClasses.ANIMATE);
    };
    /**
     * Returns true if the drawer is animating closed.
     * @return true if drawer is animating closed.
     */
    MDCDismissibleDrawerFoundation.prototype.isClosing = function () {
        return this.adapter.hasClass(cssClasses.CLOSING);
    };
    /**
     * Keydown handler to close drawer when key is escape.
     */
    MDCDismissibleDrawerFoundation.prototype.handleKeydown = function (evt) {
        var keyCode = evt.keyCode, key = evt.key;
        var isEscape = key === 'Escape' || keyCode === 27;
        if (isEscape) {
            this.close();
        }
    };
    /**
     * Handles the `transitionend` event when the drawer finishes opening/closing.
     */
    MDCDismissibleDrawerFoundation.prototype.handleTransitionEnd = function (evt) {
        var OPENING = cssClasses.OPENING, CLOSING = cssClasses.CLOSING, OPEN = cssClasses.OPEN, ANIMATE = cssClasses.ANIMATE, ROOT = cssClasses.ROOT;
        // In Edge, transitionend on ripple pseudo-elements yields a target without classList, so check for Element first.
        var isRootElement = this.isElement(evt.target) &&
            this.adapter.elementHasClass(evt.target, ROOT);
        if (!isRootElement) {
            return;
        }
        if (this.isClosing()) {
            this.adapter.removeClass(OPEN);
            this.closed();
            this.adapter.restoreFocus();
            this.adapter.notifyClose();
        }
        else {
            this.adapter.focusActiveNavigationItem();
            this.opened();
            this.adapter.notifyOpen();
        }
        this.adapter.removeClass(ANIMATE);
        this.adapter.removeClass(OPENING);
        this.adapter.removeClass(CLOSING);
    };
    /**
     * Extension point for when drawer finishes open animation.
     */
    MDCDismissibleDrawerFoundation.prototype.opened = function () { }; // tslint:disable-line:no-empty
    /**
     * Extension point for when drawer finishes close animation.
     */
    MDCDismissibleDrawerFoundation.prototype.closed = function () { }; // tslint:disable-line:no-empty
    /**
     * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
     */
    MDCDismissibleDrawerFoundation.prototype.runNextAnimationFrame = function (callback) {
        var _this = this;
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = requestAnimationFrame(function () {
            _this.animationFrame = 0;
            clearTimeout(_this.animationTimer);
            _this.animationTimer = setTimeout(callback, 0);
        });
    };
    MDCDismissibleDrawerFoundation.prototype.isElement = function (element) {
        // In Edge, transitionend on ripple pseudo-elements yields a target without classList.
        return Boolean(element.classList);
    };
    return MDCDismissibleDrawerFoundation;
}(MDCFoundation));

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/* istanbul ignore next: subclass is not a branch statement */
var MDCModalDrawerFoundation = /** @class */ (function (_super) {
    __extends(MDCModalDrawerFoundation, _super);
    function MDCModalDrawerFoundation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Handles click event on scrim.
     */
    MDCModalDrawerFoundation.prototype.handleScrimClick = function () {
        this.close();
    };
    /**
     * Called when drawer finishes open animation.
     */
    MDCModalDrawerFoundation.prototype.opened = function () {
        this.adapter.trapFocus();
    };
    /**
     * Called when drawer finishes close animation.
     */
    MDCModalDrawerFoundation.prototype.closed = function () {
        this.adapter.releaseFocus();
    };
    return MDCModalDrawerFoundation;
}(MDCDismissibleDrawerFoundation));

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
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { isAuth = null } = $$props;
  if ($$props.isAuth === void 0 && $$bindings.isAuth && isAuth !== void 0)
    $$bindings.isAuth(isAuth);
  $$result.css.add(css$6);
  $$unsubscribe_page();
  return `<nav class="svelte-1hx4pyo"><div class="top"> ${validate_component(List, "List").$$render($$result, {}, {}, {
    default: () => {
      return `${isAuth ? `${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `person`;
            }
          })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `Profile`;
            }
          })}`;
        }
      })}  ${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `card_membership`;
            }
          })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `Quizzes`;
            }
          })}`;
        }
      })} ${validate_component(Separator, "Separator").$$render($$result, {}, {}, {})}` : ``} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
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
      })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Svg, "Svg").$$render(
                $$result,
                {
                  style: "width: 100%; height: 100%;",
                  viewBox: "0 0 500 500",
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink"
                },
                {},
                {
                  default: () => {
                    return `<defs></defs> <g><g class="draggable" id="Layer-VectorialApp52R57-0" fill="none" stroke="none" stroke-width="0" stroke-dasharray="none" opacity="1" mask="none" filter="none" transform="matrix(1 0 0 1 0 0)"><circle id="Circle-VectorialApp52R57-5" cx="250" cy="250" r="200" fill="rgba(255, 255, 255, 1)" stroke="rgba(0, 0, 0, 1)" stroke-width="1" stroke-dasharray="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 -0.12176513671875 0.00628662109375)"></circle><g id="Latex-VectorialApp52R57-2" fill="rgba(0, 0, 0, 1)" stroke="undefined" stroke-width="undefined" stroke-dasharray="undefined" opacity="1" filter="none" mask="undefined" transform="matrix(0.21303260973089846 0 0 0.21303260973089846 154.8755053695758 226.5376367221969)"><defs><path id="MJX-9906-TEX-I-1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path><path id="MJX-9906-TEX-I-1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D44E" xlink:href="#MJX-9906-TEX-I-1D44E"></use></g><g data-mml-node="mi" transform="translate(529,0)"><use data-c="1D456" xlink:href="#MJX-9906-TEX-I-1D456"></use></g></g></g></g><g id="Latex-VectorialApp52R57-3" fill="rgba(0, 0, 0, 1)" stroke="undefined" stroke-width="undefined" stroke-dasharray="undefined" opacity="1" filter="none" mask="undefined" transform="matrix(0.052910501891477855 0.05291050189147784 -0.05291050189147784 0.052910501891477855 114.70037247330671 294.52997433510865)"><defs><path id="MJX-9907-TEX-B-1D406" d="M465 -10Q281 -10 173 88T64 343Q64 413 85 471T143 568T217 631T298 670Q371 697 449 697Q452 697 459 697T470 696Q502 696 531 690T582 675T618 658T644 641T656 632L732 695Q734 697 745 697Q758 697 761 692T765 668V627V489V449Q765 428 761 424T741 419H731H724Q705 419 702 422T695 444Q683 520 631 577T495 635Q364 635 295 563Q261 528 247 477T232 343Q232 296 236 260T256 185T296 120T366 76T472 52Q481 51 498 51Q544 51 573 67T607 108Q608 111 608 164V214H464V276H479Q506 273 680 273Q816 273 834 276H845V214H765V113V51Q765 16 763 8T750 0Q742 2 709 16T658 40L648 46Q592 -10 465 -10Z"></path><path id="MJX-9907-TEX-B-1D42E" d="M40 442L134 446Q228 450 229 450H235V273V165Q235 90 238 74T254 52Q268 46 304 46H319Q352 46 380 67T419 121L420 123Q424 135 425 199Q425 201 425 207Q425 233 425 249V316Q425 354 423 363T410 376Q396 380 369 380H356V442L554 450V267Q554 84 556 79Q561 62 610 62H623V31Q623 0 622 0Q603 0 527 -3T432 -6Q431 -6 431 25V56L420 45Q373 6 332 -1Q313 -6 281 -6Q208 -6 165 14T109 87L107 98L106 230Q106 358 104 366Q96 380 50 380H37V442H40Z"></path><path id="MJX-9907-TEX-B-1D42B" d="M405 293T374 293T324 312T305 361Q305 378 312 394Q315 397 315 399Q305 399 294 394T266 375T238 329T222 249Q221 241 221 149V62H308V0H298Q280 3 161 3Q47 3 38 0H29V62H98V210V303Q98 353 96 363T83 376Q69 380 42 380H29V442H32L118 446Q204 450 205 450H210V414L211 378Q247 449 315 449H321Q384 449 413 422T442 360Q442 332 424 313Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtext"><use data-c="1D406" xlink:href="#MJX-9907-TEX-B-1D406"></use><use data-c="1D42E" xlink:href="#MJX-9907-TEX-B-1D42E" transform="translate(904,0)"></use><use data-c="1D42B" xlink:href="#MJX-9907-TEX-B-1D42B" transform="translate(1543,0)"></use><use data-c="1D42E" xlink:href="#MJX-9907-TEX-B-1D42E" transform="translate(2017,0)"></use></g></g></g></g><g id="Latex-VectorialApp52R57-4" fill="rgba(0, 0, 0, 1)" stroke="undefined" stroke-width="undefined" stroke-dasharray="undefined" opacity="1" filter="none" mask="undefined" transform="matrix(0.05910687980605497 -0.05910687980605495 0.05910687980605495 0.05910687980605497 290.6796566165579 400.81563430213976)"><defs><path id="MJX-9908-TEX-B-1D403" d="M39 624V686H270H310H408Q500 686 545 680T638 649Q768 584 805 438Q817 388 817 338Q817 171 702 75Q628 17 515 2Q504 1 270 0H39V62H147V624H39ZM655 337Q655 370 655 390T650 442T639 494T616 540T580 580T526 607T451 623Q443 624 368 624H298V62H377H387H407Q445 62 472 65T540 83T606 129Q629 156 640 195T653 262T655 337Z"></path><path id="MJX-9908-TEX-B-1D41E" d="M32 225Q32 332 102 392T272 452H283Q382 452 436 401Q494 343 494 243Q494 226 486 222T440 217Q431 217 394 217T327 218H175V209Q175 177 179 154T196 107T236 69T306 50Q312 49 323 49Q376 49 410 85Q421 99 427 111T434 127T442 133T463 135H468Q494 135 494 117Q494 110 489 97T468 66T431 32T373 5T292 -6Q181 -6 107 55T32 225ZM383 276Q377 346 348 374T280 402Q253 402 230 390T195 357Q179 331 176 279V266H383V276Z"></path><path id="MJX-9908-TEX-B-1D42F" d="M401 444Q413 441 495 441Q568 441 574 444H580V382H510L409 156Q348 18 339 6Q331 -4 320 -4Q318 -4 313 -4T303 -3H288Q273 -3 264 12T221 102Q206 135 197 156L96 382H26V444H34Q49 441 145 441Q252 441 270 444H279V382H231L284 264Q335 149 338 149Q338 150 389 264T442 381Q442 382 418 382H394V444H401Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtext"><use data-c="1D403" xlink:href="#MJX-9908-TEX-B-1D403"></use><use data-c="1D41E" xlink:href="#MJX-9908-TEX-B-1D41E" transform="translate(882,0)"></use><use data-c="1D42F" xlink:href="#MJX-9908-TEX-B-1D42F" transform="translate(1409,0)"></use></g></g></g></g></g></g>`;
                  }
                }
              )}`;
            }
          })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `Quantum`;
            }
          })}`;
        }
      })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
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
      })}`;
    }
  })} ${validate_component(List, "List").$$render($$result, {}, {}, {
    default: () => {
      return `   `;
    }
  })} </div> <div class="bottom"></div> </nav>`;
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
  let { isAuth = null } = $$props;
  if ($$props.isAuth === void 0 && $$bindings.isAuth && isAuth !== void 0)
    $$bindings.isAuth(isAuth);
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
  code: ".svelte-j3aqo7{box-sizing:border-box}.container.svelte-j3aqo7{width:100%}header.svelte-j3aqo7{min-width:100%;z-index:200}.navback.svelte-j3aqo7{min-height:4em}.nav.svelte-j3aqo7{max-width:150px}main.svelte-j3aqo7{display:flex}.grid.svelte-j3aqo7{display:grid;grid-template-columns:calc(100% - 256px) 256px}.center.svelte-j3aqo7{display:flex;flex-direction:column;width:100%;padding:0.5em}.side.svelte-j3aqo7{min-width:300px;position:fixed;top:4em;right:0;height:100vh;overflow-y:auto;z-index:6;box-shadow:rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px}@media only screen and (max-width: 600px){.navback.svelte-j3aqo7{min-height:3.5em}}",
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
  let $presentationMode, $$unsubscribe_presentationMode;
  $$unsubscribe_showRight = subscribe(showRight, (value) => $showRight = value);
  $$unsubscribe_refreshApp = subscribe(refreshApp, (value) => value);
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_TopBarHeight = subscribe(TopBarHeight, (value) => $TopBarHeight = value);
  $$unsubscribe_showLeft = subscribe(showLeft, (value) => $showLeft = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
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
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-191nvh5_START --><link rel="stylesheet" id="theme" href="${"/smui" + escape($darkMode ? "-dark" : "", true) + ".css"}" class="svelte-j3aqo7"><!-- HEAD_svelte-191nvh5_END -->`, ""} ${validate_component(Analytics, "Analytics").$$render($$result, {}, {}, {})} <header style="position: relative;" class="svelte-j3aqo7">${validate_component(TopAppBar, "TopAppBar").$$render($$result, { variant: "fixed", color: "secondary" }, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Section, "Section").$$render($$result, { style: "align-items:center;" }, {}, {
              default: () => {
                return `<div class="logo svelte-j3aqo7">${validate_component(Fab, "Fab").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(CommonIcon, "Icon").$$render($$result, {}, {}, {
                      default: () => {
                        return `<img width="40px" height="40px" style="background:white; border-radius:50%;" src="/favicon.png" alt="1" class="svelte-j3aqo7">`;
                      }
                    })}`;
                  }
                })}</div> ${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                  default: () => {
                    return `menu`;
                  }
                })} <span class="svelte-j3aqo7">${escape($currentPath)}</span>`;
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
    })} <div class="navback svelte-j3aqo7"></div></header> <div class="container svelte-j3aqo7">${validate_component(Drawer, "Drawer").$$render(
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
              return `<header class="nav svelte-j3aqo7">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}</header>`;
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
          return `<main class="${escape(null_to_empty(mainClass), true) + " svelte-j3aqo7"}"><div class="center svelte-j3aqo7">${slots.default ? slots.default({}) : ``}</div> </main>`;
        }
      }
    )} ${!$presentationMode && $showRight ? `<div class="side svelte-j3aqo7" style="${"width:" + escape(sideWidth, true) + "px; top: " + escape($TopBarHeight, true) + "px;"}">${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}</div>` : ``} </div>`;
  } while (!$$settled);
  $$unsubscribe_showRight();
  $$unsubscribe_refreshApp();
  $$unsubscribe_darkMode();
  $$unsubscribe_TopBarHeight();
  $$unsubscribe_showLeft();
  $$unsubscribe_currentPath();
  $$unsubscribe_presentationMode();
  return $$rendered;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-7mpL2xtl.js.map
