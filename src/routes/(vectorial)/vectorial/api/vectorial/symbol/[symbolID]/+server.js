// @ts-nocheck
import { initializeNewSymbol } from '$lib/vectorial/models/vectorial/symbol';
import { getDBCollection } from '$lib/vectorial/server/mongo';
import { ObjectId } from 'mongodb';
import { error } from '@sveltejs/kit';
export async function GET({url, params, request, locals}) {
    const symbolID = params.symbolID;
    const symbolsCollection = await getDBCollection('symbols');
    const symbol = await symbolsCollection.findOne({symbolID});
    if(!symbol) {
        return error(404, 'Symbol not found.')
    }
    return new Response(JSON.stringify(symbol), {status: 200})
}
export async function POST({url, params, request, locals}) {
    if(!locals.user) {
        return error(403, 'Unauthorized')
    }
    const publicID = locals.user.publicID;
    const {title, description, category, image, permission} = await request.json();
    const symbolsCollection = await getDBCollection('symbols');
    const count = await symbolsCollection.countDocuments({publicID});
    const newSymbol = initializeNewSymbol(publicID, title, description, category, image, permission, count);
    const confirm = await symbolsCollection.insertOne(newSymbol);
    if(!confirm.acknowledged) {
        return error(500, 'Failed')
    }
    return new Response(JSON.stringify({id: newSymbol.symbolID}), {status: 200})
}