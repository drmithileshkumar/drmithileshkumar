import { r as redirect } from './index-8pACjapJ.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 77;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-qCRI9zvU.js')).default;
const universal_id = "src/routes/(general)/iit/maths/2021/question5/+page.js";
const imports = ["_app/immutable/nodes/77.Lu4-DwD8.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler._OuDP6UF.js","_app/immutable/chunks/index.69cNLXHD.js","_app/immutable/chunks/stores.lN3I2KMI.js","_app/immutable/chunks/index.ymjMDM6_.js","_app/immutable/chunks/stores.js5o8oyi.js","_app/immutable/chunks/entry.imsFBio3.js","_app/immutable/chunks/index.sBc_q6PL.js","_app/immutable/chunks/constants.1x7ZJ2_l.js"];
const stylesheets = ["_app/immutable/assets/77.WdCXIpQ3.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=77-bpBfH99o.js.map
