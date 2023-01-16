import { r as redirect } from './index2-fac81b88.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 120;
const component = async () => (await import('./_page.svelte-adcbcb13.js')).default;
const file = '_app/immutable/components/pages/notes/maths/Sets/Subsets/_page.svelte-7aae5a4f.js';
const imports = ["_app/immutable/components/pages/notes/maths/Sets/Subsets/_page.svelte-7aae5a4f.js","_app/immutable/chunks/index-5d423218.js","_app/immutable/chunks/stores-02431252.js","_app/immutable/chunks/index-c8fba8de.js","_app/immutable/chunks/stores-4fe0658c.js","_app/immutable/chunks/singletons-232cbca0.js","_app/immutable/chunks/constants-5a4b1f74.js","_app/immutable/modules/pages/notes/maths/Sets/Subsets/_page.js-4bd45e04.js","_app/immutable/chunks/index-35a671a5.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/_page-996685e0.js"];
const stylesheets = ["_app/immutable/assets/_page-366f0795.css","_app/immutable/assets/Practice-ceaad90d.css","_app/immutable/assets/Message-1e964222.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=120-09e35636.js.map
