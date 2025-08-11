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
const imports = ["_app/immutable/nodes/199.CW-dwx-p.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BxVy82MC.js","_app/immutable/chunks/DonhawEw.js","_app/immutable/chunks/B_pay6SI.js","_app/immutable/chunks/BzXXzIRA.js","_app/immutable/chunks/CGERInoT.js","_app/immutable/chunks/DpCbmEWb.js","_app/immutable/chunks/DnCrujO_.js","_app/immutable/chunks/CkJoemvl.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/eknKW2my.js","_app/immutable/chunks/-wh8JMbe.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/BpvBUywO.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/CuGQ3sej.js","_app/immutable/chunks/DULwcJ7d.js","_app/immutable/chunks/bVNFjs_J.js","_app/immutable/chunks/xXPrQvHR.js","_app/immutable/chunks/CL3LU1u3.js","_app/immutable/chunks/DjO997wJ.js","_app/immutable/chunks/ByzYJqhI.js","_app/immutable/chunks/B8cuI8-5.js","_app/immutable/chunks/OhiPYEKz.js","_app/immutable/chunks/DFnl3igp.js","_app/immutable/chunks/F17igeRL.js","_app/immutable/chunks/BPjx_-DE.js","_app/immutable/chunks/DgV-wMNa.js","_app/immutable/chunks/DDFoKv60.js","_app/immutable/chunks/CYjcg-An.js","_app/immutable/chunks/BJbjdIpD.js","_app/immutable/chunks/v1A575Fg.js","_app/immutable/chunks/D0QH3NT1.js","_app/immutable/chunks/DWWfy2Qa.js","_app/immutable/chunks/D-42ybbL.js","_app/immutable/chunks/LmmKzvCC.js","_app/immutable/chunks/B8zkQ1gz.js"];
const stylesheets = ["_app/immutable/assets/Assignment.CJayq7CJ.css","_app/immutable/assets/236.DK7l4pZ-.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=199-CYYFkfLK.js.map
