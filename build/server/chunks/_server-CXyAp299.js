import { i as initializeNewSymbol } from './symbol-Cm0q3hge.js';
import { a as getDBCollection } from './mongo2-KmFBDmRB.js';
import 'mongodb';
import { e as error } from './index-DzcLzHBX.js';

async function GET({ url, params, request, locals }) {
  const symbolsCollection = await getDBCollection("symbols");
  const symbols = await symbolsCollection.find({}).toArray();
  if (!symbols) {
    symbols = [];
  }
  return new Response(JSON.stringify(symbols));
}
async function POST({ url, params, request, locals }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  const publicID = locals.user.publicID;
  const { title, description, category, elements, defs, viewBox, permission } = await request.json();
  const symbolsCollection = await getDBCollection("symbols");
  const count = await symbolsCollection.countDocuments({ publicID });
  const newSymbol = initializeNewSymbol(publicID, title, description, category, elements, defs, viewBox, permission, count);
  const confirm = await symbolsCollection.insertOne(newSymbol);
  if (!confirm.acknowledged) {
    return error(500, "Failed");
  }
  return new Response(JSON.stringify({ id: newSymbol.symbolID }), { status: 200 });
}

export { GET, POST };
//# sourceMappingURL=_server-CXyAp299.js.map
