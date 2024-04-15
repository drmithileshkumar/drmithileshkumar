import { r as redirect } from './index-oXbhYwP7.js';

async function load$1({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    throw redirect(301, `https://drmithileshkumar.com`);
  }
  const { user } = await parent();
  if (!user)
    throw redirect(301, "/auth");
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
  if (!locals.user)
    throw redirect(307, `/`);
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

const index = 309;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-QRHGIC5X.js')).default;
const universal_id = "src/routes/(general)/[publicID]/+page.js";
const server_id = "src/routes/(general)/[publicID]/+page.server.js";
const imports = ["_app/immutable/nodes/309.NPfBlP5s.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.f-IiUdrl.js","_app/immutable/chunks/index.7r8AOLel.js","_app/immutable/chunks/each.JwugYeo-.js","_app/immutable/chunks/Card.N1WqjGNp.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/classAdderBuilder.Fy7yNOSN.js","_app/immutable/chunks/ActionIcons.1m99DklS.js","_app/immutable/chunks/Button.yhNGWFxw.js","_app/immutable/chunks/dispatch.yxiIpicU.js","_app/immutable/chunks/Ripple.NcGtzyi_.js","_app/immutable/chunks/ponyfill.fC1f8UiH.js","_app/immutable/chunks/CommonLabel.P_tal_28.js","_app/immutable/chunks/TabBar.G-Xm_eA5.js","_app/immutable/chunks/prefixFilter.eMlqEcSK.js","_app/immutable/chunks/stores.fFz2gote.js","_app/immutable/chunks/entry.DTTuiARH.js","_app/immutable/chunks/index.dbCRPIkP.js","_app/immutable/chunks/Actions.RQdinmQK.js","_app/immutable/chunks/Cell.Z75sX33z.js","_app/immutable/chunks/Subheader.iMYKjBBi.js","_app/immutable/chunks/stores.hUncZlGF.js","_app/immutable/chunks/GenerateQR.svelte_svelte_type_style_lang.ON05huu6.js","_app/immutable/chunks/_commonjsHelpers.5-cIlDoe.js","_app/immutable/chunks/Textfield.WTyLk0Yn.js","_app/immutable/chunks/ContextFragment.kOMcoY2M.js","_app/immutable/chunks/NotchedOutline.zHBbhpSu.js","_app/immutable/chunks/Suffix.r_K4fOy9.js"];
const stylesheets = ["_app/immutable/assets/309.JNA92EYU.css","_app/immutable/assets/GenerateQR.9NWcq5LS.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=309-sWS9yu-v.js.map
