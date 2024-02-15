import { s as subscribe, b as set_store_value } from "./utils.js";
import { c as create_ssr_component, j as each, e as escape, f as add_attribute } from "./ssr.js";
/* empty css                                     */
import { w as writable } from "./index2.js";
const lineWidth = writable(2);
const strokeColor = writable("red");
const globalCompositeOperation = writable("source-over");
const drawMode = writable("pen");
const clearAll = writable(false);
const css$2 = {
  code: ".canvasbar.svelte-twg6ow.svelte-twg6ow{display:flex;align-items:center;background:rgba(0, 0, 0, 0.1);padding:0.2em;border-radius:10px;box-shadow:0 0 1px gray}.colors.svelte-twg6ow.svelte-twg6ow{display:flex;gap:0.2em;align-items:center;flex-direction:row}.lineWidth.svelte-twg6ow.svelte-twg6ow{display:flex;align-items:center}.shapes.svelte-twg6ow.svelte-twg6ow{display:flex;flex-direction:row;align-items:center}.shapes.svelte-twg6ow span.svelte-twg6ow{display:flex;align-items:center;padding:0.2em}.colors.svelte-twg6ow button.svelte-twg6ow{width:2em;height:2em;padding:0em;align-items:center;justify-content:center}",
  map: null
};
const CanvasBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $lineWidth, $$unsubscribe_lineWidth;
  let $strokeColor, $$unsubscribe_strokeColor;
  let $$unsubscribe_globalCompositeOperation;
  let $drawMode, $$unsubscribe_drawMode;
  let $$unsubscribe_clearAll;
  $$unsubscribe_lineWidth = subscribe(lineWidth, (value) => $lineWidth = value);
  $$unsubscribe_strokeColor = subscribe(strokeColor, (value) => $strokeColor = value);
  $$unsubscribe_globalCompositeOperation = subscribe(globalCompositeOperation, (value) => value);
  $$unsubscribe_drawMode = subscribe(drawMode, (value) => $drawMode = value);
  $$unsubscribe_clearAll = subscribe(clearAll, (value) => value);
  let colors = ["green", "blue", "red", "orange", "white", "eraser"];
  $$result.css.add(css$2);
  $$unsubscribe_lineWidth();
  $$unsubscribe_strokeColor();
  $$unsubscribe_globalCompositeOperation();
  $$unsubscribe_drawMode();
  $$unsubscribe_clearAll();
  return `<div class="canvasbar svelte-twg6ow"><div class="shapes svelte-twg6ow"><span class="svelte-twg6ow"><svg width="20px" height="20px" viewBox="0 -5 20 10"><line x1="0%" y1="0%" x2="100%" y2="0%" stroke="white" stroke-width="1" fill="none"></line>${$drawMode === "line" ? `<line x1="0%" y1="0%" x2="100%" y2="0%" stroke="white" stroke-width="2" fill="none"></line>` : ``}</svg></span> <span class="svelte-twg6ow"><svg width="20px" height="20px" viewBox="0 0 20 20"><rect x="2" y="2" width="16" height="16" stroke="white" stroke-width="1" fill="none"></rect>${$drawMode === "rect" ? `<rect x="4" y="4" width="12" height="12" stroke="white" stroke-width="1" fill="none"></rect>` : ``}</svg></span> <span class="svelte-twg6ow"><svg width="20px" height="20px" viewBox="0 0 20 10"><circle cx="50%" cy="50%" r="8" stroke="white" stroke-width="1" fill="none"></circle>${$drawMode === "circle" ? `<circle cx="50%" cy="50%" r="6" stroke="white" stroke-width="1" fill="none"></circle>` : ``}</svg></span></div> <div class="colors svelte-twg6ow">${each(colors, (color) => {
    return `<button style="${"background: " + escape(color, true) + "; border: white " + escape($strokeColor === color ? "5px double" : "solid", true) + "; border-radius: 50%; padding: " + escape(color === "eraser" ? 0 : "", true) + ";"}" class="svelte-twg6ow">${color === "eraser" ? `<svg width="20" height="20" viewBox="0 0 20 40"><g transform="rotate(-45 10 20) translate(0 5)"><rect x="0" y="0" width="20" height="10" stroke="black" stroke-width="1"></rect><rect x="0" y="10" width="20" height="20" fill="none" stroke="black" stroke-width="1"></rect></g></svg>` : ``} </button>`;
  })}  <span class="material-icons" style="cursor:pointer;" data-svelte-h="svelte-y9v620">clear</span></div> <div class="lineWidth svelte-twg6ow"><svg width="20" height="20" viewBox="0 0 20 20" style="cursor:pointer">${$lineWidth === 2 ? `<circle cx="10" cy="10" r="4" fill="none" stroke="white" stroke-width="1"></circle>` : ``}<circle cx="10" cy="10" r="2" fill="white"></circle></svg> <svg width="20" height="20" viewBox="0 0 20 20" style="cursor:pointer">${$lineWidth === 4 ? `<circle cx="10" cy="10" r="6" fill="none" stroke="white" stroke-width="1"></circle>` : ``}<circle cx="10" cy="10" r="4" fill="white"></circle></svg> <svg width="20" height="20" viewBox="0 0 20 20" style="cursor:pointer">${$lineWidth === 20 ? `<circle cx="10" cy="10" r="9" fill="none" stroke="white" stroke-width="1"></circle>` : ``}<circle cx="10" cy="10" r="7" fill="white"></circle></svg> </div></div>`;
});
const css$1 = {
  code: "canvas.svelte-ot4q75{cursor:crosshair;-webkit-touch-callout:none !important;-webkit-user-select:none !important;-webkit-tap-highlight-color:transparent !important;-moz-user-select:-moz-none;-ms-user-select:none;touch-action:none !important;user-select:none !important;-webkit-user-drag:none}",
  map: null
};
const Canvas = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $clearAll, $$unsubscribe_clearAll;
  let $$unsubscribe_drawMode;
  let $$unsubscribe_lineWidth;
  let $$unsubscribe_strokeColor;
  let $$unsubscribe_globalCompositeOperation;
  $$unsubscribe_clearAll = subscribe(clearAll, (value) => $clearAll = value);
  $$unsubscribe_drawMode = subscribe(drawMode, (value) => value);
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
  $$result.css.add(css$1);
  {
    if ($clearAll) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      set_store_value(clearAll, $clearAll = false, $clearAll);
    }
  }
  $$unsubscribe_clearAll();
  $$unsubscribe_drawMode();
  $$unsubscribe_lineWidth();
  $$unsubscribe_strokeColor();
  $$unsubscribe_globalCompositeOperation();
  return ` <canvas${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} class="svelte-ot4q75"${add_attribute("this", canvas, 0)}></canvas> `;
});
const css = {
  code: "img.svelte-wvekyu{width:70px;height:70px;border-radius:50%;box-shadow:0 0 3px gray}.ring.svelte-wvekyu{border:1px solid rgba(0, 175, 255, 1);border-radius:50%;display:flex;align-items:center;justify-content:center}.ring1.svelte-wvekyu{width:100px;height:100px;animation:svelte-wvekyu-blink 1s ease-in-out infinite alternate;animation-delay:1s}.ring2.svelte-wvekyu{width:90px;height:90px;animation:svelte-wvekyu-blink 1s ease-in-out infinite alternate;animation-delay:0.5s}.ring3.svelte-wvekyu{width:80px;height:80px;animation:svelte-wvekyu-blink 1s ease-in-out infinite alternate;animation-delay:0s}@keyframes svelte-wvekyu-blink{0%{border-color:rgba(0, 175, 255, 0)}100%{border-color:rgba(0, 175, 255, 1)}}",
  map: null
};
const Presenter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="ring ring1 noMenu svelte-wvekyu" data-svelte-h="svelte-1gzhme8"><div class="ring ring2 noMenu svelte-wvekyu"><div class="ring ring3 noMenu svelte-wvekyu"><img class="noMenu svelte-wvekyu" src="/favicon.png" alt=""></div></div></div>`;
});
export {
  CanvasBar as C,
  Presenter as P,
  Canvas as a
};
