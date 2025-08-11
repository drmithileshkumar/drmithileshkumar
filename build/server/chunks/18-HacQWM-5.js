import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  const { user } = await parent();
  if (!user) redirect(301, "/auth");
  user.publicID;
  let res = await fetch(`/api/assignments`);
  let assignments = await res.json();
  return {
    assignments
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 18;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte--2XFPyXx.js')).default;
const universal_id = "src/routes/(general)/assignments/+page.js";
const imports = ["_app/immutable/nodes/18.Dvi_hIN1.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BxVy82MC.js","_app/immutable/chunks/DonhawEw.js","_app/immutable/chunks/B_pay6SI.js","_app/immutable/chunks/BzXXzIRA.js","_app/immutable/chunks/CGERInoT.js","_app/immutable/chunks/DnCrujO_.js","_app/immutable/chunks/CkJoemvl.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/eknKW2my.js","_app/immutable/chunks/-wh8JMbe.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/BpvBUywO.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/Dsb-COfq.js","_app/immutable/chunks/oA00ZU7M.js","_app/immutable/chunks/OhiPYEKz.js","_app/immutable/chunks/CMAIDTyj.js","_app/immutable/chunks/F17igeRL.js"];
const stylesheets = ["_app/immutable/assets/236.DK7l4pZ-.css","_app/immutable/assets/Assignment.CJayq7CJ.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=18-HacQWM-5.js.map
