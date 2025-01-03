const setGenerator = async (chaptern) => {
  let selectedGenerator;
  switch (Number(chaptern)) {
    case 1: {
      let { sets } = await import('./sets2-CbU0w2MN.js');
      selectedGenerator = sets;
      break;
    }
    case 2: {
      let { relations } = await import('./relations-FcrLgV2i.js');
      selectedGenerator = relations;
      break;
    }
    case 3: {
      let { trigonometry } = await import('./trigonometry2-CcjfKEie.js');
      selectedGenerator = trigonometry;
      break;
    }
    case 4: {
      let { induction } = await import('./induction-BehmlNdg.js');
      selectedGenerator = induction;
      break;
    }
    case 5: {
      let { complex } = await import('./complex-CQmg2OxQ.js');
      selectedGenerator = complex;
      break;
    }
    case 6: {
      let { quadratic } = await import('./quadratic2-cB2DK3Fz.js');
      selectedGenerator = quadratic;
      break;
    }
    case 7: {
      let { inequalities } = await import('./inequalities-BEwB6VVD.js');
      selectedGenerator = inequalities;
      break;
    }
    case 8: {
      let { combinatorics } = await import('./combinatorics-BBe4JkEm.js');
      selectedGenerator = combinatorics;
      break;
    }
    case 9: {
      let { binomial } = await import('./binomial-D9L2NGfs.js');
      selectedGenerator = binomial;
      break;
    }
    case 10: {
      let { sequences } = await import('./sequences-WDN-G3T5.js');
      selectedGenerator = sequences;
      break;
    }
    case 11: {
      let { line } = await import('./line-SsbgnavU.js');
      selectedGenerator = line;
      break;
    }
    case 12: {
      let { circle } = await import('./circle-BnqwC0HE.js');
      selectedGenerator = circle;
      break;
    }
    case 13: {
      let { parabola } = await import('./parabola-CZAjGOnT.js');
      selectedGenerator = parabola;
      break;
    }
    case 14: {
      let { ellipse } = await import('./ellipse-DZm9BQeS.js');
      selectedGenerator = ellipse;
      break;
    }
    case 15: {
      let { hyperbola } = await import('./hyperbola-CSexht2f.js');
      selectedGenerator = hyperbola;
      break;
    }
    case 16: {
      let { threed } = await import('./threed-DGXe02ke.js');
      selectedGenerator = threed;
      break;
    }
    case 17: {
      let { limits } = await import('./limits-C9iQDUgU.js');
      selectedGenerator = limits;
      break;
    }
    case 18: {
      let { derivatives } = await import('./derivatives-Dcc5wXHU.js');
      selectedGenerator = derivatives;
      break;
    }
    case 19: {
      let { reasoning } = await import('./reasoning-CtgTxSDA.js');
      selectedGenerator = reasoning;
      break;
    }
    case 20: {
      let { statistics } = await import('./statistics3-Ctx1WkS0.js');
      selectedGenerator = statistics;
      break;
    }
    case 21: {
      let { probability } = await import('./probability3-CTmdznxH.js');
      selectedGenerator = probability;
      break;
    }
  }
  return selectedGenerator;
};

export { setGenerator };
//# sourceMappingURL=class11-BK5U7RB3.js.map
