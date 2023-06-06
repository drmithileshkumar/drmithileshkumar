import { r as redirect } from './index-1dce6fb5.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 127;
const component = async () => (await import('./_page.svelte-96e94859.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Sets/Finite and infinite sets/+page.js";
const imports = ["_app/immutable/nodes/127.5c1e9c81.js","_app/immutable/chunks/index.1de1fe79.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/chunks/index.6422d2b8.js","_app/immutable/chunks/stores.fdedd971.js","_app/immutable/chunks/index.ece20a09.js","_app/immutable/chunks/Practice.a0e99482.js","_app/immutable/chunks/stores.153b6257.js","_app/immutable/chunks/Practice.svelte_svelte_type_style_lang.4b324f0b.js","_app/immutable/chunks/ripple.d6af89fa.js","_app/immutable/chunks/common.f3b98355.js","_app/immutable/chunks/stores.22400e87.js","_app/immutable/chunks/singletons.edf20d34.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang.9d6b3e0f.js","_app/immutable/chunks/index.9e92b955.js","_app/immutable/chunks/H3.e750a64a.js","_app/immutable/chunks/H2.572c7bc7.js"];
const stylesheets = ["_app/immutable/assets/127.7b7d19c4.css","_app/immutable/assets/Message.1e964222.css","_app/immutable/assets/Practice.5698baa0.css","_app/immutable/assets/Image.da34f997.css","_app/immutable/assets/H3.79f4b182.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=127-9e7edc04.js.map
