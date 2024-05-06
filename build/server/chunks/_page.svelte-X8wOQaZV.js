import { a as subscribe, e as set_store_value, d as compute_rest_props } from './utils-DH7689cv.js';
import { c as create_ssr_component, e as escape, h as add_attribute, i as each, v as validate_component, a as get_current_component, b as spread, d as escape_attribute_value, f as escape_object, g as getContext, s as setContext, o as onDestroy } from './ssr-Cv_bEuJL.js';
import { T as Textfield } from './Textfield-CuLN89a4.js';
import './Suffix-DUyW9-NK.js';
import { T as Title, S as Section } from './Title-DaXZmKx-.js';
import { C as CommonLabel } from './CommonLabel-Bjz32QAu.js';
import { I as IconButton } from './IconButton-CpGaokyO.js';
import { c as classAdderBuilder, f as forwardEventsBuilder, a as classMap } from './classAdderBuilder-B5RJlVtK.js';
import { L as List, I as Item, d as dispatch } from './Item-X5iuBhs5.js';
import { e as exclude, p as prefixFilter } from './prefixFilter-B6cFZsw3.js';
import { M as Menu } from './Menu-Szmr--n2.js';
import './SelectionGroupIcon-obMfUwh0.js';
import { T as Text } from './Subheader-BwOM49vC.js';
import { B as Button } from './Button-nlTGW0Wq.js';
import { w as writable } from './index2-B3zlhmO5.js';
import { R as Radio } from './Radio-DWiAJ2OL.js';
import { F as FormField } from './FormField-BbIiNutz.js';
import { p as page } from './stores-CD1QeJjc.js';
import { e as bannerImage, c as currentPath, p as profileImage } from './stores2-DCuXQBIu.js';
import './client-CjdeEz1m.js';
import './ContextFragment-Dwx7Ej1j.js';
import './NotchedOutline-YjUGQyoC.js';
import './Ripple-Yt1ZX6hy.js';
import './Graphic-CTyan_iC.js';
import './exports-DuWZopOC.js';

let counter = 0;
const Autocomplete = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let menuOpen;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "options",
    "value",
    "getOptionDisabled",
    "getOptionLabel",
    "text",
    "label",
    "disabled",
    "toggle",
    "combobox",
    "clearOnBlur",
    "selectOnExactMatch",
    "showMenuWithNoInput",
    "noMatchesActionDisabled",
    "search",
    "menu$class",
    "menu$anchor",
    "menu$anchorCorner",
    "focus",
    "blur",
    "getElement"
  ]);
  var _a;
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { options = [] } = $$props;
  let { value = void 0 } = $$props;
  let { getOptionDisabled = () => false } = $$props;
  let { getOptionLabel = (option) => option == null ? "" : `${option}` } = $$props;
  let { text = getOptionLabel(value) } = $$props;
  let { label = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { toggle = false } = $$props;
  let { combobox = false } = $$props;
  let { clearOnBlur = !combobox } = $$props;
  let { selectOnExactMatch = true } = $$props;
  let { showMenuWithNoInput = true } = $$props;
  let { noMatchesActionDisabled = true } = $$props;
  let { search = async (input) => {
    const linput = input.toLowerCase();
    const fullOptions = typeof options == "function" ? await options() : options || [];
    if (linput === "") {
      return fullOptions;
    }
    const result = fullOptions.filter((item) => getOptionLabel(item).toLowerCase().includes(linput));
    result.sort((a, b) => {
      const aString = getOptionLabel(a).toLowerCase();
      const bString = getOptionLabel(b).toLowerCase();
      if (aString.startsWith(linput) && !bString.startsWith(linput)) {
        return -1;
      } else if (bString.startsWith(linput) && !aString.startsWith(linput)) {
        return 1;
      }
      return 0;
    });
    return result;
  } } = $$props;
  let { menu$class = "" } = $$props;
  let { menu$anchor = false } = $$props;
  let { menu$anchorCorner = "BOTTOM_START" } = $$props;
  let element;
  let inputContainer;
  let loading = false;
  let error = false;
  let focused = false;
  let matches = [];
  let focusedIndex = -1;
  let menuId = (_a = $$restProps["menu$id"]) !== null && _a !== void 0 ? _a : "SMUI-autocomplete-" + counter++ + "-menu";
  let previousText = text;
  let previousValue = value;
  let previousFocusedIndex = void 0;
  async function performSearch() {
    loading = true;
    error = false;
    try {
      const searchResult = await search(text);
      if (searchResult !== false) {
        matches = searchResult;
        if (selectOnExactMatch) {
          const exactMatch = matches.find((match) => getOptionLabel(match) === text);
          if (exactMatch && value !== exactMatch) {
            selectOption(exactMatch);
          }
        }
      }
    } catch (e) {
      error = true;
    }
    loading = false;
  }
  function selectOption(option, setText = true) {
    const event = dispatch(element, "SMUIAutocomplete:selected", option, { bubbles: true, cancelable: true });
    if (event.defaultPrevented) {
      return;
    }
    if (setText) {
      text = getOptionLabel(option);
    }
    value = option;
    if (!setText) {
      previousValue = option;
    }
  }
  function deselectOption(option, setText = true) {
    const event = dispatch(element, "SMUIAutocomplete:deselected", option, { bubbles: true, cancelable: true });
    if (event.defaultPrevented) {
      return;
    }
    if (setText) {
      text = "";
    }
    value = void 0;
    if (!setText) {
      previousValue = void 0;
    }
  }
  function getActiveMenuItems() {
    {
      return [];
    }
  }
  function focus() {
  }
  function blur() {
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.getOptionDisabled === void 0 && $$bindings.getOptionDisabled && getOptionDisabled !== void 0)
    $$bindings.getOptionDisabled(getOptionDisabled);
  if ($$props.getOptionLabel === void 0 && $$bindings.getOptionLabel && getOptionLabel !== void 0)
    $$bindings.getOptionLabel(getOptionLabel);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.combobox === void 0 && $$bindings.combobox && combobox !== void 0)
    $$bindings.combobox(combobox);
  if ($$props.clearOnBlur === void 0 && $$bindings.clearOnBlur && clearOnBlur !== void 0)
    $$bindings.clearOnBlur(clearOnBlur);
  if ($$props.selectOnExactMatch === void 0 && $$bindings.selectOnExactMatch && selectOnExactMatch !== void 0)
    $$bindings.selectOnExactMatch(selectOnExactMatch);
  if ($$props.showMenuWithNoInput === void 0 && $$bindings.showMenuWithNoInput && showMenuWithNoInput !== void 0)
    $$bindings.showMenuWithNoInput(showMenuWithNoInput);
  if ($$props.noMatchesActionDisabled === void 0 && $$bindings.noMatchesActionDisabled && noMatchesActionDisabled !== void 0)
    $$bindings.noMatchesActionDisabled(noMatchesActionDisabled);
  if ($$props.search === void 0 && $$bindings.search && search !== void 0)
    $$bindings.search(search);
  if ($$props.menu$class === void 0 && $$bindings.menu$class && menu$class !== void 0)
    $$bindings.menu$class(menu$class);
  if ($$props.menu$anchor === void 0 && $$bindings.menu$anchor && menu$anchor !== void 0)
    $$bindings.menu$anchor(menu$anchor);
  if ($$props.menu$anchorCorner === void 0 && $$bindings.menu$anchorCorner && menu$anchorCorner !== void 0)
    $$bindings.menu$anchorCorner(menu$anchorCorner);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0)
    $$bindings.blur(blur);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (previousValue !== value) {
        text = getOptionLabel(value);
        previousValue = value;
      } else if (combobox && value !== text) {
        value = text;
        previousValue = value;
      }
    }
    menuOpen = focused;
    {
      if (previousText !== text) {
        if (!combobox && value != null && getOptionLabel(value) !== text) {
          deselectOption(value, false);
        }
      }
    }
    {
      if (options) {
        performSearch();
      }
    }
    {
      if (previousFocusedIndex !== focusedIndex) {
        const activeItems = getActiveMenuItems();
        activeItems.forEach((item, i) => {
          if (i !== focusedIndex) {
            item.activated = false;
          }
        });
        previousFocusedIndex = focusedIndex;
      }
    }
    $$rendered = `<div${spread(
      [
        {
          class: escape_attribute_value(classMap({
            [className]: true,
            "smui-autocomplete": true
          }))
        },
        escape_object(exclude($$restProps, ["menu$", "textfield$", "list$"]))
      ],
      {}
    )}${add_attribute("this", element, 0)}><div${add_attribute("aria-controls", menuId, 0)}${add_attribute("aria-expanded", menuOpen ? "true" : "false", 0)} role="combobox" tabindex="0"${add_attribute("this", inputContainer, 0)}>${slots.default ? slots.default({}) : ` ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      Object.assign({}, { label }, { disabled }, prefixFilter($$restProps, "textfield$"), { value: text }),
      {
        value: ($$value) => {
          text = $$value;
          $$settled = false;
        }
      },
      {}
    )} `}</div> ${validate_component(Menu, "Menu").$$render(
      $$result,
      Object.assign(
        {},
        {
          class: classMap({
            [menu$class]: true,
            "smui-autocomplete__menu": true
          })
        },
        { id: menuId },
        { managed: true },
        { neverRestoreFocus: true },
        { open: menuOpen },
        { anchor: menu$anchor },
        { anchorCorner: menu$anchorCorner },
        prefixFilter($$restProps, "menu$"),
        { anchorElement: element }
      ),
      {
        anchorElement: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(List, "List").$$render($$result, Object.assign({}, prefixFilter($$restProps, "list$")), {}, {
            default: () => {
              return `${loading ? `${validate_component(Item, "Item").$$render($$result, { disabled: true }, {}, {
                default: () => {
                  return `${slots.loading ? slots.loading({}) : ` ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `Loading...`;
                    }
                  })} `}`;
                }
              })}` : `${error ? `${validate_component(Item, "Item").$$render($$result, { disabled: true }, {}, {
                default: () => {
                  return `${slots.error ? slots.error({}) : ` ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `Error while fetching suggestions.`;
                    }
                  })} `}`;
                }
              })}` : `${matches.length ? each(matches, (match, i) => {
                return `${validate_component(Item, "Item").$$render(
                  $$result,
                  {
                    disabled: getOptionDisabled(match),
                    selected: match === value
                  },
                  {},
                  {
                    default: () => {
                      return `${slots.match ? slots.match({ match }) : ` ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(getOptionLabel(match))}`;
                        }
                      })} `} `;
                    }
                  }
                )}`;
              }) : `${validate_component(Item, "Item").$$render($$result, { disabled: noMatchesActionDisabled }, {}, {
                default: () => {
                  return `${slots["no-matches"] ? slots["no-matches"]({}) : ` ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `No matches found.`;
                    }
                  })} `} `;
                }
              })}`}`}`}`;
            }
          })}`;
        }
      }
    )} </div>`;
  } while (!$$settled);
  return $$rendered;
});
const Dialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "open",
    "selection",
    "escapeKeyAction",
    "scrimClickAction",
    "autoStackButtons",
    "fullscreen",
    "sheet",
    "noContentPadding",
    "container$class",
    "surface$class",
    "isOpen",
    "setOpen",
    "layout",
    "getElement"
  ]);
  let $aboveFullscreenShown, $$unsubscribe_aboveFullscreenShown;
  let $actionButtonsReversed, $$unsubscribe_actionButtonsReversed;
  var _a;
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { open = false } = $$props;
  let { selection = false } = $$props;
  let { escapeKeyAction = "close" } = $$props;
  let { scrimClickAction = "close" } = $$props;
  let { autoStackButtons = true } = $$props;
  let { fullscreen = false } = $$props;
  let { sheet = false } = $$props;
  let { noContentPadding = false } = $$props;
  let { container$class = "" } = $$props;
  let { surface$class = "" } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let actionButtonsReversed = writable(false);
  $$unsubscribe_actionButtonsReversed = subscribe(actionButtonsReversed, (value) => $actionButtonsReversed = value);
  let aboveFullscreen = getContext("SMUI:dialog:aboveFullscreen");
  let aboveFullscreenShown = (_a = getContext("SMUI:dialog:aboveFullscreenShown")) !== null && _a !== void 0 ? _a : writable(false);
  $$unsubscribe_aboveFullscreenShown = subscribe(aboveFullscreenShown, (value) => $aboveFullscreenShown = value);
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  let addLayoutListenerFn = (listener) => {
    return () => {
    };
  };
  setContext("SMUI:dialog:actions:reversed", actionButtonsReversed);
  setContext("SMUI:addLayoutListener", addLayoutListenerFn);
  setContext("SMUI:dialog:selection", selection);
  setContext("SMUI:dialog:aboveFullscreen", aboveFullscreen || fullscreen);
  setContext("SMUI:dialog:aboveFullscreenShown", aboveFullscreenShown);
  if (sheet) {
    setContext("SMUI:icon-button:context", "dialog:sheet");
  }
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  let previousAboveFullscreenShown = $aboveFullscreenShown;
  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });
  function isOpen() {
    return open;
  }
  function setOpen(value) {
    open = value;
  }
  function layout() {
    return instance.layout();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.selection === void 0 && $$bindings.selection && selection !== void 0)
    $$bindings.selection(selection);
  if ($$props.escapeKeyAction === void 0 && $$bindings.escapeKeyAction && escapeKeyAction !== void 0)
    $$bindings.escapeKeyAction(escapeKeyAction);
  if ($$props.scrimClickAction === void 0 && $$bindings.scrimClickAction && scrimClickAction !== void 0)
    $$bindings.scrimClickAction(scrimClickAction);
  if ($$props.autoStackButtons === void 0 && $$bindings.autoStackButtons && autoStackButtons !== void 0)
    $$bindings.autoStackButtons(autoStackButtons);
  if ($$props.fullscreen === void 0 && $$bindings.fullscreen && fullscreen !== void 0)
    $$bindings.fullscreen(fullscreen);
  if ($$props.sheet === void 0 && $$bindings.sheet && sheet !== void 0)
    $$bindings.sheet(sheet);
  if ($$props.noContentPadding === void 0 && $$bindings.noContentPadding && noContentPadding !== void 0)
    $$bindings.noContentPadding(noContentPadding);
  if ($$props.container$class === void 0 && $$bindings.container$class && container$class !== void 0)
    $$bindings.container$class(container$class);
  if ($$props.surface$class === void 0 && $$bindings.surface$class && surface$class !== void 0)
    $$bindings.surface$class(surface$class);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.setOpen === void 0 && $$bindings.setOpen && setOpen !== void 0)
    $$bindings.setOpen(setOpen);
  if ($$props.layout === void 0 && $$bindings.layout && layout !== void 0)
    $$bindings.layout(layout);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    if (!autoStackButtons) {
      set_store_value(actionButtonsReversed, $actionButtonsReversed = true, $actionButtonsReversed);
    }
  }
  {
    if (fullscreen && instance && previousAboveFullscreenShown !== $aboveFullscreenShown) {
      previousAboveFullscreenShown = $aboveFullscreenShown;
      if ($aboveFullscreenShown) {
        instance.showSurfaceScrim();
      } else {
        instance.hideSurfaceScrim();
      }
    }
  }
  $$unsubscribe_aboveFullscreenShown();
  $$unsubscribe_actionButtonsReversed();
  return `  <div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-dialog": true,
          "mdc-dialog--stacked": !autoStackButtons,
          "mdc-dialog--fullscreen": fullscreen,
          "mdc-dialog--sheet": sheet,
          "mdc-dialog--no-content-padding": noContentPadding,
          "smui-dialog--selection": selection,
          ...internalClasses
        }))
      },
      { role: "alertdialog" },
      { "aria-modal": "true" },
      escape_object(exclude($$restProps, ["container$", "surface$"]))
    ],
    {}
  )}${add_attribute("this", element, 0)}><div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [container$class]: true,
          "mdc-dialog__container": true
        }))
      },
      escape_object(prefixFilter($$restProps, "container$"))
    ],
    {}
  )}><div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [surface$class]: true,
          "mdc-dialog__surface": true
        }))
      },
      { role: "alertdialog" },
      { "aria-modal": "true" },
      escape_object(prefixFilter($$restProps, "surface$"))
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``} ${fullscreen ? `<div class="mdc-dialog__surface-scrim"></div>` : ``}</div></div> <div class="mdc-dialog__scrim"></div></div> ${slots.over ? slots.over({}) : ``}`;
});
classAdderBuilder({
  class: "mdc-dialog__header",
  tag: "div",
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
classAdderBuilder({
  class: "mdc-dialog__title",
  tag: "h2"
});
const Content = classAdderBuilder({
  class: "mdc-dialog__content",
  tag: "div"
});
const Actions = classAdderBuilder({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
});
const css = {
  code: "article.svelte-1oqgc0g.svelte-1oqgc0g{width:100%}.display.svelte-1oqgc0g.svelte-1oqgc0g{margin-bottom:60px}.photos.svelte-1oqgc0g.svelte-1oqgc0g{position:relative}.banner.svelte-1oqgc0g.svelte-1oqgc0g{width:100%;height:170px;background-color:rgba(0, 247, 255, 0.919);cursor:pointer}.banner.svelte-1oqgc0g.svelte-1oqgc0g:hover{background-color:rgba(0, 247, 255, 0.519)}.profile.svelte-1oqgc0g.svelte-1oqgc0g{position:absolute;bottom:-50px;left:10px;width:120px;height:120px;border-radius:50%;border-width:2px;background:#888;cursor:pointer;overflow:hidden}.details.svelte-1oqgc0g.svelte-1oqgc0g{display:flex;flex-direction:column;gap:1.5em;padding:0 1em}.profile.svelte-1oqgc0g.svelte-1oqgc0g:hover{background-color:rgb(100, 100, 100)}.profile.svelte-1oqgc0g img.svelte-1oqgc0g{width:100%;height:100%}.hidden.svelte-1oqgc0g.svelte-1oqgc0g{display:none}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Textfield from \\"@smui/textfield\\";\\r\\n    import HelperText from \\"@smui/textfield/helper-text\\";\\r\\n    import TopAppBar, { Row, Section, Title } from \\"@smui/top-app-bar\\";\\r\\n    import IconButton from \\"@smui/icon-button\\";\\r\\n    import Autocomplete from \\"@smui-extra/autocomplete\\";\\r\\n    import { Text } from \\"@smui/list\\";\\r\\n    import Button, { Label } from \\"@smui/button\\";\\r\\n    import Dialog, { Content, Actions } from \\"@smui/dialog\\";\\r\\n    import Radio from \\"@smui/radio\\";\\r\\n    import FormField from \\"@smui/form-field\\";\\r\\n    import { page } from \\"$app/stores\\";\\r\\n    import { profileImage, bannerImage, showLeft } from \\"$lib/stores\\";\\r\\n    // import heic2any from \\"heic2any\\";\\r\\n    import {browser} from '$app/environment';\\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n    import { onMount } from \\"svelte\\";\\r\\n    import { currentPath } from \\"$lib/stores.js\\";\\r\\n    $currentPath = 'Profile';\\r\\n    // let heic2any;\\r\\n    export let data;\\r\\n    // type Rank = {\\r\\n    //     id: number;\\r\\n    //     label: string;\\r\\n    // };\\r\\n    let type = \\"Personal\\";\\r\\n    let details = {\\r\\n        established: \\"\\",\\r\\n    };\\r\\n    let detailsPersonal = {\\r\\n        gender: \\"\\",\\r\\n        dob: \\"\\",\\r\\n        rank: {\\r\\n            id: 0,\\r\\n            label: \\"Student\\",\\r\\n        },\\r\\n        university: \\"DSU\\",\\r\\n        studentID: \\"\\",\\r\\n        experience: 0,\\r\\n    };\\r\\n    let common = {\\r\\n        bio: \\"\\",\\r\\n        email: \\"\\",\\r\\n        zip: \\"\\",\\r\\n        city: \\"\\",\\r\\n        country: \\"\\",\\r\\n        website: \\"\\",\\r\\n        followers: 0,\\r\\n        following: 0,\\r\\n        replies: 0,\\r\\n        shares: 0,\\r\\n    };\\r\\n    let name = \\"\\",\\r\\n        phone = \\"\\",\\r\\n        university = \\"DSU\\",\\r\\n        studentID = \\"\\";\\r\\n    let newLabel = \\"\\";\\r\\n    let value = undefined;\\r\\n    let text = \\"\\";\\r\\n    onMount(async () => {\\r\\n        // heic2any = await import('heic2any')\\r\\n        type = data.userDetail.type || 'Personal';\\r\\n        details = data.userDetail.details;\\r\\n        common = data.userDetail.common;\\r\\n        name = data.user.name;\\r\\n        phone = data.user.phone;\\r\\n        if (type === \\"Personal\\") {\\r\\n            value = data.userDetail.details.rank;\\r\\n            text = data.userDetail.details.rank.label;\\r\\n            detailsPersonal = data.userDetail.details;\\r\\n        }\\r\\n        if (!$bannerImage) bannerImage.set(\\"/avatar.svg\\");\\r\\n    });\\r\\n    // $: if(browser) heic2any = await import('heic2any')\\r\\n    let accountTypes = [\\"Personal\\", \\"Other\\"];\\r\\n    let genders = [\\"Male\\", \\"Female\\", \\"Other\\"];\\r\\n\\r\\n    let dialogOpen = false;\\r\\n    let ranks = [\\r\\n        {\\r\\n            id: 0,\\r\\n            label: \\"Student\\",\\r\\n        },\\r\\n        {\\r\\n            id: 1,\\r\\n            label: \\"Teacher\\"\\r\\n        },\\r\\n    ];\\r\\n\\r\\n    function addObject() {\\r\\n        const newObject = {\\r\\n            id: options[options.length - 1].id + 1,\\r\\n            label: newLabel,\\r\\n        };\\r\\n        ranks = [...ranks, newObject];\\r\\n        value = newObject;\\r\\n        detailsPersonal.rank = newObject;\\r\\n        dialogOpen = false;\\r\\n    }\\r\\n    let imageNode, bannerNode, banners;\\r\\n    let profileInput, bannerInput;\\r\\n    let files;\\r\\n    let avatar, banner;\\r\\n    const changeProfile = async () => {\\r\\n        if (!$page.data.user) {\\r\\n            return;\\r\\n        }\\r\\n\\r\\n        profileInput.click();\\r\\n    };\\r\\n    const changeBanner = async () => {\\r\\n        if (!$page.data.user) {\\r\\n            return;\\r\\n        }\\r\\n\\r\\n        bannerInput.click();\\r\\n    };\\r\\n    // async function convertHeicToJpeg(heicFile) {\\r\\n    //     try {\\r\\n    //         const jpegBlob = await heic2any({\\r\\n    //             blob: heicFile,\\r\\n    //             toType: \\"image/jpeg\\",\\r\\n    //             quality: 0.8,\\r\\n    //         });\\r\\n\\r\\n    //         return jpegBlob;\\r\\n    //     } catch (error) {\\r\\n    //         console.error(\\"Error converting HEIC to JPEG:\\", error);\\r\\n    //         return null;\\r\\n    //     }\\r\\n    // }\\r\\n    // const convertHEIC2JPEG = async (image) => {\\r\\n    //     const jpegBlob = await convertHeicToJpeg(image);\\r\\n\\r\\n    //     if (jpegBlob) {\\r\\n    //         const jpegUrl = URL.createObjectURL(jpegBlob);\\r\\n    //         return jpegUrl;\\r\\n    //     }\\r\\n    // };\\r\\n    async function getBase64(image) {\\r\\n        // if(browser && (image.type === 'image/heic' || image.type === 'image/heif')) {\\r\\n        //     image = await convertHEIC2JPEG(image);\\r\\n        // }\\r\\n        const img = new Image();\\r\\n        img.src = URL.createObjectURL(image);\\r\\n        img.onload = () => {\\r\\n            // Create a canvas element and get its context\\r\\n            const canvas = document.createElement(\\"canvas\\");\\r\\n            const ctx = canvas.getContext(\\"2d\\");\\r\\n\\r\\n            // Set the desired maximum dimensions for the resized image\\r\\n            const maxWidth = 200;\\r\\n            const maxHeight = 200;\\r\\n\\r\\n            // Calculate the new dimensions while maintaining the aspect ratio\\r\\n            const aspectRatio = img.width / img.height;\\r\\n            let newWidth, newHeight;\\r\\n\\r\\n            if (img.width > img.height) {\\r\\n                newWidth = Math.min(img.width, maxWidth);\\r\\n                newHeight = Math.round(newWidth / aspectRatio);\\r\\n            } else {\\r\\n                newHeight = Math.min(img.height, maxHeight);\\r\\n                newWidth = Math.round(newHeight * aspectRatio);\\r\\n            }\\r\\n\\r\\n            // Resize the image using the canvas\\r\\n            canvas.width = newWidth;\\r\\n            canvas.height = newHeight;\\r\\n            ctx.drawImage(img, 0, 0, newWidth, newHeight);\\r\\n\\r\\n            // Convert the resized image to a data URL\\r\\n            const resizedImageDataURL = canvas.toDataURL(\\"image/jpeg\\", 0.9);\\r\\n\\r\\n            // Call the uploadFunction with the resized image data URL and other parameters\\r\\n            let url = \`/api/\${$page.data.user.publicID}/profilepic\`;\\r\\n            banner = resizedImageDataURL;\\r\\n            if (resizedImageDataURL) {\\r\\n                profileImage.set(resizedImageDataURL);\\r\\n                // console.log('Profile image saved locally', $profileImage)\\r\\n            }\\r\\n            // console.log(\\"banner...\\", resizedImageDataURL);\\r\\n            uploadFunction(resizedImageDataURL, image.name, url);\\r\\n        };\\r\\n    }\\r\\n\\r\\n    async function getBaseBanner64(image) {\\r\\n        // if(browser && (image.type === 'image/heic' || image.type === 'image/heif')) {\\r\\n        //     image = await convertHEIC2JPEG(image);\\r\\n        // }\\r\\n        // Create a new Image object and read the image file\\r\\n        const img = new Image();\\r\\n        img.src = URL.createObjectURL(image);\\r\\n        img.onload = () => {\\r\\n            // Create a canvas element and get its context\\r\\n            const canvas = document.createElement(\\"canvas\\");\\r\\n            const ctx = canvas.getContext(\\"2d\\");\\r\\n\\r\\n            // Set the desired maximum dimensions for the resized image\\r\\n            const maxWidth = 800;\\r\\n            const maxHeight = 300;\\r\\n\\r\\n            // Calculate the new dimensions while maintaining the aspect ratio\\r\\n            const aspectRatio = img.width / img.height;\\r\\n            let newWidth, newHeight;\\r\\n\\r\\n            if (img.width > img.height) {\\r\\n                newWidth = Math.min(img.width, maxWidth);\\r\\n                newHeight = Math.round(newWidth / aspectRatio);\\r\\n            } else {\\r\\n                newHeight = Math.min(img.height, maxHeight);\\r\\n                newWidth = Math.round(newHeight * aspectRatio);\\r\\n            }\\r\\n\\r\\n            // Resize the image using the canvas\\r\\n            canvas.width = newWidth;\\r\\n            canvas.height = newHeight;\\r\\n            ctx.drawImage(img, 0, 0, newWidth, newHeight);\\r\\n\\r\\n            // Convert the resized image to a data URL\\r\\n            const resizedImageDataURL = canvas.toDataURL(\\"image/jpeg\\", 0.9);\\r\\n\\r\\n            // Call the uploadFunction with the resized image data URL and other parameters\\r\\n            let url = \`/api/\${$page.data.user.publicID}/bannerpic\`;\\r\\n            banner = resizedImageDataURL;\\r\\n            if (resizedImageDataURL) {\\r\\n                bannerImage.set(resizedImageDataURL);\\r\\n            }\\r\\n            // console.log(\\"banner...\\", resizedImageDataURL);\\r\\n            uploadFunction(resizedImageDataURL, image.name, url);\\r\\n        };\\r\\n    }\\r\\n\\r\\n    async function uploadFunction(imgBase64, name, url) {\\r\\n        const idata = {};\\r\\n        const imgData = imgBase64.split(\\",\\");\\r\\n        idata[\\"name\\"] = name;\\r\\n        idata[\\"image\\"] = imgData[1];\\r\\n        const res = await fetch(url, {\\r\\n            method: \\"POST\\",\\r\\n            headers: {\\r\\n                \\"Content-Type\\": \\"application/json\\",\\r\\n                accept: \\"application/json\\",\\r\\n            },\\r\\n            body: JSON.stringify({ data: idata }),\\r\\n        });\\r\\n        if (!res.ok) {\\r\\n            alert(\\"Upload failed.\\");\\r\\n            return;\\r\\n        }\\r\\n        alert(\\"Image uploaded\\");\\r\\n    }\\r\\n    const save = async () => {\\r\\n        // console.log(type, detailsPersonal, common)\\r\\n        const res = await fetch(\\"/api/userDetail\\", {\\r\\n            method: \\"POST\\",\\r\\n            body: JSON.stringify({\\r\\n                publicID: $page.data.user.publicID,\\r\\n                type,\\r\\n                details: type === \\"Personal\\" ? detailsPersonal : details,\\r\\n                common,\\r\\n            }),\\r\\n            headers: {\\r\\n                \\"content-type\\": \\"application/json\\",\\r\\n            },\\r\\n        });\\r\\n        if (!res.ok) {\\r\\n            alert(\\"Failed to update\\");\\r\\n            return;\\r\\n        }\\r\\n        alert(\\"Updated...may need to log in again to see changes.\\");\\r\\n        goto(\`/\${$page.data.user.publicID}\`)\\r\\n    };\\r\\n    // $:console.log($bannerImage)\\r\\n    // console.log($page.data.userDetail.details, $page.data.userDetail.common)\\r\\n    // $:console.log(details, common, data.userDetail.details, data.userDetail.common)\\r\\n    let title = \\"User Profile | drmithileshkumar.com\\";\\r\\n    let description = \\"Access your user profile\\";\\r\\n    let keywords = \\"DrMithileshKumar, user profile, math learning, progress tracking, performance review, personalized experience\\";\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n    <title>{title}</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/settings/profile\\" />\\r\\n    <meta name=\\"description\\" content=\\"{description}\\">\\r\\n    <meta name=\\"keywords\\" content=\\"{keywords}\\">\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <div class=\\"display\\">\\r\\n        <div class=\\"photos\\">\\r\\n            <!-- svelte-ignore a11y-no-static-element-interactions -->\\r\\n            <div class=\\"banner\\" on:click={changeBanner}>\\r\\n                <input\\r\\n                    class=\\"hidden\\"\\r\\n                    id=\\"file-to-upload\\"\\r\\n                    type=\\"file\\"\\r\\n                    accept=\\"image/*\\"\\r\\n                    bind:files={banners}\\r\\n                    bind:this={bannerInput}\\r\\n                    on:change={() => getBaseBanner64(banners[0])}\\r\\n                />\\r\\n                <img\\r\\n                    bind:this={bannerNode}\\r\\n                    src={$bannerImage}\\r\\n                    alt=\\"Image\\"\\r\\n                    width=\\"100%\\"\\r\\n                    height=\\"100%\\"\\r\\n                />\\r\\n            </div>\\r\\n            <!-- svelte-ignore a11y-no-static-element-interactions -->\\r\\n            <div class=\\"profile\\" on:click={changeProfile}>\\r\\n                <input\\r\\n                    class=\\"hidden\\"\\r\\n                    id=\\"file-to-upload\\"\\r\\n                    type=\\"file\\"\\r\\n                    accept=\\"image/*\\"\\r\\n                    bind:files\\r\\n                    bind:this={profileInput}\\r\\n                    on:change={() => getBase64(files[0])}\\r\\n                />\\r\\n                <img\\r\\n                    bind:this={imageNode}\\r\\n                    src={$profileImage}\\r\\n                    alt=\\"Image\\"\\r\\n                    width=\\"100\\"\\r\\n                    height=\\"100\\"\\r\\n                />\\r\\n            </div>\\r\\n        </div>\\r\\n    </div>\\r\\n    <div class=\\"details\\">\\r\\n        <!-- <div class=\\"accountType\\">\\r\\n            <span class=\\"label\\">Account Type</span>\\r\\n            {#each accountTypes as accountType}\\r\\n                <FormField>\\r\\n                    <Radio bind:group={type} value={accountType} />\\r\\n                    <span slot=\\"label\\">\\r\\n                        {accountType}\\r\\n                    </span>\\r\\n                </FormField>\\r\\n            {/each}\\r\\n        </div> -->\\r\\n        {#if type === \\"Personal\\"}\\r\\n            <div class=\\"gender\\">\\r\\n                <span class=\\"label\\">Gender</span>\\r\\n                {#each genders as gender}\\r\\n                    <FormField>\\r\\n                        <Radio\\r\\n                            bind:group={detailsPersonal.gender}\\r\\n                            value={gender}\\r\\n                        />\\r\\n                        <span slot=\\"label\\">\\r\\n                            {gender}\\r\\n                        </span>\\r\\n                    </FormField>\\r\\n                {/each}\\r\\n            </div>\\r\\n            <Autocomplete\\r\\n                options={ranks}\\r\\n                getOptionLabel={(option) => (option ? \`\${option.label}\` : \\"\\")}\\r\\n                bind:value={detailsPersonal.rank}\\r\\n                bind:text\\r\\n                noMatchesActionDisabled={false}\\r\\n                on:SMUIAutocomplete:noMatchesAction={() => {\\r\\n                    newLabel = text;\\r\\n                    dialogOpen = true;\\r\\n                }}\\r\\n                label=\\"Rank\\"\\r\\n                style=\\"width: 100%;\\"\\r\\n                textfield$style=\\"width: 100%;\\"\\r\\n                textfield$variant=\\"filled\\"\\r\\n            >\\r\\n                <div slot=\\"no-matches\\">\\r\\n                    <Text>Add rank</Text>\\r\\n                </div>\\r\\n            </Autocomplete>\\r\\n            <Dialog\\r\\n                bind:open={dialogOpen}\\r\\n                aria-labelledby=\\"autocomplete-dialog-title\\"\\r\\n                aria-describedby=\\"autocomplete-dialog-content\\"\\r\\n            >\\r\\n                <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->\\r\\n                <Title id=\\"autocomplete-dialog-title\\">New Rank</Title>\\r\\n                <Content id=\\"autocomplete-dialog-content\\">\\r\\n                    <Textfield bind:value={newLabel} label=\\"Rank\\" />\\r\\n                </Content>\\r\\n                <Actions>\\r\\n                    <Button>\\r\\n                        <Label>Cancel</Label>\\r\\n                    </Button>\\r\\n                    <Button on:click={addObject}>\\r\\n                        <Label>Add</Label>\\r\\n                    </Button>\\r\\n                </Actions>\\r\\n            </Dialog>\\r\\n            <Textfield variant=\\"filled\\" bind:value={detailsPersonal.university} label=\\"University\\" />\\r\\n            {#if detailsPersonal.rank.label === 'Student'}\\r\\n                <Textfield variant=\\"filled\\" bind:value={detailsPersonal.studentID} label=\\"Student ID\\" />\\r\\n            {/if}\\r\\n        {:else if details.established}\\r\\n            <Textfield\\r\\n                type=\\"date\\"\\r\\n                variant=\\"filled\\"\\r\\n                bind:value={details.established}\\r\\n                label=\\"Established\\"\\r\\n            />\\r\\n        {/if}\\r\\n        <Textfield variant=\\"filled\\" disabled bind:value={name} label=\\"Name\\" />\\r\\n        <Textfield disabled variant=\\"filled\\" bind:value={phone} label=\\"Phone\\" />\\r\\n        <Textfield\\r\\n            type=\\"email\\"\\r\\n            variant=\\"filled\\"\\r\\n            bind:value={common.email}\\r\\n            label=\\"Email\\"\\r\\n        />\\r\\n        <Textfield variant=\\"filled\\" bind:value={common.bio} label=\\"Bio\\" />\\r\\n        {#if type === \\"Personal\\"}\\r\\n            <!-- <Textfield\\r\\n                variant=\\"filled\\"\\r\\n                bind:value={detailsPersonal.experience}\\r\\n                label=\\"Experience\\"\\r\\n                suffix=\\"years\\"\\r\\n                input$pattern=\\"\\\\d+\\"\\r\\n            /> -->\\r\\n            <!---------------------------------------------->\\r\\n            <Textfield\\r\\n                type=\\"date\\"\\r\\n                variant=\\"filled\\"\\r\\n                bind:value={detailsPersonal.dob}\\r\\n                label=\\"Date of Birth\\"\\r\\n            />\\r\\n        {/if}\\r\\n\\r\\n        <!---------------------------------------------->\\r\\n        <Textfield variant=\\"filled\\" bind:value={common.zip} label=\\"Zip Code\\" />\\r\\n        <Textfield variant=\\"filled\\" bind:value={common.city} label=\\"City\\" />\\r\\n        <Textfield\\r\\n            variant=\\"filled\\"\\r\\n            bind:value={common.country}\\r\\n            label=\\"Country\\"\\r\\n        />\\r\\n        <Textfield\\r\\n            variant=\\"filled\\"\\r\\n            bind:value={common.website}\\r\\n            label=\\"Website\\"\\r\\n        />\\r\\n        <Section align=\\"end\\" toolbar>\\r\\n            <Button on:click={save}>save</Button>\\r\\n            <IconButton class=\\"material-icons\\" aria-label=\\"Cancel\\">close</IconButton\\r\\n            >\\r\\n        </Section>\\r\\n    </div>\\r\\n</article>\\r\\n\\r\\n<style>\\r\\n    article {\\r\\n        width: 100%;\\r\\n    }\\r\\n    /* header {\\r\\n        margin-bottom: 1.5em;\\r\\n    } */\\r\\n    .display {\\r\\n        margin-bottom: 60px;\\r\\n    }\\r\\n    .photos {\\r\\n        position: relative;\\r\\n    }\\r\\n    .banner {\\r\\n        width: 100%;\\r\\n        height: 170px;\\r\\n        background-color: rgba(0, 247, 255, 0.919);\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .banner:hover {\\r\\n        background-color: rgba(0, 247, 255, 0.519);\\r\\n    }\\r\\n    .profile {\\r\\n        position: absolute;\\r\\n        bottom: -50px;\\r\\n        left: 10px;\\r\\n        width: 120px;\\r\\n        height: 120px;\\r\\n        border-radius: 50%;\\r\\n        border-width: 2px;\\r\\n        background: #888;\\r\\n        cursor: pointer;\\r\\n        overflow: hidden;\\r\\n    }\\r\\n    .details {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 1.5em;\\r\\n        padding: 0 1em;\\r\\n    }\\r\\n    .profile:hover {\\r\\n        background-color: rgb(100, 100, 100);\\r\\n    }\\r\\n    .profile img {\\r\\n        width: 100%;\\r\\n        height: 100%;\\r\\n        /* object-fit: cover; */\\r\\n    }\\r\\n    .hidden {\\r\\n        display: none;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAwcI,qCAAQ,CACJ,KAAK,CAAE,IACX,CAIA,sCAAS,CACL,aAAa,CAAE,IACnB,CACA,qCAAQ,CACJ,QAAQ,CAAE,QACd,CACA,qCAAQ,CACJ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CAC1C,MAAM,CAAE,OACZ,CACA,qCAAO,MAAO,CACV,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,CAC7C,CACA,sCAAS,CACL,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,KAAK,CACb,IAAI,CAAE,IAAI,CACV,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,aAAa,CAAE,GAAG,CAClB,YAAY,CAAE,GAAG,CACjB,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,OAAO,CACf,QAAQ,CAAE,MACd,CACA,sCAAS,CACL,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KAAK,CACV,OAAO,CAAE,CAAC,CAAC,GACf,CACA,sCAAQ,MAAO,CACX,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACvC,CACA,uBAAQ,CAAC,kBAAI,CACT,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAEZ,CACA,qCAAQ,CACJ,OAAO,CAAE,IACb"}`
};
let title = "User Profile | drmithileshkumar.com";
let description = "Access your user profile";
let keywords = "DrMithileshKumar, user profile, math learning, progress tracking, performance review, personalized experience";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  let $bannerImage, $$unsubscribe_bannerImage;
  let $currentPath, $$unsubscribe_currentPath;
  let $profileImage, $$unsubscribe_profileImage;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_bannerImage = subscribe(bannerImage, (value) => $bannerImage = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_profileImage = subscribe(profileImage, (value) => $profileImage = value);
  set_store_value(currentPath, $currentPath = "Profile", $currentPath);
  let { data } = $$props;
  let detailsPersonal = {
    gender: "",
    dob: "",
    rank: { id: 0, label: "Student" },
    university: "DSU",
    studentID: "",
    experience: 0
  };
  let common = {
    bio: "",
    email: "",
    zip: "",
    city: "",
    country: "",
    website: "",
    followers: 0,
    following: 0,
    replies: 0,
    shares: 0
  };
  let name = "", phone = "";
  let newLabel = "";
  let text = "";
  let genders = ["Male", "Female", "Other"];
  let dialogOpen = false;
  let ranks = [{ id: 0, label: "Student" }, { id: 1, label: "Teacher" }];
  let imageNode, bannerNode;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-yxt6mt_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/settings/profile"><meta name="description"${add_attribute("content", description, 0)}><meta name="keywords"${add_attribute("content", keywords, 0)}><!-- HEAD_svelte-yxt6mt_END -->`, ""} <article class="svelte-1oqgc0g"><div class="display svelte-1oqgc0g"><div class="photos svelte-1oqgc0g"> <div class="banner svelte-1oqgc0g"><input class="hidden svelte-1oqgc0g" id="file-to-upload" type="file" accept="image/*"> <img${add_attribute("src", $bannerImage, 0)} alt="Image" width="100%" height="100%"${add_attribute("this", bannerNode, 0)}></div>  <div class="profile svelte-1oqgc0g"><input class="hidden svelte-1oqgc0g" id="file-to-upload" type="file" accept="image/*"> <img${add_attribute("src", $profileImage, 0)} alt="Image" width="100" height="100" class="svelte-1oqgc0g"${add_attribute("this", imageNode, 0)}></div></div></div> <div class="details svelte-1oqgc0g"> ${`<div class="gender"><span class="label" data-svelte-h="svelte-q7una2">Gender</span> ${each(genders, (gender) => {
      return `${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
        label: () => {
          return `<span slot="label">${escape(gender)} </span>`;
        },
        default: () => {
          return `${validate_component(Radio, "Radio").$$render(
            $$result,
            {
              value: gender,
              group: detailsPersonal.gender
            },
            {
              group: ($$value) => {
                detailsPersonal.gender = $$value;
                $$settled = false;
              }
            },
            {}
          )} `;
        }
      })}`;
    })}</div> ${validate_component(Autocomplete, "Autocomplete").$$render(
      $$result,
      {
        options: ranks,
        getOptionLabel: (option) => option ? `${option.label}` : "",
        noMatchesActionDisabled: false,
        label: "Rank",
        style: "width: 100%;",
        textfield$style: "width: 100%;",
        textfield$variant: "filled",
        value: detailsPersonal.rank,
        text
      },
      {
        value: ($$value) => {
          detailsPersonal.rank = $$value;
          $$settled = false;
        },
        text: ($$value) => {
          text = $$value;
          $$settled = false;
        }
      },
      {
        "no-matches": () => {
          return `<div slot="no-matches">${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `Add rank`;
            }
          })}</div>`;
        }
      }
    )} ${validate_component(Dialog, "Dialog").$$render(
      $$result,
      {
        "aria-labelledby": "autocomplete-dialog-title",
        "aria-describedby": "autocomplete-dialog-content",
        open: dialogOpen
      },
      {
        open: ($$value) => {
          dialogOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return ` ${validate_component(Title, "Title").$$render($$result, { id: "autocomplete-dialog-title" }, {}, {
            default: () => {
              return `New Rank`;
            }
          })} ${validate_component(Content, "Content").$$render($$result, { id: "autocomplete-dialog-content" }, {}, {
            default: () => {
              return `${validate_component(Textfield, "Textfield").$$render(
                $$result,
                { label: "Rank", value: newLabel },
                {
                  value: ($$value) => {
                    newLabel = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                    default: () => {
                      return `Cancel`;
                    }
                  })}`;
                }
              })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                    default: () => {
                      return `Add`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )} ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        variant: "filled",
        label: "University",
        value: detailsPersonal.university
      },
      {
        value: ($$value) => {
          detailsPersonal.university = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${detailsPersonal.rank.label === "Student" ? `${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        variant: "filled",
        label: "Student ID",
        value: detailsPersonal.studentID
      },
      {
        value: ($$value) => {
          detailsPersonal.studentID = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`} ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        variant: "filled",
        disabled: true,
        label: "Name",
        value: name
      },
      {
        value: ($$value) => {
          name = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        disabled: true,
        variant: "filled",
        label: "Phone",
        value: phone
      },
      {
        value: ($$value) => {
          phone = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        type: "email",
        variant: "filled",
        label: "Email",
        value: common.email
      },
      {
        value: ($$value) => {
          common.email = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        variant: "filled",
        label: "Bio",
        value: common.bio
      },
      {
        value: ($$value) => {
          common.bio = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${`  ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        type: "date",
        variant: "filled",
        label: "Date of Birth",
        value: detailsPersonal.dob
      },
      {
        value: ($$value) => {
          detailsPersonal.dob = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}  ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        variant: "filled",
        label: "Zip Code",
        value: common.zip
      },
      {
        value: ($$value) => {
          common.zip = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        variant: "filled",
        label: "City",
        value: common.city
      },
      {
        value: ($$value) => {
          common.city = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        variant: "filled",
        label: "Country",
        value: common.country
      },
      {
        value: ($$value) => {
          common.country = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        variant: "filled",
        label: "Website",
        value: common.website
      },
      {
        value: ($$value) => {
          common.website = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Section, "Section").$$render($$result, { align: "end", toolbar: true }, {}, {
      default: () => {
        return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `save`;
          }
        })} ${validate_component(IconButton, "IconButton").$$render(
          $$result,
          {
            class: "material-icons",
            "aria-label": "Cancel"
          },
          {},
          {
            default: () => {
              return `close`;
            }
          }
        )}`;
      }
    })}</div> </article>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_bannerImage();
  $$unsubscribe_currentPath();
  $$unsubscribe_profileImage();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-X8wOQaZV.js.map
