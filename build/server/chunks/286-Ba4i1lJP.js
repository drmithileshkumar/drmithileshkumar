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

const index = 286;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Dj1GIuuT.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Sets/Subsets/+page.js";
const imports = ["_app/immutable/nodes/286.BEM9Dghy.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DhWV7ypx.js","_app/immutable/chunks/index.V8m0JAxO.js","_app/immutable/chunks/stores.C6SlvLHi.js","_app/immutable/chunks/index.D70FGJSe.js","_app/immutable/chunks/Practice.Bk_L3K26.js","_app/immutable/chunks/stores.C4jq3MED.js","_app/immutable/chunks/ripple.CM997ajP.js","_app/immutable/chunks/sets.lSzs2fcF.js","_app/immutable/chunks/common.q_H4qMxg.js","_app/immutable/chunks/stores.DFCiwoiL.js","_app/immutable/chunks/entry.B4hIrfLx.js","_app/immutable/chunks/constants.VSvEql3V.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang.DbRCWPkw.js","_app/immutable/chunks/index.1gl2VIKR.js","_app/immutable/chunks/H3.eui3Ogu3.js","_app/immutable/chunks/H2.DdDx1R3x.js","_app/immutable/chunks/Image.DB9v6vaw.js"];
const stylesheets = ["_app/immutable/assets/286.smtj6L8T.css","_app/immutable/assets/Message.D2xEdDAW.css","_app/immutable/assets/Div.CvI4RsOs.css","_app/immutable/assets/Practice.C-1dvwW-.css","_app/immutable/assets/Image.C61m1Kim.css","_app/immutable/assets/H3.D--Cleaj.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=286-Ba4i1lJP.js.map
