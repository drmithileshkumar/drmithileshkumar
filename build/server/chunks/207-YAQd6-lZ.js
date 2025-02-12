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

const index = 207;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D2F_tWzl.js')).default;
const universal_id = "src/routes/(mathril)/mathril/class[classn]/+page.js";
const imports = ["_app/immutable/nodes/207.YmxOjSg1.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DPwfdX_H.js","_app/immutable/chunks/index.CwTeKo4T.js","_app/immutable/chunks/each.4xuuRGm3.js","_app/immutable/chunks/Card.DJrmTOx1.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/ActionIcons.CrNiNf7s.js","_app/immutable/chunks/classAdderBuilder.7IPfzeGa.js","_app/immutable/chunks/SmuiElement.amOlfGzn.js","_app/immutable/chunks/ripple.CM997ajP.js","_app/immutable/chunks/entry.Wrs90tKQ.js","_app/immutable/chunks/index.BSKKeNIs.js","_app/immutable/chunks/stores.p_6MYS7H.js","_app/immutable/chunks/stores.CRLIvAgQ.js","_app/immutable/chunks/practiceStore.ChIBxkux.js","_app/immutable/chunks/stores.DTbsgZQO.js"];
const stylesheets = ["_app/immutable/assets/207.BqUuWG-D.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=207-YAQd6-lZ.js.map
