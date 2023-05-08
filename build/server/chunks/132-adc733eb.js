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

const index = 132;
const component = async () => (await import('./_page.svelte-5513296a.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Sets/Real numbers/+page.js";
const imports = ["_app/immutable/nodes/132.06c32e33.js","_app/immutable/chunks/index.1de1fe79.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/chunks/index.4c5142a2.js","_app/immutable/chunks/stores.805c2c19.js","_app/immutable/chunks/index.e53142fc.js","_app/immutable/chunks/Practice.24180e53.js","_app/immutable/chunks/stores.fe1ccf01.js","_app/immutable/chunks/Practice.svelte_svelte_type_style_lang.9759362f.js","_app/immutable/chunks/ripple.d6af89fa.js","_app/immutable/chunks/sets.1eaeba9a.js","_app/immutable/chunks/common.f3b98355.js","_app/immutable/chunks/fraction.e7c1ba6e.js","_app/immutable/chunks/stores.e112ccdf.js","_app/immutable/chunks/singletons.70b72f07.js","_app/immutable/chunks/constants.5a4b1f74.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang.0c706050.js","_app/immutable/chunks/index.02565152.js","_app/immutable/chunks/H3.ff3f6afb.js","_app/immutable/chunks/H2.059b112d.js","_app/immutable/chunks/Image.829af4e1.js"];
const stylesheets = ["_app/immutable/assets/132.32f04bf6.css","_app/immutable/assets/Message.1e964222.css","_app/immutable/assets/H3.79f4b182.css","_app/immutable/assets/Practice.5698baa0.css","_app/immutable/assets/Image.da34f997.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=132-adc733eb.js.map
