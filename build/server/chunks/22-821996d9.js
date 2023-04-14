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

const index = 22;
const component = async () => (await import('./_page@about.svelte-aa3bb8f9.js')).default;
const file = '_app/immutable/components/pages/(about)/about/_page@about.svelte-84423a89.js';
const imports = ["_app/immutable/components/pages/(about)/about/_page@about.svelte-84423a89.js","_app/immutable/chunks/index-ade51a35.js","_app/immutable/chunks/Papers-76ddcfd3.js","_app/immutable/modules/pages/(about)/about/_page.js-b1aab0fa.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-caad7bae.js"];
const stylesheets = ["_app/immutable/assets/_page@about-56b7dc4f.css","_app/immutable/assets/Papers-04a964fd.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=22-821996d9.js.map
