import { r as redirect } from './index-oXbhYwP7.js';

async function load({ locals }) {
  if (locals.user)
    throw redirect(307, `/${locals.user.publicID}`);
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

const index = 31;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-EmEoHXdE.js')).default;
const server_id = "src/routes/(general)/auth/+page.server.js";
const imports = ["_app/immutable/nodes/31.vAuMyM69.js","_app/immutable/chunks/scheduler.f-IiUdrl.js","_app/immutable/chunks/index.7r8AOLel.js","_app/immutable/chunks/globals.0cDDIVm6.js","_app/immutable/chunks/Button.yhNGWFxw.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/classAdderBuilder.Fy7yNOSN.js","_app/immutable/chunks/dispatch.yxiIpicU.js","_app/immutable/chunks/Ripple.NcGtzyi_.js","_app/immutable/chunks/ponyfill.fC1f8UiH.js","_app/immutable/chunks/CommonLabel.P_tal_28.js","_app/immutable/chunks/Text.9kbR9nK2.js","_app/immutable/chunks/index.dbCRPIkP.js","_app/immutable/chunks/each.JwugYeo-.js","_app/immutable/chunks/keyboard.3eMe4_La.js","_app/immutable/chunks/ContextFragment.kOMcoY2M.js","_app/immutable/chunks/Card.N1WqjGNp.js","_app/immutable/chunks/ActionIcons.1m99DklS.js","_app/immutable/chunks/Actions.RQdinmQK.js","_app/immutable/chunks/Textfield.WTyLk0Yn.js","_app/immutable/chunks/prefixFilter.eMlqEcSK.js","_app/immutable/chunks/NotchedOutline.zHBbhpSu.js","_app/immutable/chunks/Suffix.r_K4fOy9.js","_app/immutable/chunks/entry.kQEOWLMw.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/stores.DZ6njMbC.js","_app/immutable/chunks/stores.hUncZlGF.js","_app/immutable/chunks/GenerateQR.svelte_svelte_type_style_lang.ON05huu6.js","_app/immutable/chunks/_commonjsHelpers.5-cIlDoe.js"];
const stylesheets = ["_app/immutable/assets/31.g0y58Mqt.css","_app/immutable/assets/GenerateQR.9NWcq5LS.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=31-26Cj1hsa.js.map
