import { i as initializeNewSymbol } from './symbol-Cm0q3hge.js';
import { a as getDBCollection } from './mongo2-KmFBDmRB.js';
import 'mongodb';
import { e as error } from './index-DzcLzHBX.js';

async function GET({ url, params, request, locals }) {
  const symbolID = params.symbolID;
  const symbolsCollection = await getDBCollection("symbols");
  const symbol = await symbolsCollection.findOne({ symbolID });
  if (!symbol) {
    return error(404, "Symbol not found.");
  }
  return new Response(JSON.stringify(symbol), { status: 200 });
}
async function POST({ url, params, request, locals }) {
  if (!locals.user) {
    return error(403, "Unauthorized");
  }
  const publicID = locals.user.publicID;
  const { title, description, category, image, permission } = await request.json();
  const symbolsCollection = await getDBCollection("symbols");
  const count = await symbolsCollection.countDocuments({ publicID });
  const newSymbol = initializeNewSymbol(publicID, title, description, category, image, permission, count);
  const confirm = await symbolsCollection.insertOne(newSymbol);
  if (!confirm.acknowledged) {
    return error(500, "Failed");
  }
  return new Response(JSON.stringify({ id: newSymbol.symbolID }), { status: 200 });
}

export { GET, POST };
//# sourceMappingURL=_server-Czf-1xu0.js.map
