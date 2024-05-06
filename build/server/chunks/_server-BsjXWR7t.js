import { g as getDBCollection } from './mongo-pMKKCQqF.js';
import { e as error } from './index-DzcLzHBX.js';
import { ObjectId } from 'mongodb';

async function GET({ locals, params, request }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  locals.user.publicID;
  const assignmentID = params.assignmentID;
  const assignmentsCollection = await getDBCollection("assignments");
  let assignment = await assignmentsCollection.findOne({ _id: new ObjectId(assignmentID) });
  if (!assignment) {
    assignment = null;
  }
  return new Response(JSON.stringify(assignment), { status: 200 });
}
async function POST({ locals, params, request }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  locals.user.publicID;
  const assignment = await request.json();
  const assignmentsCollection = await getDBCollection("assignments");
  const confirm = await assignmentsCollection.insertOne({ ...assignment });
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
  const assignmentID = params.assignmentID;
  const { questionID } = await request.json();
  let assignmentsCollection = await getDBCollection("assignments");
  let confirm = await assignmentsCollection.updateOne(
    {
      _id: new ObjectId(assignmentID)
    },
    { $addToSet: { questions: questionID } }
  );
  if (!confirm.acknowledged) {
    return error(400, "Failed!");
  }
  return new Response("Success", { status: 200 });
}
async function DELETE({ locals, params, request }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  locals.user.publicID;
  const assignmentID = params.assignmentID;
  const { questionID } = await request.json();
  console.log(assignmentID);
  let assignmentsCollection = await getDBCollection("assignments");
  let confirm = await assignmentsCollection.updateOne(
    { _id: new ObjectId(assignmentID) },
    { $pull: { questions: questionID } }
  );
  if (!confirm.acknowledged) {
    return error(400, "Failed!");
  }
  return new Response("Success", { status: 200 });
}

export { DELETE, GET, POST, PUT };
//# sourceMappingURL=_server-BsjXWR7t.js.map
