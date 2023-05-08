//@ts-nocheck
/** @type {import('./$types').LayoutServerLoad} */
export function load({ locals }) {
	return {
		user: locals.user && {
            publicID: locals.user.publicID,
            name: locals.user.name,
            phone: locals.user.phone,
            profile: locals.user.profile,
            likes: locals.user.likes
		}
	};
}