//@ts-nocheck
export const setGenerator = async (chaptern) => {
    let selectedGenerator;
    switch(Number(chaptern)) {
        case 1: {
            let {shapes} = await import('$lib/mathril/pages/practice/class1/shapes.js')
            selectedGenerator = shapes; 
            break;
        }
        case 2: {
            let {patterns} = await import('$lib/mathril/pages/practice/class1/patterns.js')
            selectedGenerator = patterns; 
            break;
        }
        case 3: {
            let {counting} = await import('$lib/mathril/pages/practice/class1/counting.js')
            selectedGenerator = counting; 
            break;
        }
        case 4: {
            let {times} = await import('$lib/mathril/pages/practice/class1/times.js')
            selectedGenerator = times; 
            break;
        }
        case 5: {
            let {addition} = await import('$lib/mathril/pages/practice/class1/addition.js')
            selectedGenerator = addition; 
            break;
        }
        case 6: {
            let {subtraction} = await import('$lib/mathril/pages/practice/class1/subtraction.js')
            selectedGenerator = subtraction; 
            break;
        }
    }
    return selectedGenerator;
}