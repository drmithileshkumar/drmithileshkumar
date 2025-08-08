import { r as redirect } from './index-DzcLzHBX.js';

async function load({ locals }) {
  if (locals.user) redirect(307, `/${locals.user.publicID}`);
}
const actions = {
  logout: async ({ cookies, locals }) => {
    cookies.delete("jwt", { path: "/" });
    locals.user = null;
  }
  // save: async ({ cookies, locals, request }) => {
  // 	if (!locals.user) throw error(401);
  // 	const data = await request.formData();
  // 	const user = {
  // 		username: data.get('username'),
  // 		email: data.get('email'),
  // 		password: data.get('password'),
  // 		image: data.get('image'),
  // 		bio: data.get('bio')
  // 	};
  // 	const body = await api.put('user', { user }, locals.user.token);
  // 	if (body.errors) return fail(400, body.errors);
  // 	const value = btoa(JSON.stringify(body.user));
  // 	cookies.set('jwt', value, { path: '/' });
  // 	locals.user = body.user;
  // }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 263;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DRP6iYxF.js')).default;
const server_id = "src/routes/(vectorial)/vectorial/login/+page.server.js";
const imports = ["_app/immutable/nodes/263.FyqViVCW.js","_app/immutable/chunks/BurqNfsS.js","_app/immutable/chunks/Bb2ET71N.js","_app/immutable/chunks/SbCi4zDh.js","_app/immutable/chunks/trmIJT0m.js","_app/immutable/chunks/BfFMFjDh.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/CAHFcKM4.js","_app/immutable/chunks/DLclD3It.js","_app/immutable/chunks/CNxf5tnu.js","_app/immutable/chunks/BfK1IohI.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/Cu6yBgIM.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/DvkXah-i.js","_app/immutable/chunks/BfhgcuBK.js","_app/immutable/chunks/BosuxZz1.js","_app/immutable/chunks/CjLc2JX5.js","_app/immutable/chunks/ClPiHlaF.js"];
const stylesheets = ["_app/immutable/assets/GenerateQR.DeaYE3wH.css","_app/immutable/assets/263.BSHKxfaI.css","_app/immutable/assets/Label.B4URfl77.css","_app/immutable/assets/SegmentedButton.uIc266ni.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=263-kGw4DHuv.js.map
