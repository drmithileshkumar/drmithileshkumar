import { g as getDBCollection } from './mongo-wE_Ub8ur.js';
import { e as error } from './index-oXbhYwP7.js';
import { ObjectId } from 'mongodb';

async function GET({ locals, params, request }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  locals.user.publicID;
  const questionsCollection = await getDBCollection("questions");
  let questions = await questionsCollection.find({}).toArray();
  if (!questions) {
    questions = [];
  }
  return new Response(JSON.stringify(questions), { status: 200 });
}
async function POST({ locals, params, request }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  locals.user.publicID;
  const question = await request.json();
  const questionsCollection = await getDBCollection("questions");
  const confirm = await questionsCollection.insertOne({ ...question });
  if (!confirm.acknowledged) {
    return error(400, "Failed!");
  }
  return new Response("Success", { status: 200 });
}
async function PUT({ locals, params, request }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  locals.user.publicID;
  const { question } = await request.json();
  let _id = question._id;
  let questionsCollection = await getDBCollection("questions");
  let confirm = await questionsCollection.updateOne({ _id: new ObjectId(_id) }, {
    $set: {
      question: question.question,
      answer: question.answer,
      answered: true
    }
  });
  if (!confirm.acknowledged) {
    return error(400, "Failed!");
  }
  return new Response("Success", { status: 200 });
}

export { GET, POST, PUT };
//# sourceMappingURL=_server-j1bG-Roq.js.map
