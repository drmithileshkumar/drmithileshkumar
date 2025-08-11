import { r as redirect } from './index-DzcLzHBX.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com/`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 207;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CVBXjCHw.js')).default;
const universal_id = "src/routes/(mathril)/mathril/about/+page.js";
const imports = ["_app/immutable/nodes/207.CxLW_-nZ.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BxVy82MC.js","_app/immutable/chunks/DonhawEw.js","_app/immutable/chunks/DULwcJ7d.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/DnCrujO_.js","_app/immutable/chunks/CkJoemvl.js","_app/immutable/chunks/eknKW2my.js","_app/immutable/chunks/DGFep8o7.js","_app/immutable/chunks/CGERInoT.js"];
const stylesheets = ["_app/immutable/assets/207.D_PRmgLc.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=207-DYIZO1eB.js.map
