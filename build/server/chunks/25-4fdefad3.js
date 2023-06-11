import { r as redirect } from './index-f2253eb7.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    throw redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 25;
const component = async () => (await import('./_page.svelte-962cd3ec.js')).default;
const universal_id = "src/routes/(general)/iit/+page.js";
const imports = ["_app/immutable/nodes/25.82981ce1.js","_app/immutable/chunks/index.ade5cbd2.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.aa11adab.js","_app/immutable/chunks/Link.2043229b.js","_app/immutable/chunks/paths.bf3a73ee.js"];
const stylesheets = ["_app/immutable/assets/Message.1e964222.css","_app/immutable/assets/Link.867ad8ee.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=25-4fdefad3.js.map
