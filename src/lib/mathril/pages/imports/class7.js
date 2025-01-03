export const setGenerator = async (chaptern) => {
    let selectedGenerator;
    switch (Number(chaptern)) {
        case 1: {
            let { integers } = await import('$lib/mathril/pages/practice/class7/integers.js')
            selectedGenerator = integers;
            break;
        }
        case 2: {
            let { fractions } = await import('$lib/mathril/pages/practice/class7/fractions.js')
            selectedGenerator = fractions;
            break;
        }
        case 3: {
            let { data } = await import('$lib/mathril/pages/practice/class7/data.js')
            selectedGenerator = data;
            break;
        }
        case 4: {
            let { simpleequations } = await import('$lib/mathril/pages/practice/class7/simpleequations.js')
            selectedGenerator = simpleequations;
            break;
        }
        case 5: {
            let { lines } = await import('$lib/mathril/pages/practice/class7/lines.js')
            selectedGenerator = lines;
            break;
        }
        case 6: {
            let { triangle } = await import('$lib/mathril/pages/practice/class7/triangle.js')
            selectedGenerator = triangle;
            break;
        }

        case 7: {
            let { comparison } = await import('$lib/mathril/pages/practice/class7/comparison.js')
            selectedGenerator = comparison;
            break;
        }

        case 8: {
            let { rational } = await import('$lib/mathril/pages/practice/class7/rational.js')
            selectedGenerator = rational;
            break;
        }
        case 9: {
            let { practicalgeometry } = await import('$lib/mathril/pages/practice/class7/practicalgeometry.js')
            selectedGenerator = practicalgeometry;
            break;
        }
        case 10: {
            let { perimeter } = await import('$lib/mathril/pages/practice/class7/perimeter.js')
            selectedGenerator = perimeter;
            break;
        }
        case 11: {
            let { algebraic } = await import('$lib/mathril/pages/practice/class7/algebraic.js')
            selectedGenerator = algebraic;
            break;
        }
        case 12: {
            let { exponents } = await import('$lib/mathril/pages/practice/class7/exponents.js')
            selectedGenerator = exponents;
            break;
        }
        case 13: {
            let { symmetry } = await import('$lib/mathril/pages/practice/class7/symmetry.js')
            selectedGenerator = symmetry;
            break;
        }
        case 14: {
            let { solids } = await import('$lib/mathril/pages/practice/class7/solids.js')
            selectedGenerator = solids;
            break;
        }
    }
    return selectedGenerator;
}