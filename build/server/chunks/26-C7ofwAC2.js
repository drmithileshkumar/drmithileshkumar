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

const index = 26;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DQX2FktP.js')).default;
const universal_id = "src/routes/(cv)/cv/+page.js";
const imports = ["_app/immutable/nodes/26.Bicu-iMz.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.B1atsjBc.js","_app/immutable/chunks/index.DlO191gB.js","_app/immutable/chunks/Papers.BR-YSUcR.js"];
const stylesheets = ["_app/immutable/assets/26.DeCaw23c.css","_app/immutable/assets/Papers.C66wxKYR.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=26-C7ofwAC2.js.map
