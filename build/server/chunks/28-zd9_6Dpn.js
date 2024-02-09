import { r as redirect } from './index-8pACjapJ.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 28;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-raOl7kf5.js')).default;
const universal_id = "src/routes/(general)/courses/+page.js";
const imports = ["_app/immutable/nodes/28.0j51haOi.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.6OEexJ1D.js","_app/immutable/chunks/index.uJtgCTqT.js","_app/immutable/chunks/Card.nQ0ntBrx.js","_app/immutable/chunks/index.0JK1PMzr.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/ActionIcons.uF8zJ3U2.js","_app/immutable/chunks/Graphic.UPftp0yf.js","_app/immutable/chunks/dispatch.0iSMQIYc.js","_app/immutable/chunks/Ripple.AcwZg7sA.js","_app/immutable/chunks/Subheader.VZ3qTP_a.js","_app/immutable/chunks/entry.rxdufebz.js"];
const stylesheets = ["_app/immutable/assets/28.37q-zF4e.css","_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Link.mTa6ZPjX.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=28-zd9_6Dpn.js.map
