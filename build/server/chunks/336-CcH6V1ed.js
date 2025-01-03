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

const index = 336;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CZcDLOe-.js')).default;
const universal_id = "src/routes/(general)/[publicID]/+page.js";
const server_id = "src/routes/(general)/[publicID]/+page.server.js";
const imports = ["_app/immutable/nodes/336.D2A450Bi.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DhWV7ypx.js","_app/immutable/chunks/await_block.BtwrhU9A.js","_app/immutable/chunks/index.V8m0JAxO.js","_app/immutable/chunks/each.CgqZEEeH.js","_app/immutable/chunks/Card.aqY14fMy.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/SmuiElement.DFYghDnT.js","_app/immutable/chunks/ActionIcons.C8XP0smU.js","_app/immutable/chunks/classAdderBuilder.BdbN_yhi.js","_app/immutable/chunks/Button.DTp-CPPF.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.BXwXYlkv.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/CommonLabel.DjfWW61c.js","_app/immutable/chunks/TabBar.B8PFant6.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/stores.DFCiwoiL.js","_app/immutable/chunks/entry.B4hIrfLx.js","_app/immutable/chunks/index.D70FGJSe.js","_app/immutable/chunks/Actions.RH1KNkR0.js","_app/immutable/chunks/Cell.CYWKduC9.js","_app/immutable/chunks/Head.u4wF4H_u.js","_app/immutable/chunks/Subheader.DnAlchfb.js","_app/immutable/chunks/stores.Bj90LH9q.js","_app/immutable/chunks/qrcode.DMMw8QnF.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/forms.1cpGhEeZ.js","_app/immutable/chunks/Textfield.CC7q94do.js","_app/immutable/chunks/ContextFragment.BkOyIpIy.js","_app/immutable/chunks/NotchedOutline.DR6lqMTd.js","_app/immutable/chunks/Suffix.D515sgXS.js","_app/immutable/chunks/Input.-D2mZesD.js"];
const stylesheets = ["_app/immutable/assets/336.otlvMSUs.css","_app/immutable/assets/GenerateQR.D6knITcl.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=336-CcH6V1ed.js.map
