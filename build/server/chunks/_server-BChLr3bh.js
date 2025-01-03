import { a as getDBCollection } from './mongo2-KmFBDmRB.js';
import { e as error } from './index-DzcLzHBX.js';
import 'mongodb';

async function GET({ url, params, request, locals }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  const publicID = locals.user.publicID;
  const paymentCollection = await getDBCollection("payments");
  let invoices = await paymentCollection.find({ publicID }).toArray();
  if (!invoices) {
    invoices = [];
  }
  return new Response(JSON.stringify(invoices));
}

export { GET };
//# sourceMappingURL=_server-BChLr3bh.js.map
