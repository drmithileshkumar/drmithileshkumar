import { e as compute_rest_props } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, b as get_current_component, d as spread, f as escape_attribute_value, h as escape_object, a as add_attribute, v as validate_component, i as each, e as escape } from './ssr2-q3O0l93f.js';
import { f as forwardEventsBuilder, c as classMap } from './SmuiElement-DA9PKsv2.js';
import { d as dispatch } from './dispatch-BOSWPsEc.js';
import { e as exclude, p as prefixFilter } from './prefixFilter-B6cFZsw3.js';
import { T as Textfield } from './Textfield-7THkMs4-.js';
import './Suffix-CzM54Q0Q.js';
import { M as Menu } from './Menu-ClXMl2Su.js';
import './SelectionGroupIcon-UHPuZTt8.js';
import { L as List, I as Item } from './Item-Cixi8uf3.js';
import { T as Text } from './Subheader-BV9F6O0P.js';

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
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.getOptionDisabled === void 0 && $$bindings.getOptionDisabled && getOptionDisabled !== void 0) $$bindings.getOptionDisabled(getOptionDisabled);
  if ($$props.getOptionLabel === void 0 && $$bindings.getOptionLabel && getOptionLabel !== void 0) $$bindings.getOptionLabel(getOptionLabel);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0) $$bindings.toggle(toggle);
  if ($$props.combobox === void 0 && $$bindings.combobox && combobox !== void 0) $$bindings.combobox(combobox);
  if ($$props.clearOnBlur === void 0 && $$bindings.clearOnBlur && clearOnBlur !== void 0) $$bindings.clearOnBlur(clearOnBlur);
  if ($$props.selectOnExactMatch === void 0 && $$bindings.selectOnExactMatch && selectOnExactMatch !== void 0) $$bindings.selectOnExactMatch(selectOnExactMatch);
  if ($$props.showMenuWithNoInput === void 0 && $$bindings.showMenuWithNoInput && showMenuWithNoInput !== void 0) $$bindings.showMenuWithNoInput(showMenuWithNoInput);
  if ($$props.noMatchesActionDisabled === void 0 && $$bindings.noMatchesActionDisabled && noMatchesActionDisabled !== void 0) $$bindings.noMatchesActionDisabled(noMatchesActionDisabled);
  if ($$props.search === void 0 && $$bindings.search && search !== void 0) $$bindings.search(search);
  if ($$props.menu$class === void 0 && $$bindings.menu$class && menu$class !== void 0) $$bindings.menu$class(menu$class);
  if ($$props.menu$anchor === void 0 && $$bindings.menu$anchor && menu$anchor !== void 0) $$bindings.menu$anchor(menu$anchor);
  if ($$props.menu$anchorCorner === void 0 && $$bindings.menu$anchorCorner && menu$anchorCorner !== void 0) $$bindings.menu$anchorCorner(menu$anchorCorner);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0) $$bindings.focus(focus);
  if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0) $$bindings.blur(blur);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0) $$bindings.getElement(getElement);
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

export { Autocomplete as A };
//# sourceMappingURL=Autocomplete-rrl0mIJQ.js.map
