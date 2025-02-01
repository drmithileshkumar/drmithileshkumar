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

const index = 202;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D2F_tWzl.js')).default;
const universal_id = "src/routes/(mathril)/mathril/class[classn]/+page.js";
const imports = ["_app/immutable/nodes/202.m6oGRqL6.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.TT61c9Gi.js","_app/immutable/chunks/index.Dipn8n_a.js","_app/immutable/chunks/each.Dw7b1pvy.js","_app/immutable/chunks/Card.D-OaqPor.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/ActionIcons.DRhTvYcM.js","_app/immutable/chunks/classAdderBuilder.uY3NaTMq.js","_app/immutable/chunks/SmuiElement.Ds45l3Bo.js","_app/immutable/chunks/ripple.CM997ajP.js","_app/immutable/chunks/entry.9fiABkYg.js","_app/immutable/chunks/index.3B1h_P5q.js","_app/immutable/chunks/stores.CZO3ygXh.js","_app/immutable/chunks/stores.CURAoadi.js","_app/immutable/chunks/practiceStore.BcpjbKe2.js","_app/immutable/chunks/stores.DurElMDI.js"];
const stylesheets = ["_app/immutable/assets/202.BqUuWG-D.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=202-gbUwusNj.js.map
