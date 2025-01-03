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

const index = 231;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-gGke9gi0.js')).default;
const server_id = "src/routes/(vectorial)/vectorial/login/+page.server.js";
const imports = ["_app/immutable/nodes/231.Bp-W0Gtd.js","_app/immutable/chunks/scheduler.DDynXUZ0.js","_app/immutable/chunks/index.DnYThXIE.js","_app/immutable/chunks/forms.n1xl1-No.js","_app/immutable/chunks/entry.BIhX438V.js","_app/immutable/chunks/index.BNQMCvwE.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/stores.CyuxF9br.js","_app/immutable/chunks/stores.5QGZ_kC1.js","_app/immutable/chunks/GenerateQR.CESLdMvq.js","_app/immutable/chunks/Button.BEGHJ0rg.js","_app/immutable/chunks/SmuiElement.niKK9SEg.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.C-DtqsEB.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/qrcode.DMMw8QnF.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/ripple.CjLc2JX5.js","_app/immutable/chunks/each.D0FuIOMI.js"];
const stylesheets = ["_app/immutable/assets/231.BSHKxfaI.css","_app/immutable/assets/Label.B4URfl77.css","_app/immutable/assets/SegmentedButton.uIc266ni.css","_app/immutable/assets/GenerateQR.DeaYE3wH.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=231-BOChPljC.js.map
