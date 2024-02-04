import { r as redirect } from './index-8pACjapJ.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 176;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-r9odLlpC.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Sequences and series/Arithmetic progression/+page.js";
const imports = ["_app/immutable/nodes/176.ligXGP1v.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.2m08FdTt.js","_app/immutable/chunks/index.vbnytCL9.js","_app/immutable/chunks/stores.DnhZXbuE.js","_app/immutable/chunks/index.fKG8P8G_.js","_app/immutable/chunks/constants.1x7ZJ2_l.js","_app/immutable/chunks/stores.TyLqefgc.js","_app/immutable/chunks/entry.hbUxuYYh.js"];
const stylesheets = ["_app/immutable/assets/Practice.5SCwWus9.css","_app/immutable/assets/Message.ctOi1nG9.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=176-Y7Pdq-dc.js.map
