const setGenerator = async (chaptern) => {
  let selectedGenerator;
  switch (Number(chaptern)) {
    case 1: {
      let { counting } = await import("./counting3.js");
      selectedGenerator = counting;
      break;
    }
    case 2: {
      let { addition } = await import("./addition3.js");
      selectedGenerator = addition;
      break;
    }
    case 3: {
      let { subtraction } = await import("./subtraction3.js");
      selectedGenerator = subtraction;
      break;
    }
    case 4: {
      let { multiplication } = await import("./multiplication.js");
      selectedGenerator = multiplication;
      break;
    }
    case 5: {
      let { division } = await import("./division.js");
      selectedGenerator = division;
      break;
    }
    case 6: {
      let { shapes } = await import("./shapes3.js");
      selectedGenerator = shapes;
      break;
    }
    case 7: {
      let { patterns } = await import("./patterns3.js");
      selectedGenerator = patterns;
      break;
    }
    case 8: {
      let { times } = await import("./times3.js");
      selectedGenerator = times;
      break;
    }
  }
  return selectedGenerator;
};
export {
  setGenerator
};
