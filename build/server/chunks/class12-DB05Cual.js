const setGenerator = async (chaptern) => {
  let selectedGenerator;
  switch (Number(chaptern)) {
    case 1: {
      let { relations12 } = await import('./relations12-D74i0YOZ.js');
      selectedGenerator = relations12;
      break;
    }
    case 2: {
      let { inverse } = await import('./inverse-CmE9nffz.js');
      selectedGenerator = inverse;
      break;
    }
    case 3: {
      let { matrices } = await import('./matrices-B29c4Irz.js');
      selectedGenerator = matrices;
      break;
    }
    case 4: {
      let { determinants } = await import('./determinants-CF1ZcmU2.js');
      selectedGenerator = determinants;
      break;
    }
    case 5: {
      let { continuity } = await import('./continuity-Bqfw7BC_.js');
      selectedGenerator = continuity;
      break;
    }
    case 6: {
      let { differentiability } = await import('./differentiability-DpRiVjRj.js');
      selectedGenerator = differentiability;
      break;
    }
    case 7: {
      let { appDerivatives } = await import('./appDerivatives-DF3YkYId.js');
      selectedGenerator = appDerivatives;
      break;
    }
    case 8: {
      let { indefinite } = await import('./indefinite-pXBSJisa.js');
      selectedGenerator = indefinite;
      break;
    }
    case 9: {
      let { definite } = await import('./definite-ClgHr_i-.js');
      selectedGenerator = definite;
      break;
    }
    case 10: {
      let { appIntegrals } = await import('./appIntegrals-CJKHsEGt.js');
      selectedGenerator = appIntegrals;
      break;
    }
    case 11: {
      let { differential } = await import('./differential-CVJ2xIvb.js');
      selectedGenerator = differential;
      break;
    }
    case 12: {
      let { vectors } = await import('./vectors-BcSKJDfT.js');
      selectedGenerator = vectors;
      break;
    }
    case 13: {
      let { geometry3d } = await import('./geometry3d-BvVhDG9K.js');
      selectedGenerator = geometry3d;
      break;
    }
    case 14: {
      let { linear } = await import('./linear-BrQZxThT.js');
      selectedGenerator = linear;
      break;
    }
  }
  return selectedGenerator;
};

export { setGenerator };
//# sourceMappingURL=class12-DB05Cual.js.map
