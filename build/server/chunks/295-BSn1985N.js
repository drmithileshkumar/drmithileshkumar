import { r as redirect } from './index-DzcLzHBX.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com/practice`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 295;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BFntW30E.js')).default;
const universal_id = "src/routes/(general)/practice/+page.js";
const imports = ["_app/immutable/nodes/295.DKZN5KTg.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.B1atsjBc.js","_app/immutable/chunks/index.DlO191gB.js","_app/immutable/chunks/entry.CuVnGzSz.js","_app/immutable/chunks/index.DEfXOQ1n.js"];
const stylesheets = ["_app/immutable/assets/Message.By06LWcb.css","_app/immutable/assets/Link.CZNrpk-N.css","_app/immutable/assets/Practice.DlILBa6z.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=295-BSn1985N.js.map
