const setGenerator = async (chaptern) => {
  let selectedGenerator;
  switch (Number(chaptern)) {
    case 1: {
      let { counting } = await import('./counting2-DPyJBjAL.js');
      selectedGenerator = counting;
      break;
    }
    case 2: {
      let { addition } = await import('./addition2-CFRXGwnd.js');
      selectedGenerator = addition;
      break;
    }
    case 3: {
      let { subtraction } = await import('./subtraction2-C_NZyqe5.js');
      selectedGenerator = subtraction;
      break;
    }
    case 4: {
      let { shapes } = await import('./shapes2--XeHm1cV.js');
      selectedGenerator = shapes;
      break;
    }
    case 5: {
      let { patterns } = await import('./patterns2-anqEH1-R.js');
      selectedGenerator = patterns;
      break;
    }
    case 6: {
      let { times } = await import('./times2-CQz2-7UB.js');
      selectedGenerator = times;
      break;
    }
    case 7: {
      let { lines } = await import('./lines-CNZeK7Jv.js');
      selectedGenerator = lines;
      break;
    }
  }
  return selectedGenerator;
};

export { setGenerator };
//# sourceMappingURL=class2-CZdYYlJk.js.map
