import { c as create_ssr_component } from "../../../chunks/index.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".maths.svelte-1ms5al4{margin:auto;font-family:'Georgia', serif;line-height:1.5;word-spacing:0.5ex}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"maths svelte-1ms5al4"}">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
