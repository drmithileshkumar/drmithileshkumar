import { i as initializeNewUserDetail, s as signJwt } from './userDetail2-DGfibAKu.js';
import { g as getUsersCollection, a as getDBCollection } from './mongo2-KmFBDmRB.js';
import './stores-Bb_1fHB9.js';
import { c as createPublicID } from './publicID-DH6nUnuK.js';
import { v4 } from 'uuid';
import { e as error } from './index-DzcLzHBX.js';
import './stores2-B6DyWuAW.js';
import 'jsonwebtoken';
import 'mongodb';
import './index2-BZnI6xu7.js';
import './utils-iZWwlC2F.js';

const initializeNewUser = (name, phone, count) => {
  let newUser = {
    phone,
    //private
    name,
    profile: "",
    //photo
    banner: "",
    creationTimestamp: Date.now(),
    //private
    privateID: v4(),
    //private
    publicID: createPublicID(name, count),
    //public
    otpID: v4(),
    //private
    products: {},
    likes: []
  };
  return newUser;
};
const validateName = (name) => {
  let nameAntiPattern = /[^a-zA-Z ]/g;
  return !nameAntiPattern.test(name);
};
const validatePhone = (phone) => {
  const phoneAntiPattern = /[^\d]/g;
  return !phoneAntiPattern.test(phone);
};
async function POST({ params, request }) {
  const { name, phone } = await request.json();
  if (!validateName(name)) return error(410, "Invalid name");
  if (!validatePhone(String(phone))) return error(410, "Invalid phone");
  const usersCollection = await getUsersCollection();
  const existingUser = await usersCollection.findOne({ name, phone: String(phone) });
  if (existingUser) {
    return error(403, "User already exists!");
  }
  const count = await usersCollection.countDocuments({ name });
  let newUser = initializeNewUser(name, String(phone), count);
  usersCollection.insertOne(newUser);
  const userDetailsCollection = await getDBCollection("userDetails");
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
  let newUserDetail = initializeNewUserDetail(newUser.publicID, type, details, common);
  await userDetailsCollection.insertOne(newUserDetail);
  const user = {
    publicID: newUser.publicID,
    name: newUser.name,
    phone: String(newUser.phone),
    profile: newUser.profile,
    banner: newUser.banner
  };
  const jwt = signJwt(user);
  const headers = new Headers();
  headers.append("set-cookie", [`jwt=${jwt}; Max-Age=${7 * 24 * 60 * 60}; Path=/;`]);
  return new Response(JSON.stringify(
    { privateID: newUser.privateID, publicID: newUser.publicID, otpID: newUser.otpID }
  ), { headers });
}

export { POST };
//# sourceMappingURL=_server-yiE_eLHT.js.map
