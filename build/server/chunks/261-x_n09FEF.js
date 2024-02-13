import { r as redirect } from './index-oXbhYwP7.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  const { user } = await parent();
  if (!user)
    redirect(301, "/auth");
  let publicID = user.publicID;
  let resuser = await fetch(`/api/${publicID}`);
  let resuserj = await resuser.json();
  let res1 = await fetch(`/api/${publicID}/profilepic`);
  let res2 = await fetch(`/api/${publicID}/bannerpic`);
  let profilepicData = await res1.blob();
  let bannerpicData = await res2.blob();
  let active = void 0;
  return {
    currentUser: resuserj.user,
    currentUserDetail: resuserj.userDetail,
    profilepicData,
    bannerpicData,
    active
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 261;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-3QBV7jH9.js')).default;
const universal_id = "src/routes/(general)/[publicID]/+page.js";
const imports = ["_app/immutable/nodes/261.onrts9-T.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.cQRDEcOs.js","_app/immutable/chunks/index.3X1eH1mp.js","_app/immutable/chunks/Card.0VZDzDAB.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/classAdderBuilder.ijDhO6Jw.js","_app/immutable/chunks/ActionIcons.Nzs3Qx8M.js","_app/immutable/chunks/Button.cWUa-4TA.js","_app/immutable/chunks/dispatch.YktQzwJT.js","_app/immutable/chunks/Ripple.LbSITeNB.js","_app/immutable/chunks/CommonLabel._8WXK2jP.js","_app/immutable/chunks/prefixFilter.eMlqEcSK.js","_app/immutable/chunks/each.czemEVXE.js","_app/immutable/chunks/stores.ttVGorVA.js","_app/immutable/chunks/entry.pDmfy2hM.js","_app/immutable/chunks/index.yZBYQTEr.js","_app/immutable/chunks/Subheader.QWkzeqGY.js","_app/immutable/chunks/stores.JTYDHTYU.js"];
const stylesheets = ["_app/immutable/assets/261.M2k2KKOh.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=261-x_n09FEF.js.map
