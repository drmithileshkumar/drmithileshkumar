import { c as create_ssr_component, d as subscribe, h as each, f as add_attribute, e as escape, i as set_store_value } from "./index.js";
/* empty css                                      */import { w as writable } from "./index3.js";
const lineWidth = writable(2);
const strokeColor = writable("red");
const globalCompositeOperation = writable("source-over");
const stMode = writable(false);
const arcMode = writable(false);
const clearAll = writable(false);
const css$1 = {
  code: ".colors.svelte-1t5pp56.svelte-1t5pp56{display:flex;gap:0.2em;align-items:center;flex-direction:row}.lineWidth.svelte-1t5pp56.svelte-1t5pp56{display:flex;align-items:center}.shapes.svelte-1t5pp56.svelte-1t5pp56{display:flex;flex-direction:row;align-items:center}.shapes.svelte-1t5pp56 span.svelte-1t5pp56{display:flex;align-items:center;padding:0.2em}.colors.svelte-1t5pp56 button.svelte-1t5pp56{width:2em;height:2em;padding:0em;align-items:center;justify-content:center}",
  map: null
};
const CanvasBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $lineWidth, $$unsubscribe_lineWidth;
  let $strokeColor, $$unsubscribe_strokeColor;
  let $$unsubscribe_globalCompositeOperation;
  let $stMode, $$unsubscribe_stMode;
  let $arcMode, $$unsubscribe_arcMode;
  let $$unsubscribe_clearAll;
  $$unsubscribe_lineWidth = subscribe(lineWidth, (value) => $lineWidth = value);
  $$unsubscribe_strokeColor = subscribe(strokeColor, (value) => $strokeColor = value);
  $$unsubscribe_globalCompositeOperation = subscribe(globalCompositeOperation, (value) => value);
  $$unsubscribe_stMode = subscribe(stMode, (value) => $stMode = value);
  $$unsubscribe_arcMode = subscribe(arcMode, (value) => $arcMode = value);
  $$unsubscribe_clearAll = subscribe(clearAll, (value) => value);
  let colors = ["green", "blue", "red", "orange", "black", "eraser"];
  $$result.css.add(css$1);
  $$unsubscribe_lineWidth();
  $$unsubscribe_strokeColor();
  $$unsubscribe_globalCompositeOperation();
  $$unsubscribe_stMode();
  $$unsubscribe_arcMode();
  $$unsubscribe_clearAll();
  return `<div class="${"shapes svelte-1t5pp56"}"><span class="${"svelte-1t5pp56"}"><svg width="${"20px"}" height="${"20px"}" viewBox="${"0 -5 20 10"}"><line x1="${"0%"}" y1="${"0%"}" x2="${"100%"}" y2="${"0%"}" stroke="${"black"}" stroke-width="${"1"}" fill="${"none"}"></line>${$stMode ? `<line x1="${"0%"}" y1="${"0%"}" x2="${"100%"}" y2="${"0%"}" stroke="${"black"}" stroke-width="${"2"}" fill="${"none"}"></line>` : ``}</svg></span>
    <span class="${"svelte-1t5pp56"}"><svg width="${"20px"}" height="${"20px"}" viewBox="${"0 0 20 10"}"><circle cx="${"50%"}" cy="${"50%"}" r="${"8"}" stroke="${"black"}" stroke-width="${"1"}" fill="${"none"}"></circle>${$arcMode ? `<circle cx="${"50%"}" cy="${"50%"}" r="${"6"}" stroke="${"black"}" stroke-width="${"1"}" fill="${"none"}"></circle>` : ``}</svg></span></div>

<div class="${"colors svelte-1t5pp56"}">${each(colors, (color) => {
    return `<button style="${"background: " + escape(color, true) + "; border: white " + escape($strokeColor === color ? "5px double" : "solid", true) + "; border-radius: 50%; padding: " + escape(color === "eraser" ? 0 : "", true) + ";"}" class="${"svelte-1t5pp56"}">${color === "eraser" ? `<svg width="${"100%"}" height="${"100%"}" viewBox="${"0 0 20 40"}"><g transform="${"rotate(-45 10 20) translate(0 5)"}"><rect x="${"0"}" y="${"0"}" width="${"20"}" height="${"10"}" stroke="${"black"}" stroke-width="${"1"}"></rect><rect x="${"0"}" y="${"10"}" width="${"20"}" height="${"20"}" fill="${"none"}" stroke="${"black"}" stroke-width="${"1"}"></rect></g></svg>` : ``}
        </button>`;
  })}
    <span class="${"material-icons"}" style="${"cursor:pointer;"}">clear
    </span></div>
<div class="${"lineWidth svelte-1t5pp56"}"><svg width="${"20"}" height="${"20"}" viewBox="${"0 0 20 20"}" style="${"cursor:pointer"}">${$lineWidth === 2 ? `<circle cx="${"10"}" cy="${"10"}" r="${"4"}" fill="${"none"}" stroke="${"black"}" stroke-width="${"1"}"></circle>` : ``}<circle cx="${"10"}" cy="${"10"}" r="${"2"}" fill="${"black"}"></circle></svg>
    <svg width="${"20"}" height="${"20"}" viewBox="${"0 0 20 20"}" style="${"cursor:pointer"}">${$lineWidth === 4 ? `<circle cx="${"10"}" cy="${"10"}" r="${"6"}" fill="${"none"}" stroke="${"black"}" stroke-width="${"1"}"></circle>` : ``}<circle cx="${"10"}" cy="${"10"}" r="${"4"}" fill="${"black"}"></circle></svg>
    <svg width="${"20"}" height="${"20"}" viewBox="${"0 0 20 20"}" style="${"cursor:pointer"}">${$lineWidth === 20 ? `<circle cx="${"10"}" cy="${"10"}" r="${"9"}" fill="${"none"}" stroke="${"black"}" stroke-width="${"1"}"></circle>` : ``}<circle cx="${"10"}" cy="${"10"}" r="${"7"}" fill="${"black"}"></circle></svg>
    <label><input style="${"width: 4em; height: 1em; padding-left: 0.5em; padding-right: 0.5em;"}" type="${"number"}" step="${"0.1"}"${add_attribute("value", $lineWidth, 0)}></label></div>`;
});
const css = {
  code: "canvas.svelte-1hmy4ei{cursor:crosshair}",
  map: null
};
const Canvas = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $clearAll, $$unsubscribe_clearAll;
  let $$unsubscribe_arcMode;
  let $$unsubscribe_stMode;
  let $$unsubscribe_lineWidth;
  let $$unsubscribe_strokeColor;
  let $$unsubscribe_globalCompositeOperation;
  $$unsubscribe_clearAll = subscribe(clearAll, (value) => $clearAll = value);
  $$unsubscribe_arcMode = subscribe(arcMode, (value) => value);
  $$unsubscribe_stMode = subscribe(stMode, (value) => value);
  $$unsubscribe_lineWidth = subscribe(lineWidth, (value) => value);
  $$unsubscribe_strokeColor = subscribe(strokeColor, (value) => value);
  $$unsubscribe_globalCompositeOperation = subscribe(globalCompositeOperation, (value) => value);
  let { width = 100 } = $$props;
  let { height = 100 } = $$props;
  let canvas, ctx;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  $$result.css.add(css);
  {
    if ($clearAll) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      set_store_value(clearAll, $clearAll = false, $clearAll);
    }
  }
  $$unsubscribe_clearAll();
  $$unsubscribe_arcMode();
  $$unsubscribe_stMode();
  $$unsubscribe_lineWidth();
  $$unsubscribe_strokeColor();
  $$unsubscribe_globalCompositeOperation();
  return `
<canvas${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} class="${"svelte-1hmy4ei"}"${add_attribute("this", canvas, 0)}></canvas>

`;
});
export {
  CanvasBar as C,
  Canvas as a
};
