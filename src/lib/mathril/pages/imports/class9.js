export const setGenerator = async (chaptern) => {
    let selectedGenerator;
    switch (Number(chaptern)) {
        case 1: {
            let { numbersystem } = await import('$lib/mathril/pages/practice/class9/numbersystem.js')
            selectedGenerator = numbersystem;
            break;
        }
        case 2: {
            let { polynomial } = await import('$lib/mathril/pages/practice/class9/polynomial.js')
            selectedGenerator = polynomial;
            break;
        }
        case 3: {
            let { coordinate } = await import('$lib/mathril/pages/practice/class9/coordinate.js')
            selectedGenerator = coordinate;
            break;
        }
        case 4: {
            let { linearequations } = await import('$lib/mathril/pages/practice/class9/linearequations.js')
            selectedGenerator = linearequations;
            break;
        }
        case 5: {
            let { lines } = await import('$lib/mathril/pages/practice/class9/lines.js')
            selectedGenerator = lines;
            break;
        }
        case 6: {
            let { triangles } = await import('$lib/mathril/pages/practice/class9/triangles.js')
            selectedGenerator = triangles;
            break;
        }
        case 7: {
            let { quadrilaterals } = await import('$lib/mathril/pages/practice/class9/quadrilaterals.js')
            selectedGenerator = quadrilaterals;
            break;
        }
        case 8: {
            let { areas } = await import('$lib/mathril/pages/practice/class9/areas.js')
            selectedGenerator = areas;
            break;
        }
        case 9: {
            let { circles } = await import('$lib/mathril/pages/practice/class9/circles.js')
            selectedGenerator = circles;
            break;
        }

        case 10: {
            let { heron } = await import('$lib/mathril/pages/practice/class9/heron.js')
            selectedGenerator = heron;
            break;
        }
        case 11: {
            let { volume } = await import('$lib/mathril/pages/practice/class9/volume.js')
            selectedGenerator = volume;
            break;
        }    
        case 12: {
            let { statistics } = await import('$lib/mathril/pages/practice/class9/statistics.js')
            selectedGenerator = statistics;
            break;
        }
        case 13: {
            let { probability } = await import('$lib/mathril/pages/practice/class9/probability.js')
            selectedGenerator = probability;
            break;
        }
    }
    return selectedGenerator;
}