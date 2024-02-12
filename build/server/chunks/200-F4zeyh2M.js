import { r as redirect } from './index-oXbhYwP7.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(307, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 200;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-X9Mu3HFf.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Sets/Sets and their representations/+page.js";
const imports = ["_app/immutable/nodes/200.R-5_oTxN.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.wYmonAyn.js","_app/immutable/chunks/index.AwdIdbL-.js","_app/immutable/chunks/stores.r0S_1cbc.js","_app/immutable/chunks/index.KLghjZkg.js","_app/immutable/chunks/Practice.fnSVSPr7.js","_app/immutable/chunks/stores.9MPSqhWm.js","_app/immutable/chunks/ripple.nJSaNfXx.js","_app/immutable/chunks/common.dD7Xbhr8.js","_app/immutable/chunks/sets.kT1anTlw.js","_app/immutable/chunks/quadratic.4A8ca20j.js","_app/immutable/chunks/stores.YV8cvqO3.js","_app/immutable/chunks/entry.i2HVWFHM.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang.PvhRJib2.js","_app/immutable/chunks/index.lcHJh1q4.js","_app/immutable/chunks/H3.vjHITlHK.js","_app/immutable/chunks/H2.LL18A61D.js","_app/immutable/chunks/Image.sIpZ15CH.js"];
const stylesheets = ["_app/immutable/assets/200.UsyHwBnG.css","_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Practice.5SCwWus9.css","_app/immutable/assets/Image.R1-0-laC.css","_app/immutable/assets/Div.bOrlhsXY.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=200-F4zeyh2M.js.map
