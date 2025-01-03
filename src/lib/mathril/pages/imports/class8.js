export const setGenerator = async (chaptern) => {
    let selectedGenerator;
    switch (Number(chaptern)) {
        case 1: {
            let { rational } = await import('$lib/mathril/pages/practice/class8/rational.js')
            selectedGenerator = rational;
            break;
        }
        case 2: {
            let { linearequations } = await import('$lib/mathril/pages/practice/class8/linearequations.js')
            selectedGenerator = linearequations;
            break;
        }
        case 3: {
            let { quadrilaterals } = await import('$lib/mathril/pages/practice/class8/quadrilaterals.js')
            selectedGenerator = quadrilaterals;
            break;
        }
        case 4: {
            let { practicalgeometry } = await import('$lib/mathril/pages/practice/class8/practicalgeometry.js')
            selectedGenerator = practicalgeometry;
            break;
        }
        case 5: {
            let { data } = await import('$lib/mathril/pages/practice/class8/data.js')
            selectedGenerator = data;
            break;
        }
        case 6: {
            let { squares } = await import('$lib/mathril/pages/practice/class8/squares.js')
            selectedGenerator = squares;
            break;
        }
        case 7: {
            let { cubes } = await import('$lib/mathril/pages/practice/class8/cubes.js')
            selectedGenerator = cubes;
            break;
        }
        case 8: {
            let { comparison } = await import('$lib/mathril/pages/practice/class8/comparison.js')
            selectedGenerator = comparison;
            break;
        }
        case 9: {
            let { algebraic } = await import('$lib/mathril/pages/practice/class8/algebraic.js')
            selectedGenerator = algebraic;
            break;
        }
        case 10: {
            let { shapes } = await import('$lib/mathril/pages/practice/class8/shapes.js')
            selectedGenerator = shapes;
            break;
        }
        case 11: {
            let { mensuration } = await import('$lib/mathril/pages/practice/class8/mensuration.js')
            selectedGenerator = mensuration;
            break;
        }
        case 12: {
            let { powers } = await import('$lib/mathril/pages/practice/class8/powers.js')
            selectedGenerator = powers;
            break;
        }    
        case 13: {
            let { proportions } = await import('$lib/mathril/pages/practice/class8/proportions.js')
            selectedGenerator = proportions;
            break;
        }
        case 14: {
            let { factorization } = await import('$lib/mathril/pages/practice/class8/factorization.js')
            selectedGenerator = factorization;
            break;
        }
        case 15: {
            let { graph } = await import('$lib/mathril/pages/practice/class8/graph.js')
            selectedGenerator = graph;
            break;
        }
        case 16: {
            
            let { numbers } = await import('$lib/mathril/pages/practice/class8/numbers.js')
            selectedGenerator = numbers;
            break;
        }
    }
    return selectedGenerator;
}