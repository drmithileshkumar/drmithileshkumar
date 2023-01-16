import { r as redirect } from './index2-fac81b88.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 115;
const component = async () => (await import('./_page.svelte-4b367a37.js')).default;
const file = '_app/immutable/components/pages/notes/maths/Sets/Introduction/_page.svelte-7d8d24e9.js';
const imports = ["_app/immutable/components/pages/notes/maths/Sets/Introduction/_page.svelte-7d8d24e9.js","_app/immutable/chunks/index-5d423218.js","_app/immutable/chunks/stores-02431252.js","_app/immutable/chunks/index-c8fba8de.js","_app/immutable/chunks/stores-4fe0658c.js","_app/immutable/chunks/singletons-232cbca0.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang-4a1ad1e8.js","_app/immutable/chunks/index-1db1f02e.js","_app/immutable/chunks/Image-feb88d81.js","_app/immutable/modules/pages/notes/maths/Sets/Introduction/_page.js-3ae4840f.js","_app/immutable/chunks/index-35a671a5.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/_page-ed628c43.js"];
const stylesheets = ["_app/immutable/assets/_page-f0f379ea.css","_app/immutable/assets/Practice-ceaad90d.css","_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Image-da34f997.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=115-f4e92927.js.map
