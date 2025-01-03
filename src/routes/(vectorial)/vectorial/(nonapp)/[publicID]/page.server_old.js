//@ts-nocheck
import {redirect} from '@sveltejs/kit';
export async function load({parent, fetch, params, url}) {
    if(!(url.host === 'drmithileshkumar.com/' || url.host === 'localhost:5173' || url.host === 'localhost:4173' || url.host === 'localhost:3001')) {
        redirect(301, `https://drmithileshkumar.com/`);
    }
    const {user} = await parent();
    if(!user) {
        redirect(307, '/login');
    }
    let publicID = params.publicID;
    let urlink = `/vectorial/api/subscription`;
    let res = await fetch(urlink);
    // if(!res.ok) {
	// 	console.log('Bad response')
    //     throw redirect(301, `/`)
    // }
    // let userData = await res.json();
    // let res1 = await fetch(`/vectorial/api/subscription`);
    let subscription = await res.json();
    return {
        subscription
    }
}
/** @type {import('./$types').Actions} */
export const actions = {
	logout: async ({ cookies, locals }) => {
		cookies.delete('jwt', { path: '/' });
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