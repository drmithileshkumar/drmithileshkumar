import { e as compute_rest_props } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, b as get_current_component, g as getContext, o as onDestroy, d as spread, f as escape_attribute_value, h as escape_object, a as add_attribute, i as each, e as escape } from './ssr2-q3O0l93f.js';
import { f as forwardEventsBuilder, c as classMap } from './SmuiElement-DA9PKsv2.js';
import { e as exclude, p as prefixFilter } from './prefixFilter-B6cFZsw3.js';

/**
 * @license
 * Copyright 2020 Google Inc.
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
/** Tick mark enum, for discrete sliders. */
var TickMark;
(function (TickMark) {
    TickMark[TickMark["ACTIVE"] = 0] = "ACTIVE";
    TickMark[TickMark["INACTIVE"] = 1] = "INACTIVE";
})(TickMark || (TickMark = {}));
/**
 * Thumb types: range slider has two thumbs (START, END) whereas single point
 * slider only has one thumb (END).
 */
var Thumb;
(function (Thumb) {
    // Thumb at start of slider (e.g. in LTR mode, left thumb on range slider).
    Thumb[Thumb["START"] = 1] = "START";
    // Thumb at end of slider (e.g. in LTR mode, right thumb on range slider,
    // or only thumb on single point slider).
    Thumb[Thumb["END"] = 2] = "END";
})(Thumb || (Thumb = {}));

const Slider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "disabled",
    "range",
    "discrete",
    "tickMarks",
    "step",
    "min",
    "max",
    "minRange",
    "value",
    "start",
    "end",
    "valueToAriaValueTextFn",
    "hideFocusStylesForPointerEvents",
    "input$class",
    "layout",
    "getId",
    "getElement"
  ]);
  var _a;
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { disabled = false } = $$props;
  let { range = false } = $$props;
  let { discrete = false } = $$props;
  let { tickMarks = false } = $$props;
  let { step = 1 } = $$props;
  let { min = 0 } = $$props;
  let { max = 100 } = $$props;
  let { minRange = 0 } = $$props;
  let { value = void 0 } = $$props;
  let { start = void 0 } = $$props;
  let { end = void 0 } = $$props;
  let { valueToAriaValueTextFn = (value2) => `${value2}` } = $$props;
  let { hideFocusStylesForPointerEvents = false } = $$props;
  let { input$class = "" } = $$props;
  let element;
  let instance;
  let input;
  let inputStart = void 0;
  let thumbEl;
  let thumbStart = void 0;
  let thumbKnob;
  let thumbKnobStart = void 0;
  let internalClasses = {};
  let thumbStartClasses = {};
  let thumbClasses = {};
  let inputAttrs = {};
  let inputStartAttrs = {};
  let trackActiveStyles = {};
  let thumbStyles = {};
  let thumbStartStyles = {};
  let currentTickMarks;
  let inputProps = (_a = getContext("SMUI:generic:input:props")) !== null && _a !== void 0 ? _a : {};
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  if (tickMarks && step > 0) {
    const absMax = max + Math.abs(min);
    if (range && typeof start === "number" && typeof end === "number") {
      const absStart = start + Math.abs(min);
      const absEnd = end + Math.abs(min);
      currentTickMarks = [
        ...Array(absStart / step).map(() => TickMark.INACTIVE),
        ...Array(absMax / step - absStart / step - (absMax - absEnd) / step + 1).map(() => TickMark.ACTIVE),
        ...Array((absMax - absEnd) / step).map(() => TickMark.INACTIVE)
      ];
    } else if (typeof value === "number") {
      const absValue = value + Math.abs(min);
      currentTickMarks = [
        ...Array(absValue / step + 1).map(() => TickMark.ACTIVE),
        ...Array((absMax - absValue) / step).map(() => TickMark.INACTIVE)
      ];
    }
  }
  if (range && typeof start === "number" && typeof end === "number") {
    const percent = (end - start) / (max - min);
    const percentStart = start / (max - min);
    const percentEnd = end / (max - min);
    trackActiveStyles.transform = `scaleX(${percent})`;
    thumbStyles.left = `calc(${percentEnd * 100}% -24px)`;
    thumbStartStyles.left = `calc(${percentStart * 100}% -24px)`;
  } else if (typeof value === "number") {
    const percent = value / (max - min);
    trackActiveStyles.transform = `scaleX(${percent})`;
    thumbStyles.left = `calc(${percent * 100}% -24px)`;
  }
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });
  function layout() {
    return instance.layout();
  }
  function getId() {
    return inputProps && inputProps.id;
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.range === void 0 && $$bindings.range && range !== void 0) $$bindings.range(range);
  if ($$props.discrete === void 0 && $$bindings.discrete && discrete !== void 0) $$bindings.discrete(discrete);
  if ($$props.tickMarks === void 0 && $$bindings.tickMarks && tickMarks !== void 0) $$bindings.tickMarks(tickMarks);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0) $$bindings.step(step);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0) $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0) $$bindings.max(max);
  if ($$props.minRange === void 0 && $$bindings.minRange && minRange !== void 0) $$bindings.minRange(minRange);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0) $$bindings.start(start);
  if ($$props.end === void 0 && $$bindings.end && end !== void 0) $$bindings.end(end);
  if ($$props.valueToAriaValueTextFn === void 0 && $$bindings.valueToAriaValueTextFn && valueToAriaValueTextFn !== void 0) $$bindings.valueToAriaValueTextFn(valueToAriaValueTextFn);
  if ($$props.hideFocusStylesForPointerEvents === void 0 && $$bindings.hideFocusStylesForPointerEvents && hideFocusStylesForPointerEvents !== void 0) $$bindings.hideFocusStylesForPointerEvents(hideFocusStylesForPointerEvents);
  if ($$props.input$class === void 0 && $$bindings.input$class && input$class !== void 0) $$bindings.input$class(input$class);
  if ($$props.layout === void 0 && $$bindings.layout && layout !== void 0) $$bindings.layout(layout);
  if ($$props.getId === void 0 && $$bindings.getId && getId !== void 0) $$bindings.getId(getId);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0) $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(Object.entries({
          [className]: true,
          "mdc-slider": true,
          "mdc-slider--range": range,
          "mdc-slider--discrete": discrete,
          "mdc-slider--tick-marks": discrete && tickMarks,
          "mdc-slider--disabled": disabled,
          ...internalClasses
        }).filter(([name, value2]) => name !== "" && value2).map(([name]) => name).join(" "))
      },
      escape_object(range ? { "data-min-range": `${minRange}` } : {}),
      escape_object(exclude($$restProps, ["input$"]))
    ],
    {}
  )}${add_attribute("this", element, 0)}>${range ? `<input${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [input$class]: true,
          "mdc-slider__input": true
        }))
      },
      { type: "range" },
      { disabled: disabled || null },
      { step: escape_attribute_value(step) },
      { min: escape_attribute_value(min) },
      { max: escape_attribute_value(end) },
      escape_object(inputStartAttrs),
      escape_object(prefixFilter($$restProps, "input$"))
    ],
    {}
  )}${add_attribute("this", inputStart, 0)}${add_attribute("value", start, 0)}> <input${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [input$class]: true,
          "mdc-slider__input": true
        }))
      },
      { type: "range" },
      { disabled: disabled || null },
      { step: escape_attribute_value(step) },
      { min: escape_attribute_value(start) },
      { max: escape_attribute_value(max) },
      escape_object(inputProps),
      escape_object(inputAttrs),
      escape_object(prefixFilter($$restProps, "input$"))
    ],
    {}
  )}${add_attribute("this", input, 0)}${add_attribute("value", end, 0)}>` : `<input${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [input$class]: true,
          "mdc-slider__input": true
        }))
      },
      { type: "range" },
      { disabled: disabled || null },
      { step: escape_attribute_value(step) },
      { min: escape_attribute_value(min) },
      { max: escape_attribute_value(max) },
      escape_object(inputProps),
      escape_object(inputAttrs),
      escape_object(prefixFilter($$restProps, "input$"))
    ],
    {}
  )}${add_attribute("this", input, 0)}${add_attribute("value", value, 0)}>`} <div class="mdc-slider__track"><div class="mdc-slider__track--inactive"></div> <div class="mdc-slider__track--active"><div class="mdc-slider__track--active_fill"${add_attribute("style", Object.entries(trackActiveStyles).map(([name, value2]) => `${name}: ${value2};`).join(" "), 0)}></div></div> ${discrete && tickMarks && step > 0 ? `<div class="mdc-slider__tick-marks">${each(currentTickMarks, (tickMark) => {
    return `<div${add_attribute(
      "class",
      tickMark === TickMark.ACTIVE ? "mdc-slider__tick-mark--active" : "mdc-slider__tick-mark--inactive",
      0
    )}></div>`;
  })}</div>` : ``}</div> ${range ? `<div${add_attribute(
    "class",
    classMap({
      "mdc-slider__thumb": true,
      ...thumbStartClasses
    }),
    0
  )}${add_attribute("style", Object.entries(thumbStartStyles).map(([name, value2]) => `${name}: ${value2};`).join(" "), 0)}${add_attribute("this", thumbStart, 0)}>${discrete ? `<div class="mdc-slider__value-indicator-container" aria-hidden="true"><div class="mdc-slider__value-indicator"><span class="mdc-slider__value-indicator-text">${escape(start)}</span></div></div>` : ``} <div class="mdc-slider__thumb-knob"${add_attribute("this", thumbKnobStart, 0)}></div></div> <div${add_attribute(
    "class",
    classMap({
      "mdc-slider__thumb": true,
      ...thumbClasses
    }),
    0
  )}${add_attribute("style", Object.entries(thumbStyles).map(([name, value2]) => `${name}: ${value2};`).join(" "), 0)}${add_attribute("this", thumbEl, 0)}>${discrete ? `<div class="mdc-slider__value-indicator-container" aria-hidden="true"><div class="mdc-slider__value-indicator"><span class="mdc-slider__value-indicator-text">${escape(end)}</span></div></div>` : ``} <div class="mdc-slider__thumb-knob"${add_attribute("this", thumbKnob, 0)}></div></div>` : `<div${add_attribute(
    "class",
    classMap({
      "mdc-slider__thumb": true,
      ...thumbClasses
    }),
    0
  )}${add_attribute("style", Object.entries(thumbStyles).map(([name, value2]) => `${name}: ${value2};`).join(" "), 0)}${add_attribute("this", thumbEl, 0)}>${discrete ? `<div class="mdc-slider__value-indicator-container" aria-hidden="true"><div class="mdc-slider__value-indicator"><span class="mdc-slider__value-indicator-text">${escape(value)}</span></div></div>` : ``} <div class="mdc-slider__thumb-knob"${add_attribute("this", thumbKnob, 0)}></div></div>`} </div>`;
});

export { Slider as S };
//# sourceMappingURL=Slider-CemaSOV2.js.map
