export const setGenerator = async (chaptern) => {
    let selectedGenerator;
    switch(Number(chaptern)) {
        case 1: {
            let {counting} = await import('$lib/mathril/pages/practice/class2/counting.js')
            selectedGenerator = counting; 
            break;
        }
        case 2: {
            let {addition} = await import('$lib/mathril/pages/practice/class2/addition.js')
            selectedGenerator = addition; 
            break;
        }
        case 3: {
            let {subtraction} = await import('$lib/mathril/pages/practice/class2/subtraction.js')
            selectedGenerator = subtraction; 
            break;
        }
        case 4: {
            let {shapes} = await import('$lib/mathril/pages/practice/class2/shapes.js')
            selectedGenerator = shapes; 
            break;
        }
        case 5: {
            let {patterns} = await import('$lib/mathril/pages/practice/class2/patterns.js')
            selectedGenerator = patterns; 
            break;
        }
        case 6: {
            let {times} = await import('$lib/mathril/pages/practice/class2/times.js')
            selectedGenerator = times; 
            break;
        }
        case 7: {
            let {lines} = await import('$lib/mathril/pages/practice/class2/lines.js')
            selectedGenerator = lines; 
            break;
        }
    }
    return selectedGenerator;
}