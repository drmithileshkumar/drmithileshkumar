import { r as redirect } from './index-oXbhYwP7.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 98;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-s8tdHBuE.js')).default;
const universal_id = "src/routes/(general)/iit/maths/2021/question5/+page.js";
const imports = ["_app/immutable/nodes/98.bqdC1a5k.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.wYmonAyn.js","_app/immutable/chunks/index.AwdIdbL-.js","_app/immutable/chunks/stores.r0S_1cbc.js","_app/immutable/chunks/index.KLghjZkg.js","_app/immutable/chunks/stores.8Si_IwVP.js","_app/immutable/chunks/entry.u8RMwUuA.js","_app/immutable/chunks/index.lcHJh1q4.js","_app/immutable/chunks/constants.1x7ZJ2_l.js"];
const stylesheets = ["_app/immutable/assets/98.WdCXIpQ3.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=98-JmXBhoSf.js.map
