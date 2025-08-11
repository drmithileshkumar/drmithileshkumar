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

const index = 251;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-nMCKIgO4.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/publicID/drawings/+page.js";
const imports = ["_app/immutable/nodes/251.BXCrOP9w.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/DepGOsOm.js","_app/immutable/chunks/CGERInoT.js","_app/immutable/chunks/BxVy82MC.js","_app/immutable/chunks/DonhawEw.js","_app/immutable/chunks/D0QH3NT1.js","_app/immutable/chunks/B_pay6SI.js","_app/immutable/chunks/BfW1WhfF.js","_app/immutable/chunks/xXPrQvHR.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/BpvBUywO.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/eknKW2my.js","_app/immutable/chunks/CL3LU1u3.js","_app/immutable/chunks/DjO997wJ.js","_app/immutable/chunks/DULwcJ7d.js","_app/immutable/chunks/DnCrujO_.js","_app/immutable/chunks/CkJoemvl.js","_app/immutable/chunks/C97bLCYl.js","_app/immutable/chunks/bVNFjs_J.js","_app/immutable/chunks/-wh8JMbe.js","_app/immutable/chunks/Dsb-COfq.js","_app/immutable/chunks/DHIx0_3p.js","_app/immutable/chunks/BKtJZaA4.js","_app/immutable/chunks/OhiPYEKz.js","_app/immutable/chunks/C4aTJ1o4.js","_app/immutable/chunks/XfSgI1Sg.js","_app/immutable/chunks/BaLGAFUg.js","_app/immutable/chunks/DdP6-6-Q.js","_app/immutable/chunks/BzXXzIRA.js","_app/immutable/chunks/D6JYbvXc.js","_app/immutable/chunks/BosuxZz1.js","_app/immutable/chunks/BpQS0xl3.js","_app/immutable/chunks/0AWzMQ0c.js","_app/immutable/chunks/B8cuI8-5.js","_app/immutable/chunks/DFnl3igp.js","_app/immutable/chunks/F17igeRL.js","_app/immutable/chunks/BPjx_-DE.js","_app/immutable/chunks/DRfeREC3.js","_app/immutable/chunks/ByzYJqhI.js","_app/immutable/chunks/DWggEP7I.js","_app/immutable/chunks/B_T_e009.js","_app/immutable/chunks/DzXpx6Gg.js","_app/immutable/chunks/BBty3Gdj.js","_app/immutable/chunks/DpCbmEWb.js"];
const stylesheets = ["_app/immutable/assets/Listfield.DGx9FQDH.css","_app/immutable/assets/CreateDrawing.CfrzLLFi.css","_app/immutable/assets/SegmentedButton.uIc266ni.css","_app/immutable/assets/234.gTHTxpM-.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=251-fEzmTDgz.js.map
