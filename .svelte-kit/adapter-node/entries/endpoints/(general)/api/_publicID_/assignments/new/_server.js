import { a as getDBCollection } from "../../../../../../../chunks/mongo.js";
import { e as error } from "../../../../../../../chunks/index.js";
import { ObjectId } from "mongodb";
async function GET({ locals, params, request }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  const publicID = locals.user.publicID;
  const assignmentsCollection = await getDBCollection("assignments");
  let assignments = await assignmentsCollection.find({ publicID }).toArray();
  if (!assignments) {
    assignments = [];
  }
  return new Response(JSON.stringify(assignments), { status: 200 });
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
  const { assignment } = await request.json();
  let _id = assignment._id;
  let assignmentsCollection = await getDBCollection("assignments");
  let confirm = await assignmentsCollection.updateOne({ _id: new ObjectId(_id) }, {
    $set: {
      assignment: assignment.assignment,
      answer: assignment.answer,
      answered: true
    }
  });
  if (!confirm.acknowledged) {
    return error(400, "Failed!");
  }
  return new Response("Success", { status: 200 });
}
export {
  GET,
  POST,
  PUT
};
