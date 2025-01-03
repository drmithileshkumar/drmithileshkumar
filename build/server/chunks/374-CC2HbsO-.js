import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com/vectorial" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3003")) {
    redirect(301, `https://drmithileshkumar.com/vectorial`);
  }
  const response = await fetch(`/vectorial/api/${params.publicID}/invoices`);
  let invoices = await response.json();
  return {
    invoices
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 374;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DvD4j8zB.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/[publicID]/invoices/+page.js";
const imports = ["_app/immutable/nodes/374.DxL9Jbo8.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DhWV7ypx.js","_app/immutable/chunks/index.V8m0JAxO.js","_app/immutable/chunks/each.CgqZEEeH.js","_app/immutable/chunks/Card.aqY14fMy.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/SmuiElement.DFYghDnT.js","_app/immutable/chunks/ActionIcons.C8XP0smU.js","_app/immutable/chunks/classAdderBuilder.BdbN_yhi.js","_app/immutable/chunks/stores.BviFmk_c.js","_app/immutable/chunks/index.D70FGJSe.js"];
const stylesheets = ["_app/immutable/assets/374.BBE9vbRY.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=374-CC2HbsO-.js.map
