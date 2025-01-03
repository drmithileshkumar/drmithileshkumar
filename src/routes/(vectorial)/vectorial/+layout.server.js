// @ts-nocheck
/** @type {import('./$types').LayoutServerLoad} */
export function load({ locals }) {
      // console.log('layout..', locals)
	return {
		user: locals.user && {
                  publicID: locals.user.publicID,
                  name: locals.user.name,
                  phone: locals.user.phone,
                  profile: locals.user.profile,
                  banner: locals.user.banner
		}
	};
}