import { a as getDBCollection } from "../../../../../../../chunks/mongo2.js";
import "mongodb";
import { e as error } from "../../../../../../../chunks/index.js";
async function GET({ request, params, url, locals }) {
  let id = params.publicID;
  const usersCollection = await getDBCollection("users");
  let userData = await usersCollection.findOne({ publicID: id });
  if (!userData) {
    return error(404, "User not found");
  }
  let followingsCollection = await getDBCollection("followings");
  let following = await followingsCollection.find({ publicID: id }).toArray();
  if (!following) {
    following = [];
  }
  return new Response(JSON.stringify(following), { status: 200 });
}
async function POST({ params, request, locals }) {
  if (locals.user) ;
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  let publicID = params.publicID;
  const followingsCollection = await getDBCollection("followings");
  const followersCollection = await getDBCollection("followers");
  const confirm = await followingsCollection.updateOne({ publicID: locals.user.publicID }, { $addToSet: { following: publicID } }, { upsert: true });
  const confirm1 = await followersCollection.updateOne({ publicID }, { $addToSet: { followers: locals.user.publicID } }, { upsert: true });
  if (!confirm.acknowledged || !confirm1.acknowledged) {
    return error(400, "Failed!");
  }
  const userDetailsCollection = await getDBCollection("userDetails");
  await userDetailsCollection.updateOne({ publicID: locals.user.publicID }, { $inc: { "common.following": 1 } });
  await userDetailsCollection.updateOne({ publicID }, { $inc: { "common.followers": 1 } });
  return new Response("Success", { status: 200 });
}
async function PUT({ params, request, locals }) {
  if (locals.user) ;
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  let publicID = params.publicID;
  const followingsCollection = await getDBCollection("followings");
  const followersCollection = await getDBCollection("followers");
  const confirm = await followingsCollection.updateOne({ publicID: locals.user.publicID }, { $pull: { following: publicID } }, { upsert: true });
  const confirm1 = await followersCollection.updateOne({ publicID }, { $pull: { followers: locals.user.publicID } }, { upsert: true });
  if (!confirm.acknowledged || !confirm1.acknowledged) {
    return error(400, "Failed!");
  }
  const userDetailsCollection = await getDBCollection("userDetails");
  await userDetailsCollection.updateOne({ publicID: locals.user.publicID }, { $inc: { "common.following": -1 } });
  await userDetailsCollection.updateOne({ publicID }, { $inc: { "common.followers": -1 } });
  return new Response("Success", { status: 200 });
}
export {
  GET,
  POST,
  PUT
};
