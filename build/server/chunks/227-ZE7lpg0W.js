import { r as redirect } from './index-DzcLzHBX.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com/" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com/`);
  }
  let commentID = url.searchParams.get("commentID");
  let res = await fetch(`/vectorial/api/comment/${commentID}`);
  let comment = await res.json();
  return {
    comment
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 227;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DCELwAwW.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/[publicID]/edit/comment/+page.js";
const imports = ["_app/immutable/nodes/227.DcswOyYH.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DDynXUZ0.js","_app/immutable/chunks/index.DnYThXIE.js","_app/immutable/chunks/Card.DRC2xUqP.js","_app/immutable/chunks/SmuiElement.niKK9SEg.js","_app/immutable/chunks/ActionIcons.rKvm5GeB.js","_app/immutable/chunks/classAdderBuilder.C1qMRX2R.js","_app/immutable/chunks/Actions.CPAOKVg7.js","_app/immutable/chunks/Button.BEGHJ0rg.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.C-DtqsEB.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/CommonLabel.Dj7nqIzk.js","_app/immutable/chunks/stores.5QGZ_kC1.js","_app/immutable/chunks/index.BNQMCvwE.js","_app/immutable/chunks/stores.CyuxF9br.js","_app/immutable/chunks/entry.BIhX438V.js"];
const stylesheets = ["_app/immutable/assets/227.BqKpJZzv.css","_app/immutable/assets/ImageUploader.BaNwnJmc.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=227-ZE7lpg0W.js.map
