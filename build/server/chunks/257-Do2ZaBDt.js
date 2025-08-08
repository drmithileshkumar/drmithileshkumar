import { r as redirect } from './index-DzcLzHBX.js';
import { p as pageLoadState } from './stores2-BRo56-4P.js';
import './index2-D2s-XE5r.js';
import './utils-DhkojCd_.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  pageLoadState.update((state) => false);
  let skip = 0;
  let res = await fetch(`/vectorial/api/${params.publicID}/drawings?skip=${skip}`);
  if (!res.ok) {
    redirect(301, `/`);
  }
  let drawings = await res.json();
  return {
    drawings
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 257;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D8OfjOwN.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/[publicID]/drawings/+page.js";
const imports = ["_app/immutable/nodes/257.JHC4IxoI.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/DLclD3It.js","_app/immutable/chunks/BfFMFjDh.js","_app/immutable/chunks/BurqNfsS.js","_app/immutable/chunks/Bb2ET71N.js","_app/immutable/chunks/D0QH3NT1.js","_app/immutable/chunks/ClPiHlaF.js","_app/immutable/chunks/B4Bwz1hB.js","_app/immutable/chunks/D3ZpebQD.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/Cu6yBgIM.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/DvkXah-i.js","_app/immutable/chunks/CL3LU1u3.js","_app/immutable/chunks/CQl02eUe.js","_app/immutable/chunks/hXgwcGuw.js","_app/immutable/chunks/CZxZ_Ggc.js","_app/immutable/chunks/5EPmrkDF.js","_app/immutable/chunks/Dtl6DY9b.js","_app/immutable/chunks/Db1VqRGF.js","_app/immutable/chunks/BfK1IohI.js","_app/immutable/chunks/Be3puNKC.js","_app/immutable/chunks/CBrBE51z.js","_app/immutable/chunks/BKtJZaA4.js","_app/immutable/chunks/OhiPYEKz.js","_app/immutable/chunks/C4aTJ1o4.js","_app/immutable/chunks/CzEwDrXk.js","_app/immutable/chunks/OvvU6WeG.js","_app/immutable/chunks/DdP6-6-Q.js","_app/immutable/chunks/trmIJT0m.js","_app/immutable/chunks/nKedTmEr.js","_app/immutable/chunks/BosuxZz1.js","_app/immutable/chunks/DjEM3BrB.js","_app/immutable/chunks/CfbXUvU1.js","_app/immutable/chunks/7GMyLcaQ.js","_app/immutable/chunks/B2itOGzR.js","_app/immutable/chunks/XQX0mffV.js","_app/immutable/chunks/D62dlhBv.js","_app/immutable/chunks/apGe1aZa.js","_app/immutable/chunks/k52UdqEd.js","_app/immutable/chunks/CJUHkpk6.js","_app/immutable/chunks/BYaBronU.js","_app/immutable/chunks/C_e4zuaC.js","_app/immutable/chunks/DVBGMS5O.js","_app/immutable/chunks/CAHFcKM4.js"];
const stylesheets = ["_app/immutable/assets/Listfield.DGx9FQDH.css","_app/immutable/assets/CreateDrawing.CfrzLLFi.css","_app/immutable/assets/SegmentedButton.uIc266ni.css","_app/immutable/assets/234.gTHTxpM-.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=257-Do2ZaBDt.js.map
