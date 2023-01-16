import { r as redirect } from './index2-fac81b88.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(307, `https://drmithileshkumar.com`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 119;
const component = async () => (await import('./_page.svelte-2f9bd28d.js')).default;
const file = '_app/immutable/components/pages/notes/maths/Sets/Sets and their representations/_page.svelte-40fd1c3e.js';
const imports = ["_app/immutable/components/pages/notes/maths/Sets/Sets and their representations/_page.svelte-40fd1c3e.js","_app/immutable/chunks/index-5d423218.js","_app/immutable/chunks/stores-02431252.js","_app/immutable/chunks/index-c8fba8de.js","_app/immutable/chunks/Practice-bf250216.js","_app/immutable/chunks/ripple-d6af89fa.js","_app/immutable/chunks/common-f3b98355.js","_app/immutable/chunks/sets-c5f87a63.js","_app/immutable/chunks/quadratic-bd3b55c0.js","_app/immutable/chunks/stores-4fe0658c.js","_app/immutable/chunks/singletons-232cbca0.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang-4a1ad1e8.js","_app/immutable/chunks/index-1db1f02e.js","_app/immutable/chunks/H3-5e40d9d1.js","_app/immutable/chunks/H2-c8f460d1.js","_app/immutable/chunks/Image-feb88d81.js","_app/immutable/modules/pages/notes/maths/Sets/Sets and their representations/_page.js-6b2d3c46.js","_app/immutable/chunks/index-35a671a5.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/_page-1fe1e8a8.js"];
const stylesheets = ["_app/immutable/assets/_page-65b272d6.css","_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Practice-ceaad90d.css","_app/immutable/assets/Image-da34f997.css","_app/immutable/assets/H3-79f4b182.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=119-a7b8331b.js.map
