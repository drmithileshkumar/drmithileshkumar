import { r as redirect } from './index-DzcLzHBX.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 149;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CLNYW01a.js')).default;
const universal_id = "src/routes/(general)/courses/quantumcryptography/+page.js";
const imports = ["_app/immutable/nodes/149.BZVjKIif.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.B1atsjBc.js","_app/immutable/chunks/index.DlO191gB.js","_app/immutable/chunks/entry.DQ8VqmtN.js","_app/immutable/chunks/index.DEfXOQ1n.js","_app/immutable/chunks/Card.BNwIWFu_.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/classAdderBuilder.Dr_z-rwh.js","_app/immutable/chunks/ActionIcons.BB_MIeF4.js","_app/immutable/chunks/NavList.rjwjauZw.js","_app/immutable/chunks/each.DRc7mzDe.js","_app/immutable/chunks/Item.Cdi5M2Wf.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/Ripple.Cr2a8Emw.js","_app/immutable/chunks/Subheader.CFqZDM0F.js","_app/immutable/chunks/Graphic.BZEjdAg2.js","_app/immutable/chunks/IconButton.tzNTp528.js","_app/immutable/chunks/stores.moVKe_bz.js"];
const stylesheets = ["_app/immutable/assets/92.CGPcTYQq.css","_app/immutable/assets/Link.CZNrpk-N.css","_app/immutable/assets/NavList.Bu7JEHbj.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=149-D0WJNO6E.js.map
