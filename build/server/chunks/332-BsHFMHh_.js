import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  const { user } = await parent();
  if (!user)
    redirect(301, "/auth");
  let publicID = params.publicID;
  let res = await fetch(`/api/${publicID}/assignments`);
  let assignments = await res.json();
  return {
    assignments
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 332;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BGzGN6Zw.js')).default;
const universal_id = "src/routes/(general)/[publicID]/assignments/+page.js";
const imports = ["_app/immutable/nodes/332.CSdKtGb-.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.B1atsjBc.js","_app/immutable/chunks/index.DlO191gB.js","_app/immutable/chunks/each.DRc7mzDe.js","_app/immutable/chunks/entry.BkSiO45B.js","_app/immutable/chunks/index.DEfXOQ1n.js","_app/immutable/chunks/stores.BC8rEjMg.js","_app/immutable/chunks/ActionIcons.BB_MIeF4.js","_app/immutable/chunks/classAdderBuilder.Dr_z-rwh.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/Button.bSgfoJ4g.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.Cr2a8Emw.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/Assignment.CAU6VIC1.js","_app/immutable/chunks/Card.BNwIWFu_.js","_app/immutable/chunks/Actions.C-aWTNm3.js","_app/immutable/chunks/Text.BzjTFEId.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/ContextFragment.DcAkM7wy.js","_app/immutable/chunks/Textfield.1QNKFE03.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/NotchedOutline.CZi5LcBj.js","_app/immutable/chunks/Suffix.CV9ZjPQ-.js","_app/immutable/chunks/stores.moVKe_bz.js","_app/immutable/chunks/Option.Bv9nAyc_.js","_app/immutable/chunks/Menu.DKZSFlGE.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/Item.Cdi5M2Wf.js","_app/immutable/chunks/SelectionGroupIcon.B6I5NObN.js","_app/immutable/chunks/Subheader.CFqZDM0F.js","_app/immutable/chunks/Graphic.BZEjdAg2.js"];
const stylesheets = ["_app/immutable/assets/28.CwXO1syn.css","_app/immutable/assets/Assignment.DKXvAztU.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=332-BsHFMHh_.js.map
