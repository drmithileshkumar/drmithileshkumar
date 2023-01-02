async function load({ session, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:3000")) {
    return {
      status: 301,
      redirect: `https://drmithileshkumar.com/practice`
    };
  }
  return {
    props: {}
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 19;
const component = async () => (await import('./_page.svelte-4ca6a81d.js')).default;
const file = '_app/immutable/components/pages/practice/_page.svelte-4a776995.js';
const imports = ["_app/immutable/components/pages/practice/_page.svelte-4a776995.js","_app/immutable/chunks/index-3b22549b.js","_app/immutable/chunks/stores-cd5d7c33.js","_app/immutable/chunks/index-dbcace51.js","_app/immutable/chunks/ripple-d6af89fa.js","_app/immutable/modules/pages/practice/_page.js-3e937eca.js","_app/immutable/chunks/_page-1e2ef877.js"];
const stylesheets = ["_app/immutable/assets/_page-ceaad90d.css","_app/immutable/assets/Link-e8543c1a.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=19-c0d88261.js.map
