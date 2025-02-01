import { c as compute_rest_props, a as subscribe, e as null_to_empty } from "./utils.js";
import { c as create_ssr_component, e as escape } from "./ssr2.js";
import { p as presentationMode, c as currentSlide } from "./stores4.js";
/* empty css                                */
const css$1 = {
  code: ".currentActive.svelte-1y4ir69{color:tomato;border-radius:10px;transition:all 1s}",
  map: `{"version":3,"file":"P.svelte","sources":["P.svelte"],"sourcesContent":["<script>\\r\\n    import {fade, fly} from 'svelte/transition';\\r\\n    import {presentationMode, currentSlide} from '$lib/pages/notes/maths/stores';\\r\\n    export let isActive = -1;\\r\\n<\/script>\\r\\n<style>\\r\\n    .currentActive {\\r\\n        /* background: gray; */\\r\\n        color: tomato;\\r\\n        /* padding: 1em; */\\r\\n        border-radius: 10px;\\r\\n        transition: all 1s;\\r\\n    }\\r\\n</style>\\r\\n{#if $presentationMode}\\r\\n    <p class=\\"{$$restProps.class || ''} {$presentationMode && isActive === $currentSlide ? 'currentActive': ''}\\" \\r\\n        transition:fly|global=\\"{{ x: 200, duration: 1000}}\\"\\r\\n        on:introstart={() => {isActive = -1}}\\r\\n        on:introend={() => {isActive = $currentSlide}}\\r\\n        on:outroend={() => {isActive = -1}}\\r\\n        >\\r\\n        <slot />\\r\\n    </p>\\r\\n{:else}\\r\\n    <p class=\\"{$$restProps.class || ''}\\">\\r\\n        <slot />\\r\\n    </p>\\r\\n{/if}"],"names":[],"mappings":"AAMI,6BAAe,CAEX,KAAK,CAAE,MAAM,CAEb,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,GAAG,CAAC,EACpB"}`
};
const P = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["isActive"]);
  let $presentationMode, $$unsubscribe_presentationMode;
  let $currentSlide, $$unsubscribe_currentSlide;
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => $currentSlide = value);
  let { isActive = -1 } = $$props;
  if ($$props.isActive === void 0 && $$bindings.isActive && isActive !== void 0) $$bindings.isActive(isActive);
  $$result.css.add(css$1);
  $$unsubscribe_presentationMode();
  $$unsubscribe_currentSlide();
  return `${$presentationMode ? `<p class="${escape($$restProps.class || "", true) + " " + escape(
    $presentationMode && isActive === $currentSlide ? "currentActive" : "",
    true
  ) + " svelte-1y4ir69"}">${slots.default ? slots.default({}) : ``}</p>` : `<p class="${escape(null_to_empty($$restProps.class || ""), true) + " svelte-1y4ir69"}">${slots.default ? slots.default({}) : ``}</p>`}`;
});
const css = {
  code: ".currentActive.svelte-gn56lz{color:tomato;border-radius:10px;transition:all 1s}h2.svelte-gn56lz{font-size:1.5em}",
  map: `{"version":3,"file":"H2.svelte","sources":["H2.svelte"],"sourcesContent":["<script>\\r\\n    import {fade, fly} from 'svelte/transition';\\r\\n    import {presentationMode, currentSlide} from '$lib/pages/notes/maths/stores';\\r\\n    export let isActive = -1;\\r\\n<\/script>\\r\\n<style>\\r\\n    .currentActive {\\r\\n        /* background: gray; */\\r\\n        color: tomato;\\r\\n        /* padding: 1em; */\\r\\n        border-radius: 10px;\\r\\n        transition: all 1s;\\r\\n    }\\r\\n    h2 {\\r\\n        font-size: 1.5em;\\r\\n    }\\r\\n</style>\\r\\n{#if $presentationMode}\\r\\n<h2 class=\\"{$$restProps.class || ''} {$presentationMode && isActive === $currentSlide ? 'currentActive': ''}\\" \\r\\n    transition:fly|global=\\"{{ x: 200, duration: 1000}}\\"\\r\\n    on:introstart={() => {isActive = -1}}\\r\\n    on:introend={() => {isActive = $currentSlide}}\\r\\n    on:outroend={() => {isActive = -1}}\\r\\n    >\\r\\n    <slot />\\r\\n</h2>\\r\\n{:else}\\r\\n    <h2 class=\\"{$$restProps.class || ''}\\">\\r\\n        <slot />\\r\\n    </h2>\\r\\n{/if}"],"names":[],"mappings":"AAMI,4BAAe,CAEX,KAAK,CAAE,MAAM,CAEb,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,GAAG,CAAC,EACpB,CACA,gBAAG,CACC,SAAS,CAAE,KACf"}`
};
const H2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["isActive"]);
  let $presentationMode, $$unsubscribe_presentationMode;
  let $currentSlide, $$unsubscribe_currentSlide;
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => $currentSlide = value);
  let { isActive = -1 } = $$props;
  if ($$props.isActive === void 0 && $$bindings.isActive && isActive !== void 0) $$bindings.isActive(isActive);
  $$result.css.add(css);
  $$unsubscribe_presentationMode();
  $$unsubscribe_currentSlide();
  return `${$presentationMode ? `<h2 class="${escape($$restProps.class || "", true) + " " + escape(
    $presentationMode && isActive === $currentSlide ? "currentActive" : "",
    true
  ) + " svelte-gn56lz"}">${slots.default ? slots.default({}) : ``}</h2>` : `<h2 class="${escape(null_to_empty($$restProps.class || ""), true) + " svelte-gn56lz"}">${slots.default ? slots.default({}) : ``}</h2>`}`;
});
const Item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $presentationMode, $$unsubscribe_presentationMode;
  let $currentSlide, $$unsubscribe_currentSlide;
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => $currentSlide = value);
  let { item = -2 } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0) $$bindings.item(item);
  $$unsubscribe_presentationMode();
  $$unsubscribe_currentSlide();
  return `<div>${!$presentationMode || $currentSlide >= item ? `${slots.default ? slots.default({}) : ``}` : ``}</div>`;
});
export {
  H2 as H,
  Item as I,
  P
};
