export const setGenerator = async (chaptern) => {
    let selectedGenerator;
    switch(Number(chaptern)) {
        case 1: {
            let {counting} = await import('$lib/mathril/pages/practice/class3/counting.js')
            selectedGenerator = counting; 
            break;
        }
        case 2: {
            let {addition} = await import('$lib/mathril/pages/practice/class3/addition.js')
            selectedGenerator = addition; 
            break;
        }
        case 3: {
            let {subtraction} = await import('$lib/mathril/pages/practice/class3/subtraction.js')
            selectedGenerator = subtraction; 
            break;
        }
        case 4: {
            let {multiplication} = await import('$lib/mathril/pages/practice/class3/multiplication.js')
            selectedGenerator = multiplication; 
            break;
        }
        case 5: {
            let {division} = await import('$lib/mathril/pages/practice/class3/division.js')
            selectedGenerator = division; 
            break;
        }
        case 6: {
            let {shapes} = await import('$lib/mathril/pages/practice/class3/shapes.js')
            selectedGenerator = shapes; 
            break;
        }
        case 7: {
            let {patterns} = await import('$lib/mathril/pages/practice/class3/patterns.js')
            selectedGenerator = patterns; 
            break;
        }
        case 8: {
            let {times} = await import('$lib/mathril/pages/practice/class3/times.js')
            selectedGenerator = times; 
            break;
        }
    }
    return selectedGenerator;
}