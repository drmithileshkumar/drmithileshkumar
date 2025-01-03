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

const index = 22;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CRPzWPrg.js')).default;
const server_id = "src/routes/(general)/auth/+page.server.js";
const imports = ["_app/immutable/nodes/22.jEiqWLoB.js","_app/immutable/chunks/scheduler.DDynXUZ0.js","_app/immutable/chunks/index.DnYThXIE.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/Button.BEGHJ0rg.js","_app/immutable/chunks/SmuiElement.niKK9SEg.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.C-DtqsEB.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/CommonLabel.Dj7nqIzk.js","_app/immutable/chunks/Set.DVORgxOl.js","_app/immutable/chunks/index.BNQMCvwE.js","_app/immutable/chunks/each.D0FuIOMI.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/ContextFragment.phj6Xvfp.js","_app/immutable/chunks/Text.BsyenGki.js","_app/immutable/chunks/Card.DRC2xUqP.js","_app/immutable/chunks/ActionIcons.rKvm5GeB.js","_app/immutable/chunks/classAdderBuilder.C1qMRX2R.js","_app/immutable/chunks/Actions.CPAOKVg7.js","_app/immutable/chunks/Textfield.Dnm2l9Fe.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/NotchedOutline.DFah64gX.js","_app/immutable/chunks/Suffix.DhiO64fn.js","_app/immutable/chunks/Input.Dk7SfQmK.js","_app/immutable/chunks/entry.BIhX438V.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/stores.CyuxF9br.js","_app/immutable/chunks/stores.C4YY6XNo.js","_app/immutable/chunks/qrcode.DMMw8QnF.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js"];
const stylesheets = ["_app/immutable/assets/22.k9jPe_RO.css","_app/immutable/assets/GenerateQR.D6knITcl.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=22-Cw1_nSex.js.map
