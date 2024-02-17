import { g as getDBCollection } from "../../../../../../chunks/mongo.js";
import { e as error } from "../../../../../../chunks/index.js";
import { ObjectId } from "mongodb";
let studentList = { "22CA2402": [
  "ENG000000",
  "ENG22CA0001",
  "ENG22CA0002",
  "ENG22CA0003",
  "ENG22CA0004",
  "ENG22CA0005",
  "ENG22CA0006",
  "ENG22CA0007",
  "ENG22CA0008",
  "ENG22CA0009",
  "ENG22CA0010",
  "ENG22CA0011",
  "ENG22CA0012",
  "ENG22CA0013",
  "ENG22CA0014",
  "ENF22CA0015",
  "ENG22CA0016",
  "ENG22CA0017",
  "ENG22CA0018",
  "ENG22CA0019",
  "ENG22CA0020",
  "ENG22CA0021",
  "ENG22CA0022",
  "ENG22CA0023",
  "ENG22CA0024",
  "ENG22CA0025",
  "ENG22CA0026",
  "ENG22CA0027",
  "ENG22CA0028",
  "ENG22CA0029",
  "ENG22CA0030",
  "ENG22CA0031",
  "ENG22CA0032",
  "ENG22CA0033",
  "ENG22CA0034",
  "ENG22CA0035",
  "ENG22CA0036",
  "ENG22CA0037",
  "ENG22CA0038",
  "ENG22CA0039",
  "ENG22CA0040",
  "ENG22CA0041",
  "ENG22CA0042",
  "ENG22CA0043",
  "ENG22CA0044",
  "ENG22CA0045",
  "ENG22CA0046",
  "ENG22CA0047",
  "ENG22CA0048",
  "ENG22CA0049",
  "ENG22CA0050",
  "ENG22CA0051",
  "ENG22CA0052",
  "ENG22CA0053",
  "ENG22CA0054",
  "ENG22CA0055",
  "ENG22CA0056",
  "ENG22CA0057",
  "ENG22CA0058",
  "ENG22CA0059",
  "ENG22CA0060",
  "ENG22CA0061",
  "ENG22CA0062",
  "ENG22CA0063",
  "ENG22CA0064",
  "ENG22CA0065",
  "ENG22CA0066",
  "ENG22CA0067",
  "ENG22CA0068",
  "ENG22CA0069",
  "ENG23CA5001"
] };
async function GET({ locals, params, url, request }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  let courseID = url.searchParams.get("courseID");
  let studentID = url.searchParams.get("studentID");
  const publicID = locals.user.publicID;
  const registrationsCollection = await getDBCollection("registrations");
  let registration = await registrationsCollection.findOne({ courseID, publicID, studentID });
  if (!registration) {
    registration = {};
  }
  return new Response(JSON.stringify(registration), { status: 200 });
}
async function POST({ locals, params, request }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  const publicID = locals.user.publicID;
  const { studentID, session, courseID } = await request.json();
  const registrationsCollection = await getDBCollection("registrations");
  let registrationExists = await registrationsCollection.findOne({ publicID, studentID, session, courseID });
  if (registrationExists) {
    return error(409, "Submission exists!");
  }
  let verified = studentList[courseID].indexOf(studentID) !== -1;
  let creationTimestamp = Date.now();
  const confirm = await registrationsCollection.insertOne({ publicID, studentID, session, courseID, verified, creationTimestamp });
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
  const { registration } = await request.json();
  let _id = registration._id;
  let registrationsCollection = await getDBCollection("registrations");
  let confirm = await registrationsCollection.updateOne({ _id: new ObjectId(_id) }, {
    $set: {
      registration: registration.registration,
      answer: registration.answer,
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
