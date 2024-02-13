import { r as redirect } from './index-oXbhYwP7.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com/notes`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 110;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-kIlu0uAy.js')).default;
const universal_id = "src/routes/(general)/notes/+page.js";
const imports = ["_app/immutable/nodes/110.PwSS8S0l.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.cQRDEcOs.js","_app/immutable/chunks/index.3X1eH1mp.js","_app/immutable/chunks/Link.yFHcwGTs.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/entry.XppJd6zm.js","_app/immutable/chunks/index.yZBYQTEr.js"];
const stylesheets = ["_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Link.mTa6ZPjX.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=110-STTM-c2V.js.map
