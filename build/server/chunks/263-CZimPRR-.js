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

const index = 263;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-IEuN9SRA.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Sets/Real numbers/+page.js";
const imports = ["_app/immutable/nodes/263.CbHf00I0.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.B1atsjBc.js","_app/immutable/chunks/index.DlO191gB.js","_app/immutable/chunks/stores.Tx699Zxm.js","_app/immutable/chunks/index.DEfXOQ1n.js","_app/immutable/chunks/Practice.Dbywvd1W.js","_app/immutable/chunks/stores.DzbTKMN6.js","_app/immutable/chunks/ripple.CM997ajP.js","_app/immutable/chunks/sets.lSzs2fcF.js","_app/immutable/chunks/common.q_H4qMxg.js","_app/immutable/chunks/fraction.DV6VRqXe.js","_app/immutable/chunks/stores.4NkNNAje.js","_app/immutable/chunks/entry.CPAwXhdV.js","_app/immutable/chunks/constants.VSvEql3V.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang.BhtO6jJh.js","_app/immutable/chunks/index.tWgQeGQy.js","_app/immutable/chunks/H3.vx1e-pVz.js","_app/immutable/chunks/H2.DRLEYCdO.js","_app/immutable/chunks/Image.DW_Dhvzm.js"];
const stylesheets = ["_app/immutable/assets/263.C_onSStB.css","_app/immutable/assets/Message.By06LWcb.css","_app/immutable/assets/Div.Bs6uWGxd.css","_app/immutable/assets/Practice.DlILBa6z.css","_app/immutable/assets/Image.BHX7T6Vo.css","_app/immutable/assets/H3.7oxlwD0N.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=263-CZimPRR-.js.map
