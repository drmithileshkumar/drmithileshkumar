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

const index = 96;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-hKIH9TQY.js')).default;
const universal_id = "src/routes/(general)/iit/maths/2021/question4/+page.js";
const imports = ["_app/immutable/nodes/96.1MXyl4Lj.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.XN8MnxCc.js","_app/immutable/chunks/index.hIVQ3JUV.js","_app/immutable/chunks/stores.rLer7KL8.js","_app/immutable/chunks/index.D7WnTG5a.js","_app/immutable/chunks/stores.5Eg0rLPx.js","_app/immutable/chunks/entry.mysIIOM0.js","_app/immutable/chunks/index.Rbdi1l1N.js","_app/immutable/chunks/constants.1x7ZJ2_l.js"];
const stylesheets = ["_app/immutable/assets/96.X7O_bEA7.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=96-7KiRxTad.js.map
