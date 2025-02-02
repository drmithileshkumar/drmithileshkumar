import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  const classn = params.classn;
  return {
    classn
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 205;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D2F_tWzl.js')).default;
const universal_id = "src/routes/(mathril)/mathril/class[classn]/+page.js";
const imports = ["_app/immutable/nodes/205.DTfYQXL4.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.HFrwntH8.js","_app/immutable/chunks/index.Bj97moK3.js","_app/immutable/chunks/each.CcR1ywbG.js","_app/immutable/chunks/Card.DDS7kgVn.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/ActionIcons.DHulHrNV.js","_app/immutable/chunks/classAdderBuilder.CUeXhiK0.js","_app/immutable/chunks/SmuiElement.BzYDArcA.js","_app/immutable/chunks/ripple.CM997ajP.js","_app/immutable/chunks/entry.D6GLj5oK.js","_app/immutable/chunks/index.ChKAqM74.js","_app/immutable/chunks/stores.CePtQHWy.js","_app/immutable/chunks/stores.Dguiw17o.js","_app/immutable/chunks/practiceStore.CYlpMh8G.js","_app/immutable/chunks/stores.C3lG_XDx.js"];
const stylesheets = ["_app/immutable/assets/205.BqUuWG-D.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=205-CK80Ft-u.js.map
