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

const index = 51;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-yKAjVnrt.js')).default;
const universal_id = "src/routes/(general)/iit/maths/2021/question2/+page.js";
const imports = ["_app/immutable/nodes/51.J9hm10tW.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.YWuCqLZx.js","_app/immutable/chunks/index._dLxV_ys.js","_app/immutable/chunks/stores.J_TcoIh4.js","_app/immutable/chunks/index.20hFJ42h.js","_app/immutable/chunks/stores.Gx3cDoLt.js","_app/immutable/chunks/entry.N2CA-9ar.js","_app/immutable/chunks/index.JynCmtlF.js","_app/immutable/chunks/constants.1x7ZJ2_l.js"];
const stylesheets = ["_app/immutable/assets/51.gD7FQWmo.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=51-cCgdpdIb.js.map
