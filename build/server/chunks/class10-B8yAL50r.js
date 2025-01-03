const setGenerator = async (chaptern) => {
  let selectedGenerator;
  switch (Number(chaptern)) {
    case 1: {
      let { real } = await import('./real-BmWT1Vc9.js');
      selectedGenerator = real;
      break;
    }
    case 2: {
      let { polynomial } = await import('./polynomial2-q6LXpD3h.js');
      selectedGenerator = polynomial;
      break;
    }
    case 3: {
      let { linearequations } = await import('./linearequations3-Dm_y9uwu.js');
      selectedGenerator = linearequations;
      break;
    }
    case 4: {
      let { quadratic } = await import('./quadratic-DrXs4DLN.js');
      selectedGenerator = quadratic;
      break;
    }
    case 5: {
      let { ap } = await import('./ap-CWf7p0Xj.js');
      selectedGenerator = ap;
      break;
    }
    case 6: {
      let { triangles } = await import('./triangles2-ehS2AEfw.js');
      selectedGenerator = triangles;
      break;
    }
    case 7: {
      let { coordinate } = await import('./coordinate2-B3Kx7lcT.js');
      selectedGenerator = coordinate;
      break;
    }
    case 8: {
      let { trigonometry } = await import('./trigonometry-DEz6y8Yx.js');
      selectedGenerator = trigonometry;
      break;
    }
    case 9: {
      let { circles } = await import('./circles2-C-C1wE4S.js');
      selectedGenerator = circles;
      break;
    }
    case 10: {
      let { areas } = await import('./areas2-DBIdyZJM.js');
      selectedGenerator = areas;
      break;
    }
    case 11: {
      let { volume } = await import('./volume3-CR21PtFM.js');
      selectedGenerator = volume;
      break;
    }
    case 12: {
      let { statistics } = await import('./statistics2-U19W72H2.js');
      selectedGenerator = statistics;
      break;
    }
    case 13: {
      let { probability } = await import('./probability2-BbINPJBY.js');
      selectedGenerator = probability;
      break;
    }
  }
  return selectedGenerator;
};

export { setGenerator };
//# sourceMappingURL=class10-B8yAL50r.js.map
