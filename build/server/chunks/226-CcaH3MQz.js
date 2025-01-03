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

const index = 226;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D3bhQaZK.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/[publicID]/edit/+page.js";
const imports = ["_app/immutable/nodes/226.CqMviqvt.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DDynXUZ0.js","_app/immutable/chunks/index.DnYThXIE.js","_app/immutable/chunks/Card.DRC2xUqP.js","_app/immutable/chunks/SmuiElement.niKK9SEg.js","_app/immutable/chunks/ActionIcons.rKvm5GeB.js","_app/immutable/chunks/classAdderBuilder.C1qMRX2R.js","_app/immutable/chunks/Media.DwHZ3g_J.js","_app/immutable/chunks/Actions.CPAOKVg7.js","_app/immutable/chunks/Button.BEGHJ0rg.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.C-DtqsEB.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/CommonLabel.Dj7nqIzk.js","_app/immutable/chunks/ImageUploader.C5aGTTEa.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/stores.5QGZ_kC1.js","_app/immutable/chunks/index.BNQMCvwE.js","_app/immutable/chunks/stores.CyuxF9br.js","_app/immutable/chunks/entry.BIhX438V.js","_app/immutable/chunks/Set.DVORgxOl.js","_app/immutable/chunks/each.D0FuIOMI.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/ContextFragment.phj6Xvfp.js","_app/immutable/chunks/Text.BsyenGki.js"];
const stylesheets = ["_app/immutable/assets/226.QXaG5iWq.css","_app/immutable/assets/ImageUploader.BaNwnJmc.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=226-CcaH3MQz.js.map
