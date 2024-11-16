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

const index = 23;
let component_cache;
const component = async () => component_cache ??= (await import('./_page@publications.svelte-CoA1BJUj.js')).default;
const universal_id = "src/routes/(about)/publications/+page.js";
const imports = ["_app/immutable/nodes/23.D5lqMSoL.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.B1atsjBc.js","_app/immutable/chunks/index.DlO191gB.js","_app/immutable/chunks/Papers.Bjn2tclj.js"];
const stylesheets = ["_app/immutable/assets/23.BSqHSenc.css","_app/immutable/assets/Papers.csMa_2C6.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=23-BtILpzZS.js.map
