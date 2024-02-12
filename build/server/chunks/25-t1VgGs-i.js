import { r as redirect } from './index-oXbhYwP7.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 25;
let component_cache;
const component = async () => component_cache ??= (await import('./_page@teaching.svelte-dhu7iXDz.js')).default;
const universal_id = "src/routes/(about)/teaching/+page.js";
const imports = ["_app/immutable/nodes/25.tDqfPzoF.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.wYmonAyn.js","_app/immutable/chunks/index.AwdIdbL-.js"];
const stylesheets = ["_app/immutable/assets/25.sneH_ivm.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=25-t1VgGs-i.js.map
