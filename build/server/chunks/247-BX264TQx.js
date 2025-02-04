import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com/vectorial" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3003")) {
    redirect(301, `https://drmithileshkumar.com/vectorial`);
  }
  let postID = params.postID;
  let urlink = `/api/post/${postID}`;
  let res = await fetch(urlink);
  if (!res.ok) {
    console.log("redirected...");
    redirect(301, `/`);
  }
  let post = await res.json();
  return {
    post
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 247;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DBYmchbN.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/post/[postID]/+page.js";
const imports = ["_app/immutable/nodes/247.DYYp9VZh.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.HFrwntH8.js","_app/immutable/chunks/index.Bj97moK3.js","_app/immutable/chunks/FullPost.D8Rip34K.js","_app/immutable/chunks/Card.DDS7kgVn.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/ActionIcons.DHulHrNV.js","_app/immutable/chunks/classAdderBuilder.CUeXhiK0.js","_app/immutable/chunks/SmuiElement.BzYDArcA.js","_app/immutable/chunks/Media.CjtTWVI9.js","_app/immutable/chunks/Actions.BG0qE4LW.js","_app/immutable/chunks/IconButton.CwFKh1qD.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.CDEVC0wK.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/CommonLabel.BgBvPo95.js","_app/immutable/chunks/Svg.ClHNM6Dt.js","_app/immutable/chunks/Subheader.BjdGPQjV.js","_app/immutable/chunks/Button.B7CPgw9o.js","_app/immutable/chunks/entry.tKeSwN7G.js","_app/immutable/chunks/index.ChKAqM74.js","_app/immutable/chunks/stores.DMIecQx6.js","_app/immutable/chunks/Set.DCD7rqSe.js","_app/immutable/chunks/each.CcR1ywbG.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/ContextFragment.Bj9W4id-.js","_app/immutable/chunks/ComposeComment.svelte_svelte_type_style_lang.C3U5Ldky.js","_app/immutable/chunks/stores.Mit3ycmu.js"];
const stylesheets = ["_app/immutable/assets/FullPost.DMQFLKXr.css","_app/immutable/assets/ImageUploader.BaNwnJmc.css","_app/immutable/assets/ComposeComment.CC9W_ZpL.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=247-BX264TQx.js.map
