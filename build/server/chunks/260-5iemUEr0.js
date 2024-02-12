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

const index = 260;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-4vWGSo0G.js')).default;
const universal_id = "src/routes/(general)/[publicID]/+page.js";
const imports = ["_app/immutable/nodes/260.NIYSsLbc.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.wYmonAyn.js","_app/immutable/chunks/index.AwdIdbL-.js","_app/immutable/chunks/Card.Sl11uEgJ.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/classAdderBuilder.yqNPMMYB.js","_app/immutable/chunks/ActionIcons.IGfvHpx2.js","_app/immutable/chunks/Button.UrzfluKE.js","_app/immutable/chunks/dispatch.YktQzwJT.js","_app/immutable/chunks/Ripple._faPHWDK.js","_app/immutable/chunks/prefixFilter.eMlqEcSK.js","_app/immutable/chunks/each.x_SzhXRZ.js","_app/immutable/chunks/stores.oULeJHlH.js","_app/immutable/chunks/entry.g0pxKYQm.js","_app/immutable/chunks/index.KLghjZkg.js","_app/immutable/chunks/Subheader.KlliebKe.js","_app/immutable/chunks/stores.7oE78v3q.js"];
const stylesheets = ["_app/immutable/assets/260.M2k2KKOh.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=260-5iemUEr0.js.map
