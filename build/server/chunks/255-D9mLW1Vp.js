import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com/" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com/`);
  }
  console.log("Loading user details...");
  let publicID = params.publicID;
  let resuser = await fetch(`/vectorial/api/${publicID}`);
  let { user, userDetail } = await resuser.json();
  let res1 = await fetch(`/vectorial/api/${publicID}/profilepic`);
  let res2 = await fetch(`/vectorial/api/${publicID}/bannerpic`);
  let profilepicData = await res1.blob();
  let bannerpicData = await res2.blob();
  let active = void 0;
  return {
    currentUser: user,
    currentUserDetail: userDetail,
    profilepicData,
    bannerpicData,
    active
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 255;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DSdWRjF5.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/[publicID]/+page.js";
const imports = ["_app/immutable/nodes/255.o_85-_ss.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DPwfdX_H.js","_app/immutable/chunks/await_block.DIDLi3PZ.js","_app/immutable/chunks/index.CwTeKo4T.js","_app/immutable/chunks/Card.DJrmTOx1.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/ActionIcons.CrNiNf7s.js","_app/immutable/chunks/classAdderBuilder.7IPfzeGa.js","_app/immutable/chunks/SmuiElement.amOlfGzn.js","_app/immutable/chunks/Button.CDNCVR8K.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.Cu_Zdxz6.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/CommonLabel.DNU2POZi.js","_app/immutable/chunks/TabBar.DxsssWW9.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/each.4xuuRGm3.js","_app/immutable/chunks/stores.BH5vVzJ8.js","_app/immutable/chunks/entry.De3ToWoX.js","_app/immutable/chunks/index.BSKKeNIs.js","_app/immutable/chunks/Subheader.-Ek4Sco6.js","_app/immutable/chunks/Media.DEO9JwFF.js","_app/immutable/chunks/Actions.O4TtXVIo.js","_app/immutable/chunks/IconButton.Dlthkof1.js","_app/immutable/chunks/Svg.Dv8B55Ag.js","_app/immutable/chunks/stores.CQ2ZO8Q_.js","_app/immutable/chunks/ComposeComment.svelte_svelte_type_style_lang.C2uoxtUu.js","_app/immutable/chunks/Set.CHKM2whk.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/ContextFragment.TdgKGuiF.js","_app/immutable/chunks/Item.V3BEBD7c.js","_app/immutable/chunks/Graphic.CVNIXG2P.js"];
const stylesheets = ["_app/immutable/assets/255.BjCJfhUE.css","_app/immutable/assets/ImageUploader.BaNwnJmc.css","_app/immutable/assets/ComposeComment.CC9W_ZpL.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=255-D9mLW1Vp.js.map
