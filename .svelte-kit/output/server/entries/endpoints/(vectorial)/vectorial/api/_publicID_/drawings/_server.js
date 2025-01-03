import { a as getDBCollection } from "../../../../../../../chunks/mongo2.js";
import "mongodb";
import { e as error } from "../../../../../../../chunks/index.js";
async function GET({ url, params, request, locals }) {
  console.log(locals.user);
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  const publicID = locals.user.publicID;
  let skip = url.searchParams.get("skip");
  if (!skip) skip = 0;
  const drawingsCollection = await getDBCollection("drawings");
  try {
    let drawings = [];
    drawings = await drawingsCollection.find({ publicID }).sort({ creationTimestamp: -1 }).skip(Number(skip)).limit(10).toArray();
    if (!drawings) {
      drawings = [];
    }
    return new Response(JSON.stringify(drawings), {
      headers: {
        "Content-Type": "application/json"
      },
      status: 200
    });
  } catch (err) {
    return error(500, "Internal Server Error happened");
  }
}
export {
  GET
};
