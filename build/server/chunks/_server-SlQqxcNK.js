import { s as signJwt } from './jwt-UUbIYnQ9.js';
import { g as getUsersCollection, a as getDBCollection } from './mongo-hd3d35uK.js';
import { i as initializeNewUserDetail } from './userDetail-BOIsFenN.js';
import { e as error } from './index-oXbhYwP7.js';
import 'jsonwebtoken';
import 'mongodb';

async function POST({ locals, params, request }) {
  const { phone, privateID, otpID } = await request.json();
  const query = { privateID, otpID, phone: String(phone) };
  let existingUser;
  const usersCollection = await getUsersCollection();
  existingUser = await usersCollection.findOne(query);
  if (!existingUser) {
    return error(400, "User does not exist!");
  }
  let publicID = existingUser.publicID;
  const userDetailsCollection = await getDBCollection("userDetails");
  let userDetail = await userDetailsCollection.findOne({ publicID });
  if (!userDetail) {
    let type = "";
    let details = {
      gender: "",
      dob: "",
      rank: "",
      experience: 0,
      established: ""
    };
    let common = {
      bio: "",
      email: "",
      zip: "",
      city: "",
      country: "",
      website: "",
      followers: 0,
      following: 0,
      replies: 0,
      shares: 0
    };
    let newUserDetail = initializeNewUserDetail(publicID, type, details, common);
    await userDetailsCollection.insertOne(newUserDetail);
    userDetail = newUserDetail;
  }
  const user = {
    publicID: existingUser.publicID,
    name: existingUser.name,
    phone: String(existingUser.phone),
    profile: existingUser.profile,
    banner: existingUser.banner,
    rank: userDetail.details.rank
  };
  const jwt = signJwt(user);
  const headers = new Headers();
  headers.append("set-cookie", [`jwt=${jwt}; Max-Age=${7 * 24 * 60 * 60}; Path=/;`]);
  return new Response("Success", { headers });
}

export { POST };
//# sourceMappingURL=_server-SlQqxcNK.js.map
