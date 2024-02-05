import { r as redirect } from './index-8pACjapJ.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 221;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DNFKMkrs.js')).default;
const universal_id = "src/routes/(general)/notes/maths/conic/+page.js";
const imports = ["_app/immutable/nodes/221.r7rbijTK.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.2m08FdTt.js","_app/immutable/chunks/index.vbnytCL9.js","_app/immutable/chunks/stores.DnhZXbuE.js","_app/immutable/chunks/index.fKG8P8G_.js","_app/immutable/chunks/stores.ToeP0oEQ.js","_app/immutable/chunks/entry.ZVyOfNZo.js","_app/immutable/chunks/index.LaUBdqls.js"];
const stylesheets = ["_app/immutable/assets/221.JiA7HhnV.css","_app/immutable/assets/Canvas.mjov6t4t.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=221-oLbG6lGM.js.map
