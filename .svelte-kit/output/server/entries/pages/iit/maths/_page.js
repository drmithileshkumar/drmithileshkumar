async function load({ session, fetch, params, url }) {
  console.log("Loading...");
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:3000")) {
    return {
      status: 301,
      redirect: `https://drmithileshkumar.com/iit/maths`
    };
  }
  return {
    props: {}
  };
}
export {
  load
};
