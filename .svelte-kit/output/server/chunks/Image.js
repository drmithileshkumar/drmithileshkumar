import { c as compute_rest_props, s as subscribe, d as null_to_empty } from "./utils.js";
import { c as create_ssr_component, e as escape } from "./ssr.js";
import { p as presentationMode, c as currentSlide } from "./stores3.js";
import "./Image.svelte_svelte_type_style_lang.js";
const css = {
  code: ".currentActive.svelte-ppp9to{color:tomato;border-radius:10px;transition:all 1s}figure.svelte-ppp9to{width:100%;display:flex;margin:auto;justify-content:center;align-items:center}",
  map: `{"version":3,"file":"Image.svelte","sources":["Image.svelte"],"sourcesContent":["<script>\\r\\n    import {fade, fly} from 'svelte/transition';\\r\\n    import {presentationMode, currentSlide} from '$lib/pages/notes/maths/stores';\\r\\n    export let isActive = -1;\\r\\n<\/script>\\r\\n<style>\\r\\n    .currentActive {\\r\\n        /* background: gray; */\\r\\n        color: tomato;\\r\\n        /* padding: 1em; */\\r\\n        border-radius: 10px;\\r\\n        transition: all 1s;\\r\\n    }\\r\\n    figure {\\r\\n        width: 100%;\\r\\n        display: flex;\\r\\n        margin: auto;\\r\\n        justify-content: center;\\r\\n        align-items: center;\\r\\n    }\\r\\n</style>\\r\\n{#if $presentationMode}\\r\\n<figure class=\\"{$presentationMode && isActive === $currentSlide ? 'currentActive': ''}\\" \\r\\n    transition:fly|global=\\"{{ x: 200, duration: 1000}}\\"\\r\\n    on:introstart={() => {isActive = -1}}\\r\\n    on:introend={() => {isActive = $currentSlide}}\\r\\n    on:outroend={() => {isActive = -1}}\\r\\n    >\\r\\n    <slot />\\r\\n</figure>\\r\\n{:else}\\r\\n    <figure class=\\"{$$restProps.class || ''}\\">\\r\\n        <slot />\\r\\n    </figure>\\r\\n{/if}"],"names":[],"mappings":"AAMI,4BAAe,CAEX,KAAK,CAAE,MAAM,CAEb,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,GAAG,CAAC,EACpB,CACA,oBAAO,CACH,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MACjB"}`
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
export {
  Image as I
};
