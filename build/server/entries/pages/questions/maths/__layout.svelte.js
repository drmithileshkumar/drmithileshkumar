import { c as create_ssr_component } from "../../../../chunks/index-5c9f81d1.js";
var __layout_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".questions.svelte-1ah3j5e{margin:auto;font-family:'Georgia', serif;line-height:1.5;word-spacing:0.5ex}")();
const css = {
  code: ".questions.svelte-1ah3j5e{margin:auto;font-family:'Georgia', serif;line-height:1.5;word-spacing:0.5ex}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += ``, ""}

<div class="${"questions svelte-1ah3j5e"}">${slots.default ? slots.default({}) : ``}</div>`;
});
export { _layout as default };
