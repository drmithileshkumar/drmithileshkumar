import { r as redirect } from "../../../../../../../../chunks/index.js";
async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com/vectorial" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3003")) {
    redirect(301, `https://drmithileshkumar.com/vectorial`);
  }
  let commentID = url.searchParams.get("commentID");
  let res = await fetch(`/vectorial/api/comment/${commentID}`);
  let comment = await res.json();
  return {
    comment
  };
}
export {
  load
};
