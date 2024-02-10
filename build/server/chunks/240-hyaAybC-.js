import { r as redirect } from './index-8pACjapJ.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com/practice/class1`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 240;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-41nFUdM1.js')).default;
const universal_id = "src/routes/(general)/practice/class6/+page.js";
const imports = ["_app/immutable/nodes/240.pI8Rf8MO.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.OPFU5seO.js","_app/immutable/chunks/index.np_sXRfl.js","_app/immutable/chunks/Message.xT1OvyI2.js","_app/immutable/chunks/entry.zt9YIbQc.js","_app/immutable/chunks/index.x-ybsOk2.js","_app/immutable/chunks/stores.nm7neL9O.js","_app/immutable/chunks/Practice.FGEVHCO5.js","_app/immutable/chunks/ripple.nJSaNfXx.js"];
const stylesheets = ["_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Practice.5SCwWus9.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=240-hyaAybC-.js.map
