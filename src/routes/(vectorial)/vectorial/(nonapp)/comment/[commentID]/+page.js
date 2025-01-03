//@ts-nocheck
import {redirect} from '@sveltejs/kit';
export async function load({parent, fetch, params, url}) {
    if(!(url.host === 'drmithileshkumar.com/' || url.host === 'localhost:5173' || url.host === 'localhost:4173' || url.host === 'localhost:3001')) {
        redirect(301, `https://drmithileshkumar.com/`);
    }
	let commentID = params.commentID;
	
    let urlink = `/vectorial/api/comment/${commentID}`;
    let res = await fetch(urlink);
	
    if(!res.ok) {
		console.log('redirected...')
        redirect(301, `/`);
    }
    let comment = await res.json();
    return {
        comment
    }
}
