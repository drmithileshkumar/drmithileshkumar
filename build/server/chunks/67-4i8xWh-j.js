import { r as redirect } from './index-8pACjapJ.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 67;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-8q1P4kUN.js')).default;
const universal_id = "src/routes/(general)/iit/maths/2021/question3/+page.js";
const imports = ["_app/immutable/nodes/67.5XOvLTYx.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.Wcy8l203.js","_app/immutable/chunks/index.3Wex8s3Q.js","_app/immutable/chunks/stores.Bs1j_UiF.js","_app/immutable/chunks/index.dpPe8Tdf.js","_app/immutable/chunks/stores.wRmUPyz9.js","_app/immutable/chunks/entry.JiEGjc9j.js","_app/immutable/chunks/index.70QPfTMz.js","_app/immutable/chunks/constants.1x7ZJ2_l.js"];
const stylesheets = ["_app/immutable/assets/67.o2_FUglo.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=67-4i8xWh-j.js.map
