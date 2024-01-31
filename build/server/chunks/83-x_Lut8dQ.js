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

const index = 83;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-QPJCM0lZ.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Application of derivatives/Maxima and minima/+page.js";
const imports = ["_app/immutable/nodes/83.a6jU4IOR.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler._OuDP6UF.js","_app/immutable/chunks/index.69cNLXHD.js","_app/immutable/chunks/stores.lN3I2KMI.js","_app/immutable/chunks/index.ymjMDM6_.js","_app/immutable/chunks/constants.1x7ZJ2_l.js","_app/immutable/chunks/stores.Fwii--6K.js","_app/immutable/chunks/entry.i_tqfJ-d.js"];
const stylesheets = ["_app/immutable/assets/Practice.5SCwWus9.css","_app/immutable/assets/Message.ctOi1nG9.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=83-x_Lut8dQ.js.map
