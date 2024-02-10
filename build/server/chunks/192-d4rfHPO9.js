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

const index = 192;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-vDiAaZ3b.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Sets/Equal sets/+page.js";
const imports = ["_app/immutable/nodes/192.PEP6OgDA.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.XN8MnxCc.js","_app/immutable/chunks/index.hIVQ3JUV.js","_app/immutable/chunks/stores.rLer7KL8.js","_app/immutable/chunks/index.D7WnTG5a.js","_app/immutable/chunks/Practice.vHCAERLj.js","_app/immutable/chunks/stores.ZOCbEe3o.js","_app/immutable/chunks/ripple.nJSaNfXx.js","_app/immutable/chunks/sets.kT1anTlw.js","_app/immutable/chunks/common.dD7Xbhr8.js","_app/immutable/chunks/stores.68XnZRqr.js","_app/immutable/chunks/entry.3iGz-hzx.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang.QnzPK-T3.js","_app/immutable/chunks/index.Rbdi1l1N.js","_app/immutable/chunks/H3.dIxWJ-3o.js"];
const stylesheets = ["_app/immutable/assets/192.6FbyGp-_.css","_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Practice.5SCwWus9.css","_app/immutable/assets/Image.R1-0-laC.css","_app/immutable/assets/Div.bOrlhsXY.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=192-d4rfHPO9.js.map
