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
const component = async () => component_cache ??= (await import('./_page.svelte-0idjXiab.js')).default;
const universal_id = "src/routes/(general)/courses/internet/+page.js";
const imports = ["_app/immutable/nodes/29.hxzW2AlE.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.Wcy8l203.js","_app/immutable/chunks/index.3Wex8s3Q.js","_app/immutable/chunks/entry.JiEGjc9j.js","_app/immutable/chunks/index.dpPe8Tdf.js","_app/immutable/chunks/Card.lNB2ACDy.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/ActionIcons.LVYQUx0w.js","_app/immutable/chunks/NavList.tXmFNYam.js","_app/immutable/chunks/each.6w4Ej4nR.js","_app/immutable/chunks/stores.CggJ_r3Q.js"];
const stylesheets = ["_app/immutable/assets/44.hj3E2EKt.css","_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/NavList.yy5IVOlJ.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=29-7J-Bi0i8.js.map
