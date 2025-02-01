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

const index = 225;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DUV31PtY.js')).default;
const server_id = "src/routes/(vectorial)/vectorial/(nonapp)/auth/+page.server.js";
const imports = ["_app/immutable/nodes/225.DVk2mP0r.js","_app/immutable/chunks/scheduler.TT61c9Gi.js","_app/immutable/chunks/index.Dipn8n_a.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/Button.CvLQu4B8.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.8rjYrLoK.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/SmuiElement.Ds45l3Bo.js","_app/immutable/chunks/CommonLabel.B6ezwvbq.js","_app/immutable/chunks/Set.9cxeQvqD.js","_app/immutable/chunks/index.3B1h_P5q.js","_app/immutable/chunks/each.Dw7b1pvy.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/ContextFragment.BAXgXz1S.js","_app/immutable/chunks/Text.bax8j1Xe.js","_app/immutable/chunks/Card.D-OaqPor.js","_app/immutable/chunks/ActionIcons.DRhTvYcM.js","_app/immutable/chunks/classAdderBuilder.uY3NaTMq.js","_app/immutable/chunks/Actions.Bskv2kE_.js","_app/immutable/chunks/Textfield.Cg0mCM86.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/NotchedOutline.4lVxqXYp.js","_app/immutable/chunks/Suffix.CwiESjP5.js","_app/immutable/chunks/Input.B681raqh.js","_app/immutable/chunks/forms.B-Pau_6y.js","_app/immutable/chunks/entry.D5-6LlTH.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/stores.D9xphP4Y.js","_app/immutable/chunks/stores.CiGwCTFt.js","_app/immutable/chunks/GenerateQR.CEZk8GI9.js","_app/immutable/chunks/qrcode.DMMw8QnF.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js"];
const stylesheets = ["_app/immutable/assets/225.yFWgH1Ne.css","_app/immutable/assets/GenerateQR.DeaYE3wH.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=225-DyH6-8ho.js.map
