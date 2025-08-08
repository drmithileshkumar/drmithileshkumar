import { r as redirect } from './index-DzcLzHBX.js';

async function load({ locals }) {
}
const actions = {
  logout: async ({ cookies, locals }) => {
    cookies.delete("jwt", { path: "/" });
    locals.user = null;
    redirect(300, "/auth");
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

const index = 231;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CxOuUYdM.js')).default;
const server_id = "src/routes/(vectorial)/vectorial/(nonapp)/auth/+page.server.js";
const imports = ["_app/immutable/nodes/231.BddAIqvT.js","_app/immutable/chunks/BurqNfsS.js","_app/immutable/chunks/Bb2ET71N.js","_app/immutable/chunks/D0QH3NT1.js","_app/immutable/chunks/BfK1IohI.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/Cu6yBgIM.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/DvkXah-i.js","_app/immutable/chunks/Be3puNKC.js","_app/immutable/chunks/D3ZpebQD.js","_app/immutable/chunks/BfFMFjDh.js","_app/immutable/chunks/ClPiHlaF.js","_app/immutable/chunks/CL3LU1u3.js","_app/immutable/chunks/CQl02eUe.js","_app/immutable/chunks/k52UdqEd.js","_app/immutable/chunks/hXgwcGuw.js","_app/immutable/chunks/CZxZ_Ggc.js","_app/immutable/chunks/5EPmrkDF.js","_app/immutable/chunks/Db1VqRGF.js","_app/immutable/chunks/7GMyLcaQ.js","_app/immutable/chunks/OhiPYEKz.js","_app/immutable/chunks/B2itOGzR.js","_app/immutable/chunks/XQX0mffV.js","_app/immutable/chunks/D62dlhBv.js","_app/immutable/chunks/SbCi4zDh.js","_app/immutable/chunks/trmIJT0m.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/CAHFcKM4.js","_app/immutable/chunks/DLclD3It.js","_app/immutable/chunks/CNxf5tnu.js","_app/immutable/chunks/BfhgcuBK.js","_app/immutable/chunks/BosuxZz1.js"];
const stylesheets = ["_app/immutable/assets/GenerateQR.DeaYE3wH.css","_app/immutable/assets/231.yFWgH1Ne.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=231-Cw5rVT7E.js.map
