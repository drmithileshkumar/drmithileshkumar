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

const index = 234;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-YZrcucVS.js')).default;
const universal_id = "src/routes/(general)/practice/class11/+page.js";
const imports = ["_app/immutable/nodes/234.uhsn0T5X.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.XN8MnxCc.js","_app/immutable/chunks/index.hIVQ3JUV.js","_app/immutable/chunks/Message.WY0Pv4QG.js","_app/immutable/chunks/entry.3iGz-hzx.js","_app/immutable/chunks/index.D7WnTG5a.js","_app/immutable/chunks/stores.ZOCbEe3o.js","_app/immutable/chunks/Practice.vHCAERLj.js","_app/immutable/chunks/ripple.nJSaNfXx.js"];
const stylesheets = ["_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Practice.5SCwWus9.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=234-IRtMEw6b.js.map
