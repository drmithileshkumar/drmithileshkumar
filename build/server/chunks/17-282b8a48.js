async function load({ session, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:3000")) {
    return {
      status: 301,
      redirect: `https://drmithileshkumar.com${url.pathname}`
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

const index = 17;
const component = async () => (await import('./_page.svelte-7650b3e4.js')).default;
const file = '_app/immutable/components/pages/notes/conic/_page.svelte-9ef36049.js';
const imports = ["_app/immutable/components/pages/notes/conic/_page.svelte-9ef36049.js","_app/immutable/chunks/index-3b22549b.js","_app/immutable/chunks/stores-2e81153e.js","_app/immutable/chunks/singletons-60001e27.js","_app/immutable/chunks/index-dbcace51.js","_app/immutable/chunks/index-34255218.js","_app/immutable/chunks/ripple-d6af89fa.js","_app/immutable/chunks/Canvas-79cb253a.js","_app/immutable/modules/pages/notes/conic/_page.js-867b53d4.js","_app/immutable/chunks/_page-962e2290.js"];
const stylesheets = ["_app/immutable/assets/_page-96b7a61e.css","_app/immutable/assets/Canvas-3b8cdf52.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=17-282b8a48.js.map
