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

const index = 63;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-LXG8eUd6.js')).default;
const universal_id = "src/routes/(general)/courses/mathematics2/+page.js";
const imports = ["_app/immutable/nodes/63.iD7H1HTJ.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.6OEexJ1D.js","_app/immutable/chunks/index.uJtgCTqT.js","_app/immutable/chunks/entry.Igq3IN2R.js","_app/immutable/chunks/index.0JK1PMzr.js","_app/immutable/chunks/Card.nQ0ntBrx.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/ActionIcons.uF8zJ3U2.js","_app/immutable/chunks/NavList.K-3RJ6dF.js","_app/immutable/chunks/each.v_Jd1uez.js","_app/immutable/chunks/Subheader.VZ3qTP_a.js","_app/immutable/chunks/content.tycUVTYH.js"];
const stylesheets = ["_app/immutable/assets/63.hj3E2EKt.css","_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/NavList.aMeAxv8b.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=63-IUXaADuD.js.map
