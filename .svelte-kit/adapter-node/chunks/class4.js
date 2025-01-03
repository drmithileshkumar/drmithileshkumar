const setGenerator = async (chaptern) => {
  let selectedGenerator;
  switch (Number(chaptern)) {
    case 1: {
      let { addition } = await import("./addition4.js");
      selectedGenerator = addition;
      break;
    }
    case 2: {
      let { subtraction } = await import("./subtraction4.js");
      selectedGenerator = subtraction;
      break;
    }
    case 3: {
      let { multiplication } = await import("./multiplication2.js");
      selectedGenerator = multiplication;
      break;
    }
    case 4: {
      let { division } = await import("./division2.js");
      selectedGenerator = division;
      break;
    }
    case 5: {
      let { fractions } = await import("./fractions.js");
      selectedGenerator = fractions;
      break;
    }
    case 6: {
      let { shapes } = await import("./shapes4.js");
      selectedGenerator = shapes;
      break;
    }
    case 7: {
      let { patterns } = await import("./patterns4.js");
      selectedGenerator = patterns;
      break;
    }
    case 8: {
      let { times } = await import("./times4.js");
      selectedGenerator = times;
      break;
    }
    case 9: {
      let { weight } = await import("./weight.js");
      selectedGenerator = weight;
      break;
    }
    case 10: {
      let { perimeter } = await import("./perimeter.js");
      selectedGenerator = perimeter;
      break;
    }
  }
  return selectedGenerator;
};
export {
  setGenerator
};
