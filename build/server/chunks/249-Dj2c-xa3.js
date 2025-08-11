import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com/vectorial" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3003")) {
    redirect(301, `https://drmithileshkumar.com/vectorial`);
  }
  let postID = params.postID;
  let urlink = `/api/post/${postID}`;
  let res = await fetch(urlink);
  if (!res.ok) {
    console.log("redirected...");
    redirect(301, `/`);
  }
  let post = await res.json();
  return {
    post
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 249;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C3RlLlTc.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/post/[postID]/+page.js";
const imports = ["_app/immutable/nodes/249.XwJ_Q-Wg.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BxVy82MC.js","_app/immutable/chunks/DonhawEw.js","_app/immutable/chunks/B5WRG4Vh.js","_app/immutable/chunks/DULwcJ7d.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/DnCrujO_.js","_app/immutable/chunks/CkJoemvl.js","_app/immutable/chunks/eknKW2my.js","_app/immutable/chunks/C97bLCYl.js","_app/immutable/chunks/bVNFjs_J.js","_app/immutable/chunks/BaLGAFUg.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/BpvBUywO.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/Dsb-COfq.js","_app/immutable/chunks/DWggEP7I.js","_app/immutable/chunks/LmmKzvCC.js","_app/immutable/chunks/-wh8JMbe.js","_app/immutable/chunks/BzXXzIRA.js","_app/immutable/chunks/CGERInoT.js","_app/immutable/chunks/DpCbmEWb.js","_app/immutable/chunks/xXPrQvHR.js","_app/immutable/chunks/B_pay6SI.js","_app/immutable/chunks/CL3LU1u3.js","_app/immutable/chunks/DjO997wJ.js","_app/immutable/chunks/CN5kG4T6.js","_app/immutable/chunks/DepGOsOm.js"];
const stylesheets = ["_app/immutable/assets/ComposeComment.CC9W_ZpL.css","_app/immutable/assets/FullPost.DMQFLKXr.css","_app/immutable/assets/ImageUploader.BaNwnJmc.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=249-Dj2c-xa3.js.map
