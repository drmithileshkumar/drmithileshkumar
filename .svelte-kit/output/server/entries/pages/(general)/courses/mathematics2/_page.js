import { r as redirect } from "../../../../../chunks/index.js";
async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  const { user } = await parent();
  let assignments = [];
  if (user) {
    let publicID = user.publicID;
    let res = await fetch(`/api/${publicID}/assignments`);
    assignments = await res.json();
  }
  return {
    assignments
  };
}
export {
  load
};
