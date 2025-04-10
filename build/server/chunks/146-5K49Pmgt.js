import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  const { user } = await parent();
  if (!user) redirect(301, "/auth");
  let publicID = params.publicID;
  let assignmentID = params.assignmentID;
  let res = await fetch(`/api/${publicID}/assignments/${assignmentID}`);
  let assignment = await res.json();
  return {
    assignment
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 146;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CUDQllXE.js')).default;
const universal_id = "src/routes/(general)/courses/mathematics2/[assignmentID]/+page.js";
const imports = ["_app/immutable/nodes/146.B2FwHiX-.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BurqNfsS.js","_app/immutable/chunks/Bb2ET71N.js","_app/immutable/chunks/ClPiHlaF.js","_app/immutable/chunks/r5iUMgFF.js","_app/immutable/chunks/CYwwEEL2.js","_app/immutable/chunks/BfFMFjDh.js","_app/immutable/chunks/CZxZ_Ggc.js","_app/immutable/chunks/5EPmrkDF.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/DvkXah-i.js","_app/immutable/chunks/BfK1IohI.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/Cu6yBgIM.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/XQX0mffV.js","_app/immutable/chunks/BgVZshQ4.js","_app/immutable/chunks/DFbTh9l7.js","_app/immutable/chunks/hXgwcGuw.js","_app/immutable/chunks/Db1VqRGF.js","_app/immutable/chunks/D3ZpebQD.js","_app/immutable/chunks/CL3LU1u3.js","_app/immutable/chunks/CQl02eUe.js","_app/immutable/chunks/k52UdqEd.js","_app/immutable/chunks/7GMyLcaQ.js","_app/immutable/chunks/OhiPYEKz.js","_app/immutable/chunks/B2itOGzR.js","_app/immutable/chunks/D62dlhBv.js","_app/immutable/chunks/_RYd96Z4.js","_app/immutable/chunks/pn0KYgMn.js","_app/immutable/chunks/DfVzw3g7.js","_app/immutable/chunks/DDraWH49.js","_app/immutable/chunks/CNsEPPit.js","_app/immutable/chunks/C2xjrss_.js","_app/immutable/chunks/CzCYmz-Z.js"];
const stylesheets = ["_app/immutable/assets/Assignment.CJayq7CJ.css","_app/immutable/assets/TestQuestion.Bw2qMWpI.css","_app/immutable/assets/236.DK7l4pZ-.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=146-5K49Pmgt.js.map
