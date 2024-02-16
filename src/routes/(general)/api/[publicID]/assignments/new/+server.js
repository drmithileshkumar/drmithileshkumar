// @ts-nocheck
import {getDBCollection} from '$lib/server/mongo'
import { initializeNewAssignment } from '$lib/models/assignment.js';
import {error} from '@sveltejs/kit';
import { ObjectId } from 'mongodb';


export async function POST({locals, params, request}) {
    if(!locals.user) {
        return error(401, 'Unauthorized');
    }
    const publicID = locals.user.publicID;
    const assignment = await request.json()

    const assignmentsCollection = await getDBCollection('assignments');
    let creationTimestamp = Date.now()
    const confirm = await assignmentsCollection.insertOne({...assignment, publicID});
    if(!confirm.acknowledged) {
        return error(400, 'Failed!') 
    }
    
    return new Response('Success', {status: 200})
}
