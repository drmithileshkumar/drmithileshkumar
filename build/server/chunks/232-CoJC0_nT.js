import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com/" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com/`);
  }
  let commentID = params.commentID;
  let urlink = `/vectorial/api/comment/${commentID}`;
  let res = await fetch(urlink);
  if (!res.ok) {
    console.log("redirected...");
    redirect(301, `/`);
  }
  let comment = await res.json();
  return {
    comment
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 232;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DZUQb0m6.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/comment/[commentID]/+page.js";
const imports = ["_app/immutable/nodes/232.Dzq5SKxK.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BurqNfsS.js","_app/immutable/chunks/Bb2ET71N.js","_app/immutable/chunks/xKs6uqxQ.js","_app/immutable/chunks/hXgwcGuw.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/CZxZ_Ggc.js","_app/immutable/chunks/5EPmrkDF.js","_app/immutable/chunks/DvkXah-i.js","_app/immutable/chunks/Dtl6DY9b.js","_app/immutable/chunks/Db1VqRGF.js","_app/immutable/chunks/OvvU6WeG.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/Cu6yBgIM.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/Be3puNKC.js","_app/immutable/chunks/CJUHkpk6.js","_app/immutable/chunks/CNsEPPit.js","_app/immutable/chunks/BfK1IohI.js","_app/immutable/chunks/-fT4IALJ.js","_app/immutable/chunks/BfFMFjDh.js","_app/immutable/chunks/CxJwmjrr.js","_app/immutable/chunks/D3ZpebQD.js","_app/immutable/chunks/ClPiHlaF.js","_app/immutable/chunks/CL3LU1u3.js","_app/immutable/chunks/CQl02eUe.js","_app/immutable/chunks/DadpTKQI.js","_app/immutable/chunks/DLclD3It.js"];
const stylesheets = ["_app/immutable/assets/ComposeComment.CC9W_ZpL.css","_app/immutable/assets/FullPost.DMQFLKXr.css","_app/immutable/assets/ImageUploader.BaNwnJmc.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=232-CoJC0_nT.js.map
