import { r as redirect } from "../../../../../chunks/index.js";
async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  const classn = params.classn;
  return {
    classn
  };
}
export {
  load
};
