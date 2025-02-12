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

const index = 248;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DBYmchbN.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/post/[postID]/+page.js";
const imports = ["_app/immutable/nodes/248.ipyF512I.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DPwfdX_H.js","_app/immutable/chunks/index.CwTeKo4T.js","_app/immutable/chunks/FullPost.Ylr4DtLB.js","_app/immutable/chunks/Card.DJrmTOx1.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/ActionIcons.CrNiNf7s.js","_app/immutable/chunks/classAdderBuilder.7IPfzeGa.js","_app/immutable/chunks/SmuiElement.amOlfGzn.js","_app/immutable/chunks/Media.DEO9JwFF.js","_app/immutable/chunks/Actions.O4TtXVIo.js","_app/immutable/chunks/IconButton.Dlthkof1.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.Cu_Zdxz6.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/CommonLabel.DNU2POZi.js","_app/immutable/chunks/Svg.Dv8B55Ag.js","_app/immutable/chunks/Subheader.-Ek4Sco6.js","_app/immutable/chunks/Button.CDNCVR8K.js","_app/immutable/chunks/entry.Wrs90tKQ.js","_app/immutable/chunks/index.BSKKeNIs.js","_app/immutable/chunks/stores.p_6MYS7H.js","_app/immutable/chunks/Set.CHKM2whk.js","_app/immutable/chunks/each.4xuuRGm3.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/ContextFragment.TdgKGuiF.js","_app/immutable/chunks/ComposeComment.svelte_svelte_type_style_lang.CVwfbLo1.js","_app/immutable/chunks/stores.CQ2ZO8Q_.js"];
const stylesheets = ["_app/immutable/assets/FullPost.DMQFLKXr.css","_app/immutable/assets/ImageUploader.BaNwnJmc.css","_app/immutable/assets/ComposeComment.CC9W_ZpL.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=248-B20RQstD.js.map
