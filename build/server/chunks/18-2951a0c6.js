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

const index = 18;
const component = async () => (await import('./_page.svelte-e7798646.js')).default;
const file = '_app/immutable/components/pages/practice/_page.svelte-ae995c93.js';
const imports = ["_app/immutable/components/pages/practice/_page.svelte-ae995c93.js","_app/immutable/chunks/index-9fb15683.js","_app/immutable/chunks/stores-8b221992.js","_app/immutable/chunks/index-ea2f90c7.js","_app/immutable/chunks/ripple-d6af89fa.js","_app/immutable/modules/pages/practice/_page.js-3e937eca.js","_app/immutable/chunks/_page-1e2ef877.js"];
const stylesheets = ["_app/immutable/assets/_page-ceaad90d.css","_app/immutable/assets/Link-e8543c1a.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=18-2951a0c6.js.map
