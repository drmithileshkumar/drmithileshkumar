//@ts-nocheck
import { browser } from '$app/environment';
import {redirect} from '@sveltejs/kit';
import { localGallery } from '$lib/vectorial/pages/vectorial/stores.js';
import { get } from 'svelte/store';
export const ssr = false;
console.log(ssr)
export async function load({fetch, params, url}) {
    if(!(url.host === 'drmithileshkumar.com/' || url.host === 'localhost:5173' || url.host === 'localhost:4173' || url.host === 'localhost:3001')) {
        redirect(301, `https://drmithileshkumar.com/`);
    }
    
    if(browser) {
        console.log("running in browser...")
        const newDrawings = [];
        let lg = get(localGallery);
        for(let i = 0; i < lg.length; i++) {
            const newDrawing = window.localStorage.getItem(lg[i])
            if(newDrawing) {
                // drawings = [...drawings, JSON.parse(newDrawing)]
                newDrawings.push(JSON.parse(newDrawing));
            }
        }
        console.log(newDrawings);
        // drawings = drawings;
        return {drawings: newDrawings}
    }
}