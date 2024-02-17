// @ts-nocheck
import {getDBCollection} from '$lib/server/mongo'
import { initializeNewQuestion } from '$lib/models/question.js';
import {error} from '@sveltejs/kit';
import { ObjectId } from 'mongodb';

export async function GET({locals, params, url, request}) {
    if(!locals.user) {
        return error(401, 'Unauthorized');
    }
    let courseName = url.searchParams.get('courseName')
    // console.log(courseName)
    const publicID = locals.user.publicID;
    const questionsCollection = await getDBCollection('questions');
    let questions = await questionsCollection.find({ $or : [{publicID, courseName}, {isPublic: true, courseName}]}).toArray();
    if(!questions) {
        questions = []
    }
    return new Response(JSON.stringify(questions), {status: 200});
}

export async function PUT({locals, params, request}) {
    if(!locals.user) {
        return error(401, 'Unauthorized');
    }
    const publicID = locals.user.publicID;
    const { question } = await request.json();
    let _id = question._id;
    let questionsCollection = await getDBCollection('questions');
    let confirm = await questionsCollection.updateOne({_id: new ObjectId(_id)}, { $set: {question: question.question,
        answer: question.answer,
        answered: true}
        
    });
    if(!confirm.acknowledged) {
        return error(400, 'Failed!') 
    }
    
    
    return new Response('Success', {status: 200})
}