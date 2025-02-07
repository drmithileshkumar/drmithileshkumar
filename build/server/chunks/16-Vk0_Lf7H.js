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

const index = 16;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BqNx7wV5.js')).default;
const universal_id = "src/routes/(cv)/cv/+page.js";
const imports = ["_app/immutable/nodes/16.CC1LPqZH.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DPwfdX_H.js","_app/immutable/chunks/index.CwTeKo4T.js"];
const stylesheets = ["_app/immutable/assets/16.DO9RHLRg.css","_app/immutable/assets/Paper.Bg_S1Oi_.css","_app/immutable/assets/Papers.DWP9sFsm.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=16-Vk0_Lf7H.js.map
