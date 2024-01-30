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

const index = 215;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-_bxXULnL.js')).default;
const universal_id = "src/routes/(general)/practice/class12/+page.js";
const imports = ["_app/immutable/nodes/215.1OLQCPgL.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler._OuDP6UF.js","_app/immutable/chunks/index.69cNLXHD.js","_app/immutable/chunks/Message.COeX7-SD.js","_app/immutable/chunks/entry.JC3_HZpz.js","_app/immutable/chunks/index.ymjMDM6_.js","_app/immutable/chunks/stores.V9ukB7sX.js","_app/immutable/chunks/Practice.Nj2xuWmH.js","_app/immutable/chunks/ripple.nJSaNfXx.js"];
const stylesheets = ["_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Practice.5SCwWus9.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=215-mnq4sgnv.js.map
