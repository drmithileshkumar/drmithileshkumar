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

const index = 200;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BiJ8vPKq.js')).default;
const server_id = "src/routes/(vectorial)/vectorial/(nonapp)/auth/+page.server.js";
const imports = ["_app/immutable/nodes/200.DWINeqGu.js","_app/immutable/chunks/scheduler.DDynXUZ0.js","_app/immutable/chunks/index.DnYThXIE.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/Button.BEGHJ0rg.js","_app/immutable/chunks/SmuiElement.niKK9SEg.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.C-DtqsEB.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/CommonLabel.Dj7nqIzk.js","_app/immutable/chunks/Set.DVORgxOl.js","_app/immutable/chunks/index.BNQMCvwE.js","_app/immutable/chunks/each.D0FuIOMI.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/ContextFragment.phj6Xvfp.js","_app/immutable/chunks/Text.BsyenGki.js","_app/immutable/chunks/Card.DRC2xUqP.js","_app/immutable/chunks/ActionIcons.rKvm5GeB.js","_app/immutable/chunks/classAdderBuilder.C1qMRX2R.js","_app/immutable/chunks/Actions.CPAOKVg7.js","_app/immutable/chunks/Textfield.Dnm2l9Fe.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/NotchedOutline.DFah64gX.js","_app/immutable/chunks/Suffix.DhiO64fn.js","_app/immutable/chunks/Input.Dk7SfQmK.js","_app/immutable/chunks/forms.n1xl1-No.js","_app/immutable/chunks/entry.BIhX438V.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/stores.CyuxF9br.js","_app/immutable/chunks/stores.5QGZ_kC1.js","_app/immutable/chunks/GenerateQR.CESLdMvq.js","_app/immutable/chunks/qrcode.DMMw8QnF.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js"];
const stylesheets = ["_app/immutable/assets/200.yFWgH1Ne.css","_app/immutable/assets/GenerateQR.DeaYE3wH.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=200-BggFZ0uH.js.map
