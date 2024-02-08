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

const index = 97;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-xf1m5pV-.js')).default;
const universal_id = "src/routes/(general)/iit/maths/2021/question5/+page.js";
const imports = ["_app/immutable/nodes/97.x0iwMBcJ.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.WZMESDHC.js","_app/immutable/chunks/index.5RaDercz.js","_app/immutable/chunks/stores.XBsJh_dx.js","_app/immutable/chunks/index.JZWwPDI5.js","_app/immutable/chunks/stores.SM2u5lpL.js","_app/immutable/chunks/entry.jKtAMHJ4.js","_app/immutable/chunks/index.gBHr9ICE.js","_app/immutable/chunks/constants.1x7ZJ2_l.js"];
const stylesheets = ["_app/immutable/assets/97.WdCXIpQ3.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=97-aStX0u_J.js.map
