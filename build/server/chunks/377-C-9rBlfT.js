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

const index = 377;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-gGke9gi0.js')).default;
const server_id = "src/routes/(vectorial)/vectorial/login/+page.server.js";
const imports = ["_app/immutable/nodes/377.B1gufSR1.js","_app/immutable/chunks/scheduler.DhWV7ypx.js","_app/immutable/chunks/index.V8m0JAxO.js","_app/immutable/chunks/forms.1cpGhEeZ.js","_app/immutable/chunks/entry.B4hIrfLx.js","_app/immutable/chunks/index.D70FGJSe.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/stores.DFCiwoiL.js","_app/immutable/chunks/stores.BviFmk_c.js","_app/immutable/chunks/GenerateQR.BnqcHBJ5.js","_app/immutable/chunks/Button.DTp-CPPF.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/SmuiElement.DFYghDnT.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.BXwXYlkv.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/qrcode.DMMw8QnF.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/ripple.CjLc2JX5.js","_app/immutable/chunks/each.CgqZEEeH.js"];
const stylesheets = ["_app/immutable/assets/377.BSHKxfaI.css","_app/immutable/assets/Label.B4URfl77.css","_app/immutable/assets/SegmentedButton.uIc266ni.css","_app/immutable/assets/GenerateQR.DeaYE3wH.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=377-C-9rBlfT.js.map
