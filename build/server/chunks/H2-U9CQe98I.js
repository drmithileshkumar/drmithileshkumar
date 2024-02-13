import { d as compute_rest_props, a as subscribe, c as null_to_empty } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, e as escape } from './ssr-HSn4Y_Gl.js';
import { p as presentationMode, c as currentSlide } from './stores4-uhob_-DC.js';

const css = {
  code: ".currentActive.svelte-gn56lz{color:tomato;border-radius:10px;transition:all 1s}h2.svelte-gn56lz{font-size:1.5em}",
  map: null
};
const H2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `${$presentationMode ? `<h2 class="${escape($$restProps.class || "", true) + " " + escape(
    $presentationMode && isActive === $currentSlide ? "currentActive" : "",
    true
  ) + " svelte-gn56lz"}">${slots.default ? slots.default({}) : ``}</h2>` : `<h2 class="${escape(null_to_empty($$restProps.class || ""), true) + " svelte-gn56lz"}">${slots.default ? slots.default({}) : ``}</h2>`}`;
});

export { H2 as H };
//# sourceMappingURL=H2-U9CQe98I.js.map
