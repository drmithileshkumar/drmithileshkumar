import { g as getDBCollection } from "../../../../../chunks/mongo.js";
import { e as error } from "../../../../../chunks/index.js";
import { ObjectId } from "mongodb";
async function GET({ locals, params, url, request }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  let assignmentID = url.searchParams.get("assignmentID");
  const publicID = locals.user.publicID;
  const assignmentsCollection = await getDBCollection("studentAssignments");
  let studentAssignment = await assignmentsCollection.findOne({ assignmentID, publicID });
  if (!studentAssignment) {
    studentAssignment = {};
  }
  return new Response(JSON.stringify(studentAssignment), { status: 200 });
}
async function POST({ locals, params, request }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  const publicID = locals.user.publicID;
  const studentAssignment = await request.json();
  const assignmentsCollection = await getDBCollection("studentAssignments");
  let submissionExists = await assignmentsCollection.findOne({ publicID, assignmentID: studentAssignment.assignmentID, id: studentAssignment.id });
  if (submissionExists) {
    return error(409, "Submission exists!");
  }
  const confirm = await assignmentsCollection.insertOne({ ...studentAssignment });
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
