export const setGenerator = async (chaptern) => {
    let selectedGenerator;
    switch(Number(chaptern)) {
        case 1: {
            let {numbers} = await import('$lib/mathril/pages/practice/class6/numbers.js')
            selectedGenerator = numbers; 
            break;
        }
        case 2: {
            let {basicgeometry} = await import('$lib/mathril/pages/practice/class6/basicgeometry.js')
            selectedGenerator = basicgeometry; 
            break;
        }
        case 3: {
            let {shapes} = await import('$lib/mathril/pages/practice/class6/shapes.js')
            selectedGenerator = shapes; 
            break;
        }
        case 4: {
            let {integers} = await import('$lib/mathril/pages/practice/class6/integers.js')
            selectedGenerator = integers; 
            break;
        }
        case 5: {
            let {fractions} = await import('$lib/mathril/pages/practice/class6/fractions.js')
            selectedGenerator = fractions; 
            break;
        }
        case 6: {
            let {decimals} = await import('$lib/mathril/pages/practice/class6/decimals.js')
            selectedGenerator = decimals; 
            break;
        }
        case 7: {
            let {data} = await import('$lib/mathril/pages/practice/class6/data.js')
            selectedGenerator = data; 
            break;
        }
        case 8: {
            let {mensuration} = await import('$lib/mathril/pages/practice/class6/mensuration.js')
            selectedGenerator = mensuration; 
            break;
        }
        case 9: {
            let {algebra} = await import('$lib/mathril/pages/practice/class6/algebra.js')
            selectedGenerator = algebra; 
            break;
        }
        case 10: {
            let {ratios} = await import('$lib/mathril/pages/practice/class6/ratios.js')
            selectedGenerator = ratios; 
            break;
        }
        case 11: {
            let {symmetry} = await import('$lib/mathril/pages/practice/class6/symmetry.js')
            selectedGenerator = symmetry; 
            break;
        }
        case 12: {
            let {practicalgeometry} = await import('$lib/mathril/pages/practice/class6/practicalgeometry.js')
            selectedGenerator = practicalgeometry; 
            break;
        }
    }
    return selectedGenerator;
}