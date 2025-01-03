const setGenerator = async (chaptern) => {
  let selectedGenerator;
  switch (Number(chaptern)) {
    case 1: {
      let { relations12 } = await import("./relations12.js");
      selectedGenerator = relations12;
      break;
    }
    case 2: {
      let { inverse } = await import("./inverse.js");
      selectedGenerator = inverse;
      break;
    }
    case 3: {
      let { matrices } = await import("./matrices.js");
      selectedGenerator = matrices;
      break;
    }
    case 4: {
      let { determinants } = await import("./determinants.js");
      selectedGenerator = determinants;
      break;
    }
    case 5: {
      let { continuity } = await import("./continuity.js");
      selectedGenerator = continuity;
      break;
    }
    case 6: {
      let { differentiability } = await import("./differentiability.js");
      selectedGenerator = differentiability;
      break;
    }
    case 7: {
      let { appDerivatives } = await import("./appDerivatives.js");
      selectedGenerator = appDerivatives;
      break;
    }
    case 8: {
      let { indefinite } = await import("./indefinite.js");
      selectedGenerator = indefinite;
      break;
    }
    case 9: {
      let { definite } = await import("./definite.js");
      selectedGenerator = definite;
      break;
    }
    case 10: {
      let { appIntegrals } = await import("./appIntegrals.js");
      selectedGenerator = appIntegrals;
      break;
    }
    case 11: {
      let { differential } = await import("./differential.js");
      selectedGenerator = differential;
      break;
    }
    case 12: {
      let { vectors } = await import("./vectors.js");
      selectedGenerator = vectors;
      break;
    }
    case 13: {
      let { geometry3d } = await import("./geometry3d.js");
      selectedGenerator = geometry3d;
      break;
    }
    case 14: {
      let { linear } = await import("./linear.js");
      selectedGenerator = linear;
      break;
    }
  }
  return selectedGenerator;
};
export {
  setGenerator
};
