import { g as getDBCollection } from './mongo-pMKKCQqF.js';
import { e as error } from './index-DzcLzHBX.js';
import { ObjectId } from 'mongodb';

async function GET({ locals, params, request }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  locals.user.publicID;
  const questionID = params.questionID;
  const questionsCollection = await getDBCollection("questions");
  let question = await questionsCollection.findOne({ _id: new ObjectId(questionID) });
  if (!question) {
    question = null;
  }
  return new Response(JSON.stringify(question), { status: 200 });
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
  const question = await request.json();
  let _id = question._id;
  let questionsCollection = await getDBCollection("questions");
  let confirm = await questionsCollection.updateOne({ _id: new ObjectId(_id) }, {
    $set: {
      statement: question.statement,
      optionA: question.optionA,
      optionB: question.optionB,
      optionC: question.optionC,
      optionD: question.optionD,
      correct: question.correct,
      solution: question.solution
    }
  });
  if (!confirm.acknowledged) {
    return error(400, "Failed!");
  }
  return new Response("Success", { status: 200 });
}

export { GET, POST, PUT };
//# sourceMappingURL=_server-j8BaXtsZ.js.map
