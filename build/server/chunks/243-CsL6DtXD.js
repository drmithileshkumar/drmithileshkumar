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

const index = 243;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DBYmchbN.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/post/[postID]/+page.js";
const imports = ["_app/immutable/nodes/243.CQtm8c3s.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.TT61c9Gi.js","_app/immutable/chunks/index.Dipn8n_a.js","_app/immutable/chunks/FullPost.BTX3D5O1.js","_app/immutable/chunks/Card.D-OaqPor.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/ActionIcons.DRhTvYcM.js","_app/immutable/chunks/classAdderBuilder.uY3NaTMq.js","_app/immutable/chunks/SmuiElement.Ds45l3Bo.js","_app/immutable/chunks/Media.Ci-7wtnV.js","_app/immutable/chunks/Actions.Bskv2kE_.js","_app/immutable/chunks/IconButton.CiqJRD3_.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.8rjYrLoK.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/CommonLabel.B6ezwvbq.js","_app/immutable/chunks/Svg.DrXhfwnK.js","_app/immutable/chunks/Subheader.DfAt7dW7.js","_app/immutable/chunks/Button.CvLQu4B8.js","_app/immutable/chunks/entry.aqSikbG0.js","_app/immutable/chunks/index.3B1h_P5q.js","_app/immutable/chunks/stores.Dn9zVH1s.js","_app/immutable/chunks/Set.9cxeQvqD.js","_app/immutable/chunks/each.Dw7b1pvy.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/ContextFragment.BAXgXz1S.js","_app/immutable/chunks/ComposeComment.svelte_svelte_type_style_lang.C0twvXnY.js","_app/immutable/chunks/stores.CiGwCTFt.js"];
const stylesheets = ["_app/immutable/assets/FullPost.DMQFLKXr.css","_app/immutable/assets/ImageUploader.BaNwnJmc.css","_app/immutable/assets/ComposeComment.CC9W_ZpL.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=243-CsL6DtXD.js.map
