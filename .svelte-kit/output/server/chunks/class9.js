const setGenerator = async (chaptern) => {
  let selectedGenerator;
  switch (Number(chaptern)) {
    case 1: {
      let { numbersystem } = await import("./numbersystem.js");
      selectedGenerator = numbersystem;
      break;
    }
    case 2: {
      let { polynomial } = await import("./polynomial.js");
      selectedGenerator = polynomial;
      break;
    }
    case 3: {
      let { coordinate } = await import("./coordinate.js");
      selectedGenerator = coordinate;
      break;
    }
    case 4: {
      let { linearequations } = await import("./linearequations2.js");
      selectedGenerator = linearequations;
      break;
    }
    case 5: {
      let { lines } = await import("./lines3.js");
      selectedGenerator = lines;
      break;
    }
    case 6: {
      let { triangles } = await import("./triangles.js");
      selectedGenerator = triangles;
      break;
    }
    case 7: {
      let { quadrilaterals } = await import("./quadrilaterals2.js");
      selectedGenerator = quadrilaterals;
      break;
    }
    case 8: {
      let { areas } = await import("./areas.js");
      selectedGenerator = areas;
      break;
    }
    case 9: {
      let { circles } = await import("./circles.js");
      selectedGenerator = circles;
      break;
    }
    case 10: {
      let { heron } = await import("./heron.js");
      selectedGenerator = heron;
      break;
    }
    case 11: {
      let { volume } = await import("./volume2.js");
      selectedGenerator = volume;
      break;
    }
    case 12: {
      let { statistics } = await import("./statistics.js");
      selectedGenerator = statistics;
      break;
    }
    case 13: {
      let { probability } = await import("./probability.js");
      selectedGenerator = probability;
      break;
    }
  }
  return selectedGenerator;
};
export {
  setGenerator
};
