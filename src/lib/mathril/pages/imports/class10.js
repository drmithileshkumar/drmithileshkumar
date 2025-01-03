export const setGenerator = async (chaptern) => {
    let selectedGenerator;
    switch (Number(chaptern)) {
        case 1: {
            let { real } = await import('$lib/mathril/pages/practice/class10/real.js')
            selectedGenerator = real;
            break;
        }
        case 2: {
            let { polynomial } = await import('$lib/mathril/pages/practice/class10/polynomial.js')
            selectedGenerator = polynomial;
            break;
        }
        case 3: {
            let { linearequations } = await import('$lib/mathril/pages/practice/class10/linearequations.js')
            selectedGenerator = linearequations;
            break;
        }
        case 4: {
            let { quadratic } = await import('$lib/mathril/pages/practice/class10/quadratic.js')
            selectedGenerator = quadratic;
            break;
        }
        case 5: {
            let { ap } = await import('$lib/mathril/pages/practice/class10/ap.js')
            selectedGenerator = ap;
            break;
        }
        case 6: {
            let { triangles } = await import('$lib/mathril/pages/practice/class10/triangles.js')
            selectedGenerator = triangles;
            break;
        }
        case 7: {
            let { coordinate } = await import('$lib/mathril/pages/practice/class10/coordinate.js')
            selectedGenerator = coordinate;
            break;
        }
        case 8: {
            let { trigonometry } = await import('$lib/mathril/pages/practice/class10/trigonometry.js')
            selectedGenerator = trigonometry;
            break;
        }
        case 9: {
            let { circles } = await import('$lib/mathril/pages/practice/class10/circles.js')
            selectedGenerator = circles;
            break;
        }

        case 10: {
            let { areas } = await import('$lib/mathril/pages/practice/class10/areas.js')
            selectedGenerator = areas;
            break;
        }
        case 11: {
            let { volume } = await import('$lib/mathril/pages/practice/class10/volume.js')
            selectedGenerator = volume;
            break;
        }    
        case 12: {
            let { statistics } = await import('$lib/mathril/pages/practice/class10/statistics.js')
            selectedGenerator = statistics;
            break;
        }
        case 13: {
            let { probability } = await import('$lib/mathril/pages/practice/class10/probability.js')
            selectedGenerator = probability;
            break;
        }
    }
    return selectedGenerator;
}