const setGenerator = async (chaptern) => {
  let selectedGenerator;
  switch (Number(chaptern)) {
    case 1: {
      let { sets } = await import("./sets2.js");
      selectedGenerator = sets;
      break;
    }
    case 2: {
      let { relations } = await import("./relations.js");
      selectedGenerator = relations;
      break;
    }
    case 3: {
      let { trigonometry } = await import("./trigonometry2.js");
      selectedGenerator = trigonometry;
      break;
    }
    case 4: {
      let { induction } = await import("./induction.js");
      selectedGenerator = induction;
      break;
    }
    case 5: {
      let { complex } = await import("./complex.js");
      selectedGenerator = complex;
      break;
    }
    case 6: {
      let { quadratic } = await import("./quadratic2.js");
      selectedGenerator = quadratic;
      break;
    }
    case 7: {
      let { inequalities } = await import("./inequalities.js");
      selectedGenerator = inequalities;
      break;
    }
    case 8: {
      let { combinatorics } = await import("./combinatorics.js");
      selectedGenerator = combinatorics;
      break;
    }
    case 9: {
      let { binomial } = await import("./binomial.js");
      selectedGenerator = binomial;
      break;
    }
    case 10: {
      let { sequences } = await import("./sequences.js");
      selectedGenerator = sequences;
      break;
    }
    case 11: {
      let { line } = await import("./line.js");
      selectedGenerator = line;
      break;
    }
    case 12: {
      let { circle } = await import("./circle.js");
      selectedGenerator = circle;
      break;
    }
    case 13: {
      let { parabola } = await import("./parabola.js");
      selectedGenerator = parabola;
      break;
    }
    case 14: {
      let { ellipse } = await import("./ellipse.js");
      selectedGenerator = ellipse;
      break;
    }
    case 15: {
      let { hyperbola } = await import("./hyperbola.js");
      selectedGenerator = hyperbola;
      break;
    }
    case 16: {
      let { threed } = await import("./threed.js");
      selectedGenerator = threed;
      break;
    }
    case 17: {
      let { limits } = await import("./limits.js");
      selectedGenerator = limits;
      break;
    }
    case 18: {
      let { derivatives } = await import("./derivatives.js");
      selectedGenerator = derivatives;
      break;
    }
    case 19: {
      let { reasoning } = await import("./reasoning.js");
      selectedGenerator = reasoning;
      break;
    }
    case 20: {
      let { statistics } = await import("./statistics3.js");
      selectedGenerator = statistics;
      break;
    }
    case 21: {
      let { probability } = await import("./probability3.js");
      selectedGenerator = probability;
      break;
    }
  }
  return selectedGenerator;
};
export {
  setGenerator
};
