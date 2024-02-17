// @ts-nocheck
import {getDBCollection} from '$lib/server/mongo'
import {error} from '@sveltejs/kit';
import { ObjectId } from 'mongodb';
import { studentList } from './studentList.js';

export async function GET({locals, params, url, request}) {
    if(!locals.user) {
        return error(401, 'Unauthorized');
    }
    let courseID = url.searchParams.get('courseID');
    let studentID = url.searchParams.get('studentID');
    const publicID = locals.user.publicID;
    const registrationsCollection = await getDBCollection('registrations');
    let registration = await registrationsCollection.findOne({courseID, publicID, studentID});
    if(!registration) {
        registration = {}
    }
    return new Response(JSON.stringify(registration), {status: 200});
}
export async function POST({locals, params, request}) {
    if(!locals.user) {
        return error(401, 'Unauthorized');
    }
    const publicID = locals.user.publicID;
    const { studentID, session, courseID} = await request.json()

    const registrationsCollection = await getDBCollection('registrations');
    let registrationExists = await registrationsCollection.findOne({publicID, studentID, session, courseID});
    if(registrationExists) {
        return error(409, 'Submission exists!') 
    }
    let verified = studentList[courseID].indexOf(studentID) !== -1;
    let creationTimestamp = Date.now()
    const confirm = await registrationsCollection.insertOne({publicID, studentID, session, courseID, verified, creationTimestamp});
    if(!confirm.acknowledged) {
        return error(400, 'Failed!') 
    }
    
    return new Response('Success', {status: 200})
}
export async function PUT({locals, params, request}) {
    if(!locals.user) {
        return error(401, 'Unauthorized');
    }
    const publicID = locals.user.publicID;
    const { registration } = await request.json();
    let _id = registration._id;
    let registrationsCollection = await getDBCollection('registrations');
    let confirm = await registrationsCollection.updateOne({_id: new ObjectId(_id)}, { $set: {registration: registration.registration,
        answer: registration.answer,
        answered: true}
        
    });
    if(!confirm.acknowledged) {
        return error(400, 'Failed!') 
    }
    
    
    return new Response('Success', {status: 200})
}