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
const component = async () => component_cache ??= (await import('./_page.svelte-L4qKr8k5.js')).default;
const server_id = "src/routes/(general)/auth/+page.server.js";
const imports = ["_app/immutable/nodes/21.blNa2qng.js","_app/immutable/chunks/scheduler.DPwfdX_H.js","_app/immutable/chunks/index.CwTeKo4T.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/Button.CDNCVR8K.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.Cu_Zdxz6.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/SmuiElement.amOlfGzn.js","_app/immutable/chunks/CommonLabel.DNU2POZi.js","_app/immutable/chunks/Set.CHKM2whk.js","_app/immutable/chunks/index.BSKKeNIs.js","_app/immutable/chunks/each.4xuuRGm3.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/ContextFragment.TdgKGuiF.js","_app/immutable/chunks/Text.Bgy-oeM6.js","_app/immutable/chunks/Card.DJrmTOx1.js","_app/immutable/chunks/ActionIcons.CrNiNf7s.js","_app/immutable/chunks/classAdderBuilder.7IPfzeGa.js","_app/immutable/chunks/Actions.O4TtXVIo.js","_app/immutable/chunks/Textfield.Ue5XCL7r.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/NotchedOutline.Bdv_o-Ij.js","_app/immutable/chunks/Suffix.D0Vdk9Ki.js","_app/immutable/chunks/Input.UWW7WJKp.js","_app/immutable/chunks/entry.iIuJJAWT.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/stores.BuWEvvX0.js","_app/immutable/chunks/stores.D_oEcuB4.js","_app/immutable/chunks/qrcode.DMMw8QnF.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js"];
const stylesheets = ["_app/immutable/assets/21.k9jPe_RO.css","_app/immutable/assets/GenerateQR.D6knITcl.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=21-DHbCwkvf.js.map
