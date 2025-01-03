const setGenerator = async (chaptern) => {
  let selectedGenerator;
  switch (Number(chaptern)) {
    case 1: {
      let { numbersystem } = await import('./numbersystem-Bl7zCuyw.js');
      selectedGenerator = numbersystem;
      break;
    }
    case 2: {
      let { polynomial } = await import('./polynomial-6eBJNKbe.js');
      selectedGenerator = polynomial;
      break;
    }
    case 3: {
      let { coordinate } = await import('./coordinate-DLyPI7c7.js');
      selectedGenerator = coordinate;
      break;
    }
    case 4: {
      let { linearequations } = await import('./linearequations2-Ca4oNPXE.js');
      selectedGenerator = linearequations;
      break;
    }
    case 5: {
      let { lines } = await import('./lines3-DLlZQGnw.js');
      selectedGenerator = lines;
      break;
    }
    case 6: {
      let { triangles } = await import('./triangles-DJYHx-X0.js');
      selectedGenerator = triangles;
      break;
    }
    case 7: {
      let { quadrilaterals } = await import('./quadrilaterals2-CFPwLjA9.js');
      selectedGenerator = quadrilaterals;
      break;
    }
    case 8: {
      let { areas } = await import('./areas-D7XDdMLC.js');
      selectedGenerator = areas;
      break;
    }
    case 9: {
      let { circles } = await import('./circles-CLXaQJDh.js');
      selectedGenerator = circles;
      break;
    }
    case 10: {
      let { heron } = await import('./heron-C8HFNjHb.js');
      selectedGenerator = heron;
      break;
    }
    case 11: {
      let { volume } = await import('./volume2-1BvOSj1E.js');
      selectedGenerator = volume;
      break;
    }
    case 12: {
      let { statistics } = await import('./statistics-DIQ3kfCN.js');
      selectedGenerator = statistics;
      break;
    }
    case 13: {
      let { probability } = await import('./probability-CiQSTxeY.js');
      selectedGenerator = probability;
      break;
    }
  }
  return selectedGenerator;
};

export { setGenerator };
//# sourceMappingURL=class9-BE6TKDZl.js.map
