const setGenerator = async (chaptern) => {
  let selectedGenerator;
  switch (Number(chaptern)) {
    case 1: {
      let { rational } = await import('./rational2-DzV74GpN.js');
      selectedGenerator = rational;
      break;
    }
    case 2: {
      let { linearequations } = await import('./linearequations-BQRTF0_S.js');
      selectedGenerator = linearequations;
      break;
    }
    case 3: {
      let { quadrilaterals } = await import('./quadrilaterals-DrPhlO_t.js');
      selectedGenerator = quadrilaterals;
      break;
    }
    case 4: {
      let { practicalgeometry } = await import('./practicalgeometry3-D0UncjFx.js');
      selectedGenerator = practicalgeometry;
      break;
    }
    case 5: {
      let { data } = await import('./data3-BQ1A9U-A.js');
      selectedGenerator = data;
      break;
    }
    case 6: {
      let { squares } = await import('./squares-Cw3lGkLu.js');
      selectedGenerator = squares;
      break;
    }
    case 7: {
      let { cubes } = await import('./cubes-CBhxj6hO.js');
      selectedGenerator = cubes;
      break;
    }
    case 8: {
      let { comparison } = await import('./comparison2-CSTqFnxq.js');
      selectedGenerator = comparison;
      break;
    }
    case 9: {
      let { algebraic } = await import('./algebraic2-CnNK5iXr.js');
      selectedGenerator = algebraic;
      break;
    }
    case 10: {
      let { shapes } = await import('./shapes7-BEmcgBC3.js');
      selectedGenerator = shapes;
      break;
    }
    case 11: {
      let { mensuration } = await import('./mensuration2-BJqaSWWn.js');
      selectedGenerator = mensuration;
      break;
    }
    case 12: {
      let { powers } = await import('./powers-CNMYCJI_.js');
      selectedGenerator = powers;
      break;
    }
    case 13: {
      let { proportions } = await import('./proportions-BL6tk9ko.js');
      selectedGenerator = proportions;
      break;
    }
    case 14: {
      let { factorization } = await import('./factorization-B7xXpEs6.js');
      selectedGenerator = factorization;
      break;
    }
    case 15: {
      let { graph } = await import('./graph-CpuKPEGL.js');
      selectedGenerator = graph;
      break;
    }
    case 16: {
      let { numbers } = await import('./numbers2-DEXTEJyn.js');
      selectedGenerator = numbers;
      break;
    }
  }
  return selectedGenerator;
};

export { setGenerator };
//# sourceMappingURL=class8-BmBnixWc.js.map
