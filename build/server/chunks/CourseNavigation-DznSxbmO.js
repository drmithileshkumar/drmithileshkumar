import { c as create_ssr_component, a as add_attribute } from './ssr2-CDgUAJs6.js';

const css = {
  code: "section.svelte-epvtsn{display:flex;justify-content:space-between;background-color:rgba(0, 0, 0, 0.1)}a.svelte-epvtsn{text-decoration:none;padding:0.3em 0.5em;font-variant:small-caps}",
  map: '{"version":3,"file":"CourseNavigation.svelte","sources":["CourseNavigation.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    export let contentNav;\\r\\n    export let currentUrl;\\r\\n<\/script>\\r\\n<style>\\r\\n    section {\\r\\n        display:flex;\\r\\n        justify-content: space-between;\\r\\n        background-color: rgba(0, 0, 0, 0.1);\\r\\n    }\\r\\n    a {\\r\\n        text-decoration: none;\\r\\n        /* background-color: rgba(0, 140, 200, 1);\\r\\n        color: white; */\\r\\n        padding: 0.3em 0.5em;\\r\\n        font-variant: small-caps;\\r\\n    }\\r\\n</style>\\r\\n<section>\\r\\n    <a use:Ripple={{surface: true}} href=\\"{contentNav[currentUrl].previous}\\">Previous</a>\\r\\n    <a use:Ripple={{surface: true}} href=\\"{contentNav[currentUrl].next}\\">Next</a>\\r\\n</section>"],"names":[],"mappings":"AAOI,qBAAQ,CACJ,QAAQ,IAAI,CACZ,eAAe,CAAE,aAAa,CAC9B,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CACvC,CACA,eAAE,CACE,eAAe,CAAE,IAAI,CAGrB,OAAO,CAAE,KAAK,CAAC,KAAK,CACpB,YAAY,CAAE,UAClB"}'
};
const CourseNavigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { contentNav } = $$props;
  let { currentUrl } = $$props;
  if ($$props.contentNav === void 0 && $$bindings.contentNav && contentNav !== void 0) $$bindings.contentNav(contentNav);
  if ($$props.currentUrl === void 0 && $$bindings.currentUrl && currentUrl !== void 0) $$bindings.currentUrl(currentUrl);
  $$result.css.add(css);
  return `<section class="svelte-epvtsn"><a${add_attribute("href", contentNav[currentUrl].previous, 0)} class="svelte-epvtsn">Previous</a> <a${add_attribute("href", contentNav[currentUrl].next, 0)} class="svelte-epvtsn">Next</a></section>`;
});

export { CourseNavigation as C };
//# sourceMappingURL=CourseNavigation-DznSxbmO.js.map
