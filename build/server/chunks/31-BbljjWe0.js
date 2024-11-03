import { r as redirect } from './index-DzcLzHBX.js';

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
const component = async () => component_cache ??= (await import('./_page.svelte-RHZVSNz7.js')).default;
const server_id = "src/routes/(general)/auth/+page.server.js";
const imports = ["_app/immutable/nodes/31.DLfJxQpr.js","_app/immutable/chunks/scheduler.B1atsjBc.js","_app/immutable/chunks/index.DlO191gB.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/Button.bSgfoJ4g.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/classAdderBuilder.Dr_z-rwh.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.Cr2a8Emw.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/CommonLabel.CMa7DfzO.js","_app/immutable/chunks/Text.BzjTFEId.js","_app/immutable/chunks/index.DEfXOQ1n.js","_app/immutable/chunks/each.DRc7mzDe.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/ContextFragment.DcAkM7wy.js","_app/immutable/chunks/Card.BNwIWFu_.js","_app/immutable/chunks/ActionIcons.BB_MIeF4.js","_app/immutable/chunks/Actions.C-aWTNm3.js","_app/immutable/chunks/Textfield.1QNKFE03.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/NotchedOutline.CZi5LcBj.js","_app/immutable/chunks/Suffix.CV9ZjPQ-.js","_app/immutable/chunks/entry.BWlL8IRS.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/stores.BH93n1hl.js","_app/immutable/chunks/stores.moVKe_bz.js","_app/immutable/chunks/GenerateQR.svelte_svelte_type_style_lang.RPbvqASX.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js"];
const stylesheets = ["_app/immutable/assets/31.CDTLnwyq.css","_app/immutable/assets/GenerateQR.D01Zyrkt.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=31-BbljjWe0.js.map
