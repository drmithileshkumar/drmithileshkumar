import { r as redirect } from './index-DzcLzHBX.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 165;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-UjrZls3U.js')).default;
const universal_id = "src/routes/(general)/talks/quantumteleportation/+page.js";
const imports = ["_app/immutable/nodes/165.D6Mo7wsI.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DDynXUZ0.js","_app/immutable/chunks/index.DnYThXIE.js","_app/immutable/chunks/stores.h569tmog.js","_app/immutable/chunks/index.BNQMCvwE.js","_app/immutable/chunks/stores.CyuxF9br.js","_app/immutable/chunks/entry.BIhX438V.js","_app/immutable/chunks/index.yfLkzeyk.js","_app/immutable/chunks/typeset.CzCYmz-Z.js"];
const stylesheets = ["_app/immutable/assets/165.CqCEwrN9.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=165-B-37NQD9.js.map
