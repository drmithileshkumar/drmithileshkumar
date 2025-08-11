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

const index = 252;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-gL7yGcho.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/publicID/edit/+page.js";
const imports = ["_app/immutable/nodes/252.BMbt6cjR.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BxVy82MC.js","_app/immutable/chunks/DonhawEw.js","_app/immutable/chunks/DULwcJ7d.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/DnCrujO_.js","_app/immutable/chunks/CkJoemvl.js","_app/immutable/chunks/eknKW2my.js","_app/immutable/chunks/C97bLCYl.js","_app/immutable/chunks/bVNFjs_J.js","_app/immutable/chunks/-wh8JMbe.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/BpvBUywO.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/Dsb-COfq.js","_app/immutable/chunks/BonsM6QM.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/DepGOsOm.js","_app/immutable/chunks/CGERInoT.js","_app/immutable/chunks/DpCbmEWb.js","_app/immutable/chunks/BzXXzIRA.js","_app/immutable/chunks/xXPrQvHR.js","_app/immutable/chunks/B_pay6SI.js","_app/immutable/chunks/CL3LU1u3.js","_app/immutable/chunks/DjO997wJ.js","_app/immutable/chunks/ByzYJqhI.js"];
const stylesheets = ["_app/immutable/assets/ImageUploader.BaNwnJmc.css","_app/immutable/assets/252.QXaG5iWq.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=252-CsjMWcWG.js.map
