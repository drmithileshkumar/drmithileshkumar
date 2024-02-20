import { r as redirect } from './index-oXbhYwP7.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 207;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-RmWlCHpF.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Sequences and series/Relationship between AM and GM/+page.js";
const imports = ["_app/immutable/nodes/207.UZRdBjdC.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.f-IiUdrl.js","_app/immutable/chunks/index.7r8AOLel.js","_app/immutable/chunks/stores.7BCmNEwQ.js","_app/immutable/chunks/index.dbCRPIkP.js","_app/immutable/chunks/stores.oe4Qh49j.js","_app/immutable/chunks/entry.JR0QvFaR.js"];
const stylesheets = ["_app/immutable/assets/Practice.5SCwWus9.css","_app/immutable/assets/Message.ctOi1nG9.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=207-l8uifwa4.js.map
