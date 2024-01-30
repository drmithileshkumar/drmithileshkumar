import { r as redirect } from './index-8pACjapJ.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com/practice/class1`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 215;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-nuxSgXoV.js')).default;
const universal_id = "src/routes/(general)/practice/class9/+page.js";
const imports = ["_app/immutable/nodes/215.g7qxjjKC.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.Wcy8l203.js","_app/immutable/chunks/index.3Wex8s3Q.js","_app/immutable/chunks/Message.PEtC3oVD.js","_app/immutable/chunks/entry.JiEGjc9j.js","_app/immutable/chunks/index.dpPe8Tdf.js","_app/immutable/chunks/stores.O4mUYrP5.js","_app/immutable/chunks/Practice.1crTIRy-.js","_app/immutable/chunks/ripple.nJSaNfXx.js"];
const stylesheets = ["_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Practice.5SCwWus9.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=215-kZ8ZNTl1.js.map
