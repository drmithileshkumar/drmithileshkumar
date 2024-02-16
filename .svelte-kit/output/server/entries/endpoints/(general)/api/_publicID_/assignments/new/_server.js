import { g as getDBCollection } from "../../../../../../../chunks/mongo.js";
import { e as error } from "../../../../../../../chunks/index.js";
import "mongodb";
async function POST({ locals, params, request }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  const publicID = locals.user.publicID;
  const assignment = await request.json();
  const assignmentsCollection = await getDBCollection("assignments");
  const confirm = await assignmentsCollection.insertOne({ ...assignment, publicID });
  if (!confirm.acknowledged) {
    return error(400, "Failed!");
  }
  return new Response("Success", { status: 200 });
}
export {
  POST
};
