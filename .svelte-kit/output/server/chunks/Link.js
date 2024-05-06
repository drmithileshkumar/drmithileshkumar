import { c as compute_rest_props } from "./utils.js";
import { c as create_ssr_component, f as add_attribute, s as spread, d as escape_object } from "./ssr.js";
/* empty css                                   */
const css = {
  code: "a.svelte-h06gar{text-decoration:none;display:flex;justify-content:start;align-items:center;gap:0.3em}.text.svelte-h06gar{display:flex;align-items:center}",
  map: `{"version":3,"file":"Link.svelte","sources":["Link.svelte"],"sourcesContent":["<script>\\r\\n    export let href = '/';\\r\\n    export let logo = '';\\r\\n<\/script>\\r\\n<style>\\r\\n    a {\\r\\n        text-decoration: none;\\r\\n        display: flex;\\r\\n        justify-content: start;\\r\\n        align-items: center;\\r\\n        gap: 0.3em;\\r\\n    }\\r\\n    .text {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n    }\\r\\n</style>\\r\\n\\r\\n<a href={href}>\\r\\n    {#if logo.length === 0}\\r\\n    <span class=\\"material-icons\\" {...$$restProps}>link</span>\\r\\n    {:else}\\r\\n    <img style=\\"height:2em;\\" src=\\"{logo}\\" alt=\\"{logo}\\">\\r\\n    {/if}\\r\\n    <span class=\\"text\\" {...$$restProps}>\\r\\n        <slot>\\r\\n            Home\\r\\n        </slot>\\r\\n    </span>\\r\\n</a>"],"names":[],"mappings":"AAKI,eAAE,CACE,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,KAAK,CACtB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,KACT,CACA,mBAAM,CACF,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MACjB"}`
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
export {
  Link as L
};
