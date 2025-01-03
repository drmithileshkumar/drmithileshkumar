export const setGenerator = async (chaptern) => {
    let selectedGenerator;
    switch(Number(chaptern)) {
        case 1: {
            let {addition} = await import('$lib/mathril/pages/practice/class4/addition.js')
            selectedGenerator = addition; 
            break;
        }
        case 2: {
            let {subtraction} = await import('$lib/mathril/pages/practice/class4/subtraction.js')
            selectedGenerator = subtraction; 
            break;
        }
        case 3: {
            let {multiplication} = await import('$lib/mathril/pages/practice/class4/multiplication.js')
            selectedGenerator = multiplication; 
            break;
        }
        case 4: {
            let {division} = await import('$lib/mathril/pages/practice/class4/division.js')
            selectedGenerator = division; 
            break;
        }
        case 5: {
            let {fractions} = await import('$lib/mathril/pages/practice/class4/fractions.js')
            selectedGenerator = fractions; 
            break;
        }
        case 6: {
            let {shapes} = await import('$lib/mathril/pages/practice/class4/shapes.js')
            selectedGenerator = shapes; 
            break;
        }
        case 7: {
            let {patterns} = await import('$lib/mathril/pages/practice/class4/patterns.js')
            selectedGenerator = patterns; 
            break;
        }
        case 8: {
            let {times} = await import('$lib/mathril/pages/practice/class4/times.js')
            selectedGenerator = times; 
            break;
        }
        case 9: {
            let {weight} = await import('$lib/mathril/pages/practice/class4/weight.js')
            selectedGenerator = weight; 
            break;
        }
        case 10: {
            let {perimeter} = await import('$lib/mathril/pages/practice/class4/perimeter.js')
            selectedGenerator = perimeter; 
            break;
        }
    }
    return selectedGenerator;
}