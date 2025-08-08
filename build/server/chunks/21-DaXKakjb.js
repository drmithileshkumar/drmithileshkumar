import { r as redirect } from './index-DzcLzHBX.js';

async function load({ locals }) {
  if (locals.user) throw redirect(307, `/${locals.user.publicID}`);
}
const actions = {
  logout: async ({ cookies, locals }) => {
    cookies.delete("jwt", { path: "/" });
    locals.user = null;
    redirect(300, "/");
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

const index = 21;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Dq3vfxLN.js')).default;
const server_id = "src/routes/(general)/auth/+page.server.js";
const imports = ["_app/immutable/nodes/21.DQDPZFyH.js","_app/immutable/chunks/BurqNfsS.js","_app/immutable/chunks/Bb2ET71N.js","_app/immutable/chunks/D0QH3NT1.js","_app/immutable/chunks/BfK1IohI.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/Cu6yBgIM.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/DvkXah-i.js","_app/immutable/chunks/Be3puNKC.js","_app/immutable/chunks/D3ZpebQD.js","_app/immutable/chunks/BfFMFjDh.js","_app/immutable/chunks/ClPiHlaF.js","_app/immutable/chunks/CL3LU1u3.js","_app/immutable/chunks/CQl02eUe.js","_app/immutable/chunks/k52UdqEd.js","_app/immutable/chunks/hXgwcGuw.js","_app/immutable/chunks/CZxZ_Ggc.js","_app/immutable/chunks/5EPmrkDF.js","_app/immutable/chunks/Db1VqRGF.js","_app/immutable/chunks/7GMyLcaQ.js","_app/immutable/chunks/OhiPYEKz.js","_app/immutable/chunks/B2itOGzR.js","_app/immutable/chunks/XQX0mffV.js","_app/immutable/chunks/D62dlhBv.js","_app/immutable/chunks/CQgyvGlV.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/-mRYWD-K.js","_app/immutable/chunks/BgVZshQ4.js","_app/immutable/chunks/BfhgcuBK.js","_app/immutable/chunks/BosuxZz1.js"];
const stylesheets = ["_app/immutable/assets/21.k9jPe_RO.css","_app/immutable/assets/GenerateQR.D6knITcl.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=21-DaXKakjb.js.map
