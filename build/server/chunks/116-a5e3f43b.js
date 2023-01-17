import { r as redirect } from './index-3fb25cb5.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 116;
const component = async () => (await import('./_page.svelte-852e0a84.js')).default;
const file = '_app/immutable/components/pages/notes/maths/Sets/Introduction/_page.svelte-056fb497.js';
const imports = ["_app/immutable/components/pages/notes/maths/Sets/Introduction/_page.svelte-056fb497.js","_app/immutable/chunks/index-9b74571d.js","_app/immutable/chunks/stores-6ae268f7.js","_app/immutable/chunks/index-bf2387e6.js","_app/immutable/chunks/stores-406c7d31.js","_app/immutable/chunks/singletons-956b34b2.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang-9efab3cd.js","_app/immutable/chunks/index-190d857b.js","_app/immutable/chunks/Image-501a9408.js","_app/immutable/modules/pages/notes/maths/Sets/Introduction/_page.js-283b214b.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-e0139a24.js"];
const stylesheets = ["_app/immutable/assets/_page-f0f379ea.css","_app/immutable/assets/Practice-ceaad90d.css","_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Image-da34f997.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=116-a5e3f43b.js.map
