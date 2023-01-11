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

const index = 8;
const component = async () => (await import('./_page.svelte-ba4c5099.js')).default;
const file = '_app/immutable/components/pages/_page.svelte-9e15f9cb.js';
const imports = ["_app/immutable/components/pages/_page.svelte-9e15f9cb.js","_app/immutable/chunks/index-4bc03959.js","_app/immutable/chunks/stores-c5dfff84.js","_app/immutable/chunks/index-274f5047.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang-1661a95c.js","_app/immutable/chunks/index-d10dbe43.js","_app/immutable/chunks/Image-71ec5bbb.js","_app/immutable/modules/pages/_page.js-88426a2e.js","_app/immutable/chunks/index-35a671a5.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/_page-7af39617.js"];
const stylesheets = ["_app/immutable/assets/_page-60896c54.css","_app/immutable/assets/Practice-ceaad90d.css","_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Image-3e5ec147.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=8-fc77c49f.js.map
