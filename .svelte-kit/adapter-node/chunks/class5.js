const setGenerator = async (chaptern) => {
  let selectedGenerator;
  switch (Number(chaptern)) {
    case 1: {
      let { multiplication } = await import("./multiplication3.js");
      selectedGenerator = multiplication;
      break;
    }
    case 2: {
      let { division } = await import("./division3.js");
      selectedGenerator = division;
      break;
    }
    case 3: {
      let { fractions } = await import("./fractions2.js");
      selectedGenerator = fractions;
      break;
    }
    case 4: {
      let { lcms } = await import("./lcms.js");
      selectedGenerator = lcms;
      break;
    }
    case 5: {
      let { shapes } = await import("./shapes5.js");
      selectedGenerator = shapes;
      break;
    }
    case 6: {
      let { patterns } = await import("./patterns5.js");
      selectedGenerator = patterns;
      break;
    }
    case 7: {
      let { length } = await import("./length.js");
      selectedGenerator = length;
      break;
    }
    case 8: {
      let { weight } = await import("./weight2.js");
      selectedGenerator = weight;
      break;
    }
    case 9: {
      let { volume } = await import("./volume.js");
      selectedGenerator = volume;
      break;
    }
    case 10: {
      let { angles } = await import("./angles.js");
      selectedGenerator = angles;
      break;
    }
    case 11: {
      let { perimeter } = await import("./perimeter2.js");
      selectedGenerator = perimeter;
      break;
    }
    case 12: {
      let { area } = await import("./area.js");
      selectedGenerator = area;
      break;
    }
  }
  return selectedGenerator;
};
export {
  setGenerator
};
