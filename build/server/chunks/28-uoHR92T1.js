import { r as redirect } from './index-oXbhYwP7.js';

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

const index = 28;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Y4p7BsTq.js')).default;
const server_id = "src/routes/(general)/auth/+page.server.js";
const imports = ["_app/immutable/nodes/28._L5ZgOXh.js","_app/immutable/chunks/scheduler.wYmonAyn.js","_app/immutable/chunks/index.AwdIdbL-.js","_app/immutable/chunks/globals.0cDDIVm6.js","_app/immutable/chunks/Button.UrzfluKE.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/classAdderBuilder.yqNPMMYB.js","_app/immutable/chunks/dispatch.YktQzwJT.js","_app/immutable/chunks/Ripple._faPHWDK.js","_app/immutable/chunks/keyboard.3eMe4_La.js","_app/immutable/chunks/index.KLghjZkg.js","_app/immutable/chunks/each.x_SzhXRZ.js","_app/immutable/chunks/ContextFragment.3DSb6PCq.js","_app/immutable/chunks/Card.Sl11uEgJ.js","_app/immutable/chunks/ActionIcons.IGfvHpx2.js","_app/immutable/chunks/Actions.53BRNRwA.js","_app/immutable/chunks/Textfield.k0_1cLfF.js","_app/immutable/chunks/prefixFilter.eMlqEcSK.js","_app/immutable/chunks/Suffix.h4xlcHsG.js","_app/immutable/chunks/entry.g0pxKYQm.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/stores.oULeJHlH.js","_app/immutable/chunks/stores.7oE78v3q.js","_app/immutable/chunks/_commonjsHelpers.5-cIlDoe.js"];
const stylesheets = ["_app/immutable/assets/28.YxkjEtjh.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=28-uoHR92T1.js.map
