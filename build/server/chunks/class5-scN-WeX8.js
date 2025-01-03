const setGenerator = async (chaptern) => {
  let selectedGenerator;
  switch (Number(chaptern)) {
    case 1: {
      let { multiplication } = await import('./multiplication3-DoBZRLRo.js');
      selectedGenerator = multiplication;
      break;
    }
    case 2: {
      let { division } = await import('./division3-D8Nx4Cmi.js');
      selectedGenerator = division;
      break;
    }
    case 3: {
      let { fractions } = await import('./fractions2-whNIUo3U.js');
      selectedGenerator = fractions;
      break;
    }
    case 4: {
      let { lcms } = await import('./lcms-D17FZRLN.js');
      selectedGenerator = lcms;
      break;
    }
    case 5: {
      let { shapes } = await import('./shapes5-D_XVHCeN.js');
      selectedGenerator = shapes;
      break;
    }
    case 6: {
      let { patterns } = await import('./patterns5-24eioFaE.js');
      selectedGenerator = patterns;
      break;
    }
    case 7: {
      let { length } = await import('./length-C7ILT8Sp.js');
      selectedGenerator = length;
      break;
    }
    case 8: {
      let { weight } = await import('./weight2-DKuCyjwk.js');
      selectedGenerator = weight;
      break;
    }
    case 9: {
      let { volume } = await import('./volume-DoFhOxc4.js');
      selectedGenerator = volume;
      break;
    }
    case 10: {
      let { angles } = await import('./angles-Cw-MCESX.js');
      selectedGenerator = angles;
      break;
    }
    case 11: {
      let { perimeter } = await import('./perimeter2-BVsgkyGm.js');
      selectedGenerator = perimeter;
      break;
    }
    case 12: {
      let { area } = await import('./area-BUCDnKbM.js');
      selectedGenerator = area;
      break;
    }
  }
  return selectedGenerator;
};

export { setGenerator };
//# sourceMappingURL=class5-scN-WeX8.js.map
