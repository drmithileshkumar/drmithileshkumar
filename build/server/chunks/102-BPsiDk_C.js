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

const index = 102;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-3UvdOC9d.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Determinants/Determinant/+page.js";
const imports = ["_app/immutable/nodes/102.ljBVFmVt.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.Wcy8l203.js","_app/immutable/chunks/index.3Wex8s3Q.js","_app/immutable/chunks/stores.Bs1j_UiF.js","_app/immutable/chunks/index.dpPe8Tdf.js","_app/immutable/chunks/stores.wRmUPyz9.js","_app/immutable/chunks/entry.JiEGjc9j.js"];
const stylesheets = ["_app/immutable/assets/102.RfrDpo0v.css","_app/immutable/assets/Practice.5SCwWus9.css","_app/immutable/assets/Message.ctOi1nG9.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=102-BPsiDk_C.js.map
