//@ts-nocheck
import {redirect} from '@sveltejs/kit';
export async function load({parent, fetch, params, url}) {
    if(!(url.host === 'drmithileshkumar.com' || url.host === 'localhost:5173' || url.host === 'localhost:4173' || url.host === 'localhost:3000')) {
        redirect(301, `https://drmithileshkumar.com`);
    }
	const { user } = await parent();
    if( !user ) redirect(301, '/auth');
    
    let publicID = user.publicID;
	
	let res = await fetch(`/api/assignments`);
	let assignments = await res.json();
	
	// console.log('publici..D', publicID)
    return {
        assignments
    }
}
