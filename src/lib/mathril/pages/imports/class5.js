export const setGenerator = async (chaptern) => {
    let selectedGenerator;
    switch(Number(chaptern)) {
        case 1: {
            let {multiplication} = await import('$lib/mathril/pages/practice/class5/multiplication.js')
            selectedGenerator = multiplication; 
            break;
        }
        case 2: {
            let {division} = await import('$lib/mathril/pages/practice/class5/division.js')
            selectedGenerator = division; 
            break;
        }
        case 3: {
            let {fractions} = await import('$lib/mathril/pages/practice/class5/fractions.js')
            selectedGenerator = fractions; 
            break;
        }
        case 4: {
            let {lcms} = await import('$lib/mathril/pages/practice/class5/lcms.js')
            selectedGenerator = lcms; 
            break;
        }
        case 5: {
            let {shapes} = await import('$lib/mathril/pages/practice/class5/shapes.js')
            selectedGenerator = shapes; 
            break;
        }
        case 6: {
            let {patterns} = await import('$lib/mathril/pages/practice/class5/patterns.js')
            selectedGenerator = patterns; 
            break;
        }
        case 7: {
            let {length} = await import('$lib/mathril/pages/practice/class5/length.js')
            selectedGenerator = length; 
            break;
        }
        case 8: {
            let {weight} = await import('$lib/mathril/pages/practice/class5/weight.js')
            selectedGenerator = weight; 
            break;
        }
        case 9: {
            let {volume} = await import('$lib/mathril/pages/practice/class5/volume.js')
            selectedGenerator = volume; 
            break;
        }
        case 10: {
            let {angles} = await import('$lib/mathril/pages/practice/class5/angles.js')
            selectedGenerator = angles; 
            break;
        }
        case 11: {
            let {perimeter} = await import('$lib/mathril/pages/practice/class5/perimeter.js')
            selectedGenerator = perimeter; 
            break;
        }
        case 12: {
            let {area} = await import('$lib/mathril/pages/practice/class5/area.js')
            selectedGenerator = area; 
            break;
        }
    }
    return selectedGenerator;
}