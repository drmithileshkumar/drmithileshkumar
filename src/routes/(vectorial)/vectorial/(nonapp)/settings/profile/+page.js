import {redirect} from '@sveltejs/kit';
export async function load({parent, fetch, params, url}) {
    if(!(url.host === 'drmithileshkumar.com/vectorial' || url.host === 'localhost:5173' || url.host === 'localhost:4173' || url.host === 'localhost:3003')) {
        redirect(301, `https://drmithileshkumar.com/vectorial`);
    }
    const {user} = await parent();
    // console.log('from parent', user, userDetail)
    if(!user) {
        redirect(301, `/`);
    }
    // let userData = await res.json();
    let res = await fetch(`/api/userDetail`);
    let userDetail = await res.json();
    return {
        userDetail
    }
}