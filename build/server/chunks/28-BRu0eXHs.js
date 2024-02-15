import { r as redirect } from './index-oXbhYwP7.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  const { user } = await parent();
  if (!user)
    redirect(301, "/auth");
  user.publicID;
  let res = await fetch(`/api/assignments`);
  let assignments = await res.json();
  return {
    assignments
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 28;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-W52ot-UF.js')).default;
const universal_id = "src/routes/(general)/assignments/+page.js";
const imports = ["_app/immutable/nodes/28.dM5e-6kk.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.cQRDEcOs.js","_app/immutable/chunks/index.3X1eH1mp.js","_app/immutable/chunks/each.FuR60EDZ.js","_app/immutable/chunks/entry.hdKR3xK8.js","_app/immutable/chunks/index.yZBYQTEr.js","_app/immutable/chunks/ActionIcons.Nzs3Qx8M.js","_app/immutable/chunks/classAdderBuilder.ijDhO6Jw.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/Button.cWUa-4TA.js","_app/immutable/chunks/dispatch.YktQzwJT.js","_app/immutable/chunks/Ripple.LbSITeNB.js","_app/immutable/chunks/CommonLabel._8WXK2jP.js","_app/immutable/chunks/Cell.gY0KpE6K.js","_app/immutable/chunks/prefixFilter.eMlqEcSK.js","_app/immutable/chunks/Suffix.3QTh0wJa.js"];
const stylesheets = ["_app/immutable/assets/28.sFztbMp9.css","_app/immutable/assets/Assignment.yl7wM7VN.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=28-BRu0eXHs.js.map
