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

const index = 171;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-B5cTVujK.js')).default;
const universal_id = "src/routes/(general)/iit/+page.js";
const imports = ["_app/immutable/nodes/171.WwoyB8-p.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.B1atsjBc.js","_app/immutable/chunks/index.DlO191gB.js","_app/immutable/chunks/Link.UoqBFEnn.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/entry.DLjeYm3P.js","_app/immutable/chunks/index.DEfXOQ1n.js"];
const stylesheets = ["_app/immutable/assets/Message.By06LWcb.css","_app/immutable/assets/Link.CZNrpk-N.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=171-D8XelzTy.js.map
