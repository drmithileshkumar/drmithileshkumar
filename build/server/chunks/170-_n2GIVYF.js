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

const index = 170;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-UeNM0RSa.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Permutations and combinations/Combinations/+page.js";
const imports = ["_app/immutable/nodes/170.EeQ1o3mB.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.XN8MnxCc.js","_app/immutable/chunks/index.hIVQ3JUV.js","_app/immutable/chunks/stores.rLer7KL8.js","_app/immutable/chunks/index.D7WnTG5a.js","_app/immutable/chunks/constants.1x7ZJ2_l.js","_app/immutable/chunks/stores.5Eg0rLPx.js","_app/immutable/chunks/entry.mysIIOM0.js"];
const stylesheets = ["_app/immutable/assets/Practice.5SCwWus9.css","_app/immutable/assets/Message.ctOi1nG9.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=170-_n2GIVYF.js.map
