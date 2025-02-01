import { r as redirect } from './index-DzcLzHBX.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 167;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BE0SyYjc.js')).default;
const universal_id = "src/routes/(general)/publications/+page.js";
const imports = ["_app/immutable/nodes/167.Bdt510qw.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.TT61c9Gi.js","_app/immutable/chunks/index.Dipn8n_a.js","_app/immutable/chunks/Paper.BbM4lGXC.js"];
const stylesheets = ["_app/immutable/assets/167.CzKSpbyS.css","_app/immutable/assets/Papers.DWP9sFsm.css","_app/immutable/assets/Paper.Bg_S1Oi_.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=167-BwzUat4N.js.map
