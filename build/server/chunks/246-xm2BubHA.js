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

const index = 246;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-L-S197EH.js')).default;
const universal_id = "src/routes/(general)/talks/quantumstatus/+page.js";
const imports = ["_app/immutable/nodes/246.zvFjkdjt.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.OPFU5seO.js","_app/immutable/chunks/index.np_sXRfl.js","_app/immutable/chunks/Card.TZDyXqtE.js","_app/immutable/chunks/index.x-ybsOk2.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/ActionIcons.Kd4xFtPj.js","_app/immutable/chunks/Subheader.530X0r1x.js","_app/immutable/chunks/Cell.5VECBBS8.js","_app/immutable/chunks/dispatch.0iSMQIYc.js","_app/immutable/chunks/entry.zt9YIbQc.js"];
const stylesheets = ["_app/immutable/assets/246.1REQ1PuX.css","_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Link.mTa6ZPjX.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=246-xm2BubHA.js.map
