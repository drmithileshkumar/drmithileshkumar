//@ts-nocheck
import {redirect} from '@sveltejs/kit';
import { pageLoadState } from '$lib/vectorial/stores.js';
export async function load({parent, fetch, params, url}) {
    if(!(url.host === 'drmithileshkumar.com' || url.host === 'localhost:5173' || url.host === 'localhost:4173' || url.host === 'localhost:3001')) {
        redirect(301, `https://drmithileshkumar.com`);
    }
    // const {user} = await parent();
    // if(!user) {
    //     throw redirect(307, '/auth');
    // }
    pageLoadState.update((state) => false)
    let skip = 0;
    // console.log('Loading drawings...')
    let res = await fetch(`/vectorial/api/${params.publicID}/drawings?skip=${skip}`);
    if(!res.ok) {
        redirect(301, `/`);
    }
    let drawings = await res.json();
    // console.log('Number of drawings ', drawings.length);
    return {
        drawings
    }
}