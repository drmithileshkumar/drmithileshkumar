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

const index = 190;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-nLuNCPls.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Sets/Introduction/+page.js";
const imports = ["_app/immutable/nodes/190.rbSRckwO.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.WZMESDHC.js","_app/immutable/chunks/index.5RaDercz.js","_app/immutable/chunks/stores.XBsJh_dx.js","_app/immutable/chunks/index.JZWwPDI5.js","_app/immutable/chunks/stores.IVRqhHaw.js","_app/immutable/chunks/entry.QpnJ778C.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang.MbPxpTp9.js","_app/immutable/chunks/index.gBHr9ICE.js","_app/immutable/chunks/Image.0LPF6EXl.js"];
const stylesheets = ["_app/immutable/assets/190.6UkPAcqe.css","_app/immutable/assets/Practice.5SCwWus9.css","_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Image.R1-0-laC.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=190-Bs83N1XJ.js.map
