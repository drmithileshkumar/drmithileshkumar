const setGenerator = async (chaptern) => {
  let selectedGenerator;
  switch (Number(chaptern)) {
    case 1: {
      let { real } = await import("./real.js");
      selectedGenerator = real;
      break;
    }
    case 2: {
      let { polynomial } = await import("./polynomial2.js");
      selectedGenerator = polynomial;
      break;
    }
    case 3: {
      let { linearequations } = await import("./linearequations3.js");
      selectedGenerator = linearequations;
      break;
    }
    case 4: {
      let { quadratic } = await import("./quadratic.js");
      selectedGenerator = quadratic;
      break;
    }
    case 5: {
      let { ap } = await import("./ap.js");
      selectedGenerator = ap;
      break;
    }
    case 6: {
      let { triangles } = await import("./triangles2.js");
      selectedGenerator = triangles;
      break;
    }
    case 7: {
      let { coordinate } = await import("./coordinate2.js");
      selectedGenerator = coordinate;
      break;
    }
    case 8: {
      let { trigonometry } = await import("./trigonometry.js");
      selectedGenerator = trigonometry;
      break;
    }
    case 9: {
      let { circles } = await import("./circles2.js");
      selectedGenerator = circles;
      break;
    }
    case 10: {
      let { areas } = await import("./areas2.js");
      selectedGenerator = areas;
      break;
    }
    case 11: {
      let { volume } = await import("./volume3.js");
      selectedGenerator = volume;
      break;
    }
    case 12: {
      let { statistics } = await import("./statistics2.js");
      selectedGenerator = statistics;
      break;
    }
    case 13: {
      let { probability } = await import("./probability2.js");
      selectedGenerator = probability;
      break;
    }
  }
  return selectedGenerator;
};
export {
  setGenerator
};
