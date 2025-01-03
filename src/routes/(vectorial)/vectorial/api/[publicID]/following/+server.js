// @ts-nocheck
import { getDBCollection } from '$lib/vectorial/server/mongo'

import { ObjectId } from 'mongodb';
import {error} from '@sveltejs/kit';


/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({request, params, url, locals}) {
    let id = params.publicID;
    const usersCollection = await getDBCollection('users');
    let userData = await usersCollection.findOne({publicID: id});
    if(!userData) {
        return error(404, 'User not found');
    }
    let followingsCollection = await getDBCollection('followings');
    let following = await followingsCollection.find({publicID: id}).toArray();
    if(!following) {
        following = []
    }
    return new Response(JSON.stringify(following), {status: 200});
}
export async function POST({params, request, locals}) {
    let userExists = false;
    if(locals.user) userExists = true;
    if(!locals.user) {
        return error(401, 'Unauthorized');
    }
    let publicID = params.publicID
    const followingsCollection = await getDBCollection('followings')
    const followersCollection = await getDBCollection('followers')
    const confirm = await followingsCollection.updateOne({publicID: locals.user.publicID}, {$addToSet: {following: publicID}}, {upsert:true});
    const confirm1 = await followersCollection.updateOne({publicID: publicID}, {$addToSet: {followers: locals.user.publicID}}, {upsert:true});
    if(!confirm.acknowledged || !confirm1.acknowledged) {
        return error(400, 'Failed!') 
    }
    const userDetailsCollection = await getDBCollection('userDetails');
    const confirm2 = await userDetailsCollection.updateOne({publicID: locals.user.publicID}, {$inc: {"common.following": 1}})
    const confirm3 = await userDetailsCollection.updateOne({publicID: publicID}, {$inc: {"common.followers": 1}})
    return new Response("Success", {status: 200});
}
export async function PUT({params, request, locals}) {
    let userExists = false;
    if(locals.user) userExists = true;
    if(!locals.user) {
        return error(401, 'Unauthorized');
    }
    let publicID = params.publicID
    const followingsCollection = await getDBCollection('followings')
    const followersCollection = await getDBCollection('followers')
    const confirm = await followingsCollection.updateOne({publicID: locals.user.publicID}, {$pull: {following: publicID}}, {upsert:true});
    const confirm1 = await followersCollection.updateOne({publicID: publicID}, {$pull: {followers: locals.user.publicID}}, {upsert:true});
    if(!confirm.acknowledged || !confirm1.acknowledged) {
        return error(400, 'Failed!') 
    }
    const userDetailsCollection = await getDBCollection('userDetails');
    const confirm2 = await userDetailsCollection.updateOne({publicID: locals.user.publicID}, {$inc: {"common.following": -1}})
    const confirm3 = await userDetailsCollection.updateOne({publicID: publicID}, {$inc: {"common.followers": -1}})
    return new Response("Success", {status: 200});
}

