// @ts-nocheck
import { initializeNewSymbol } from '$lib/vectorial/models/vectorial/symbol';
import { getDBCollection } from '$lib/vectorial/server/mongo';
import { ObjectId } from 'mongodb';
import { error } from '@sveltejs/kit';
export async function GET({url, params, request, locals}) {
    const symbolsCollection = await getDBCollection('symbols');
    // const projection = {title: 1, tags: 1, teaser: 1, timestamp: 1, author: 1, coverimage: 1, symbolId: 1}
    // const symbols = await symbolsCollection.find({version: "Final", status: "Approved"}).project(projection).toArray();
    const symbols = await symbolsCollection.find({}).toArray();
    if(!symbols) {
        symbols = [];
    }
    return new Response(JSON.stringify(symbols))
}
export async function POST({url, params, request, locals}) {
    if(!locals.user) {
        return error(401, 'Unauthorized')
    }
    const publicID = locals.user.publicID;
    const {title, description, category, elements, defs, viewBox, permission} = await request.json();
    const symbolsCollection = await getDBCollection('symbols');
    const count = await symbolsCollection.countDocuments({publicID});
    const newSymbol = initializeNewSymbol(publicID, title, description, category, elements, defs, viewBox, permission, count);
    const confirm = await symbolsCollection.insertOne(newSymbol);
    if(!confirm.acknowledged) {
        return error(500, 'Failed')
    }
    return new Response(JSON.stringify({id: newSymbol.symbolID}), {status: 200})
}