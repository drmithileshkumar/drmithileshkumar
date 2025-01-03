import { g as getDBCollection } from './mongo-CZ4m6Qnt.js';
import { e as error } from './index-DzcLzHBX.js';
import { ObjectId } from 'mongodb';

async function GET({ locals, params, request }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  const publicID = locals.user.publicID;
  const assignmentID = params.assignmentID;
  const assignmentsCollection2 = await getDBCollection("assignments");
  const studentAssignmentsCollection = await getDBCollection("studentAssignments");
  const questionsCollection = await getDBCollection("questions");
  let _id = new ObjectId(assignmentID);
  let assignment = await assignmentsCollection2.findOne({ _id });
  let studentAssignment;
  if (publicID === "MithileshKumar") {
    studentAssignment = await studentAssignmentsCollection.findOne({ assignmentID });
  } else {
    studentAssignment = await studentAssignmentsCollection.findOne({ publicID, assignmentID });
  }
  if (!studentAssignment) {
    studentAssignment = null;
  }
  let questions = [], question;
  for (let i = 0; i < assignment.questions.length; i++) {
    question = await questionsCollection.findOne({ _id: new ObjectId(assignment.questions[i]) });
    questions.push(question);
  }
  assignment.questions = questions;
  return new Response(JSON.stringify({ assignment, studentAssignment }), { status: 200 });
}
async function PUT({ locals, params, request }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  locals.user.publicID;
  const studentAssignment = await request.json();
  let studentAssignmentsCollection = await getDBCollection("studentAssignments");
  const _id = studentAssignment._id;
  let confirm;
  if (_id) {
    confirm = await studentAssignmentsCollection.updateOne({ _id: new ObjectId(_id) }, {
      $set: {
        title: studentAssignment.title,
        courseID: studentAssignment.courseID,
        name: studentAssignment.name,
        publicID: studentAssignment.publicID,
        id: studentAssignment.id,
        //usn
        submission: studentAssignment.submission,
        assignmentID: studentAssignment.assignmentID,
        answers: studentAssignment.answers,
        //{questionID, answer}
        marks: studentAssignment.marks,
        //question-wise
        total: studentAssignment.total,
        status: studentAssignment.status
      }
    });
    if (!confirm.acknowledged) {
      return error(400, "Failed!");
    }
  } else {
    confirm = await assignmentsCollection.insertOne({ ...studentAssignment });
    if (!confirm.acknowledged) {
      return error(400, "Failed!");
    }
  }
  return new Response("Success", { status: 200 });
}

export { GET, PUT };
//# sourceMappingURL=_server-CMz7kBOJ.js.map
