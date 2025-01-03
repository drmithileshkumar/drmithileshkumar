//@ts-nocheck
import { getDBCollection } from '$lib/vectorial/server/mongo';
import { ObjectId } from 'mongodb';
import { error } from '@sveltejs/kit';
export async function POST({url, params, request, locals}) {
    if(!locals.user) {
        return error(401, 'Unauthorized')
    }
    const publicID = locals.user.publicID;
    const drawingsCollection = await getDBCollection('drawings');
    let {drawingID, permission} = await request.json();
    // const projection = {title: 1, tags: 1, teaser: 1, timestamp: 1, author: 1, coverimage: 1, drawingId: 1}
    // const drawings = await drawingsCollection.find({version: "Final", status: "Approved"}).project(projection).toArray();
    const confirm = await drawingsCollection.updateOne({publicID, drawingID}, {$set: {permission}})
    if(!confirm.acknowledged) {
        return error(504, 'Failed to change permission')
    }
    return new Response("Success")
}