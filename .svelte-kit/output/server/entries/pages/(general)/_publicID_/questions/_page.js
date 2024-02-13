import { r as redirect } from "../../../../../chunks/index.js";
async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  const { user } = await parent();
  if (!user)
    redirect(301, "/auth");
  let publicID = params.publicID;
  let res = await fetch(`/api/${publicID}/questions`);
  let questions = await res.json();
  let res1 = await fetch(`/api/${publicID}/assignments`);
  let assignments = await res1.json();
  return {
    questions,
    assignments
  };
}
export {
  load
};
