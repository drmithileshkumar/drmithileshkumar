import { r as redirect } from "../../../../../../chunks/index.js";
async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  const classn = params.classn;
  const chaptern = params.chaptern;
  let workouts = [];
  const selectedGenerator = await setGenerators(classn, chaptern);
  return {
    classn,
    chaptern,
    selectedGenerator,
    workouts: workouts.reverse()
  };
}
const setGenerators = async (classn, chaptern) => {
  let questionSetGen;
  switch (Number(classn)) {
    case 1: {
      let { setGenerator } = await import("../../../../../../chunks/class1.js");
      questionSetGen = setGenerator;
      break;
    }
    case 2: {
      let { setGenerator } = await import("../../../../../../chunks/class2.js");
      questionSetGen = setGenerator;
      break;
    }
    case 3: {
      let { setGenerator } = await import("../../../../../../chunks/class3.js");
      questionSetGen = setGenerator;
      break;
    }
    case 4: {
      let { setGenerator } = await import("../../../../../../chunks/class4.js");
      questionSetGen = setGenerator;
      break;
    }
    case 5: {
      let { setGenerator } = await import("../../../../../../chunks/class5.js");
      questionSetGen = setGenerator;
      break;
    }
    case 6: {
      let { setGenerator } = await import("../../../../../../chunks/class6.js");
      questionSetGen = setGenerator;
      break;
    }
    case 7: {
      let { setGenerator } = await import("../../../../../../chunks/class7.js");
      questionSetGen = setGenerator;
      break;
    }
    case 8: {
      let { setGenerator } = await import("../../../../../../chunks/class8.js");
      questionSetGen = setGenerator;
      break;
    }
    case 9: {
      let { setGenerator } = await import("../../../../../../chunks/class9.js");
      questionSetGen = setGenerator;
      break;
    }
    case 10: {
      let { setGenerator } = await import("../../../../../../chunks/class10.js");
      questionSetGen = setGenerator;
      break;
    }
    case 11: {
      let { setGenerator } = await import("../../../../../../chunks/class11.js");
      questionSetGen = setGenerator;
      break;
    }
    case 12: {
      let { setGenerator } = await import("../../../../../../chunks/class12.js");
      questionSetGen = setGenerator;
      break;
    }
  }
  let selectedGenerator = await questionSetGen(chaptern);
  return selectedGenerator;
};
export {
  load
};
