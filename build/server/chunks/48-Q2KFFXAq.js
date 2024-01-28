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

const index = 48;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-NPr7cmlz.js')).default;
const universal_id = "src/routes/(general)/iit/maths/+page.js";
const imports = ["_app/immutable/nodes/48.zEp4qAix.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.YWuCqLZx.js","_app/immutable/chunks/index._dLxV_ys.js","_app/immutable/chunks/Link.3POUJZYR.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/entry.N2CA-9ar.js","_app/immutable/chunks/index.20hFJ42h.js"];
const stylesheets = ["_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Link.mTa6ZPjX.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=48-Q2KFFXAq.js.map
