import { c as compute_rest_props, a as subscribe, b as set_store_value } from "./utils.js";
import { c as create_ssr_component, a as get_current_component, h as setContext, s as spread, b as escape_attribute_value, d as escape_object, f as add_attribute, i as each, v as validate_component, g as getContext } from "./ssr2.js";
import { w as writable } from "./index2.js";
import { f as forwardEventsBuilder, c as classMap } from "./forwardEventsBuilder.js";
import { C as ContextFragment } from "./ContextFragment.js";
const SegmentedButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "segments", "key", "singleSelect", "selected", "getElement"]);
  let $singleSelectStore, $$unsubscribe_singleSelectStore;
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { segments = [] } = $$props;
  let { key = (segment) => segment } = $$props;
  let { singleSelect = false } = $$props;
  let { selected = singleSelect ? void 0 : [] } = $$props;
  let element;
  let initialSelected = segments.map((segmentId) => singleSelect && selected === segmentId || !singleSelect && selected.indexOf(segmentId) !== -1);
  setContext("SMUI:icon:context", "segmented-button");
  setContext("SMUI:label:context", "segmented-button");
  const singleSelectStore = writable(singleSelect);
  $$unsubscribe_singleSelectStore = subscribe(singleSelectStore, (value) => $singleSelectStore = value);
  setContext("SMUI:segmented-button:singleSelect", singleSelectStore);
  singleSelect ? selected : new Set(selected);
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.segments === void 0 && $$bindings.segments && segments !== void 0) $$bindings.segments(segments);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0) $$bindings.key(key);
  if ($$props.singleSelect === void 0 && $$bindings.singleSelect && singleSelect !== void 0) $$bindings.singleSelect(singleSelect);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0) $$bindings.getElement(getElement);
  set_store_value(singleSelectStore, $singleSelectStore = singleSelect, $singleSelectStore);
  $$unsubscribe_singleSelectStore();
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-segmented-button": true,
          "mdc-segmented-button--single-select": singleSelect
        }))
      },
      {
        role: escape_attribute_value(singleSelect ? "radiogroup" : "group")
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${each(segments, (segment, i) => {
    return `${validate_component(ContextFragment, "ContextFragment").$$render(
      $$result,
      {
        key: "SMUI:segmented-button:segment:index",
        value: i
      },
      {},
      {
        default: () => {
          return `${validate_component(ContextFragment, "ContextFragment").$$render(
            $$result,
            {
              key: "SMUI:segmented-button:segment:initialSelected",
              value: initialSelected[i]
            },
            {},
            {
              default: () => {
                return `${slots.default ? slots.default({ segment }) : ``} `;
              }
            }
          )} `;
        }
      }
    )}`;
  })} </div>`;
});
const Segment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "style", "segment", "ripple", "touch", "selected", "getElement"]);
  let $$unsubscribe_index;
  let $$unsubscribe_singleSelect;
  let $initialSelectedStore, $$unsubscribe_initialSelectedStore;
  forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value) {
    return value === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { segment: segmentId } = $$props;
  let { ripple = true } = $$props;
  let { touch = false } = $$props;
  const initialSelectedStore = getContext("SMUI:segmented-button:segment:initialSelected");
  $$unsubscribe_initialSelectedStore = subscribe(initialSelectedStore, (value) => $initialSelectedStore = value);
  let { selected = uninitializedValue } = $$props;
  if (isUninitializedValue(selected)) {
    selected = $initialSelectedStore;
  }
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};
  const singleSelect = getContext("SMUI:segmented-button:singleSelect");
  $$unsubscribe_singleSelect = subscribe(singleSelect, (value) => value);
  const index = getContext("SMUI:segmented-button:segment:index");
  $$unsubscribe_index = subscribe(index, (value) => value);
  if (!segmentId) {
    throw new Error("The segment property is required! It should be passed down from the SegmentedButton to the Segment.");
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.segment === void 0 && $$bindings.segment && segmentId !== void 0) $$bindings.segment(segmentId);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0) $$bindings.ripple(ripple);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0) $$bindings.touch(touch);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0) $$bindings.getElement(getElement);
  $$unsubscribe_index();
  $$unsubscribe_singleSelect();
  $$unsubscribe_initialSelectedStore();
  return `<button${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-segmented-button__segment": true,
          "mdc-segmented-button__segment--touch": touch,
          "mdc-segmented-button__segment--selected": selected,
          ...internalClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
      },
      {
        role: escape_attribute_value(singleSelect ? "radio" : void 0)
      },
      {
        "aria-pressed": escape_attribute_value(!singleSelect ? selected ? "true" : "false" : void 0)
      },
      {
        "aria-checked": escape_attribute_value(singleSelect ? selected ? "true" : "false" : void 0)
      },
      escape_object(internalAttrs),
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${ripple ? `<div class="mdc-segmented-button__ripple"></div>` : ``}${slots.default ? slots.default({}) : ``}${touch ? `<div class="mdc-segmented-button__segment__touch"></div>` : ``}</button>`;
});
export {
  SegmentedButton as S,
  Segment as a
};
