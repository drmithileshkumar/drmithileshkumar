import { d as compute_rest_props, a as subscribe, c as null_to_empty } from './utils-DH7689cv.js';
import { c as create_ssr_component, e as escape } from './ssr-Cv_bEuJL.js';
import { p as presentationMode, c as currentSlide } from './stores3-CTOyxJGl.js';

const css = {
  code: ".currentActive.svelte-1fl36pv{color:tomato;border-radius:10px;transition:all 1s}h3.svelte-1fl36pv{font-size:1.2em}",
  map: `{"version":3,"file":"H3.svelte","sources":["H3.svelte"],"sourcesContent":["<script>\\r\\n    import {fade, fly} from 'svelte/transition';\\r\\n    import {presentationMode, currentSlide} from '$lib/pages/notes/maths/stores';\\r\\n    export let isActive = -1;\\r\\n<\/script>\\r\\n<style>\\r\\n    .currentActive {\\r\\n        /* background: gray; */\\r\\n        color: tomato;\\r\\n        /* padding: 1em; */\\r\\n        border-radius: 10px;\\r\\n        transition: all 1s;\\r\\n    }\\r\\n    h3 {\\r\\n        font-size: 1.2em;\\r\\n    }\\r\\n</style>\\r\\n{#if $presentationMode}\\r\\n<h3 class=\\"{$$restProps.class || ''} {$presentationMode && isActive === $currentSlide ? 'currentActive': ''}\\" \\r\\n    transition:fly|global=\\"{{ x: 200, duration: 1000}}\\"\\r\\n    on:introstart={() => {isActive = -1}}\\r\\n    on:introend={() => {isActive = $currentSlide}}\\r\\n    on:outroend={() => {isActive = -1}}\\r\\n    >\\r\\n    <slot />\\r\\n</h3>\\r\\n{:else}\\r\\n    <h3 class=\\"{$$restProps.class || ''}\\">\\r\\n        <slot />\\r\\n    </h3>\\r\\n{/if}"],"names":[],"mappings":"AAMI,6BAAe,CAEX,KAAK,CAAE,MAAM,CAEb,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,GAAG,CAAC,EACpB,CACA,iBAAG,CACC,SAAS,CAAE,KACf"}`
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

export { H3 as H };
//# sourceMappingURL=H3-DnFuS8Tv.js.map
