const setGenerator = async (chaptern) => {
  let selectedGenerator;
  switch (Number(chaptern)) {
    case 1: {
      let { shapes } = await import("./shapes.js");
      selectedGenerator = shapes;
      break;
    }
    case 2: {
      let { patterns } = await import("./patterns.js");
      selectedGenerator = patterns;
      break;
    }
    case 3: {
      let { counting } = await import("./counting.js");
      selectedGenerator = counting;
      break;
    }
    case 4: {
      let { times } = await import("./times.js");
      selectedGenerator = times;
      break;
    }
    case 5: {
      let { addition } = await import("./addition.js");
      selectedGenerator = addition;
      break;
    }
    case 6: {
      let { subtraction } = await import("./subtraction.js");
      selectedGenerator = subtraction;
      break;
    }
  }
  return selectedGenerator;
};
export {
  setGenerator
};
