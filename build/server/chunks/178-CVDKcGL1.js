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

const index = 178;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-JDdyi4dc.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Sets/Sets and their representations/+page.js";
const imports = ["_app/immutable/nodes/178.ynaVA-0D.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler._OuDP6UF.js","_app/immutable/chunks/index.69cNLXHD.js","_app/immutable/chunks/stores.lN3I2KMI.js","_app/immutable/chunks/index.ymjMDM6_.js","_app/immutable/chunks/Practice.Nj2xuWmH.js","_app/immutable/chunks/stores.V9ukB7sX.js","_app/immutable/chunks/ripple.nJSaNfXx.js","_app/immutable/chunks/common.dD7Xbhr8.js","_app/immutable/chunks/sets.kT1anTlw.js","_app/immutable/chunks/quadratic.4A8ca20j.js","_app/immutable/chunks/stores.Fwii--6K.js","_app/immutable/chunks/entry.i_tqfJ-d.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang.ysribTvB.js","_app/immutable/chunks/index.sBc_q6PL.js","_app/immutable/chunks/H3.sTBq2DNa.js","_app/immutable/chunks/H2.pq1IN4J-.js","_app/immutable/chunks/Image._F-do1OT.js"];
const stylesheets = ["_app/immutable/assets/178.UsyHwBnG.css","_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Practice.5SCwWus9.css","_app/immutable/assets/Image.R1-0-laC.css","_app/immutable/assets/Div.bOrlhsXY.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=178-CVDKcGL1.js.map
