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

const index = 87;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-ayEZzzPn.js')).default;
const universal_id = "src/routes/(general)/iit/maths/2021/question3/+page.js";
const imports = ["_app/immutable/nodes/87.P_Vo__WO.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.2m08FdTt.js","_app/immutable/chunks/index.vbnytCL9.js","_app/immutable/chunks/stores.DnhZXbuE.js","_app/immutable/chunks/index.fKG8P8G_.js","_app/immutable/chunks/stores.ToeP0oEQ.js","_app/immutable/chunks/entry.ZVyOfNZo.js","_app/immutable/chunks/index.LaUBdqls.js","_app/immutable/chunks/constants.1x7ZJ2_l.js"];
const stylesheets = ["_app/immutable/assets/87.o2_FUglo.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=87-24sz2wES.js.map
