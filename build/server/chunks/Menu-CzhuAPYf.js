import { e as compute_rest_props } from './utils-DhkojCd_.js';
import { c as create_ssr_component, b as get_current_component, v as validate_component } from './ssr2-CDgUAJs6.js';
import { f as forwardEventsBuilder, c as classMap } from './forwardEventsBuilder-DOj2b3iN.js';
import { M as MenuSurface } from './MenuSurface-DP6CwZ6B.js';

const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let usePass;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "open",
    "isOpen",
    "setOpen",
    "setDefaultFocusState",
    "getSelectedIndex",
    "getMenuSurface",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { open = false } = $$props;
  let element;
  let instance;
  function isOpen() {
    return open;
  }
  function setOpen(value) {
    open = value;
  }
  function setDefaultFocusState(focusState) {
    instance.setDefaultFocusState(focusState);
  }
  function getSelectedIndex() {
    return instance.getSelectedIndex();
  }
  function getMenuSurface() {
    return element;
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0) $$bindings.isOpen(isOpen);
  if ($$props.setOpen === void 0 && $$bindings.setOpen && setOpen !== void 0) $$bindings.setOpen(setOpen);
  if ($$props.setDefaultFocusState === void 0 && $$bindings.setDefaultFocusState && setDefaultFocusState !== void 0) $$bindings.setDefaultFocusState(setDefaultFocusState);
  if ($$props.getSelectedIndex === void 0 && $$bindings.getSelectedIndex && getSelectedIndex !== void 0) $$bindings.getSelectedIndex(getSelectedIndex);
  if ($$props.getMenuSurface === void 0 && $$bindings.getMenuSurface && getMenuSurface !== void 0) $$bindings.getMenuSurface(getMenuSurface);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0) $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    usePass = [forwardEvents, ...use];
    $$rendered = `${validate_component(MenuSurface, "MenuSurface").$$render(
      $$result,
      Object.assign(
        {},
        { use: usePass },
        {
          class: classMap({ [className]: true, "mdc-menu": true })
        },
        $$restProps,
        { this: element },
        { open }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        },
        open: ($$value) => {
          open = $$value;
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

export { Menu as M };
//# sourceMappingURL=Menu-CzhuAPYf.js.map
