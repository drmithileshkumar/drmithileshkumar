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

const index = 250;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DSdWRjF5.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/[publicID]/+page.js";
const imports = ["_app/immutable/nodes/250.DLk9YWQH.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.TT61c9Gi.js","_app/immutable/chunks/await_block.CbrxiIvw.js","_app/immutable/chunks/index.Dipn8n_a.js","_app/immutable/chunks/Card.D-OaqPor.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/ActionIcons.DRhTvYcM.js","_app/immutable/chunks/classAdderBuilder.uY3NaTMq.js","_app/immutable/chunks/SmuiElement.Ds45l3Bo.js","_app/immutable/chunks/Button.CvLQu4B8.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.8rjYrLoK.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/CommonLabel.B6ezwvbq.js","_app/immutable/chunks/TabBar.Cj-ysm2N.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/each.Dw7b1pvy.js","_app/immutable/chunks/stores.CZO3ygXh.js","_app/immutable/chunks/entry.9fiABkYg.js","_app/immutable/chunks/index.3B1h_P5q.js","_app/immutable/chunks/Subheader.DfAt7dW7.js","_app/immutable/chunks/Media.Ci-7wtnV.js","_app/immutable/chunks/Actions.Bskv2kE_.js","_app/immutable/chunks/IconButton.CiqJRD3_.js","_app/immutable/chunks/Svg.DrXhfwnK.js","_app/immutable/chunks/stores.CiGwCTFt.js","_app/immutable/chunks/ComposeComment.svelte_svelte_type_style_lang.Cceyu6di.js","_app/immutable/chunks/Set.9cxeQvqD.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/ContextFragment.BAXgXz1S.js","_app/immutable/chunks/Item.CypjvZpJ.js","_app/immutable/chunks/Graphic.C8Nu_edt.js"];
const stylesheets = ["_app/immutable/assets/250.BjCJfhUE.css","_app/immutable/assets/ImageUploader.BaNwnJmc.css","_app/immutable/assets/ComposeComment.CC9W_ZpL.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=250-BKQZqkV9.js.map
