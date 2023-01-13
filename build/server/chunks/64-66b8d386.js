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

const index = 64;
const component = async () => (await import('./_page.svelte-1ac892bd.js')).default;
const file = '_app/immutable/components/pages/notes/maths/Integrals/Evaluation of definite integrals by substitution/_page.svelte-8eecd6ff.js';
const imports = ["_app/immutable/components/pages/notes/maths/Integrals/Evaluation of definite integrals by substitution/_page.svelte-8eecd6ff.js","_app/immutable/chunks/index-4bc03959.js","_app/immutable/chunks/stores-c5dfff84.js","_app/immutable/chunks/index-274f5047.js","_app/immutable/chunks/stores-0ec56a92.js","_app/immutable/chunks/singletons-ea1f1619.js","_app/immutable/modules/pages/notes/maths/Integrals/Evaluation of definite integrals by substitution/_page.js-4bd45e04.js","_app/immutable/chunks/index-35a671a5.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/_page-dc264b7f.js"];
const stylesheets = ["_app/immutable/assets/Practice-ceaad90d.css","_app/immutable/assets/Message-1e964222.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=64-66b8d386.js.map
