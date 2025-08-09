import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  const { user } = await parent();
  if (!user) redirect(301, "/auth");
  let publicID = params.publicID;
  let questionID = params.questionID;
  let res = await fetch(`/api/${publicID}/questions/${questionID}`);
  let question = await res.json();
  return {
    question
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 204;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CF7aFPNS.js')).default;
const universal_id = "src/routes/(general)/[publicID]/questions/[questionID]/+page.js";
const imports = ["_app/immutable/nodes/204.D_XvC8wl.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BurqNfsS.js","_app/immutable/chunks/Bb2ET71N.js","_app/immutable/chunks/ClPiHlaF.js","_app/immutable/chunks/BsKdEVy5.js","_app/immutable/chunks/NNwFLVH8.js","_app/immutable/chunks/BfFMFjDh.js","_app/immutable/chunks/hXgwcGuw.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/CZxZ_Ggc.js","_app/immutable/chunks/5EPmrkDF.js","_app/immutable/chunks/DvkXah-i.js","_app/immutable/chunks/Db1VqRGF.js","_app/immutable/chunks/BfK1IohI.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/Cu6yBgIM.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/Be3puNKC.js","_app/immutable/chunks/7GMyLcaQ.js","_app/immutable/chunks/OhiPYEKz.js","_app/immutable/chunks/CQl02eUe.js","_app/immutable/chunks/B2itOGzR.js","_app/immutable/chunks/XQX0mffV.js","_app/immutable/chunks/D62dlhBv.js","_app/immutable/chunks/DfVzw3g7.js","_app/immutable/chunks/pn0KYgMn.js","_app/immutable/chunks/DbqVsV-q.js"];
const stylesheets = ["_app/immutable/assets/204.D2wXoaCP.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=204-rd6R-Xz2.js.map
