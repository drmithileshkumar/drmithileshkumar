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

const index = 194;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-38ZtaYwd.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Sets/Introduction/+page.js";
const imports = ["_app/immutable/nodes/194.9XsOizmH.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.6OEexJ1D.js","_app/immutable/chunks/index.uJtgCTqT.js","_app/immutable/chunks/stores.az4gHfxZ.js","_app/immutable/chunks/index.0JK1PMzr.js","_app/immutable/chunks/stores.dL2X7ZGg.js","_app/immutable/chunks/entry.Igq3IN2R.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang.kBjl9KPg.js","_app/immutable/chunks/index.urGhFGCw.js","_app/immutable/chunks/Image.qkj24plf.js"];
const stylesheets = ["_app/immutable/assets/194.6UkPAcqe.css","_app/immutable/assets/Practice.5SCwWus9.css","_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Image.R1-0-laC.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=194-Ch23wzsy.js.map
