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

const index = 17;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-jCuA-FWo.js')).default;
const universal_id = "src/routes/(cv)/cv/+page.js";
const imports = ["_app/immutable/nodes/17.C4-kpZjf.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DDynXUZ0.js","_app/immutable/chunks/index.DnYThXIE.js","_app/immutable/chunks/Papers.CTJlDzhn.js"];
const stylesheets = ["_app/immutable/assets/17.Deie9033.css","_app/immutable/assets/Papers.BaItfzG-.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=17-Bbd373yQ.js.map
