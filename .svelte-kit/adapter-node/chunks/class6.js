const setGenerator = async (chaptern) => {
  let selectedGenerator;
  switch (Number(chaptern)) {
    case 1: {
      let { numbers } = await import("./numbers.js");
      selectedGenerator = numbers;
      break;
    }
    case 2: {
      let { basicgeometry } = await import("./basicgeometry.js");
      selectedGenerator = basicgeometry;
      break;
    }
    case 3: {
      let { shapes } = await import("./shapes6.js");
      selectedGenerator = shapes;
      break;
    }
    case 4: {
      let { integers } = await import("./integers.js");
      selectedGenerator = integers;
      break;
    }
    case 5: {
      let { fractions } = await import("./fractions3.js");
      selectedGenerator = fractions;
      break;
    }
    case 6: {
      let { decimals } = await import("./decimals.js");
      selectedGenerator = decimals;
      break;
    }
    case 7: {
      let { data } = await import("./data.js");
      selectedGenerator = data;
      break;
    }
    case 8: {
      let { mensuration } = await import("./mensuration.js");
      selectedGenerator = mensuration;
      break;
    }
    case 9: {
      let { algebra } = await import("./algebra.js");
      selectedGenerator = algebra;
      break;
    }
    case 10: {
      let { ratios } = await import("./ratios.js");
      selectedGenerator = ratios;
      break;
    }
    case 11: {
      let { symmetry } = await import("./symmetry.js");
      selectedGenerator = symmetry;
      break;
    }
    case 12: {
      let { practicalgeometry } = await import("./practicalgeometry.js");
      selectedGenerator = practicalgeometry;
      break;
    }
  }
  return selectedGenerator;
};
export {
  setGenerator
};
