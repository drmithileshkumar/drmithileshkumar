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

const index = 182;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-jvqv880O.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Trigonometric functions/Trigonometric functions of sum and difference of two angles/+page.js";
const imports = ["_app/immutable/nodes/182.78bfAUKw.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.YWuCqLZx.js","_app/immutable/chunks/index._dLxV_ys.js","_app/immutable/chunks/stores.J_TcoIh4.js","_app/immutable/chunks/index.20hFJ42h.js","_app/immutable/chunks/constants.1x7ZJ2_l.js","_app/immutable/chunks/stores.JkIH_8B3.js","_app/immutable/chunks/entry.1n2B4ktz.js"];
const stylesheets = ["_app/immutable/assets/Practice.5SCwWus9.css","_app/immutable/assets/Message.ctOi1nG9.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=182-qRURecHj.js.map
