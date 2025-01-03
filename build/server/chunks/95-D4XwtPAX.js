import { r as redirect } from './index-DzcLzHBX.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 95;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BlriIqAy.js')).default;
const universal_id = "src/routes/(general)/courses/linearalgebra/bases/+page.js";
const imports = ["_app/immutable/nodes/95.DJrRu2gW.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DDynXUZ0.js","_app/immutable/chunks/index.DnYThXIE.js","_app/immutable/chunks/typeset.CzCYmz-Z.js","_app/immutable/chunks/stores.CyuxF9br.js","_app/immutable/chunks/entry.BIhX438V.js","_app/immutable/chunks/index.BNQMCvwE.js","_app/immutable/chunks/Card.DRC2xUqP.js","_app/immutable/chunks/SmuiElement.niKK9SEg.js","_app/immutable/chunks/ActionIcons.rKvm5GeB.js","_app/immutable/chunks/classAdderBuilder.C1qMRX2R.js","_app/immutable/chunks/Subheader.BOQ4-Uk_.js","_app/immutable/chunks/stores.C4YY6XNo.js","_app/immutable/chunks/content.B9xP3RM-.js","_app/immutable/chunks/Pathlist.vI7Xpyp9.js","_app/immutable/chunks/each.D0FuIOMI.js","_app/immutable/chunks/CourseNavigation.Dmce26xt.js","_app/immutable/chunks/Ripple.C-DtqsEB.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js"];
const stylesheets = ["_app/immutable/assets/95.Dxm-jBvk.css","_app/immutable/assets/Link.DT8GuSJh.css","_app/immutable/assets/NavList.CJbcjQr4.css","_app/immutable/assets/Pathlist.BSb51Isn.css","_app/immutable/assets/CourseNavigation.CI9tLRx6.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=95-D4XwtPAX.js.map
