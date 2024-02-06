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

const index = 196;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-2m03daMa.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Sets/Subsets/+page.js";
const imports = ["_app/immutable/nodes/196.LYLkcQbY.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.WZMESDHC.js","_app/immutable/chunks/index.5RaDercz.js","_app/immutable/chunks/stores.XBsJh_dx.js","_app/immutable/chunks/index.JZWwPDI5.js","_app/immutable/chunks/Practice.2adMZti_.js","_app/immutable/chunks/stores.RQW1chcd.js","_app/immutable/chunks/ripple.nJSaNfXx.js","_app/immutable/chunks/sets.kT1anTlw.js","_app/immutable/chunks/common.dD7Xbhr8.js","_app/immutable/chunks/stores.IVRqhHaw.js","_app/immutable/chunks/entry.QpnJ778C.js","_app/immutable/chunks/constants.1x7ZJ2_l.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang.MbPxpTp9.js","_app/immutable/chunks/index.gBHr9ICE.js","_app/immutable/chunks/H3.brlZG4Ko.js","_app/immutable/chunks/H2._6EVZ2gD.js","_app/immutable/chunks/Image.0LPF6EXl.js"];
const stylesheets = ["_app/immutable/assets/196.ZJKrZReE.css","_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Div.bOrlhsXY.css","_app/immutable/assets/Practice.5SCwWus9.css","_app/immutable/assets/Image.R1-0-laC.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=196-fBP-hJ0_.js.map
