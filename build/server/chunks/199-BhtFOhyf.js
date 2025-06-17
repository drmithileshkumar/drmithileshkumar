import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  const { user } = await parent();
  if (!user) redirect(301, "/auth");
  let publicID = params.publicID;
  let res = await fetch(`/api/${publicID}/assignments`);
  let assignments = await res.json();
  return {
    assignments
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 199;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DGyWvMlr.js')).default;
const universal_id = "src/routes/(general)/[publicID]/assignments/+page.js";
const imports = ["_app/immutable/nodes/199.RdXragut.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BurqNfsS.js","_app/immutable/chunks/Bb2ET71N.js","_app/immutable/chunks/ClPiHlaF.js","_app/immutable/chunks/t_RcJufE.js","_app/immutable/chunks/BfFMFjDh.js","_app/immutable/chunks/CetSdIy0.js","_app/immutable/chunks/CZxZ_Ggc.js","_app/immutable/chunks/5EPmrkDF.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/DvkXah-i.js","_app/immutable/chunks/BfK1IohI.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/Cu6yBgIM.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/DPb_VVxX.js","_app/immutable/chunks/hXgwcGuw.js","_app/immutable/chunks/Db1VqRGF.js","_app/immutable/chunks/D3ZpebQD.js","_app/immutable/chunks/CL3LU1u3.js","_app/immutable/chunks/CQl02eUe.js","_app/immutable/chunks/k52UdqEd.js","_app/immutable/chunks/7GMyLcaQ.js","_app/immutable/chunks/OhiPYEKz.js","_app/immutable/chunks/B2itOGzR.js","_app/immutable/chunks/XQX0mffV.js","_app/immutable/chunks/D62dlhBv.js","_app/immutable/chunks/BgVZshQ4.js","_app/immutable/chunks/DSeBYwZZ.js","_app/immutable/chunks/CYjcg-An.js","_app/immutable/chunks/Dbj66YOF.js","_app/immutable/chunks/Cows_dWo.js","_app/immutable/chunks/D0QH3NT1.js","_app/immutable/chunks/3AHv6ok1.js","_app/immutable/chunks/DDraWH49.js","_app/immutable/chunks/CNsEPPit.js","_app/immutable/chunks/C2xjrss_.js"];
const stylesheets = ["_app/immutable/assets/Assignment.CJayq7CJ.css","_app/immutable/assets/236.DK7l4pZ-.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=199-BhtFOhyf.js.map
