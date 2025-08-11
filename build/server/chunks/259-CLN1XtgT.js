import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com/" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com/`);
  }
  const { user } = await parent();
  let subscription = null;
  if (user) {
    let res = await fetch(`/vectorial/api/subscription`);
    subscription = await res.json();
  }
  return {
    subscription
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 259;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Dj6gxGh5.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/subscription/+page.js";
const imports = ["_app/immutable/nodes/259.DfUmgCuf.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BxVy82MC.js","_app/immutable/chunks/DonhawEw.js","_app/immutable/chunks/DULwcJ7d.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/DnCrujO_.js","_app/immutable/chunks/CkJoemvl.js","_app/immutable/chunks/eknKW2my.js","_app/immutable/chunks/bVNFjs_J.js","_app/immutable/chunks/-wh8JMbe.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/BpvBUywO.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/BzXXzIRA.js","_app/immutable/chunks/CGERInoT.js","_app/immutable/chunks/DepGOsOm.js","_app/immutable/chunks/DpCbmEWb.js"];
const stylesheets = ["_app/immutable/assets/259.Dqs8cmPG.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=259-CLN1XtgT.js.map
