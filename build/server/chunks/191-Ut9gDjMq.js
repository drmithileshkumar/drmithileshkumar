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

const index = 191;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-2m03daMa.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Sets/Subsets/+page.js";
const imports = ["_app/immutable/nodes/191.S26ioaW8.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.2m08FdTt.js","_app/immutable/chunks/index.vbnytCL9.js","_app/immutable/chunks/stores.DnhZXbuE.js","_app/immutable/chunks/index.fKG8P8G_.js","_app/immutable/chunks/Practice.QF2dxLJu.js","_app/immutable/chunks/stores.vBF17IHW.js","_app/immutable/chunks/ripple.nJSaNfXx.js","_app/immutable/chunks/sets.kT1anTlw.js","_app/immutable/chunks/common.dD7Xbhr8.js","_app/immutable/chunks/stores.ToeP0oEQ.js","_app/immutable/chunks/entry.ZVyOfNZo.js","_app/immutable/chunks/constants.1x7ZJ2_l.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang.qRfcqjzK.js","_app/immutable/chunks/index.LaUBdqls.js","_app/immutable/chunks/H3.CehZ2j_k.js","_app/immutable/chunks/H2.DUc3YSqL.js","_app/immutable/chunks/Image.QwFmI_jo.js"];
const stylesheets = ["_app/immutable/assets/191.ZJKrZReE.css","_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Div.bOrlhsXY.css","_app/immutable/assets/Practice.5SCwWus9.css","_app/immutable/assets/Image.R1-0-laC.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=191-Ut9gDjMq.js.map
