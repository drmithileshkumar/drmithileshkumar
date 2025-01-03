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

const index = 164;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CQs9sFob.js')).default;
const universal_id = "src/routes/(general)/talks/quantumstatus/+page.js";
const imports = ["_app/immutable/nodes/164.m1O70-p3.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DDynXUZ0.js","_app/immutable/chunks/index.DnYThXIE.js","_app/immutable/chunks/Card.DRC2xUqP.js","_app/immutable/chunks/SmuiElement.niKK9SEg.js","_app/immutable/chunks/ActionIcons.rKvm5GeB.js","_app/immutable/chunks/classAdderBuilder.C1qMRX2R.js","_app/immutable/chunks/Subheader.BOQ4-Uk_.js","_app/immutable/chunks/Cell.CPkm9IaO.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/index.BNQMCvwE.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/Head.CDWfmC59.js","_app/immutable/chunks/entry.BIhX438V.js","_app/immutable/chunks/stores.C4YY6XNo.js"];
const stylesheets = ["_app/immutable/assets/164.D7WLIllc.css","_app/immutable/assets/Message.D2xEdDAW.css","_app/immutable/assets/Link.DT8GuSJh.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=164-CIxeaNeY.js.map
