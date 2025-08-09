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

const index = 258;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-gL7yGcho.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/[publicID]/edit/+page.js";
const imports = ["_app/immutable/nodes/258.HLWdQJpm.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BurqNfsS.js","_app/immutable/chunks/Bb2ET71N.js","_app/immutable/chunks/hXgwcGuw.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/CZxZ_Ggc.js","_app/immutable/chunks/5EPmrkDF.js","_app/immutable/chunks/DvkXah-i.js","_app/immutable/chunks/Dtl6DY9b.js","_app/immutable/chunks/Db1VqRGF.js","_app/immutable/chunks/BfK1IohI.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/Cu6yBgIM.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/Be3puNKC.js","_app/immutable/chunks/DXON-Zwr.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/DLclD3It.js","_app/immutable/chunks/BfFMFjDh.js","_app/immutable/chunks/BsKdEVy5.js","_app/immutable/chunks/NNwFLVH8.js","_app/immutable/chunks/D3ZpebQD.js","_app/immutable/chunks/ClPiHlaF.js","_app/immutable/chunks/CL3LU1u3.js","_app/immutable/chunks/CQl02eUe.js","_app/immutable/chunks/k52UdqEd.js"];
const stylesheets = ["_app/immutable/assets/ImageUploader.BaNwnJmc.css","_app/immutable/assets/258.QXaG5iWq.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=258-BzcZ65eO.js.map
