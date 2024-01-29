import { r as redirect } from './index-8pACjapJ.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 150;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-9P4xDY0M.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Sets/Equal sets/+page.js";
const imports = ["_app/immutable/nodes/150.OipfZwuB.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.YWuCqLZx.js","_app/immutable/chunks/index._dLxV_ys.js","_app/immutable/chunks/stores.J_TcoIh4.js","_app/immutable/chunks/index.20hFJ42h.js","_app/immutable/chunks/Practice.84QQmoXW.js","_app/immutable/chunks/stores.jJVlqksx.js","_app/immutable/chunks/ripple.nJSaNfXx.js","_app/immutable/chunks/sets.kT1anTlw.js","_app/immutable/chunks/common.dD7Xbhr8.js","_app/immutable/chunks/stores.2Lpm83O-.js","_app/immutable/chunks/entry.GwJ0dDFU.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang.LlrVLln2.js","_app/immutable/chunks/index.JynCmtlF.js","_app/immutable/chunks/H3.aIXkU4og.js"];
const stylesheets = ["_app/immutable/assets/150.6FbyGp-_.css","_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Practice.5SCwWus9.css","_app/immutable/assets/Image.R1-0-laC.css","_app/immutable/assets/Div.bOrlhsXY.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=150-CQ2Qbf35.js.map
