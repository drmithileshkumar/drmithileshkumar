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

const index = 257;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-gq56w8pM.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/settings/profile/+page.js";
const imports = ["_app/immutable/nodes/257.Bb1_hStY.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BxVy82MC.js","_app/immutable/chunks/DonhawEw.js","_app/immutable/chunks/D0QH3NT1.js","_app/immutable/chunks/B_pay6SI.js","_app/immutable/chunks/B8cuI8-5.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/BpvBUywO.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/OhiPYEKz.js","_app/immutable/chunks/DjO997wJ.js","_app/immutable/chunks/CGERInoT.js","_app/immutable/chunks/DFnl3igp.js","_app/immutable/chunks/F17igeRL.js","_app/immutable/chunks/CkJoemvl.js","_app/immutable/chunks/eknKW2my.js","_app/immutable/chunks/BPjx_-DE.js","_app/immutable/chunks/BkHKzQDw.js","_app/immutable/chunks/Dsb-COfq.js","_app/immutable/chunks/BaLGAFUg.js","_app/immutable/chunks/BJbjdIpD.js","_app/immutable/chunks/v1A575Fg.js","_app/immutable/chunks/DWWfy2Qa.js","_app/immutable/chunks/CL3LU1u3.js","_app/immutable/chunks/D-42ybbL.js","_app/immutable/chunks/LmmKzvCC.js","_app/immutable/chunks/B8zkQ1gz.js","_app/immutable/chunks/CYjcg-An.js","_app/immutable/chunks/-wh8JMbe.js","_app/immutable/chunks/DHIx0_3p.js","_app/immutable/chunks/BKtJZaA4.js","_app/immutable/chunks/C4aTJ1o4.js","_app/immutable/chunks/XfSgI1Sg.js","_app/immutable/chunks/C2A4wgMo.js","_app/immutable/chunks/1V0V7Ccm.js","_app/immutable/chunks/DpCbmEWb.js","_app/immutable/chunks/BzXXzIRA.js","_app/immutable/chunks/DepGOsOm.js","_app/immutable/chunks/7g4juWVe.js","_app/immutable/chunks/BosuxZz1.js"];
const stylesheets = ["_app/immutable/assets/257.DyZqFiY5.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=257-I264E60R.js.map
