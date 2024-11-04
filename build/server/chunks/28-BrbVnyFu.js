import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  const { user } = await parent();
  if (!user)
    redirect(301, "/auth");
  user.publicID;
  let res = await fetch(`/api/assignments`);
  let assignments = await res.json();
  return {
    assignments
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 28;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-c8SRhxob.js')).default;
const universal_id = "src/routes/(general)/assignments/+page.js";
const imports = ["_app/immutable/nodes/28.XUpWeKdA.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.B1atsjBc.js","_app/immutable/chunks/index.DlO191gB.js","_app/immutable/chunks/each.DRc7mzDe.js","_app/immutable/chunks/entry.DtGCa15b.js","_app/immutable/chunks/index.DEfXOQ1n.js","_app/immutable/chunks/ActionIcons.BB_MIeF4.js","_app/immutable/chunks/classAdderBuilder.Dr_z-rwh.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/Button.bSgfoJ4g.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.Cr2a8Emw.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/CommonLabel.CMa7DfzO.js","_app/immutable/chunks/Cell.CY_KqJHB.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/Suffix.CV9ZjPQ-.js"];
const stylesheets = ["_app/immutable/assets/28.CwXO1syn.css","_app/immutable/assets/Assignment.DKXvAztU.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=28-BrbVnyFu.js.map
