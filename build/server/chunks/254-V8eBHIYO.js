import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com/" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com/`);
  }
  const response = await fetch(`/vectorial/api/${params.publicID}/invoices`);
  let invoices = await response.json();
  return {
    invoices
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 254;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CAUmezDR.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/publicID/invoices/+page.js";
const imports = ["_app/immutable/nodes/254.D9dquimc.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BxVy82MC.js","_app/immutable/chunks/DonhawEw.js","_app/immutable/chunks/B_pay6SI.js","_app/immutable/chunks/DULwcJ7d.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/DnCrujO_.js","_app/immutable/chunks/CkJoemvl.js","_app/immutable/chunks/eknKW2my.js","_app/immutable/chunks/DepGOsOm.js","_app/immutable/chunks/CGERInoT.js"];
const stylesheets = ["_app/immutable/assets/254.BBE9vbRY.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=254-V8eBHIYO.js.map
