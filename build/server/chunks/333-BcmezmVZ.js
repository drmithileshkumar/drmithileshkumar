import { r as redirect } from './index-DzcLzHBX.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 333;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BrZnLtJ2.js')).default;
const universal_id = "src/routes/(general)/talks/quantumstatus/+page.js";
const imports = ["_app/immutable/nodes/333.C95tncst.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DhWV7ypx.js","_app/immutable/chunks/index.V8m0JAxO.js","_app/immutable/chunks/Card.aqY14fMy.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/SmuiElement.DFYghDnT.js","_app/immutable/chunks/ActionIcons.C8XP0smU.js","_app/immutable/chunks/classAdderBuilder.BdbN_yhi.js","_app/immutable/chunks/Subheader.DnAlchfb.js","_app/immutable/chunks/Cell.CYWKduC9.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/index.D70FGJSe.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/Head.u4wF4H_u.js","_app/immutable/chunks/entry.B4hIrfLx.js","_app/immutable/chunks/stores.Bj90LH9q.js"];
const stylesheets = ["_app/immutable/assets/333.D7WLIllc.css","_app/immutable/assets/Message.D2xEdDAW.css","_app/immutable/assets/Link.DT8GuSJh.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=333-BcmezmVZ.js.map
