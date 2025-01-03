import { a as getDBCollection } from './mongo2-KmFBDmRB.js';
import 'mongodb';
import './index-DzcLzHBX.js';

async function GET({ request, params, url, locals }) {
  let postID = params.postID;
  let commentsCollection = await getDBCollection("comments");
  let comments = await commentsCollection.find({ parentID: postID }).toArray();
  if (!comments) comments = [];
  return new Response(JSON.stringify(comments), { status: 200 });
}

export { GET };
//# sourceMappingURL=_server-BhbYHXuo.js.map
