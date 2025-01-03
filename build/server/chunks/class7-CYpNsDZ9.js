const setGenerator = async (chaptern) => {
  let selectedGenerator;
  switch (Number(chaptern)) {
    case 1: {
      let { integers } = await import('./integers2-CDpIME9c.js');
      selectedGenerator = integers;
      break;
    }
    case 2: {
      let { fractions } = await import('./fractions4-BUgWX4hi.js');
      selectedGenerator = fractions;
      break;
    }
    case 3: {
      let { data } = await import('./data2-3hzPzEwJ.js');
      selectedGenerator = data;
      break;
    }
    case 4: {
      let { simpleequations } = await import('./simpleequations-ghUThQ2p.js');
      selectedGenerator = simpleequations;
      break;
    }
    case 5: {
      let { lines } = await import('./lines2-DfIA0m8L.js');
      selectedGenerator = lines;
      break;
    }
    case 6: {
      let { triangle } = await import('./triangle-CFDkBmCa.js');
      selectedGenerator = triangle;
      break;
    }
    case 7: {
      let { comparison } = await import('./comparison-DwiZYPo0.js');
      selectedGenerator = comparison;
      break;
    }
    case 8: {
      let { rational } = await import('./rational-CnUo_V82.js');
      selectedGenerator = rational;
      break;
    }
    case 9: {
      let { practicalgeometry } = await import('./practicalgeometry2-Chle735d.js');
      selectedGenerator = practicalgeometry;
      break;
    }
    case 10: {
      let { perimeter } = await import('./perimeter3-CvHQhZNF.js');
      selectedGenerator = perimeter;
      break;
    }
    case 11: {
      let { algebraic } = await import('./algebraic-BJ9_TUs_.js');
      selectedGenerator = algebraic;
      break;
    }
    case 12: {
      let { exponents } = await import('./exponents-YUpcWmyL.js');
      selectedGenerator = exponents;
      break;
    }
    case 13: {
      let { symmetry } = await import('./symmetry2-BGwNhtS9.js');
      selectedGenerator = symmetry;
      break;
    }
    case 14: {
      let { solids } = await import('./solids-Dzu9MRpg.js');
      selectedGenerator = solids;
      break;
    }
  }
  return selectedGenerator;
};

export { setGenerator };
//# sourceMappingURL=class7-CYpNsDZ9.js.map
