import { a as getDBCollection } from './mongo2-KmFBDmRB.js';
import 'mongodb';
import { e as error } from './index-DzcLzHBX.js';

async function POST({ url, params, request, locals }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  const publicID = locals.user.publicID;
  const drawingsCollection = await getDBCollection("drawings");
  let { drawingID, permission } = await request.json();
  const confirm = await drawingsCollection.updateOne({ publicID, drawingID }, { $set: { permission } });
  if (!confirm.acknowledged) {
    return error(504, "Failed to change permission");
  }
  return new Response("Success");
}

export { POST };
//# sourceMappingURL=_server-CXHe34sO.js.map
