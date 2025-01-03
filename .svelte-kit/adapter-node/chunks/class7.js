const setGenerator = async (chaptern) => {
  let selectedGenerator;
  switch (Number(chaptern)) {
    case 1: {
      let { integers } = await import("./integers2.js");
      selectedGenerator = integers;
      break;
    }
    case 2: {
      let { fractions } = await import("./fractions4.js");
      selectedGenerator = fractions;
      break;
    }
    case 3: {
      let { data } = await import("./data2.js");
      selectedGenerator = data;
      break;
    }
    case 4: {
      let { simpleequations } = await import("./simpleequations.js");
      selectedGenerator = simpleequations;
      break;
    }
    case 5: {
      let { lines } = await import("./lines2.js");
      selectedGenerator = lines;
      break;
    }
    case 6: {
      let { triangle } = await import("./triangle.js");
      selectedGenerator = triangle;
      break;
    }
    case 7: {
      let { comparison } = await import("./comparison.js");
      selectedGenerator = comparison;
      break;
    }
    case 8: {
      let { rational } = await import("./rational.js");
      selectedGenerator = rational;
      break;
    }
    case 9: {
      let { practicalgeometry } = await import("./practicalgeometry2.js");
      selectedGenerator = practicalgeometry;
      break;
    }
    case 10: {
      let { perimeter } = await import("./perimeter3.js");
      selectedGenerator = perimeter;
      break;
    }
    case 11: {
      let { algebraic } = await import("./algebraic.js");
      selectedGenerator = algebraic;
      break;
    }
    case 12: {
      let { exponents } = await import("./exponents.js");
      selectedGenerator = exponents;
      break;
    }
    case 13: {
      let { symmetry } = await import("./symmetry2.js");
      selectedGenerator = symmetry;
      break;
    }
    case 14: {
      let { solids } = await import("./solids.js");
      selectedGenerator = solids;
      break;
    }
  }
  return selectedGenerator;
};
export {
  setGenerator
};
