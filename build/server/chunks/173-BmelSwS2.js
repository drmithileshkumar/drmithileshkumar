import { r as redirect } from './index-DzcLzHBX.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 173;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BU5OpCYl.js')).default;
const universal_id = "src/routes/(general)/iit/maths/2021/+page.js";
const imports = ["_app/immutable/nodes/173.Bp3ObZOH.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.B1atsjBc.js","_app/immutable/chunks/index.DlO191gB.js","_app/immutable/chunks/entry.B2bTvzMB.js","_app/immutable/chunks/index.DEfXOQ1n.js","_app/immutable/chunks/constants.VSvEql3V.js"];
const stylesheets = ["_app/immutable/assets/173.B7H-I6IB.css","_app/immutable/assets/Message.By06LWcb.css","_app/immutable/assets/Link.CZNrpk-N.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=173-BmelSwS2.js.map
