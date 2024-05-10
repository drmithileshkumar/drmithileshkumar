import { r as redirect } from './index-DzcLzHBX.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 162;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CS9fnPwy.js')).default;
const universal_id = "src/routes/(general)/iit/maths/2021/question6/+page.js";
const imports = ["_app/immutable/nodes/162.BTVijSaM.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.B1atsjBc.js","_app/immutable/chunks/index.DlO191gB.js","_app/immutable/chunks/stores.Tx699Zxm.js","_app/immutable/chunks/index.DEfXOQ1n.js","_app/immutable/chunks/stores.BTaCj9Tk.js","_app/immutable/chunks/entry.B0RIyAYy.js","_app/immutable/chunks/index.tWgQeGQy.js","_app/immutable/chunks/constants.VSvEql3V.js"];
const stylesheets = ["_app/immutable/assets/162.BOzUQb5e.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=162-C6pZUm61.js.map
