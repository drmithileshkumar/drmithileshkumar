import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com/" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com/`);
  }
  const { user } = await parent();
  if (!user) {
    redirect(301, `/`);
  }
  let res = await fetch(`/api/userDetail`);
  let userDetail = await res.json();
  return {
    userDetail
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 252;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-gq56w8pM.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/settings/profile/+page.js";
const imports = ["_app/immutable/nodes/252.BOMHG7Gf.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BurqNfsS.js","_app/immutable/chunks/Bb2ET71N.js","_app/immutable/chunks/D0QH3NT1.js","_app/immutable/chunks/ClPiHlaF.js","_app/immutable/chunks/7GMyLcaQ.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/Cu6yBgIM.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/OhiPYEKz.js","_app/immutable/chunks/CQl02eUe.js","_app/immutable/chunks/BfFMFjDh.js","_app/immutable/chunks/B2itOGzR.js","_app/immutable/chunks/XQX0mffV.js","_app/immutable/chunks/5EPmrkDF.js","_app/immutable/chunks/DvkXah-i.js","_app/immutable/chunks/D62dlhBv.js","_app/immutable/chunks/CKwxj6dR.js","_app/immutable/chunks/Be3puNKC.js","_app/immutable/chunks/OvvU6WeG.js","_app/immutable/chunks/Dbj66YOF.js","_app/immutable/chunks/Cows_dWo.js","_app/immutable/chunks/3AHv6ok1.js","_app/immutable/chunks/CL3LU1u3.js","_app/immutable/chunks/DDraWH49.js","_app/immutable/chunks/CNsEPPit.js","_app/immutable/chunks/C2xjrss_.js","_app/immutable/chunks/CYjcg-An.js","_app/immutable/chunks/BfK1IohI.js","_app/immutable/chunks/CBrBE51z.js","_app/immutable/chunks/BKtJZaA4.js","_app/immutable/chunks/C4aTJ1o4.js","_app/immutable/chunks/CzEwDrXk.js","_app/immutable/chunks/DbqVsV-q.js","_app/immutable/chunks/DfVzw3g7.js","_app/immutable/chunks/CxJwmjrr.js","_app/immutable/chunks/-fT4IALJ.js","_app/immutable/chunks/DLclD3It.js","_app/immutable/chunks/7g4juWVe.js","_app/immutable/chunks/BosuxZz1.js"];
const stylesheets = ["_app/immutable/assets/252.DyZqFiY5.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=252-BSAL6P-1.js.map
