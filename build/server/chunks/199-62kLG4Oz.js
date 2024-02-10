import { r as redirect } from './index-8pACjapJ.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(307, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 199;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-3P6-EPrO.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Sets/Sets and their representations/+page.js";
const imports = ["_app/immutable/nodes/199.NdpubnF8.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.OPFU5seO.js","_app/immutable/chunks/index.np_sXRfl.js","_app/immutable/chunks/stores.9F6itTw0.js","_app/immutable/chunks/index.x-ybsOk2.js","_app/immutable/chunks/Practice.FGEVHCO5.js","_app/immutable/chunks/stores.nm7neL9O.js","_app/immutable/chunks/ripple.nJSaNfXx.js","_app/immutable/chunks/common.dD7Xbhr8.js","_app/immutable/chunks/sets.kT1anTlw.js","_app/immutable/chunks/quadratic.4A8ca20j.js","_app/immutable/chunks/stores.04EEAGg6.js","_app/immutable/chunks/entry.zt9YIbQc.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang.lWNYFJCY.js","_app/immutable/chunks/index.JtIRwKoW.js","_app/immutable/chunks/H3.bNWAem2T.js","_app/immutable/chunks/H2.kTPsC1MC.js","_app/immutable/chunks/Image.USAxPdyE.js"];
const stylesheets = ["_app/immutable/assets/199.UsyHwBnG.css","_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Practice.5SCwWus9.css","_app/immutable/assets/Image.R1-0-laC.css","_app/immutable/assets/Div.bOrlhsXY.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=199-62kLG4Oz.js.map
