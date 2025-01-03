import { r as redirect } from "../../../../../../chunks/index.js";
async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com/vectorial" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3003")) {
    redirect(301, `https://drmithileshkumar.com/vectorial`);
  }
  const { user } = await parent();
  let subscription = null;
  if (user) {
    let res = await fetch(`/vectorial/api/subscription`);
    subscription = await res.json();
  }
  return {
    subscription
  };
}
export {
  load
};
