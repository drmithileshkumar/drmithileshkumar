//@ts-nocheck
import {redirect} from '@sveltejs/kit';
export async function load({parent, fetch, params, url}) {
    if(!(url.host === 'drmithileshkumar.com/' || url.host === 'localhost:5173' || url.host === 'localhost:4173' || url.host === 'localhost:3001')) {
        redirect(301, `https://drmithileshkumar.com/`);
    }
	console.log('Loading user details...')
    
    let publicID = params.publicID;
	let resuser = await fetch(`/vectorial/api/${publicID}`)
    
	let {user, userDetail} = await resuser.json()
	let res1 = await fetch(`/vectorial/api/${publicID}/profilepic`);
	let res2 = await fetch(`/vectorial/api/${publicID}/bannerpic`);
	let profilepicData = await res1.blob();
	let bannerpicData = await res2.blob();
	let active = undefined
	// console.log(userDetail)
    return {
        currentUser: user, currentUserDetail: userDetail, profilepicData, bannerpicData, active
    }
}
