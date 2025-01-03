const setGenerator = async (chaptern) => {
  let selectedGenerator;
  switch (Number(chaptern)) {
    case 1: {
      let { numbers } = await import('./numbers-EV8UCe15.js');
      selectedGenerator = numbers;
      break;
    }
    case 2: {
      let { basicgeometry } = await import('./basicgeometry-CI6JSu93.js');
      selectedGenerator = basicgeometry;
      break;
    }
    case 3: {
      let { shapes } = await import('./shapes6-zyQQeWIZ.js');
      selectedGenerator = shapes;
      break;
    }
    case 4: {
      let { integers } = await import('./integers-PaUvpMNT.js');
      selectedGenerator = integers;
      break;
    }
    case 5: {
      let { fractions } = await import('./fractions3-jjZI5its.js');
      selectedGenerator = fractions;
      break;
    }
    case 6: {
      let { decimals } = await import('./decimals-CIxeG54h.js');
      selectedGenerator = decimals;
      break;
    }
    case 7: {
      let { data } = await import('./data-BdDvqkEm.js');
      selectedGenerator = data;
      break;
    }
    case 8: {
      let { mensuration } = await import('./mensuration-DP_tjDzQ.js');
      selectedGenerator = mensuration;
      break;
    }
    case 9: {
      let { algebra } = await import('./algebra-B78b2FYD.js');
      selectedGenerator = algebra;
      break;
    }
    case 10: {
      let { ratios } = await import('./ratios-BJHEfF_L.js');
      selectedGenerator = ratios;
      break;
    }
    case 11: {
      let { symmetry } = await import('./symmetry-Dfln9dYr.js');
      selectedGenerator = symmetry;
      break;
    }
    case 12: {
      let { practicalgeometry } = await import('./practicalgeometry-CKJRP78D.js');
      selectedGenerator = practicalgeometry;
      break;
    }
  }
  return selectedGenerator;
};

export { setGenerator };
//# sourceMappingURL=class6-Ct23ytpb.js.map
