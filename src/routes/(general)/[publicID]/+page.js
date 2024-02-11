//@ts-nocheck
import {redirect} from '@sveltejs/kit';
export async function load({parent, fetch, params, url}) {
    if(!(url.host === 'drmithileshkumar.com' || url.host === 'localhost:5173' || url.host === 'localhost:4173' || url.host === 'localhost:3000')) {
        redirect(301, `https://drmithileshkumar.com`);
    }
	const { user } = await parent();
    if( !user ) redirect(301, '/auth');
    
    let publicID = user.publicID;
	let resuser = await fetch(`/api/${publicID}`)
    
	let resuserj = await resuser.json()
	let res1 = await fetch(`/api/${publicID}/profilepic`);
	let res2 = await fetch(`/api/${publicID}/bannerpic`);
	let profilepicData = await res1.blob();
	let bannerpicData = await res2.blob();
	let active = undefined
	// console.log('publici..D', publicID)
    return {
        currentUser: resuserj.user, currentUserDetail: resuserj.userDetail, profilepicData, bannerpicData, active
    }
}
