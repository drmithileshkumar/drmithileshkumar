import { r as redirect } from './index-8pACjapJ.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 29;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-R-dZXvqr.js')).default;
const universal_id = "src/routes/(general)/courses/+page.js";
const imports = ["_app/immutable/nodes/29.w-6ccwlQ.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.2m08FdTt.js","_app/immutable/chunks/index.vbnytCL9.js","_app/immutable/chunks/Link.vqgoUldR.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/entry.hbUxuYYh.js","_app/immutable/chunks/index.fKG8P8G_.js","_app/immutable/chunks/stores.O_U5iIhZ.js"];
const stylesheets = ["_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Link.mTa6ZPjX.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=29-Jg0WNlcg.js.map
