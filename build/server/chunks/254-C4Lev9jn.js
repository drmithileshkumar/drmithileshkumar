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

const index = 254;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DSdWRjF5.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/[publicID]/+page.js";
const imports = ["_app/immutable/nodes/254.DH8nzH9z.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.HFrwntH8.js","_app/immutable/chunks/await_block.DZuFR4kP.js","_app/immutable/chunks/index.Bj97moK3.js","_app/immutable/chunks/Card.DDS7kgVn.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/ActionIcons.DHulHrNV.js","_app/immutable/chunks/classAdderBuilder.CUeXhiK0.js","_app/immutable/chunks/SmuiElement.BzYDArcA.js","_app/immutable/chunks/Button.B7CPgw9o.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.CDEVC0wK.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/CommonLabel.BgBvPo95.js","_app/immutable/chunks/TabBar.BPq7d3Jx.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/each.CcR1ywbG.js","_app/immutable/chunks/stores.BIcHY16t.js","_app/immutable/chunks/entry.BJKDcTtM.js","_app/immutable/chunks/index.ChKAqM74.js","_app/immutable/chunks/Subheader.BjdGPQjV.js","_app/immutable/chunks/Media.CjtTWVI9.js","_app/immutable/chunks/Actions.BG0qE4LW.js","_app/immutable/chunks/IconButton.CwFKh1qD.js","_app/immutable/chunks/Svg.ClHNM6Dt.js","_app/immutable/chunks/stores.Mit3ycmu.js","_app/immutable/chunks/ComposeComment.svelte_svelte_type_style_lang.BpJbFvYj.js","_app/immutable/chunks/Set.DCD7rqSe.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/ContextFragment.Bj9W4id-.js","_app/immutable/chunks/Item.kgVLicfe.js","_app/immutable/chunks/Graphic.BMEUV6jW.js"];
const stylesheets = ["_app/immutable/assets/254.BjCJfhUE.css","_app/immutable/assets/ImageUploader.BaNwnJmc.css","_app/immutable/assets/ComposeComment.CC9W_ZpL.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=254-C4Lev9jn.js.map
