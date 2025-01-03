//@ts-nocheck
import { getDBCollection } from '$lib/vectorial/server/mongo';
import { ObjectId } from 'mongodb';
import { error } from '@sveltejs/kit';
export async function GET({url, params, request, locals}) {
    console.log(locals.user);
    if(!locals.user) {
        return error(401, 'Unauthorized')
    }
    const publicID = locals.user.publicID;
    let skip = url.searchParams.get('skip');
    if(!skip) skip = 0;
    const drawingsCollection = await getDBCollection('drawings');
    try {
        let drawings = [];
        // const projection = {title: 1, tags: 1, teaser: 1, timestamp: 1, author: 1, coverimage: 1, drawingId: 1}
        // const drawings = await drawingsCollection.find({version: "Final", status: "Approved"}).project(projection).toArray();
        drawings = await drawingsCollection.find({publicID}).sort({creationTimestamp:-1}).skip(Number(skip)).limit(10).toArray();
        if(!drawings) {
            drawings = [];
        }
        
        return new Response(JSON.stringify(drawings), {
            headers: {
                'Content-Type': 'application/json'
            },
            status: 200
        })
    } catch (err) {
        return error(500, 'Internal Server Error happened')
    }
    
}