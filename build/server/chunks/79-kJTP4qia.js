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

const index = 79;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-nt2bECrA.js')).default;
const universal_id = "src/routes/(general)/courses/quantummechanics/+page.js";
const imports = ["_app/immutable/nodes/79.8vg9ZjBh.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler._OuDP6UF.js","_app/immutable/chunks/index.69cNLXHD.js","_app/immutable/chunks/entry.wTYUc-WC.js","_app/immutable/chunks/index.ymjMDM6_.js","_app/immutable/chunks/Card.n05XP32M.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/ActionIcons.S991rHMd.js","_app/immutable/chunks/NavList.nTvfcyYj.js","_app/immutable/chunks/each.6w4Ej4nR.js","_app/immutable/chunks/NavList.svelte_svelte_type_style_lang.yn8r1B33.js","_app/immutable/chunks/stores.KcX466m2.js"];
const stylesheets = ["_app/immutable/assets/30.hj3E2EKt.css","_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/NavList.yy5IVOlJ.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=79-kJTP4qia.js.map
