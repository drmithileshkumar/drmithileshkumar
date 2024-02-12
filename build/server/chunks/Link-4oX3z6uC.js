import { c as compute_rest_props } from './utils-yAS0eczJ.js';
import { c as create_ssr_component, d as add_attribute, s as spread, b as escape_object } from './ssr-APL1hDOv.js';

/* empty css                                   */
const css = {
  code: "a.svelte-h06gar{text-decoration:none;display:flex;justify-content:start;align-items:center;gap:0.3em}.text.svelte-h06gar{display:flex;align-items:center}",
  map: null
};
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "logo"]);
  let { href = "/" } = $$props;
  let { logo = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.logo === void 0 && $$bindings.logo && logo !== void 0)
    $$bindings.logo(logo);
  $$result.css.add(css);
  return `<a${add_attribute("href", href, 0)} class="svelte-h06gar">${logo.length === 0 ? `<span${spread([{ class: "material-icons" }, escape_object($$restProps)], { classes: "svelte-h06gar" })}>link</span>` : `<img style="height:2em;"${add_attribute("src", logo, 0)}${add_attribute("alt", logo, 0)}>`} <span${spread([{ class: "text" }, escape_object($$restProps)], { classes: "svelte-h06gar" })}>${slots.default ? slots.default({}) : `
            Home
        `}</span></a>`;
});

export { Link as L };
//# sourceMappingURL=Link-4oX3z6uC.js.map
