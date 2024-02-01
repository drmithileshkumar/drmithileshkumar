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

const index = 184;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-wxq_dWn2.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Sets/Introduction/+page.js";
const imports = ["_app/immutable/nodes/184.4tjZjncY.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler._OuDP6UF.js","_app/immutable/chunks/index.69cNLXHD.js","_app/immutable/chunks/stores.lN3I2KMI.js","_app/immutable/chunks/index.ymjMDM6_.js","_app/immutable/chunks/stores.oCUnmlEh.js","_app/immutable/chunks/entry.G797SBtN.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang.ysribTvB.js","_app/immutable/chunks/index.sBc_q6PL.js","_app/immutable/chunks/Image._F-do1OT.js"];
const stylesheets = ["_app/immutable/assets/184.6UkPAcqe.css","_app/immutable/assets/Practice.5SCwWus9.css","_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Image.R1-0-laC.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=184-HNjGQiRO.js.map
