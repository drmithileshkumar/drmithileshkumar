import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  const { user } = await parent();
  if (!user) redirect(301, "/auth");
  params.publicID;
  return {
    // questions, assignments
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 202;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-T7N21hvK.js')).default;
const universal_id = "src/routes/(general)/[publicID]/questions/+page.js";
const imports = ["_app/immutable/nodes/202.CfrdXF8F.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BurqNfsS.js","_app/immutable/chunks/Bb2ET71N.js","_app/immutable/chunks/ClPiHlaF.js","_app/immutable/chunks/Q0sgujtD.js","_app/immutable/chunks/BfFMFjDh.js","_app/immutable/chunks/Di7QKdBL.js","_app/immutable/chunks/CZxZ_Ggc.js","_app/immutable/chunks/5EPmrkDF.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/DvkXah-i.js","_app/immutable/chunks/BfK1IohI.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/Cu6yBgIM.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/hXgwcGuw.js","_app/immutable/chunks/Db1VqRGF.js","_app/immutable/chunks/pn0KYgMn.js","_app/immutable/chunks/OhiPYEKz.js","_app/immutable/chunks/DfVzw3g7.js","_app/immutable/chunks/DSeBYwZZ.js","_app/immutable/chunks/CYjcg-An.js","_app/immutable/chunks/Dbj66YOF.js","_app/immutable/chunks/Cows_dWo.js","_app/immutable/chunks/D0QH3NT1.js","_app/immutable/chunks/3AHv6ok1.js","_app/immutable/chunks/CL3LU1u3.js","_app/immutable/chunks/DDraWH49.js","_app/immutable/chunks/CNsEPPit.js","_app/immutable/chunks/C2xjrss_.js","_app/immutable/chunks/B2itOGzR.js","_app/immutable/chunks/CzCYmz-Z.js","_app/immutable/chunks/BgVZshQ4.js"];
const stylesheets = ["_app/immutable/assets/202.BckVhKsH.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=202-DEXqR0EP.js.map
