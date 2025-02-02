import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com/" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com/`);
  }
  let commentID = params.commentID;
  let urlink = `/vectorial/api/comment/${commentID}`;
  let res = await fetch(urlink);
  if (!res.ok) {
    console.log("redirected...");
    redirect(301, `/`);
  }
  let comment = await res.json();
  return {
    comment
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 229;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-LwhTd082.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/comment/[commentID]/+page.js";
const imports = ["_app/immutable/nodes/229.Sy2IeSPV.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.HFrwntH8.js","_app/immutable/chunks/index.Bj97moK3.js","_app/immutable/chunks/FullPost.BYsi_xpq.js","_app/immutable/chunks/Card.DDS7kgVn.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/ActionIcons.DHulHrNV.js","_app/immutable/chunks/classAdderBuilder.CUeXhiK0.js","_app/immutable/chunks/SmuiElement.BzYDArcA.js","_app/immutable/chunks/Media.CjtTWVI9.js","_app/immutable/chunks/Actions.BG0qE4LW.js","_app/immutable/chunks/IconButton.CwFKh1qD.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.CDEVC0wK.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/CommonLabel.BgBvPo95.js","_app/immutable/chunks/Svg.ClHNM6Dt.js","_app/immutable/chunks/Subheader.BjdGPQjV.js","_app/immutable/chunks/Button.B7CPgw9o.js","_app/immutable/chunks/entry.D6GLj5oK.js","_app/immutable/chunks/index.ChKAqM74.js","_app/immutable/chunks/stores.CePtQHWy.js","_app/immutable/chunks/Set.DCD7rqSe.js","_app/immutable/chunks/each.CcR1ywbG.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/ContextFragment.Bj9W4id-.js","_app/immutable/chunks/ComposeComment.svelte_svelte_type_style_lang.B6U_lZrn.js","_app/immutable/chunks/stores.Mit3ycmu.js"];
const stylesheets = ["_app/immutable/assets/FullPost.DMQFLKXr.css","_app/immutable/assets/ImageUploader.BaNwnJmc.css","_app/immutable/assets/ComposeComment.CC9W_ZpL.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=229-DUUwlTyx.js.map
