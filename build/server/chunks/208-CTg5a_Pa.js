import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  const classn = params.classn;
  return {
    classn
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 208;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CtQhsDZH.js')).default;
const universal_id = "src/routes/(mathril)/mathril/class[classn]/+page.js";
const imports = ["_app/immutable/nodes/208.CB2edOMC.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BurqNfsS.js","_app/immutable/chunks/Bb2ET71N.js","_app/immutable/chunks/ClPiHlaF.js","_app/immutable/chunks/hXgwcGuw.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/CZxZ_Ggc.js","_app/immutable/chunks/5EPmrkDF.js","_app/immutable/chunks/DvkXah-i.js","_app/immutable/chunks/CM997ajP.js","_app/immutable/chunks/trmIJT0m.js","_app/immutable/chunks/BfFMFjDh.js","_app/immutable/chunks/CAHFcKM4.js","_app/immutable/chunks/Dl6Zqmzg.js","_app/immutable/chunks/DG54mJ5c.js","_app/immutable/chunks/BrNRrKxc.js"];
const stylesheets = ["_app/immutable/assets/208.BqUuWG-D.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=208-CTg5a_Pa.js.map
