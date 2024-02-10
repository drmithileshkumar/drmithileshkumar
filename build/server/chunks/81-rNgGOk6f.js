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

const index = 81;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-4jRuBzxG.js')).default;
const universal_id = "src/routes/(general)/courses/qec/+page.js";
const imports = ["_app/immutable/nodes/81.Dxx0jdcn.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.OPFU5seO.js","_app/immutable/chunks/index.np_sXRfl.js","_app/immutable/chunks/entry.zt9YIbQc.js","_app/immutable/chunks/index.x-ybsOk2.js","_app/immutable/chunks/Card.TZDyXqtE.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/ActionIcons.Kd4xFtPj.js","_app/immutable/chunks/NavList.gM5WaFFR.js","_app/immutable/chunks/each.KdwwmxXr.js","_app/immutable/chunks/Graphic.FSbsHuu5.js","_app/immutable/chunks/dispatch.0iSMQIYc.js","_app/immutable/chunks/Ripple.9Ku1vDWQ.js","_app/immutable/chunks/Subheader.530X0r1x.js"];
const stylesheets = ["_app/immutable/assets/29.hj3E2EKt.css","_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/NavList.HFZ0se20.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=81-rNgGOk6f.js.map
