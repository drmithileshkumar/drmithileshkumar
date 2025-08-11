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

const index = 253;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BRyByd98.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/publicID/edit/comment/+page.js";
const imports = ["_app/immutable/nodes/253.CGTXrNc2.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BxVy82MC.js","_app/immutable/chunks/DonhawEw.js","_app/immutable/chunks/DULwcJ7d.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/DnCrujO_.js","_app/immutable/chunks/CkJoemvl.js","_app/immutable/chunks/eknKW2my.js","_app/immutable/chunks/bVNFjs_J.js","_app/immutable/chunks/-wh8JMbe.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/BpvBUywO.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/Dsb-COfq.js","_app/immutable/chunks/DepGOsOm.js","_app/immutable/chunks/CGERInoT.js","_app/immutable/chunks/DpCbmEWb.js","_app/immutable/chunks/BzXXzIRA.js"];
const stylesheets = ["_app/immutable/assets/253.BqKpJZzv.css","_app/immutable/assets/ImageUploader.BaNwnJmc.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=253-BUhjD0ZW.js.map
