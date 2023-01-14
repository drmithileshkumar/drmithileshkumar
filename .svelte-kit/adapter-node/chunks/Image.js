import { c as create_ssr_component, d as subscribe, e as escape, q as null_to_empty } from "./index.js";
import { b as presentationMode, c as currentSlide } from "./stores2.js";
import "./Image.svelte_svelte_type_style_lang.js";
const css = {
  code: ".currentActive.svelte-1xlricf{color:tomato;border-radius:10px;transition:all 1s}figure.svelte-1xlricf{width:300px}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $presentationMode, $$unsubscribe_presentationMode;
  let $currentSlide, $$unsubscribe_currentSlide;
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => $currentSlide = value);
  let { isActive = -1 } = $$props;
  if ($$props.isActive === void 0 && $$bindings.isActive && isActive !== void 0)
    $$bindings.isActive(isActive);
  $$result.css.add(css);
  $$unsubscribe_presentationMode();
  $$unsubscribe_currentSlide();
  return `<figure class="${escape(
    null_to_empty($presentationMode && isActive === $currentSlide ? "currentActive" : ""),
    true
  ) + " svelte-1xlricf"}">${slots.default ? slots.default({}) : ``}</figure>`;
});
export {
  Image as I
};
