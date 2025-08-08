import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com/" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com/`);
  }
  console.log("Loading user details...");
  let publicID = params.publicID;
  let resuser = await fetch(`/vectorial/api/${publicID}`);
  let { user, userDetail } = await resuser.json();
  let res1 = await fetch(`/vectorial/api/${publicID}/profilepic`);
  let res2 = await fetch(`/vectorial/api/${publicID}/bannerpic`);
  let profilepicData = await res1.blob();
  let bannerpicData = await res2.blob();
  let active = void 0;
  return {
    currentUser: user,
    currentUserDetail: userDetail,
    profilepicData,
    bannerpicData,
    active
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 256;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-2pH2OrJ1.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/[publicID]/+page.js";
const imports = ["_app/immutable/nodes/256.9R5vheSo.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BurqNfsS.js","_app/immutable/chunks/CUwemh9u.js","_app/immutable/chunks/Bb2ET71N.js","_app/immutable/chunks/hXgwcGuw.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/CZxZ_Ggc.js","_app/immutable/chunks/5EPmrkDF.js","_app/immutable/chunks/DvkXah-i.js","_app/immutable/chunks/BfK1IohI.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/Cu6yBgIM.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/Be3puNKC.js","_app/immutable/chunks/D7mMdWq-.js","_app/immutable/chunks/OhiPYEKz.js","_app/immutable/chunks/ClPiHlaF.js","_app/immutable/chunks/-mRYWD-K.js","_app/immutable/chunks/CQgyvGlV.js","_app/immutable/chunks/BfFMFjDh.js","_app/immutable/chunks/CNsEPPit.js","_app/immutable/chunks/Dtl6DY9b.js","_app/immutable/chunks/Db1VqRGF.js","_app/immutable/chunks/OvvU6WeG.js","_app/immutable/chunks/CJUHkpk6.js","_app/immutable/chunks/DLclD3It.js","_app/immutable/chunks/CS5I-azZ.js","_app/immutable/chunks/D3ZpebQD.js","_app/immutable/chunks/CL3LU1u3.js","_app/immutable/chunks/CQl02eUe.js","_app/immutable/chunks/3AHv6ok1.js","_app/immutable/chunks/C2xjrss_.js"];
const stylesheets = ["_app/immutable/assets/ComposeComment.CC9W_ZpL.css","_app/immutable/assets/256.BjCJfhUE.css","_app/immutable/assets/ImageUploader.BaNwnJmc.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=256-BQlZn9s0.js.map
