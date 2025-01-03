const setGenerator = async (chaptern) => {
  let selectedGenerator;
  switch (Number(chaptern)) {
    case 1: {
      let { counting } = await import('./counting3-BGFa2wdx.js');
      selectedGenerator = counting;
      break;
    }
    case 2: {
      let { addition } = await import('./addition3-Bf7xlrl8.js');
      selectedGenerator = addition;
      break;
    }
    case 3: {
      let { subtraction } = await import('./subtraction3-FtM7PnoJ.js');
      selectedGenerator = subtraction;
      break;
    }
    case 4: {
      let { multiplication } = await import('./multiplication-DS84858N.js');
      selectedGenerator = multiplication;
      break;
    }
    case 5: {
      let { division } = await import('./division-kwsW5DzZ.js');
      selectedGenerator = division;
      break;
    }
    case 6: {
      let { shapes } = await import('./shapes3-DXxBizVw.js');
      selectedGenerator = shapes;
      break;
    }
    case 7: {
      let { patterns } = await import('./patterns3-DJgwSbZp.js');
      selectedGenerator = patterns;
      break;
    }
    case 8: {
      let { times } = await import('./times3-CYRjsE0Q.js');
      selectedGenerator = times;
      break;
    }
  }
  return selectedGenerator;
};

export { setGenerator };
//# sourceMappingURL=class3-Bd6NZnVt.js.map
