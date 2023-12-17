import {redirect} from '@sveltejs/kit';
export async function load({fetch, params, url}) {
    if(!(url.host === 'drmithileshkumar.com' || url.host === 'localhost:5173' || url.host === 'localhost:4173' || url.host === 'localhost:3001')) {
        redirect(307, `https://drmithileshkumar.com${url.pathname}`);
    }
}