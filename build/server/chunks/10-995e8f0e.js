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

const index = 10;
const component = async () => (await import('./_page.svelte-41e775fa.js')).default;
const file = '_app/immutable/components/pages/iit/maths/2021/question1/_page.svelte-654b9f32.js';
const imports = ["_app/immutable/components/pages/iit/maths/2021/question1/_page.svelte-654b9f32.js","_app/immutable/chunks/index-9fb15683.js","_app/immutable/chunks/stores-ec976e60.js","_app/immutable/chunks/singletons-4d016993.js","_app/immutable/chunks/index-ea2f90c7.js","_app/immutable/chunks/index-28f56b41.js","_app/immutable/chunks/ripple-d6af89fa.js","_app/immutable/chunks/constants-79d6a0a7.js","_app/immutable/chunks/Canves-8ff7c84d.js","_app/immutable/modules/pages/iit/maths/2021/question1/_page.js-e9f4eeeb.js","_app/immutable/chunks/_page-962e2290.js"];
const stylesheets = ["_app/immutable/assets/_page-d4a1b0bd.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=10-995e8f0e.js.map
