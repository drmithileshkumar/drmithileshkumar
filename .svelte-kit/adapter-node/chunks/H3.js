import { c as compute_rest_props, s as subscribe, d as null_to_empty } from "./utils.js";
import { c as create_ssr_component, e as escape } from "./ssr.js";
import { p as presentationMode, c as currentSlide } from "./stores3.js";
const css = {
  code: ".currentActive.svelte-1fl36pv{color:tomato;border-radius:10px;transition:all 1s}h3.svelte-1fl36pv{font-size:1.2em}",
  map: null
};
const H3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["isActive"]);
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
  return `${$presentationMode ? `<h3 class="${escape($$restProps.class || "", true) + " " + escape(
    $presentationMode && isActive === $currentSlide ? "currentActive" : "",
    true
  ) + " svelte-1fl36pv"}">${slots.default ? slots.default({}) : ``}</h3>` : `<h3 class="${escape(null_to_empty($$restProps.class || ""), true) + " svelte-1fl36pv"}">${slots.default ? slots.default({}) : ``}</h3>`}`;
});
export {
  H3 as H
};
