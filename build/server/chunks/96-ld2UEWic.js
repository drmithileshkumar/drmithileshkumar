import { r as redirect } from './index-8pACjapJ.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com/notes`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 96;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-y5Q5tPe1.js')).default;
const universal_id = "src/routes/(general)/notes/+page.js";
const imports = ["_app/immutable/nodes/96.8UqhK5EG.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.WZMESDHC.js","_app/immutable/chunks/index.5RaDercz.js","_app/immutable/chunks/Link.20kISq0c.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/entry.QpnJ778C.js","_app/immutable/chunks/index.JZWwPDI5.js"];
const stylesheets = ["_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Link.mTa6ZPjX.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=96-ld2UEWic.js.map
