import { r as redirect } from './index-DzcLzHBX.js';

async function load$1({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    throw redirect(301, `https://drmithileshkumar.com`);
  }
  const { user } = await parent();
  if (!user) throw redirect(301, "/auth");
  let publicID = user.publicID;
  let resuser = await fetch(`/api/${publicID}`);
  let resuserj = await resuser.json();
  let res1 = await fetch(`/api/${publicID}/profilepic`);
  let res2 = await fetch(`/api/${publicID}/bannerpic`);
  let profilepicData = await res1.blob();
  let bannerpicData = await res2.blob();
  let active = void 0;
  return {
    currentUser: resuserj.user,
    currentUserDetail: resuserj.userDetail,
    profilepicData,
    bannerpicData,
    active
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load$1
});

async function load({ locals }) {
  if (!locals.user) throw redirect(307, `/`);
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

const index = 198;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CWHtRf0L.js')).default;
const universal_id = "src/routes/(general)/[publicID]/+page.js";
const server_id = "src/routes/(general)/[publicID]/+page.server.js";
const imports = ["_app/immutable/nodes/198.DjuYZixl.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BxVy82MC.js","_app/immutable/chunks/B4GwxtWi.js","_app/immutable/chunks/DonhawEw.js","_app/immutable/chunks/B_pay6SI.js","_app/immutable/chunks/DULwcJ7d.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/DnCrujO_.js","_app/immutable/chunks/CkJoemvl.js","_app/immutable/chunks/eknKW2my.js","_app/immutable/chunks/-wh8JMbe.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/BpvBUywO.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/Dsb-COfq.js","_app/immutable/chunks/BfF_svVy.js","_app/immutable/chunks/OhiPYEKz.js","_app/immutable/chunks/DpCbmEWb.js","_app/immutable/chunks/BzXXzIRA.js","_app/immutable/chunks/CGERInoT.js","_app/immutable/chunks/bVNFjs_J.js","_app/immutable/chunks/oA00ZU7M.js","_app/immutable/chunks/CMAIDTyj.js","_app/immutable/chunks/LmmKzvCC.js","_app/immutable/chunks/DgV-wMNa.js","_app/immutable/chunks/BfhgcuBK.js","_app/immutable/chunks/BosuxZz1.js","_app/immutable/chunks/sWqrGECm.js","_app/immutable/chunks/B8cuI8-5.js","_app/immutable/chunks/DjO997wJ.js","_app/immutable/chunks/DFnl3igp.js","_app/immutable/chunks/F17igeRL.js","_app/immutable/chunks/BPjx_-DE.js"];
const stylesheets = ["_app/immutable/assets/198.otlvMSUs.css","_app/immutable/assets/GenerateQR.D6knITcl.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=198-BXLR5k0i.js.map
