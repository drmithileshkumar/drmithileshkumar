import { c as create_ssr_component, d as compute_rest_props, b as subscribe, e as escape, y as null_to_empty } from './index3-56178c7e.js';
import { b as presentationMode, c as currentSlide } from './stores2-a34ce954.js';

const css = {
  code: ".currentActive.svelte-ppp9to{color:tomato;border-radius:10px;transition:all 1s}figure.svelte-ppp9to{width:100%;display:flex;margin:auto;justify-content:center;align-items:center}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `${$presentationMode ? `<figure class="${escape(
    null_to_empty($presentationMode && isActive === $currentSlide ? "currentActive" : ""),
    true
  ) + " svelte-ppp9to"}">${slots.default ? slots.default({}) : ``}</figure>` : `<figure class="${escape(null_to_empty($$restProps.class || ""), true) + " svelte-ppp9to"}">${slots.default ? slots.default({}) : ``}</figure>`}`;
});

export { Image as I };
//# sourceMappingURL=Image-9438cdfb.js.map
