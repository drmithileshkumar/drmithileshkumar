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

const index = 347;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BN9-FWFo.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/comment/[commentID]/+page.js";
const imports = ["_app/immutable/nodes/347.BiCmPKrC.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DhWV7ypx.js","_app/immutable/chunks/index.V8m0JAxO.js","_app/immutable/chunks/FullPost.ChhPOOw7.js","_app/immutable/chunks/Card.aqY14fMy.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/SmuiElement.DFYghDnT.js","_app/immutable/chunks/ActionIcons.C8XP0smU.js","_app/immutable/chunks/classAdderBuilder.BdbN_yhi.js","_app/immutable/chunks/Media.CcrAu-aU.js","_app/immutable/chunks/Actions.RH1KNkR0.js","_app/immutable/chunks/IconButton.BD-vkp1G.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.BXwXYlkv.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/CommonLabel.DjfWW61c.js","_app/immutable/chunks/Svg.BDaJh6GC.js","_app/immutable/chunks/Subheader.DnAlchfb.js","_app/immutable/chunks/Button.DTp-CPPF.js","_app/immutable/chunks/entry.DutQk9jt.js","_app/immutable/chunks/index.D70FGJSe.js","_app/immutable/chunks/stores.Cxl0mqTB.js","_app/immutable/chunks/Set.Bj5aIPEM.js","_app/immutable/chunks/each.CgqZEEeH.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/ContextFragment.BkOyIpIy.js","_app/immutable/chunks/ComposeComment.svelte_svelte_type_style_lang.B8t3DVsY.js","_app/immutable/chunks/stores.BviFmk_c.js"];
const stylesheets = ["_app/immutable/assets/FullPost.DMQFLKXr.css","_app/immutable/assets/ImageUploader.BaNwnJmc.css","_app/immutable/assets/ComposeComment.CC9W_ZpL.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=347-rGDupUjm.js.map
