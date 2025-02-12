import { r as redirect } from './index-DzcLzHBX.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com/" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com/`);
  }
  let postID = url.searchParams.get("postID");
  let res = await fetch(`/vectorial/api/post/${postID}`);
  let post = await res.json();
  return {
    post
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 257;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Bwk_e7d1.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/[publicID]/edit/+page.js";
const imports = ["_app/immutable/nodes/257.em0B5ByA.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DPwfdX_H.js","_app/immutable/chunks/index.CwTeKo4T.js","_app/immutable/chunks/Card.DJrmTOx1.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/ActionIcons.CrNiNf7s.js","_app/immutable/chunks/classAdderBuilder.7IPfzeGa.js","_app/immutable/chunks/SmuiElement.amOlfGzn.js","_app/immutable/chunks/Media.DEO9JwFF.js","_app/immutable/chunks/Actions.O4TtXVIo.js","_app/immutable/chunks/Button.CDNCVR8K.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.Cu_Zdxz6.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/CommonLabel.DNU2POZi.js","_app/immutable/chunks/ImageUploader.CgEpCxWi.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/stores.CQ2ZO8Q_.js","_app/immutable/chunks/index.BSKKeNIs.js","_app/immutable/chunks/stores.p_6MYS7H.js","_app/immutable/chunks/entry.Wrs90tKQ.js","_app/immutable/chunks/Set.CHKM2whk.js","_app/immutable/chunks/each.4xuuRGm3.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/ContextFragment.TdgKGuiF.js","_app/immutable/chunks/Text.Bgy-oeM6.js"];
const stylesheets = ["_app/immutable/assets/257.QXaG5iWq.css","_app/immutable/assets/ImageUploader.BaNwnJmc.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=257-k5qiy78b.js.map
