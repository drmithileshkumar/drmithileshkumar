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
const component = async () => component_cache ??= (await import('./_page.svelte-Dhvq46if.js')).default;
const universal_id = "src/routes/(general)/practice/class7/+page.js";
const imports = ["_app/immutable/nodes/240.Tx8z7Ixq.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.WZMESDHC.js","_app/immutable/chunks/index.5RaDercz.js","_app/immutable/chunks/Message.QrKLTs90.js","_app/immutable/chunks/entry.Zb8VlEZD.js","_app/immutable/chunks/index.JZWwPDI5.js","_app/immutable/chunks/stores.RQW1chcd.js","_app/immutable/chunks/Practice.2adMZti_.js","_app/immutable/chunks/ripple.nJSaNfXx.js"];
const stylesheets = ["_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Practice.5SCwWus9.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=240-ADJQlX6R.js.map
