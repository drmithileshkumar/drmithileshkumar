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

const index = 11;
const component = async () => (await import('./_page.svelte-19142fe3.js')).default;
const file = '_app/immutable/components/pages/iit/maths/2021/question2/_page.svelte-7e774521.js';
const imports = ["_app/immutable/components/pages/iit/maths/2021/question2/_page.svelte-7e774521.js","_app/immutable/chunks/index-9fb15683.js","_app/immutable/chunks/stores-ec976e60.js","_app/immutable/chunks/singletons-4d016993.js","_app/immutable/chunks/index-ea2f90c7.js","_app/immutable/chunks/index-28f56b41.js","_app/immutable/chunks/ripple-d6af89fa.js","_app/immutable/chunks/constants-79d6a0a7.js","_app/immutable/chunks/Canvas-cf26ec21.js","_app/immutable/modules/pages/iit/maths/2021/question2/_page.js-e9f4eeeb.js","_app/immutable/chunks/_page-67494e69.js"];
const stylesheets = ["_app/immutable/assets/_page-80bf8356.css","_app/immutable/assets/Canvas-3ba0a18c.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=11-a3df56a9.js.map
