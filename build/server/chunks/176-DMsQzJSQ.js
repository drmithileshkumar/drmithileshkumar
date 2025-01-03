import { r as redirect } from './index-DzcLzHBX.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 176;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BsxI09-M.js')).default;
const universal_id = "src/routes/(general)/iit/+page.js";
const imports = ["_app/immutable/nodes/176.D4vhsEF7.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DhWV7ypx.js","_app/immutable/chunks/index.V8m0JAxO.js","_app/immutable/chunks/Link.B4tapAWB.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/entry.B4hIrfLx.js","_app/immutable/chunks/index.D70FGJSe.js"];
const stylesheets = ["_app/immutable/assets/Message.D2xEdDAW.css","_app/immutable/assets/Link.DT8GuSJh.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=176-DMsQzJSQ.js.map
