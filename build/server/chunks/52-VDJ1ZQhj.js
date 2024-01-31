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

const index = 52;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-jreASKGs.js')).default;
const universal_id = "src/routes/(general)/courses/mathematics2/+page.js";
const imports = ["_app/immutable/nodes/52.B1JaDqn8.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler._OuDP6UF.js","_app/immutable/chunks/index.69cNLXHD.js","_app/immutable/chunks/entry.i_tqfJ-d.js","_app/immutable/chunks/index.ymjMDM6_.js","_app/immutable/chunks/Card.n05XP32M.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/ActionIcons.S991rHMd.js","_app/immutable/chunks/NavList.xYbcP2TG.js","_app/immutable/chunks/each.6w4Ej4nR.js","_app/immutable/chunks/NavList.svelte_svelte_type_style_lang.yn8r1B33.js","_app/immutable/chunks/stores.KcX466m2.js","_app/immutable/chunks/content.tycUVTYH.js"];
const stylesheets = ["_app/immutable/assets/29.hj3E2EKt.css","_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/NavList.yy5IVOlJ.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=52-VDJ1ZQhj.js.map
