import { r as redirect } from './index-DzcLzHBX.js';

const ssr = false;
async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  const { user } = await parent();
  if (!user) {
    redirect(301, `/`);
  }
  let res = await fetch(`/api/userDetail`);
  let userDetail = await res.json();
  return {
    userDetail
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load,
  ssr: ssr
});

const index = 325;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-X8wOQaZV.js')).default;
const universal_id = "src/routes/(general)/settings/profile/+page.js";
const imports = ["_app/immutable/nodes/325.ZrGKcAmZ.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.B1atsjBc.js","_app/immutable/chunks/index.DlO191gB.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/each.DRc7mzDe.js","_app/immutable/chunks/Textfield.1QNKFE03.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/Ripple.Cr2a8Emw.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/classAdderBuilder.Dr_z-rwh.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/ContextFragment.DcAkM7wy.js","_app/immutable/chunks/index.DEfXOQ1n.js","_app/immutable/chunks/NotchedOutline.CZi5LcBj.js","_app/immutable/chunks/Suffix.CV9ZjPQ-.js","_app/immutable/chunks/Title.CDoJkRwB.js","_app/immutable/chunks/CommonLabel.CMa7DfzO.js","_app/immutable/chunks/IconButton.tzNTp528.js","_app/immutable/chunks/Menu.DKZSFlGE.js","_app/immutable/chunks/Item.Cdi5M2Wf.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/SelectionGroupIcon.B6I5NObN.js","_app/immutable/chunks/Subheader.CFqZDM0F.js","_app/immutable/chunks/Graphic.BZEjdAg2.js","_app/immutable/chunks/Button.bSgfoJ4g.js","_app/immutable/chunks/focus-trap.BKtJZaA4.js","_app/immutable/chunks/Radio.BYJDKWQf.js","_app/immutable/chunks/FormField.lvQV-ka1.js","_app/immutable/chunks/stores.C1ifFkhK.js","_app/immutable/chunks/entry.bo4QW58g.js","_app/immutable/chunks/stores.moVKe_bz.js"];
const stylesheets = ["_app/immutable/assets/325.DQsWZAqT.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=325-Dqu8zqDJ.js.map
