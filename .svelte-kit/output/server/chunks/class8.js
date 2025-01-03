const setGenerator = async (chaptern) => {
  let selectedGenerator;
  switch (Number(chaptern)) {
    case 1: {
      let { rational } = await import("./rational2.js");
      selectedGenerator = rational;
      break;
    }
    case 2: {
      let { linearequations } = await import("./linearequations.js");
      selectedGenerator = linearequations;
      break;
    }
    case 3: {
      let { quadrilaterals } = await import("./quadrilaterals.js");
      selectedGenerator = quadrilaterals;
      break;
    }
    case 4: {
      let { practicalgeometry } = await import("./practicalgeometry3.js");
      selectedGenerator = practicalgeometry;
      break;
    }
    case 5: {
      let { data } = await import("./data3.js");
      selectedGenerator = data;
      break;
    }
    case 6: {
      let { squares } = await import("./squares.js");
      selectedGenerator = squares;
      break;
    }
    case 7: {
      let { cubes } = await import("./cubes.js");
      selectedGenerator = cubes;
      break;
    }
    case 8: {
      let { comparison } = await import("./comparison2.js");
      selectedGenerator = comparison;
      break;
    }
    case 9: {
      let { algebraic } = await import("./algebraic2.js");
      selectedGenerator = algebraic;
      break;
    }
    case 10: {
      let { shapes } = await import("./shapes7.js");
      selectedGenerator = shapes;
      break;
    }
    case 11: {
      let { mensuration } = await import("./mensuration2.js");
      selectedGenerator = mensuration;
      break;
    }
    case 12: {
      let { powers } = await import("./powers.js");
      selectedGenerator = powers;
      break;
    }
    case 13: {
      let { proportions } = await import("./proportions.js");
      selectedGenerator = proportions;
      break;
    }
    case 14: {
      let { factorization } = await import("./factorization.js");
      selectedGenerator = factorization;
      break;
    }
    case 15: {
      let { graph } = await import("./graph.js");
      selectedGenerator = graph;
      break;
    }
    case 16: {
      let { numbers } = await import("./numbers2.js");
      selectedGenerator = numbers;
      break;
    }
  }
  return selectedGenerator;
};
export {
  setGenerator
};
