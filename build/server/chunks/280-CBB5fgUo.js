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

const index = 280;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-oVc_9ZAa.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Sets/Introduction/+page.js";
const imports = ["_app/immutable/nodes/280.CrIGYm9f.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DhWV7ypx.js","_app/immutable/chunks/index.V8m0JAxO.js","_app/immutable/chunks/stores.C6SlvLHi.js","_app/immutable/chunks/index.D70FGJSe.js","_app/immutable/chunks/stores.DFCiwoiL.js","_app/immutable/chunks/entry.B4hIrfLx.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang.DbRCWPkw.js","_app/immutable/chunks/index.1gl2VIKR.js","_app/immutable/chunks/Image.DB9v6vaw.js"];
const stylesheets = ["_app/immutable/assets/280.iSfrZQBT.css","_app/immutable/assets/Practice.C-1dvwW-.css","_app/immutable/assets/Message.D2xEdDAW.css","_app/immutable/assets/Image.C61m1Kim.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=280-CBB5fgUo.js.map
