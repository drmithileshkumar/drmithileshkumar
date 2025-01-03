//@ts-nocheck
import {redirect} from '@sveltejs/kit';
export async function load({parent, fetch, params, url}) {
    if(!(url.host === 'drmithileshkumar.com/vectorial' || url.host === 'localhost:5173' || url.host === 'localhost:4173' || url.host === 'localhost:3003')) {
        redirect(301, `https://drmithileshkumar.com/vectorial`);
    }
    const response = await fetch(`/vectorial/api/${params.publicID}/invoices`);
    let invoices = await response.json();
        
    return {
        invoices
    }
}