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

const index = 147;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-YQbI7Dw5.js')).default;
const universal_id = "src/routes/(general)/iit/maths/2021/question1/+page.js";
const imports = ["_app/immutable/nodes/147.QhsRTx-C.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.f-IiUdrl.js","_app/immutable/chunks/index.7r8AOLel.js","_app/immutable/chunks/stores.7BCmNEwQ.js","_app/immutable/chunks/index.dbCRPIkP.js","_app/immutable/chunks/stores.h2qoRhuD.js","_app/immutable/chunks/entry.b-cj9oIk.js","_app/immutable/chunks/index.UbUhCNpK.js","_app/immutable/chunks/constants.1x7ZJ2_l.js"];
const stylesheets = ["_app/immutable/assets/147.IlEfmJwn.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=147-b6lb-IC8.js.map
