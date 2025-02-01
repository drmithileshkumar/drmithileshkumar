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

const index = 192;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BOea0JI9.js')).default;
const universal_id = "src/routes/(general)/[publicID]/+page.js";
const server_id = "src/routes/(general)/[publicID]/+page.server.js";
const imports = ["_app/immutable/nodes/192.Dewk4QkC.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.TT61c9Gi.js","_app/immutable/chunks/await_block.CbrxiIvw.js","_app/immutable/chunks/index.Dipn8n_a.js","_app/immutable/chunks/each.Dw7b1pvy.js","_app/immutable/chunks/Card.D-OaqPor.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/ActionIcons.DRhTvYcM.js","_app/immutable/chunks/classAdderBuilder.uY3NaTMq.js","_app/immutable/chunks/SmuiElement.Ds45l3Bo.js","_app/immutable/chunks/Button.CvLQu4B8.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.8rjYrLoK.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/CommonLabel.B6ezwvbq.js","_app/immutable/chunks/TabBar.Cj-ysm2N.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/stores.CZO3ygXh.js","_app/immutable/chunks/entry.9fiABkYg.js","_app/immutable/chunks/index.3B1h_P5q.js","_app/immutable/chunks/Actions.Bskv2kE_.js","_app/immutable/chunks/Cell.B4WKLoLg.js","_app/immutable/chunks/Head.Bm0tE9kg.js","_app/immutable/chunks/Subheader.DfAt7dW7.js","_app/immutable/chunks/stores.D4EbrjdR.js","_app/immutable/chunks/qrcode.DMMw8QnF.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/forms.BB6qxRsV.js","_app/immutable/chunks/Textfield.Cg0mCM86.js","_app/immutable/chunks/ContextFragment.BAXgXz1S.js","_app/immutable/chunks/NotchedOutline.4lVxqXYp.js","_app/immutable/chunks/Suffix.CwiESjP5.js","_app/immutable/chunks/Input.B681raqh.js"];
const stylesheets = ["_app/immutable/assets/192.otlvMSUs.css","_app/immutable/assets/GenerateQR.D6knITcl.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=192-pv5GBcnk.js.map
