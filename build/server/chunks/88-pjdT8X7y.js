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

const index = 88;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-6KCtUyRA.js')).default;
const universal_id = "src/routes/(general)/courses/quantummechanics/+page.js";
const imports = ["_app/immutable/nodes/88.D0qfblOY.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.XN8MnxCc.js","_app/immutable/chunks/index.hIVQ3JUV.js","_app/immutable/chunks/entry.mysIIOM0.js","_app/immutable/chunks/index.D7WnTG5a.js","_app/immutable/chunks/Card.5SpOS5eG.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/ActionIcons.A7KDZOPi.js","_app/immutable/chunks/NavList.FLF5pW6l.js","_app/immutable/chunks/each.-STYVJ2I.js","_app/immutable/chunks/Graphic.UvFgWobC.js","_app/immutable/chunks/dispatch.IYdBAMA_.js","_app/immutable/chunks/Ripple.Viy6eW0I.js","_app/immutable/chunks/Subheader.bW5bV90s.js"];
const stylesheets = ["_app/immutable/assets/29.hj3E2EKt.css","_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/NavList.buyRB24_.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=88-pjdT8X7y.js.map
