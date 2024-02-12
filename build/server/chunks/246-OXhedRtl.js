import { r as redirect } from './index-oXbhYwP7.js';

const ssr = false;
async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  const { user } = await parent();
  if (!user) {
    redirect(301, `/`);
  }
  let res = await fetch(`/api/userDetail`);
  let userDetail = await res.json();
  return {
    userDetail
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load,
  ssr: ssr
});

const index = 246;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-99uHtyZf.js')).default;
const universal_id = "src/routes/(general)/settings/profile/+page.js";
const imports = ["_app/immutable/nodes/246.vc0cFL6W.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.wYmonAyn.js","_app/immutable/chunks/index.AwdIdbL-.js","_app/immutable/chunks/globals.0cDDIVm6.js","_app/immutable/chunks/each.x_SzhXRZ.js","_app/immutable/chunks/Textfield.k0_1cLfF.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/Ripple._faPHWDK.js","_app/immutable/chunks/dispatch.YktQzwJT.js","_app/immutable/chunks/classAdderBuilder.yqNPMMYB.js","_app/immutable/chunks/prefixFilter.eMlqEcSK.js","_app/immutable/chunks/ContextFragment.3DSb6PCq.js","_app/immutable/chunks/index.KLghjZkg.js","_app/immutable/chunks/Suffix.h4xlcHsG.js","_app/immutable/chunks/Title.5iabZfer.js","_app/immutable/chunks/Button.UrzfluKE.js","_app/immutable/chunks/IconButton.yMy0l-Ax.js","_app/immutable/chunks/Graphic.0BeyKEfu.js","_app/immutable/chunks/keyboard.3eMe4_La.js","_app/immutable/chunks/Subheader.KlliebKe.js","_app/immutable/chunks/focus-trap.9c4j25jO.js","_app/immutable/chunks/stores.YV8cvqO3.js","_app/immutable/chunks/entry.i2HVWFHM.js","_app/immutable/chunks/stores.7oE78v3q.js"];
const stylesheets = ["_app/immutable/assets/246.0LFmQKk9.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=246-OXhedRtl.js.map
