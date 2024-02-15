import { g as getDBCollection } from "../../../../../../../chunks/mongo.js";
import { e as error } from "../../../../../../../chunks/index.js";
import { ObjectId } from "mongodb";
async function GET({ locals, params, request }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  locals.user.publicID;
  const assignmentID = params.assignmentID;
  const assignmentsCollection = await getDBCollection("assignments");
  const questionsCollection = await getDBCollection("questions");
  let assignment = await assignmentsCollection.findOne({ _id: new ObjectId(assignmentID) });
  if (!assignment) {
    assignment = null;
  }
  let questions = [], question;
  for (let i = 0; i < assignment.questions.length; i++) {
    question = await questionsCollection.findOne({ _id: new ObjectId(assignment.questions[i]) });
    questions.push(question);
  }
  assignment.questions = questions;
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
  const assignment = await request.json();
  let _id = assignment._id;
  let assignmentsCollection = await getDBCollection("assignments");
  let confirm = await assignmentsCollection.updateOne({ _id: new ObjectId(_id) }, {
    $set: {
      title: assignment.title,
      university: assignment.university,
      department: assignment.department,
      session: assignment.session,
      semester: assignment.semester,
      courseName: assignment.courseName,
      courseCode: assignment.courseCode,
      totalMarks: assignment.totalMarks,
      numberOfQuestions: assignment.numberOfQuestions,
      questions: assignment.questions
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
