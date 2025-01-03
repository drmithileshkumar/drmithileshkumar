//@ts-nocheck
import {redirect} from '@sveltejs/kit';
export async function load({parent, fetch, params, url}) {
    if(!(url.host === 'drmithileshkumar.com/' || url.host === 'localhost:5173' || url.host === 'localhost:4173' || url.host === 'localhost:3001')) {
        redirect(301, `https://drmithileshkumar.com/`);
    }
    const {user} = await parent();
    // if(!user) {
    //     alert('No user')
    //     throw redirect(307, '/login');
    // }
    let subscription = null;
    if(user) {
        let res = await fetch(`/vectorial/api/subscription`);
        subscription = await res.json();
    }
    return {
        subscription
    }
    
}
