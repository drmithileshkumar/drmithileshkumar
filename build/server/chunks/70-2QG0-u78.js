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

const index = 70;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-RdDcRvu1.js')).default;
const universal_id = "src/routes/(general)/iit/+page.js";
const imports = ["_app/immutable/nodes/70.fY4DYrjq.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler._OuDP6UF.js","_app/immutable/chunks/index.69cNLXHD.js","_app/immutable/chunks/Link.bLa9TCx6.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/entry.i_tqfJ-d.js","_app/immutable/chunks/index.ymjMDM6_.js"];
const stylesheets = ["_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Link.mTa6ZPjX.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=70-2QG0-u78.js.map
