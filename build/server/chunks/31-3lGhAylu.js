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
const component = async () => component_cache ??= (await import('./_page.svelte-p-7axxQR.js')).default;
const server_id = "src/routes/(general)/auth/+page.server.js";
const imports = ["_app/immutable/nodes/31.tUzXqbzN.js","_app/immutable/chunks/scheduler.cQRDEcOs.js","_app/immutable/chunks/index.3X1eH1mp.js","_app/immutable/chunks/globals.0cDDIVm6.js","_app/immutable/chunks/Button.cWUa-4TA.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/classAdderBuilder.ijDhO6Jw.js","_app/immutable/chunks/dispatch.YktQzwJT.js","_app/immutable/chunks/Ripple.LbSITeNB.js","_app/immutable/chunks/CommonLabel._8WXK2jP.js","_app/immutable/chunks/Text.6GjLx8qv.js","_app/immutable/chunks/index.yZBYQTEr.js","_app/immutable/chunks/each.czemEVXE.js","_app/immutable/chunks/keyboard.3eMe4_La.js","_app/immutable/chunks/ContextFragment.rEZ75yrM.js","_app/immutable/chunks/Card.0VZDzDAB.js","_app/immutable/chunks/ActionIcons.Nzs3Qx8M.js","_app/immutable/chunks/Actions.2PCa3XnP.js","_app/immutable/chunks/Textfield.t13IoZv3.js","_app/immutable/chunks/prefixFilter.eMlqEcSK.js","_app/immutable/chunks/NotchedOutline.OKsDoYoq.js","_app/immutable/chunks/Suffix.3QTh0wJa.js","_app/immutable/chunks/entry.BFfPsFFT.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/stores.Acf16AgT.js","_app/immutable/chunks/stores.3l2-g5YS.js","_app/immutable/chunks/GenerateQR.svelte_svelte_type_style_lang.ON05huu6.js","_app/immutable/chunks/_commonjsHelpers.5-cIlDoe.js"];
const stylesheets = ["_app/immutable/assets/31.g0y58Mqt.css","_app/immutable/assets/GenerateQR.9NWcq5LS.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=31-3lGhAylu.js.map
