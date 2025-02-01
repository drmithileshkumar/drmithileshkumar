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

const index = 188;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-uaQVjToB.js')).default;
const universal_id = "src/routes/(general)/talks/quantumstatus/+page.js";
const imports = ["_app/immutable/nodes/188.Ck_xFRTE.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.TT61c9Gi.js","_app/immutable/chunks/index.Dipn8n_a.js","_app/immutable/chunks/Card.D-OaqPor.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/ActionIcons.DRhTvYcM.js","_app/immutable/chunks/classAdderBuilder.uY3NaTMq.js","_app/immutable/chunks/SmuiElement.Ds45l3Bo.js","_app/immutable/chunks/Subheader.DfAt7dW7.js","_app/immutable/chunks/Cell.B4WKLoLg.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/index.3B1h_P5q.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/Head.Bm0tE9kg.js","_app/immutable/chunks/entry.D5-6LlTH.js","_app/immutable/chunks/stores.D4EbrjdR.js"];
const stylesheets = ["_app/immutable/assets/188.D7WLIllc.css","_app/immutable/assets/Message.D2xEdDAW.css","_app/immutable/assets/Link.DT8GuSJh.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=188-DLGoLewk.js.map
