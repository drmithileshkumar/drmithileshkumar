import { c as create_ssr_component } from './ssr2-CDgUAJs6.js';

/* empty css                                    */
const css = {
  code: ".paper.svelte-17dmid6{display:grid;grid-template-rows:auto auto auto;margin-bottom:1em;color:currentColor}.authors.svelte-17dmid6{color:currentColor;text-decoration:none;font-weight:300;font-size:0.9em;opacity:0.8}.title.svelte-17dmid6{font-weight:500;font-size:1.1em}.venue.svelte-17dmid6{color:currentColor;font-size:0.8em;opacity:0.9}.status.svelte-17dmid6{color:currentColor;font-size:0.8em;opacity:0.9}",
  map: '{"version":3,"file":"Paper.svelte","sources":["Paper.svelte"],"sourcesContent":["<script>\\r\\n\\r\\n<\/script>\\r\\n<style>\\r\\n    .paper {\\r\\n        display: grid;\\r\\n        grid-template-rows: auto auto auto;\\r\\n        margin-bottom: 1em;\\r\\n        color: currentColor;\\r\\n    }\\r\\n    .authors {\\r\\n        color: currentColor;\\r\\n        text-decoration: none;\\r\\n        font-weight: 300;\\r\\n        font-size: 0.9em;\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    .title {\\r\\n        font-weight: 500;\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    .venue {\\r\\n        color: currentColor;\\r\\n        font-size: 0.8em;\\r\\n        opacity: 0.9;\\r\\n    }\\r\\n    .status {\\r\\n        color: currentColor;\\r\\n        font-size: 0.8em;\\r\\n        opacity: 0.9;\\r\\n    }\\r\\n</style>\\r\\n<div class=\\"paper\\">\\r\\n    <div class=\\"authors\\">\\r\\n        <slot name=\\"authors\\" />\\r\\n    </div>\\r\\n    <div class=\\"title\\">\\r\\n        <slot name=\\"title\\" />\\r\\n    </div>\\r\\n    <div class=\\"venue\\">\\r\\n        <slot name=\\"venue\\" />\\r\\n    </div>\\r\\n    <div class=\\"status\\">\\r\\n        <slot name=\\"status\\" />\\r\\n    </div>\\r\\n</div>"],"names":[],"mappings":"AAII,qBAAO,CACH,OAAO,CAAE,IAAI,CACb,kBAAkB,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAClC,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,YACX,CACA,uBAAS,CACL,KAAK,CAAE,YAAY,CACnB,eAAe,CAAE,IAAI,CACrB,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,GACb,CACA,qBAAO,CACH,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,KACf,CACA,qBAAO,CACH,KAAK,CAAE,YAAY,CACnB,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,GACb,CACA,sBAAQ,CACJ,KAAK,CAAE,YAAY,CACnB,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,GACb"}'
};
const Paper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="paper svelte-17dmid6"><div class="authors svelte-17dmid6">${slots.authors ? slots.authors({}) : ``}</div> <div class="title svelte-17dmid6">${slots.title ? slots.title({}) : ``}</div> <div class="venue svelte-17dmid6">${slots.venue ? slots.venue({}) : ``}</div> <div class="status svelte-17dmid6">${slots.status ? slots.status({}) : ``}</div></div>`;
});

export { Paper as P };
//# sourceMappingURL=Paper2-DwFUsx4R.js.map
