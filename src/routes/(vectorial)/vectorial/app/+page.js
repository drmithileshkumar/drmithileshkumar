//@ts-nocheck
import {redirect} from '@sveltejs/kit';
import { pageLoadState } from '$lib/vectorial/stores.js';
export async function load({parent, fetch, params, url}) {
    // if(!(url.host === 'drmithileshkumar.com/' || url.host === 'localhost:5173' || url.host === 'localhost:4173' || url.host === 'localhost:3001')) {
    //     redirect(301, `https://drmithileshkumar.com/`);
    // }
    pageLoadState.update((state) => false)
    // const {user} = await parent();
    // if(!user) {
    //     throw redirect(307, '/auth');
    // }
    // let res = await fetch('/vectorial/api/subscription');
    // let subStatus = await res.json();
    // if(!res.ok) {
        
    // }
    
    // if(subStatus.message !== 'Valid') {
        
    // }
    return {

    }
}