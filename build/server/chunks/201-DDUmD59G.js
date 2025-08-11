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

const index = 201;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D5Q95Vq3.js')).default;
const universal_id = "src/routes/(general)/[publicID]/assignments/[assignmentID]/+page.js";
const imports = ["_app/immutable/nodes/201.BnPqCokc.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BxVy82MC.js","_app/immutable/chunks/DonhawEw.js","_app/immutable/chunks/B_pay6SI.js","_app/immutable/chunks/DpCbmEWb.js","_app/immutable/chunks/BzXXzIRA.js","_app/immutable/chunks/CGERInoT.js","_app/immutable/chunks/DnCrujO_.js","_app/immutable/chunks/CkJoemvl.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/eknKW2my.js","_app/immutable/chunks/-wh8JMbe.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/BpvBUywO.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/Dsb-COfq.js","_app/immutable/chunks/F17igeRL.js","_app/immutable/chunks/CuGQ3sej.js","_app/immutable/chunks/DULwcJ7d.js","_app/immutable/chunks/bVNFjs_J.js","_app/immutable/chunks/xXPrQvHR.js","_app/immutable/chunks/CL3LU1u3.js","_app/immutable/chunks/DjO997wJ.js","_app/immutable/chunks/ByzYJqhI.js","_app/immutable/chunks/B8cuI8-5.js","_app/immutable/chunks/OhiPYEKz.js","_app/immutable/chunks/DFnl3igp.js","_app/immutable/chunks/BPjx_-DE.js","_app/immutable/chunks/86VmxKxN.js","_app/immutable/chunks/DcKrIdun.js","_app/immutable/chunks/1V0V7Ccm.js","_app/immutable/chunks/D-42ybbL.js","_app/immutable/chunks/LmmKzvCC.js","_app/immutable/chunks/B8zkQ1gz.js","_app/immutable/chunks/CzCYmz-Z.js","_app/immutable/chunks/BzeLO9xN.js"];
const stylesheets = ["_app/immutable/assets/Assignment.CJayq7CJ.css","_app/immutable/assets/ShowQuestion.C0wkmKbS.css","_app/immutable/assets/236.DK7l4pZ-.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=201-DDUmD59G.js.map
