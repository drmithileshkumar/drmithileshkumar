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
const imports = ["_app/immutable/nodes/231.DnMZ5lAb.js","_app/immutable/chunks/BxVy82MC.js","_app/immutable/chunks/DonhawEw.js","_app/immutable/chunks/D0QH3NT1.js","_app/immutable/chunks/-wh8JMbe.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/BpvBUywO.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/eknKW2my.js","_app/immutable/chunks/Dsb-COfq.js","_app/immutable/chunks/xXPrQvHR.js","_app/immutable/chunks/CGERInoT.js","_app/immutable/chunks/B_pay6SI.js","_app/immutable/chunks/CL3LU1u3.js","_app/immutable/chunks/DjO997wJ.js","_app/immutable/chunks/ByzYJqhI.js","_app/immutable/chunks/DULwcJ7d.js","_app/immutable/chunks/DnCrujO_.js","_app/immutable/chunks/CkJoemvl.js","_app/immutable/chunks/bVNFjs_J.js","_app/immutable/chunks/B8cuI8-5.js","_app/immutable/chunks/OhiPYEKz.js","_app/immutable/chunks/DFnl3igp.js","_app/immutable/chunks/F17igeRL.js","_app/immutable/chunks/BPjx_-DE.js","_app/immutable/chunks/sWqrGECm.js","_app/immutable/chunks/BzXXzIRA.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/DpCbmEWb.js","_app/immutable/chunks/DepGOsOm.js","_app/immutable/chunks/Iw70fiJP.js","_app/immutable/chunks/BfhgcuBK.js","_app/immutable/chunks/BosuxZz1.js"];
const stylesheets = ["_app/immutable/assets/GenerateQR.DeaYE3wH.css","_app/immutable/assets/231.yFWgH1Ne.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=231-B44VghmW.js.map
