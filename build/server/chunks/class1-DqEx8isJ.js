const setGenerator = async (chaptern) => {
  let selectedGenerator;
  switch (Number(chaptern)) {
    case 1: {
      let { shapes } = await import('./shapes-uCjmmE9C.js');
      selectedGenerator = shapes;
      break;
    }
    case 2: {
      let { patterns } = await import('./patterns-DzEN5ghR.js');
      selectedGenerator = patterns;
      break;
    }
    case 3: {
      let { counting } = await import('./counting-CDRW8heI.js');
      selectedGenerator = counting;
      break;
    }
    case 4: {
      let { times } = await import('./times-BGPJsUx2.js');
      selectedGenerator = times;
      break;
    }
    case 5: {
      let { addition } = await import('./addition-LlahhLXF.js');
      selectedGenerator = addition;
      break;
    }
    case 6: {
      let { subtraction } = await import('./subtraction-Bpc-b89J.js');
      selectedGenerator = subtraction;
      break;
    }
  }
  return selectedGenerator;
};

export { setGenerator };
//# sourceMappingURL=class1-DqEx8isJ.js.map
